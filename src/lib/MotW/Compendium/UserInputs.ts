import {type Feat, FeatType} from "./CompendiumTypes";
import {ItemTag} from "./Tags";

export enum InputTypes {
  Text = "Text", TextArea = "Textarea", TextChoice = "TextChoice", Checks = "Checks",
  FeatChoice = "FeatChoice", FeatChoiceById = "FeatChoiceById",
  Character = "Character", Hunter = "Hunter",
}

export enum CharacterTypes {
  Bystander = "Bystander", Ally = "Ally", Minion = "Minion", Monster = "Monster",
}

export enum AllyType {
  Subordinate = "subordinate", Lieutenant = "lieutenant", Friend = "friend", Bodyguard = "bodyguard",
  Confidante = "confidante", Backup = "backup"
}
export const AllyMotivations: {[key in AllyType]: string} = {
  subordinate: "to follow your exact instructions",
  lieutenant: "to execute the spirit of your instructions",
  friend: "to provide emotional support",
  bodyguard: "to intercept danger",
  confidante: "to give you advice and perspective",
  backup: "to stand with you",
}
export function getAllyMotivation( ally: AllyType ) { return AllyMotivations[ally] }

export enum BystanderTypes {
  Busybody = "busybody", Detective = "detective", Gossip = "gossip", Helper = "helper", Innocent = "innocent",
  Mentor = "mentor", Official = "official", Skeptic = "skeptic", Victim = "victim", Witness = "witness"
}
export const BystanderMotivations: {[key in BystanderTypes]: string} = {
  busybody: "to interfere in other people's plans",
  detective:  "to rule out explanations",
  gossip: "to pass on rumours",
  helper: "to join the hunt",
  innocent: "to do the right thing",
  mentor: "to provide wisdom or guidance",
  official: "to be suspicious",
  skeptic: "to deny supernatural explanations",
  victim: "to put themselves in danger",
  witness: "to reveal information",
}
export function getBystanderMotivation( bystander: BystanderTypes ) { return BystanderMotivations[bystander] }

export enum MinionType {
 Assassin = "Assassin", Brute = "Brute", Cultist = "Cultist", Guardian = "Guardian", RightHand = "RightHand", Plague = "Plague",
 Renfield = "Renfield", Scout = "Scout", Thief = "Thief", Traitor = "Traitor",
}
export const MinionMotivations: {[key in MinionType]: string} = {
  Assassin: "to kill the hunters",
  Brute: "to intimidate and attack",
  Cultist: "to save their own skin at any cost",
  Guardian: "to bar a way or protect something",
  RightHand: "to back up the monster",
  Plague: "to swarm and destroy",
  Renfield: "to push victims towards the monster",
  Scout: "to stalk, watch, and report",
  Thief: "to steal and deliver to the monster",
  Traitor: "to betray people",
}
export function getMinionMotivation( minion: MinionType ) { return MinionMotivations[minion] }

export enum MonsterType {
  Beast = "Beast", Breeder = "Breeder", Collector = "Collector", Destroyer = "Destroyer", Devourer = "Devourer",
  Executioner = "Executioner", Parasite = "Parasite", Queen = "Queen", Sorcerer = "Sorcerer", Tempter = "Tempter",
  Torturer = "Torturer", Trickster = "Trickster",
  }
export const MonsterMotivations: {[key in MonsterType]: string} = {
  Beast: "to run wild, destroying and killing",
  Breeder: "to give birth to, bring forth, or create evil",
  Collector: "to steal specific sorts of things",
  Destroyer: "to bring about the end of the world",
  Devourer: "to consume people",
  Executioner: "to punish the guilty",
  Parasite: "to infest, control and devour",
  Queen: "to possess and control",
  Sorcerer: "to usurp unnatural power",
  Tempter: "to tempt people into evil deeds",
  Torturer: "to hurt and terrify",
  Trickster: "to create chaos",
}
export function getMonsterMotivation( monster: MonsterType ) { return MonsterMotivations[monster] }

export interface TagChoice {
  key: string,
  label: string;
  choose?: number, // Default 1. They must choose at least that many.
  chooseMax?: number, // If set to 0, there is no max. Defaults: equal to ^choose above.
  options: Readonly<Array<ItemTag>>; // Can be used for bad options if bad options is not needed.
}

interface BaseInput {
  label: string; // Short name for the field
  key: string;
  inputType: InputTypes;
  subLabel?: string; // For more detailed descriptions or instructions.
}

export interface Text extends BaseInput {
  inputType: InputTypes.Text;
  placeholder?: string;
}
export interface TextArea extends BaseInput {
  inputType: InputTypes.TextArea;
  placeholder?: string;
}

export interface Checks extends BaseInput {
  inputType: InputTypes.Checks;
  max: number;
  reset?: number; // defaults 0;
  resetPerMystery?: boolean; // defaults false;
}

export interface BaseChoiceInput extends BaseInput {
  choose: number; // For some, if negative, they must choose at least that many or more.
  chooseMax?: number; // If set to 0, there is no max. Defaults: same as ^choose above.
  allowCustom?: boolean; // Default: false. For 'Feat' choices, this will probably only allow custom items (until later.)
  defaults?: Array<string>; // Allows you to pick a default option for them, then they can change it if they want.
}
export interface TextChoice extends BaseChoiceInput {
  inputType: InputTypes.TextChoice;
  options: Array<string>|Array<[string,string]>; // if two strings in an array, the first is a name and the second a description
}
export interface FeatChoice extends BaseChoiceInput {
  inputType: InputTypes.FeatChoice;
  options: Array<Feat>;
}
export interface FeatChoiceById extends BaseChoiceInput {
  inputType: InputTypes.FeatChoiceById;
  options: Array<string>;
}
type CharacterInput = Text|TextArea|Checks|TextChoice;
export interface Characters extends BaseInput {
  startingType: CharacterTypes;
  startingSubType?: AllyType|BystanderTypes|MinionType|MonsterType; // if left off, Keeper can choose
  crewMin?: number; // default is 1
  crewMax?: number; // default is 1
  inputs?: Array<CharacterInput>; // If provided with a crew>1, these inputs will be asked for each NPC individually.
}

export interface Hunters extends BaseInput {
  inputType: InputTypes.Hunter;
  inputs?: Array<CharacterInput>; // If provided with a crew>1, these inputs will be asked for each NPC individually.
} // TODO: Will be overlapped with history and other hunter stuff. Can we merge them somehow?

export type UserInput =
  Text|TextArea|TextChoice|Checks|
  FeatChoice|FeatChoiceById|
  Characters|Hunters;
