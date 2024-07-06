
export enum InputTypes {
  Text = "text", TextArea = "textarea", MultipleChoice = "multiple-choice", Checks = "checks",
  Ally = "ally", Bystander = "bystander", Tags = "tags"
}
export enum AllyType {
  Subordinate = "subordinate", Lieutenant = "lieutenant", Friend = "friend", Bodyguard = "bodyguard",
  Confidante = "confidante", Backup = "backup"
}
export enum BystanderType {
  Busybody = "busybody", Detective = "detective", Gossip = "gossip", Helper = "helper", Innocent = "innocent",
  Official = "official", Skeptic = "skeptic", Victim = "victim", Witness = "witness"
}
export const AllyMotivations = {
  subordinate: "to follow your exact instructions",
  lieutenant: "to execute the spirit of your instructions",
  friend: "to provide emotional support",
  bodyguard: "to intercept danger",
  confidante: "to give you advice and perspective",
  backup: "to stand with you",
}
export function getAllyMotivation( ally: AllyType ) { return AllyMotivations[<string>ally] }
export const BystanderMotivations = {
  busybody: "to interfere in other people's plans",
  detective:  "to rule out explanations",
  gossip: "to pass on rumours",
  helper: "to join the hunt",
  innocent: "to do the right thing",
  official: "to be suspicious",
  skeptic: "to deny supernatural explanations",
  victim: "to put themselves in danger",
  witness: "to reveal information",
}
export function getBystanderMotivation( bystander: BystanderType ) { return BystanderMotivations[<string>bystander] }

interface BaseInput {
  type: InputTypes;
  name: string;
  label: string;
}
export interface Text extends BaseInput {
  type: InputTypes.Text;
  placeholder: string;
}
export interface TextArea extends BaseInput {
  type: InputTypes.TextArea;
  placeholder: string;
}

export interface MultipleChoice extends BaseInput {
  type: InputTypes.MultipleChoice,
  options: Array<string>,
  allowCustom: boolean,
}

export interface Checks extends BaseInput {
  type: InputTypes.Checks;
  max: number;
  starting?: number; // defaults 0;
  resetPerMystery?: boolean; // defaults false;
}
export interface Ally extends BaseInput {
  type: InputTypes.Ally;
  crewMin?: number; // default is 1
  crewMax?: number; // default is 1
  startingAllyType?: AllyType; // if left off, they can choose
}
export interface Bystander extends BaseInput {
  type: InputTypes.Bystander;
  crewMin?: number; // default is 1
  crewMax?: number; // default is 1
  startingBystanderType?: BystanderType; // if left off, they can choose
}
export interface Tags extends BaseInput {
  type: InputTypes.Tags;
  options: Readonly<Array<string>>;
  allowCustom: boolean;
  min?: number;
}

export type Input = Text|TextArea|MultipleChoice|Checks|Ally|Bystander|Tags;
