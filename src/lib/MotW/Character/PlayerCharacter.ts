import { validate, NIL } from 'uuid'
import { clamp } from '../../Helpers/MathHelpers'
import { StatEnum } from './CharacterEnums';
import { Playbooks, type PlaybookDesc } from '../Compendium/PlaybookCompendium';
import { DefaultWeirdMove } from '../Compendium/WeirdMovesCompendium';


export enum StatGenMethodEnum { Manual = "Manual", Roll = "Roll" }

export interface Stat { mod: number };
export interface Skill { points: 0|1|2; inspiration: boolean; overrideStat?: StatEnum; }


export class Character {
  public lookup( key: string ) {
    return (<any> this)[key];
  }

  private _id: string = "";
  public get id(): string { return this._id; }
  private set id(value: string) {
    if (!validate(value)) { this._id = NIL; return; }
    this._id = value;
  }


  // __ Summary __
  public name: string = "";

  public playbookId: string | undefined;
  public get playbook(): PlaybookDesc | undefined { return Playbooks.find( d => d.id == this.playbookId ); }

  // __ Level __
  // Whenever you roll a total of 6 or less -or- when a move tells you to add EXP
  private _experience: number = 0;
  public get experience() { return this._experience }
  public set experience( n: number ) { this._experience = clamp(n, 0, 5) }

  private _level: number = 1;
  public get level() { return this._level }
  public set level( n: number ) { this._level = clamp(n, 1, 20) }

  // __ Improvements __
  public get ImpMax() { return this.level; }

  // __ Advanced Improvements __
  public get AdvImpMax() { return clamp( this.level - 5, 0, 8 ); }

  public get commonAdvImpUsed() { return (this.improveStat?1:0) + (this.improveLuck?1:0) + this.improveAdvMoves + (this.improveSecondChar?1:0) + (this.improveChangeType?1:0) + (this.improveRetire?1:0); }
  // Common improvements
  public improveStat: boolean = false; // Add 1 to any stat (max stat of +3.)
  public improveStatChoice: StatEnum | undefined = undefined;
  public improveLuck: boolean = false;
  public improveAdvMoves: number = 0; // every level of this adv impr. gives you 2 advanced moves.
  public improveAdvMovesChoices: string[] = []
  public improveSecondChar: boolean = false; // "Create a second hunter to play as well as this one" is just making a new character...
  public improveChangeType: boolean = false; // "Change this hunter to a new type" is just making a new character...? Do they keep their level?
  public improveRetire: boolean = false; // "Retire this hunter to safety" is just stopping playing.

  // __ Stats __
  public readonly baseStats: { [Keys in StatEnum]: number } = { Charm: -1, Cool: -1, Sharp: -1, Tough: -1, Weird: -1 }
  public GetBaseStat( stat: StatEnum ): number { return this.baseStats[stat] ?? -2; }
  public GetStat( stat: StatEnum ): number {
    return this.GetBaseStat( stat ); // + (this.statImprovements[stat] ?? 0); // TODO: Add improvements as well
  }
  public GetStatString( stat: StatEnum ): string {
    let mod = this.GetStat( stat );
    return mod < -1 ? "--" : (mod<0 ? "" : "+")+mod;
  }
  
  public get Charm() { return this.GetStat( StatEnum.Charm ); }
  public get Cool() { return this.GetStat( StatEnum.Cool ); }
  public get Sharp() { return this.GetStat( StatEnum.Sharp ); }
  public get Tough() { return this.GetStat( StatEnum.Tough ); }
  public get Weird() { return this.GetStat( StatEnum.Weird ); }

  // __ Luck __
  // Changes a roll to 12 -or- avoids all harm from one injury
  public luck: number = 7;

  // __ Harm __
  public harm: number = 7;
  public get isUnstable() { return this.harm <= 4; } // TODO: How does unstable fully work? can it be unchecked?

  // __ Moves __
  public weirdMove: string = DefaultWeirdMove;

  // __ Constructing __
  constructor(p_id: string = "") {
    this.id = p_id;
    this.name = ""
  }

  public static FromJson(json: string): Character {
    return Object.assign(new Character(), JSON.parse(json))
  }
  public static FromObj(raw: object): Character {
    return Object.assign(new Character(), raw)
  }
}

