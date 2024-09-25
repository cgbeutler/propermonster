import type {Feat} from "./CompendiumTypes";
import {MovesLookup} from "./FeatMoves";
import {AdvImprovementsLookup} from "./FeatsAdvImprovements";
import {StartingGearLookup} from "./FeatsGear";
import {ImprovementsLookup} from "./FeatsImprovements";
import {StartingFeatsLookup} from "./FeatsStarting";
import {GearLookup} from "./Gear";
import {havensLookup} from "./Havens";

function createFeatLookup() {
  let feats = {}
  Object.assign(feats, GearLookup);
  Object.assign(feats, havensLookup);
  Object.assign(feats, StartingFeatsLookup);
  Object.assign(feats, MovesLookup);
  Object.assign(feats, StartingGearLookup);
  Object.assign(feats, ImprovementsLookup);
  Object.assign(feats, AdvImprovementsLookup);
  
  return feats;
}

export let FeatsLookup: {[p:string]: Feat} = createFeatLookup();