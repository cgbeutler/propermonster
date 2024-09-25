import {AllyType, BystanderTypes, CharacterTypes, type InputTypes, MinionType, MonsterType} from "./UserInputs";
import {ItemTag} from "./Tags";

export interface TagData {
  tags: Array<ItemTag|string>;
}

export interface BaseInputData {
  inputType: InputTypes;
}

export interface TextData extends BaseInputData {
  inputType: InputTypes.Text|InputTypes.TextArea;
  text: string;
}

export interface TextChoiceData extends BaseInputData {
  inputType: InputTypes.TextChoice;
  chosen: string[];
}

export interface ChecksData extends BaseInputData {
  inputType: InputTypes.Checks;
  checked: number;
}

export interface FeatChoiceData extends BaseInputData {
  inputType: InputTypes.FeatChoice|InputTypes.FeatChoiceById;
  chosen: string[];
}

type CharacterInputData = TextData|TextChoiceData|ChecksData;
export interface CharacterData {
  name: string,
  characterType: CharacterTypes;
  characterSubTye: AllyType|BystanderTypes|MinionType|MonsterType;
  notes: string;
  inputData?: Array<CharacterInputData>;
}

export interface CharactersData extends BaseInputData {
  // Note that the input may not match with their type, if it was changed by something.
  inputType: InputTypes.Character;
  characters: Array<CharacterData>;
}

export interface HunterData {
  userId: string;
  characterId: string;
  notes: string;
  inputData?: Array<CharacterInputData>;
}
export interface HuntersData extends BaseInputData {
  inputType: InputTypes.Hunter;
  hunters: Array<HunterData>;
} // Will be overlapped with history and other hunter stuff.

export type UserInputData =
  TextData|TextChoiceData|ChecksData|FeatChoiceData|CharactersData;
