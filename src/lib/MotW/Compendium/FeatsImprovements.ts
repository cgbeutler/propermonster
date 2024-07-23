import {type Feat, FeatTypeEnum} from "./CompendiumTypes";
import {InputTypes} from "./UserInputTypes";

export let ImprovementFeats: Array<Feat> = [
  {
    name: `Get +1 Charm (max +2)`,
    id: `52482560-6000-41df-a86d-013d0b9fd8fc`, // +1 Charm max 2
    featType: FeatTypeEnum.Improvement,
    perks: {charm: {bonus: 1, max: 2}}
  },
  {
    name: `Get +1 Charm (max +3)`,
    id: `24877faf-3b06-4430-853e-40b3f25383c0`, // +1 Charm max 3
    featType: FeatTypeEnum.Improvement,
    perks: {charm: {bonus: 1, max: 3}}
  },
  {
    name: `Get +1 Cool (max +2)`,
    id: `b2ddb91e-1e9a-4235-8637-abf3d63cbf7a`, // +1 Cool max 2
    featType: FeatTypeEnum.Improvement,
    perks: {cool: {bonus: 1, max: 2}}
  },
  {
    name: `Get +1 Cool (max +3)`,
    id: `89515c72-76fa-4a08-9f19-1fb9c0e503ba`, // +1 Cool max 3
    featType: FeatTypeEnum.Improvement,
    perks: {cool: {bonus: 1, max: 3}}
  },
  {
    name: `Get +1 Sharp (max +2)`,
    id: `fc105e78-bc4c-421d-a4c6-1433f74ef005`, // +1 Sharp max 2
    featType: FeatTypeEnum.Improvement,
    perks: {sharp: {bonus: 1, max: 2}}
  },
  {
    name: `Get +1 Sharp (max +3)`,
    id: `37308a67-a11c-48eb-b31f-cf5d603709ee`, // +1 Sharp max 3
    featType: FeatTypeEnum.Improvement,
    perks: {sharp: {bonus: 1, max: 3}}
  },
  {
    name: `Get +1 Tough (max +2)`,
    id: `9b9ac374-fc18-48da-98e9-f7a2507d646a`, // +1 Tough max 2
    featType: FeatTypeEnum.Improvement,
    perks: {tough: {bonus: 1, max: 2}}
  },
  {
    name: `Get +1 Tough (max +3)`,
    id: `db5547d1-f8cf-4596-9891-a8b3954247ce`, // +1 Tough max 3
    featType: FeatTypeEnum.Improvement,
    perks: {tough: {bonus: 1, max: 3}}
  },
  {
    name: `Get +1 Weird (max +2)`,
    id: `e3076999-7980-436b-b192-d5f4ac18b05a`, // +1 Weird max 2
    featType: FeatTypeEnum.Improvement,
    perks: {weird: {bonus: 1, max: 2}}
  },
  {
    name: `Get +1 Weird (max +3)`,
    id: `ea2d3eb3-96c7-44ad-95b0-70d1524d8055`, // +1 Weird max 3
    featType: FeatTypeEnum.Improvement,
    perks: {weird: {bonus: 1, max: 3}}
  },

  
  {
    name: `Lucky`,
    id: `31472dbe-c5ac-47c6-bce7-cb643c2dee57`, // Lucky 1
    featType: FeatTypeEnum.Improvement,
    description: `Gain an extra \`luck\` point.`,
    perks: { offsetMaxLuck: 1 }
  },
  {
    name: `Lucky`,
    id: `9a516e07-6c4d-4bde-9ede-372678d5d1fd`, // Lucky 2
    featType: FeatTypeEnum.Improvement,
    prerequisites: [`31472dbe-c5ac-47c6-bce7-cb643c2dee57`], // Lucky 1
    description: `Gain an extra \`luck\` point.`,
    perks: { offsetMaxLuck: 1 }
  },
  
  
  {
    name: `Take another move.`,
    id: `8b14b13e-c08b-4875-ab7b-637d6bcaa465`, // Take another move 1
    featType: FeatTypeEnum.Improvement,
    inputs: [{
      label: `Playbook Move`,
      inputType: InputTypes.TypedFeatChoice,
      choose: 1,
      featType: FeatTypeEnum.Move,
      playbookOnly: true,
    }],
  },
  {
    name: `Take another move.`,
    id: `201b4763-4aef-4cd4-b701-dccf59ae32b4`, // Take another move 2
    featType: FeatTypeEnum.Improvement,
    prerequisites: [`8b14b13e-c08b-4875-ab7b-637d6bcaa465`], // Take another move 1
    inputs: [{
      label: `Playbook Move`,
      inputType: InputTypes.TypedFeatChoice,
      choose: 1,
      featType: FeatTypeEnum.Move,
      playbookOnly: true,
    }],
  },
  
  
  {
    name: `Take a move from another playbook.`,
    id: `a41a0217-c16c-478b-b96d-2ac780f55546`, // Take a move from another playbook 1
    featType: FeatTypeEnum.Improvement,
    inputs: [{
      label: `Move`,
      inputType: InputTypes.TypedFeatChoice,
      choose: 1,
      featType: FeatTypeEnum.Move,
    }],
  },
  {
    name: `Take a move from another playbook.`,
    id: `3fb2564b-aaee-4dc4-b59a-d21dd8cc35da`, // Take a move from another playbook 2
    featType: FeatTypeEnum.Improvement,
    prerequisites: [`a41a0217-c16c-478b-b96d-2ac780f55546`], // Take a move from another playbook 1
    inputs: [{
      label: `Move`,
      inputType: InputTypes.TypedFeatChoice,
      choose: 1,
      featType: FeatTypeEnum.Move,
    }],
  },


  {
    name: `Gain a haven with two options.`,
    id: `8f3f9023-c1d9-4176-8507-a11b6ff8ffd5`, // Gain a haven with 2 options
    featType: FeatTypeEnum.Improvement,
    description: `Gain a \`haven\` with two options.`,
    inputs: [{
      label: `Haven Picks`,
      inputType: InputTypes.TypedFeatChoice,
      choose: 2,
      featType: FeatTypeEnum.Haven,
    }],
  },
  {
    name: `Haven Addition`,
    id: `9cd3c9b2-9579-41be-a2ac-9aa56b41970d`, // Haven Addition 1
    featType: FeatTypeEnum.Improvement,
    description: `Choose an add-on for your \`haven\``,
    inputs: [{
      label: `Haven Pick`,
      inputType: InputTypes.TypedFeatChoice,
      choose: 1,
      featType: FeatTypeEnum.Haven,
    }],
  },
  {
    name: `Haven Addition`,
    id: `081d971e-72ba-4a20-930b-60ec73f58994`, // Haven Addition 2
    featType: FeatTypeEnum.Improvement,
    prerequisites: [`9cd3c9b2-9579-41be-a2ac-9aa56b41970d`], // Haven Addition 1
    description: `Choose an add-on for your \`haven\``,
    inputs: [{
      label: `Haven Pick`,
      inputType: InputTypes.TypedFeatChoice,
      choose: 1,
      featType: FeatTypeEnum.Haven,
    }],
  },
  
  
  {
    name: `Gain an \`ally\``,
    id: `27bb38b4-0acd-4fa2-afea-77adbb5a67d9`, // Gain an Ally
    featType: FeatTypeEnum.Improvement,
    inputs: [{
      label: `Ally`,
      inputType: InputTypes.Ally,
    }]
  },
  
  
  {
    name: `Gain an \`ally\`: One of your old crew.`,
    id: `6efbc846-2312-4223-8f2e-f569140016c7`, // Gain an Ally (old crew)
    playbooks: [`bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae`], // The Crooked
    featType: FeatTypeEnum.Improvement,

    inputs: [{
      label: `Ally`,
      inputType: InputTypes.Ally,
    }]
  },
  {
    name: `Stash Of Money`,
    id: `05293495-d7f7-4a50-8a15-e7b02a8f81c8`, // Recover a stash
    playbooks: [`bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae`], // The Crooked
    featType: FeatTypeEnum.Improvement,

    description: `Recover a stash of money from the old days. It's enough to live without care... for a year or two.`,
    perks: {
      inventory: [{description: `You have a stash of money. It's enough to live without care for a year or two.`}]
    }
  },
  {
    name: `Gain an \`ally\`: Lesser Divine Being.`,
    id: `c5d5a1d4-f661-47f3-9466-4027c8deeda9`, // Gain an Ally (divine)
    playbooks: [`9e9f712c-54d9-4193-b7ad-48c64f7ec9dc`], // The Divine
    featType: FeatTypeEnum.Improvement,

    description: `Gain a lesser divine being as an \`ally\`, send from above to help with your mission.`,
    inputs: [{
      label: `Ally`,
      subLabel: `A lesser divine being \`ally\`, send from above to help with your mission.`,
      inputType: InputTypes.Ally,
    }]
  },
  {
    name: `Gumshoe Haven.`,
    id: `75073c45-01dc-45b8-9600-8866392bc00b`, // Gain a haven with 2 options (gumshoe)
    playbooks: [`12bc1318-24c7-4402-b9bb-be0698c4ed99`], // The Gumshoe
    featType: FeatTypeEnum.Improvement,
    
    description: `This may be the office where you meed clients, or some other location.`,
    
    inputs: [{
      label: `Haven Pick`,
      inputType: InputTypes.TypedFeatChoice,
      choose: 1,
      featType: FeatTypeEnum.Haven,
    }],
  },
  {
    name: `Delay the Inevitable`,
    id: `59ce3428-ceff-454d-ac5f-918f398a2a9d`, // Gain another harm box
    playbooks: [`12bc1318-24c7-4402-b9bb-be0698c4ed99`], // The Gumshoe
    featType: FeatTypeEnum.Improvement,
    
    description: `Gaining this \`harm\` box on your track will not change the rules for becoming \`unstable\` at or after three \`harm\`.`,
    
    perks: { offsetMaxHealth: 1 },
  },
  {
    name: `The Bare Naked City`,
    id: `3b53fffb-2ec0-493a-8b74-6708274cb971`, // The Bare Naked City
    playbooks: [`12bc1318-24c7-4402-b9bb-be0698c4ed99`], // The Gumshoe
    featType: FeatTypeEnum.Improvement,
    
    description: `Add four additional or new contacts to the **Naked City** move.`,
    
    perks: {
      modChooseInput: [{
        inputKey: `59efa6f6-a69f-4626-b16d-98c2027c2cc0`, // The Naked City
        offset: 4
      }]
    }
  },
  {
    name: `Take Another Rote`,
    id: `d1ab9d1e-e475-41e8-9954-be66137c5b53`, // Take another Rote 1
    playbooks: [`23bdadbc-b690-4baa-8d96-7c791b4d66da`], // The Hex
    featType: FeatTypeEnum.Improvement,
    
    description: `Take Another Rote`,
    
    perks: { addRotes: 1 }
  },
  {
    name: `Take Another Rote`,
    id: `65cff63f-1d3e-4fdf-8ba8-7c72daca9b88`, // Take another Rote 2
    playbooks: [`23bdadbc-b690-4baa-8d96-7c791b4d66da`], // The Hex
    featType: FeatTypeEnum.Improvement,
    prerequisites: [`d1ab9d1e-e475-41e8-9954-be66137c5b53`], // Take a Rote 1
    
    description: `Take Another Rote`,
    
    perks: { addRotes: 1 }
  },
  {
    name: `Take Another Rote`,
    id: `8040d4f0-e4c4-477f-9763-3fceca2b14bc`, // Take another Rote 3
    playbooks: [`23bdadbc-b690-4baa-8d96-7c791b4d66da`], // The Hex
    featType: FeatTypeEnum.Improvement,
    prerequisites: [`d1ab9d1e-e475-41e8-9954-be66137c5b53`,`65cff63f-1d3e-4fdf-8ba8-7c72daca9b88`], // Take a Rote 1 & 2
    
    description: `Take Another Rote`,
    
    perks: { addRotes: 1 }
  },
  {
    name: `Another Move Or Rote`,
    id: `14f2d79d-61ab-466e-8034-6b3528d95904`, // Take another Hex move or Rote 1
    playbooks: [`23bdadbc-b690-4baa-8d96-7c791b4d66da`], // The Hex
    featType: FeatTypeEnum.Improvement,
    
    description: `Take another hex move or **rote**.`,
    
    inputs: [{
      label: `Addition`,
      inputType: InputTypes.FeatChoice,
      choose: 1,
      options: [
        {
          name: `Another Move`,
          id: `83614600-0df6-49f2-a2bf-6931e44e7405`, // Take another move
          description: `Take another Hex move.`,
          inputs: [{
            label: `Move`,
            inputType: InputTypes.TypedFeatChoice,
            choose: 1,
            featType: FeatTypeEnum.Move,
            playbookOnly: true, // The Hex
          }],
        },
        {
          name: `Another Rote`,
          id: `13431c9a-d119-47fc-bed7-35e4899d1e17`, // Take another rote
          description: `Take another **rote**.`,
          perks: { addRotes: 1 }
        }
      ]
    }],
  },
  {
    name: `Take Another Move Or Rote`,
    id: `725ccb2f-602f-4262-9cb1-a3550269da21`, // Take another Hex move or Rote 2
    playbooks: [`23bdadbc-b690-4baa-8d96-7c791b4d66da`], // The Hex
    featType: FeatTypeEnum.Improvement,
    prerequisites: [`14f2d79d-61ab-466e-8034-6b3528d95904`], // Take another hex move or rote 1
    
    description: `Take another hex move or **rote**.`,
    
    inputs: [{
      label: `Take`,
      inputType: InputTypes.FeatChoice,
      choose: 1,
      options: [
        {
          name: `Another Move`,
          id: `f640afd3-c04c-4b75-9102-b8cd42549041`, // Take another move
          description: `Take another Hex move.`,
          inputs: [{
            label: `Move`,
            inputType: InputTypes.TypedFeatChoice,
            choose: 1,
            featType: FeatTypeEnum.Move,
            playbookOnly: true,
          }],
        },
        {
          name: `Another Rote`,
          id: `0d6731ba-a558-4e32-94f6-24305e7af85d`, // Take another rote
          description: `Take another **rote**.`,
          perks: {addRotes: 1}
        }
      ]
    }],
  },
  {
    name: `Sect Commander`,
    id: `5b5fc178-01cd-447a-9169-84e49f1a9f54`, // Sect Commander
    playbooks: [`a78c7ee1-eb8d-4622-adeb-22d9d87169b5`], // The Initiate
    featType: FeatTypeEnum.Improvement,
    
    description: `Get command of your chapter of **The Sect**.`,
    
    perks: {
      social: [{ description: `You have command of your chapter of **The Sect**` }]
    }
  },
  {
    name: `Team Lead`,
    id: `e7ec30c5-6657-456a-a11f-bc7cf1658ae5`, // Team Lead
    playbooks: [`a78c7ee1-eb8d-4622-adeb-22d9d87169b5`], // The Initiate
    featType: FeatTypeEnum.Improvement,
    
    description: `Get a **Sect** team under your command.`,
    
    inputs: [{
      label: `The Team`,
      subLabel: `This **Sect** team is under your command.`,
      inputType: InputTypes.Ally,
      crewMin: 2,
      crewMax: 5,
    }],
  },
  {
    name: `Heightened Natural Attacks`,
    id: `0c32620e-db1d-4cf6-a371-a51ca2f92bd2`, // Heightened Natural Attacks
    playbooks: [`a5f796af-dd20-4ee0-8920-18b80e20ec24`], // The Monstrous
    featType: FeatTypeEnum.Improvement,
    
    description: `Take one additional **Natural Attacks** pick.`,
    
    perks: {
      modChooseInput: [{
        inputKey: `7bcaaa50-1353-449c-a9eb-3d8088f73ac6`, // Natural Attacks
        offset: 1
      }]
    }
  },
  {
    name: `A Shift In The Agency`,
    id: `bcd61b73-7a01-449a-9e6c-2d124e824c7b`, // A shift in the Agency
    playbooks: [`58924c0d-c015-4fcd-8fd9-ca75f12fd019`], // The Professional
    featType: FeatTypeEnum.Improvement,
    
    description: `Add a new **Resource** tag for your **Agency** _or_ change a **Red Tape** tag.`,
    
    inputs: [{
      label: `Shift Type`,
      inputType: InputTypes.FeatChoice,
      choose: 1,
      options: [
        {
          name: `Add Resources`,
          id: `ce22c781-83fd-4543-bd4a-82dba815826a`,
          description: `Add a new **Resource** tag for your Agency.`,
          perks: {
            modChooseInput: [{
              inputKey: `cda1ce37-f4f2-48e7-8fdd-e104f27bf38d`, // Agency Resources
              offset: 1
            }]
          }
        },
        {
          name: `Change Red Tape`,
          id: `e33283d6-71e5-46e5-b84c-e46c42340630`,
          description: `Change a **Red Tape** tag for your Agency.`,
          perks: {
            modChooseInput: [{
              inputKey: `4833c3b1-8fed-461f-85f1-36a915190cd6`, // Agency Red Tape
              offset: 0, // TODO: Is this a good way to do re-picks?
            }]
          }
        }
      ]
    }],
  },
  {
    name: `Team Lead`,
    id: `5932dcf8-555f-4a59-9c24-3611c136f4b8`, // Team Lead 2
    playbooks: [`58924c0d-c015-4fcd-8fd9-ca75f12fd019`], // The Professional
    featType: FeatTypeEnum.Improvement,
    
    description: `Get command of an **Agency** team of monster hunters.`,
    
    inputs: [{
      label: `The Team`,
      subLabel: `Get command of an **Agency** team of monster hunters.`,
      inputType: InputTypes.Ally,
      crewMin: 2,
      crewMax: 5,
    }],
  },
  {
    name: `Second First Encounter`,
    id: `fff16d4b-33f0-4db7-abce-09e6e18678dc`, // Second First Encounter
    playbooks: [`f7b73a9a-6447-42f8-b373-b71341bdad99`], // The Searcher
    featType: FeatTypeEnum.Improvement,
    
    description: `Take a second **First Encounter** move, based on a recent mystery.`,
    
    perks: {
      modChooseInput: [{
        inputKey: `5a23e324-2336-46cf-be84-f44a8771497d`, // First Encounter pick
        offset: 1
      }]
    }
  },
  {
    name: `Trauma Bonding`,
    id: `9c534a00-9fdb-459a-aadc-b5268c7162f0`, // Trauma Bonding
    playbooks: [`cfecc496-d1c1-4b30-af48-0f3f41cd02c0`], // The Snoop
    featType: FeatTypeEnum.Improvement,

    description: `Gain an \`ally\`: One of your existing crew members _or_ the whole crew as an \`ally team\`.`,
    
    // TODO: How to reach in and make bystanders into allies?
  },
  {
    name: `Snoop Haven`,
    id: `e142329d-537e-477d-8e2c-35015dc15255`, // Snoop Haven
    playbooks: [`cfecc496-d1c1-4b30-af48-0f3f41cd02c0`], // The Snoop
    featType: FeatTypeEnum.Improvement,
    
    description: `Get a \`haven\` with one option, a film lab, and an editing suite.`,

    inputs: [{
      label: `Haven Pick`,
      inputType: InputTypes.TypedFeatChoice,
      choose: 1,
      featType: FeatTypeEnum.Haven,
    }],
    perks: {
      grantFeatures: [
        `3639d3ad-8ee4-46d0-8542-e1ae1e155980`, // Film lab and Editing suite
      ],
    }
  },
  {
    name: `Combat Magic`,
    id: `d400a36e-7458-47ef-9f78-c67efd3dcb61`, // Combat Magic
    playbooks: [`3f493473-f122-4255-8b19-3635908b2664`], // The Spell-Slinger
    featType: FeatTypeEnum.Improvement,
    
    description: `Take another **Combat Magic** pick.`,
    
    perks: {
      modChooseInput: [{
        inputKey: `2fc056ef-1794-4493-aecb-4fd855c4337f`, // Combat Magic pick
        offset: 1
      }]
    }
  },
  {
    name: `The Show Must Go On`,
    id: `e82c4e1a-c57f-446b-8ed7-8b338fd0b526`, // The Show Must Go On
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    featType: FeatTypeEnum.Improvement,
    
    description: `Take another **The Show** option.`,
    
    perks: {
      modChooseInput: [{
        inputKey: `e5a4dda6-6093-4725-867b-c35fc51559e3`, // The Show Specialty pick
        offset: 1
      }]
    }
  },
  {
    name: `Dark Tides`,
    id: `081ac6d7-d174-41aa-93e6-db9603fe55e3`, // Dark Tides
    playbooks: [`1dccf639-8ee6-457e-a2b4-ea2ae9a0bd1a`], // The Spooky
    featType: FeatTypeEnum.Improvement,
    
    description: `Change some, or all, of your **Dark Side** tags.`,
    
    perks: {
      modChooseInput: [{
        inputKey: `9c21ebec-8035-43a4-8157-5f0c1f6f0e6c`, // Dark Side tags
        offset: 0, // TODO: Is this a good way to do re-picks?
      }]
    }
  },
  {
    name: `Spooky Library`,
    id: `742da219-56b7-4b52-b9fb-5ed439751f06`, // Spooky Library
    playbooks: [`1dccf639-8ee6-457e-a2b4-ea2ae9a0bd1a`], // The Spooky
    featType: FeatTypeEnum.Improvement,

    description: `Get a \`haven\` with the a **mystical library**.`,
    
    perks: {
      grantFeatures: [
        `38639a3f-c64d-459f-920e-a2ccb8ebe8e3`, // Mystical Library
      ],
    },
  },
]