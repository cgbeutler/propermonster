import {FeatTypeEnum, type Item, ItemType} from "./CompendiumTypes";
import {ItemTag} from "./Tags";
import {InputTypes} from "./UserInputTypes";

export const itemLookup: {[key: string]: Item} = {
  // ____ Armors ____

  CombatArmor: {
    // rarity: 1,
    name: `Combat Armor`,
    id: `77b6446b-30e1-43bc-acc6-ad32f137e206`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Armor,
    armor: 2,
    tags: [ ItemTag.heavy ],
  },
  DivineArmor: {
    // rarity: 1,
    name: `Divine Armor`,
    id: `7c9a7ce8-3143-4259-abf9-cb094b69980d`,
    description: `A divine set of armor from beyond.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Armor,
    armor: 1,
    tags: [ ItemTag.holy ],
  },
  FlakVest: {
    // rarity: 1,
    name: `Flak Vest`,
    id: `845c17ef-5bb8-4037-9bad-80716a6fab28`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Armor,
    armor: 1,
    tags: [ ItemTag.hidden ],
  },
  OldFashionedArmor: {
    // rarity: 1,
    id: `f64b13a1-34fc-48d8-8d1d-5bd16f2149c2`,
    name: `Old-Fashioned Armor`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Armor,
    armor: 1,
    tags: [ ItemTag.heavy ],
  },
  ProtectiveGear: {
    // rarity: 1,
    name: `Protective Gear`,
    id: `d9e02f28-fd36-4f5d-851e-ba2500025203`,
    description: `Protective wear suited to your look.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Armor,
    armor: 1,
  },
  
  // ____ Artifacts ____

  // The Crooked
  ProtectiveAmulet: {
    // rarity: 1,
    name: `Protective Amulet`,
    id: `6801035d-61bc-403e-8db8-95f5b231348e`,
    description: `Amulet that provides +1 \`armor\` that's \`#magic\`, but must be recharged afterward.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Artifact,
    tags: [ItemTag.small,ItemTag.magic,ItemTag.recharge],
    
    inputs: [{
      key: "charges", inputType: InputTypes.Checks,
      label: "Charge", max: 1,
    }],
    showInputs: ["charges"],

    perks: {
      modArmor: [{
        name: `Protective Amulet`,
        offset: 1,
        addTags: [ItemTag.magic],
        condition: `Charge required`,
        showInputs: [ "charges" ],
      }]
    }
  },
  LuckyCharm: {
    // rarity: 1,
    id: "112d8342-17b3-439d-81fa-0764f2523ee8",
    name: "Lucky Charm",
    description: `Use instead of **Luck** only once.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Artifact,
    tags: [ItemTag.small,ItemTag.magic],
    
    inputs: [{
      key: "uses", inputType: InputTypes.Checks,
      label: "Uses", max: 1,
    }],
    showInputs: ["uses"],

    perks: {
      luck: [{
        description: `Your Luck Charm item can be used once instead of using a **Luck** point.`,
        showInputs: ["uses"],
      }]
    }
  },
  Grimoire: {
    // rarity: 1,
    id: "a921d0ca-1a63-4324-8cda-aeaa0ef9c940",
    name: "Grimoire",
    description: `Studying the Grimoire gives +1 \`forward\` to your basic **Weird** move (default **Use Magic**.)`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Artifact,
    tags: [ItemTag.magic],
    perks: {
      weirdMove: [{description: `Studying the Grimoire gives +1 \`forward\` to your basic **Weird** move (default **Use Magic**.)`}]
    }
  },
  SkeletonKey: {
    // rarity: 1,
    id: "ec2bcf6d-1880-41fb-9c15-19ee459bedb8",
    name: "Skeleton Key",
    description: `Open any magically sealed lock.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Artifact,
    tags: [ItemTag.small,ItemTag.magic],
    perks: {
      autoActions: [{
        name: `Skeleton Key`,
        id: `38bbf841-6007-4ce5-b81a-a65ce6e3addd`,
        description: `Use your Skeleton Key to open a magically sealed lock.`,
      }]
    }
  },
  ImpStone: {
    // rarity: 1,
    id: "7908f804-8889-4f2a-bae0-45d465947c13",
    name: "Imp Stone",
    description: `A weak demon is bound to serve the holder of this stone. This imp must be summoned with '\`use magic\`'.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Artifact,
    tags: [ItemTag.small,ItemTag.magic],
    perks: {
      social: [{ description: `A weak demon is bound to serve the holder of this stone. This imp must be summoned with '\`use magic\`'.` }]
    }
  },
  
  // The Spooktacular
  GhostShades: {
    name: `Ghost Shades`,
    id: `5588bceb-fdf7-4b4a-8644-0cc1b668717f`,
    description: `Sunglasses that can see into the spirit world. (It seems darker than usual, obviously.)`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Artifact,
    tags: [ItemTag.magic,ItemTag.innocuous],
  },
  BigPlushDog: {
    name: `Really Big Animated Plush Dog`,
    id: `a50fc994-5a34-4d91-a914-92390cf4fb5c`,
    description: `Somehow this plush came to life. Its kinda like a regular dog... kinda?`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Artifact,
    tags: [ItemTag.magic],
  },
  Returning100: {
    id: `1c5c4722-1ed3-4904-a508-c8aa611921c5`,
    name: `Returning 100`,
    description: `Spend this hundred dollar bill and it will come back in a day or so.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Artifact,
    tags: [ItemTag.magic],
  },
  Scamulet: {
    name: `Scamulet`,
    id: `5172f8df-bc75-40e7-9765-1dd6e1326fbb`,
    description: `Heats up whenever someone is running a scam on you.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Artifact,
    tags: [ItemTag.magic],
  },
  WizardTent: {
    name: `Wizard Tent`,
    id: `75cefe9b-4bd3-498d-8e0c-a77a3ea04398`,
    description: `Worn and crappy on the outside, big and luxurious on the inside.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Artifact,
    tags: [ItemTag.magic],
  },
  
  // ____ Equipment ____
  
  // Searcher only options:
  DocumentingGear: {
    name: `A bag of cameras and microphones`,
    id: `2dba0a2c-4006-43a1-a304-68893916e5e7`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
    tags: [],
  },
  ForensicTools: {
    name: `Forensic Tools`,
    id: `bb9ae976-aeb3-46e3-927a-7a15d602c5c1`,
    description: `Tools used for finding, documenting, and preserving evidence at a crime scene`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
    tags: [],
  },
  GhostHuntingTools: {
    name: `Ghost Hunting Tools`,
    id: `3f6a6094-7281-4a15-96af-9e3ec37c255e`,
    description: `Tools used for locating and tracking ghosts. (Not killing them.)`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
    tags: [],
  },
  ScientificMeasuringTools: {
    name: `Scientific Measuring Tools`,
    id: `d08568d2-4c6e-42b2-aa84-ade901d360f3`,
    description: `Tools for taking various scientific, and accurate measurements.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
    tags: [],
  },
  CryptidHuntingGear: {
    name: `Cryptid Hunting Gear`,
    id: `df839b6c-ddc5-4b11-b0b6-6bdb90686f34`,
    description: `Gear used for scouting out and tracking cryptids in the wild. (Not killing them.)`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
    tags: [],
  },
  StrangeCaseFiles: {
    // rarity: 1,
    name: `Strange Case Files`,
    id: `e4d48126-94f5-48c1-a9d6-565aeddc0b8d`,
    description: `Historical documents and witness reports of strange events.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
    tags: [],
  },
  Maps: {
    // rarity: 1,
    id: `b384a55b-4c74-4105-81b8-f9c192288f45`,
    name: `Maps, Blueprints, and Building Reports`,
    description: `A bunch of maps, blueprints, and building reports for significant places.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
    tags: [],
  },
  
  // Snoop only equipment
  ElectromagneticFieldDetector: {
    name: `Electromagnetic Field Detector`,
    id: `a4fd8d67-fe63-42b5-8fb8-f85ba51d6ba4`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
    tags: [ItemTag.hand,ItemTag.close,ItemTag.batteries],
  },
  TemperatureFluctuationDetector: {
    name: `Temperature Fluctuation Detector`,
    id: `5fda937c-440f-4c82-9397-b9fe389bdda0`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
    tags: [ItemTag.hand,ItemTag.close,ItemTag.batteries],
  },
  OuijaBoard: {
    name: `OuijaBoard`,
    id: `3561513a-aa0f-47e7-878a-07db711f0610`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
    tags: [ItemTag.magic]
  },
  HumidityMeter: {
    name: `Humidity Meter`,
    id: `9cac6d28-fbc4-4c81-b394-48d4cd82ec82`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
    tags: [ItemTag.batteries],
  },
  DowsingRods: {
    name: `Dowsing Rods`,
    id: `65f198e6-e4e2-4b8c-b8c0-e0e6c781f9c7`,
    description: `Primarily used for finding water, but can be used in many other forms of divination, like yes-no-unknown questions.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
    tags: [ItemTag.close,ItemTag.magic]
  },
  ChemistryTestKit: {
    name: `Chemistry Test Kit`,
    id: `e9057f60-3442-4858-bab9-941ba8904501`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
    tags: [ItemTag.intimate,ItemTag.temperamental,ItemTag.irritating]
  },
  MetalDetector: {
    name: `Metal Detector`,
    id: `58677f5f-38f6-415c-8451-8053be69c4b1`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
    tags: [ItemTag.hand,ItemTag.batteries],
  },
  Compass: {
    name: `Compass`,
    id: `3b3f9884-399c-4063-8fb6-030c7b0169b6`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
  },
  GPSReceiver: {
    name: `GPS Receiver`,
    id: `bf3c622f-70ad-4071-80a1-bfdd2b427fd1`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
    tags: [ItemTag.batteries]
  },
  LaserRangefinder: {
    name: `Laser Rangefinder`,
    id: `cf1596f2-01b0-4f12-b277-5488e35c9e5d`,
    description: `Finds the total distance to a given target.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
    tags: [ItemTag.close,ItemTag.far,ItemTag.batteries],
  },
  Pendulum: {
    name: `Pendulum`,
    id: `8b80093d-f145-4c79-8081-421740beb81a`,
    description: `Used to ask simple yes-no-unsure questions. When used with a divination board it can provide one-letter responses to questions.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
    tags: [ItemTag.magic]
  },
  TarotDeck: {
    name: `Tarot Deck`,
    id: `f26c8824-1f1a-49a0-8f1a-aa8c78626218`,
    description: `A tarot or oracle deck that can provide abstract responses to questions.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
    tags: [ItemTag.magic]
  },
  Magic8Ball: {
    id: `ad35a83d-721b-4786-8939-1c1a9d663b59`,
    name: `Magic 8-Ball`,
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
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
    tags: [ItemTag.magic]
  },

  // More shared items that are more specific
  Binoculars: {
    // rarity: 1,
    name: `Binoculars`,
    id: `20269944-f9cc-482d-8e69-840e42db655f`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
    tags: [ItemTag.far],
    tagInputs: [{ label: `Optional`, options: [ItemTag.small] }],
  },
  Camera: {
    // rarity: 1,
    name: `Camera`,
    id: `bee2fdd5-e18e-42af-8409-561060588514`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
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
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
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
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
    tags: [ItemTag.close,ItemTag.obvious,ItemTag.reload,ItemTag.batteries],
  },
  InfraredCamera: {
    id: `131a041e-ec90-4245-b004-a62775153bf3`,
    name: "Infrared Camera",
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
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
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
    tags: [ItemTag.batteries],
  },
  LaserMicrophone: {
    // rarity: 1,
    name: `Laser Microphone`,
    id: `96c0d83d-40b5-4dde-9a59-e72385fe71ef`,
    description: `Listen to and record audio occurring on the other side of a distant solid surface, such as glass.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
    tags: [ItemTag.close,ItemTag.far,ItemTag.batteries]
  },
  LiquorFlask: {
    // rarity: 1,
    name: `Liquor Flask`,
    id: `fe86e0ff-6c97-4ef9-a4b8-1937f6386130`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
    tags: [ItemTag.small],
  },
  NiceSmartphone: {
    name: `Nice Smartphone`,
    id: `65ef35ff-4502-4b84-a987-284640e432f2`,
    description: `Can take better photos and videos than other phones could. Has more storage capacity.

Double check with \`The Keeper\` that this fits the setting or could be flavored to fit in some way.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
    tags: [ItemTag.close,ItemTag.recharge],
  },
  NightVisionCamera: {
    // rarity: 1,
    name: `Night Vision Camera`,
    id: `291af87a-86d2-4fed-a09e-ec3dd4ba8539`,
    description: `Take decent pictures at night. You can also somewhat see at night using the viewfinder.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
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
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
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
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
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
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
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
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
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
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
    tags: [ItemTag.close,ItemTag.capacity],
  },
  SteadicamRig: {
    id: `84a095ec-422e-4d32-ae40-6501bab730d9`,
    name: "Steadicam Rig",
    description: `Allows filming while moving without sacrificing clarity. You can also still use your hands without putting down your camera (though you may loose the shot.)`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
  },
  TapeRecorder: {
    // rarity: 2,
    name: `Tape Recorder`,
    id: `9330dbb4-8613-4dbc-8bb2-eb1a1383dc78`,
    description: `Record audio onto a cassette tape or mini cassette tape.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
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
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
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
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
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
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Equipment,
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
  
  // ____ Vehicles ____

  Bicycle: {
    // rarity: 1
    name: `Bicycle`,
    id: `9e83f769-6ff8-4a11-b34f-3230c51eadae`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Vehicle,
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
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Vehicle,
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
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Vehicle,
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
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Vehicle,
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
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Vehicle,
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
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Vehicle,
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
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Vehicle,
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
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Vehicle,
    tags: [ItemTag.nimble],
  },
  Van: {
    name: `Van`,
    id: `47c91019-8b3d-490b-bf92-e2b9b29f4ef2`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Vehicle,
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
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 2,
    tags: [ItemTag.hand, ItemTag.magic,ItemTag.silver],
  },
  Axe: {
    // rarity: 1,
    name: `Axe`,
    id: `b099d794-ccf2-44e5-b92e-0c32e58f47b8`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 2,
    tags: [ItemTag.hand, ItemTag.messy],
  },
  BaseballBat: {
    // rarity: 5,
    name: `Baseball Bat`,
    id: `69395473-e2cf-4482-a8b8-d0a4e6f2850a`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 2,
    tags: [ItemTag.hand, ItemTag.messy],
    tagInputs: [{
      label: `Character fit`,
      options: [ItemTag.innocuous]
    }]
  },
  BigAxe: {
    // rarity: 1,
    name: `Big Axe`,
    id: `b099d794-ccf2-44e5-b92e-0c32e58f47b8`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 3,
    tags: [ItemTag.hand, ItemTag.heavy, ItemTag.messy],
  },
  BigFlashlight: {
    // rarity: 1,
    name: `Watchman's Flashlight`,
    id: `22901db9-d577-475e-bb06-156123803afa`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 1,
    tags: [ItemTag.hand, ItemTag.innocuous, ItemTag.useful],
  },
  BigKnife: {
    // rarity: 6,
    name: `Big Knife`,
    id: `2706a194-3fff-48eb-9da8-72ef3ce33b07`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 1,
    tags: [ItemTag.hand],
  },
  BigSword: {
    // rarity: 3,
    name: `Big Sword`,
    id: `16425916-a0cd-45b5-b2e7-9b303359efd4`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 3,
    tags: [ItemTag.hand, ItemTag.heavy, ItemTag.messy],
  },
  BlessedKnife: {
    // rarity: 1,
    name: `Blessed Knife`,
    id: `638228b0-7771-449e-b16b-cf93c5747ca4`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 2,
    tags: [ItemTag.hand, ItemTag.holy],
  },
  BrassKnuckles: {
    // rarity: 2,
    name: `Brass Knuckles`,
    id: `80e7c207-59d3-40d6-8cd2-ddad1a671c4a`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 1,
    tags: [ItemTag.hand, ItemTag.small], // TODO: Had tag ItemTag.quiet, !? If that's quiet, then knives should al be more quiet. 
  },
  ButterflyKnife: {
    // rarity: 1,
    name: `Butterfly Knife`,
    id: `25c0c97d-e5eb-430a-be1f-6e859ef2b62b`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 1,
    tags: [ItemTag.hand, ItemTag.small],
  },
  ColdIronSword: {
    // rarity: 1,
    name: `Cold Iron Sword`,
    id: `25ff80d9-1b5d-4bd0-9082-51dbf3c42a69`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 2,
    tags: [ItemTag.hand, ItemTag.messy, ItemTag.coldIron],
  },
  CricketBat: {
    // rarity: 5,
    name: `Cricket Bat`,
    id: `54445f18-d0d5-434c-b0cb-26542ec31f91`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 2,
    tags: [ItemTag.hand, ItemTag.messy],
    tagInputs: [{
      label: `Character fit`,
      options: [ItemTag.innocuous]
    }]
  },
  Crossbow: {
    // rarity: 2,
    name: `Crossbow`,
    id: `7d0375e9-dace-41f4-9585-7a2bc9294d34`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 2,
    tags: [ItemTag.close, ItemTag.slow],
  },
  Crowbar: {
    name: `Crowbar`,
    id: `14c2191e-7a86-4bea-897d-6f57a152eec2`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 2,
    tags: [ItemTag.hand,ItemTag.useful,ItemTag.messy],
  },
  FightingSticks: {
    // rarity: 1,
    name: `Fighting Sticks`,
    id: `fad74d14-16ae-414b-b4a8-5521fb858dba`,
    description: `Two shorter sticks for melee fighting, like escrima sticks or a pair of tonfa.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 1,
    tags: [ItemTag.hand, ItemTag.quick],
  },
  FireAxe: {
    // rarity: 2,
    name: `Fire Axe`,
    id: `13e3920d-8be8-44c3-88c3-a62b45aae925`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 3,
    tags: [ItemTag.hand, ItemTag.heavy, ItemTag.messy],
  },
  FiveDemonBag: {
    name: `Five Demon Bag`,
    id: `0d89fa7b-1a2d-4380-a3dd-36d649172f6f`,
    description: `A divine weapon from beyond.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 3,
    tags: [ItemTag.close, ItemTag.magic, ItemTag.holy],
  },
  FlamingSword: {
    // rarity: 1
    name: `Flaming Sword`,
    id: `f5d91c17-26b4-4c7a-991c-f0554a2939e5`,
    description: `A divine weapon from beyond.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 3, tags: [ItemTag.hand, ItemTag.fire, ItemTag.holy],
  },
  Flamethrower: {
    // rarity: 1,
    name: `Flamethrower`,
    id: `cc2768e1-9757-4641-b22e-1df1fdf0d014`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 3,
    tags: [ItemTag.close, ItemTag.fire, ItemTag.heavy, ItemTag.volatile],
  },
  Garrote: {
    // rarity: 1,
    name: `Garrote`,
    id: `4d7a843f-9239-4995-b9d8-c6d048f82d32`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 2,
    tags: [ItemTag.intimate, ItemTag.quiet, ItemTag.small],
  },
  GolfClub: {
    // rarity: 5,
    name: `Golf Club`,
    id: `7be80211-94a9-4105-9446-c508c2207e9e`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 2,
    tags: [ItemTag.hand, ItemTag.messy],
    tagInputs: [{
      label: `Character fit`,
      options: [ItemTag.innocuous]
    }]
  },
  GrenadeLauncher: {
    name: `Grenade Launcher`,
    id: `a18c5ab6-06e6-40ad-8333-33a4fe1b66f5`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 4,
    tags: [ItemTag.far, ItemTag.area, ItemTag.messy, ItemTag.loud, ItemTag.reload],
  },
  Grenades: {
    name: `Grenades`,
    id: `0d5ab38b-3b5b-484a-9bee-44cb3b9b52b8`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 4,
    tags: [ItemTag.close, ItemTag.area, ItemTag.messy, ItemTag.loud,],
  },
  Handgun: {
    // rarity: 8,
    name: `Handgun`,
    id: `e912196f-5064-4486-8e2c-312d343e75f7`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 2,
    tags: [ItemTag.close, ItemTag.loud],
  },
  Hatchet: {
    name: `Hatchet`,
    id: `065b01fe-dad5-4eed-87ff-6247261042bc`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 2,
    tags: [ItemTag.hand,ItemTag.messy],
  },
  HeirloomSword: {
    // rarity: 1,
    name: `Heirloom Sword`,
    id: `19078990-0530-41c2-a5e9-e710124cf5f7`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 2,
    tags: [ItemTag.hand, ItemTag.messy],
  },
  HockeyStick: {
    // rarity: 5,
    name: `HockeyStick`,
    id: `7f0daa92-9104-4fbf-beff-c54ef0ff2d6e`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 2,
    tags: [ItemTag.hand, ItemTag.messy],
    tagInputs: [{
      label: `Character fit`,
      options: [ItemTag.innocuous]
    }]
  },
  HoldoutPistol: {
    // rarity: 1,
    name: `Holdout Pistol`,
    id: `193b684d-aab4-436a-91e4-f43e2d953eb6`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 2,
    tags: [ItemTag.close, ItemTag.loud, ItemTag.reload, ItemTag.small],
  },

  // Hunting rifle (2-harm far loud) -x5
  // Hunting rifle (3-harm far loud reload) -Mundane
  HuntingRifle: {
    // rarity: 5,
    name: `Hunting Rifle`,
    id: `0eba47e5-e71d-4d20-a2c4-511e445976ac`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 2,
    tags: [ItemTag.far, ItemTag.loud], // No Reload?
  },
  HuntingRifleHC: { // Monstrous
    // rarity: 1,
    name: `High Caliber Hunting Rifle`,
    id: `5590dcd9-8f11-4d23-b457-1fee5d4d9af6`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 3,
    tags: [ItemTag.far, ItemTag.loud, ItemTag.reload],
  },
  IncapacitatingSpray: {
    name: `Incapacitating Spray`,
    id: `b2219f39-50ac-45c2-a37c-6183fe24ee78`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 1,
    tags: [ItemTag.hand, ItemTag.irritating],
  },
  JujuBag: {
    // rarity: 1,
    name: `Juju Bag`,
    id: `8b931454-b630-434e-b029-967dd1ab2081`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 1,
    tags: [ItemTag.far, ItemTag.magic],
  },
  Knife: {
    // rarity: 1,
    name: `Knife`,
    id: `8ce0de8b-585a-4de7-9db7-44d835347312`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 1,
    tags: [ItemTag.hand, ItemTag.small],
  },
  Mace: {
    // rarity: 1,
    name: `Mace`,
    id: `6634a227-4b83-4be1-b1ce-93671378638c`,
    description: `Old-fashioned Mace weapon that is a stick with a fancy bludgeoning head.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 2,
    tags: [ItemTag.hand, ItemTag.messy],
  },
  MagicDagger: {
    // rarity: 1,
    name: `Magic Dagger`,
    id: `24c1536b-0e49-4b75-aa16-ef0f1357b641`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 2,
    tags: [ItemTag.hand, ItemTag.magic],
  },
  Magnum: {
    // rarity: 5,
    name: `Magnum`,
    id: `9a73c6bf-5e97-47f8-9f15-b91e879fb06b`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 3,
    tags: [ItemTag.close, ItemTag.loud, ItemTag.reload],
  },
  Mallet: {
    name: `Mallet`,
    id: `6650cdad-0413-45b9-a4d1-af01e4677f88`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 1,
    tags: [ItemTag.hand,ItemTag.useful,ItemTag.stun]
  },
  MartialArtsTraining: {
    name: `Martial Arts Training`,
    id: `6af59f8b-cf26-4662-a7dd-cc0c9f2d3344`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.InnateWeapon,
    harm: 1,
    tags: [ItemTag.hand, ItemTag.innocuous],
  },
  MultiTool: {
    // rarity: 3,
    id: `c2bae72f-5264-45b6-9e86-9e6710f3e199`,
    name: `Multi-tool`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 1,
    tags: [ItemTag.hand, ItemTag.useful, ItemTag.small],
  },
  Nunchuks: {
    // rarity: 2,
    name: `Nunchuks`,
    id: `bea44b0e-3f7f-41bd-9909-87c6b1251fdf`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 2,
    tags: [ItemTag.hand, ItemTag.area],
  },
  Pocketknife: {
    // rarity: 3,
    name: `Pocketknife`,
    id: `1f6c84ed-2ee9-4325-b1fd-591d2f7a6bf3`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 1,
    tags: [ItemTag.hand, ItemTag.useful, ItemTag.small],
  },
  RazorWhip: {
    name: `Razor Whip`,
    id: `c483daf7-9ad4-4c62-949c-6595e741daf9`,
    description: `A divine weapon from beyond.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 3,
    tags: [ItemTag.hand, ItemTag.area, ItemTag.messy, ItemTag.holy],
  },
  // .22 revolver (1-harm close reload small)
  // .38 revolver (2-harm close reload loud) -x9
  // Old revolver (2-harm close reload loud) -Spell Slinger
  Revolver22: {
    // rarity: 1,
    id: `5653c913-463a-4cbf-9578-df3962889cc7`,
    name: `.22 Revolver`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 1,
    tags: [ItemTag.close, ItemTag.reload, ItemTag.small],
  },
  Revolver38: {
    // rarity: 9,
    id: `4e08951a-1c46-4538-996b-e9bb114a6c85`,
    name: `.38 Revolver`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 2,
    tags: [ItemTag.close, ItemTag.reload, ItemTag.loud],
  },
  RevolverOld: {
    // rarity: 1,
    name: `Old Revolver`,
    id: `36405f51-6da6-4940-b3ab-48747c79b7ef`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 2,
    tags: [ItemTag.close, ItemTag.reload, ItemTag.loud],
  },
  RitualKnife: {
    // rarity: 1,
    name: `Ritual Knife`,
    id: `cf279f55-dd2a-4239-b811-2f6cc0443938`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 1,
    tags: [ItemTag.hand],
  },
  SapGloves: {
    // rarity: 1,
    name: `Sap Gloves`,
    id: `dc9f95e8-d84d-4ef4-8882-b9a33f9f5c77`,
    description: `Weighted gloves, usually with metal bearings swen into the knuckles.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 1,
    tags: [ItemTag.hand, ItemTag.small],
  },
  Shillelagh: {
    // rarity: 1,
    name: `Shillelagh`,
    id: `61d09b83-ba0f-4cff-b243-080549a07822`,
    description: `A walking stick or staff of some kind with a large knot or ball at one end, perfect for bludgeoning.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 1,
    tags: [ItemTag.hand, ItemTag.balanced],
  },
  // Shotgun (3-harm close messy) -x5
  // Shotgun (3-harm close messy loud) -x5
  Shotgun: {
    // rarity: 5,
    name: `Shotgun`,
    id: `e0f82978-e7f7-4dc6-8cc1-4e1ba4b0f565`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 3,
    tags: [ItemTag.close, ItemTag.loud, ItemTag.messy], // TODO: No reload!?
  },
  ShotgunLoud: {
    // rarity: 5,
    name: `Loud Shotgun`,
    id: `e0f82978-e7f7-4dc6-8cc1-4e1ba4b0f565`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 3,
    tags: [ItemTag.close, ItemTag.loud, ItemTag.messy, ItemTag.loud], // TODO: No reload!?
  },
  SilverKnife: {
    // rarity: 1,
    name: `Silver Knife`,
    id: `c788a129-400a-46ec-a637-8a08dad4add3`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 1,
    tags: [ItemTag.hand, ItemTag.silver],
  },
  SilverSword: {
    // rarity: 1,
    name: `Silver Sword`,
    id: `0d1f8b93-66b0-4ed6-a343-84b250109592`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 2,
    tags: [ItemTag.hand, ItemTag.messy, ItemTag.silver],
  },
  SilverTrident: {
    name: `Silver Trident`,
    id: `d67eb2b2-504a-4461-8eb8-41f29e342159`,
    description: `A divine weapon from beyond.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 3,
    tags: [ItemTag.hand, ItemTag.silver, ItemTag.holy],
  },
  Sledgehammer: {
    // rarity: 2,
    name: `Sledgehammer`,
    id: `b3c277be-cb1a-4247-af1f-e98f72509339`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 3,
    tags: [ItemTag.hand, ItemTag.heavy, ItemTag.messy],
  },
  SmallHandgun: {
    // rarity: 3,
    name: `Small Handgun`,
    id: `9cd078db-1b78-4e75-9a8a-6e551810e478`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 2,
    tags: [ItemTag.close, ItemTag.loud, ItemTag.reload],
  },
  // Sniper rifle  (3-harm far) -Initiate
  // Sniper rifle  (4-harm far) -Professional
  SniperRifle: {
    // rarity: 2,
    name: `Sniper Rifle`,
    id: `0cea6d44-5f8b-483e-ace7-1e1cd9362f61`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 3,
    tags: [ItemTag.far],
  },
  SniperRifleHC: {
    // rarity: 2,
    name: `High Caliber Sniper Rifle`,
    id: `d8370e5f-5f7f-4a8d-a205-26885e9f5465`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 4,
    tags: [ItemTag.far],
  },
  SockOfCoins: {
    name: `High Caliber Sniper Rifle`,
    id: `309d49a1-1c95-4aa8-82f7-757998df6ca3`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 1,
    tags: [ItemTag.hand,ItemTag.stun]
  },
  Spear: {
    // rarity: 1,
    name: `Spear`,
    id: `ed08a23c-06c1-400b-a3e1-3a32d540072d`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 2,
    tags: [ItemTag.hand, ItemTag.close],
  },
  Staff: {
    // rarity: 1,
    name: `Staff`,
    id: `3e1e53c0-19bd-4123-b01b-519333ae8c56`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 1,
    tags: [ItemTag.hand,ItemTag.balanced,ItemTag.large],
  },
  StunGun: {
    name: `Stun Gun`,
    id: `beeec359-cc40-4f5f-b8e4-c33bd15e0159`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 1,
    tags: [ItemTag.hand,ItemTag.stun,ItemTag.electricity,ItemTag.batteries],
  },
  // Submachine gun (2-harm close area reload) -Crooked
  // Submachine gun (3-harm close area loud reload) -Professional
  SubmachineGun: {
    // rarity: 1,
    name: `Submachine Gun`,
    id: `d8593b2f-daff-45f3-9dcc-bdad9e048fa6`,
    description: `A lower caliber or older SMG.`, // Like a 9mm Uzi or a Tommy gun.
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 2,
    tags: [ItemTag.close, ItemTag.reload, ItemTag.area],
  },
  SubmachineGunHC: { // Professional
    // rarity: 1,
    name: `High Caliber Submachine Gun`,
    id: `56d9c9ff-85f8-4eb8-ac6d-3639f273facc`,
    description: `A higher caliber or higher-tech SMG.`, // Like an .45 Uzi or an MP-7.
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 3,
    tags: [ItemTag.close, ItemTag.reload, ItemTag.area, ItemTag.loud],
  },
  Switchblade: {
    // rarity: 2,
    name: `Switchblade`,
    id: `1b386c0d-cc5b-4a33-85cc-f98d64985cd2`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 1,
    tags: [ItemTag.hand, ItemTag.small],
  },
  Sword: {
    // rarity: 2,
    name: `Sword`,
    id: `392901df-c2b2-404a-9c45-3bd39bc6750a`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 2,
    tags: [ItemTag.hand, ItemTag.messy],
  },
  ThrowingKnives: {
    // rarity: 1,
    name: `Throwing Knives`,
    id: `b4c2e87b-2423-477f-bcba-e3afc0fb6292`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 1,
    tags: [ItemTag.close, ItemTag.many, ItemTag.small],
  },
  ThunderHammer: {
    name: `Thunder Hammer`,
    id: `cdf705e3-86f4-4b3d-b6bf-0d98a20a66e3`,
    description: `A divine weapon from beyond.`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 3,
    tags: [ItemTag.hand, ItemTag.stun, ItemTag.holy],
  },
  WalkingStick: {
    name: `Walking Stick`,
    id: `1df20d7c-c7c1-468a-b23b-f17128f1f85c`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 1,
    tags: [ItemTag.hand,ItemTag.innocuous],
  },
  WoodenStakesAndMallet: {
    // rarity: 1,
    id: `22901db9-d577-475e-bb06-156123803afa`,
    name: `Wooden Stakes & Mallet`,
    featType: FeatTypeEnum.Item,
    itemType: ItemType.Weapon,
    harm: 3,
    tags: [ItemTag.intimate, ItemTag.slow,ItemTag.wood],
  },
} as const;