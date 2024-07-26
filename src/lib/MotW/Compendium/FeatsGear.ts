import {type Feat, FeatType} from "./CompendiumTypes";
import {ItemTag} from "./Tags";
import {InputTypes} from "./UserInputTypes";
import {itemLookup} from "./Gear";

export let StartingFeats: Array<Feat> = [
  {
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
  {
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

    subFeatsById: [itemLookup.ProtectiveGear.id],

    inputs: [
      {
        label: `Special Weapon Base`,
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
        label: `Special Weapon Business-end`,
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
  {
    name: `Gear`,
    id: `5fa16edd-c71d-44d5-b5cb-7660aa10c292`,
    playbooks: [`bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae`], // The Crooked
    featType: FeatType.Gear,

    description: `Starting Crooked Gear`,

    inputs: [{
      label: `Weapons`,
      inputType: InputTypes.FeatChoiceById,
      choose: 3,
      options: [
        itemLookup.Revolver22.id,
        itemLookup.Revolver38.id,
        itemLookup.Handgun.id,
        itemLookup.Shotgun.id,
        itemLookup.HuntingRifle.id,
        itemLookup.BigKnife.id,
        itemLookup.BaseballBat.id,
        itemLookup.SubmachineGun.id,
        itemLookup.CrookedAR.id,
      ]
    }]
  },
  {
    name: `Gear`,
    id: `70f95c2f-9b6a-4a28-9d74-11d647f14944`,
    playbooks: [`9e9f712c-54d9-4193-b7ad-48c64f7ec9dc`], // The Divine
    featType: FeatType.Gear,

    description: `You own **Divine Armor** and a **Divine Weapon**.`,

    tags: [ ItemTag.holy ],
    armors: [{ armor: 1 }],

    inputs: [{
      label: `Divine Weapon`,
      inputType: InputTypes.FeatChoiceById,
      choose: 1,
      options: [
        itemLookup.FlamingSword.id,
        itemLookup.ThunderHammer.id,
        itemLookup.RazorWhip.id,
        itemLookup.FiveDemonBag.id,
        itemLookup.SilverTrident.id,
      ]
    }],
  },
  {
    name: `Gear`,
    id: `b755dd6c-4a1f-466f-8b04-a9a61a69ddd4`,
    playbooks: [`689d32a6-faa1-4258-9fda-894b9bdf8571`], // The Expert
    featType: FeatType.Gear,

    description: `Starting Expert Gear`,

    inputs: [{
      label: `Monster Slaying Weapons`,
      inputType: InputTypes.FeatChoiceById,
      choose: 3,
      options: [
        itemLookup.WoodenStakesAndMallet.id,
        itemLookup.SilverSword.id,
        itemLookup.ColdIronSword.id,
        itemLookup.BlessedKnife.id,
        itemLookup.MagicDagger.id,
        itemLookup.JujuBag.id,
        itemLookup.Flamethrower.id,
        itemLookup.Magnum.id,
        itemLookup.ShotgunLoud.id,
      ]
    }]
  },
  {
    name: `Gear`,
    id: `97eae3fe-b56d-41db-9580-88ca63ff19e7`,
    playbooks: ["3ef37c00-3254-4af4-830a-9a21e7c6d02a"], // The Flake
    featType: FeatType.Gear,

    description: `Starting Flake Gear`,

    inputs: [
      {
        label: `Normal Weapons`,
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [
          itemLookup.Revolver38.id,
          itemLookup.Handgun.id,
          itemLookup.HuntingRifle.id,
          itemLookup.Magnum.id,
          itemLookup.ShotgunLoud.id,
          itemLookup.BigKnife.id,
        ]
      },
      {
        label: `Hidden Weapons`,
        inputType: InputTypes.FeatChoiceById,
        choose: 2,
        options: [
          itemLookup.ThrowingKnives.id,
          itemLookup.HoldoutPistol.id,
          itemLookup.Garrote.id,
          itemLookup.BigFlashlight.id,
          itemLookup.SapGloves.id,
          itemLookup.BrassKnuckles.id,
          itemLookup.ButterflyKnife.id,
          itemLookup.Switchblade.id,
          itemLookup.Knife.id,
        ]
      }
    ]
  },
  {
    name: `Gear`,
    id: `e60b335d-f3ef-44fb-839b-6fa2014b86af`,
    playbooks: [`12bc1318-24c7-4402-b9bb-be0698c4ed99`], // The Gumshoe
    featType: FeatType.Gear,

    description: `Starting Gumshoe Gear`,

    subFeatsById: [
      itemLookup.Laptop.id,
      itemLookup.LiquorFlask.id,
    ],

    inputs: [
      {
        label: `Recording Devices`,
        inputType: InputTypes.FeatChoiceById,
        choose: 2,
        options: [
          itemLookup.NightVisionCamera.id,
          itemLookup.TinyDigitalVideoCamera.id,
          itemLookup.FilmCamera.id,
          itemLookup.DigitalRecorder.id,
          itemLookup.TapeRecorder.id,
          itemLookup.RemoteControlledCameraDrone.id,
          itemLookup.LaserMicrophone.id,
          itemLookup.SLRCamera.id,
        ]
      },
      {
        label: `P.I. Weapons`,
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [
          itemLookup.BrassKnuckles.id,
          itemLookup.Revolver38.id,
          itemLookup.Handgun.id,
          itemLookup.Magnum.id,
          itemLookup.ShotgunLoud.id,
          itemLookup.Switchblade.id,
          itemLookup.Knife.id,
        ]
      }
    ],
  },
  {
    name: `Gear`,
    id: `6d36b37a-cbcc-4468-9a4e-5d4182891d15`,
    playbooks: ["23bdadbc-b690-4baa-8d96-7c791b4d66da"], // The Hex
    featType: FeatType.Gear,

    description: `Starting Hex Gear`,

    inputs: [
      {
        label: `Wizardly Weapons`,
        inputType: InputTypes.FeatChoiceById,
        choose: 2,
        options: [
          itemLookup.Revolver38.id,
          itemLookup.ShotgunLoud.id,
          itemLookup.Athame.id,
          itemLookup.Shillelagh.id,
          itemLookup.Crossbow.id,
          itemLookup.Staff.id,
        ]
      },
      {
        label: `Magic Materials`,
        subLabel: `You own the foci, consumables, etc. needed to invoke your Rotes.`,
        inputType: InputTypes.FeatChoiceById,
        choose: 0,
        chooseMax: 0,
        allowCustom: true,
        options: [
          itemLookup.HexAmulet.id,
          itemLookup.HexWand.id,
          itemLookup.HexStaff.id,
          itemLookup.HexChalk.id,
          itemLookup.HexCharcoal.id,
          itemLookup.HexApothecaryBag.id,
        ]
      },
    ],
  },
  {
    name: `Gear`,
    id: `18925ae2-350e-463d-b942-27d28ef7dab6`,
    playbooks: [`a78c7ee1-eb8d-4622-adeb-22d9d87169b5`], // The Initiate
    featType: FeatType.Gear,

    description: `Starting Initiate Gear`,

    subFeatsById: [ itemLookup.OldFashionedArmor.id ],
    
    inputs: [
      {
        label: `Old-fashioned Weapons`,
        key: `e7bf9a56-4b57-47a6-a551-b6d97ac83550`, // Another pick added for Sect tags `Fighting Arts` or `Obsolete Gear` 
        inputType: InputTypes.FeatChoiceById,
        choose: 2,
        options: [
          itemLookup.Sword.id,
          itemLookup.Axe.id,
          itemLookup.BigSword.id,
          itemLookup.BigAxe.id,
          itemLookup.SilverKnife.id,
          itemLookup.EscrimaSticks.id,
          itemLookup.Spear.id,
          itemLookup.Mace.id,
          itemLookup.Crossbow.id,
        ]
      },
      {
        label: `Modern Weapons`,
        key: `d3ff72fb-23b1-45fe-8386-2bd63e97764f`, // Another pick added for Sect tags `modernized` or `nifty gadgets`
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [
          itemLookup.Revolver38.id,
          itemLookup.Handgun.id,
          itemLookup.SniperRifle.id,
          itemLookup.Magnum.id,
          itemLookup.Shotgun.id,
        ]
      }
    ],
  },
  {
    name: `Gear`,
    id: `f8a61f37-cb13-4228-ab20-6647e5589507`,
    playbooks: [`a5f796af-dd20-4ee0-8920-18b80e20ec24`], // The Monstrous
    featType: FeatType.Gear,

    description: `Starting Monstrous Gear`,

    inputs: [
      {
        label: `Handy Weapon`,
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [
          itemLookup.Revolver38.id,
          itemLookup.Handgun.id,
          itemLookup.Magnum.id,
          itemLookup.Shotgun.id,
          itemLookup.BigKnife.id,
          itemLookup.BrassKnuckles.id,
          itemLookup.SapGloves.id,
          itemLookup.Sword.id,
          itemLookup.BigSword.id,
        ]
      }
    ],
  },
  {
    name: `Gear`,
    id: `c8b4a894-620a-4ebc-bc08-359081857f40`,
    playbooks: [`b03c7fb1-9ce4-4cba-a527-6c1380ac5de0`], // The Mundane
    featType: FeatType.Gear,

    description: `Starting Mundane Gear`,

    inputs: [
      {
        label: `Mundane Weapons`,
        inputType: InputTypes.FeatChoiceById,
        choose: 2,
        options: [
          itemLookup.BaseballBat.id, itemLookup.CricketBat.id, itemLookup.GolfClub.id, itemLookup.HockeyStick.id,
          itemLookup.Pocketknife.id, itemLookup.MultiTool.id,
          itemLookup.Knife.id,
          itemLookup.SmallHandgun.id,
          itemLookup.MundaneHuntingRifle.id,
          itemLookup.Sledgehammer.id,
          itemLookup.FireAxe.id,
          itemLookup.Nunchucks.id,
        ]
      },
      {
        label: `Transportation`,
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [
          itemLookup.Skateboard.id,
          itemLookup.Bicycle.id,
          itemLookup.Car.id,
          itemLookup.Motorcycle.id,
          itemLookup.Van.id,
        ]
      }
    ],
  },
  {
    name: `Gear`,
    id: `77a7a4df-d4cc-4f40-9e92-e401558e0f0a`,
    playbooks: [`58924c0d-c015-4fcd-8fd9-ca75f12fd019`], // The Professional
    featType: FeatType.Gear,

    description: `Starting Professional Gear`,

    inputs: [
      {
        label: `Armor`,
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [
          itemLookup.FlakVest.id,
          itemLookup.CombatArmor.id,
        ]
      },
      {
        label: `Serious Weapon`,
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [
          itemLookup.ProfessionalAR.id,
          itemLookup.GrenadeLauncher.id,
          itemLookup.SniperRifleHC.id,
          itemLookup.Grenades.id,
          itemLookup.SubmachineGunHC.id,
        ]
      },
      {
        label: `Normal Weapons`,
        inputType: InputTypes.FeatChoiceById,
        choose: 2,
        options: [
          itemLookup.Revolver38.id,
          itemLookup.Handgun.id,
          itemLookup.Rifle.id,
          itemLookup.Shotgun.id,
          itemLookup.BigKnife.id,
        ]
      }
    ]
  },
  {
    name: `Gear`,
    id: `6c0a242e-2d35-433b-b3cc-d218ec462c84`,
    playbooks: [`f7b73a9a-6447-42f8-b373-b71341bdad99`], // The Searcher
    featType: FeatType.Gear,

    description: `Starting Searcher Gear`,

    subFeatsById: [itemLookup.Laptop.id, itemLookup.LiquorFlask.id, itemLookup.Camera.id, itemLookup.Binoculars.id],

    inputs: [
      {
        label: `Transportation`,
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [itemLookup.Car.id, itemLookup.Motorcycle.id]
      },
      {
        label: `Investigation Tools`,
        inputType: InputTypes.FeatChoiceById,
        choose: 2,
        options: [
          itemLookup.DocumentingGear.id,
          itemLookup.ForensicTools.id,
          itemLookup.GhostHuntingTools.id,
          itemLookup.ScientificMeasuringTools.id,
          itemLookup.CryptidHuntingGear.id,
          itemLookup.StrangeCaseFiles.id,
          itemLookup.Maps.id,
        ]
      },
      {
        label: `Self-defense Weapons`,
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [
          itemLookup.WalkingStick.id,
          itemLookup.SmallHandgun.id,
          itemLookup.BigKnife.id,
          itemLookup.MartialArtsTraining.id,
          itemLookup.IncapacitatingSpray.id,
          itemLookup.BigFlashlight.id,
        ]
      },
    ],
  },
  {
    name: `Gear`,
    id: `f7573bf7-5192-443a-9c3c-28798dce7e66`,
    playbooks: [`cfecc496-d1c1-4b30-af48-0f3f41cd02c0`], // The Snoop
    featType: FeatType.Gear,

    description: `Starting Snoop Gear`,

    subFeatsById: [
      itemLookup.Laptop.id,
    ],

    inputs: [
      {
        label: `Recording Devices`,
        inputType: InputTypes.FeatChoiceById,
        choose: 3,
        allowCustom: true,
        options: [
          itemLookup.VideoCamera.id,
          itemLookup.TinyDigitalCamera.id,
          itemLookup.FilmCamera.id,
          itemLookup.DigitalRecorder.id,
          itemLookup.TapeRecorder.id,
          itemLookup.InfraredCamera.id,
          itemLookup.ProSoundGear.id,
          itemLookup.CameraDrone.id,
          itemLookup.StarlightCamera.id,
          itemLookup.SteadicamRig.id,
          itemLookup.LaserMicrophone.id,
          itemLookup.SLRCamera.id,
          itemLookup.NiceSmartphone.id,
        ],
      },
      {
        label: `Detectors`,
        inputType: InputTypes.FeatChoiceById,
        choose: 2,
        allowCustom: true,
        options: [
          itemLookup.ElectromagneticFieldDetector.id,
          itemLookup.TemperatureFluctuationDetector.id,
          itemLookup.OuijaBoard.id,
          itemLookup.HumidityMeter.id,
          itemLookup.DowsingRods.id,
          itemLookup.ChemistryTestKit.id,
          itemLookup.MetalDetector.id,
          itemLookup.Compass.id,
          itemLookup.GPSReceiver.id,
          itemLookup.LaserRangefinder.id,
          itemLookup.Pendulum.id,
          itemLookup.TarotDeck.id,
          itemLookup.Magic8Ball.id,
        ],
      },
      {
        label: `Subtle Weapons`,
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [
          itemLookup.Pocketknife.id, itemLookup.MultiTool.id,
          itemLookup.StunGun.id,
          itemLookup.BaseballBat.id, itemLookup.CricketBat.id, itemLookup.GolfClub.id, itemLookup.HockeyStick.id,
          itemLookup.Handgun.id,
          itemLookup.Knife.id,
        ]
      },
    ],
  },
  {
    name: `Gear`,
    id: `3c30b246-6d27-4d32-8919-6f2bcc566ad2`,
    playbooks: [`3f493473-f122-4255-8b19-3635908b2664`], // The Spell-Slinger
    featType: FeatType.Gear,

    description: `Starting Spell-Slinger Gear`,
    longDescription: `You don't need much, but it's still good to carry some backup.`,

    inputs: [
      {
        label: `Weapon`,
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [
          itemLookup.RevolverOld.id,
          itemLookup.RitualKnife.id,
          itemLookup.HeirloomSword.id,
        ]
      },
      {
        label: `Magic Materials`,
        subLabel: `You may own the foci or consumables needed to invoke your Combat Magic. (Check your Tools and Techniques.)`,
        inputType: InputTypes.FeatChoiceById,
        choose: 0,
        chooseMax: 0,
        allowCustom: true,
        options: [
          itemLookup.HexAmulet.id,
          itemLookup.HexWand.id,
          itemLookup.HexStaff.id,
          itemLookup.HexChalk.id,
          itemLookup.HexCharcoal.id,
          itemLookup.HexApothecaryBag.id,
        ]
      },
    ],
  },
  {
    name: `Gear`,
    id: `5b05d02f-8f34-405f-84f5-e14261cbd48b`,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    featType: FeatType.Gear,

    description: `Starting Spooktacular Gear`,
    
    subFeatsById: [
      itemLookup.TicketsToAShow.id,
      itemLookup.SnackVouchers.id,
      itemLookup.DecksOfCards.id,
      itemLookup.PairsOfDice.id,
      itemLookup.MagicTrickProps.id,
      itemLookup.CampingGear.id,
      itemLookup.Makeup.id,
      itemLookup.CostumeAccessories.id,
    ],
    
    inputs: [
      {
        label: `Camp Tool`,
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [
          itemLookup.Pocketknife.id, itemLookup.MultiTool.id,
          itemLookup.Mallet.id,
          itemLookup.Crowbar.id,
          itemLookup.BaseballBat.id, itemLookup.CricketBat.id, itemLookup.GolfClub.id, itemLookup.HockeyStick.id,
          itemLookup.Hatchet.id,
          itemLookup.SockOfCoins.id,
        ]
      },
      {
        label: `Transportation`,
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [
          itemLookup.Pickup.id,
          itemLookup.BoxTruck.id,
          itemLookup.Van.id,
          itemLookup.MotorcycleWithSidecar.id,
        ]
      },
      {
        label: `Mystical Item`,
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [
          itemLookup.GhostShades.id,
          itemLookup.BigPlushDog.id,
          itemLookup.Returning100.id,
          itemLookup.Scamulet.id,
          itemLookup.WizardTent.id,
        ]
      }
    ]
  },
  {
    name: `Gear`,
    id: `1e7a1da4-0e3b-4170-977b-367446ee2943`,
    playbooks: [`1dccf639-8ee6-457e-a2b4-ea2ae9a0bd1a`], // The Spooky
    featType: FeatType.Gear,

    description: `Starting Spooky Gear`,

    inputs: [
      {
        label: `Normal Weapons`,
        inputType: InputTypes.FeatChoiceById,
        choose: 2,
        options: [
          itemLookup.Revolver38.id,
          itemLookup.Handgun.id,
          itemLookup.HuntingRifle.id,
          itemLookup.Shotgun.id,
          itemLookup.BigKnife.id,
        ]
      },
      {
        label: `Power Item`,
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
  {
    name: `Gear`,
    id: `53939d63-c4e4-483a-b4cd-09f54e0d1c90`,
    playbooks: [`36e0df53-1690-46cf-a59e-56ef397d108d`], // The Wronged
    featType: FeatType.Gear,

    description: `Starting Wronged Gear`,
    
    subFeatsById: [itemLookup.ProtectiveGear.id],

    inputs: [
      {
        label: `Signature Weapon`,
        inputType: InputTypes.FeatChoiceById,
        choose: 1,
        options: [
          itemLookup.SawedOffShotgun.id,
          itemLookup.HandCannon.id,
          itemLookup.CombatKnife.id,
          itemLookup.HugeSword.id,
          itemLookup.HugeAxe.id,
          itemLookup.SlayingWeapon.id,
          itemLookup.EnchantedDagger.id,
          itemLookup.Chainsaw.id,
        ]
      },
      {
        label: `Practical Weapons`,
        inputType: InputTypes.FeatChoiceById,
        choose: 2,
        options: [
          itemLookup.Revolver38.id,
          itemLookup.Handgun.id,
          itemLookup.HuntingRifle.id,
          itemLookup.ShotgunLoud.id,
          itemLookup.BigKnife.id,
          itemLookup.BrassKnuckles.id, itemLookup.SapGloves.id,
          itemLookup.WrongedAR.id,
        ]
      },
      {
        label: `Transportation`,
        subLabel: `Optional. You may take a vehicle. If you take a car or motorcycle, you can add an extra \`#classic\` tag.`,
        inputType: InputTypes.FeatChoiceById,
        choose: 0,
        chooseMax: 1,
        options: [
          itemLookup.Car.id, // TODO: Was Classic
          itemLookup.Motorcycle.id, // TODO: Was Classic
          itemLookup.PickupTruck.id,
          itemLookup.Van.id,
        ]
      }
    ]
  }
]