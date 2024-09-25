import { Character } from './MotW/Character/Character'
import { CharacterSummary } from './MotW/CharacterSummary'
import { validate } from 'uuid';
import { get, writable, type Readable, type Writable, type Updater } from 'svelte/store'
import { Account } from './Account';
import type { ModelState, ValidationProblemDetails } from './ModelState';
import { type CharacterData, CharacterModel } from "./MotW/Character/CharacterModel.svelte";


function loadLocation(): Readable<string> {
  const store = writable(document.location.href);
  const { subscribe, set, update } = store;
  
  let oldHref = document.location.href;
  const body = document.querySelector("body");
  const observer = new MutationObserver(mutations => {
    if (oldHref !== document.location.href) {
      console.log("loc: " + document.location.href)
      oldHref = document.location.href;
      set(oldHref);
    }
  });
  observer.observe(body, { childList: true, subtree: true });

  return { subscribe };
}

export const locationHref = loadLocation();

const API_URL = import.meta.env.API_URL

const KeyPrefix = "Characters/"
const isBrowser = typeof window !== 'undefined';
console.log("IsBrowser: " + isBrowser)

const createAccountStore = () => {
  const store = writable<Account|null>(null);
  const { subscribe, set, update } = store;

  fetch(API_URL + "Api/Account/", {
    method: "GET",
    credentials: 'include',
    headers: {
      Accept: "application/json",
    },
  }).then( response => {
    if (response.ok) {
      response.json().then( o => set( Object.assign( new Account(), o ) ));
    }
    else {
      console.log( response.statusText );
    }
  });

  return {
    subscribe,
    set,
    update,
    
    createAccount: async ( name: string, email: string, password: string, errorCallback: (errors: string[])=>void ) => {
      if (get(store)) {
        errorCallback([ "Already logged-in. Log out first." ]);
        return;
      }
      const response = await fetch(API_URL + "Api/Account/Create", {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      
      switch (response.status) {
        case 200: { // OK
          response.json().then( o => set( Object.assign( new Account(), o ) ));
        } break;
        case 400: { // Bad Request
          response.json().then( o =>{
            let errors = Object.values((o as ValidationProblemDetails).errors).flatMap( v => v );
            errorCallback(errors);
          });
        } break;
        case 422: { // Client Error
          response.json().then( o => {
            let errors = Object.values(o as {[key:string]: string}).flatMap( v => v )
            errorCallback(errors);
          });
        } break;
        default: {
          console.error( `Unrecognized response status ${response.status}: ${response.statusText}.` );
        } break;
      }
    },

    login: async ( login: string, password: string, errorCallback: (errors: string[])=>void ) => {
      if (get(store)) {
        console.log("Tried to login while already logged in. Log out first.")
        return;
      }
      const response = await fetch(API_URL + "Api/Account/Login", {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      switch (response.status) {
        case 200: {
          response.json().then( o => set( Object.assign( new Account(), o ) ));
        } break;
        case 400: {
          response.json().then( o =>{
            let errors = Object.values((o as ValidationProblemDetails).errors).flatMap( v => v );
            errorCallback(errors);
          });
        } break;
        case 401: {
          response.json().then( o => {
            let errors = Object.values(o as ModelState).flatMap( v => v.errors.map( e => e.errorMessage ))
            errorCallback(errors);
          });
        } break;
        default: {
          console.error( "Unrecognized response status '" + response.status + ": " + response.statusText + "'" );
        } break;
      }
    },

    logout: async () => {
      await fetch(API_URL + "Api/Account/Logout", {
        method: "POST",
        credentials: 'include',
      })
      .then(
        r => { // TEST: All stores need clearing. Is reload enough?
          account.set( null );
          location.reload();
        }, 
        e => console.log( e )
      );
    },
    
    updateAccount: async (
        name: string|null, email: string|null, password: string|null, currentPassword: string,
        successCallback: ()=>void, errorCallback: (errors: string[])=>void ) => {
      const response = await fetch(API_URL + "Api/Account", {
        method: "PUT",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, password, currentPassword }),
      });
      switch (response.status) {
        case 200: { // Ok
          response.json().then( o => set( Object.assign( new Account(), o ) ));
          successCallback();
        } break;
        case 400: { // Bad Request
          response.json().then( o =>{
            let errors = Object.values((o as ValidationProblemDetails).errors).flatMap( v => v );
            errorCallback(errors);
          });
        } break;
        case 401: { // Unauthorized
          response.json().then( o => {
            let errors = Object.values(o as ModelState).flatMap( v => v.errors.map( e => e.errorMessage ))
            errorCallback(errors);
          });
        } break;
        case 422: { // Client Error
          response.json().then( o => {
            let errors = Object.values(o as {[key:string]: string}).flatMap( v => v )
            errorCallback(errors);
          });
        } break;
        default: {
          console.error( "Unrecognized response status '" + response.status + ": " + response.statusText + "'" );
        } break;
      }
    }
  };
}

export const account = createAccountStore();



const getCharacters = async () => fetch(API_URL + "Api/Characters/", {
  method: "GET",
  credentials: 'include',
  headers: { Accept: "application/json" },
});
function createCallback_GetCharacters_SetStore(guard: object, set: (this: void, value: CharacterSummary[]) => void): (response: Response) => void {
  const inner = guard = {}
  return (response) => {
    if (guard !== inner) return;
    if (response.ok) {
      response.json().then( l => {
        let chars: CharacterSummary[] = l.map( (o: object) => Object.assign( new CharacterSummary(), o ) )
        set( chars )
      });
    }
    else {
      // TODO: Should we clear it?
      set( [] );
      console.log( response.statusText );
    }
  }
};


const postCharacter = async () => fetch(API_URL + "Api/Characters/", {
  method: "POST",
  credentials: 'include',
  headers: { Accept: "application/json" },
});
function createCallback_PostCharacter_UpdateStore(guard: object, update: (this: void, updater: Updater<CharacterSummary[]>) => void, newIdCallback: (id:string)=>void) {
  const inner = guard = {}
  return (response: Response): void => {
    if (response.ok) {
      response.json().then( o => {
        if (guard === inner) {
          let newChar: CharacterSummary = o.map( (o: object) => Object.assign( new CharacterSummary(), o ) )
          update( (chars: CharacterSummary[]) => { chars.push(newChar); return chars; } )
          newIdCallback( newChar.id );
        }
      });
    }
    else {
      // TODO: Should we clear it?
      console.log( response.statusText );
    }
  }
};


function loadCharacters() {
  var characters: CharacterSummary[] = [];

  const { subscribe, set, update } = writable(characters)

	let guard = {}

  Promise.resolve(getCharacters()).then(createCallback_GetCharacters_SetStore(guard, set));

  return {
    subscribe,
    refresh: () => { Promise.resolve(getCharacters()).then(createCallback_GetCharacters_SetStore(guard, set)) },
    create: (newIdCallback: (id:string)=>void) => { Promise.resolve(postCharacter()).then(createCallback_PostCharacter_UpdateStore(guard, update, newIdCallback)) },
  };
}

export const characterSummaries = loadCharacters();


// _____ /Character/:id ____

const getCharacterRequest = async (id: string) => fetch(API_URL + "Api/Characters/" + id, {
  method: "GET",
  credentials: 'include',
  headers: { Accept: "application/json" },
});
function createCallback_GetCharacter_SetStore(guard: object, set: (this: void, value: Character) => void): (response: Response) => void {
  const inner = guard = {}
  return (response) => {
    if (guard !== inner) return;
    if (response.ok) {
      response.json().then( o => { set( Object.assign( new Character(), o ) ) });
    }
    else {
      console.log( response.statusText );
    }
  }
};


const putCharacter = async (character: Character) => fetch(API_URL + "Api/Characters/" + character.id, {
  method: "PUT",
  credentials: 'include',
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify( character ),
});
function createCallback_PutCharacter_UpdateStore(guard: object, set: (this: void, value: Character) => void): (response: Response) => void {
  const inner = guard = {}
  return (response) => {
    if (response.ok) {
      response.json().then( o => {
        if (guard === inner){
          set( Object.assign( new Character(), o ) )
        }
      });
    }
    else {
      // TODO: Should we clear it?
      console.log( response.statusText );
    }
  }
};



const localCharKey = "MotwCharacter/local";

function createLocalCharacter(): CharacterModel {
  let character = $state(new CharacterModel());

  if (isBrowser) {
    // Get it from local storage
    const raw = localStorage.getItem(localCharKey)
    if (raw !== null) {
      console.log( "Loading char " + raw );
      Object.assign(character, JSON.parse(raw));
      console.log( "Loaded " + character.name );
      // TODO: How would we update an old stored value? Ask Server to do it?
    }
    else {
      console.log( "Creating new char in local store" )
      localStorage.setItem(localCharKey, character.toJson())
    }
    
    $effect.root(() => {
      $effect(() => {
        console.log("Saving char to local store")
        if (!isBrowser) return;
        localStorage.setItem(localCharKey, character.toJson());
      })
    })
  }

  return character;
}

export const localCharacter = createLocalCharacter();



const characters: {[id: string]: Writable<Character>} = {}

export function getCharacter(id: string): Writable<Character> {
  if (Object.hasOwn( characters, id )) { return characters[id]; }

	let guard = {}
  const store = writable(new Character(id));
  const { subscribe, set, update } = store;

  if (!validate(id)) {
    console.error("Invalid id '" + id + "'")
    return { subscribe, set, update }
  }

  // Try initial get from the server
  Promise.resolve(getCharacterRequest(id)).then(createCallback_GetCharacter_SetStore(guard, set));

  const charStore: Writable<Character> = {
    subscribe,
    set: (newChar) => {
      console.log( "Set char" );
      if (id != newChar.id) { console.error("Id did not match"); return; }
      Promise.resolve(putCharacter(newChar)).then(createCallback_GetCharacter_SetStore(guard, set));
    },
    update: (updater) => {
      console.log( "Update char" )
      const updated = updater(get(store));
      Promise.resolve(putCharacter(updated)).then(createCallback_GetCharacter_SetStore(guard, set));
    }
  }
  characters[id] = charStore
  return charStore;
}
