import {type Feat, FeatTypeEnum, ItemType} from "./CompendiumTypes";
import {ItemTag} from "./Tags";
import {InputTypes} from "./UserInputTypes";
import {itemLookup} from "./Gear";

export let StartingFeats: Array<Feat> = [
  {
    name: `Default Attacks`,
    id: `4cbc4894-e8f2-454b-8e31-a2bebe0f07c9`,
    featType: FeatTypeEnum.Gear,
    
    description: `Default unarmed and improvised attacks`,

    items: [
      {
        name: `Unarmed`,
        id: `ac023866-c550-4446-8f3a-db6524f5f926`,
        featType: FeatTypeEnum.Item,

        description: `Any attack that is equal to or less than a punch in severity.`,
        itemType: ItemType.InnateWeapon,
        harm: 0,
        tags: [ItemTag.intimate, ItemTag.hand],
      },
      {
        name: `Basic Improvised Weapon`,
        id: `4661be3e-4a68-4023-be52-ca61b431d84d`,
        featType: FeatTypeEnum.Item,

        description: `A sharp or heavy object (such as a kitchen knife or a lamp.) If it can be thrown effectively, you can use \`#close\`.`,
        itemType: ItemType.InnateWeapon,
        harm: 1,
        tags: [ItemTag.hand, ItemTag.close],
      },
      {
        name: `Heavy Improvised Weapon`,
        id: `aa3f72fc-5e51-453d-8bcc-cc0c4b801d22`,
        featType: FeatTypeEnum.Item,

        description: `A really heavy object (such as a microwave or bar stool.)`,
        itemType: ItemType.InnateWeapon,
        harm: 2,
        tags: [ItemTag.hand, ItemTag.heavy],
      },
    ]
  },
  {
    name: `Gear`,
    id: `9d2855cd-bdf6-4655-b7b7-76b7677a9982`,
    playbooks: [`94a658a0-f5dc-4e4b-a1ec-1b322b08d78f`], // The Chosen
    featType: FeatTypeEnum.Gear,

    description: `You own **Protective Gear** and a **Special Weapon** that you are destined to wield.`,
    longDescription: `You own **Protective Gear** and a **Special Weapon** that you are destined to wield.

Design your **Special Weapon** by choosing a form and three business-end options
(which are added to the base tags) and a material.

Example:
* Magic Sword with a ranged attack: handle + blade + long + artifact.`,

    items: [{
      name: `Protective Gear`,
      id: `0bcf6daa-75ef-489e-8c22-81acebb8a030`,
      featType: FeatTypeEnum.Item,

      itemType: ItemType.Armor,
      armor: 1,
      tags: []
    }],

    inputs: [
      {
        label: `Special Weapon Base`,
        inputType: InputTypes.FeatChoice,
        choose: 1,
        options: [
          {
            name: `Staff`,
            id: `47058bf6-e281-4ee5-8a1e-9a722b49cc51`,
            featType: FeatTypeEnum.SubFeat,

            items: [{
              name: `Special Weapon`,
              id: `9d2855cd-bdf6-4655-b7b7-76b7677a9982`,
              featType: FeatTypeEnum.Item,

              itemType: ItemType.Weapon,
              harm: 1,
              tags: [ItemTag.hand, ItemTag.close],
              tagInputs: [{
                label: `Business-end Material`,
                choose: 1,
                options: [
                  ItemTag.steel, ItemTag.coldIron, ItemTag.silver, ItemTag.wood, ItemTag.stone, ItemTag.bone,
                  ItemTag.obsidian
                ],
              }]
            }]
          },
          {
            name: `Haft`,
            id: `fc62b6ec-95e6-44c9-92a5-b9520d77ed80`,
            featType: FeatTypeEnum.SubFeat,

            items: [{
              name: `Special Weapon`,
              id: `9d2855cd-bdf6-4655-b7b7-76b7677a9982`,
              featType: FeatTypeEnum.Item,

              itemType: ItemType.Weapon,
              harm: 2,
              tags: [ItemTag.hand, ItemTag.heavy],
            }]
          },
          {
            name: `Handle`,
            id: `85c3a5fe-c2a3-4ac8-8db5-22ab6d8cdb80`,
            featType: FeatTypeEnum.SubFeat,

            items: [{
              name: `Special Weapon`,
              id: `9d2855cd-bdf6-4655-b7b7-76b7677a9982`,
              featType: FeatTypeEnum.Item,

              itemType: ItemType.Weapon,
              harm: 1,
              tags: [ItemTag.hand, ItemTag.balanced],
            }]
          },
          {
            name: `Chain`,
            id: `cb4bb1d1-22ee-47b1-aa13-08745d005afc`,
            featType: FeatTypeEnum.SubFeat,

            items: [{
              name: `Special Weapon`,
              id: `9d2855cd-bdf6-4655-b7b7-76b7677a9982`,
              featType: FeatTypeEnum.Item,

              itemType: ItemType.Weapon,
              harm: 1,
              tags: [ItemTag.hand, ItemTag.area],
            }]
          },
        ]
      },
      {
        label: `Special Weapon Business-end`,
        inputType: InputTypes.FeatChoice,
        choose: 3,
        options: [
          {
            name: `Artifact`,
            id: `8de00cbe-834f-4cf1-b4a0-475be9b00511`,
            featType: FeatTypeEnum.SubFeat,

            perks: {
              modAttack: [{
                name: `Artifact`,
                addTags: [ItemTag.magic],
                applyToItem: [`9d2855cd-bdf6-4655-b7b7-76b7677a9982`] // Special Weapon
              }]
            }
          },
          {
            name: `Spikes`,
            id: `c506f905-69f4-4b47-9c22-afcb1ea96209`,
            featType: FeatTypeEnum.SubFeat,

            perks: {
              modAttack: [{
                name: `Spikes`,
                offset: 1,
                addTags: [ItemTag.messy],
                applyToItem: [`9d2855cd-bdf6-4655-b7b7-76b7677a9982`] // Special Weapon
              }]
            }
          },
          {
            name: `Blade`,
            id: `b3c7110d-0fe2-4402-b737-4b6f33f7826c`,
            featType: FeatTypeEnum.SubFeat,

            perks: {
              modAttack: [{
                name: `Blade`,
                offset: 1,
                applyToItem: [`9d2855cd-bdf6-4655-b7b7-76b7677a9982`] // Special Weapon
              }]
            }
          },
          {
            name: `Heavy`,
            id: `30e76cc0-26fd-40ef-aa77-47a71a209f6a`,
            featType: FeatTypeEnum.SubFeat,

            perks: {
              modAttack: [{
                name: `Heavy`,
                offset: 1,
                addTags: [ItemTag.heavy],
                applyToItem: [`9d2855cd-bdf6-4655-b7b7-76b7677a9982`] // Special Weapon
              }]
            }
          },
          {
            name: `Long`,
            id: `56364a15-486c-44bd-83ae-6f0602a6b3bc`,
            featType: FeatTypeEnum.SubFeat,

            perks: {
              modAttack: [{
                name: `Long`,
                addTags: [ItemTag.close],
                applyToItem: [`9d2855cd-bdf6-4655-b7b7-76b7677a9982`] // Special Weapon
              }]
            }
          },
          {
            name: `Throwable`,
            id: `31824048-49c8-4b4f-b415-0d4732513242`,
            featType: FeatTypeEnum.SubFeat,

            perks: {
              modAttack: [{
                name: `Throwable`,
                addTags: [ItemTag.close],
                applyToItem: [`9d2855cd-bdf6-4655-b7b7-76b7677a9982`] // Special Weapon
              }]
            }
          },
          {
            name: `Chain`,
            id: `d3586c8f-c000-431d-8582-455b63292ba3`,
            featType: FeatTypeEnum.SubFeat,

            perks: {
              modAttack: [{
                name: `Chain`,
                addTags: [ItemTag.area],
                applyToItem: [`9d2855cd-bdf6-4655-b7b7-76b7677a9982`] // Special Weapon
              }]
            }
          },
        ]
      }
    ],
  },
  {
    name: `Gear`,
    id: `5fa16edd-c71d-44d5-b5cb-7660aa10c292`,
    playbooks: [`bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae`], // The Crooked
    featType: FeatTypeEnum.Gear,

    description: `Starting Crooked Gear`,

    inputs: [{
      label: `Weapons`,
      inputType: InputTypes.ItemChoice,
      choose: 3,
      options: [
        itemLookup.Revolver22,
        itemLookup.Revolver38,
        itemLookup.Handgun,
        itemLookup.Shotgun,
        itemLookup.HuntingRifle,
        itemLookup.BigKnife ,
        itemLookup.BaseballBat,
        itemLookup.SubmachineGun,
        {
          name: `Assault Rifle`,
          id: `3d12da2a-2362-46a6-8b13-51e9218935ca`,
          featType: FeatTypeEnum.Item,

          itemType: ItemType.Weapon,
          harm: 3,
          tags: [ItemTag.close, ItemTag.far, ItemTag.area],
        },
      ]
    }]
  },
  {
    name: `Gear`,
    id: `70f95c2f-9b6a-4a28-9d74-11d647f14944`,
    playbooks: [`9e9f712c-54d9-4193-b7ad-48c64f7ec9dc`], // The Divine
    featType: FeatTypeEnum.Gear,

    description: `You own **Divine Armor** and a **Divine Weapon**.`,
    
    items: [{
      name: `Divine Armor`,
      id: `7c9a7ce8-3143-4259-abf9-cb094b69980d`,
      featType: FeatTypeEnum.Item,

      itemType: ItemType.Armor,
      armor: 1,
      tags: [ ItemTag.holy ],
    }],

    inputs: [{
      label: `Divine Weapon`,
      inputType: InputTypes.ItemChoice,
      choose: 1,
      options: [
        itemLookup.FlamingSword,
        itemLookup.ThunderHammer,
        itemLookup.RazorWhip,
        itemLookup.FiveDemonBag,
        itemLookup.SilverTrident,
      ]
    }],
  },
  {
    name: `Gear`,
    id: `b755dd6c-4a1f-466f-8b04-a9a61a69ddd4`,
    playbooks: [`689d32a6-faa1-4258-9fda-894b9bdf8571`], // The Expert
    featType: FeatTypeEnum.Gear,

    description: `Starting Expert Gear`,

    inputs: [{
      label: `Monster Slaying Weapons`,
      inputType: InputTypes.ItemChoice,
      choose: 3,
      options: [
        itemLookup.WoodenStakesAndMallet,
        itemLookup.SilverSword,
        itemLookup.ColdIronSword,
        itemLookup.BlessedKnife,
        itemLookup.MagicDagger,
        itemLookup.JujuBag,
        itemLookup.Flamethrower,
        itemLookup.Magnum,
        itemLookup.ShotgunLoud,
      ]
    }]
  },
  {
    name: `Gear`,
    id: `97eae3fe-b56d-41db-9580-88ca63ff19e7`,
    playbooks: ["3ef37c00-3254-4af4-830a-9a21e7c6d02a"], // The Flake
    featType: FeatTypeEnum.Gear,

    description: `Starting Flake Gear`,

    inputs: [
      {
        label: `Normal Weapons`,
        inputType: InputTypes.ItemChoice,
        choose: 1,
        options: [
          itemLookup.Revolver38,
          itemLookup.Handgun,
          itemLookup.HuntingRifle,
          itemLookup.Magnum,
          itemLookup.ShotgunLoud,
          itemLookup.BigKnife,
        ]
      },
      {
        label: `Hidden Weapons`,
        inputType: InputTypes.ItemChoice,
        choose: 2,
        options: [
          itemLookup.ThrowingKnives,
          itemLookup.HoldoutPistol,
          itemLookup.Garrote,
          itemLookup.BigFlashlight,
          itemLookup.SapGloves,
          itemLookup.BrassKnuckles,
          itemLookup.ButterflyKnife,
          itemLookup.Switchblade,
          itemLookup.Knife,
        ]
      }
    ]
  },
  {
    name: `Gear`,
    id: `e60b335d-f3ef-44fb-839b-6fa2014b86af`,
    playbooks: [`12bc1318-24c7-4402-b9bb-be0698c4ed99`], // The Gumshoe
    featType: FeatTypeEnum.Gear,

    description: `Starting Gumshoe Gear`,

    items: [
      itemLookup.Laptop,
      itemLookup.LiquorFlask,
    ],

    inputs: [
      {
        label: `Recording Devices`,
        inputType: InputTypes.ItemChoice,
        choose: 2,
        options: [
          itemLookup.NightVisionCamera,
          itemLookup.TinyDigitalVideoCamera,
          itemLookup.FilmCamera,
          itemLookup.DigitalRecorder,
          itemLookup.TapeRecorder,
          itemLookup.RemoteControlledCameraDrone,
          itemLookup.LaserMicrophone,
          itemLookup.SLRCamera,
        ]
      },
      {
        label: `P.I. Weapons`,
        inputType: InputTypes.ItemChoice,
        choose: 1,
        options: [
          itemLookup.BrassKnuckles,
          itemLookup.Revolver38,
          itemLookup.Handgun,
          itemLookup.Magnum,
          itemLookup.ShotgunLoud,
          itemLookup.Switchblade,
          itemLookup.Knife,
        ]
      }
    ],
  },
  {
    name: `Gear`,
    id: `6d36b37a-cbcc-4468-9a4e-5d4182891d15`,
    playbooks: ["23bdadbc-b690-4baa-8d96-7c791b4d66da"], // The Hex
    featType: FeatTypeEnum.Gear,

    description: `Starting Hex Gear`,

    inputs: [
      {
        label: `Wizardly Weapons`,
        inputType: InputTypes.ItemChoice,
        choose: 2,
        options: [
          itemLookup.Revolver38,
          itemLookup.ShotgunLoud,
          itemLookup.Athame,
          itemLookup.Shillelagh,
          itemLookup.Crossbow,
          itemLookup.Staff,
        ]
      },
      {
        label: `Magic Materials`,
        subLabel: `You own the foci, consumables, etc. needed to invoke your Rotes.`,
        inputType: InputTypes.ItemChoice,
        choose: 0,
        chooseMax: 0,
        allowCustom: true,
        options: [
          {
            name: `Amulet`, 
            id: `7d80e4bb-1a8b-4651-8e08-4b832cc12b6a`,
            featType: FeatTypeEnum.Item,
            itemType: ItemType.Equipment,
            tags: [ItemTag.magic]
          },
          {
            name: `Wand`, 
            id: `3ed85ad9-1bb8-436c-85d5-8fa3288f4bc7`,
            featType: FeatTypeEnum.Item,
            itemType: ItemType.Equipment,
            tags: [ItemTag.magic]
          },
          {
            name: `Chalk`, 
            id: `950a19b1-8899-4a12-8cf7-eea52435b1d3`,
            featType: FeatTypeEnum.Item,
            itemType: ItemType.Equipment
          },
          {
            name: `Charcoal`, 
            id: `0abee32d-3cf7-48ac-81b0-7c39496aeb5f`,
            featType: FeatTypeEnum.Item,
            itemType: ItemType.Equipment
          },
          {
            name: `Salt`, 
            id: `16202370-f3d1-4cbc-97bd-6a5a607e9db7`,
            featType: FeatTypeEnum.Item,
            itemType: ItemType.Equipment
          },
          {
            name: `Apothecary Bag`,
            id: `07a1ec91-35e4-4c3b-8016-7c76a20ab878`,
            featType: FeatTypeEnum.Item,
            itemType: ItemType.Equipment
          },
        ]
      },
    ],
    perks: {
      inventory: [{
        description: `You own whatever magical items or amulets you use to perform magic, including whatever you need to cast your rotes.`,
      }]
    }
  },
  {
    name: `Gear`,
    id: `18925ae2-350e-463d-b942-27d28ef7dab6`,
    playbooks: [`a78c7ee1-eb8d-4622-adeb-22d9d87169b5`], // The Initiate
    featType: FeatTypeEnum.Gear,

    description: `Starting Initiate Gear`,

    items: [ itemLookup.OldFashionedArmor ],
    
    inputs: [
      {
        label: `Old-fashioned Weapons`,
        key: `e7bf9a56-4b57-47a6-a551-b6d97ac83550`, // Another pick added for Sect tags `Fighting Arts` or `Obsolete Gear` 
        inputType: InputTypes.ItemChoice,
        choose: 2,
        options: [
          itemLookup.Sword,
          itemLookup.Axe,
          itemLookup.BigSword,
          itemLookup.BigAxe,
          itemLookup.SilverKnife,
          itemLookup.EscrimaSticks,
          itemLookup.Spear,
          itemLookup.Mace,
          itemLookup.Crossbow,
        ]
      },
      {
        label: `Modern Weapons`,
        key: `d3ff72fb-23b1-45fe-8386-2bd63e97764f`, // Another pick added for Sect tags `modernized` or `nifty gadgets`
        inputType: InputTypes.ItemChoice,
        choose: 1,
        options: [
          itemLookup.Revolver38,
          itemLookup.Handgun,
          itemLookup.SniperRifle,
          itemLookup.Magnum,
          itemLookup.Shotgun,
        ]
      }
    ],
  },
  {
    name: `Gear`,
    id: `f8a61f37-cb13-4228-ab20-6647e5589507`,
    playbooks: [`a5f796af-dd20-4ee0-8920-18b80e20ec24`], // The Monstrous
    featType: FeatTypeEnum.Gear,

    description: `Starting Monstrous Gear`,

    inputs: [
      {
        label: `Handy Weapon`,
        inputType: InputTypes.ItemChoice,
        choose: 1,
        options: [
          itemLookup.Revolver38,
          itemLookup.Handgun,
          itemLookup.Magnum,
          itemLookup.Shotgun,
          itemLookup.BigKnife,
          itemLookup.BrassKnuckles,
          itemLookup.SapGloves,
          itemLookup.Sword,
          itemLookup.BigSword,
        ]
      }
    ],
  },
  {
    name: `Gear`,
    id: `c8b4a894-620a-4ebc-bc08-359081857f40`,
    playbooks: [`b03c7fb1-9ce4-4cba-a527-6c1380ac5de0`], // The Mundane
    featType: FeatTypeEnum.Gear,

    description: `Starting Mundane Gear`,

    inputs: [
      {
        label: `Mundane Weapons`,
        inputType: InputTypes.ItemChoice,
        choose: 2,
        options: [
          itemLookup.BaseballBat, itemLookup.CricketBat, itemLookup.GolfClub, itemLookup.HockeyStick,
          itemLookup.Pocketknife, itemLookup.MultiTool,
          itemLookup.Knife,
          itemLookup.SmallHandgun,
          itemLookup.HuntingRifleHC,
          itemLookup.Sledgehammer,
          itemLookup.FireAxe,
          itemLookup.Nunchucks,
        ]
      },
      {
        label: `Transportation`,
        inputType: InputTypes.ItemChoice,
        choose: 1,
        options: [
          itemLookup.Skateboard,
          itemLookup.Bicycle,
          itemLookup.Car,
          itemLookup.Motorcycle,
          itemLookup.Van,
        ]
      }
    ],
  },
  {
    name: `Gear`,
    id: `77a7a4df-d4cc-4f40-9e92-e401558e0f0a`,
    playbooks: [`58924c0d-c015-4fcd-8fd9-ca75f12fd019`], // The Professional
    featType: FeatTypeEnum.Gear,

    description: `Starting Professional Gear`,

    inputs: [
      {
        label: `Armor`,
        inputType: InputTypes.ItemChoice,
        choose: 1,
        options: [
          itemLookup.FlakVest,
          itemLookup.CombatArmor,
        ]
      },
      {
        label: `Serious Weapon`,
        inputType: InputTypes.ItemChoice,
        choose: 1,
        options: [
          {
            name: `Assault Rifle`,
            id: `4108e5de-2d3c-4649-b1c0-6e7b96d0edaf`,
            featType: FeatTypeEnum.Item,

            itemType: ItemType.Weapon,
            harm: 3,
            tags: [ItemTag.close, ItemTag.far, ItemTag.area, ItemTag.loud, ItemTag.reload],
          },
          itemLookup.GrenadeLauncher,
          itemLookup.SniperRifleHC,
          itemLookup.Grenades,
          itemLookup.SubmachineGunHC,
        ]
      },
      {
        label: `Normal Weapons`,
        inputType: InputTypes.ItemChoice,
        choose: 2,
        options: [
          itemLookup.Revolver38,
          itemLookup.Handgun,
          itemLookup.Rifle,
          itemLookup.Shotgun,
          itemLookup.BigKnife,
        ]
      }
    ]
  },
  {
    name: `Gear`,
    id: `6c0a242e-2d35-433b-b3cc-d218ec462c84`,
    playbooks: [`f7b73a9a-6447-42f8-b373-b71341bdad99`], // The Searcher
    featType: FeatTypeEnum.Gear,

    description: `Starting Searcher Gear`,

    items: [itemLookup.Laptop, itemLookup.LiquorFlask, itemLookup.Camera, itemLookup.Binoculars],

    inputs: [
      {
        label: `Transportation`,
        inputType: InputTypes.ItemChoice,
        choose: 1,
        options: [itemLookup.Car, itemLookup.Motorcycle]
      },
      {
        label: `Investigation Tools`,
        inputType: InputTypes.ItemChoice,
        choose: 2,
        options: [
          itemLookup.DocumentingGear,
          itemLookup.ForensicTools,
          itemLookup.GhostHuntingTools,
          itemLookup.ScientificMeasuringTools,
          itemLookup.CryptidHuntingGear,
          itemLookup.StrangeCaseFiles,
          itemLookup.Maps,
        ]
      },
      {
        label: `Self-defense Weapons`,
        inputType: InputTypes.ItemChoice,
        choose: 1,
        options: [
          itemLookup.WalkingStick,
          itemLookup.SmallHandgun,
          itemLookup.BigKnife,
          itemLookup.MartialArtsTraining,
          itemLookup.IncapacitatingSpray,
          itemLookup.BigFlashlight,
        ]
      },
    ],
  },
  {
    name: `Gear`,
    id: `f7573bf7-5192-443a-9c3c-28798dce7e66`,
    playbooks: [`cfecc496-d1c1-4b30-af48-0f3f41cd02c0`], // The Snoop
    featType: FeatTypeEnum.Gear,

    description: `Starting Snoop Gear`,

    items: [ itemLookup.Laptop ],

    inputs: [
      {
        label: `Recording Devices`,
        inputType: InputTypes.ItemChoice,
        choose: 3,
        allowCustom: true,
        options: [
          itemLookup.VideoCamera,
          itemLookup.TinyDigitalCamera,
          itemLookup.FilmCamera,
          itemLookup.DigitalRecorder,
          itemLookup.TapeRecorder,
          itemLookup.InfraredCamera,
          itemLookup.ProSoundGear,
          itemLookup.CameraDrone,
          itemLookup.StarlightCamera,
          itemLookup.SteadicamRig,
          itemLookup.LaserMicrophone,
          itemLookup.SLRCamera,
          itemLookup.NiceSmartphone,
        ],
      },
      {
        label: `Detectors`,
        inputType: InputTypes.ItemChoice,
        choose: 2,
        allowCustom: true,
        options: [
          itemLookup.ElectromagneticFieldDetector,
          itemLookup.TemperatureFluctuationDetector,
          itemLookup.OuijaBoard,
          itemLookup.HumidityMeter,
          itemLookup.DowsingRods,
          itemLookup.ChemistryTestKit,
          itemLookup.MetalDetector,
          itemLookup.Compass,
          itemLookup.GPSReceiver,
          itemLookup.LaserRangefinder,
          itemLookup.Pendulum,
          itemLookup.TarotDeck,
          itemLookup.Magic8Ball,
        ],
      },
      {
        label: `Subtle Weapons`,
        inputType: InputTypes.ItemChoice,
        choose: 1,
        options: [
          itemLookup.Pocketknife, itemLookup.MultiTool,
          itemLookup.StunGun,
          itemLookup.BaseballBat, itemLookup.CricketBat, itemLookup.GolfClub, itemLookup.HockeyStick,
          itemLookup.Handgun,
          itemLookup.Knife,
        ]
      },
    ],
  },
  {
    name: `Gear`,
    id: `3c30b246-6d27-4d32-8919-6f2bcc566ad2`,
    playbooks: [`3f493473-f122-4255-8b19-3635908b2664`], // The Spell-Slinger
    featType: FeatTypeEnum.Gear,

    description: `Starting Spell-Slinger Gear`,
    longDescription: `You don't need much, but it's still good to carry some backup.`,

    inputs: [
      {
        label: `Weapon`,
        inputType: InputTypes.ItemChoice,
        choose: 1,
        options: [itemLookup.RevolverOld,itemLookup.RitualKnife,itemLookup.HeirloomSword]
      },
      {
        label: `Magic Materials`,
        subLabel: `Optional. You own the foci or consumables needed to invoke your Combat Magic.`,
        inputType: InputTypes.ItemChoice,
        choose: 0,
        chooseMax: 0,
        allowCustom: true,
        options: [
          {
            name: `Amulet`,
            id: `7d80e4bb-1a8b-4651-8e08-4b832cc12b6a`,
            featType: FeatTypeEnum.Item,
            itemType: ItemType.Equipment,
            tags: [ItemTag.magic]
          },
          {
            name: `Wand`,
            id: `3ed85ad9-1bb8-436c-85d5-8fa3288f4bc7`, 
            featType: FeatTypeEnum.Item,
            itemType: ItemType.Equipment,
            tags: [ItemTag.magic]
          },
          {
            name: `Apothecary Bag`,
            id: `07a1ec91-35e4-4c3b-8016-7c76a20ab878`,
            featType: FeatTypeEnum.Item,
            itemType: ItemType.Equipment
          },
        ]
      },
    ],
  },
  {
    name: `Gear`,
    id: `5b05d02f-8f34-405f-84f5-e14261cbd48b`,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    featType: FeatTypeEnum.Gear,

    description: `Starting Spooktacular Gear`,
    
    items: [
      {
        name: `Tickets to a Show`,
        id: `cc5e2c73-ecb9-4a7a-ba35-f0b8f5628e44`,
        featType: FeatTypeEnum.Item,
        itemType: ItemType.Equipment
      },
      {
        name: `Snack Vouchers`,
        id: `41ad766a-c375-44e2-bfee-a007bb59cdeb`,
        featType: FeatTypeEnum.Item,
        itemType: ItemType.Equipment
      },
      {
        name: `Decks of Cards`,
        id: `8bc16d50-72de-4741-ab21-de123c969511`,
        featType: FeatTypeEnum.Item,
        itemType: ItemType.Equipment
      },
      {
        name: `Pairs of Dice`,
        id: `8681d34d-a0df-4b56-b8a9-8b611a90a6ee`,
        featType: FeatTypeEnum.Item,
        itemType: ItemType.Equipment
      },
      {
        name: `Magic Trick Props`,
        id: `848d5cb3-90cd-4c07-bf65-67dffd9fb6ff`,
        featType: FeatTypeEnum.Item,
        itemType: ItemType.Equipment
      },
      {
        name: `Camping Gear`,
        id: `cfae07bc-45fa-4996-b7e3-93efbd7f6a48`,
        featType: FeatTypeEnum.Item,
        itemType: ItemType.Equipment
      },
      {
        name: `Makeup`,
        id: `d23db6b5-4872-4ac8-8d1e-4ba50b32756c`,
        featType: FeatTypeEnum.Item,
        itemType: ItemType.Equipment
      },
      {
        name: `Costume Accessories`,
        id: `b7bb5e1f-66f2-4e25-bdd2-4c81b1874fee`,
        featType: FeatTypeEnum.Item,
        itemType: ItemType.Equipment
      },
    ],
    
    inputs: [
      {
        label: `Camp Tool`,
        inputType: InputTypes.ItemChoice,
        choose: 1,
        options: [
          itemLookup.Pocketknife, itemLookup.MultiTool,
          itemLookup.Mallet,
          itemLookup.Crowbar,
          itemLookup.BaseballBat, itemLookup.CricketBat, itemLookup.GolfClub, itemLookup.HockeyStick,
          itemLookup.Hatchet,
          itemLookup.SockOfCoins,
        ]
      },
      {
        label: `Transportation`,
        inputType: InputTypes.ItemChoice,
        choose: 1,
        options: [
          itemLookup.Pickup,
          itemLookup.BoxTruck,
          itemLookup.Van,
          itemLookup.MotorcycleWithSidecar,
        ]
      },
      {
        label: `Mystical Item`,
        inputType: InputTypes.ItemChoice,
        choose: 1,
        options: [
          itemLookup.GhostShades,
          itemLookup.BigPlushDog,
          itemLookup.Returning100,
          itemLookup.Scamulet,
          itemLookup.WizardTent,
        ]
      }
    ]
  },
  {
    name: `Gear`,
    id: `1e7a1da4-0e3b-4170-977b-367446ee2943`,
    playbooks: [`1dccf639-8ee6-457e-a2b4-ea2ae9a0bd1a`], // The Spooky
    featType: FeatTypeEnum.Gear,

    description: `Starting Spooky Gear`,

    inputs: [
      {
        label: `Normal Weapons`,
        inputType: InputTypes.ItemChoice,
        choose: 2,
        options: [
          itemLookup.Revolver38,
          itemLookup.Handgun,
          itemLookup.HuntingRifle,
          itemLookup.Shotgun,
          itemLookup.BigKnife,
        ]
      },
      {
        label: `Power Item`,
        subLabel: `Optional. You can own a magic item or foci that is needed to invoke your powers.`,
        inputType: InputTypes.ItemChoice,
        choose: 0,
        chooseMax: 0,
        allowCustom: true,
        options: [
          {
            name: `Amulet`,
            id: `7d80e4bb-1a8b-4651-8e08-4b832cc12b6a`,
            featType: FeatTypeEnum.Item,
            itemType: ItemType.Equipment,
            tags: [ItemTag.magic]
          },
          {
            name: `Wand`,
            id: `3ed85ad9-1bb8-436c-85d5-8fa3288f4bc7`,
            featType: FeatTypeEnum.Item,
            itemType: ItemType.Equipment,
            tags: [ItemTag.magic]
          },
          {
            name: `Brain Chip`,
            id: `9f8f16a7-a904-40dc-9841-e0dd72ceb812`,
            featType: FeatTypeEnum.Item,
            itemType: ItemType.Equipment
          },
        ]
      },
    ],
  },
  {
    name: `Gear`,
    id: `53939d63-c4e4-483a-b4cd-09f54e0d1c90`,
    playbooks: [`36e0df53-1690-46cf-a59e-56ef397d108d`], // The Wronged
    featType: FeatTypeEnum.Gear,

    description: `Starting Wronged Gear`,
    
    items: [itemLookup.ProtectiveGear],

    inputs: [
      {
        label: `Signature Weapon`,
        inputType: InputTypes.ItemChoice,
        choose: 1,
        options: [
          {
            name: `Sawed-off Shotgun`,
            id: `e0f82978-e7f7-4dc6-8cc1-4e1ba4b0f565`,
            featType: FeatTypeEnum.Item,
            itemType: ItemType.Weapon,
            harm: 3,
            tags: [ItemTag.hand,ItemTag.close,ItemTag.loud,ItemTag.messy,ItemTag.reload],
          },
          {
            name: `Hand Cannon`,
            id: `8a31b45a-7582-4fe3-ae75-9eff008cc627`,
            featType: FeatTypeEnum.Item,
            itemType: ItemType.Weapon,
            harm: 3,
            tags: [ItemTag.close,ItemTag.loud],
          },
          {
            name: `Combat Knife`,
            id: `8a1ab660-5111-41e0-9fb2-54ef882bf0c4`,
            featType: FeatTypeEnum.Item,
            itemType: ItemType.Weapon,
            harm: 2,
            tags: [ItemTag.hand, ItemTag.quiet]
          },
          {
            name: `Huge Sword`,
            id: `e2b8ec97-4496-418b-bbe2-d567f038f7fe`,
            featType: FeatTypeEnum.Item,
            itemType: ItemType.Weapon,
            harm: 3,
            tags: [ItemTag.hand, ItemTag.heavy, ItemTag.messy],
          },
          {
            name: `Huge Axe`,
            id: `deda4843-fcb5-4be9-a37e-2fa8148e8762`,
            featType: FeatTypeEnum.Item,
            itemType: ItemType.Weapon,
            harm: 3,
            tags: [ItemTag.hand, ItemTag.heavy, ItemTag.messy],
          },
          {
            name: `Slaying Weapon`,
            id: `976104b5-fc6f-4de6-8623-c9bb0fab9e42`,
            featType: FeatTypeEnum.Item,
            
            description: `A specialized weapon for destroying your foes. Build your own, adding tags with \`The Keeper\`'s agreement.

Examples:
* Vampires: Wooden Stakes and a Mallet \`#intimate\` \`#wood\`
* Werewolves: Silver Dagger \`#close\` \`#silver\`
* Robots: Cattle Prod \`#close\` \`#electricity\` \`#stun\``,
            itemType: ItemType.Weapon,
            harm: 1,
            tagInputs: [
              {
                label: `Range`,
                choose: 1,
                chooseMax: 0,
                options: [ItemTag.intimate,ItemTag.hand,ItemTag.close,ItemTag.far]
              }
            ],
            perks: {
              modAttack: [{
                name: `Specialized Weapon`,
                offset: 3,
                addTags: [ItemTag.monsterWeakness],
                condition: `Apply vs this weapon's targeted monster type.`,
                applyToItem: [`976104b5-fc6f-4de6-8623-c9bb0fab9e42`],
              }]
            }
          },
          {
            name: `Enchanted Dagger`,
            id: `ae4064c4-9f06-4dbe-81ca-33c972946fe6`,
            featType: FeatTypeEnum.Item,
            itemType: ItemType.Weapon,
            harm: 2,
            tags: [ItemTag.hand, ItemTag.magic],
          },
          {
            name: `Chainsaw`,
            id: `ccb6bdad-cb1c-4fae-8a4b-7fc303e22894`,
            featType: FeatTypeEnum.Item,
            itemType: ItemType.Weapon,
            harm: 3,
            tags: [ItemTag.hand, ItemTag.heavy, ItemTag.loud, ItemTag.messy, ItemTag.unreliable],
          },
        ]
      },
      {
        label: `Practical Weapons`,
        inputType: InputTypes.ItemChoice,
        choose: 2,
        options: [
          itemLookup.Revolver38,
          itemLookup.Handgun,
          itemLookup.HuntingRifle,
          itemLookup.ShotgunLoud,
          itemLookup.BigKnife,
          itemLookup.BrassKnuckles, itemLookup.SapGloves,
          {
            name: `Assault Rifle`,
            id: `57597991-6397-4496-b2b8-73505addc186`,
            featType: FeatTypeEnum.Item,
            itemType: ItemType.Weapon,
            harm: 3,
            tags: [ItemTag.close, ItemTag.area, ItemTag.loud, ItemTag.reload],
          }
        ]
      },
      {
        label: `Transportation`,
        subLabel: `Optional. You may take a vehicle. If you take a car or motorcycle, you can add an extra \`#classic\` tag.`,
        inputType: InputTypes.ItemChoice,
        choose: 0,
        chooseMax: 1,
        options: [
          itemLookup.Car, // TODO: Was Classic
          itemLookup.Motorcycle, // TODO: Was Classic
          itemLookup.PickupTruck,
          itemLookup.Van,
        ]
      }
    ]
  }
]