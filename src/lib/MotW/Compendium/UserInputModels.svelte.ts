import {
  type Characters, type Checks, type FeatChoice, type FeatChoiceById, InputTypes, type TagChoice,
  type Text,
  type TextArea,
  type TextChoice,
  type UserInput
} from "./UserInputs";
import type {
  BaseInputData,
  CharactersData,
  ChecksData,
  FeatChoiceData, TagData,
  TextChoiceData,
  TextData,
  UserInputData
} from "./UserInputData";

function _validateChoice( chosen: number, min: number, max: number|undefined ): boolean {
  if (chosen < min) return false;
  if (max === undefined) return chosen === min;
  if (max === 0) return true;
  return chosen <= max;
}

export class TagInputModel {
  public readonly input: TagChoice;
  public readonly data: TagData = $state({tags: []});
  public get chosen() { return this.data.tags.length }

  public get isValid() {
    return _validateChoice(this.chosen, this.input.choose??1, this.input.chooseMax);
  }

  public constructor(input: TagChoice, data: TagData|undefined) {
    this.input = input;
    if (data != undefined) this.data = data;
  }
}



interface BaseInputModel {
  readonly id: string;
  readonly input: UserInput;
  data: UserInputData;
  isValid: boolean;
}

export class TextModel implements BaseInputModel {
  public readonly id: string;
  public readonly input: Text;
  public data: TextData = $state({inputType: InputTypes.Text, text: ""});
  
  private _isValid: boolean = $derived(!!((this.data as TextData).text));
  public get isValid() { return this._isValid }

  public constructor(input: Text, data: BaseInputData|undefined) {
    this.id = input.key;
    this.input = input;
    if (data?.inputType === InputTypes.Text) this.data = data as TextData;
  }
}

export class TextAreaModel implements BaseInputModel {
  public readonly id: string;
  public readonly input: TextArea;
  public data: TextData = $state({inputType: InputTypes.TextArea, text: ""});

  public get isValid() { return true }

  public constructor(input: TextArea, data: BaseInputData|undefined) {
    this.id = input.key;
    this.input = input;
    if (data?.inputType === InputTypes.TextArea) this.data = data as TextData;
  }
}

export class TextChoiceModel implements BaseInputModel {
  public readonly id: string;
  public readonly input: TextChoice;
  public data: TextChoiceData = $state({inputType: InputTypes.TextChoice, chosen: []});

  private _isValid: boolean = $derived.by( () => {
    return _validateChoice(this.data.chosen.length, this.input.choose, this.input.chooseMax);
  });
  public get isValid() { return this._isValid }

  public constructor(input: TextChoice, data: BaseInputData|undefined) {
    this.id = input.key;
    this.input = input;
    if (data?.inputType === InputTypes.TextChoice) this.data = data as TextChoiceData;
    else if (this.input.defaults && this.input.defaults.length > 0) {
      this.data.chosen = Array.from(this.input.defaults);
    }
  }
}

export class ChecksModel implements  BaseInputModel {
  public readonly id: string;
  public readonly input: Checks;
  public data: ChecksData = $state({inputType: InputTypes.Checks, checked: 0});
  public get isValid() { return true }

  public constructor(input: Checks, data: BaseInputData|undefined) {
    this.id = input.key;
    this.input = input;
    if (data?.inputType === InputTypes.Checks) this.data = data as ChecksData;
  }
}

export class FeatChoiceModel implements BaseInputModel {
  public readonly id: string;
  public readonly input: FeatChoice|FeatChoiceById;
  public data: FeatChoiceData = $state({inputType: InputTypes.FeatChoice, chosen: []});

  private _isValid: boolean = $derived.by( ()=> {
    if (!_validateChoice(this.data.chosen.length, this.input.choose, this.input.chooseMax)) return false;
    // TODO: Also validate the choices made
    return true;
  });
  public get isValid() { return this._isValid }

  public constructor(input: FeatChoice|FeatChoiceById, data: BaseInputData|undefined) {
    this.id = input.key;
    this.input = input;
    if (data?.inputType === InputTypes.FeatChoice) this.data = data as FeatChoiceData;
    else if (this.input.defaults && this.input.defaults.length > 0) {
      this.data.chosen = Array.from(this.input.defaults);
    }
  }
}

export class CharactersModel implements BaseInputModel {
  public readonly id: string;
  public readonly input: Characters;
  public data: CharactersData = $state({inputType: InputTypes.Character, characters: []});

  private _isValid: boolean = $derived.by(() => {
    return _validateChoice(this.data.characters.length, this.input.crewMin ?? 1, this.input.crewMax);
  });
  public get isValid() { return this._isValid }

  public constructor(input: Characters, data: BaseInputData|undefined) {
    this.id = input.key;
    this.input = input;
    if (data?.inputType === InputTypes.Character) this.data = data as CharactersData;
  }
}

export type UserInputModel =
  TextModel|TextAreaModel|TextChoiceModel|ChecksModel|
  FeatChoiceModel|//FeatChoiceById|
  CharactersModel;//|Hunters;

// export class InputModel {
//   public readonly id: string;
//   public readonly input: UserInput;
//   public readonly data: UserInputData;
//  
//   private _chosen: number = $derived.by(() => {
//     let c = this.data.hasOwnProperty("chosen") ? ((this.data as any).chosen as Array<string>).length : 0;
//     if (c !== 0) return c;
//     if (this.input.hasOwnProperty("defaults")) return ((this.input as any).defaults as Array<string>).length;
//     return 0;
//   });
//   public get chosen() { return this._chosen }
//  
//   public get isValid() {
//     let type = this.input.inputType;
//     // These are always fine.
//     if (type === InputTypes.TextArea || type === InputTypes.Checks) return true;
//     // Text should have a text data value
//     if (type === InputTypes.Text) {
//       if (this.data === undefined || this.data.inputType !== InputTypes.Text) return false;
//       return !!((this.data as TextData).text);
//     }
//     // Text choice should have matching string count
//     if (type === InputTypes.TextChoice) {
//       let tInput = (this.input as TextChoice);
//       return _validateChoice(this.chosen, tInput.choose, tInput.chooseMax);
//     }
//     // FeatChoice, FeatChoiceByType, and FeatChoiceById should have feat data value
//     if (type === InputTypes.FeatChoice || type === InputTypes.FeatChoiceById) {
//       let tInput = (this.input as BaseChoiceInput);
//       if (!_validateChoice(this.chosen, tInput.choose, tInput.chooseMax)) return false;
//       // TODO: Also validate each feature within.
//       return true;
//     }
//     if (type === InputTypes.Character) {
//       let tInput = (this.input as BaseChoiceInput);
//       if (!_validateChoice(this.chosen, tInput.choose, tInput.chooseMax)) return false;
//       // TODO: Also validate everything in each character?
//       return true;
//     }
//     if (type == InputTypes.Hunter) {
//       // TODO: Validate hunter choices, once we know how we want to do this in the first place.
//       return true;
//     }
//    
//     console.error( "Unhandled type '" + type + "' in validation");
//     return true;
//   }
//  
//   public constructor(input: UserInput, data: UserInputData) {
//     this.id = input.key;
//     this.input = input;
//     this.data = $state(data);
//   }
// }