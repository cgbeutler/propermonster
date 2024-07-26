import {type Feat, FeatType} from "./CompendiumTypes";

export enum InputTypes {
  Text = "Text", TextArea = "Textarea", TextChoice = "TextChoice", Checks = "Checks",
  FeatChoice = "FeatChoice", FeatChoiceByType = "FeatChoiceByType", FeatChoiceById = "FeatChoiceById",
  Hunter = "Hunter", Ally = "Ally", Bystander = "Bystander", Minion = "Minion", Monster = "Monster",
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

export enum BystanderType {
  Busybody = "busybody", Detective = "detective", Gossip = "gossip", Helper = "helper", Innocent = "innocent",
  Mentor = "mentor", Official = "official", Skeptic = "skeptic", Victim = "victim", Witness = "witness"
}
export const BystanderMotivations: {[key in BystanderType]: string} = {
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
export function getBystanderMotivation( bystander: BystanderType ) { return BystanderMotivations[bystander] }

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

interface BaseInput {
  label: string; // Short name for the field
  subLabel?: string; // For more detailed descriptions or instructions.
  inputType: InputTypes;
  key?: string;
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

interface BaseChoiceInput extends BaseInput {
  choose: number; // For some, if negative, they must choose at least that many or more.
  chooseMax?: number; // If set to 0, there is no max. Defaults: same as ^choose above.
  allowCustom?: boolean; // Default: false. For 'Feat' choices, this will probably only allow custom items (until later.)
  defaults?: Array<string>; // Allows you to pick a default option for them, then they can change it if they want.
}
export interface TextChoice extends BaseChoiceInput {
  inputType: InputTypes.TextChoice;
  options: Array<string>;
}
interface FeatChoice extends BaseChoiceInput {
  inputType: InputTypes.FeatChoice;
  options: Array<Feat>;
}
interface FeatChoiceByType extends BaseChoiceInput {
  inputType: InputTypes.FeatChoiceByType;
  featType: FeatType;
  playbookOnly?: boolean; // Default: false
}
interface FeatChoiceById extends BaseChoiceInput {
  inputType: InputTypes.FeatChoiceById;
  options: Array<string>;
}
type CharacterInput = Text|TextArea|Checks|TextChoice;
export interface BaseCharacter extends BaseInput {
  crewMin?: number; // default is 1
  crewMax?: number; // default is 1
  inputs?: Array<CharacterInput>; // If provided with a crew>1, these inputs will be asked for each NPC individually.
}
export interface Hunter extends BaseCharacter {
  inputType: InputTypes.Hunter;
  // If crewMin or crewMax exist, then you only have to assign that many to your crew
} // Will be overlapped with history and other hunter stuff.
export interface Ally extends BaseCharacter {
  inputType: InputTypes.Ally;
  startingAllyType?: AllyType; // if left off, they can choose
}
export interface Bystander extends BaseCharacter {
  inputType: InputTypes.Bystander;
  startingBystanderType?: BystanderType; // if left off, they can choose
}
export interface Minion extends BaseCharacter {
  inputType: InputTypes.Minion;
  startingMinionType?: MinionType; // if left off, they can choose
}
export interface Monster extends BaseCharacter {
  inputType: InputTypes.Monster;
  startingMonsterType?: MonsterType; // if left off, they can choose
}

export type UserInput =
  Text|TextArea|TextChoice|Checks|
  FeatChoice|FeatChoiceByType|FeatChoiceById|
  Hunter|Ally|Bystander;
