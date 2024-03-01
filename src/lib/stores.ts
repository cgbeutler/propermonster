import { get, writable, type Readable, type Writable } from 'svelte/store'


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
