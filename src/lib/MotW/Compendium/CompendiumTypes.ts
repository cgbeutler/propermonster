import type { Input } from "./UserInputTypes";

export enum StatEnum { Charm = "Charm", Cool = "Cool", Sharp = "Sharp", Tough = "Tough", Weird = "Weird" }
export const Stats = [ StatEnum.Charm, StatEnum.Cool, StatEnum.Sharp, StatEnum.Tough, StatEnum.Weird ] as const;

export enum ChargesResetEnum { Manually = "Manually", EndOfMystery = "EndOfMystery" }
export enum FeatType { Move = "Move", Background = "GumshoeCode" }

export interface Action {
  name: string;
  description: string;
  longDescription?: string;
  
  coreStat: StatEnum;

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
  showInputs?: Array<string>,
}
  
export interface AutoAction {
  name: string;
  description: string;
  longDescription?: string;

  startOfMystery?: boolean;
  uses?: number;
  usesResetAtEndOfMystery?: boolean;
  
  // Only applicable if it has a parent feat or item
  showInputs?: Array<string>,
}

export interface StatUp {
  bonus: number;
  max: number;
}

export interface Modifier {
  description: string;
  // Generally, bonus -or- minimum
  offset?: number;
  min?: number;
  // Applied after the bonus
  max?: number;
  apply: boolean; // if not applied, it will just be listed below as an option

  showInputs?: Array<string>,
}

export interface Bonus {
  description: string;
  bonus?: number;
  min?: number;
  max?: number;
  // Only applicable if it has a parent feat or item
  showInputs?: Array<string>,
}

export interface Passive {
  description: string;

  // Only applicable if it has a parent feat or item
  showInputs?: Array<string>,
}

export interface ActionPassive {
  description: string;

  alternateStat?: StatEnum;
  offset?: number;

  // Only applicable if it has a parent feat or item
  showInputs?: Array<string>,
  
  miss2?: string;
  successHeader2?: string;
  successFooter2?: string;
  resultFooter2?: string;
}

export interface Attack {
  name: string;
  description: string;
  base?: number;
  bonus?: number;
  min?: number;
  max?: number;
  tags?: string[];
  
  // Only applicable if it has a parent feat or item
  showInputs?: Array<string>,
}

export interface PerkList {
  charm?: StatUp;
  cool?: StatUp;
  sharp?: StatUp,
  tough?: StatUp,
  weird?: StatUp,

  damage?: Array<Modifier>,
  armor?: Array<Modifier>,

  experience?: Array<Passive>,
  health?: Array<Passive>,
  protections?: Array<Passive>,
  luck?: Array<Bonus>,
  social?: Array<Passive>,
  inventory?: Array<Passive>,
  endOfSession?: Array<Passive>,

  kickSomeAss?: Array<ActionPassive>,
  actUnderPressure?: Array<ActionPassive>,
  helpOut?: Array<ActionPassive>,
  investigateAMystery?: Array<ActionPassive>,
  manipulateSomeone?: Array<ActionPassive>,
  protectSomeone?: Array<ActionPassive>,
  readABadSituation?: Array<ActionPassive>,
  useMagic?: Array<ActionPassive>,
  weirdMove?: Array<ActionPassive>,

  // allCharmMoves?: Array<ActionPassive>,
  // allCoolMoves?: Array<ActionPassive>,
  // allSharpMoves?: Array<ActionPassive>,
  // allToughMoves?: Array<ActionPassive>,
  allWeirdMoves?: Array<ActionPassive>, // Pararomantic needs this
  allMoves?: Array<ActionPassive>,

  attacks?: Array<Attack>,
}

export interface FeatItem {
  name: string;
  description: string;
  longDescription?: string;

  chargesLabel?: string;
  charges?: number;
  chargesReset?: ChargesResetEnum;

  tags?: string[];
  inputs?: { [key: string]: Input };

  actions?: Array<Action>;
  autoActions?: Array<AutoAction>;

  perks?: PerkList;
}

export interface FeatVehicle {
  description: string;
}

export interface FlavorDesc {
  id: string;

  name: string;
  variables: { [key: string]: string }; // Used by parent to build a new short description

  actions?: Array<Action>;
  autoActions?: Array<AutoAction>;
  
  perks?: PerkList;
  
  items?: Array<FeatItem>;
  virtualItems?: Array<FeatItem>;
  vehicles?: Array<FeatVehicle>;

  choose?: number;
  choices?: Array<FlavorDesc>;
}


export interface FeatDesc {
  id: string;
  playbook: string;
  type: FeatType;
  startingFeat: boolean;

  name: string;
  description: string;
  descriptionPattern?: string; // If present, this will be used to build a new short description using choices.
  longDescription?: string;

  inputs?: Array<Input>;

  actions?: Array<Action>;
  autoActions?: Array<AutoAction>;

  perks?: PerkList;

  items?: Array<FeatItem>;
  virtualItems?: Array<FeatItem>;
  vehicles?: Array<FeatVehicle>;

  choose?: number;
  choices?: Array<FlavorDesc>;
  choose_2?: number;
  choices_2?: Array<FlavorDesc>;

  borrowMove?: number; // Take a move from another playbook (that's not currently in play.)
}