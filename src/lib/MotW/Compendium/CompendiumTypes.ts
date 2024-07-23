import {InputTypes, type UserInput} from "./UserInputTypes";
import {ItemTag} from "./Tags";

export enum StatEnum { Charm = "Charm", Cool = "Cool", Sharp = "Sharp", Tough = "Tough", Weird = "Weird" }
export enum FeatTypeEnum {
  SubFeat,
  Background, Gear, Move,
  Improvement, AdvancedImprovement,
  Item, Haven,
}
export enum ItemType {
  Equipment,
  Armor, Artifact, Vehicle, Weapon,
  InnateArmor, InnateWeapon, InnateBarrier,
}

export interface ResultDescription {
  // The result will be constructed from a combination of the following.
  // If any are missing, they will just be skipped.
  resultHeader?: string;
  miss?: string;
  successHeader?: string;
  mixedSuccess?: string;
  solidSuccess?: string;
  advancedSuccess?: string;
  successFooter?: string;
  resultFooter?: string;
}

export interface Action extends ResultDescription {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  
  coreStat: StatEnum;
  alternateStat?: StatEnum;

  startOfMystery?: boolean;
  uses?: number;
  usesResetAtEndOfMystery?: boolean;
  
  // Only applicable if it has a parent feat or item
  showInputs?: Array<string>;
}
  
export interface AutoAction {
  id: string;
  name: string;
  description: string;
  longDescription?: string;

  startOfMystery?: boolean;
  uses?: number;
  usesResetAtEndOfMystery?: boolean;
  
  // Only applicable if it has a parent feat or item
  showInputs?: Array<string>;
}

export interface StatUp {
  bonus: number;
  max: number;
}

export interface Bonus {
  description: string;
  bonus?: number;
  min?: number;
  max?: number;
  // Only applicable if it has a parent feat or item
  showInputs?: Array<string>;
}

export interface Passive {
  description: string;

  // Only applicable if it has a parent feat or item
  showInputs?: Array<string>;
}

export interface ActionPassive {
  description: string;

  alternateStat?: StatEnum;
  // Only applicable if it has a parent feat or item
  showInputs?: Array<string>;
  amendResults?: ResultDescription;
  replaceResults?: ResultDescription;
}

export interface ActionModifier {
  name: string;
  applyToMoves?: Array<string>; // If not present, it will be applied to all moves
  offset?: number;
  autoRoll?: number;
  condition?: string; // If present, condition will be displayed in the attack view.
  
  amendResults?: ResultDescription;
  replaceResults?: ResultDescription;

  // Only applicable if it has a parent feat or item
  showInputs?: Array<string>;
  applyToItem?: Array<string>; // This one just shows the item // TODO: Rename?
}

export interface AttackModifier {
  name: string;
  offset?: number;
  max?: number;
  addTags?: Array<ItemTag>;
  condition?: string; // If present, condition will be displayed in the attack view.
  
  showInputs?: Array<string>;
  applyToItem?: Array<string>;
}

export interface ArmorModifier {
  name: string;
  offset?: number;
  max?: number;
  addTags?: Array<ItemTag>;
  condition?: string; // If present, condition will be displayed in the armor view.

  showInputs?: Array<string>;
  applyToItem?: Array<string>;
}

export interface ChooseModifier {
  inputKey: string; // A GUID equal to the key for the input with a 'choose' value to modify.  
  offset?: number;
  max?: number;
}

export interface PerkList {
  charm?: StatUp;
  cool?: StatUp;
  sharp?: StatUp;
  tough?: StatUp;
  weird?: StatUp;

  experience?: Array<Passive>;
  health?: Array<Passive>;
  protections?: Array<Passive>;
  luck?: Array<Bonus>;
  social?: Array<Passive>;
  inventory?: Array<Passive>;
  haven?: Array<Passive>;
  sessionEnd?: Array<Passive>;
  sessionStart?: Array<Passive>;

  actions?: Array<Action>;
  autoActions?: Array<AutoAction>;

  addRotes?: number;

  offsetMaxHealth?: number;
  offsetMaxLuck?: number;

  modAttack?: Array<AttackModifier>;
  modArmor?: Array<ArmorModifier>;
  modChooseInput?: Array<ChooseModifier>;
  modMoves?: Array<ActionModifier>;
  
  grantFeatures?: Array<string>;
  
  // TODO: Modify the following to be more flexible with an 'applyToMoves' inside
  kickSomeAss?: Array<ActionPassive>;
  actUnderPressure?: Array<ActionPassive>;
  helpOut?: Array<ActionPassive>;
  investigateAMystery?: Array<ActionPassive>;
  manipulateSomeone?: Array<ActionPassive>;
  protectSomeone?: Array<ActionPassive>;
  readABadSituation?: Array<ActionPassive>;
  useMagic?: Array<ActionPassive>;
  weirdMove?: Array<ActionPassive>;

  allMoves?: Array<ActionPassive>;
}

export interface Feat {
  id: string;
  playbooks?: Array<string>;
  featType?: FeatTypeEnum; // Default is SubFeat
  
  name: string;
  description?: string;
  longDescription?: string;
  prerequisites?: Array<string>;
  prerequisiteMoves?: Array<string>;

  perks?: PerkList;
  items?: Array<Item>;
  inputs?: Array<UserInput>;
  showInputs?: Array<string>; // Displays the short name string next to the short description.
}


export interface TagChoice {
  label: string;
  choose?: number, // Default 1. For some, if negative, they must choose at least that many or more.
  chooseMax?: number, // If set to 0, there is no max. Defaults: same as ^choose above.
  options: Readonly<Array<ItemTag>>; // Can be used for bad options if bad options is not needed.
}
export interface Item extends Feat {
  itemType: ItemType;
  
  // Default starting tags
  tags?: Array<ItemTag>;
  tagInputs?: Array<TagChoice>;

  perks?: PerkList;
  items?: Array<Item>;
  inputs?: Array<UserInput>;
  
  // Weapon Item Values
  overrideStat?: StatEnum;
  harm?: number;
  amendResults?: ResultDescription;
  replaceResults?: ResultDescription;
  
  // Armor Item Values
  armor?: number;
  armorCondition?: string; // If present, condition will be displayed in the armor view.
}
