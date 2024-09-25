import {ItemTag} from "./Tags";
import type {TagChoice, UserInput} from "./UserInputs";

export enum Stats { Charm = "Charm", Cool = "Cool", Sharp = "Sharp", Tough = "Tough", Weird = "Weird" }
export enum FeatType {
  SubFeat,
  Background, Gear, Move,
  Improvement, AdvancedImprovement,
  
  // Item types. These show up sorted in the item list instead of the feature view.
  Armor,
  Artifact,
  Equipment,
  Haven,
  Vehicle,
  Weapon,
}

export interface ActionEffect {
  // A move can have a health display on its results
  showHealing?: boolean; // Default: false
  showDamage?: boolean; // Default: false
  armorCategories?: Array<string>; // If none, all are shown. Only shows listed items otherwise.

  // A move can have a harm display and a health display on its results
  showAttacks?: boolean; // Default: false
  attackCategories?: Array<string>; // If none, all are shown. Only shows listed items otherwise.
}

export interface ResultDescription extends ActionEffect {
  // The result will be constructed from a combination of the following.
  // If any are missing, they will just be skipped.
  /**/resultHeader?: string;
  /**/  miss?: string;
  /**/  successHeader?: string;
  /**/    mixedSuccess?: string;
  /**/    solidSuccess?: string;
  /**/    advancedSuccess?: string;
  /**/  successFooter?: string;
  /**/resultFooter?: string;

  showInputs?: Array<string>;
}

export interface Action extends ResultDescription, ActionEffect {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  
  ability: Stats;

  startOfMystery?: boolean;
  uses?: number;
  usesResetAtEndOfMystery?: boolean;
  
  showInputs?: Array<string>;
}
  
export interface AutoAction extends ActionEffect {
  id: string;
  name: string;
  description: string;
  longDescription?: string;

  startOfMystery?: boolean;
  uses?: number;
  usesResetAtEndOfMystery?: boolean;
  
  showInputs?: Array<string>;
}

export interface StatChange {
  ability: Stats;
  offset: number;
  max?: number;
}

export interface Bonus {
  description: string;
  bonus?: number;
  min?: number;
  max?: number;
  
  showInputs?: Array<string>;
}

export enum PassiveTypes {
  Experience = "Experience",
  Health = "Health",
  Protections = "Protections",
  Luck = "Luck",
  Social = "Social",
  Inventory = "Inventory",
  Haven = "Haven",
  SessionEnd = "SessionEnd",
  SessionStart = "SessionStart",
}
export interface Passive {
  type: PassiveTypes;
  description: string;
  showInputs?: Array<string>;
}

export interface Attack {
  // If not provided, this attack is in the default category ('') and shown on KickSomeAss and ProtectSomeone, etc.
  // If the category is provided, then the action has to specify that category for it to be shown.
  categories?: Array<string>;
  harm?: number;
  amendResults?: ResultDescription;
  replaceResults?: ResultDescription;
}

export interface Armor {
  // If not provided, this armor is in the default category ('') and shown on KickSomeAss and ProtectSomeone, etc.
  // If the category is provided, then the action has to specify that category for it to be shown.
  categories?: Array<string>;
  armor?: number;
  armorCondition?: string; // If present, condition will be displayed in the armor view.
}


export interface AttackModifier {
  name: string;
  harmOffset?: number;
  harmMax?: number;
  addTags?: Array<ItemTag>;
  condition?: string; // If present, condition will be displayed in the attack view.
  
  showInputs?: Array<string>;
  applyToItem?: Array<string>;
}

export interface ArmorModifier {
  name: string;
  armorOffset?: number;
  armorMax?: number;
  addTags?: Array<ItemTag>;
  condition?: string; // If present, condition will be displayed in the armor view.

  showInputs?: Array<string>;
  applyToItem?: Array<string>;
}

export enum ChooseModType {
  add, remove, replace
}
export interface ChooseModifier {
  inputKey: string; // A GUID equal to the key for the input with a 'choose' value to modify.
  chooseModType: ChooseModType;
  choose?: number, // Default 1. They must choose at least that many to add/remove/replace.
  chooseMax?: number, // If set to 0, there is no max. Defaults: equal to ^choose above.
  totalChosenMax?: number; // If provided when adding new values, this is the overall max, additions included (needed to prevent a few feats from overlapping.) 
  allowCustom?: boolean;
}

export interface ActionModifier {
  applyToMoves: Array<string>; // '*' means all moves. '*harm' means all harm moves. '*armor' all armor moves. '*rote' for all rotes.

  // If alternateAbility is present, the rest of the modifications will only apply when using the alt ability. 
  alternateAbility?: Stats;
  alternateAbilityCondition?: string; // Shown next to the alternate ability as an info note.

  footnote?: string;
  footnoteInputs?: Array<string>;

  modRoll?: number;
  modAppliedViaInput?: string; // The key to a checkbox that takes the place of the condition checkbox.
  modIgnoredViaInput?: string; // The key to a checkbox that takes the place of the condition checkbox (but inverted.)
  modCondition?: string; // If present, condition will be displayed with the mod with a checkbox
  autoRoll?: number; // A number that can be taken instead of rolling.
  autoCondition?: string; // If present, condition will be displayed with the autoRoll and a button

  amendResults?: ResultDescription;
  replaceResults?: ResultDescription;
  resultInputs?: Array<string>;
}

export interface Vibe {
  action?: number;
  mystery?: number;
  fantasy?: number;
  storySway?: number;
  support?: number;
}

export interface Feat {
  id: string;
  name: string;
  featType?: FeatType; // Default is SubFeat.
  playbooks?: Array<string>;
  prerequisiteFeats?: Array<string>;
  prerequisiteMoves?: Array<string>;
  
  vibe?: Vibe;
  description?: string;
  longDescription?: string;

  tags?: Array<ItemTag>;
  tagInputs?: Array<TagChoice>;

  offsetStat?: StatChange;
  offsetMaxHealth?: number;
  offsetMaxLuck?: number;
  addRotes?: number;
  addMoves?: number;
  addAnyMoves?: number;
  addHavens?: number;
  
  passives?: Array<Passive>;
  
  actions?: Array<Action>;
  autoActions?: Array<AutoAction>;
  modMoves?: Array<ActionModifier>;
  
  attacks?: Array<Attack>;
  modAttack?: Array<AttackModifier>;
  armors?: Array<Armor>;
  modArmor?: Array<ArmorModifier>;
  
  inputs?: Array<UserInput>;
  showInputs?: Array<string>; // Borrows an input to show in the expanded view
  showInputsInSummary?: Array<string>; // Displays the short name string next to the short description.
  modChooseInput?: Array<ChooseModifier>;
  
  subFeats?: Array<Feat>;
  subFeatsById?: Array<string>;
}
