import type {Feat} from "./CompendiumTypes";
import type {TagData, TextChoiceData, UserInputData} from "./UserInputData";
import {
  CharactersModel,
  ChecksModel, FeatChoiceModel,
  TagInputModel,
  TextAreaModel,
  TextChoiceModel,
  TextModel,
  type UserInputModel
} from "./UserInputModels.svelte";
import {InputTypes} from "./UserInputs";

export interface FeatData {
  id: string;
  characterId?: string;
  tagData: {[key:string]: TagData};
  inputsData: {[key:string]: UserInputData};
  subFeatData: FeatData[];
}

export class FeatModel {
  public readonly id: string;
  public readonly featDesc: Feat;
  public readonly characterId?: string;
  public tagInputs: TagInputModel[];
  public inputs: UserInputModel[];
  public subFeats: FeatModel[];

  public get isValid() {
    return this.inputs.length === 0 || this.inputs.every(i => i.isValid)
  }

  public constructor(feat: Feat, data: FeatData) {
    this.id = data.id;
    this.featDesc = feat;
    this.characterId = data.characterId;

    // tagData: {[key:string]:TagData};
    this.tagInputs = feat.tagInputs?.map(i => {
      return new TagInputModel(i, data.tagData.getProp(i.key).unwrap());
    })??[];
    this.inputs = feat.inputs?.map(i => {
      let iData = data.inputsData.find(d => d.id === i.id);
      if (i.inputType == InputTypes.Text) {return new TextModel(i, iData)}
      if (i.inputType == InputTypes.TextArea) {return new TextAreaModel(i, iData)}
      if (i.inputType == InputTypes.TextChoice) {return new TextChoiceModel(i, iData)}
      if (i.inputType == InputTypes.Checks) {return new ChecksModel(i, iData)}
      if (i.inputType == InputTypes.FeatChoice || i.inputType == InputTypes.FeatChoiceById) {return new FeatChoiceModel(i, iData)}
      if (i.inputType == InputTypes.Character) {return new CharactersModel(i, iData)}
      console.error(`Unhandled inputType: '${i.inputType}'`);
      return undefined!;
    })??[];
    this.subFeats = this.featDesc.subFeats?.map(sf =>
      new FeatModel(sf, data.subFeatData.find(sfd => sfd.id === sf.id) ?? {
        id: sf.id,
        characterId: this.characterId,
        tagData: [],
        inputsData: [],
        subFeatData: [],
      })
    ) ?? [];
  }
  
  public toData(): FeatData {
    return {
      id: this.id,
      characterId: this.characterId,
      tagData: this.tagInputs.map(i => i.data),
      inputsData: this.inputs.map(i => i.data),
      subFeatData: this.subFeats.map(i => i.toData()),
    }
  }
}