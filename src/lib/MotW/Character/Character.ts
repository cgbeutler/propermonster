import { validate, NIL } from 'uuid'
import { clamp } from '../../Helpers/MathHelpers'
import {Stats, type TagData} from "../Compendium/CompendiumTypes";
import type {UserInputData} from "../Compendium/UserInputDataTypes";

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

  private _playbookId: string | undefined;
  public get playbookId(): string | undefined { return this._playbookId }
  public set playbookId( v: string | undefined) { this._playbookId = v; }
  
  // private _playbook: PlaybookDesc | undefined = undefined;
  // public get playbook(): PlaybookDesc | undefined { return this._playbook ??= (!this.playbookId ? undefined : PlaybookLookup[this.playbookId]); }

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
  
  // __ Features __

  // public get startingFeatIds(): Array<string>|undefined {return this.playbook?.startingFeats};
  public chosenFeatIds: Array<string> = [];
  public impFeatIds: Array<string> = [];
  public advFeatIds: Array<string> = [];

  tagInputs: {[key: string]: TagData} = {};
  // rotes?: Array<Rote>;
  inputs: {[key: string]: UserInputData} = {};
  
  // __ Stats __
  public baseStats: { [Keys in Stats]: number } = { Charm: -1, Cool: -1, Sharp: -1, Tough: -1, Weird: -1 }
  public GetBaseStat( stat: Stats ): number { return this.baseStats[stat] ?? -2; }
  // public GetStat( stat: Stats ): number {
  //   return this.GetBaseStat( stat ); // + (this.statImprovements[stat] ?? 0); // TODO: Add improvements as well
  // }
  // public GetStatString( stat: Stats ): string {
  //   let mod = this.GetStat( stat );
  //   return mod < -1 ? "--" : (mod<0 ? "" : "+")+mod;
  // }
  //
  // public get Charm() { return this.GetStat( Stats.Charm ); }
  // public get Cool() { return this.GetStat( Stats.Cool ); }
  // public get Sharp() { return this.GetStat( Stats.Sharp ); }
  // public get Tough() { return this.GetStat( Stats.Tough ); }
  // public get Weird() { return this.GetStat( Stats.Weird ); }

  // __ Luck __
  // Changes a roll to 12 -or- avoids all harm from one injury
  public luckUsed: number = 0;
  public luckMax: number = 7;

  // __ Harm __
  public harm: number = 0;
  public harmMax: number = 7;
  public unstable: boolean = false;

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

