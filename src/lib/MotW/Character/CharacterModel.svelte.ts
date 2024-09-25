import {NIL, validate} from 'uuid';
import {clamp} from '../../Helpers/MathHelpers';
import {Stats} from "../Compendium/CompendiumTypes";
import type {TagData, UserInputData} from "../Compendium/UserInputData";
import {type PlaybookDesc, PlaybookLookup} from "../Compendium/PlaybookCompendium";
import {FeatsLookup} from "../Compendium/Feats";
import {type FeatData, FeatModel} from "../Compendium/Feat.svelte";

export interface CharacterData {
  id: string;
  carryoverIds: string[]; // Allows you to pull stuff from previous characters through the "change playbook" option.
  name: string;
  playbookId: string | undefined;
  experience: number;
  featData: FeatData[];
  // rotes?: Array<Rote>;
  baseStats: {[Keys in Stats]: number};
  luckUsed: number;
  luckMax: number;
  harm: number;
  harmMax: number;
  unstable: boolean;
}

export class CharacterModel implements CharacterData {
  public lookup( key: string ) {
    return (<any> this)[key];
  }

  private _id: string = $state("");
  public get id() { return this._id; }
  public set id(value) {
    if (!validate(value)) { this._id = NIL; return; }
    this._id = value;
  }
  
  private _carryoverIds: string[] = $state([]);
  public get carryoverIds() { return this._carryoverIds; }
  public set carryoverIds( val ) { this._carryoverIds = val; }


  // __ Summary __
  private _name: string = $state("");
  public get name() {return this._name}
  public set name(val: string) {this._name = val}

  private _playbookId: string | undefined = $state();
  public get playbookId(): string | undefined { return this._playbookId }
  public set playbookId( v: string | undefined) { this._playbookId = v; }
  
  private _playbook: PlaybookDesc | undefined = $derived(!this.playbookId ? undefined : PlaybookLookup[this.playbookId]);
  public get playbook() { return this._playbook; }

  // __ Level __
  // Whenever you roll a total of 6 or less -or- when a move tells you to add EXP
  private _experience: number = $state(0);
  public get experience() { return this._experience; }
  public set experience( n: number ) { this._experience = clamp(n, 0) }
  private _level: number = $derived(Math.floor(this._experience / 5.0)+1);
  public get level(): number { return this._level; }
  public get improvements() { return this.level; }
  private _advImprovements = $derived(clamp( this.level - 5, 0, 8 ));
  public get advImprovements() { return this._advImprovements; }
  
  // __ Features __

  // Contains a character id and feat ids.
  private _featData: FeatData[] = $state([]);
  public get featData() {return this._featData}
  private _feats: FeatModel[] = $derived(this._featData.map(fd => new FeatModel(FeatsLookup[fd.id],fd)));
  
  public tagInputData: {[key: string]: TagData|undefined} = $state({});
  // rotes?: Array<Rote>;
  public inputData: {[key: string]: UserInputData|undefined} = $state({});
  public getInputData(key: string): UserInputData|undefined {
    if (!this.inputData.hasOwnProperty(key)) return undefined;
    return this.inputData[key];
  }
  public setInputData(key: string, data: UserInputData|undefined): void {this.inputData[key] = data}

  private _startingFeatIds: string[] = $derived(this.playbook?.startingFeats ?? []);
  public get startingFeatIds() {return this._startingFeatIds};
  private _startingFeats = $derived(this.startingFeatIds.map(fId => new FeatModel(this, FeatsLookup[fId])));
  public get startingFeats() { return this._startingFeats; }
  
  public chosenFeatIds: Array<string> = $state([]);
  public impFeatIds: Array<string> = $state([]);
  public advFeatIds: Array<string> = $state([]);

  private _gearFeatId: string = $derived(this.playbook?.gear ?? "");
  public get gearFeatId() {return this._gearFeatId};
  private _gearFeat = $derived(new FeatModel(this, FeatsLookup[this.gearFeatId]));
  public get gearFeat() { return this._gearFeat; }
  
  // private _allFeats = $derived(this.startingFeats.flatMap(f => {
  //   if (f.inputs === undefined) return [f];
  //   return [f, ...Object.entries(f.inputs).flatMap(([k,v]) => {
  //     if (v.inputType === InputTypes.FeatChoice)
  //     if (!(v.inputType in [InputTypes.FeatChoice,InputTypes.FeatChoiceById])) return [];
  //     v.inputType
  //   })]
  // }));
  
  // __ Stats __
  private _baseStats: {[Keys in Stats]: number} = $state({ Charm: -1, Cool: -1, Sharp: -1, Tough: -1, Weird: -1 });
  public get baseStats() { return this._baseStats; }
  public set baseStats(val: {[Keys in Stats]: number}) { this._baseStats = val }
  public chooseBaseStat(n: number) {
    if (this.playbook && n >= 0 && n < this.playbook.statPicks.length ) {
      this._baseStats = this.playbook.statPicks[n];
    }
  }
  public getBaseStat(stat: Stats): number { return this.baseStats[stat]; }
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
  public luckUsed: number = $state(0);
  public luckMax: number = $state(7);

  // __ Harm __
  public harm: number = $state(0);
  public harmMax: number = $state(7);
  public unstable: boolean = $state(false);
  
  public toJson(): string {
    let dto: CharacterData = {
      id: this.id,
      name: this.name,
      playbookId: this.playbookId,
      experience: this.experience,
      chosenFeatIds: this.chosenFeatIds,
      impFeatIds: this.impFeatIds,
      advFeatIds: this.advFeatIds,
      tagInputData: this.tagInputData,
      // rotes?: Array<Rote>;
      inputData: this.inputData,
      baseStats: this.baseStats,
      luckUsed: this.luckUsed,
      luckMax: this.luckMax,
      harm: this.harm,
      harmMax: this.harmMax,
      unstable: this.unstable,
    };
    return JSON.stringify(dto);
  }
  public static FromJson(json: string): CharacterModel {
    return Object.assign(new CharacterModel(), JSON.parse(json))
  }
  public static FromObj(raw: object): CharacterModel {
    return Object.assign(new CharacterModel(), raw)
  }
}

