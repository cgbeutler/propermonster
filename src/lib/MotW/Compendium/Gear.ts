import {type Item, ItemType} from "./CompendiumTypes";
import {RangeEnum} from "./Tags";
import {InputTypes} from "./UserInputTypes";

export const itemLookup: {[key: string]: Item} = {
  
  // ____ Armors ____
  
  DivineArmor: {
    id: `7c9a7ce8-3143-4259-abf9-cb094b69980d`,
    name: `Divine Armor`,
    itemType: ItemType.Armor,
    perks: {
      armors: [{
        name: `Divine Armor`,
        armor: 1,
        tags: [ `holy` ],
      }]
    }
  },
  
  // ____ Artifacts ____

  ProtectiveAmulet: {
    id: `6801035d-61bc-403e-8db8-95f5b231348e`,
    name: `Protective Amulet`,
    description: `Amulet that provides +1 \`armor\` that's \`#magic\`, but must be recharged afterward.`,
    itemType: ItemType.Artifact,
    tags: ["magic", "recharge"],
    inputs: [{
      id: "charges", type: InputTypes.Checks,
      label: "Charge", max: 1,
    }],

    perks: {
      armorModifiers: [{
        name: `Protective Amulet`,
        description: `+1 **Armor** #magic #recharge.`,
        offset: 1,
        conditional: true,
        showInputs: [ "charges" ]
      }]
    }
  },
  LuckyCharm:
    {
      id: "112d8342-17b3-439d-81fa-0764f2523ee8",
      name: "Lucky Charm",
      description: `Use instead of **Luck** only once.`,
      itemType: ItemType.Artifact,
      inputs: [{
        id: "uses", type: InputTypes.Checks,
        label: "Uses", max: 1,
      }],

      perks: {
        luck: [{
          description: `Your Luck Charm item can be used once instead of using a **Luck** point.`,
          showInputs: ["uses"],
        }]
      }
    },
  Grimoir: {
    id: "a921d0ca-1a63-4324-8cda-aeaa0ef9c940",
    name: "Grimoire",
    description: `Studying the Grimoire gives +1 \`forward\` to your basic **Weird** move (default **Use Magic**.)`,
    itemType: ItemType.Artifact,
    perks: {
      weirdMove: [{description: `Studying the Grimoire gives +1 \`forward\` to your basic **Weird** move (default **Use Magic**.)`}]
    }
  },
  SkeletonKey: {
    id: "ec2bcf6d-1880-41fb-9c15-19ee459bedb8",
    name: "Skeleton Key",
    description: `Open any magically sealed lock.`,
    itemType: ItemType.Artifact,
    perks: {
      autoActions: [{ name: `Skeleton Key`, description: `Use your Skeleton Key to open a magically sealed lock.` }]
    }
  },
  ImpStone: {
    id: "7908f804-8889-4f2a-bae0-45d465947c13",
    name: "Imp Stone",
    description: `A weak demon is bound to serve the holder of this stone. This imp must be summoned with '\`use magic\`'.`,
    itemType: ItemType.Artifact,
    perks: {
      social: [{ description: `A weak demon is bound to serve the holder of this stone. This imp must be summoned with '\`use magic\`'.` }]
    }
  },
  
  // ____ Weapons ____
  
  BaseballBat: {
    id: `add758b9-7633-4084-808c-1b5f0a77aba8`,
    name: `Baseball Bat`,
    itemType: ItemType.Weapon,
    perks: {
      attacks: [{
        name: `Baseball Bat`,
        harm: 1,
        ranges: [RangeEnum.Hand],
      }]
    }
  },
  BigKnife: {
    id: `2706a194-3fff-48eb-9da8-72ef3ce33b07`,
    name: `Big Knife`,
    itemType: ItemType.Weapon,
    perks: {
      attacks: [{
        name: `Big Knife`,
        harm: 1,
        ranges: [RangeEnum.Hand],
      }]
    }
  },
  Revolver22: {
    id: `5653c913-463a-4cbf-9578-df3962889cc7`,
    name: `.22 Revolver`,
    itemType: ItemType.Weapon,
    perks: {
      attacks: [{
        name: `.22 Revolver`,
        harm: 1,
        ranges: [RangeEnum.Close],
        tags: ["reload", "small"],
      }]
    }
  },
  Revolver38: {
    id: `4e08951a-1c46-4538-996b-e9bb114a6c85`,
    name: `.38 Revolver`,
    itemType: ItemType.Weapon,
    perks: {
      attacks: [{
        name: `.38 Revolver`,
        harm: 2,
        ranges: [RangeEnum.Close],
        tags: [`reload`, `loud`],
      }]
    }
  },
  Handgun9mm: {
    id: `e912196f-5064-4486-8e2c-312d343e75f7`,
    name: `9mm Handgun`,
    itemType: ItemType.Weapon,
    perks: {
      attacks: [{
        name: `9mm Handgun`,
        harm: 2,
        ranges: [RangeEnum.Close],
        tags: [`loud`],
      }]
    }
  },
  AssaultRifle: {
    id: `5624da07-1523-4ff7-a6e4-908cc0990eae`,
    name: `Assault Rifle`,
    itemType: ItemType.Weapon,
    perks: {
      attacks: [{
        name: `Assault Rifle`,
        harm: 3,
        ranges: [RangeEnum.Close, RangeEnum.Far],
        tags: [`area`],
      }]
    }
  },
  FiveDemonBag: {
    id: `0d89fa7b-1a2d-4380-a3dd-36d649172f6f`,
    name: `Five Demon Bag`,
    itemType: ItemType.Weapon,
    perks: {
      attacks: [{
        name: `Five Demon Bag`,
        harm: 3,
        ranges: [RangeEnum.Close],
        tags: [`magic`, `holy`],
      }]
    }
  },
  FlamingSword: {
    id: `f5d91c17-26b4-4c7a-991c-f0554a2939e5`,
    name: `Flaming Sword`,
    itemType: ItemType.Weapon,
    perks: {
      attacks: [{
        name: `Flaming Sword`,
        harm: 3,
        ranges: [RangeEnum.Hand],
        tags: [`fire`, `holy`],
      }]
    }
  },
  HuntingRifle: {
    id: `0eba47e5-e71d-4d20-a2c4-511e445976ac`,
    name: `Hunting Rifle`,
    itemType: ItemType.Weapon,
    perks: {
      attacks: [{
        name: `Hunting Rifle`,
        harm: 2,
        ranges: [RangeEnum.Far],
        tags: [`loud`],
      }]
    }
  },
  Shotgun: {
    id: `e0f82978-e7f7-4dc6-8cc1-4e1ba4b0f565`,
    name: `Shotgun`,
    itemType: ItemType.Weapon,
    perks: {
      attacks: [{
        name: `Shotgun`,
        harm: 3,
        ranges: [RangeEnum.Close],
        tags: [`messy`],
      }]
    }
  },
  RazorWhip: {
    id: `c483daf7-9ad4-4c62-949c-6595e741daf9`,
    name: `Razor Whip`,
    itemType: ItemType.Weapon,
    perks: {
      attacks: [{
        name: `Razor Whip`,
        harm: 3,
        ranges: [RangeEnum.Hand],
        tags: [`area`, `messy`, `holy`],
      }]
    }
  },
  SilverTrident: {
    id: `d67eb2b2-504a-4461-8eb8-41f29e342159`,
    name: `Silver Trident`,
    itemType: ItemType.Weapon,
    perks: {
      attacks: [{
        name: `Silver Trident`,
        harm: 3,
        ranges: [RangeEnum.Hand],
        tags: [`silver`, `holy`],
      }]
    }
  },
  SubmachineGun: {
    id: `d8593b2f-daff-45f3-9dcc-bdad9e048fa6`,
    name: `Submachine Gun`,
    itemType: ItemType.Weapon,
    perks: {
      attacks: [{
        name: `Submachine Gun`,
        harm: 2,
        ranges: [RangeEnum.Close],
        tags: [`reload`, `area`],
      }]
    }
  },
  ThunderHammer: {
    id: `cdf705e3-86f4-4b3d-b6bf-0d98a20a66e3`,
    name: `Thunder Hammer`,
    itemType: ItemType.Weapon,
    perks: {
      attacks: [{
        name: `Thunder Hammer`,
        harm: 3,
        ranges: [RangeEnum.Hand],
        tags: [`stun`, `holy`],
      }]
    }
  },
} as const;