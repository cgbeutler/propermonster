import {type Feat, FeatType} from "./CompendiumTypes";
import {ItemTag} from "./Tags";
import {InputTypes} from "./UserInputs";
import {Gear} from "./Gear";

export let StartingGear: {[key: string]: Feat} = {
  DefaultAttacks: {
    name: `Default Attacks`,
    id: `4cbc4894-e8f2-454b-8e31-a2bebe0f07c9`,
    featType: FeatType.Gear,
    
    description: `Default unarmed and improvised attacks`,
    
    subFeats: [
      {
        name: `Unarmed`,
        id: `ac023866-c550-4446-8f3a-db6524f5f926`,
        description: `Any attack that is equal to or less than a punch in severity.`,
        tags: [ItemTag.intimate, ItemTag.hand],
        attacks: [{ harm: 0 }],
      },
      {
        name: `Basic Improvised Weapon`,
        id: `4661be3e-4a68-4023-be52-ca61b431d84d`,
        description: `A sharp or heavy object (such as a kitchen knife or a lamp.) If it can be thrown effectively, you can use \`#close\`.`,
        tags: [ItemTag.hand, ItemTag.close],
        attacks: [{ harm: 1 }],
      },
      {
        name: `Heavy Improvised Weapon`,
        id: `aa3f72fc-5e51-453d-8bcc-cc0c4b801d22`,
        description: `A really heavy object (such as a microwave or bar stool.)`,
        tags: [ItemTag.hand, ItemTag.heavy],
        attacks: [{ harm: 2 }],
      },
    ]
  },
  Chosen: {
    name: `Gear`,
    id: `9d2855cd-bdf6-4655-b7b7-76b7677a9982`,
    playbooks: [`94a658a0-f5dc-4e4b-a1ec-1b322b08d78f`], // The Chosen
    featType: FeatType.Gear,

    description: `You own **Protective Gear** and a **Special Weapon** that you are destined to wield.`,
    longDescription: `You own **Protective Gear** and a **Special Weapon** that you are destined to wield.

Design your **Special Weapon** by choosing a form and three business-end options
(which are added to the base tags) and a material.

Example:
* Magic Sword with a ranged attack: handle + blade + long + artifact.`,

    subFeatsById: [Gear.ProtectiveGear.id],

    inputs: [
      {
        label: `Special Weapon Base`, key: `b40c4921-8214-497a-809d-aef6b27031f6`,
        inputType: InputTypes.FeatChoice,
        choose: 1,
        options: [
          {
            name: `Staff`,
            id: `47058bf6-e281-4ee5-8a1e-9a722b49cc51`,
            featType: FeatType.Weapon,
            tags: [ItemTag.hand, ItemTag.close],
            attacks: [{ harm: 1 }],
            tagInputs: [{
              label: `Business-end Material`,
              choose: 1,
              options: [
                ItemTag.steel, ItemTag.coldIron, ItemTag.silver, ItemTag.wood, ItemTag.stone, ItemTag.bone,
                ItemTag.obsidian
              ],
            }]
          },
          {
            name: `Haft`,
            id: `fc62b6ec-95e6-44c9-92a5-b9520d77ed80`,
            featType: FeatType.Weapon,
            tags: [ItemTag.hand, ItemTag.heavy],
            attacks: [{ harm: 2 }],
            tagInputs: [{
              label: `Business-end Material`,
              choose: 1,
              options: [
                ItemTag.steel, ItemTag.coldIron, ItemTag.silver, ItemTag.wood, ItemTag.stone, ItemTag.bone,
                ItemTag.obsidian
              ],
            }]
          },
          {
            name: `Handle`,
            id: `85c3a5fe-c2a3-4ac8-8db5-22ab6d8cdb80`,
            featType: FeatType.Weapon,
            tags: [ItemTag.hand, ItemTag.balanced],
            attacks: [{ harm: 1 }],
            tagInputs: [{
              label: `Business-end Material`,
              choose: 1,
              options: [
                ItemTag.steel, ItemTag.coldIron, ItemTag.silver, ItemTag.wood, ItemTag.stone, ItemTag.bone,
                ItemTag.obsidian
              ],
            }]
          },
          {
            name: `Chain`,
            id: `cb4bb1d1-22ee-47b1-aa13-08745d005afc`,
            featType: FeatType.Weapon,
            tags: [ItemTag.hand, ItemTag.area],
            attacks: [{ harm: 1 }],
            tagInputs: [{
              label: `Business-end Material`,
              choose: 1,
              options: [
                ItemTag.steel, ItemTag.coldIron, ItemTag.silver, ItemTag.wood, ItemTag.stone, ItemTag.bone,
                ItemTag.obsidian
              ],
            }]
          },
        ]
      },
      {
        label: `Special Weapon Business-end`, key: `366657fe-acb6-4667-abca-6923469522d7`,
        inputType: InputTypes.FeatChoice,
        choose: 3,
        options: [
          {
            name: `Artifact`,
            id: `8de00cbe-834f-4cf1-b4a0-475be9b00511`,
            featType: FeatType.SubFeat,

            modAttack: [{
              name: `Artifact`,
              addTags: [ItemTag.magic],
              applyToItem: [`9d2855cd-bdf6-4655-b7b7-76b7677a9982`] // Special Weapon
            }]
          },
          {
            name: `Spikes`,
            id: `c506f905-69f4-4b47-9c22-afcb1ea96209`,
            featType: FeatType.SubFeat,

            modAttack: [{
              name: `Spikes`,
              harmOffset: 1,
              addTags: [ItemTag.messy],
              applyToItem: [`9d2855cd-bdf6-4655-b7b7-76b7677a9982`] // Special Weapon
            }]
          },
          {
            name: `Blade`,
            id: `b3c7110d-0fe2-4402-b737-4b6f33f7826c`,
            featType: FeatType.SubFeat,

            modAttack: [{
              name: `Blade`,
              harmOffset: 1,
              applyToItem: [`9d2855cd-bdf6-4655-b7b7-76b7677a9982`] // Special Weapon
            }]
          },
          {
            name: `Heavy`,
            id: `30e76cc0-26fd-40ef-aa77-47a71a209f6a`,
            featType: FeatType.SubFeat,

            modAttack: [{
              name: `Heavy`,
              harmOffset: 1,
              addTags: [ItemTag.heavy],
              applyToItem: [`9d2855cd-bdf6-4655-b7b7-76b7677a9982`] // Special Weapon
            }]
          },
          {
            name: `Long`,
            id: `56364a15-486c-44bd-83ae-6f0602a6b3bc`,
            featType: FeatType.SubFeat,

            modAttack: [{
              name: `Long`,
              addTags: [ItemTag.close],
              applyToItem: [`9d2855cd-bdf6-4655-b7b7-76b7677a9982`] // Special Weapon
            }]
          },
          {
            name: `Throwable`,
            id: `31824048-49c8-4b4f-b415-0d4732513242`,
            featType: FeatType.SubFeat,

            modAttack: [{
              name: `Throwable`,
              addTags: [ItemTag.close],
              applyToItem: [`9d2855cd-bdf6-4655-b7b7-76b7677a9982`] // Special Weapon
            }]
          },
          {
            name: `Chain`,
            id: `d3586c8f-c000-431d-8582-455b63292ba3`,
            featType: FeatType.SubFeat,

            modAttack: [{
              name: `Chain`,
              addTags: [ItemTag.area],
              applyToItem: [`9d2855cd-bdf6-4655-b7b7-76b7677a9982`] // Special Weapon
            }]
          },
        ]
      }
    ],
  },
  Crooked: {
    name: `Gear`,
    id: `5fa16edd-c71d-44d5-b5cb-7660aa10c292`,
    playbooks: [`bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae`], // The Crooked
    featType: FeatType.Gear,

    description: `Starting Crooked Gear`,

    inputs: [{
      label: `Weapons`, key: `a4621fb4-0142-457a-a5ca-f66f76167bd8`,
      inputType: InputTypes.FeatChoiceById,
      choose: 3,
      options: [
        Gear.Revolver22.id,
        Gear.Revolver38.id,
        Gear.Handgun.id,
        Gear.Shotgun.id,
        Gear.HuntingRifle.id,
        Gear.BigKnife.id,
        Gear.BaseballBat.id,
        Gear.SubmachineGun.id,
        Gear.CrookedAR.id,
      ]
    }]
  },
  Divine: {
    name: `Gear`,
    id: `70f95c2f-9b6a-4a28-9d74-11d647f14944`,
    playbooks: [`9e9f712c-54d9-4193-b7ad-48c64f7ec9dc`], // The Divine
    featType: FeatType.Gear,

    description: `You own **Divine Armor** and a **Divine Weapon**.`,

    tags: [ ItemTag.holy ],
    armors: [{ armor: 1 }],

    inputs: [{
      label: `Divine Weapon`, key: `7b2ba0a4-767e-4b3e-bad7-2c08928eb782`,
      inputType: InputTypes.FeatChoiceById,
      choose: 1,
      options: [
        Gear.FlamingSword.id,
        Gear.ThunderHammer.id,
        Gear.RazorWhip.id,
        Gear.FiveDemonBag.id,
        Gear.SilverTrident.id,
      ]
    }],
  },
  Expert: {
    name: `Gear`,
    id: `b755dd6c-4a1f-466f-8b04-a9a61a69ddd4`,
    playbooks: [`689d32a6-faa1-4258-9fda-894b9bdf8571`], // The Expert
    featType: FeatType.Gear,

    description: `Starting Expert Gear`,

    inputs: [{
      label: `Monster Slaying Weapons`, key: `45c8bc04-13de-459c-865f-8edfc0552896`,
      inputType: InputTypes.FeatChoiceById,
      choose: 3,
      options: [
        Gear.WoodenStakesAndMallet.id,
        Gear.SilverSword.id,
        Gear.ColdIronSword.id,
        Gear.BlessedKnife.id,
        Gear.MagicDagger.id,
        Gear.JujuBag.id,
        Gear.Flamethrower.id,
        Gear.Magnum.id,
        Gear.ShotgunLoud.id,
      ]
    }]
  },
  Flake: {
    name: `Gear`,
    id: `97eae3fe-b56d-41db-9580-88ca63ff19e7`,
    playbooks: ["3ef37c00-3254-4af4-830a-9a21e7c6d02a"], // The Flake
    featType: FeatType.Gear,

    description: `Starting Flake Gear`,

    inputs: [
      {
        label: `Normal Weapons`, key: `c66ccb51-ced4-4b21-b4b2-d581b8ca7ad0`,
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [
          Gear.Revolver38.id,
          Gear.Handgun.id,
          Gear.HuntingRifle.id,
          Gear.Magnum.id,
          Gear.ShotgunLoud.id,
          Gear.BigKnife.id,
        ]
      },
      {
        label: `Hidden Weapons`, key: `7897ef7e-f2d3-4108-a5e0-d24772d385e8`,
        inputType: InputTypes.FeatChoiceById,
        choose: 2,
        options: [
          Gear.ThrowingKnives.id,
          Gear.HoldoutPistol.id,
          Gear.Garrote.id,
          Gear.BigFlashlight.id,
          Gear.SapGloves.id,
          Gear.BrassKnuckles.id,
          Gear.ButterflyKnife.id,
          Gear.Switchblade.id,
          Gear.Knife.id,
        ]
      }
    ]
  },
  Gumshoe: {
    name: `Gear`,
    id: `e60b335d-f3ef-44fb-839b-6fa2014b86af`,
    playbooks: [`12bc1318-24c7-4402-b9bb-be0698c4ed99`], // The Gumshoe
    featType: FeatType.Gear,

    description: `Starting Gumshoe Gear`,

    subFeatsById: [
      Gear.Laptop.id,
      Gear.LiquorFlask.id,
    ],

    inputs: [
      {
        label: `Recording Devices`, key: `89a63abd-47ae-474e-b6ba-26e265bbf8c6`,
        inputType: InputTypes.FeatChoiceById,
        choose: 2,
        options: [
          Gear.NightVisionCamera.id,
          Gear.TinyDigitalVideoCamera.id,
          Gear.FilmCamera.id,
          Gear.DigitalRecorder.id,
          Gear.TapeRecorder.id,
          Gear.RemoteControlCameraDrone.id,
          Gear.LaserMicrophone.id,
          Gear.SLRCamera.id,
        ]
      },
      {
        label: `P.I. Weapons`, key: `114b9779-9150-4388-8bf0-c50e6dca29e5`,
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [
          Gear.BrassKnuckles.id,
          Gear.Revolver38.id,
          Gear.Handgun.id,
          Gear.Magnum.id,
          Gear.ShotgunLoud.id,
          Gear.Switchblade.id,
          Gear.Knife.id,
        ]
      }
    ],
  },
  Hex: {
    name: `Gear`,
    id: `6d36b37a-cbcc-4468-9a4e-5d4182891d15`,
    playbooks: ["23bdadbc-b690-4baa-8d96-7c791b4d66da"], // The Hex
    featType: FeatType.Gear,

    description: `Starting Hex Gear`,

    inputs: [
      {
        label: `Wizardly Weapons`, key: `fdff934e-8251-49a8-9175-b128e3da0ec7`,
        inputType: InputTypes.FeatChoiceById,
        choose: 2,
        options: [
          Gear.Revolver38.id,
          Gear.ShotgunLoud.id,
          Gear.Athame.id,
          Gear.Shillelagh.id,
          Gear.Crossbow.id,
          Gear.Staff.id,
        ]
      },
      {
        label: `Magic Materials`, key: `3b3ef7e2-d696-4ff3-99b4-b04525e11e07`,
        subLabel: `You own the foci, consumables, etc. needed to invoke your Rotes.`,
        inputType: InputTypes.FeatChoiceById,
        choose: 0,
        chooseMax: 0,
        allowCustom: true,
        options: [
          Gear.HexAmulet.id,
          Gear.HexWand.id,
          Gear.HexStaff.id,
          Gear.HexChalk.id,
          Gear.HexCharcoal.id,
          Gear.HexApothecaryBag.id,
        ]
      },
    ],
  },
  Initiate: {
    name: `Gear`,
    id: `18925ae2-350e-463d-b942-27d28ef7dab6`,
    playbooks: [`a78c7ee1-eb8d-4622-adeb-22d9d87169b5`], // The Initiate
    featType: FeatType.Gear,

    description: `Starting Initiate Gear`,

    subFeatsById: [ Gear.OldFashionedArmor.id ],
    
    inputs: [
      {
        label: `Old-fashioned Weapons`, key: `e7bf9a56-4b57-47a6-a551-b6d97ac83550`, // Another pick added for Sect tags `Fighting Arts` or `Obsolete Gear` 
        inputType: InputTypes.FeatChoiceById,
        choose: 2,
        options: [
          Gear.Sword.id,
          Gear.Axe.id,
          Gear.BigSword.id,
          Gear.BigAxe.id,
          Gear.SilverKnife.id,
          Gear.FightingSticks.id,
          Gear.Spear.id,
          Gear.Mace.id,
          Gear.Crossbow.id,
        ]
      },
      {
        label: `Modern Weapons`, key: `d3ff72fb-23b1-45fe-8386-2bd63e97764f`, // Another pick added for Sect tags `modernized` or `nifty gadgets`
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [
          Gear.Revolver38.id,
          Gear.Handgun.id,
          Gear.SniperRifle.id,
          Gear.Magnum.id,
          Gear.Shotgun.id,
        ]
      }
    ],
  },
  Monstrous: {
    name: `Gear`,
    id: `f8a61f37-cb13-4228-ab20-6647e5589507`,
    playbooks: [`a5f796af-dd20-4ee0-8920-18b80e20ec24`], // The Monstrous
    featType: FeatType.Gear,

    description: `Starting Monstrous Gear`,

    inputs: [
      {
        label: `Handy Weapon`, key: `ea4ea728-a84d-4312-a6f1-e1914970c476`,
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [
          Gear.Revolver38.id,
          Gear.Handgun.id,
          Gear.Magnum.id,
          Gear.Shotgun.id,
          Gear.BigKnife.id,
          Gear.BrassKnuckles.id,
          Gear.SapGloves.id,
          Gear.Sword.id,
          Gear.BigSword.id,
        ]
      }
    ],
  },
  Mundane: {
    name: `Gear`,
    id: `c8b4a894-620a-4ebc-bc08-359081857f40`,
    playbooks: [`b03c7fb1-9ce4-4cba-a527-6c1380ac5de0`], // The Mundane
    featType: FeatType.Gear,

    description: `Starting Mundane Gear`,

    inputs: [
      {
        label: `Mundane Weapons`, key: `997ef0d8-be4d-42a8-aef7-7a656a78f2c5`,
        inputType: InputTypes.FeatChoiceById,
        choose: 2,
        options: [
          Gear.BaseballBat.id, Gear.CricketBat.id, Gear.GolfClub.id, Gear.HockeyStick.id,
          Gear.Pocketknife.id, Gear.MultiTool.id,
          Gear.Knife.id,
          Gear.SmallHandgun.id,
          Gear.MundaneHuntingRifle.id,
          Gear.Sledgehammer.id,
          Gear.FireAxe.id,
          Gear.Nunchuks.id,
        ]
      },
      {
        label: `Transportation`, key: `01cfcb92-6b20-4004-a337-f97dc84872ad`,
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [
          Gear.Skateboard.id,
          Gear.Bicycle.id,
          Gear.Car.id,
          Gear.Motorcycle.id,
          Gear.Van.id,
        ]
      }
    ],
  },
  Professional: {
    name: `Gear`,
    id: `77a7a4df-d4cc-4f40-9e92-e401558e0f0a`,
    playbooks: [`58924c0d-c015-4fcd-8fd9-ca75f12fd019`], // The Professional
    featType: FeatType.Gear,

    description: `Starting Professional Gear`,

    inputs: [
      {
        label: `Armor`, key: `69e61710-636d-44af-887b-7ddf73956068`,
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [
          Gear.FlakVest.id,
          Gear.CombatArmor.id,
        ]
      },
      {
        label: `Serious Weapon`, key: `19ac2bb0-7dc0-48c4-b744-eb63325471ad`,
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [
          Gear.ProfessionalAr.id,
          Gear.GrenadeLauncher.id,
          Gear.SniperRifleHC.id,
          Gear.Grenades.id,
          Gear.ProfessionalSmg.id,
        ]
      },
      {
        label: `Normal Weapons`, key: `e39a7455-8231-4729-9b41-c4e464c4ff4b`,
        inputType: InputTypes.FeatChoiceById,
        choose: 2,
        options: [
          Gear.Revolver38.id,
          Gear.Handgun.id,
          Gear.HuntingRifle.id,
          Gear.Shotgun.id,
          Gear.BigKnife.id,
        ]
      }
    ]
  },
  Searcher: {
    name: `Gear`,
    id: `6c0a242e-2d35-433b-b3cc-d218ec462c84`,
    playbooks: [`f7b73a9a-6447-42f8-b373-b71341bdad99`], // The Searcher
    featType: FeatType.Gear,

    description: `Starting Searcher Gear`,

    subFeatsById: [Gear.Laptop.id, Gear.LiquorFlask.id, Gear.Camera.id, Gear.Binoculars.id],

    inputs: [
      {
        label: `Transportation`, key: `ab65be8d-1bc3-42d3-8461-4961c6acb34e`,
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [Gear.Car.id, Gear.Motorcycle.id]
      },
      {
        label: `Investigation Tools`, key: `b12b175d-6944-4ecb-8d24-520b0589ab1a`,
        inputType: InputTypes.FeatChoiceById,
        choose: 2,
        options: [
          Gear.DocumentingGear.id,
          Gear.ForensicTools.id,
          Gear.GhostHuntingTools.id,
          Gear.ScientificMeasuringTools.id,
          Gear.CryptidHuntingGear.id,
          Gear.StrangeCaseFiles.id,
          Gear.Maps.id,
        ]
      },
      {
        label: `Self-defense Weapons`, key: `121a3abc-263a-4e24-87fb-642a5eb9559e`,
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [
          Gear.WalkingStick.id,
          Gear.SmallHandgun.id,
          Gear.BigKnife.id,
          Gear.MartialArtsTraining.id,
          Gear.IncapacitatingSpray.id,
          Gear.BigFlashlight.id,
        ]
      },
    ],
  },
  Snoop: {
    name: `Gear`,
    id: `f7573bf7-5192-443a-9c3c-28798dce7e66`,
    playbooks: [`cfecc496-d1c1-4b30-af48-0f3f41cd02c0`], // The Snoop
    featType: FeatType.Gear,

    description: `Starting Snoop Gear`,

    subFeatsById: [
      Gear.Laptop.id,
    ],

    inputs: [
      {
        label: `Recording Devices`, key: `aa7e9b23-b5d1-451a-b9b1-fa8039c4b13a`,
        inputType: InputTypes.FeatChoiceById,
        choose: 3,
        allowCustom: true,
        options: [
          Gear.VideoCamera.id,
          Gear.TinyDigitalCamera.id,
          Gear.FilmCamera.id,
          Gear.DigitalRecorder.id,
          Gear.TapeRecorder.id,
          Gear.InfraredCamera.id,
          Gear.ProSoundGear.id,
          Gear.CameraDrone.id,
          Gear.StarlightCamera.id,
          Gear.SteadicamRig.id,
          Gear.LaserMicrophone.id,
          Gear.SLRCamera.id,
          Gear.NiceSmartphone.id,
        ],
      },
      {
        label: `Detectors`, key: `d07b215a-a52b-41d1-9087-4bfa57bf38b6`,
        inputType: InputTypes.FeatChoiceById,
        choose: 2,
        allowCustom: true,
        options: [
          Gear.ElectromagneticFieldDetector.id,
          Gear.TemperatureFluctuationDetector.id,
          Gear.OuijaBoard.id,
          Gear.HumidityMeter.id,
          Gear.DowsingRods.id,
          Gear.ChemistryTestKit.id,
          Gear.MetalDetector.id,
          Gear.Compass.id,
          Gear.GPSReceiver.id,
          Gear.LaserRangefinder.id,
          Gear.Pendulum.id,
          Gear.TarotDeck.id,
          Gear.Magic8Ball.id,
        ],
      },
      {
        label: `Subtle Weapons`, key: `c4cc88f6-7e11-4a10-ac98-5c77225666ec`,
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [
          Gear.Pocketknife.id, Gear.MultiTool.id,
          Gear.StunGun.id,
          Gear.BaseballBat.id, Gear.CricketBat.id, Gear.GolfClub.id, Gear.HockeyStick.id,
          Gear.Handgun.id,
          Gear.Knife.id,
        ]
      },
    ],
  },
  SpellSlinger: {
    name: `Gear`,
    id: `3c30b246-6d27-4d32-8919-6f2bcc566ad2`,
    playbooks: [`3f493473-f122-4255-8b19-3635908b2664`], // The Spell-Slinger
    featType: FeatType.Gear,

    description: `Starting Spell-Slinger Gear`,
    longDescription: `You don't need much, but it's still good to carry some backup.`,

    inputs: [
      {
        label: `Weapon`, key: `47b6cec8-2dbb-4f30-b205-620e99094e2b`,
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [
          Gear.RevolverOld.id,
          Gear.RitualKnife.id,
          Gear.HeirloomSword.id,
        ]
      },
      {
        label: `Magic Materials`, key: `1b25fd35-4e33-47d9-8af2-304fa184bd40`,
        subLabel: `You may own the foci or consumables needed to invoke your Combat Magic. (Check your Tools and Techniques.)`,
        inputType: InputTypes.FeatChoiceById,
        choose: 0,
        chooseMax: 0,
        allowCustom: true,
        options: [
          Gear.HexAmulet.id,
          Gear.HexWand.id,
          Gear.HexStaff.id,
          Gear.HexChalk.id,
          Gear.HexCharcoal.id,
          Gear.HexApothecaryBag.id,
        ]
      },
    ],
  },
  Spooktacular: {
    name: `Gear`,
    id: `5b05d02f-8f34-405f-84f5-e14261cbd48b`,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    featType: FeatType.Gear,

    description: `Starting Spooktacular Gear`,
    
    subFeatsById: [
      Gear.TicketsToAShow.id,
      Gear.SnackVouchers.id,
      Gear.DecksOfCards.id,
      Gear.PairsOfDice.id,
      Gear.MagicTrickProps.id,
      Gear.CampingGear.id,
      Gear.Makeup.id,
      Gear.CostumeAccessories.id,
    ],
    
    inputs: [
      {
        label: `Camp Tool`, key: `6df03300-ba98-4fea-9b90-01b781e4882b`,
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [
          Gear.Pocketknife.id, Gear.MultiTool.id,
          Gear.Mallet.id,
          Gear.Crowbar.id,
          Gear.BaseballBat.id, Gear.CricketBat.id, Gear.GolfClub.id, Gear.HockeyStick.id,
          Gear.Hatchet.id,
          Gear.SockOfCoins.id,
        ]
      },
      {
        label: `Transportation`, key: `0e20804a-454a-44b3-a486-50836e8562ba`,
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [
          Gear.PickupTruck.id,
          Gear.BoxTruck.id,
          Gear.Van.id,
          Gear.MotorcycleWithSidecar.id,
        ]
      },
      {
        label: `Mystical Item`, key: `2d8fde6c-7527-4e53-ab50-8cc13e2a9950`,
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [
          Gear.GhostShades.id,
          Gear.BigPlushDog.id,
          Gear.Returning100.id,
          Gear.Scamulet.id,
          Gear.WizardTent.id,
        ]
      }
    ]
  },
  Spooky: {
    name: `Gear`,
    id: `1e7a1da4-0e3b-4170-977b-367446ee2943`,
    playbooks: [`1dccf639-8ee6-457e-a2b4-ea2ae9a0bd1a`], // The Spooky
    featType: FeatType.Gear,

    description: `Starting Spooky Gear`,

    inputs: [
      {
        label: `Normal Weapons`, key: `a0a73ea1-b47e-4a31-8688-795f84575e4e`,
        inputType: InputTypes.FeatChoiceById,
        choose: 2,
        options: [
          Gear.Revolver38.id,
          Gear.Handgun.id,
          Gear.HuntingRifle.id,
          Gear.Shotgun.id,
          Gear.BigKnife.id,
        ]
      },
      {
        label: `Power Item`, key: `8c93dd6f-6558-47ca-af0e-fdc6e11416d9`,
        subLabel: `Optional. You can own a magic item or foci that is needed to invoke your powers.`,
        inputType: InputTypes.FeatChoice,
        choose: 0,
        chooseMax: 0,
        allowCustom: true,
        options: [
          {
            name: `Amulet`,
            id: `7d80e4bb-1a8b-4651-8e08-4b832cc12b6a`,
            featType: FeatType.Equipment,
            tags: [ItemTag.magic]
          },
          {
            name: `Wand`,
            id: `3ed85ad9-1bb8-436c-85d5-8fa3288f4bc7`,
            featType: FeatType.Equipment,
            tags: [ItemTag.magic]
          },
          {
            name: `Brain Chip`,
            id: `9f8f16a7-a904-40dc-9841-e0dd72ceb812`,
            featType: FeatType.Equipment
          },
        ]
      },
    ],
  },
  Wronged: {
    name: `Gear`,
    id: `53939d63-c4e4-483a-b4cd-09f54e0d1c90`,
    playbooks: [`36e0df53-1690-46cf-a59e-56ef397d108d`], // The Wronged
    featType: FeatType.Gear,

    description: `Starting Wronged Gear`,
    
    subFeatsById: [Gear.ProtectiveGear.id],

    inputs: [
      {
        label: `Signature Weapon`, key: `e1056082-e2bb-4ad1-87a5-af7d42e0942c`,
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [
          Gear.SawedOffShotgun.id,
          Gear.HandCannon.id,
          Gear.CombatKnife.id,
          Gear.HugeSword.id,
          Gear.HugeAxe.id,
          Gear.SlayingWeapon.id,
          Gear.EnchantedDagger.id,
          Gear.Chainsaw.id,
        ]
      },
      {
        label: `Practical Weapons`, key: `81202fda-51cc-4fbc-b093-3267c2ddd85f`,
        inputType: InputTypes.FeatChoiceById,
        choose: 2,
        options: [
          Gear.Revolver38.id,
          Gear.Handgun.id,
          Gear.HuntingRifle.id,
          Gear.ShotgunLoud.id,
          Gear.BigKnife.id,
          Gear.BrassKnuckles.id, Gear.SapGloves.id,
          Gear.WrongedAR.id,
        ]
      },
      {
        label: `Transportation`, key: `f3d91808-3da1-4946-8aee-c4355bcfa8e0`,
        subLabel: `Optional. You may take a vehicle. If you take a car or motorcycle, you can add an extra \`#classic\` tag.`,
        inputType: InputTypes.FeatChoiceById,
        choose: 0,
        chooseMax: 1,
        options: [
          Gear.Car.id, // TODO: Was Classic
          Gear.Motorcycle.id, // TODO: Was Classic
          Gear.PickupTruck.id,
          Gear.Van.id,
        ]
      }
    ]
  },
} as const;

export let StartingGearLookup = Object.fromEntries(Object.values(StartingGear).map(f=> [f.id,f]))