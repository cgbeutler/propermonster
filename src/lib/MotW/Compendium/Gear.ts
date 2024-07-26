import {type Feat, FeatType, PassiveTypes} from "./CompendiumTypes";
import {ItemTag} from "./Tags";
import {InputTypes} from "./UserInputTypes";

export const itemLookup: {[key: string]: Feat} = {
  // ____ Armors ____

  CombatArmor: {
    // rarity: 1,
    name: `Combat Armor`,
    id: `77b6446b-30e1-43bc-acc6-ad32f137e206`,
    featType: FeatType.Armor,
    tags: [ ItemTag.heavy ],
    armors: [{ armor: 2 }]
  },
  DivineArmor: {
    // rarity: 1,
    name: `Divine Armor`,
    id: `7c9a7ce8-3143-4259-abf9-cb094b69980d`,
    description: `A divine set of armor from beyond.`,
    featType: FeatType.Armor,
    tags: [ ItemTag.holy ],
    armors: [{ armor: 1 }],
  },
  FlakVest: {
    // rarity: 1,
    name: `Flak Vest`,
    id: `845c17ef-5bb8-4037-9bad-80716a6fab28`,
    featType: FeatType.Armor,
    tags: [ ItemTag.hidden ],
    armors: [{ armor: 1 }],
  },
  OldFashionedArmor: {
    // rarity: 1,
    id: `f64b13a1-34fc-48d8-8d1d-5bd16f2149c2`,
    name: `Old-Fashioned Armor`,
    featType: FeatType.Armor,
    tags: [ ItemTag.heavy ],
    armors: [{ armor: 1 }],
  },
  ProtectiveGear: {
    // rarity: 1,
    name: `Protective Gear`,
    id: `d9e02f28-fd36-4f5d-851e-ba2500025203`,
    description: `Protective wear suited to your look.`,
    featType: FeatType.Armor,
    armors: [{ armor: 1 }],
  },
  
  // ____ Artifacts ____

  // The Crooked
  ProtectiveAmulet: {
    // rarity: 1,
    name: `Protective Amulet`,
    id: `6801035d-61bc-403e-8db8-95f5b231348e`,
    description: `Amulet that provides +1 \`armor\` that's \`#magic\`, but must be recharged afterward.`,
    featType: FeatType.Artifact,
    tags: [ItemTag.small,ItemTag.magic,ItemTag.recharge],
    
    inputs: [{
      key: "charges", inputType: InputTypes.Checks,
      label: "Charge", max: 1,
    }],
    showInputs: ["charges"],

    modArmor: [{
      name: `Protective Amulet`,
      armorOffset: 1,
      addTags: [ItemTag.magic],
      condition: `Charge required`,
      showInputs: [ "charges" ],
    }]
  },
  LuckyCharm: {
    // rarity: 1,
    id: "112d8342-17b3-439d-81fa-0764f2523ee8",
    name: "Lucky Charm",
    description: `Use instead of **Luck** only once.`,
    featType: FeatType.Artifact,
    tags: [ItemTag.small,ItemTag.magic],
    
    inputs: [{
      key: "uses", inputType: InputTypes.Checks,
      label: "Uses", max: 1,
    }],
    showInputs: ["uses"],

    passives: [{
      type: PassiveTypes.Luck,
      description: `Your Luck Charm item can be used once instead of using a **Luck** point.`,
      showInputs: ["uses"],
    }]
  },
  Grimoire: {
    // rarity: 1,
    id: "a921d0ca-1a63-4324-8cda-aeaa0ef9c940",
    name: "Grimoire",
    description: `Studying the Grimoire gives +1 \`forward\` to your basic **Weird** move (default **Use Magic**.)`,
    featType: FeatType.Artifact,
    tags: [ItemTag.magic],
    modMoves: [{
      applyToMoves: [
        `ae7216e7-d5d0-4858-9469-9c3a04f47844`, // Use Magic
        `5bd60cfb-0fe1-4b8a-a606-a665bb4a660c`, // Empath
        `e12b2b89-6e19-43bc-a70d-6e9cdb94b77c`, // Illuminated
        `59d0d20d-8222-4928-9530-867537ebedd1`, // No Limits
        `00dcbb31-c8bd-43f6-b092-2e9f2188552a`, // Past Lives
        `0ef9f128-f877-49f6-91b2-1c9e04850f4a`, // Sensitive
        `22905bf8-71e5-453e-931c-9c8041fc4e7a`, // Trust Your Gut
        `231dd633-f244-49dd-ba71-74ec957e1a83`, // Telekinesis
        `8113df8e-c21f-417f-94b9-6a1beb0b88c4`, // Weird Science
      ],
      modRoll: 1,
      modCondition: `Apply once after studying your **Grimoire**.`
    }]
  },
  SkeletonKey: {
    // rarity: 1,
    id: "ec2bcf6d-1880-41fb-9c15-19ee459bedb8",
    name: "Skeleton Key",
    description: `Open any magically sealed lock.`,
    featType: FeatType.Artifact,
    tags: [ItemTag.small,ItemTag.magic],
    autoActions: [{
      name: `Skeleton Key`,
      id: `38bbf841-6007-4ce5-b81a-a65ce6e3addd`,
      description: `Use your Skeleton Key to open a magically sealed lock.`,
    }]
  },
  ImpStone: {
    // rarity: 1,
    id: "7908f804-8889-4f2a-bae0-45d465947c13",
    name: "Imp Stone",
    description: `A weak demon is bound to serve the holder of this stone. This imp must be summoned with '\`use magic\`'.`,
    featType: FeatType.Artifact,
    tags: [ItemTag.small,ItemTag.magic],
    passives: [{
      type: PassiveTypes.Social,
      description: `A weak demon is bound to serve the holder of this stone. This imp must be summoned with '\`use magic\`'.` 
    }]
  },
  
  // The Spooktacular
  GhostShades: {
    name: `Ghost Shades`,
    id: `5588bceb-fdf7-4b4a-8644-0cc1b668717f`,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    featType: FeatType.Artifact,
    tags: [ItemTag.magic,ItemTag.innocuous],
    description: `Sunglasses that can see into the spirit world. (It seems darker than usual, obviously.)`,
    passives: [{
      type: PassiveTypes.Social,
      description: `Ghost Shades: Sunglasses that can see into the spirit world. (It seems darker than usual, obviously.)`,
    }]
  },
  BigPlushDog: {
    name: `Really Big Animated Plush`,
    id: `a50fc994-5a34-4d91-a914-92390cf4fb5c`,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    featType: FeatType.Artifact,
    tags: [ItemTag.magic],
    description: `Somehow this plush came to life. Its kinda like a regular dog/cat/pet... kinda?`,
    inputs: [{
      label: `Plush Pal`,
      subLabel: `Somehow this plush came to life. Its kinda like a regular dog/cat/pet... kinda?`,
      inputType: InputTypes.Bystander,
      inputs: [{
        label: `Pet Type`,
        inputType: InputTypes.TextChoice,
        choose: 1,
        allowCustom: true,
        options: [ `Cat`, `Dog`, `Bear`, `Ferret` ]
      }]
    }]
  },
  Returning100: {
    name: `Returning 100`,
    id: `1c5c4722-1ed3-4904-a508-c8aa611921c5`,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    featType: FeatType.Artifact,
    tags: [ItemTag.magic],
    description: `Spend this hundred dollar bill and it will come back in a day or so.`,
    passives: [{
      type: PassiveTypes.Inventory,
      description: `Returning 100: Spend this hundred dollar bill and it will come back in a day or so.`,
    }]
  },
  Scamulet: {
    name: `Scamulet`,
    id: `5172f8df-bc75-40e7-9765-1dd6e1326fbb`,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    featType: FeatType.Artifact,
    tags: [ItemTag.magic],
    description: `Heats up whenever someone is running a scam on you.`,
    passives: [{
      type: PassiveTypes.Social,
      description: `Scamulet: Heats up whenever someone is running a scam on you.`,
    }]
  },
  WizardTent: {
    name: `Wizard Tent`,
    id: `75cefe9b-4bd3-498d-8e0c-a77a3ea04398`,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    featType: FeatType.Artifact,
    tags: [ItemTag.magic],
    description: `Worn and crappy on the outside, big and luxurious on the inside.`,
  },
  
  // ____ Equipment ____
  
  // More shared items that are more specific
  Binoculars: {
    // rarity: 1,
    name: `Binoculars`,
    id: `20269944-f9cc-482d-8e69-840e42db655f`,
    featType: FeatType.Equipment,
    tags: [ItemTag.far],
    tagInputs: [{ label: `Optional`, options: [ItemTag.small] }],
  },
  Camera: {
    // rarity: 1,
    name: `Camera`,
    id: `bee2fdd5-e18e-42af-8409-561060588514`,
    featType: FeatType.Equipment,
    tags: [ItemTag.close],
    tagInputs: [
      {
        label: `Optional`,
        choose: 1,
        chooseMax: 1,
        options: [ItemTag.small,ItemTag.far],
      },
      {
        label: `Type`,
        choose: 1,
        chooseMax: 1,
        options: [ItemTag.reload, ItemTag.capacity],
      },
      {
        label: `Power`,
        choose: 1,
        chooseMax: 1,
        options: [ItemTag.recharge,ItemTag.batteries],
      }
    ]
  },
  DigitalRecorder: {
    // rarity: 2,
    name: `Digital Recorder`,
    id: `9330dbb4-8613-4dbc-8bb2-eb1a1383dc78`,
    description: `Record audio. Stored on the device's limited, digital memory.`,
    featType: FeatType.Equipment,
    tags: [ItemTag.hand,ItemTag.small,ItemTag.capacity],
    tagInputs: [
      {
        label: `Optional`,
        options: [ItemTag.innocuous,ItemTag.hidden],
      },
      {
        label: `Power`,
        choose: 1,
        chooseMax: 1,
        options: [ItemTag.recharge,ItemTag.batteries],
      },
    ]
  },
  FilmCamera: {
    // rarity: 1,
    name: `Film Camera`,
    id: `89c72ad2-8556-4c23-8d33-43b8f723f486`,
    description: `Records videos. Likely on 8mm or 16mm tapes.`,
    featType: FeatType.Equipment,
    tags: [ItemTag.close,ItemTag.obvious,ItemTag.reload,ItemTag.batteries],
  },
  InfraredCamera: {
    id: `131a041e-ec90-4245-b004-a62775153bf3`,
    name: "Infrared Camera",
    featType: FeatType.Equipment,
    tags: [ItemTag.close],
    tagInputs: [
      {
        label: `Memory`,
        choose: 1,
        chooseMax: 1,
        options: [ItemTag.reload, ItemTag.capacity],
      },
      {
        label: `Power`,
        choose: 1,
        chooseMax: 1,
        options: [ItemTag.recharge,ItemTag.batteries],
      },
    ]
  },
  Laptop: {
    // rarity: 1,
    name: `Laptop Computer`,
    id: `69a33c51-2fd2-4a50-9f38-f16b25842f8d`,
    featType: FeatType.Equipment,
    tags: [ItemTag.batteries],
  },
  LaserMicrophone: {
    // rarity: 1,
    name: `Laser Microphone`,
    id: `96c0d83d-40b5-4dde-9a59-e72385fe71ef`,
    description: `Listen to and record audio occurring on the other side of a distant solid surface, such as glass.`,
    featType: FeatType.Equipment,
    tags: [ItemTag.close,ItemTag.far,ItemTag.batteries]
  },
  LiquorFlask: {
    // rarity: 1,
    name: `Liquor Flask`,
    id: `fe86e0ff-6c97-4ef9-a4b8-1937f6386130`,
    featType: FeatType.Equipment,
    tags: [ItemTag.small],
  },
  NiceSmartphone: {
    name: `Nice Smartphone`,
    id: `65ef35ff-4502-4b84-a987-284640e432f2`,
    description: `Can take better photos and videos than other phones could. Has more storage capacity.

Double check with \`The Keeper\` that this fits the setting or could be flavored to fit in some way.`,
    featType: FeatType.Equipment,
    tags: [ItemTag.close,ItemTag.recharge],
  },
  NightVisionCamera: {
    // rarity: 1,
    name: `Night Vision Camera`,
    id: `291af87a-86d2-4fed-a09e-ec3dd4ba8539`,
    description: `Take decent pictures at night. You can also somewhat see at night using the viewfinder.`,
    featType: FeatType.Equipment,
    tags: [ItemTag.close],
    tagInputs: [{
      label: `Power`,
      choose: 1,
      chooseMax: 1,
      options: [ItemTag.recharge,ItemTag.batteries],
    }]
  },
  ProSoundGear: {
    id: `14701a21-e0f9-4d70-8128-89f722e59dbb`,
    name: "Pro Sound Gear",
    featType: FeatType.Equipment,
    tags: [ItemTag.hand,ItemTag.close,ItemTag.obvious],
    tagInputs: [{
      label: `Power`,
      choose: 1,
      chooseMax: 1,
      options: [ItemTag.recharge,ItemTag.batteries],
    }]
  },
  RemoteControlCameraDrone: {
    // rarity: 1,
    name: `Remote Control Camera Drone`,
    id: `0103ba77-dd15-461c-84dc-ba6efdd20fd6`,
    featType: FeatType.Equipment,
    tags: [ItemTag.close],
    tagInputs: [{
      label: `Power`,
      choose: 1,
      chooseMax: 1,
      options: [ItemTag.recharge,ItemTag.batteries,ItemTag.gasGuzzler],
    }]
  },
  // The Snoop's version below does not have 'remote control' prefix.
  CameraDrone: {
    name: `Camera Drone`,
    id: `ba4ebd85-1620-4f4e-b4ee-f20736c5dc32`,
    featType: FeatType.Equipment,
    tags: [ItemTag.close],
    tagInputs: [{
      label: `Power`,
      choose: 1,
      chooseMax: 1,
      options: [ItemTag.recharge,ItemTag.batteries,ItemTag.gasGuzzler],
    }]
  },
  SLRCamera: {
    // rarity: 2,
    name: `SLRCamera`,
    id: `6b9c417a-882a-42a8-b02e-bd8e8252e1d0`,
    description: `Single-lens reflex camera. Classic photography camera that uses real film that needs to be developed.`,
    featType: FeatType.Equipment,
    tags: [ItemTag.close],
    tagInputs: [
      {
        label: `Lens Options`,
        choose: 1,
        chooseMax: 1,
        options: [ItemTag.far,ItemTag.small],
      },
      {
        label: `Power`,
        choose: 1,
        chooseMax: 1,
        options: [ItemTag.recharge,ItemTag.batteries],
      }
    ]
  },
  StarlightCamera: {
    name: `Starlight Camera`,
    id: `446ef4ee-45b6-4e1c-abbf-c4e6f4a706d3`,
    description: `Color night-vision video camera, but has motion blur that may make moving targets hard to see clearly.`,
    featType: FeatType.Equipment,
    tags: [ItemTag.close,ItemTag.capacity],
  },
  SteadicamRig: {
    id: `84a095ec-422e-4d32-ae40-6501bab730d9`,
    name: "Steadicam Rig",
    description: `Allows filming while moving without sacrificing clarity. You can also still use your hands without putting down your camera (though you may loose the shot.)`,
    featType: FeatType.Equipment,
  },
  TapeRecorder: {
    // rarity: 2,
    name: `Tape Recorder`,
    id: `9330dbb4-8613-4dbc-8bb2-eb1a1383dc78`,
    description: `Record audio onto a cassette tape or mini cassette tape.`,
    featType: FeatType.Equipment,
    tags: [ItemTag.hand,ItemTag.reload],
    tagInputs: [
      {
        label: `Optional`,
        options: [ItemTag.small,ItemTag.innocuous,ItemTag.hidden],
      },
      {
        label: `Power`,
        choose: 1,
        chooseMax: 1,
        options: [ItemTag.recharge,ItemTag.batteries],
      },
    ]
  },
  TinyDigitalCamera: {
    name: `Tiny Digital Camera`,
    id: `498d095a-61fa-4a63-8019-3558aa577ae7`,
    featType: FeatType.Equipment,
    tags: [ItemTag.close,ItemTag.small,ItemTag.batteries],
    tagInputs: [{
      label: `Power`,
      choose: 1,
      chooseMax: 1,
      options: [ItemTag.recharge,ItemTag.batteries],
    }]
  },
  TinyDigitalVideoCamera: {
    // rarity: 1,
    name: `Tiny Digital Video Camera`,
    id: `99450d66-7420-40d1-b157-62c3bcdd9931`,
    description: `Record videos that can be loaded onto the computer.`,
    featType: FeatType.Equipment,
    tags: [ItemTag.close,ItemTag.small,ItemTag.capacity],
    tagInputs: [
      {
        label: `Power`,
        choose: 1,
        chooseMax: 1,
        options: [ItemTag.recharge,ItemTag.batteries],
      }
    ]
  },
  VideoCamera: {
    name: `Video Camera`,
    id: `ae292d3e-4aeb-4895-b71d-2880748e78a1`,
    featType: FeatType.Equipment,
    tags: [ItemTag.close,ItemTag.reload],
    tagInputs: [
      {
        label: `Power`,
        choose: 1,
        chooseMax: 1,
        options: [ItemTag.recharge,ItemTag.batteries],
      }
    ]
  },
  
  // The Hex & The Spell-Slinger
  HexAmulet: {
    name: `Amulet`,
    id: `7d80e4bb-1a8b-4651-8e08-4b832cc12b6a`,
    featType: FeatType.Equipment,
    playbooks: [`23bdadbc-b690-4baa-8d96-7c791b4d66da`,`3f493473-f122-4255-8b19-3635908b2664`], // // The Hex & The Spell-Slinger
    tags: [ItemTag.magic,ItemTag.spellFocus],
  },
  HexWand: {
    name: `Wand`,
    id: `3ed85ad9-1bb8-436c-85d5-8fa3288f4bc7`,
    featType: FeatType.Equipment,
    playbooks: [`23bdadbc-b690-4baa-8d96-7c791b4d66da`,`3f493473-f122-4255-8b19-3635908b2664`], // // The Hex & The Spell-Slinger
    tags: [ItemTag.magic,ItemTag.spellFocus],
  },
  HexStaff: {
    name: `Staff`,
    id: `d408d678-200f-4948-a823-246f96d366e0`,
    featType: FeatType.Equipment,
    playbooks: [`23bdadbc-b690-4baa-8d96-7c791b4d66da`,`3f493473-f122-4255-8b19-3635908b2664`], // // The Hex & The Spell-Slinger
    tags: [ItemTag.magic,ItemTag.spellFocus],
  },
  HexChalk: {
    name: `Chalk`,
    id: `950a19b1-8899-4a12-8cf7-eea52435b1d3`,
    featType: FeatType.Equipment,
    playbooks: [`23bdadbc-b690-4baa-8d96-7c791b4d66da`,`3f493473-f122-4255-8b19-3635908b2664`], // // The Hex & The Spell-Slinger
    tags: [ItemTag.spellGrist],
  },
  HexCharcoal: {
    name: `Charcoal`,
    id: `0abee32d-3cf7-48ac-81b0-7c39496aeb5f`,
    featType: FeatType.Equipment,
    playbooks: [`23bdadbc-b690-4baa-8d96-7c791b4d66da`,`3f493473-f122-4255-8b19-3635908b2664`], // // The Hex & The Spell-Slinger
    tags: [ItemTag.spellGrist],
  },
  HexApothecaryBag: {
    name: `Apothecary Bag`,
    id: `07a1ec91-35e4-4c3b-8016-7c76a20ab878`,
    featType: FeatType.Equipment, 
    playbooks: [`23bdadbc-b690-4baa-8d96-7c791b4d66da`,`3f493473-f122-4255-8b19-3635908b2664`], // // The Hex & The Spell-Slinger
    tags: [ItemTag.spellGrist],
    description: `A small bag containing powders, oils, plants, salts, etc. that are consumed by casting spells.`,
  },

  // The Searcher
  DocumentingGear: {
    name: `A bag of cameras and microphones`,
    id: `2dba0a2c-4006-43a1-a304-68893916e5e7`,
    featType: FeatType.Equipment,
    playbooks: [`f7b73a9a-6447-42f8-b373-b71341bdad99`], // The Searcher
  },
  ForensicTools: {
    name: `Forensic Tools`,
    id: `bb9ae976-aeb3-46e3-927a-7a15d602c5c1`,
    featType: FeatType.Equipment,
    playbooks: [`f7b73a9a-6447-42f8-b373-b71341bdad99`], // The Searcher
    description: `Tools used for finding, documenting, and preserving evidence at a crime scene`,
  },
  GhostHuntingTools: {
    name: `Ghost Hunting Tools`,
    id: `3f6a6094-7281-4a15-96af-9e3ec37c255e`,
    featType: FeatType.Equipment,
    playbooks: [`f7b73a9a-6447-42f8-b373-b71341bdad99`], // The Searcher
    description: `Tools used for locating and tracking ghosts. (Not killing them.)`,
  },
  ScientificMeasuringTools: {
    name: `Scientific Measuring Tools`,
    id: `d08568d2-4c6e-42b2-aa84-ade901d360f3`,
    featType: FeatType.Equipment,
    playbooks: [`f7b73a9a-6447-42f8-b373-b71341bdad99`], // The Searcher
    description: `Tools for taking various scientific, and accurate measurements.`,
  },
  CryptidHuntingGear: {
    name: `Cryptid Hunting Gear`,
    id: `df839b6c-ddc5-4b11-b0b6-6bdb90686f34`,
    featType: FeatType.Equipment,
    playbooks: [`f7b73a9a-6447-42f8-b373-b71341bdad99`], // The Searcher
    description: `Gear used for scouting out and tracking cryptids in the wild. (Not killing them.)`,
  },
  StrangeCaseFiles: {
    // rarity: 1,
    name: `Strange Case Files`,
    id: `e4d48126-94f5-48c1-a9d6-565aeddc0b8d`,
    featType: FeatType.Equipment,
    playbooks: [`f7b73a9a-6447-42f8-b373-b71341bdad99`], // The Searcher
    description: `Historical documents and witness reports of strange events.`,
  },
  Maps: {
    // rarity: 1,
    id: `b384a55b-4c74-4105-81b8-f9c192288f45`,
    name: `Maps, Blueprints, and Building Reports`,
    featType: FeatType.Equipment,
    playbooks: [`f7b73a9a-6447-42f8-b373-b71341bdad99`], // The Searcher
    description: `A bunch of maps, blueprints, and building reports for significant places.`,
  },
  
  // The Snoop
  ElectromagneticFieldDetector: {
    name: `Electromagnetic Field Detector`,
    id: `a4fd8d67-fe63-42b5-8fb8-f85ba51d6ba4`,
    featType: FeatType.Equipment,
    playbooks: [`cfecc496-d1c1-4b30-af48-0f3f41cd02c0`], // The Snoop
    tags: [ItemTag.hand,ItemTag.close,ItemTag.batteries],
  },
  TemperatureFluctuationDetector: {
    name: `Temperature Fluctuation Detector`,
    id: `5fda937c-440f-4c82-9397-b9fe389bdda0`,
    featType: FeatType.Equipment,
    playbooks: [`cfecc496-d1c1-4b30-af48-0f3f41cd02c0`], // The Snoop
    tags: [ItemTag.hand,ItemTag.close,ItemTag.batteries],
  },
  OuijaBoard: {
    name: `OuijaBoard`,
    id: `3561513a-aa0f-47e7-878a-07db711f0610`,
    featType: FeatType.Equipment,
    playbooks: [`cfecc496-d1c1-4b30-af48-0f3f41cd02c0`], // The Snoop
    tags: [ItemTag.magic]
  },
  HumidityMeter: {
    name: `Humidity Meter`,
    id: `9cac6d28-fbc4-4c81-b394-48d4cd82ec82`,
    featType: FeatType.Equipment,
    playbooks: [`cfecc496-d1c1-4b30-af48-0f3f41cd02c0`], // The Snoop
    tags: [ItemTag.batteries],
  },
  DowsingRods: {
    name: `Dowsing Rods`,
    id: `65f198e6-e4e2-4b8c-b8c0-e0e6c781f9c7`,
    featType: FeatType.Equipment,
    playbooks: [`cfecc496-d1c1-4b30-af48-0f3f41cd02c0`], // The Snoop
    tags: [ItemTag.close,ItemTag.magic],
    description: `Primarily used for finding water, but can be used in many other forms of divination, like yes-no-unknown questions.`,
  },
  ChemistryTestKit: {
    name: `Chemistry Test Kit`,
    id: `e9057f60-3442-4858-bab9-941ba8904501`,
    featType: FeatType.Equipment,
    playbooks: [`cfecc496-d1c1-4b30-af48-0f3f41cd02c0`], // The Snoop
    tags: [ItemTag.intimate,ItemTag.temperamental,ItemTag.irritating]
  },
  MetalDetector: {
    name: `Metal Detector`,
    id: `58677f5f-38f6-415c-8451-8053be69c4b1`,
    featType: FeatType.Equipment,
    playbooks: [`cfecc496-d1c1-4b30-af48-0f3f41cd02c0`], // The Snoop
    tags: [ItemTag.hand,ItemTag.batteries],
  },
  Compass: {
    name: `Compass`,
    id: `3b3f9884-399c-4063-8fb6-030c7b0169b6`,
    featType: FeatType.Equipment,
    playbooks: [`cfecc496-d1c1-4b30-af48-0f3f41cd02c0`], // The Snoop
  },
  GPSReceiver: {
    name: `GPS Receiver`,
    id: `bf3c622f-70ad-4071-80a1-bfdd2b427fd1`,
    featType: FeatType.Equipment,
    playbooks: [`cfecc496-d1c1-4b30-af48-0f3f41cd02c0`], // The Snoop
    tags: [ItemTag.batteries]
  },
  LaserRangefinder: {
    name: `Laser Rangefinder`,
    id: `cf1596f2-01b0-4f12-b277-5488e35c9e5d`,
    featType: FeatType.Equipment,
    playbooks: [`cfecc496-d1c1-4b30-af48-0f3f41cd02c0`], // The Snoop
    tags: [ItemTag.close,ItemTag.far,ItemTag.batteries],
    description: `Finds the total distance to a given target.`,
  },
  Pendulum: {
    name: `Pendulum`,
    id: `8b80093d-f145-4c79-8081-421740beb81a`,
    featType: FeatType.Equipment,
    playbooks: [`cfecc496-d1c1-4b30-af48-0f3f41cd02c0`], // The Snoop
    tags: [ItemTag.magic],
    description: `Used to ask simple yes-no-unsure questions. When used with a divination board it can provide one-letter responses to questions.`,
  },
  TarotDeck: {
    name: `Tarot Deck`,
    id: `f26c8824-1f1a-49a0-8f1a-aa8c78626218`,
    featType: FeatType.Equipment,
    playbooks: [`cfecc496-d1c1-4b30-af48-0f3f41cd02c0`], // The Snoop
    tags: [ItemTag.magic],
    description: `A tarot or oracle deck that can provide abstract responses to questions.`,
  },
  Magic8Ball: {
    id: `ad35a83d-721b-4786-8939-1c1a9d663b59`,
    name: `Magic 8-Ball`,
    featType: FeatType.Equipment,
    playbooks: [`cfecc496-d1c1-4b30-af48-0f3f41cd02c0`], // The Snoop
    tags: [ItemTag.magic],

    description: `Ask yes-no-unknown questions. Possible replies: Yes; As I see it, yes; Most likely; Outlook good; Signs point to yes;`,
    longDescription: `Ask yes-no-unknown questions.

Possible replies:
* Affirmative Examples:
  * Yes
  * It is certain
  * Without a doubt
  * As I see it, yes
  * Most likely
  * Outlook good
  * Signs point to yes
* Non-committal Examples:
  * Maybe
  * Unclear
  * Ask again later
  * Better not tell you now
  * Cannot predict now
* Negative Examples:
  * No
  * Doubtful
  * Don't count on it
  * My sources say no
  * Outlook not so good`,
  },
  
  // The Spooktacular

  TicketsToAShow: {
    name: `Tickets to a Show`,
    id: `cc5e2c73-ecb9-4a7a-ba35-f0b8f5628e44`,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    featType: FeatType.Equipment
  },
  SnackVouchers: {
    name: `Snack Vouchers`,
    id: `41ad766a-c375-44e2-bfee-a007bb59cdeb`,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    featType: FeatType.Equipment,
  },
  DecksOfCards: {
    name: `Decks of Cards`,
    id: `8bc16d50-72de-4741-ab21-de123c969511`,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    featType: FeatType.Equipment,
  },
  PairsOfDice: {
    name: `Pairs of Dice`,
    id: `8681d34d-a0df-4b56-b8a9-8b611a90a6ee`,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    featType: FeatType.Equipment,
  },
  MagicTrickProps: {
    name: `Magic Trick Props`,
    id: `848d5cb3-90cd-4c07-bf65-67dffd9fb6ff`,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    featType: FeatType.Equipment,
  },
  CampingGear: {
    name: `Camping Gear`,
    id: `cfae07bc-45fa-4996-b7e3-93efbd7f6a48`,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    featType: FeatType.Equipment,
  },
  Makeup: {
    name: `Makeup`,
    id: `d23db6b5-4872-4ac8-8d1e-4ba50b32756c`,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    featType: FeatType.Equipment,
  },
  CostumeAccessories: {
    name: `Costume Accessories`,
    id: `b7bb5e1f-66f2-4e25-bdd2-4c81b1874fee`,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    featType: FeatType.Equipment,
  },
  
  // ____ Vehicles ____

  Bicycle: {
    // rarity: 1
    name: `Bicycle`,
    id: `9e83f769-6ff8-4a11-b34f-3230c51eadae`,
    featType: FeatType.Vehicle,
    tags: [ItemTag.nimble],
    tagInputs: [
      {
        label: `Good`,
        choose: 1,
        chooseMax: 2,
        options: [ItemTag.fast, ItemTag.offRoad, ItemTag.stealthy, ItemTag.tough],
      },
      {
        label: `Bad`,
        choose: 1,
        options: [
          ItemTag.beatenUp, ItemTag.loud, ItemTag.obvious, ItemTag.old, ItemTag.sluggish,
          ItemTag.temperamental, ItemTag.uncomfortable,
        ],
      }
    ],
  },
  BoxTruck: {
    name: `Box Truck`,
    id: `b672c9b4-d5af-42f8-870a-d010ed3b0ddf`,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    featType: FeatType.Vehicle,
    tagInputs: [
      {
        label: `Good`,
        choose: 1,
        chooseMax: 2,
        options: [
          ItemTag.anonymous, ItemTag.fast, ItemTag.intimidating, ItemTag.medKit, ItemTag.monsterCage, ItemTag.nimble,
          ItemTag.roomy, ItemTag.sleepingSpace, ItemTag.toolkit, ItemTag.tough,
        ],
      },
      {
        label: `Bad`,
        choose: 1,
        options: [ 
          ItemTag.beatenUp, ItemTag.gasGuzzler, ItemTag.loud, ItemTag.obvious, ItemTag.old, ItemTag.sluggish,
          ItemTag.temperamental, ItemTag.uncomfortable,
        ],
      }
    ]
  },
  Car: {
    name: `Car`,
    id: `7eed1db1-85d7-4c86-99f3-244141de6afc`,
    featType: FeatType.Vehicle,
    tagInputs: [
      {
        label: `Good`,
        choose: 1,
        chooseMax: 2,
        options: [
          ItemTag.anonymous, ItemTag.classic, ItemTag.fast, ItemTag.intimidating, ItemTag.medKit, ItemTag.nimble,
          ItemTag.offRoad, ItemTag.roomy, ItemTag.stealthy, ItemTag.toolkit, ItemTag.tough,
        ],
      },
      {
        label: `Bad`,
        choose: 1,
        options: [
          ItemTag.beatenUp, ItemTag.gasGuzzler, ItemTag.loud, ItemTag.obvious, ItemTag.old, ItemTag.sluggish,
          ItemTag.temperamental, ItemTag.uncomfortable,
        ],
      }
    ]
  },
  Motorcycle: {
    name: `Motorcycle`,
    id: `e126e509-d29d-430d-b622-6c5cf210aaed`,
    featType: FeatType.Vehicle,
    tags: [ItemTag.nimble],
    tagInputs: [
      {
        label: `Good`,
        choose: 1,
        chooseMax: 2,
        options: [
          ItemTag.anonymous, ItemTag.classic, ItemTag.fast, ItemTag.intimidating, ItemTag.medKit, ItemTag.nimble,
          ItemTag.offRoad, ItemTag.stealthy, ItemTag.toolkit, ItemTag.tough,
        ],
      },
      {
        label: `Bad`,
        choose: 1,
        options: [
          ItemTag.beatenUp, ItemTag.gasGuzzler, ItemTag.loud, ItemTag.obvious, ItemTag.old, ItemTag.sluggish,
          ItemTag.temperamental, ItemTag.uncomfortable,
        ],
      }
    ]
  },
  MotorcycleWithSidecar: {
    name: `Motorcycle with Sidecar`,
    id: `955030f4-ac27-4cce-ab54-610cf6de07a0`,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    featType: FeatType.Vehicle,
    tagInputs: [
      {
        label: `Good`,
        choose: 1,
        chooseMax: 2,
        options: [
          ItemTag.classic, ItemTag.fast, ItemTag.intimidating, ItemTag.medKit, ItemTag.nimble, ItemTag.offRoad,
          ItemTag.stealthy, ItemTag.toolkit, ItemTag.tough,
        ],
      },
      {
        label: `Bad`,
        choose: 1,
        options: [
          ItemTag.beatenUp, ItemTag.gasGuzzler, ItemTag.loud, ItemTag.obvious, ItemTag.old, ItemTag.sluggish,
          ItemTag.temperamental, ItemTag.uncomfortable,
        ],
      }
    ]
  },
  Pickup: {
    name: `Pickup Truck`,
    id: `7d95f78f-e53d-4bd2-a108-5f809c7a49d4`,
    featType: FeatType.Vehicle,
    tagInputs: [
      {
        label: `Good`,
        choose: 1,
        chooseMax: 2,
        options: [
          ItemTag.fast, ItemTag.intimidating, ItemTag.medKit, ItemTag.monsterCage, ItemTag.offRoad, ItemTag.roomy,
          ItemTag.sleepingSpace, ItemTag.toolkit, ItemTag.tough,
        ],
      },
      {
        label: `Bad`,
        choose: 1,
        options: [ 
          ItemTag.beatenUp, ItemTag.gasGuzzler, ItemTag.loud, ItemTag.obvious, ItemTag.old, ItemTag.sluggish,
          ItemTag.temperamental, ItemTag.uncomfortable,
        ],
      }
    ]
  },
  Professional: {
    name: `Monster Hunting Vehicle`,
    id: `820c1ce2-8bd4-4b6c-a5c1-982841d5ea0a`,
    description: `A truck, van, or car built for monster hunting.`,
    featType: FeatType.Vehicle,
    tagInputs: [
      {
        label: `Good`,
        choose: 1,
        chooseMax: 2,
        options: [
          ItemTag.anonymous, ItemTag.armored, ItemTag.classic, ItemTag.concealedWeapons, ItemTag.fast,
          ItemTag.intimidating, ItemTag.medKit, ItemTag.monsterCage, ItemTag.nimble, ItemTag.offRoad, ItemTag.roomy,
          ItemTag.sleepingSpace, ItemTag.stealthy, ItemTag.surveillanceGear, ItemTag.toolkit, ItemTag.tough,
        ],
      },
      {
        label: `Bad`,
        choose: 1,
        options: [
          ItemTag.beatenUp, ItemTag.gasGuzzler, ItemTag.loud, ItemTag.obvious, ItemTag.old, ItemTag.sluggish,
          ItemTag.temperamental, ItemTag.uncomfortable,
        ],
      }
    ]
  },
  Skateboard: {
    // rarity: 1
    name: `Skateboard`,
    id: `29ae1d8c-191e-4f8d-bc9b-709f83a86d9a`,
    featType: FeatType.Vehicle,
    tags: [ItemTag.nimble],
  },
  Van: {
    name: `Van`,
    id: `47c91019-8b3d-490b-bf92-e2b9b29f4ef2`,
    featType: FeatType.Vehicle,
    tagInputs: [
      {
        label: `Good`,
        choose: 1,
        chooseMax: 2,
        options: [
          ItemTag.anonymous, ItemTag.classic, ItemTag.fast, ItemTag.intimidating, ItemTag.medKit, ItemTag.nimble,
          ItemTag.offRoad, ItemTag.roomy, ItemTag.sleepingSpace, ItemTag.stealthy, ItemTag.toolkit, ItemTag.tough,
        ],
      },
      {
        label: `Bad`,
        choose: 1,
        options: [
          ItemTag.beatenUp, ItemTag.gasGuzzler, ItemTag.loud, ItemTag.obvious, ItemTag.old, ItemTag.sluggish,
          ItemTag.temperamental, ItemTag.uncomfortable,
        ],
      }
    ]
  },
  
  // ____ Weapons ____

  // Assault rifle is different for all 3
  // * Crooked      (3-harm area close/far            )
  // * Professional (3-harm area       far loud reload)
  // * Wronged      (3-harm area close     loud reload)
  Athame: {
    // rarity: 1,
    name: `Athame`,
    id: `46d6be4c-79c6-46b9-b421-851a1d5e8f85`,
    description: `A Large Ceremonial Dagger`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand,ItemTag.magic,ItemTag.silver],
    attacks: [{ harm: 2 }],
  },
  Axe: {
    // rarity: 1,
    name: `Axe`,
    id: `b099d794-ccf2-44e5-b92e-0c32e58f47b8`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand,ItemTag.messy],
    attacks: [{ harm: 2 }],
  },
  BaseballBat: {
    // rarity: 5,
    name: `Baseball Bat`,
    id: `69395473-e2cf-4482-a8b8-d0a4e6f2850a`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand,ItemTag.messy],
    attacks: [{ harm: 2 }],
    tagInputs: [{
      label: `Character fit`,
      options: [ItemTag.innocuous]
    }]
  },
  BigAxe: {
    // rarity: 1,
    name: `Big Axe`,
    id: `b099d794-ccf2-44e5-b92e-0c32e58f47b8`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.heavy, ItemTag.messy],
    attacks: [{ harm: 3 }],
  },
  BigFlashlight: {
    // rarity: 1,
    name: `Watchman's Flashlight`,
    id: `22901db9-d577-475e-bb06-156123803afa`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.innocuous, ItemTag.useful],
    attacks: [{ harm: 1 }],
  },
  BigKnife: {
    // rarity: 6,
    name: `Big Knife`,
    id: `2706a194-3fff-48eb-9da8-72ef3ce33b07`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand],
    attacks: [{ harm: 1 }],
  },
  BigSword: {
    // rarity: 3,
    name: `Big Sword`,
    id: `16425916-a0cd-45b5-b2e7-9b303359efd4`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.heavy, ItemTag.messy],
    attacks: [{ harm: 3 }],
  },
  BlessedKnife: {
    // rarity: 1,
    name: `Blessed Knife`,
    id: `638228b0-7771-449e-b16b-cf93c5747ca4`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.holy],
    attacks: [{ harm: 2 }],
  },
  BrassKnuckles: {
    // rarity: 2,
    name: `Brass Knuckles`,
    id: `80e7c207-59d3-40d6-8cd2-ddad1a671c4a`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.small], // TODO: Had tag ItemTag.quiet, !? If that's quiet, then knives should al be more quiet. 
    attacks: [{ harm: 1 }],
  },
  ButterflyKnife: {
    // rarity: 1,
    name: `Butterfly Knife`,
    id: `25c0c97d-e5eb-430a-be1f-6e859ef2b62b`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.small],
    attacks: [{ harm: 1 }],
  },
  ColdIronSword: {
    // rarity: 1,
    name: `Cold Iron Sword`,
    id: `25ff80d9-1b5d-4bd0-9082-51dbf3c42a69`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.messy, ItemTag.coldIron],
    attacks: [{ harm: 2 }],
  },
  CricketBat: {
    // rarity: 5,
    name: `Cricket Bat`,
    id: `54445f18-d0d5-434c-b0cb-26542ec31f91`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.messy],
    attacks: [{ harm: 2 }],
    tagInputs: [{
      label: `Character fit`,
      options: [ItemTag.innocuous]
    }]
  },
  Crossbow: {
    // rarity: 2,
    name: `Crossbow`,
    id: `7d0375e9-dace-41f4-9585-7a2bc9294d34`,
    featType: FeatType.Weapon,
    tags: [ItemTag.close, ItemTag.slow],
    attacks: [{ harm: 2 }],
  },
  Crowbar: {
    name: `Crowbar`,
    id: `14c2191e-7a86-4bea-897d-6f57a152eec2`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand,ItemTag.useful,ItemTag.messy],
    attacks: [{ harm: 2 }],
  },
  FightingSticks: {
    // rarity: 1,
    name: `Fighting Sticks`,
    id: `fad74d14-16ae-414b-b4a8-5521fb858dba`,
    description: `Two shorter sticks for melee fighting, like escrima sticks or a pair of tonfa.`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.quick],
    attacks: [{ harm: 1 }],
  },
  FireAxe: {
    // rarity: 2,
    name: `Fire Axe`,
    id: `13e3920d-8be8-44c3-88c3-a62b45aae925`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.heavy, ItemTag.messy],
    attacks: [{ harm: 3 }],
  },
  FiveDemonBag: {
    name: `Five Demon Bag`,
    id: `0d89fa7b-1a2d-4380-a3dd-36d649172f6f`,
    description: `A divine weapon from beyond.`,
    featType: FeatType.Weapon,
    tags: [ItemTag.close, ItemTag.magic, ItemTag.holy],
    attacks: [{ harm: 3 }],
  },
  FlamingSword: {
    // rarity: 1
    name: `Flaming Sword`,
    id: `f5d91c17-26b4-4c7a-991c-f0554a2939e5`,
    description: `A divine weapon from beyond.`,
    featType: FeatType.Weapon,
    attacks: [{ harm: 3 }], tags: [ItemTag.hand, ItemTag.fire, ItemTag.holy],
  },
  Flamethrower: {
    // rarity: 1,
    name: `Flamethrower`,
    id: `cc2768e1-9757-4641-b22e-1df1fdf0d014`,
    featType: FeatType.Weapon,
    tags: [ItemTag.close, ItemTag.fire, ItemTag.heavy, ItemTag.volatile],
    attacks: [{ harm: 3 }],
  },
  Garrote: {
    // rarity: 1,
    name: `Garrote`,
    id: `4d7a843f-9239-4995-b9d8-c6d048f82d32`,
    featType: FeatType.Weapon,
    tags: [ItemTag.intimate, ItemTag.quiet, ItemTag.small],
    attacks: [{ harm: 2 }],
  },
  GolfClub: {
    // rarity: 5,
    name: `Golf Club`,
    id: `7be80211-94a9-4105-9446-c508c2207e9e`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.messy],
    attacks: [{ harm: 2 }],
    tagInputs: [{
      label: `Character fit`,
      options: [ItemTag.innocuous]
    }]
  },
  GrenadeLauncher: {
    name: `Grenade Launcher`,
    id: `a18c5ab6-06e6-40ad-8333-33a4fe1b66f5`,
    featType: FeatType.Weapon,
    tags: [ItemTag.far, ItemTag.area, ItemTag.messy, ItemTag.loud, ItemTag.reload],
    attacks: [{ harm: 4 }],
  },
  Grenades: {
    name: `Grenades`,
    id: `0d5ab38b-3b5b-484a-9bee-44cb3b9b52b8`,
    featType: FeatType.Weapon,
    tags: [ItemTag.close, ItemTag.area, ItemTag.messy, ItemTag.loud,],
    attacks: [{ harm: 4 }],
  },
  Handgun: {
    // rarity: 8,
    name: `Handgun`,
    id: `e912196f-5064-4486-8e2c-312d343e75f7`,
    featType: FeatType.Weapon,
    tags: [ItemTag.close, ItemTag.loud],
    attacks: [{ harm: 2 }],
  },
  HockeyStick: {
    // rarity: 5,
    name: `HockeyStick`,
    id: `7f0daa92-9104-4fbf-beff-c54ef0ff2d6e`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.messy],
    attacks: [{ harm: 2 }],
    tagInputs: [{
      label: `Character fit`,
      options: [ItemTag.innocuous]
    }]
  },
  HoldoutPistol: {
    // rarity: 1,
    name: `Holdout Pistol`,
    id: `193b684d-aab4-436a-91e4-f43e2d953eb6`,
    featType: FeatType.Weapon,
    tags: [ItemTag.close, ItemTag.loud, ItemTag.reload, ItemTag.small],
    attacks: [{ harm: 2 }],
  },

  // Hunting rifle (2-harm far loud) -x5
  // Hunting rifle (3-harm far loud reload) -Mundane
  HuntingRifle: {
    // rarity: 5,
    name: `Hunting Rifle`,
    id: `0eba47e5-e71d-4d20-a2c4-511e445976ac`,
    featType: FeatType.Weapon,
    tags: [ItemTag.far, ItemTag.loud], // No Reload?
    attacks: [{ harm: 2 }],
  },
  IncapacitatingSpray: {
    name: `Incapacitating Spray`,
    id: `b2219f39-50ac-45c2-a37c-6183fe24ee78`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.irritating],
    attacks: [{ harm: 1 }],
  },
  JujuBag: {
    // rarity: 1,
    name: `Juju Bag`,
    id: `8b931454-b630-434e-b029-967dd1ab2081`,
    featType: FeatType.Weapon,
    tags: [ItemTag.far, ItemTag.magic],
    attacks: [{ harm: 1 }],
  },
  Knife: {
    // rarity: 1,
    name: `Knife`,
    id: `8ce0de8b-585a-4de7-9db7-44d835347312`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.small],
    attacks: [{ harm: 1 }],
  },
  Mace: {
    // rarity: 1,
    name: `Mace`,
    id: `6634a227-4b83-4be1-b1ce-93671378638c`,
    description: `Old-fashioned Mace weapon that is a stick with a fancy bludgeoning head.`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.messy],
    attacks: [{ harm: 2 }],
  },
  MagicDagger: {
    // rarity: 1,
    name: `Magic Dagger`,
    id: `24c1536b-0e49-4b75-aa16-ef0f1357b641`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.magic],
    attacks: [{ harm: 2 }],
  },
  Magnum: {
    // rarity: 5,
    name: `Magnum`,
    id: `9a73c6bf-5e97-47f8-9f15-b91e879fb06b`,
    featType: FeatType.Weapon,
    tags: [ItemTag.close, ItemTag.loud, ItemTag.reload],
    attacks: [{ harm: 3 }],
  },
  MartialArtsTraining: {
    name: `Martial Arts Training`,
    id: `6af59f8b-cf26-4662-a7dd-cc0c9f2d3344`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.innocuous],
    attacks: [{ harm: 1 }],
  },
  MultiTool: {
    // rarity: 3,
    id: `c2bae72f-5264-45b6-9e86-9e6710f3e199`,
    name: `Multi-tool`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.useful, ItemTag.small],
    attacks: [{ harm: 1 }],
  },
  Nunchuks: {
    // rarity: 2,
    name: `Nunchuks`,
    id: `bea44b0e-3f7f-41bd-9909-87c6b1251fdf`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.area],
    attacks: [{ harm: 2 }],
  },
  Pocketknife: {
    // rarity: 3,
    name: `Pocketknife`,
    id: `1f6c84ed-2ee9-4325-b1fd-591d2f7a6bf3`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.useful, ItemTag.small],
    attacks: [{ harm: 1 }],
  },
  RazorWhip: {
    name: `Razor Whip`,
    id: `c483daf7-9ad4-4c62-949c-6595e741daf9`,
    description: `A divine weapon from beyond.`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.area, ItemTag.messy, ItemTag.holy],
    attacks: [{ harm: 3 }],
  },
  // .22 revolver (1-harm close reload small)
  // .38 revolver (2-harm close reload loud) -x9
  // Old revolver (2-harm close reload loud) -Spell Slinger
  Revolver22: {
    // rarity: 1,
    id: `5653c913-463a-4cbf-9578-df3962889cc7`,
    name: `.22 Revolver`,
    featType: FeatType.Weapon,
    tags: [ItemTag.close, ItemTag.reload, ItemTag.small],
    attacks: [{ harm: 1 }],
  },
  Revolver38: {
    // rarity: 9,
    id: `4e08951a-1c46-4538-996b-e9bb114a6c85`,
    name: `.38 Revolver`,
    featType: FeatType.Weapon,
    tags: [ItemTag.close, ItemTag.reload, ItemTag.loud],
    attacks: [{ harm: 2 }],
  },
  SapGloves: {
    // rarity: 1,
    name: `Sap Gloves`,
    id: `dc9f95e8-d84d-4ef4-8882-b9a33f9f5c77`,
    description: `Weighted gloves, usually with metal bearings swen into the knuckles.`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.small],
    attacks: [{ harm: 1 }],
  },
  Shillelagh: {
    // rarity: 1,
    name: `Shillelagh`,
    id: `61d09b83-ba0f-4cff-b243-080549a07822`,
    description: `A walking stick or staff of some kind with a large knot or ball at one end, perfect for bludgeoning.`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.balanced],
    attacks: [{ harm: 1 }],
  },
  // Shotgun (3-harm close messy) -x5
  // Shotgun (3-harm close messy loud) -x5
  Shotgun: {
    // rarity: 5,
    name: `Shotgun`,
    id: `e0f82978-e7f7-4dc6-8cc1-4e1ba4b0f565`,
    featType: FeatType.Weapon,
    tags: [ItemTag.close, ItemTag.loud, ItemTag.messy], // TODO: No reload!?
    attacks: [{ harm: 3 }],
  },
  ShotgunLoud: {
    // rarity: 5,
    name: `Loud Shotgun`,
    id: `e0f82978-e7f7-4dc6-8cc1-4e1ba4b0f565`,
    featType: FeatType.Weapon,
    tags: [ItemTag.close, ItemTag.loud, ItemTag.messy, ItemTag.loud], // TODO: No reload!?
    attacks: [{ harm: 3 }],
  },
  SilverKnife: {
    // rarity: 1,
    name: `Silver Knife`,
    id: `c788a129-400a-46ec-a637-8a08dad4add3`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.silver],
    attacks: [{ harm: 1 }],
  },
  SilverSword: {
    // rarity: 1,
    name: `Silver Sword`,
    id: `0d1f8b93-66b0-4ed6-a343-84b250109592`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.messy, ItemTag.silver],
    attacks: [{ harm: 2 }],
  },
  SilverTrident: {
    name: `Silver Trident`,
    id: `d67eb2b2-504a-4461-8eb8-41f29e342159`,
    description: `A divine weapon from beyond.`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.silver, ItemTag.holy],
    attacks: [{ harm: 3 }],
  },
  Sledgehammer: {
    // rarity: 2,
    name: `Sledgehammer`,
    id: `b3c277be-cb1a-4247-af1f-e98f72509339`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.heavy, ItemTag.messy],
    attacks: [{ harm: 3 }],
  },
  SmallHandgun: {
    // rarity: 3,
    name: `Small Handgun`,
    id: `9cd078db-1b78-4e75-9a8a-6e551810e478`,
    featType: FeatType.Weapon,
    tags: [ItemTag.close, ItemTag.loud, ItemTag.reload],
    attacks: [{ harm: 2 }],
  },
  // Sniper rifle  (3-harm far) -Initiate
  // Sniper rifle  (4-harm far) -Professional
  SniperRifle: {
    // rarity: 2,
    name: `Sniper Rifle`,
    id: `0cea6d44-5f8b-483e-ace7-1e1cd9362f61`,
    featType: FeatType.Weapon,
    tags: [ItemTag.far],
    attacks: [{ harm: 3 }],
  },
  SniperRifleHC: {
    // rarity: 2,
    name: `High Caliber Sniper Rifle`,
    id: `d8370e5f-5f7f-4a8d-a205-26885e9f5465`,
    featType: FeatType.Weapon,
    tags: [ItemTag.far],
    attacks: [{ harm: 4 }],
  },
  Spear: {
    // rarity: 1,
    name: `Spear`,
    id: `ed08a23c-06c1-400b-a3e1-3a32d540072d`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.close],
    attacks: [{ harm: 2 }],
  },
  Staff: {
    // rarity: 1,
    name: `Staff`,
    id: `3e1e53c0-19bd-4123-b01b-519333ae8c56`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand,ItemTag.balanced,ItemTag.large],
    attacks: [{ harm: 1 }],
  },
  StunGun: {
    name: `Stun Gun`,
    id: `beeec359-cc40-4f5f-b8e4-c33bd15e0159`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand,ItemTag.stun,ItemTag.electricity,ItemTag.batteries],
    attacks: [{ harm: 1 }],
  },
  // Submachine gun (2-harm close area reload) -Crooked
  // Submachine gun (3-harm close area loud reload) -Professional
  SubmachineGun: {
    // rarity: 1,
    name: `Submachine Gun`,
    id: `d8593b2f-daff-45f3-9dcc-bdad9e048fa6`,
    description: `A lower caliber or older SMG.`, // Like a 9mm Uzi or a Tommy gun.
    featType: FeatType.Weapon,
    tags: [ItemTag.close, ItemTag.reload, ItemTag.area],
    attacks: [{ harm: 2 }],
  },
  SubmachineGunHC: { // Professional
    // rarity: 1,
    name: `High Caliber Submachine Gun`,
    id: `56d9c9ff-85f8-4eb8-ac6d-3639f273facc`,
    description: `A higher caliber or higher-tech SMG.`, // Like an .45 Uzi or an MP-7.
    featType: FeatType.Weapon,
    tags: [ItemTag.close, ItemTag.reload, ItemTag.area, ItemTag.loud],
    attacks: [{ harm: 3 }],
  },
  Switchblade: {
    // rarity: 2,
    name: `Switchblade`,
    id: `1b386c0d-cc5b-4a33-85cc-f98d64985cd2`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.small],
    attacks: [{ harm: 1 }],
  },
  Sword: {
    // rarity: 2,
    name: `Sword`,
    id: `392901df-c2b2-404a-9c45-3bd39bc6750a`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.messy],
    attacks: [{ harm: 2 }],
  },
  ThrowingKnives: {
    // rarity: 1,
    name: `Throwing Knives`,
    id: `b4c2e87b-2423-477f-bcba-e3afc0fb6292`,
    featType: FeatType.Weapon,
    tags: [ItemTag.close, ItemTag.many, ItemTag.small],
    attacks: [{ harm: 1 }],
  },
  ThunderHammer: {
    name: `Thunder Hammer`,
    id: `cdf705e3-86f4-4b3d-b6bf-0d98a20a66e3`,
    description: `A divine weapon from beyond.`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.stun, ItemTag.holy],
    attacks: [{ harm: 3 }],
  },
  WalkingStick: {
    name: `Walking Stick`,
    id: `1df20d7c-c7c1-468a-b23b-f17128f1f85c`,
    featType: FeatType.Weapon,
    tags: [ItemTag.hand,ItemTag.innocuous],
    attacks: [{ harm: 1 }],
  },
  WoodenStakesAndMallet: {
    // rarity: 1,
    name: `Wooden Stakes & Mallet`,
    id: `22901db9-d577-475e-bb06-156123803afa`,
    featType: FeatType.Weapon,
    tags: [ItemTag.intimate, ItemTag.slow,ItemTag.wood],
    attacks: [{ harm: 3 }],
  },
  
  // __ Playbook-unique weapons __
  
  // The Crooked
  CrookedAR: {
    name: `Assault Rifle`,
    id: `3d12da2a-2362-46a6-8b13-51e9218935ca`,
    featType: FeatType.Weapon,
    playbooks: [`bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae`], // The Crooked
    tags: [ItemTag.close, ItemTag.far, ItemTag.area],
    attacks: [{ harm: 3 }],
  },
  // The Mundane
  MundaneHuntingRifle: {
    // rarity: 1,
    name: `High Caliber Hunting Rifle`,
    id: `5590dcd9-8f11-4d23-b457-1fee5d4d9af6`,
    featType: FeatType.Weapon,
    playbooks: [`b03c7fb1-9ce4-4cba-a527-6c1380ac5de0`], // The Mundane
    tags: [ItemTag.far, ItemTag.loud, ItemTag.reload],
    attacks: [{ harm: 3 }],
  },
  // The Professional
  ProfessionalAR: {
    name: `Assault Rifle`,
    id: `4108e5de-2d3c-4649-b1c0-6e7b96d0edaf`,
    featType: FeatType.Weapon,
    playbooks: [`58924c0d-c015-4fcd-8fd9-ca75f12fd019`], // The Professional
    tags: [ItemTag.close, ItemTag.far, ItemTag.area, ItemTag.loud, ItemTag.reload],
    attacks: [{ harm: 3 }],
  },
  // The Spell-Slinger
  RevolverOld: {
    // rarity: 1,
    name: `Old Revolver`,
    id: `36405f51-6da6-4940-b3ab-48747c79b7ef`,
    featType: FeatType.Weapon,
    playbooks: [`3f493473-f122-4255-8b19-3635908b2664`], // The Spell-Slinger
    tags: [ItemTag.close, ItemTag.reload, ItemTag.loud],
    attacks: [{ harm: 2 }],
  },
  RitualKnife: {
    // rarity: 1,
    name: `Ritual Knife`,
    id: `cf279f55-dd2a-4239-b811-2f6cc0443938`,
    featType: FeatType.Weapon,
    playbooks: [`3f493473-f122-4255-8b19-3635908b2664`], // The Spell-Slinger
    tags: [ItemTag.hand],
    attacks: [{ harm: 1 }],
  },
  HeirloomSword: {
    // rarity: 1,
    name: `Heirloom Sword`,
    id: `19078990-0530-41c2-a5e9-e710124cf5f7`,
    featType: FeatType.Weapon,
    playbooks: [`3f493473-f122-4255-8b19-3635908b2664`], // The Spell-Slinger
    tags: [ItemTag.hand, ItemTag.messy],
    attacks: [{ harm: 2 }],
  },
  // The Spooktacular
  Mallet: {
    name: `Mallet`,
    id: `6650cdad-0413-45b9-a4d1-af01e4677f88`,
    featType: FeatType.Weapon,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    tags: [ItemTag.hand,ItemTag.useful,ItemTag.stun],
    attacks: [{ harm: 1 }],
  },
  Hatchet: {
    name: `Hatchet`,
    id: `065b01fe-dad5-4eed-87ff-6247261042bc`,
    featType: FeatType.Weapon,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    tags: [ItemTag.hand,ItemTag.messy],
    attacks: [{ harm: 2 }],
  },
  SockOfCoins: {
    name: `High Caliber Sniper Rifle`,
    id: `309d49a1-1c95-4aa8-82f7-757998df6ca3`,
    featType: FeatType.Weapon,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    tags: [ItemTag.hand,ItemTag.stun],
    attacks: [{ harm: 1 }],
  },
  
  // The Wronged
  WrongedAR: {
    name: `Assault Rifle`,
    id: `57597991-6397-4496-b2b8-73505addc186`,
    playbooks: [`36e0df53-1690-46cf-a59e-56ef397d108d`], // The Wronged
    featType: FeatType.Weapon,
    tags: [ItemTag.close, ItemTag.area, ItemTag.loud, ItemTag.reload],
    attacks: [{ harm: 3 }],
  },
  SawedOffShotgun: {
    name: `Sawed-off Shotgun`,
    id: `e0f82978-e7f7-4dc6-8cc1-4e1ba4b0f565`,
    playbooks: [`36e0df53-1690-46cf-a59e-56ef397d108d`], // The Wronged
    featType: FeatType.Weapon,
    tags: [ItemTag.hand,ItemTag.close,ItemTag.loud,ItemTag.messy,ItemTag.reload],
    attacks: [{ harm: 3 }],
  },
  HandCannon: {
    name: `Hand Cannon`,
    id: `8a31b45a-7582-4fe3-ae75-9eff008cc627`,
    playbooks: [`36e0df53-1690-46cf-a59e-56ef397d108d`], // The Wronged
    featType: FeatType.Weapon,
    tags: [ItemTag.close,ItemTag.loud],
    attacks: [{ harm: 3 }],
  },
  CombatKnife: {
    name: `Combat Knife`,
    id: `8a1ab660-5111-41e0-9fb2-54ef882bf0c4`,
    playbooks: [`36e0df53-1690-46cf-a59e-56ef397d108d`], // The Wronged
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.quiet],
    attacks: [{ harm: 2 }],
  },
  HugeSword: {
    name: `Huge Sword`,
    id: `e2b8ec97-4496-418b-bbe2-d567f038f7fe`,
    playbooks: [`36e0df53-1690-46cf-a59e-56ef397d108d`], // The Wronged
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.heavy, ItemTag.messy],
    attacks: [{ harm: 3 }],
  },
  HugeAxe: {
    name: `Huge Axe`,
      id: `deda4843-fcb5-4be9-a37e-2fa8148e8762`,
    playbooks: [`36e0df53-1690-46cf-a59e-56ef397d108d`], // The Wronged
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.heavy, ItemTag.messy],
    attacks: [{ harm: 3 }],
  },
  SlayingWeapon: {
    name: `Slaying Weapon`,
    id: `976104b5-fc6f-4de6-8623-c9bb0fab9e42`,
    playbooks: [`36e0df53-1690-46cf-a59e-56ef397d108d`], // The Wronged
    featType: FeatType.Weapon,
    tagInputs: [{
      label: `Range`,
      choose: 1,
      chooseMax: 0,
      options: [ItemTag.intimate,ItemTag.hand,ItemTag.close,ItemTag.far]
    }],
  
    attacks: [{ harm: 1 }],
    modAttack: [{
      name: `Specialized Weapon`,
      harmOffset: 3,
      addTags: [ItemTag.monsterWeakness],
      condition: `Apply vs this weapon's targeted monster type.`,
      applyToItem: [`976104b5-fc6f-4de6-8623-c9bb0fab9e42`],
    }],
  
    description: `A specialized weapon for destroying your foes. Build your own, adding tags with \`The Keeper\`'s agreement.

Examples:
* Vampires: Wooden Stakes and a Mallet \`#intimate\` \`#wood\`
* Werewolves: Silver Dagger \`#close\` \`#silver\`
* Robots: Cattle Prod \`#close\` \`#electricity\` \`#stun\``,
  },
  EnchantedDagger: {
    name: `Enchanted Dagger`,
    id: `ae4064c4-9f06-4dbe-81ca-33c972946fe6`,
    playbooks: [`36e0df53-1690-46cf-a59e-56ef397d108d`], // The Wronged
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.magic],
    attacks: [{ harm: 2 }],
  },
  Chainsaw: {
    name: `Chainsaw`,
    id: `ccb6bdad-cb1c-4fae-8a4b-7fc303e22894`,
    playbooks: [`36e0df53-1690-46cf-a59e-56ef397d108d`], // The Wronged
    featType: FeatType.Weapon,
    tags: [ItemTag.hand, ItemTag.heavy, ItemTag.loud, ItemTag.messy, ItemTag.unreliable],
    attacks: [{ harm: 3 }],
  },
} as const;