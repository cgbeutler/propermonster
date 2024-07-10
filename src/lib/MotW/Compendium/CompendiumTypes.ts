import type {UserInput} from "./UserInputTypes";
import type {RangeEnum} from "./Tags";

export enum StatEnum { Charm = "Charm", Cool = "Cool", Sharp = "Sharp", Tough = "Tough", Weird = "Weird" }
export enum ItemType { Weapon, Armor, Artifact }

export interface Action {
  name: string;
  description: string;
  longDescription?: string;
  
  coreStat: StatEnum;
  alternateStat?: StatEnum;

  resultHeader?: string | undefined;
  miss: string;
  // The result will be constructed from a combination of the following:
  successHeader?: string | undefined;
  mixedSuccess: string;
  solidSuccess: string;
  advancedSuccess?: string;
  successFooter?: string | undefined;
  resultFooter?: string | undefined;

  startOfMystery?: boolean;
  uses?: number;
  usesResetAtEndOfMystery?: boolean;
  
  // Only applicable if it has a parent feat or item
  showInputs?: Array<string>;
}
  
export interface AutoAction {
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
  offset?: number;
  canAutoRoll?: number;

  // Only applicable if it has a parent feat or item
  showInputs?: Array<string>;
  
  miss2?: string;
  successHeader2?: string;
  successFooter2?: string;
  resultFooter2?: string;
}


export interface Attack {
  name: string;
  description?: string;
  overrideStat?: StatEnum;
  harm: number;
  ranges: RangeEnum[];
  
  tags?: string[];

  miss2?: string;
  successHeader2?: string;
  successFooter2?: string;
  resultFooter2?: string;

  // Only applicable if it has a parent feat or item
  showInputs?: Array<string>;
}

export interface AttackModifier {
  name: string;
  description: string;
  offset: number;
  apply?: boolean;
  showInputs?: Array<string>;
}

export interface Armor {
  name: string;
  description?: string;
  armor: number;
  conditional?: boolean; // conditionals are not automatically applied
  tags?: string[];
  
  // Only applicable if it has a parent feat or item
  showInputs?: Array<string>;
}

export interface ArmorModifier {
  name: string;
  description: string;
  offset?: number;
  max?: number;
  conditional?: boolean; // conditionals are not automatically applied

  showInputs?: Array<string>;
}

export interface PerkList {
  charm?: StatUp;
  cool?: StatUp;
  sharp?: StatUp;
  tough?: StatUp;
  weird?: StatUp;

  actions?: Array<Action>;
  autoActions?: Array<AutoAction>;
  attacks?: Array<Attack>;
  attackModifiers?: Array<AttackModifier>;
  armors?: Array<Armor>;
  armorModifiers?: Array<ArmorModifier>;

  experience?: Array<Passive>;
  health?: Array<Passive>;
  protections?: Array<Passive>;
  luck?: Array<Bonus>;
  social?: Array<Passive>;
  inventory?: Array<Passive>;
  endOfSession?: Array<Passive>;

  kickSomeAss?: Array<ActionPassive>;
  actUnderPressure?: Array<ActionPassive>;
  helpOut?: Array<ActionPassive>;
  investigateAMystery?: Array<ActionPassive>;
  manipulateSomeone?: Array<ActionPassive>;
  protectSomeone?: Array<ActionPassive>;
  readABadSituation?: Array<ActionPassive>;
  useMagic?: Array<ActionPassive>;
  weirdMove?: Array<ActionPassive>;

  // allCharmMoves?: Array<ActionPassive>,
  // allCoolMoves?: Array<ActionPassive>,
  // allSharpMoves?: Array<ActionPassive>,
  // allToughMoves?: Array<ActionPassive>,
  // allWeirdMoves?: Array<ActionPassive>, // Pararomantic needs this
  allMoves?: Array<ActionPassive>;
}

export interface Item {
  id: string;
  name: string;
  description?: string;
  longDescription?: string;
  itemType: ItemType;
  
  tags?: string[];
  inputs?: Array<UserInput>;

  perks?: PerkList;
}

export interface FeatVehicle {
  description: string;
}

export interface SubFeatDesc {
  id: string;

  name: string;
  description?: string;
  
  inputs?: Array<UserInput>;

  perks?: PerkList;
  items?: Array<Item>;
  vehicles?: Array<FeatVehicle>;
}


export interface FeatDesc {
  id: string;
  playbook: string;
  startingFeat: boolean;
  multiclassable: boolean;

  name: string;
  description: string;
  // descriptionPattern?: string; // If present, this will be used to build a new short description using choices.
  longDescription?: string;
  showInputs?: Array<string>; // Displays the short name string next to the short description.

  inputs?: Array<UserInput>;
  
  perks?: PerkList;
  items?: Array<Item>;
  virtualItems?: Array<Item>;
  vehicles?: Array<FeatVehicle>;

  // TODO: Move this to be an AuxInput
  borrowMove?: number; // Take a move from another playbook (that's not currently in play. The Monstrous.)
}