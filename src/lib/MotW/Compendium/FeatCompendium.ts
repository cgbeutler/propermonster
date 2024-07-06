import {type FeatDesc, FeatType, StatEnum} from "./CompendiumTypes";
import {AllyType, InputTypes} from "./UserInputTypes";

export let Feats: Array<FeatDesc> = [
  {
    id: "5a92f2da-ca73-4fac-b859-08f2c745ae9b",
    playbook: "94a658a0-f5dc-4e4b-a1ec-1b322b08d78f", // The Chosen
    type: FeatType.Move,
    startingFeat: true,

    name: "Destiny's Plaything",
    description: "At the beginning of each **Mystery**, roll to see what is revealed about your immediate future.",
    actions: [
      {
        name: "Destiny's Plaything",
        description: "At the beginning of each **Mystery**, roll to see what is revealed about your immediate future.",
        
        coreStat: StatEnum.Weird,
    
        miss: `Something bad is going to happen to you...`,
    
        mixedSuccess: `You get a vague hint about the coming **Mystery**.`,
        solidSuccess: `The **Keeper** will reveal a useful detail about the coming **Mystery**.`,
      },
    ]
  },
  {
    id: "2f8454d1-2528-428a-af7e-270ddb97019e",
    playbook: "94a658a0-f5dc-4e4b-a1ec-1b322b08d78f", // The Chosen
    type: FeatType.Move,
    startingFeat: true,

    name: "I'm Here For A Reason",
    description: "You can use **Luck** to come back to life.",
    longDescription: `There's something you are destined to do.
Work out the details with the **Keeper**, based on your **Fate** selection.
You cannot die until it comes to pass.

If you die in play, then you must spend a **Luck** point. You will then, somehow, recover or be returned to life.
Once your task is done (or you use up all your **Luck**) all bets are off.`,
    perks: {
      luck: [
        {
          description: "You can use **Luck** to come back to life.",
        }
      ]
    }
  },
  {
    id: "14f72ee0-bf5b-4958-ac31-f2387246b5dd",
    playbook: "94a658a0-f5dc-4e4b-a1ec-1b322b08d78f", // The Chosen
    type: FeatType.Move,
    startingFeat: false,

    name: "The Big Entrance",
    description: "Make a showy entrance into a dangerous situation.",

    actions: [
      {
        name: "The Big Entrance",
        description: "Make a showy entrance into a dangerous situation.",

        coreStat: StatEnum.Cool,
    
        miss: `You're marked as the biggest threat by all enemies who are present.`,
    
        mixedSuccess: `You pick one person or monster to stop, watch and listen until you finish talking.`,
        solidSuccess: `Everyone stops to watch and listen until you finish your opening speech.`,
      }
    ]
  },
  {
    id: "91102186-f3b3-4836-b2f6-52ca3b567bfa",
    playbook: "94a658a0-f5dc-4e4b-a1ec-1b322b08d78f", // The Chosen
    type: FeatType.Move,
    startingFeat: false,

    name: "Devastating",
    description: "When you inflict **Harm**, you may inflict +1 **Harm**",
    
    perks: {
      attacks: [{
        name: "Devastating",
        description: "When you inflict **Harm**, you may inflict +1 **Harm**",
        bonus: 1,
      }]
    }
  },
  {
    id: "9b5d9bbc-7c9f-4c5f-aef0-c63cf848081e",
    playbook: "94a658a0-f5dc-4e4b-a1ec-1b322b08d78f", // The Chosen
    type: FeatType.Move,
    startingFeat: false,

    name: "Dutiful",
    description: "When your **Fate** rears its ugly head, and you act in accordance with any of your **Fate Tags** (either heroic or doom) then mark experience. If it's a heroic tag, take +1 {forward}.",

    perks: {
      experience: [{
        description: "When you respond to your **Fate** with any of your **Fate Tags**, mark experience. (If it's a heroic tag, take +1 {forward}.)",
      }]
    }
  },
  {
    id: "34b4eede-c8b1-40ea-a16b-b2e8ef160d8d",
    playbook: "94a658a0-f5dc-4e4b-a1ec-1b322b08d78f", // The Chosen
    type: FeatType.Move,
    startingFeat: false,

    name: "Invincible",
    description: "You always count as having 2 **Armor**. This doesn't stack with other protection.",
    
    perks: {
      armor: [
        {
          description: "You always count as having 2 **Armor**. This doesn't stack with other protection.",
          min: 2,
          apply: true,
        },
      ]
    }
  },
  {
    id: "a84f5881-0188-4cb1-a303-f913fe939e72",
    playbook: "94a658a0-f5dc-4e4b-a1ec-1b322b08d78f", // The Chosen
    type: FeatType.Move,
    startingFeat: false,

    name: "Resilience",
    description: "You heal faster than normal people. Any time your **Harm** gets healed, heal an extra point. Additionally, your wounds count as 1 **Harm** less for the purpose of the **Keeper**'s harm moves.",

    perks: {
      health: [
        {
          description: "Any time your **Harm** gets healed, heal an extra point.",
        },
        {
          description: "Your wounds count as 1 **Harm** less in regard to the **Keeper**'s **Harm** moves.",
        }
      ]
    }
  },
  {
    id: "a73676f8-d7f9-4d32-98ac-aeda96b8ebc4",
    playbook: "bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae", // The Crooked
    type: FeatType.Background,
    startingFeat: false,

    name: "Hoodlum",
    description: "You can use +Tough (instead of +Charm) to **Manipulate Someone** with threats of violence.",
    
    perks: { manipulateSomeone: [{
      description: "You can use +Tough (instead of +Charm) to **Manipulate Someone** with threats of violence.",
      alternateStat: StatEnum.Tough,
    }] }
  },
  {
    id: "c884798c-32f3-44ca-b9b5-e966c0151c0c",
    playbook: "bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae", // The Crooked
    type: FeatType.Background,
    startingFeat: false,

    name: "Burglar",
    description: "You can break into a secure location using **+Sharp**.",

    actions: [{
      name: "Burgle",
      description: "Break into a secure location.",

      coreStat: StatEnum.Sharp,
  
      miss: `The **Keeper** can take a hard move against you. You likely did not succeed in your burgle attempt.`,
  
      mixedSuccess: `Pick Two:`,
      solidSuccess: `Pick Three:`,
      successFooter: `
* You get in undetected.
* You can get out undetected.
* You don't leave a mess.
* You find what you are after.
  `,
    }]
  },
  {
    id: "5c991827-9e8e-4533-ac32-32f49635f906",
    playbook: "bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae", // The Crooked
    type: FeatType.Background,
    startingFeat: false,

    name: "Grifter",
    description: `Before **Manipulate Someone**, you can ask, "What will convince this person to do what I want?"`,

    longDescription: `When you are about to **Manipulate Someone**, you can ask the **Keeper**, "What will convince this person to do what I want?"
The **Keeper** must answer honestly, but not necessarily completely.`,

    perks: {
      manipulateSomeone: [{
        description: `Before **Manipulate Someone**, you can ask, "What will convince this person to do what I want?"`,
      }]
    }
  },
  {
    id: "23f0898d-9dcb-411c-9c39-784fb4a5a4e2",
    playbook: "bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae", // The Crooked
    type: FeatType.Background,
    startingFeat: false,

    name: "Fixer",
    description: "You are good at finding a buyer, seller, or someone for-hire using **+Charm**.",
    
    actions: [{
      name: "Fixer",
      description: "You are good at finding a buyer, seller, or someone for-hire using **+Charm**.",

      coreStat: StatEnum.Charm,
  
      miss: `The only person who can help is someone who absolutely hates you.`,
  
      mixedSuccess: `You know the one person who can probably do it, but theres a complication.

Pick One:
* You owe them.
* They screwed you over.
* You screwed them over.`,
      solidSuccess: `You know just the person who would be interested.`,

    }]
  },
  {
    id: "1e123c89-81eb-4f7c-93a6-c7ca7fba088d",
    playbook: "bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae", // The Crooked
    type: FeatType.Background,
    startingFeat: false,

    name: "Assassin",
    description: "When you take your first shot at an unsuspecting target, do +2 **Harm**",

    perks: {
      damage: [{
        description: "When you take your first shot at an unsuspecting target, do +2 **Harm**",
        offset: 2,
        apply: false,
      }]
    }
  },
  {
    id: "6772bfde-fda9-4ee6-afc4-a969475bf9d6",
    playbook: "bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae", // The Crooked
    type: FeatType.Background,
    startingFeat: false,

    name: "Charlatan",
    description: "When you want people to think you are using magic or when you want to **Manipulate Someone** with fortune telling.",
    longDescription: `When you want people to think you are using magic or when you want to **Manipulate Someone** with fortune telling.
When you use **Manipulate Someone** with fortune telling, you may ask "What are they hoping for right now?" as a free question (even on a miss.)`,

    actions: [{
      name: "Magic Tricks",
      description: "Make people think you are using magic.",

      coreStat: StatEnum.Cool,

      miss: `The **Keeper** can take a hard move against you. You likely failed to convince them that you did magic.`,
  
      mixedSuccess: `You tripped up a couple of times. Someone may have noticed.`,
      solidSuccess: `Your audience is amazed and fooled by your illusion.`,
    }],
    perks: {
      manipulateSomeone: [{ description: `When fortune telling, you may ask "What are they hoping for right now?" as a free question (even on a miss.)` }]
    }
  },
  {
    id: "1e618c4e-b780-4948-8c25-ae60fffc6f26",
    playbook: "bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae", // The Crooked
    type: FeatType.Background,
    startingFeat: false,

    name: "Pickpocket",
    description: "Steal something small",

    actions: [{
      name: "Pickpocket",
      description: "Steal something small",

      coreStat: StatEnum.Charm,
  
      miss: `The **Keeper** can take a hard move against you. You likely failed your pickpocket attempt.`,
  
      mixedSuccess: `Choose One:
* You don't grab it
* You grab the wrong thing
* They will remember you later`,
      solidSuccess: `You get it and they didn't notice you take it.`,
    }]
  },
  {
    id: "1a49552b-c007-466a-8e1a-c4b48f13be59",
    playbook: "bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae", // The Crooked
    type: FeatType.Move,
    startingFeat: false,

    name: "Artifact",
    description: "You 'found' a magical artifact with handy powers, and kept it.",
    descriptionPattern: "You 'found' and kept that {item}",
    longDescription: `Pick One:
* Protective Amulet: 1 **Armor** #magic #recharge.
* Lucky Charm: Use instead of **Luck** only once.
* Grimoire: Studying the book gives +1 {forward} to **Use Magic** (or an alternate Weird Basic Move.)
* Skeleton Key: Opens any magically sealed lock.
* Imp Stone: A weak demon is bound to serve the holder. The imp must be summoned with **Use Magic**.`,

    choose: 1,
    choices: [
      {
        id: "6b0220ed-0a0b-46dc-9ee0-9e7ee4bfa36e",
        name: "Protective Amulet: 1 **Armor** #magic #recharge.",
        variables: { item: "Protective Amulet that provides 1 **Armor** (#magic #recharge.)" },
        items: [
          {
            name: "Protective Amulet",
            description: "+1 **Armor**",
            charges: 1,
            tags: [ "magic", "recharge" ],

            perks: {
              armor: [{
                description: "+1 **Armor** #magic #recharge.",
                offset: 1,
                apply: false,
                showItemCharge: true,
              }]
            }
          }
        ]
      },
      {
        id: "112d8342-17b3-439d-81fa-0764f2523ee8",
        name: "Lucky Charm: Use instead of **Luck** only once.",
        variables: { item: "Lucky Charm that can be used instead of **Luck** one time." },
        items: [
          {
            name: "Lucky Charm",
            description: "Use instead of **Luck** only once.",
            chargesLabel: "Uses",
            charges: 1,

            perks: {
              luck: [{
                description: "Your Luck Charm item can be used once instead of using a **Luck** point.",
                showItemCharge: true,
              }]
            }
          }
        ]
      },
      {
        id: "a921d0ca-1a63-4324-8cda-aeaa0ef9c940",
        name: "Grimoire: Studying the book gives +1 {forward} to your basic **Weird** move.",
        variables: { item: "Grimoire that, when studied, provides +1 {forward} to your basic **Weird Move** (default **Use Magic**.)" },
        items: [
          {
            name: "Grimoire",
            description: "Studying the Grimoire gives +1 {forward} to your basic **Weird** move (default **Use Magic**.)",
            perks: {
              weirdMove: [{ description: "Studying the Grimoire gives +1 {forward} to your basic **Weird** move (default **Use Magic**.)" }]
            }
          }
        ]
      },
      {
        id: "ec2bcf6d-1880-41fb-9c15-19ee459bedb8",
        name: "Skeleton Key: Opens any magically sealed lock.",
        variables: { item: "Skeleton Key that opens any magically sealed lock." },
        items: [
          {
            name: "Skeleton Key",
            description: "Open any magically sealed lock.",
          }
        ]
      },
      {
        id: "7908f804-8889-4f2a-bae0-45d465947c13",
        name: "Imp Stone: A weak demon is bound to serve the holder. The imp must be summoned with **Use Magic**.",
        variables: { item: "Imp Stone that binds a weak demon to servitude once summoned." },
        items: [
          {
            name: "Imp Stone",
            description: "A weak demon is bound to serve the holder of this stone. The imp must be summoned with **Use Magic**.",
          }
        ]
      },
    ]
  },
  {
    id: "8245c701-9ad3-4c48-a519-d17ab595439f",
    playbook: "bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae", // The Crooked
    type: FeatType.Move,
    startingFeat: false,

    name: "Crew",
    description: "You have a regular crew: a team of three or four people who will help you out with pretty much anything. They count as an ally team.",

    inputs: [{ type: InputTypes.Ally, name: "crew", label: "Gang", crewMin: 3, crewMax: 4 }],

    perks: {
      social: [{
        description: "You have a crew that will help you out with pretty much anything. They count as an ally team.",
        showInputs: [ "crew" ]
      }]
    }
  },
  {
    id: "9745fbb6-da21-4e2c-bb74-cd2beb5874fe",
    playbook: "bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae", // The Crooked
    type: FeatType.Move,
    startingFeat: false,

    name: "Deal with the Devil",
    description: "You sold your soul to the Devil.",
    descriptionPattern: "You sold your soul to the Devil to gain {rewards}. You have {time} to live",
    longDescription: `Pick one or two things you got out of the deal:
* Wealth
* Fame,
* Youth,
* Sensual Gratification
* Skill (add +1 to two stats)

Payment is due when you die in 6 months (if you picked 2 things) or 1 year (if you picked 1 thing.)`,

    choose: 1,
    choices: [
      {
        id: "b4bbe310-89fc-46a7-9db2-d3c931c2951a",
        name: "Gain 1 perk. Have 1 year to live.",
        variables: { time: "1 year" },
        choose: 1,
        choices: [
          {
            id: "a684fdef-26a0-492a-9d4f-7050992c92dd",
            name: "Wealth",
            variables: { rewards: "Wealth" },
            perks: {
              inventory: [{ description: "You sold your soul for wealth. You have only 1 year till your soul is forfeit.", }]
            }
          },
          {
            id: "1ed585f3-f6f2-4e21-8e89-0228feb53c76",
            name: "Gain fame",
            variables: { rewards: "Fame" },
            perks: {
              social: [{ description: "You sold your soul for fame. You have only 1 year till your soul is forfeit.", }]
            }
          },
          {
            id: "ae1e108a-7328-464f-b43c-c8a14139c3e3",
            name: "Gain youth",
            variables: { rewards: "Youth" },
            perks: {
              social: [{ description: "You sold your soul for youth. You have only 1 year till your soul is forfeit.", }]
            }
          },
          {
            id: "8189152a-6e65-40e5-896d-29ed45858eb3",
            name: "Gain sexual gratification",
            variables: { rewards: "Sexual Gratification" },
            perks: {
              social: [{ description: "You sold your soul for sexual gratification. You have only 1 year till your soul is forfeit.", }]
            }
          },
          {
            id: "ec0fdacc-0f6b-4b10-836f-3399a3b5decb",
            name: "Gain skill (+1 to a stat)",
            variables: {},
            choose: 1,
            choices: [
              {
                id: "0dca3bb3-b019-4315-ac86-a65576f14986",
                name: "Charm",
                variables: { rewards: "+1 Charm" },
                perks: { charm: { bonus: 1, max: 4 } }
              },
              {
                id: "a9849b53-3e7c-4fe1-84fe-fb504c2bffe3",
                name: "Cool",
                variables: { rewards: "+1 Cool" },
                perks: { cool: { bonus: 1, max: 4 } }
              },
              {
                id: "422b60c7-3f41-42f0-8177-d6e5e9b47440",
                name: "Sharp",
                variables: { rewards: "+1 Sharp" },
                perks: { sharp: { bonus: 1, max: 4 } }
              },
              {
                id: "9f142324-918a-43ec-a219-83df2269cf50",
                name: "Tough",
                variables: { rewards: "+1 Tough" },
                perks: { tough: { bonus: 1, max: 4 } }
              },
              {
                id: "3393b93d-c718-40c2-a44d-134101cf4ae7",
                name: "Weird",
                variables: { rewards: "+1 Weird" },
                perks: { weird: { bonus: 1, max: 4 } }
              },
            ]
          },
        ]
      },
      {
        id: "b8a364f8-832f-452e-94a0-0ffb2524d51b",
        name: "Gain 2 option. Have 6 months to live.",
        variables: { time: "6 months" },
        choose: 2,
        choices: [
          {
            id: "a684fdef-26a0-492a-9d4f-7050992c92dd",
            name: "Gain wealth",
            variables: { rewards: "Wealth" },
            perks: {
              inventory: [{ description: "You sold your soul for wealth. You have only 1 year till your soul is forfeit." }]
            }
          },
          {
            id: "1ed585f3-f6f2-4e21-8e89-0228feb53c76",
            name: "Gain fame",
            variables: { rewards: "Fame" },
            perks: {
              social: [{ description: "You sold your soul for fame. You have only 1 year till your soul is forfeit." }]
            }
          },
          {
            id: "ae1e108a-7328-464f-b43c-c8a14139c3e3",
            name: "Gain youth",
            variables: { rewards: "Youth" },
            perks: {
              social: [{ description: "You sold your soul for youth. You have only 1 year till your soul is forfeit." }]
            }
          },
          {
            id: "8189152a-6e65-40e5-896d-29ed45858eb3",
            name: "Gain sexual gratification",
            variables: { rewards: "Sexual Gratification" },
            perks: {
              social: [{ description: "You sold your soul for sexual gratification. You have only 1 year till your soul is forfeit." }]
            }
          },
          {
            id: "ec0fdacc-0f6b-4b10-836f-3399a3b5decb",
            name: "Gain skill (+1 to a stat)",
            variables: {},
            choose: 1,
            choices: [
              {
                id: "0dca3bb3-b019-4315-ac86-a65576f14986",
                name: "Gain Charm",
                variables: { rewards: "+1 Charm" },
                perks: { charm: { bonus: 1, max: 5 } }
              },
              {
                id: "a9849b53-3e7c-4fe1-84fe-fb504c2bffe3",
                name: "Gain Cool",
                variables: { rewards: "+1 Cool" },
                perks: { cool: { bonus: 1, max: 5 } }
              },
              {
                id: "422b60c7-3f41-42f0-8177-d6e5e9b47440",
                name: "Gain Sharp",
                variables: { rewards: "+1 Sharp" },
                perks: { sharp: { bonus: 1, max: 5 }
                }
              },
              {
                id: "9f142324-918a-43ec-a219-83df2269cf50",
                name: "Gain Tough",
                variables: { rewards: "+1 Tough" },
                perks: { tough: { bonus: 1, max: 5 } }
              },
              {
                id: "3393b93d-c718-40c2-a44d-134101cf4ae7",
                name: "Gain Weird",
                variables: { rewards: "+1 Weird" },
                perks: {  weird: { bonus: 1, max: 5 } }
              },
            ]
          },
        ]
      },
    ]
  },
  {
    id: "7f61cb80-f1c2-4fa4-8d42-4e0b61559f38",
    playbook: "bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae", // The Crooked
    type: FeatType.Move,
    startingFeat: false,

    name: "Friends on the Force",
    description: "You know a few cops who can help, for certain considerations. You can lose the cops using **Act Under Pressure**.",
    longDescription: `You know a few cops who can be persuaded to look the other way or do you a favor, for certain considerations.
You can **Act Under Pressure** to get in touch with them when you need to divert any law enforcement attention.
There will be a cost, although maybe not right now.`,

    perks: {
      social: [{ description: `You know a few cops who can be persuaded to look the other way or do you a favor, for certain considerations.` }],
      actUnderPressure: [{
        description: `Divert law enforcement attention through your pals on the force (will cost something at some point.)`,
      }]
    }
  },
  {
    id: "85c5b933-f703-42ec-b74c-b14ec16e161c",
    playbook: "bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae", // The Crooked
    type: FeatType.Move,
    startingFeat: false,

    name: "Made",
    description: `You're "made" in a gang. Name the gang and describe how their operations tie into your background.
You can call on the gang members to help you out, but they'll expect to be paid. Your bosses will have requests for you now and again, but
you'll be paid. Minor trouble will be overlooked, but you better not screw over any other "made" gangsters.`,

    inputs: [
      { type: InputTypes.Text, name: "gangName", label: "Gang Name", placeholder: "The Hornets" },
      { type: InputTypes.TextArea, name: "gangDescription", label: "Gang Description", placeholder: "Gang operations. How the gang relates to your background. etc." },
    ],

    perks: {
      social: [
        { description: `You can call on your gang members to help you out. They'll expect to be paid.` },
        { description: `Your bosses will have requests for you now and again, but you'll be paid.`, showInputs: [ "gangName" ]  },
      ]
    }
  },
  {
    id: "15cfa72c-bfee-45ed-a3d4-2923805b31cd",
    playbook: "bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae", // The Crooked
    type: FeatType.Move,
    startingFeat: false,

    name: "Driver",
    description: "You have +1 {ongoing} when driving, you can hotwire anything using tools, and you own two vehicles.",
    longDescription: `You have +1 {ongoing} when driving.
    
    You can hotwire anything (the older it is, the fewer tools you need to do it.)
    
    You own two handy, widely-available vehicles (perhaps a sports car and a van.)`,

    autoActions: [{
      name: "Hotwiring",
      description: "You can hotwire anything (the older it is, the fewer tools you need to do it.)",
    }],

    perks: {
      allMoves: [{
        description: "You have +1 {ongoing} when driving.",
        offset: 1,
      }],
    },

    vehicles: [
      { description: "Driver Vehicle 1. A handy, widely-available vehicle. (Likely lacks armor, monster cages, etc.)" },
      { description: "Driver Vehicle 2. A handy, widely-available vehicle. (Likely lacks armor, monster cages, etc.)" },
    ]
  },
  {
    id: "0790ae58-043a-45ac-a48f-5c61f4c2d5de",
    playbook: "bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae", // The Crooked
    type: FeatType.Move,
    startingFeat: false,

    name: "Home Ground",
    description: "Your crew made a point of keeping the locals happy. Your neighborhood will always be willing to help, no questions asked.",
    longDescription: `Your crew made a point of keeping the locals happy - keeping them safe, ensuring things always went down okay, etc.
When you're back in your old neighborhood, you can always find people who will hide you or help you with a minor favor, no questions asked.`,

    perks: {
      social: [{ description: "Your neighborhood will always be willing to hide you or do minor favors, no questions asked." }]
    }
  },
  {
    id: "707e0de6-f495-4262-b687-46589c965568",
    playbook: "bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae", // The Crooked
    type: FeatType.Move,
    startingFeat: false,

    name: "Notorious",
    description: "",
    longDescription: `You have a reputation from your criminal past.
When you reveal who you are, your terrifying reputation counts as a reason for people to do what you ask, for the **Manipulate Someone** move.
Revealing your identity to someone can create problems later, of course.`,

    perks: {
      manipulateSomeone: [{ description: "You can reveal your **Notorious** identity instead of providing a reason (may complicate things later.)" }]
    }
  },
  {
    id: "6e2397c4-971e-4529-b26d-66bd35168ccd",
    playbook: "9e9f712c-54d9-4193-b7ad-48c64f7ec9dc", // The Divine
    type: FeatType.Move,
    startingFeat: false,

    name: "Boss from Beyond",
    description: "At the beginning of each mystery, roll to meet with the boss.",
    
    inputs: [
      { type: InputTypes.TextArea, name: "task", label: "Task(s)", placeholder: "" },
      { type: InputTypes.Checks, name: "taskFailed", label: "Task(s) Failed", max: 1 },
    ],
    
    actions: [{
      name: "Boss from Beyond",
      coreStat: StatEnum.Weird,
      description: "At the beginning of each mystery, roll to meet with the boss.",

      miss: "Your superiors require you do a terrible task.",

      mixedSuccess: "Your superiors ask you to do a complicated or difficult task.",
      solidSuccess: "Your superiors ask you to do a simple task.",
      successFooter: `Additionally, You can ask your superiors one of the **Investigate a Mystery** questions:
{@investigationQuestions}
`,
      resultFooter: "If you do not accomplish what the boss ordered, you cannot use this move again until you have made up for your failure in some way.",

      startOfMystery: true,
      showInputs: [ "task", "taskFailed" ]
    }]
  },
  {
    id: "d68efbb3-0a67-42d1-81c1-86a1d09cecf5",
    playbook: "9e9f712c-54d9-4193-b7ad-48c64f7ec9dc", // The Divine
    type: FeatType.Move,
    startingFeat: false,

    name: "Angel Wings",
    description: "You can go instantly to anywhere you've visited before, or to a person you know well. If you try to take 1 or 2 people, you have to roll.",
    
    actions: [{
      name: "Angel Wings",
      coreStat: StatEnum.Weird,
      description: "You can go instantly to anywhere you've visited before with 1 or 2 people. (No roll required to travel alone.)",
      miss: "The **Keeper** can take a hard move against you. Your attempt likely failed or went terribly wrong.",
      mixedSuccess: "You didn't quite manage it. Either you are all separated or you all appear in the wrong place.",
      solidSuccess: "You all get where you wanted to go.",
    }],
    autoActions: [{
      name: "Angel Wings",
      description: "You can go instantly to anywhere you've visited before, or to a person you know well. (See the **Ability** if you want to take people with you.)"
    }]
  },
  {
    id: "6f96fc77-c094-4aca-94e9-76eee2705815",
    playbook: "9e9f712c-54d9-4193-b7ad-48c64f7ec9dc", // The Divine
    type: FeatType.Move,
    startingFeat: false,

    name: "What I Need, When I Need It",
    description: "You may store any small object you own in a magical space no one can get to. You can retrieve stored items any time into your hand.",
    
    autoActions: [{
      name: "What I Need, When I Need It",
      description: "You may store any small object you own in a magical space no one can get to. You can retrieve stored items any time into your hand."
    }]
  },
  {
    id: "572a1a57-cd59-4362-b7df-a9cd1894a870",
    playbook: "9e9f712c-54d9-4193-b7ad-48c64f7ec9dc", // The Divine
    type: FeatType.Move,
    startingFeat: false,

    name: "Smite",
    description: "Your body and divine weapon always count as a weakness against the monsters you fight. Your unarmed attacks are 2 **Harm** #intimate #hand #messy",

    perks: {
      attacks: [{
        name: "Smite - Unarmed",
        description: "2 **Harm** (Counts as a weakness against monsters.)",
        base: 2,
        tags: [ "intimate", "hand", "messy" ]
      }]
    }
  },
  {
    id: "3fa74412-4f53-4b47-b125-f17f7e3eed9e",
    playbook: "9e9f712c-54d9-4193-b7ad-48c64f7ec9dc", // The Divine
    type: FeatType.Move,
    startingFeat: false,

    name: "Soothe",
    description: "Talk to someone for a few seconds to calm them.",
    longDescription: `When you talk to someone for a few seconds in a quiet voice, you can calm them down and block any panic, anger, or other negative emotions they have.
This works even if the thing freaking them out is still present, as long as your voice can be heard.`,
    autoActions: [{
      name: "Soothe",
      description: "Talk to someone for a few seconds to calm them.",
      longDescription: `When you talk to someone for a few seconds in a quiet voice, you can calm them down and block any panic, anger, or other negative emotions they have.
This works even if the thing freaking them out is still present, as long as your voice can be heard.`,
    }]
  },
  {
    id: "d66c3ec4-38af-46c7-a375-e8eb1359c334",
    playbook: "9e9f712c-54d9-4193-b7ad-48c64f7ec9dc", // The Divine
    type: FeatType.Move,
    startingFeat: false,

    name: "Lay On Hands",
    description: "Your touch can heal injury and disease.",
    actions: [{
      name: "Lay On Hands",
      description: "Your touch can heal injury and disease.",
      coreStat: StatEnum.Cool,
      miss: "Your aura causes them extra harm",
      mixedSuccess: `Heal 2 **Harm** or an illness and **Stabilize** the target.

Unfortunately, you take the damage or illness upon yourself.`,
      solidSuccess: "Heal 2 **Harm** or an illness and **Stabilize** the target."
    }]
  },
  {
    id: "5f13cf64-03d7-489c-8ebf-8578a19b4e44",
    playbook: "9e9f712c-54d9-4193-b7ad-48c64f7ec9dc", // The Divine
    type: FeatType.Move,
    startingFeat: false,

    name: "Cast Out Evil",
    description: "You may banish an unnatural creature from your presence.",
    longDescription: "You may banish an unnatural creature from your presence. This move may be used on unnatural **Hunters**, like 'The Monstrous'.",
    actions: [{
      name: "Cast Out Evil",
      description: "You may banish an unnatural creature from your presence.",
      coreStat: StatEnum.Tough,
      miss: "Something is keeping it here... that's not good.",
      mixedSuccess: `It takes a little while for the banishing to take effect--the creature has time to make one or two actions.`,
      solidSuccess: "It is banished!",
      successFooter: `The banished creature is unharmed. You have no control over where it goes.`
    }]
  },
  {
    id: "6db80acb-2a78-413c-bcb9-ae62ca361f9e",
    playbook: "689d32a6-faa1-4258-9fda-894b9bdf8571", // The Expert
    type: FeatType.Move,
    startingFeat: false,

    name: "I've Read About This Sort Of Thing",
    description: "You can roll +Sharp (instead of +Cool) when you **Act Under Pressure**",

    perks: {
      actUnderPressure: [{
        description: "You can roll +Sharp (instead of +Cool) when you **Act Under Pressure**",
        alternateStat: StatEnum.Sharp
      }]
    }
  },
  {
    id: "b95e492e-4947-4249-9daf-ee311daede55",
    playbook: "689d32a6-faa1-4258-9fda-894b9bdf8571", // The Expert
    type: FeatType.Move,
    startingFeat: false,

    name: "Often Right",
    description: "Grant +1 {ongoing} and gain experience when a hunter comes to you for advice.",
    longDescription: `When a hunter comes you you for advice, give them your honest opinion or advice. If they take your advice, they get +1 {ongoing} while they follow your advice, and you mark **Experience**.`,
    autoActions: [{
      name: "Often Right",
      description: "When a Hunter comes you to for honest advice, giving it will gain **Experience** and grant them +1 {ongoing}.",
      longDescription: `When a hunter comes you you for advice, give them your honest opinion or advice. If they take your advice, they get +1 {ongoing} while they follow your advice, and you mark **Experience**.`,
    }]
  },
  {
    id: "19b7c2ce-772c-435f-bd76-6d5758a49e76",
    playbook: "689d32a6-faa1-4258-9fda-894b9bdf8571", // The Expert
    type: FeatType.Move,
    startingFeat: false,

    name: "Preparedness",
    description: "When you need something unusual or rare, you may... just have it.",
    actions: [{
      name: "Preparedness",
      description: "When you need something unusual or rare, you may... just have it.",
      coreStat: StatEnum.Sharp,
      miss: "You know where it is, but it's somewhere real bad.",
      mixedSuccess: "You have it, but not here. It will take some time to get it.",
      solidSuccess: "You have it right here right now."
    }]
  },
  {
    id: "09d5b526-ab5d-40c1-b59f-40c05e1e5b97",
    playbook: "689d32a6-faa1-4258-9fda-894b9bdf8571", // The Expert
    type: FeatType.Move,
    startingFeat: false,

    name: "It Wasn't As Bad As It Looked",
    description: "Once per mystery you may attempt to keep going despite your injuries.",

    actions: [{
      name: "It Wasn't As Bad As It Looked",
      description: "Once per mystery you may attempt to keep going despite your injuries.",
      coreStat: StatEnum.Cool,
      miss: "It was worse than it looked. The Keeper may inflict a harm move on you or make your wounds unstable.",
      mixedSuccess: "Choose One: Heal 1 harm -or- stabilize your wounds.",
      solidSuccess: "Heal 2 harm and stabilize your wounds.",
      uses: 1,
      usesResetAtEndOfMystery: true,
    }]
  },
  {
    id: "f649cb50-aab1-4681-88a7-6782156f7388",
    playbook: "689d32a6-faa1-4258-9fda-894b9bdf8571", // The Expert
    type: FeatType.Move,
    startingFeat: false,

    name: "Precise Strike",
    description: "When you inflict harm on a monster, you can aim for a weak spot.",
    actions: [{
      name: "Precise Strike",
      description: "When you inflict harm on a monster, you can aim for a weak spot.",
      coreStat: StatEnum.Tough,
      miss: "You have left yourself open to the monster.",
      mixedSuccess: "You inflict +1 **Harm**.",
      solidSuccess: "You inflict +2 **Harm**.",
    }]
  },
  {
    id: "adaa8efc-6b8f-4f28-95a1-7aa333af312d",
    playbook: "689d32a6-faa1-4258-9fda-894b9bdf8571", // The Expert
    type: FeatType.Move,
    startingFeat: false,

    name: "The One With The Plan",
    description: "At the beginning of each mystery, roll for points to be in the right place at the right time.",
    
    inputs: [
      { type: InputTypes.Checks, name: "holds", label: "Holds", max: 2, resetPerMystery: true },
      { type: InputTypes.Checks, name: "keeperHolds", label: "Keeper Holds", max: 1, resetPerMystery: true },
    ],
    
    actions: [{
      name: "The One With The Plan",
      description: "At the beginning of each mystery, roll for **Holds** to use later to be in the right place at the right time.",
      coreStat: StatEnum.Tough,
      miss: "**The Keeper** **Holds** 1 and can spend it to put you in the worst place, unprepared and unready.",
      mixedSuccess: "**Hold** 1.",
      solidSuccess: "**Hold** 2.",
      successFooter: "You can spend your **Hold** to be where you need to be, prepared and ready.",
      startOfMystery: true,
      showInputs: [ "holds", "keeperHolds" ]
    }],
    autoActions: [{
      name: "The One With The Plan - Spend Hold",
      description: "Spend **Holds** to be where you need to be, prepared and ready.",
      showInputs: [ "holds", "keeperHolds" ],
    }]
  },
  {
    id: "3de6096b-69cb-4ae4-8e93-2cad11d32cda",
    playbook: "689d32a6-faa1-4258-9fda-894b9bdf8571", // The Expert
    type: FeatType.Move,
    startingFeat: false,

    name: "Dark Past",
    description: "Trawl through your memories for something relevant to the case at hand.",
    actions: [{
      name: "Dark Past",
      description: "Trawl through your memories for something relevant to the case at hand.",
      coreStat: StatEnum.Weird,
      miss: "You can ask **The Keeper** one of these questions, but that will mean you are personally complicit in creating the situation you are now dealing with.",
      mixedSuccess: "Ask **The Keeper** one of these questions:",
      solidSuccess: "Ask **The Keeper** two of these questions:",
      resultFooter: `
* When I dealt this creature (or one of its kind), what did I learn?
* What black magic do I know that could help here?
* Do I know anyone who might be behind this?
* Who do I know who can help us right now?`
    }]
  },
  {
    id: "1e8b0a9b-d78d-48ec-8589-379a871999d8",
    playbook: "3ef37c00-3254-4af4-830a-9a21e7c6d02a", // The Flake
    type: FeatType.Move,
    startingFeat: false,

    name: "Connect the Dots",
    description: "At the beginning of each mystery, look for wider patterns that the current events may be part of.",
    
    inputs: [{ type: InputTypes.Checks, name: "holds", label: "Holds", max: 3, resetPerMystery: true }],

    actions: [{
      name: "Connect the Dots",
      description: "Look for wider patterns that the current events may be part of.",

      coreStat: StatEnum.Sharp,

      miss: "You fail to see any connections. The Keeper may take a move against you based on your inability to see the bigger picture.",
      mixedSuccess: "**Hold** 1.",
      solidSuccess: "**Hold** 3.",
      successFooter: `
During the mystery, you can spend your **Hold** to ask any one of the following questions:
* Is this person connected to the current events more than they are saying?
* When and where will the next critical event occur?
* What does the monster want from this person?
* Is this connected to previous mysteries we have investigated?
* How does this mystery connect to the bigger picture?`,

      startOfMystery: true,
      showInputs: [ "holds" ]
    }],
    autoActions: [{
      name: "Connect the Dots - Spend Hold",
      description: "Spend your **Holds** to ask any one of the questions, gaining a view of the greater picture.",
      longDescription: `During the mystery, you can spend your **Hold** to ask any one of the following questions:
* Is this person connected to the current events more than they are saying?
* When and where will the next critical event occur?
* What does the monster want from this person?
* Is this connected to previous mysteries we have investigated?
* How does this mystery connect to the bigger picture?`,
      showInputs: [ "holds" ]
    }]
  },
  {
    id: "d4880510-6fc2-449e-a6f6-0849c8ec36d1",
    playbook: "3ef37c00-3254-4af4-830a-9a21e7c6d02a", // The Flake
    type: FeatType.Move,
    startingFeat: false,

    name: "Crazy Eyes",
    description: "Gain +1 Weird (max +3)",

    perks: { weird: { bonus: 1, max: 3 } }
  },
  {
    id: "98dbb124-67af-4cb9-9a8c-24bf46ee0805",
    playbook: "3ef37c00-3254-4af4-830a-9a21e7c6d02a", // The Flake
    type: FeatType.Move,
    startingFeat: false,

    name: "See, It All Fits Together",
    description: "You can roll +Sharp (instead of +Charm) when you **'Manipulate Someone'**",

    perks: {
      manipulateSomeone: [{
        description: "You can roll +Sharp (instead of +Charm) when you **'Manipulate Someone'**",
        alternateStat: StatEnum.Charm,
      }]
    }
  },
  {
    id: "0e00af10-e0c3-49a7-a922-b54cafa09675",
    playbook: "3ef37c00-3254-4af4-830a-9a21e7c6d02a", // The Flake
    type: FeatType.Move,
    startingFeat: false,

    name: "Suspicious Mind",
    description: "If someone lies to you, you know it.",

    perks: {
      protections: [{ description: "If someone lies to you, you know it." }]
    }
  },
  {
    id: "5a3d28e5-fb9b-4b6c-90d5-2884a963cea3",
    playbook: "3ef37c00-3254-4af4-830a-9a21e7c6d02a", // The Flake
    type: FeatType.Move,
    startingFeat: false,

    name: "Often Overlooked",
    description: "When you act all crazy, but are taken as an obvious distraction to be ignored.",

    actions: [{
      name: "Often Overlooked",
      description: "When you act all crazy, but are taken as an obvious distraction to be ignored.",
      coreStat: StatEnum.Weird,
      miss: "You draw lots (but not all) the attention.",
      mixedSuccess: "You are regarded as either un-threatening or unimportant (pick one.)",
      solidSuccess: "You are regarded as un-threatening and unimportant."
    }]
  },
  {
    id: "ea9088b8-319b-410d-bfe2-5dfc9e479db6",
    playbook: "3ef37c00-3254-4af4-830a-9a21e7c6d02a", // The Flake
    type: FeatType.Move,
    startingFeat: false,

    name: "Contrary",
    description: "When you seek out and receive honest advice, then do something else instead.",
    longDescription: `When you seek out and receive honest advice on the best course of action for you and then do something else instead, mark experience.
If you do exactly the opposite of their advice, you also take +1 {ongoing} on any moves you make pursuing that course.`,

    perks: {
      experience: [{ description: "When you seek out and receive honest advice, then do something else instead, gain +1 **Experience**." }],
      allMoves: [{
        description: "When you do the exact opposite of honest advice given to you, gain +1 {ongoing} (and gain Experience, if you haven't already for this advice.)",
        offset: 1,
      }]
    }
  },
  {
    id: "981370ad-63a5-4f58-a4cf-79683ac40bdc",
    playbook: "3ef37c00-3254-4af4-830a-9a21e7c6d02a", // The Flake
    type: FeatType.Move,
    startingFeat: false,

    name: "Net Friends",
    description: "You know a lot of people on the Internet. You can contact a net friend to help with a mystery.",

    actions: [{
      name: "Net Friends",
      description: "You know a lot of people on the Internet. You can contact a net friend to help with a mystery.",

      coreStat: StatEnum.Charm,

      miss: "You burn some bridges online.",
      mixedSuccess: "They're prepared to help, but it's either going to take some time or you're going to have to do part of it yourself.",
      solidSuccess: "They're available and helpful--they can fix something, break a code, hack a computer, or get you some special information.",
    }]
  },
  {
    id: "d63fe39c-5505-4ab6-b1d0-6b3223b306fe",
    playbook: "3ef37c00-3254-4af4-830a-9a21e7c6d02a", // The Flake
    type: FeatType.Move,
    startingFeat: false,

    name: "Sneaky",
    description: "When you attack from ambush, or from behind, inflict +2 **Harm**.",

    perks: {
      damage: [{
        description: "When you attack from ambush, or from behind, inflict +2 **Harm**.",
        offset: 2,
        apply: false,
      }]
    }
  },
  {
    id: "d08ea9e4-88fb-46d6-975e-1045575a4ea5",
    playbook: "12bc1318-24c7-4402-b9bb-be0698c4ed99", // The Gumshoe
    type: FeatType.Background,
    startingFeat: true,

    name: "Gumshoe Code",
    description: "You adhere to a code that helps you **'Manipulate Someone'**, and protects you from possessions and charms.",
    longDescription: `With the agreement of **The Keeper**, pick a one-sentence **Code** that your Gumshoe adheres to.

This **Code** defines your Gumshoe. Any time you violate your code, you forfeit:
* All **Code**-related **Moves** (**'The Postman Always Rings Twice'**, **'The Long Goodbye'**)
* The ability to spend **Luck** points.

These forfeits last either until the next mystery or until you make amends.

As long as you follow the **Code**, people will sense your sincerity. You gain the following:
* +1 {ongoing} to **'Manipulate Someone'**
* Protection from being possessed or charmed by any sort of supernatural, alien, or demonic entity or item

Examples of Codes:
* Murderers must be punished.
* Monsters must be destroyed.
* Innocents must be saved.
* Laws must be enforced.
* Evil must be exposed.
* The weak must be protected from the powerful.`,

    inputs: [
      { type: InputTypes.Text, name: "code", label: "The Code", placeholder: "The weak must be protected from the powerful." },
      { type: InputTypes.Checks, name: "codeBroken", label: "Code Broken", max: 1, resetPerMystery: true },
    ],

    perks: {
      luck: [{
        description: "If your code is broken, you cannot use luck.",
        showInputs: [ "code", "codeBroken" ]
      }],
      manipulateSomeone: [{
        description: "If your code is unbroken, you have +1 {ongoing}.",
        offset: 1,
        showInputs: [ "code", "codeBroken" ]
      }],
      protections: [{
        description: "If your code is unbroken, you cannot be possessed or charmed by any supernatural, alien, or demonic entity or item.",
        showInputs: [ "code", "codeBroken" ]
      }]
    }
  },
  {
    id: "5464ec99-8e20-4732-8d4d-b46442036ad4",
    playbook: "12bc1318-24c7-4402-b9bb-be0698c4ed99", // The Gumshoe
    type: FeatType.Move,
    startingFeat: true,

    name: "Occult Confidential",
    description: "The first time in each mystery that you observe a monster, minion, or phenomenon in action, you may ask an **'Investigate a Mystery'** question.",

    autoActions: [{
      name: "Occult Confidential",
      description: "The first time in each mystery that you observe a monster, minion, or phenomenon in action, you may ask a question.",
      uses: 1,
      usesResetAtEndOfMystery: true,
      
      longDescription: `The first time in each mystery that you observe a monster, minion, or phenomenon in action, you may ask one of the following questions:
{@investigationQuestions}`,
    }]
  },
  {
    // TODO: This one is kinda odd. You're supposed to pick 4 things, then all abilities, etc. rely on those choices.
    id: "65cadd94-cffe-46a9-be0d-840811627edf",
    playbook: "12bc1318-24c7-4402-b9bb-be0698c4ed99", // The Gumshoe
    type: FeatType.Move,
    startingFeat: true,

    name: "The Naked City",
    description: "You have lots of personal contacts wherever you go. You can hit them up for clues and small favors.",
    longDescription: `You have lots of personal contacts wherever you go.

You can hit up a contact for info (+1 to one **'Investigate a Mystery'** roll) or small favor. There may be a small cost involved.
Personal contacts can provide more significant help. **The Keeper** decides their price on a case-by-case basis.

Pick four contact types from the following areas (or from other areas agreed to between you and the keeper):

Academics, Accountants, Artists, Bartenders, Clergy, Conspiracy Theorists, Construction, Courts, Criminals (organized,)
Criminals (street,) Cultists, Engineers, Espionage, Film and TV, Forensic Scientists, Fringe Scientists,
Hackers, Journalists, Lawyers, Mechanics, Media, Medical Practitioners, Military, Morgue, Occult, Police (local),
Police (national), Politicians, Prisons, Private Security, Property Developers, Stage Magicians, Technologists, Transportation`,

    inputs: [
      { type: InputTypes.Text, name: "contacts", label: "Contact Types", placeholder: "Four types. (E.g. Academics, Clergy, Hackers, etc.)" }
    ],

    perks: {
      investigateAMystery: [{
        description: "You have lots of personal contacts wherever you go. You can hit them up for clues and small favors.",
        showInputs: [ "contacts" ],
      }]
    },
    autoActions: [{
      name: "The Naked City",
      description: "You have lots of personal contacts wherever you go. You can hit them up for clues and small favors.",
      longDescription: `You have lots of personal contacts wherever you go.

You can hit up a contact for info (+1 to one **'Investigate a Mystery'** roll) or small favor. There may be a small cost involved.
Personal contacts can provide more significant help. **The Keeper** decides their price on a case-by-case basis.`,
      showInputs: [ "contacts" ],
    }]
  },
  {
    id: "6104c52f-a784-4f0c-9c7e-366ed0272786",
    playbook: "12bc1318-24c7-4402-b9bb-be0698c4ed99", // The Gumshoe
    type: FeatType.Move,
    startingFeat: false,

    name: "The Postman Always Rings Twice",
    description: "Twice per mystery--as long as you adhere to your **Code**--you may reroll a roll",

    autoActions: [{
      name: "The Postman Always Rings Twice",
      description: "Twice per mystery--as long as you adhere to your **Code**--you may reroll a roll",
      uses: 2,
      usesResetAtEndOfMystery: true,
    }]
  },
  {
    id: "4f8fd245-5c7d-4aec-bfb8-1a916d0774fd",
    playbook: "12bc1318-24c7-4402-b9bb-be0698c4ed99", // The Gumshoe
    type: FeatType.Move,
    startingFeat: false,

    name: "The Long Goodbye",
    description: "You can't die wile you have an open case and an unbroken **Code**.",
    longDescription: `You can't die with an open case __and__ an unbroken Code. You suffer all **Harm**, as normal,
but your death is postponed until you have either completed or abandoned the case, or you break your **Code** (then all bets are off.)`,

    perks: {
      health: [{ description: "You can't die wile you have an open case __and__ an unbroken **Code**." }]
    }
  },
  {
    id: "c5611e67-15b9-481f-887e-8bc776a7459e",
    playbook: "12bc1318-24c7-4402-b9bb-be0698c4ed99", // The Gumshoe
    type: FeatType.Move,
    startingFeat: false,

    name: "Jessica Jones Entry",
    description: "When you double-talk your way into a secure location with **+Charm**.",

    actions: [{
      name: "Jessica Jones Entry",
      // TODO: This reference is dumb. Add a long description to help.
      description: "When you double-talk your way into a secure location with **+Charm**.",
      coreStat: StatEnum.Charm,

      miss: "Pick one:",
      mixedSuccess: "Pick two:",
      solidSuccess: "Pick three:",
      resultFooter: `
* You don't leave any trace of what you searched.
* You find what you wanted.
* You find something else that's important.
* You don't piss anyone off.
* You aren't recognized`,
    }]
  },
  {
    id: "ae903567-50c4-439b-ae69-cf2ca62ee099",
    playbook: "12bc1318-24c7-4402-b9bb-be0698c4ed99", // The Gumshoe
    type: FeatType.Move,
    startingFeat: false,

    name: "Out of the Past",
    description: "A police buddy will do you big favors, but expect something in return.",
    longDescription: `You have a police buddy who will do you big favors.
Get in touch with them when you need to redirect law enforcement attention,
get a heads-up on what operations are planned, or access police files.

You owe them: Expect them to collect it soon.`,
    autoActions: [{
      name: "Out of the Past",
      description: "A police buddy will do you big favors, but expect something in return.",
    }]
  },
  {
    id: "0c3cfd4f-a0a4-45e2-bc14-d7d8ab9b199b",
    playbook: "12bc1318-24c7-4402-b9bb-be0698c4ed99", // The Gumshoe
    type: FeatType.Move,
    startingFeat: false,

    name: "Asphalt Jungle",
    description: "You heal faster than normal people and aren't affected by scuffs and scrapes.",
    longDescription: `You heal faster than normal people. Any time your **Harm** gets healed, heal an extra point.
You are immune to all the harm move effects under '0-harm' and '1-harm' (when **The Keeper** would apply these, ignore it.)

Example 0-Harm and 1-Harm Move Effects you are immune to:
* Momentarily inhibited.
* Drop something.
* Take -1 {forward}.
* Fall down.
* Take -1 {ongoing}.
* Pass out.
* Intense Pain.`,

    perks: {
      health: [{ description: "Any time your **Harm** gets healed, heal an extra point." }],
      protections: [{ description: "You are immune to **Harm Move** effects under '0-harm' and '1-harm'." }],
    }
  },
  {
    id: "86a82955-3477-47da-afd4-209662ebabe6",
    playbook: "12bc1318-24c7-4402-b9bb-be0698c4ed99", // The Gumshoe
    type: FeatType.Move,
    startingFeat: false,

    name: "Hacker with a Dragon Tattoo",
    description: "When you hack into a computer system with **+Sharp**.",

    actions: [{
      name: "Hacker with a Dragon Tattoo",
      description: "When you hack into a computer system with **+Sharp**.",
      coreStat: StatEnum.Sharp,
      miss: "The **Keeper** can make a hard move against you. You likely failed to hack the computer system.",
      mixedSuccess: "Pick one:",
      solidSuccess: "Pick two:",
      successFooter: `
* You leave no traces.
* You learn something important.
* You can leave misinformation in place.
* You gain access to somewhere you want to get into.
`,
    }]
  },
  {
    id: "b47fdf18-3519-4bfa-9418-a31602233cba",
    playbook: "12bc1318-24c7-4402-b9bb-be0698c4ed99", // The Gumshoe
    type: FeatType.Move,
    startingFeat: false,

    name: `"Just one more thing"`,
    description: "When you ask a suspect leading questions with **+Charm**.",

    actions: [{
      name: `"Just one more thing"`,
      description: "When you ask a suspect leading questions with **+Charm**.",
      coreStat: StatEnum.Charm,
      miss: "**Hold** 1, but something bad is going to happen to you...",
      mixedSuccess: "**Hold** 1",
      solidSuccess: "**Hold** 2",
      resultFooter: `You can spend one **Hold** to ask **The Keeper** one of the following questions:
* Was that a lie?
* What is something you left out that you didn't want me to notice?
* Are you complicit with any ongoing criminal activity?
* Did you commit this specific crime?

OR an **'Investigate a Mystery'** Question:
{@investigationQuestions}`
    }]
  },
  {
    id: "9669821e-791a-40b0-b37a-0eecaed69e41",
    playbook: "23bdadbc-b690-4baa-8d96-7c791b4d66da", // The Hex
    type: FeatType.Move,
    startingFeat: true,

    name: "Bad Luck Charm",
    description: "Whenever you fail to **'Use Magic'**, the backlash will never directly affect __you__.",
    longDescription: `Whenever you **'Use Magic'** and miss, the backlash never affects you directly if there's someone else around to hit.
It'll go for allies, other **Hunters**, innocent bystanders, etc. Every so often it may even hit an enemy.`,

    perks: {
      weirdMove: [{ description: "The backlash of a miss will never directly affect you (others on the otherhand...)" }]
    }
  },
  {
    id: "e0e31f7a-8ade-4d4c-9707-0587647427aa",
    playbook: "23bdadbc-b690-4baa-8d96-7c791b4d66da", // The Hex
    type: FeatType.Move,
    startingFeat: false,

    name: "Burn Everything",
    description: "When you **'Use Magic'** to inflict **Harm**, you can choose to inflict 3 Harm in an area or 3 Harm that ignores armor",

    perks: {
      attacks: [
        {
          name: "Burn Everything",
          description: "When you **'Use Magic'** to inflict **Harm**, you can choose to inflict 3 Harm in an area",
          base: 3,
          tags: [ "3-Harm", "area", "magic", "obvious" ]
        },
        {
          name: "Burn Everything",
          description: "When you **'Use Magic'** to inflict **Harm**, you can choose to inflict 3 Harm that ignores armor",
          base: 3,
          tags: [ "3-Harm", "ignore-armor", "magic", "obvious" ]
        },
      ],
      useMagic: [{
        description: "When you **'Use Magic'** to inflict **Harm**, you can choose to inflict [`#3-Harm` `#area` `#magic` `#obvious`] or [`#3-Harm` `#ignore-armor` `#magic` `#obvious`]",
      }]
    }
  },
  {
    id: "237fa70b-094e-4fd4-9919-581d82acc23d",
    playbook: "23bdadbc-b690-4baa-8d96-7c791b4d66da", // The Hex
    type: FeatType.Move,
    startingFeat: false,

    name: "Cast the Bones",
    description: "Once per **Mystery**, you may perform a kind of divination to see the future using **+Sharp**.",
    longDescription: `Once per **Mystery**, you may perform some kind of divination (tarot, casting runes, reading entrails, etc.) to glean information about the future.`,

    actions: [{
      name: "Cast the Bones",
      description: "Once per **Mystery**, you can perform a kind of divination to see the future.",
      longDescription: `Once per **Mystery**, you may perform some kind of divination (tarot, casting runes, reading entrails, etc.) to glean information about the future.`,

      coreStat: StatEnum.Sharp,

      miss: "You get some information, but it's not what you wanted to hear.",
      mixedSuccess: "**Hold** 1",
      solidSuccess: "**Hold** 2",
      successFooter: `You can spend one **Hold** to ask **The Keeper** one of the following questions.
**The Keeper** will answer truthfully, with either a direct answer or how to find out:
* What can I gain from this person/place/thing/creature?
* Who has touched this person/place/thing/creature before me?

You can also ask questions from the **'Investigate a Mystery'** list:
{@investigationQuestions}`,

      uses: 1,
      usesResetAtEndOfMystery: true,
    }]
  },
  {
    id: "9958712b-55a4-48fd-a9d5-c519bdf6a444",
    playbook: "23bdadbc-b690-4baa-8d96-7c791b4d66da", // The Hex
    type: FeatType.Move,
    startingFeat: false,

    name: "Force of Will",
    description: "Apply your will into dispelling a magical effect, blocking a spell, or suspending a phenomenon using **+Weird**.",

    actions: [{
      name: "Force of Will",
      description: "Apply your will into dispelling a magical effect, blocking a spell, or suspending a phenomenon using **+Weird**.",
      coreStat: StatEnum.Weird,
      miss: "The **Keeper** can make a hard move against you. You likely failed at dispelling the target.",
      successHeader: `Momentary magics are canceled completely. Long lasting spells and effects are suspended temporarily.`,
      mixedSuccess: "Unfortunately, you take 1 **Harm** as the strain of dismissing the magic unravels you.",
      solidSuccess: "You can also spend **Luck** to instantly snuff out a powerful spell or strange effect.",
    }]
  },
  {
    id: "50864b4a-29c9-4dfc-86f2-cf11f2883296",
    playbook: "23bdadbc-b690-4baa-8d96-7c791b4d66da", // The Hex
    type: FeatType.Move,
    startingFeat: false,

    name: "Luck of the Damned",
    description: "After you **'Use Magic'** or cast a **Rote**, take +1 {forward} on the next roll you make.",

    perks: { useMagic: [{ description: "After you **'Use Magic'** or cast a **Rote**, take +1 {forward} on the next roll you make." }] }
    // TODO: Bonus to all rolls everywhere?
  },
  {
    id: "15f9c6e4-67a5-43f0-9bf1-89c94a205400",
    playbook: "23bdadbc-b690-4baa-8d96-7c791b4d66da", // The Hex
    type: FeatType.Move,
    startingFeat: false,

    name: "Sympathetic Token",
    description: "While carrying a token from someone, you gain +1 {ongoing} to **'Use Magic'** to target them and you can target them distance. Token is lost on a miss.",
    longDescription: `As long as you carry a personal object belonging to someone, such as a lock of hair, a full set of toenails, or a treasured family heirloom,
you get +1 {ongoing} to **'Use Magic'** against them. You can also **'Use Magic'** against them from a distance.
If you try to **'Use Magic'** against them and miss, the token is lost, destroyed, or loses its power.`,
    
    perks: { useMagic: [{ description: "While carrying a token from someone, you gain +1 {ongoing} when targeting them and you can target them distance. Token is lost on a miss." }] }
  },
  {
    id: "b8635e43-5b46-4a26-a39e-ed33dbe13b14",
    playbook: "23bdadbc-b690-4baa-8d96-7c791b4d66da", // The Hex
    type: FeatType.Move,
    startingFeat: false,

    name: "This Might String",
    description: "You can **'Use Magic'** to heal 3 **Harm**, but the process is exceptionally painful. On a [7..9] it also leaves a gnarly scar.",

    perks: { useMagic: [{ description: "You can heal 3 **Harm**, but the process is exceptionally painful. On a [7..9] it also leaves a gnarly scar.", }] }
  },
  {
    id: "6632c6fd-082d-425d-9f16-aeb87ecc2809",
    playbook: "23bdadbc-b690-4baa-8d96-7c791b4d66da", // The Hex
    type: FeatType.Move,
    startingFeat: false,

    name: "Wise Soul",
    description: "Whenever you **'Use Magic'**, you can get a glimpse of of the worst result and back out before the roll.",
    longDescription: `Whenever you **'Use Magic'**, right before you roll, you can ask **The Keeper** what exactly would happen on a miss.
If you dislike the risk, you can stop casting at the last second and let the spell fizzle harmlessly. All effort is wasted.`,

    perks: { useMagic: [{ description: "Before you roll, you can ask what would happen on a miss and decide to end the spell before it is rolled.", }] }
  },
  {
    id: "96ee3021-d46d-42b6-8b77-8aeea00288d4",
    playbook: "a78c7ee1-eb8d-4622-adeb-22d9d87169b5", // The Initiate
    type: FeatType.Move,
    startingFeat: true,

    name: "The Call",
    description: "While in good standing with your **Sect**, roll for help (and possibly a mission) at the start of each **Mystery** using **+Charm**.",

    inputs: [
      { type: InputTypes.TextArea, name: "mission", label: "Mission", placeholder: "Protect the boy" },
      { type: InputTypes.Checks, name: "failed", label: "Failed", max: 1 },
    ],
    
    actions: [{
      name: "The Call",
      description: "While in good standing with your **Sect**, roll for help at the start of each **Mystery**.",
      coreStat: StatEnum.Charm,
      miss: "They ask you to do something bad.",
      mixedSuccess: "You get a mission associated with the coming **Mystery**. If you do it, they'll give you some info or help.",
      solidSuccess: "They provide some useful info or help in the field.",
      resultFooter: "If you fail a mission or refuse an order, you'll be in trouble with the **Sect** until you atone.",
      startOfMystery: true,
    }]
  },
  {
    id: "ce09e84b-504e-447e-a3d5-bbfe71c0e84c",
    playbook: "a78c7ee1-eb8d-4622-adeb-22d9d87169b5", // The Initiate
    type: FeatType.Move,
    startingFeat: false,

    name: "Ancient Fighting Arts",
    description: "When using an old-fashioned `#hand` weapon, you inflict +1 **Harm** and gain a +1 whenever you roll to **'Protect Someone'**.",

    perks: {
      damage: [{
        description: "When using an old-fashioned `#hand` weapon, you inflict +1 **Harm**.",
        offset: 1,
        apply: false,
      }],
      protectSomeone: [{
        description: "When using an old-fashioned `#hand` weapon, you gain a +1 whenever you roll to **'Protect Someone'**.",
        offset: 1,
      }]
    }
  },
  {
    id: "6d558030-3af3-47d7-aca6-1011403dbbc4",
    playbook: "a78c7ee1-eb8d-4622-adeb-22d9d87169b5", // The Initiate
    type: FeatType.Move,
    startingFeat: false,

    name: "Mystic",
    description: "Every time you successfully **'Use Magic'**, take +1 {forward}",

    perks: { allMoves: [{ description: "Every time you successfully **'Use Magic'**, take +1 {forward}" }] }
  },
  {
    id: "1e12c3e8-cdcb-47c6-b23d-31e9051e9969",
    playbook: "a78c7ee1-eb8d-4622-adeb-22d9d87169b5", // The Initiate
    type: FeatType.Move,
    startingFeat: false,

    name: "Fortunes",
    description: "Weird Move: Use Sect secrets to predict the future once per mystery.",

    actions: [{
      name: "Fortunes",
      description: "Use Sect secrets to predict the future once per mystery.",
      coreStat: StatEnum.Weird,
      miss: "You get bad information and **The Keeper** decides how that affects you.",
      mixedSuccess: "**Hold** 1",
      solidSuccess: "**Hold** 3",
      successFooter: `Spend your **Hold** to:
* Have a useful object ready.
* Be somewhere you are needed, just in time.
* Take +1 {forward}, or give +1 {forward} to another **Hunter**.
* Retroactively warn someone about an attack, so it doesn't happen.`,
    }]
  },
  {
    id: "13b1c4d5-b513-421f-bf16-61a9093fe62b",
    playbook: "a78c7ee1-eb8d-4622-adeb-22d9d87169b5", // The Initiate
    type: FeatType.Move,
    startingFeat: false,

    name: "Sacred Oath",
    description: "",
    longDescription: `You may bind yourself to a single goal, forsaking something during your quest
(e.g. speech, all sustenance but bread and water, alcohol, lying, sex, etc).
Get the Keeper's agreement on this--it should match the goal in importance and difficulty.
While you keep your oath and work towards your goal,
mark **Experience** at the end of every session and get +1 on any rolls that directly help achieve the goal.
If you break the oath, take -1 {ongoing} until you have atoned.`,

    inputs: [
      { type: InputTypes.Text, name: "oathGoal", label: "Oath Goal", placeholder: "Kill Dracula" },
      { type: InputTypes.Text, name: "oathSacrifice", label: "Oath Sacrifice", placeholder: "Eat not but bread and water." },
      { type: InputTypes.Checks, name: "oathBroken", label: "Oath Broken", max: 1 }
    ],

    perks: {
      allMoves: [
        {
          description: "While your Oath is intact, get +1 to any roll that directly helps you achieve your goal.",
          offset: 1,
          // Oath details show in next item
        },{
          description: "If your Oath is broken, take -1 {ongoing} until you atone.",
          offset: -1,
          showInputs: [ "oathGoal", "oathSacrifice", "oathBroken" ]
        }
      ],
      endOfSession: [{
        description: "While your Oath is intact and you are working toward your goal, take +1 **Experience** at the end of each session.",
        showInputs: [ "oathGoal", "oathSacrifice", "oathBroken" ]
      }],
    }
  },
  {
    id: "dea250ab-6c99-4b41-b732-16e2671d010a",
    playbook: "a78c7ee1-eb8d-4622-adeb-22d9d87169b5", // The Initiate
    type: FeatType.Move,
    startingFeat: false,

    name: "Mentor",
    description: "Sharp Move: Contact your mentor in the Sect for information.",

    inputs: [
      { type: InputTypes.Text, name: "mentor", label: "Mentor's Name", placeholder: "Atticus Greymore III" },
      { type: InputTypes.TextArea, name: "mentorDescription", label: "Mentor Description", placeholder: "Summary, Note, etc." }
    ],

    actions: [{
      name: "Mentor",
      description: `Contact your mentor in the Sect for information.`,
      coreStat: StatEnum.Sharp,
      miss: "Your question causes trouble.",
      mixedSuccess: "Choose: They're either busy and can't help --OR-- They answer the question but you owe them a favour.",
      solidSuccess: "You get an answer to your question, no problem.",
    }]
  },
  {
    id: "bf7257f4-7422-4a9d-8361-1169e3ecf467",
    playbook: "a78c7ee1-eb8d-4622-adeb-22d9d87169b5", // The Initiate
    type: FeatType.Move,
    startingFeat: false,

    name: "Apprentice",
    description: "You have an apprentice. Your job is to teach them the Sect's ways. They count as a {@ally/subordinate}.",
    
    inputs: [{ type: InputTypes.Ally, name: "apprentice", label: "Apprentice", startingAllyType: AllyType.Subordinate }],

    perks: {
      social: [{
        description: "You have an apprentice. Your job is to teach them the Sect's ways.",
        showInputs: [ "apprentice" ]
      }]
    }
  },
  {
    id: "b41a4186-7467-46a0-8d5e-17e7ec4ceda1",
    playbook: "a78c7ee1-eb8d-4622-adeb-22d9d87169b5", // The Initiate
    type: FeatType.Move,
    startingFeat: false,

    name: "Helping Hand",
    description: "When you successfully **'Help Out'** another **Hunter**, they get +2 instead of the usual +1.",

    perks: {
      helpOut: [{
        description: "When you successfully **'Help Out'** another **Hunter**, they get +2 instead of the usual +1.",
        offset: 1,
      }],
    }
  },
  {
    id: "01d31b85-9d83-4c02-ac6a-c3b75ad0f9d8",
    playbook: "a78c7ee1-eb8d-4622-adeb-22d9d87169b5", // The Initiate
    type: FeatType.Move,
    startingFeat: false,

    name: "That Old Black Magic",
    description: "When you **'Use Magic'**, you can ask a question from the **Investigate a Mystery** move as your effect.",

    perks: {
      useMagic: [{
        description: "When you **'Use Magic'**, you can ask a question from the **Investigate a Mystery** move as your effect.",
        successHeader2: `Using **'That Old Black Magic'**, you can also ask one of these questions as an effect:
{@investigationQuestions}`,
      }]
    }
  },
  {
    id: "56ad962b-c655-43f7-b241-c0546efb0566",
    playbook: "a5f796af-dd20-4ee0-8920-18b80e20ec24", // The Monstrous
    type: FeatType.Move,
    startingFeat: false,

    name: "Immortal",
    description: "You do not age or sicken, and whenever you suffer **Harm**, you suffer 1 less **Harm**.",

    perks: {
      protections: [{ description: "You do not age or sicken." }],
      armor: [{ description: "Whenever you suffer **Harm**, you suffer 1 less **Harm**.", offset: 1, apply: true }],
    }
  },
  {
    id: "bd27946f-1430-4cca-9715-1cd349374aea",
    playbook: "a5f796af-dd20-4ee0-8920-18b80e20ec24", // The Monstrous
    type: FeatType.Move,
    startingFeat: false,

    name: "Unnatural Appeal",
    description: "Roll **+Weird** instead of **+Charm** when you **'Manipulate Someone'**.",

    perks: {
      // TODO: We don't need a description for this. Maybe its time to split those types.
      manipulateSomeone: [{ description: "Roll **+Weird** instead of **+Charm** when you **'Manipulate Someone'**.", alternateStat: StatEnum.Weird }]
    }
  },
  {
    id: "9a3bddb6-d4a7-43b5-b213-745666aaf772",
    playbook: "a5f796af-dd20-4ee0-8920-18b80e20ec24", // The Monstrous
    type: FeatType.Move,
    startingFeat: false,

    name: "Unholy Strength",
    description: "When you **'Kick Some Ass'**, roll **+Weird** instead of **+Tough**.",
    
    perks: {
      kickSomeAss: [{ description: "\"When you **'Kick Some Ass'**, roll **+Weird** instead of **+Tough**.\"", alternateStat: StatEnum.Weird }]
    }
  },
  {
    id: "801dd250-a87b-458a-a0db-ed767bca546b",
    playbook: "a5f796af-dd20-4ee0-8920-18b80e20ec24", // The Monstrous
    type: FeatType.Move,
    startingFeat: false,

    name: "Incorporeal",
    description: "You may move freely through solid objects (but not people.)",
    
    autoActions: [{
      name: "Incorporeal",
      description: "You may move freely through solid objects (but not people.)",
    }]
  },
  {
    id: "dbd58c57-657e-4895-8242-4880e32ee321",
    playbook: "a5f796af-dd20-4ee0-8920-18b80e20ec24", // The Monstrous
    type: FeatType.Move,
    startingFeat: false,

    name: "Preternatural Speed",
    description: "You go much faster than normal people. When you chase, flee, or run, take +1 {ongoing}",
    
    perks: {
      allMoves: [{
        description: "When you chase, flee, or run, take +1 {ongoing}. You go much faster than normal people.",
        offset: 1,
      }]
    }
  },
  {
    id: "2a1580ad-5567-4c5c-8617-1922243bdfc9",
    playbook: "a5f796af-dd20-4ee0-8920-18b80e20ec24", // The Monstrous
    type: FeatType.Move,
    startingFeat: false,

    name: "Claws of the Beast",
    description: "All your natural attacks get +1 **Harm**",
    
    perks: { damage: [{ description: "All your natural attacks get +1 **Harm**", offset: 1, apply: false }] }
  },
  {
    id: "f1076b20-3125-486f-a2d8-d091f552b267",
    playbook: "a5f796af-dd20-4ee0-8920-18b80e20ec24", // The Monstrous
    type: FeatType.Move,
    startingFeat: false,

    name: "Mental Domination",
    description: `Charm Move: When you gaze into a normal human’s eyes and exert your will over them.`,
    
    actions: [{
      name: "Mental Domination",
      description: `When you gaze into a normal human’s eyes and exert your will over them, giving them orders to obey.`,
      coreStat: StatEnum.Charm,
      miss: "**The Keeper** can make a hard move against you. You likely failed to gain any control over them.",
      mixedSuccess: "**Hold** 1",
      solidSuccess: "**Hold** 3",
      successFooter: `You may spend your **Hold** to give the target an order. Regular people will follow your order, whatever it is.
Hunters can choose whether they do it or not. If they do, they mark **Experience**.`
    }],
  },
  {
    id: "1ff4e38a-867f-4564-baa9-6e676c6d75ed",
    playbook: "a5f796af-dd20-4ee0-8920-18b80e20ec24", // The Monstrous
    type: FeatType.Move,
    startingFeat: false,

    name: "Unquenchable vitality",
    description: "Cool Move: When you have taken **Harm**, you can heal yourself.",
    
    actions: [{
      name: "Unquenchable vitality",
      description: "Cool Move: When you have taken **Harm**, you can heal yourself.",
      coreStat: StatEnum.Cool,
      miss: "Your injuries worsen.",
      mixedSuccess: "Heal 1 **Harm** and stabilise your injuries.",
      solidSuccess: "Heal 2 **Harm** and stabilise your injuries.",
    }]
  },
  {
    id: "6a9dc239-37d1-468f-82b4-97c62a9f9404",
    playbook: "a5f796af-dd20-4ee0-8920-18b80e20ec24", // The Monstrous
    type: FeatType.Move,
    startingFeat: false,

    name: "Dark Negotiator",
    description: "You can use the **'Manipulate Someone'** move on monsters as well as people, if they can reason and talk",

    perks: {
      manipulateSomeone: [{
        description: "You can manipulate monsters as well as people, if they can reason and talk",
      }],
    }
  },
  {
    id: "26130600-3c03-4b42-8b7b-e99c071fa454",
    playbook: "a5f796af-dd20-4ee0-8920-18b80e20ec24", // The Monstrous
    type: FeatType.Move,
    startingFeat: false,

    name: "Flight",
    description: "You can fly",

    autoActions: [{
      name: "Flight",
      description: "You can fly",
    }],
  },
  {
    id: "3fa06789-e37f-4d34-9816-e4d373bfbe51",
    playbook: "a5f796af-dd20-4ee0-8920-18b80e20ec24", // The Monstrous
    type: FeatType.Move,
    startingFeat: false,

    name: "Shapeshifter",
    description: "You may change your form (usually into an animal) for a bonus to **'Investigate a Mystery'**.",
    longDescription: `You may change your form (usually into an animal.) Decide if you have on alternate form or several, and detail them.
You gain +1 to **'Investigate a Mystery'** when using an alternate form's superior senses (e.g. smell of a wolf, sight of an eagle, etc.)`,
    
    inputs: [
      { type: InputTypes.Text, name: "shapes", label: "Shape(s)", placeholder: "wolf, eagle, etc." },
    ],

    autoActions: [{
      name: "Shapeshift",
      description: "Change into one of your alternate forms.",
      showInputs: [ "shapes" ],
    }],
    perks: {
      investigateAMystery: [{
        description: "While in one of your alternate form's superior senses, you gain +1 to **'Investigate a Mystery'**.",
        offset: 1,
        showInputs: [ "shapes" ],
      }]
    },
  },
  {
    id: "6e9cd55e-50ff-4bb8-b03c-8e1fa9f72632",
    playbook: "a5f796af-dd20-4ee0-8920-18b80e20ec24", // The Monstrous
    type: FeatType.Move,
    startingFeat: false,

    name: "Something Borrowed",
    description: "Take a move from another **Hunter Playbook** that is not currently in play.",

    borrowMove: 1,
  },
  {
    id: "2b55c1b5-c8a2-4941-ba72-b320ebf69ff8",
    playbook: "b03c7fb1-9ce4-4cba-a527-6c1380ac5de0", // The Mundane
    type: FeatType.Move,
    startingFeat: false,

    name: "Always the Victim",
    description: "When a **Hunter** protects you, they mark **Experience**. When you get captured, you mark **Experience**.",
    longDescription: `When another **Hunter** uses **'Protect Someone'** to protect you, they mark **Experience**.
Whenever a monster captures you, you mark **Experience**.`,

    perks: {
      experience: [{ description: "When a monster captures you, you mark **Experience**." }],
      protections: [{ description: "When another **Hunter** uses **'Protect Someone'** to protect you, they mark **Experience**." }],
    }
  },
  {
    id: "bc97a6b5-e697-416e-8d29-c635dab08fe0",
    playbook: "b03c7fb1-9ce4-4cba-a527-6c1380ac5de0", // The Mundane
    type: FeatType.Move,
    startingFeat: false,

    name: "Oops!",
    description: "Stumble across something important or useful.",
    longDescription: `If you want to stumble across something important, tell the Keeper.
You will find something important and useful, although not necessarily related to your immediate problems.`,

    autoActions: [{
      name: "Oops!",
      description: "Stumble across something important or useful.",
      longDescription: `If you want to stumble across something important, tell the Keeper.
You will find something important and useful, although not necessarily related to your immediate problems.`,
    }],
  },
  {
    id: "b58eb47e-4bf7-40f8-b6c5-64274b47a99a",
    playbook: "b03c7fb1-9ce4-4cba-a527-6c1380ac5de0", // The Mundane
    type: FeatType.Move,
    startingFeat: false,

    name: "Let's Get Out Of Here!",
    description: `If you can **'Protect Someone'** by telling them what to do, or by leading them out, roll +Charm instead of +Tough.`,
    
    perks: {
      protectSomeone: [{
        description: `If you can **'Protect Someone'** by telling them what to do, or by leading them out, roll +Charm instead.`,
        alternateStat: StatEnum.Charm,
      }]
    }
  },
  {
    id: "541a73ef-cdea-4244-b9ba-d705d260cfed",
    playbook: "b03c7fb1-9ce4-4cba-a527-6c1380ac5de0", // The Mundane
    type: FeatType.Move,
    startingFeat: false,

    name: "Panic Button",
    description: "Sharp Move: When you need to escape, name the route you’ll try.",

    actions: [{
      name: "Panic Button",
      description: "Sharp Move: When you need to escape, name the route you’ll try.",
      coreStat: StatEnum.Sharp,
      miss: "You are caught halfway out",
      mixedSuccess: `You can go or stay, but if you go, it's going to cost you
(you leave something behind or something comes with you.)`,
      solidSuccess: "You're out of danger, no problem.",
    }],
  },
  {
    id: "318f4157-277f-4056-8d54-50bfac3c7349",
    playbook: "b03c7fb1-9ce4-4cba-a527-6c1380ac5de0", // The Mundane
    type: FeatType.Move,
    startingFeat: false,

    name: "The Power of Heart",
    description: "When fighting a monster, if you **'Help Out'**, you can automatically succeed.",
    description: "When fighting a monster, if you **'Help Out'**, you can skip rolling **+Cool** to automatically help as though you rolled a 10.",

    perks: {
      helpOut: [{
        description: "When fighting a monster, you can skip rolling to automatically help as if you rolled a 10 (grant a +1 to ally's roll).",
      }]
    },
  },
  {
    id: "01dee0d8-76fd-42bb-b9ac-058a40b5fb3a",
    playbook: "b03c7fb1-9ce4-4cba-a527-6c1380ac5de0", // The Mundane
    type: FeatType.Move,
    startingFeat: false,

    name: "Trust Me",
    description: "Charm Move: When you try to protect someone from danger by telling them the truth and what to do.",

    actions: [{
      name: "Trust Me",
      description: "When you try to protect someone from danger by telling them the truth and what to do.",
      coreStat: StatEnum.Charm,
      miss: "They think you're crazy or maybe dangerous too.",
      mixedSuccess: `They will do what you say they should, but **The Keeper** chooses one from:
* They ask you a hard question first.
* They stall and dither a while.
* They have a "better" idea.`,
      solidSuccess: "They will do what you say they should, no questions asked.",
    }],
  },
  {
    id: "8e961dc1-d6b7-429e-8898-389c415b43f3",
    playbook: "b03c7fb1-9ce4-4cba-a527-6c1380ac5de0", // The Mundane
    type: FeatType.Move,
    startingFeat: false,

    name: "What Could Go Wrong?",
    description: "Whenever you charge into immediate danger without hedging your bets, **Hold 2**.",
    
    inputs: [ { type: InputTypes.Checks, name: "hold", label: "WCGW? Holds", max: 2 } ],

    autoActions: [{
      name: "What Could Go Wrong?",
      description: "Whenever you **charge into immediate danger** without hedging your bets, **Hold** 2.",
      longDescription: `Whenever you charge into immediate danger without hedging your bets, **Hold** 2.

You may spend your **Hold** to:
* Inflict +1 **Harm**.
* Reduce someone's **Harm** suffered by 1.
* Take +2 {forward} on an **'Act Under Pressure'** roll.`,
      showInputs: [ 'hold' ]
    }],
    perks: {
      damage: [{ description: "Spend 1 **Hold** to inflict +1 **Harm**.", offset: 1, apply: false, showInputs: [ "hold" ] }],
      actUnderPressure: [{ description: "Spend 1 **Hold** to gain +2.", offset: +2, showInputs: [ "hold" ] }],
      armor: [{ description: "Spend 1 **Hold** to reduce __someone else's__ harm by 1.", offset: 0, apply: false, showInputs: [ "hold" ] }],
    }
  },
  {
    id: "349e9759-969b-48cc-8445-4cd66b28895f",
    playbook: "b03c7fb1-9ce4-4cba-a527-6c1380ac5de0", // The Mundane
    type: FeatType.Move,
    startingFeat: false,

    name: "Don't Worry, I'll Check It Out",
    description: "Whenever you **go off by yourself**, to check out somewhere (or something) scary, mark **Experience**.",

    perks: {
      experience: [{
        description: "Whenever you **go off by yourself**, to check out somewhere (or something) scary.",
      }]
    },
  },
//   {
//     id: "bb4e925c-35f6-40a9-9734-033baa4e8c40",
//     playbook: "b33ce99a-73e9-4f15-8314-ac80bf0819d1", // The Pararomantic
//     type: FeatType.Move,
//     startingFeat: false,
//
//     name: "Supernatural Guide",
//     description: "You have a (most likely intimate) connection to a being who is your **Guide**.",
//     longDescription: `You have a (most likely intimate) connection to some supernatural being who is your **Guide** into
// the world beyond. Choose if your relationship is secret or not.
//
// Determine what kind of creature your **Guide** is and how your relationship works. Say what kind of power they possess.
// **The Keeper** will decide how it works and define your **Guide** as a **Threat**.
//
// If your **Guide** is another hunter, determine together how your relationship works.
//
// Whenever you would roll **+Weird** you can roll **+Charm** instead, by channeling the power of your bond.
// When you do so and miss, in addition to the usual consequences, you and your **Guide** suffer. **The Keeper** chooses two of the following:
// * Mark off a box of your **Relationship Status**.
// * You become **Bond Blocked**. You may not channel the power of your bond for the rest of the **Mystery**.
// * You gain the unwelcome attention of others of your **Guide**'s kind.
// * Someone who shouldn't know finds a clue about your relationship with your **Guide**.`,
//    
//     inputs: {
//       relationship: { type: InputTypes.Checks, label: "Relationship Status", max: 7 },
//       bondBlocked: { type: InputTypes.Checks, label: "Bond Blocked", max: 1, resetPerMystery: true },
//       guideName: { type: InputTypes.Text, label: "Guide Name", placeholder: "The Forgotten" },
//       guideDetails: { type: InputTypes.TextArea, label: "Guide Details", placeholder: "Being type and powers and such." }
//     },
//    
//     perks: {
//       allWeirdMoves: [{
//         description: "Channel your **Guide** through the power of your **Bond**.",
//         alternateStat: StatEnum.Charm,
//         showInputs: [ "bondLocked" ],
//         miss2: `If you channeled your **Guide** to roll **Charm** instead of **Weird**, you and your **Guide** also suffer. **The Keeper** chooses two of the following:
// * Mark off a box of your **Relationship Status**.
// * You become **Bond Blocked**. You may not channel the power of your bond for the rest of the **Mystery**.
// * You gain the unwelcome attention of others of your **Guide**'s kind.
// * Someone who shouldn't know finds a clue about your relationship with your **Guide**.`,
//       }]
//     },
//   },
  {
    id: "2a436e16-6633-4b05-a133-9b971d007bee",
    playbook: "58924c0d-c015-4fcd-8fd9-ca75f12fd019", // The Professional
    type: FeatType.Move,
    startingFeat: true,

    name: "Deal With The Agency",
    description: "Sharp Move: When you deal with the Agency, requesting help or gear, or making excuses for a failure.",
    longDescription: `When you deal with the Agency, requesting help or gear, or making excuses for a failure, roll +Sharp.
You may bet help or forgiveness, or they may put you in the proverbial doghouse.`,

    actions: [{
      name: "Deal With The Agency",
      description: "When you deal with the Agency, requesting help or gear, or making excuses for a failure.",
      coreStat: StatEnum.Sharp,
      miss: "You screwed up: You might be suspended or under investigation, or just in the doghouse. You certainly aren't getting any help until you sort it all out.",
      mixedSuccess: "Things aren’t so great. You might get chewed out by your superiors and there’ll be fallout, but you get what you need for the job.",
      solidSuccess: "You’re good--your request for gear or personnel is okayed, or your slip-up goes unnoticed.",
    }],
  },
  {
    id: "a014068d-fb29-4d4d-a221-ef9804aceb32",
    playbook: "58924c0d-c015-4fcd-8fd9-ca75f12fd019", // The Professional
    type: FeatType.Move,
    startingFeat: false,

    name: "Bottle It Up",
    description: "You can take a bonus to **'Act Under Pressure'** that will come back later.",
    longDescription: `If you want, you can take up to a +3 bonus when you **'Act Under Pressure'**.
For each +1 you use, **The Keeper** **Holds** 1. That **Hold** can be spent later--one to one--to give you
-1 on any move __except__ **'Act Under Pressure'**.`,

    inputs: [ { type: InputTypes.Checks, name: "keeperHolds", label: "Keeper's Holds", max: 3 } ],
    
    perks: {
      actUnderPressure: [
        { description: "You can take +1. **The Keeper** gets 1 **Hold**.", offset: 1 },
        { description: "You can take +2. **The Keeper** gets 2 **Hold**.", offset: 2 },
        { description: "You can take +3. **The Keeper** gets 3 **Hold**.", offset: 3, showInputs: [ "keeperHolds" ] }
      ],
      allMoves: [{ description: "**The Keeper** may spend 1 **Hold** to impose a -1 to any move except **'Act Under Pressure'**", showInputs: [ "keeperHolds" ] }],
    }
  },
  {
    id: "027a8b33-7347-4f44-9d67-b5aa5d2d28c6",
    playbook: "58924c0d-c015-4fcd-8fd9-ca75f12fd019", // The Professional
    type: FeatType.Move,
    startingFeat: false,

    name: "Unfazeable",
    description: "Take +1 Cool (max +3)",

    perks: { cool: { bonus: 1, max: 3 } },
  },
  {
    id: "b161d4ff-c1e7-4af0-852a-51f17e6f69e3",
    playbook: "58924c0d-c015-4fcd-8fd9-ca75f12fd019", // The Professional
    type: FeatType.Move,
    startingFeat: false,

    name: "Battlefield Awareness",
    description: "Your awareness gives you +1 Armor (max 2-armor) on top of whatever you get from your gear.",
    longDescription: `You always know what's happening around you, and what to watch out for.
Take +1 Armor (max 2 armor) on top of whatever you get from your gear.`,
    
    perks: {
      armor: [{
        description: "Your awareness gives you +1 Armor on top of whatever you get from your gear (max 2-armor.)",
        offset: 1,
        max: 2,
        apply: true,
      }],
    },
  },
  {
    id: "3f5f986c-8fca-42b8-87ef-607c9d23a7d8",
    playbook: "58924c0d-c015-4fcd-8fd9-ca75f12fd019", // The Professional
    type: FeatType.Move,
    startingFeat: false,

    name: "Leave No One Behind",
    description: "Sharp Move: In combat, you can **help someone escape**.",

    actions: [{
      name: "Leave No One Behind",
      description: "In combat, you can **help someone escape**.",
      coreStat: StatEnum.Sharp,
      miss: "You fail to get them out and you've attracted hostile attention.",
      mixedSuccess: "You can either get them out or suffer no harm, you choose.",
      solidSuccess: "You get them out clean.",
    }],
  },
  {
    id: "b146eabd-6312-4b77-b30a-e07a7a1a94db",
    playbook: "58924c0d-c015-4fcd-8fd9-ca75f12fd019", // The Professional
    type: FeatType.Move,
    startingFeat: false,

    name: "Tactical Genius",
    description: "When you **'Read a Bad Situation'**, you can roll **+Cool** instead of **+Sharp**.",

    perks: {
      readABadSituation: [{
        description: "When you **'Read a Bad Situation'**, you can roll **+Cool** instead of **+Sharp**.",
        alternateStat: StatEnum.Cool,
      }]
    }
  },
  {
    id: "b559c100-ab23-46bf-9bd7-2f620fc2bf01",
    playbook: "58924c0d-c015-4fcd-8fd9-ca75f12fd019", // The Professional
    type: FeatType.Move,
    startingFeat: false,

    name: "Medic",
    description: "Cool Move: You have a full first aid kit, and the training to heal people.",

    actions: [{
      name: "Medic",
      description: "You have a full first aid kit, and the training to heal people.",
      coreStat: StatEnum.Cool,
      miss: "You cause an extra 1 **Harm**.",
      mixedSuccess: "Choose one: heal 2 **Harm** --OR-- **Stabilize** the injury.",
      solidSuccess: "The patient is **Stabilized** and healed of 2 **Harm**.",
    }],
  },
  {
    id: "820c1ce2-8bd4-4b6c-a5c1-982841d5ea0a",
    playbook: "58924c0d-c015-4fcd-8fd9-ca75f12fd019", // The Professional
    type: FeatType.Move,
    startingFeat: false,

    name: "Mobility",
    description: "You have a vehicle built for monster hunting.",
    longDescription: `You have a truck, van, or car built for monster hunting.
Choose two good things and one bad thing about it (two good tags and one bad tag.)`,
    
    vehicles: [{ description: "A truck, van, or car built for monster hunting." }]
  },
  {
    id: "38c1e7f2-ecf9-4b57-8138-4acbbbaf0a16",
    playbook: "f7b73a9a-6447-42f8-b373-b71341bdad99", // The Searcher
    type: FeatType.Move,
    startingFeat: true,

    name: "First Encounter",
    description: "You experienced one strange event that started your journey and unlocked a new capability for you.",
    descriptionPattern: "You first encountered {sighting}, which started your journey and unlocked a new ability.",
    longDescription: `One strange event started you down this path, sparking your need to discover the truth behind
the unexplained. Decide what that event was: pick a category and take the associated move.
Then tell everyone what happened to you (or someone close to you.)

Encounter Options:
* Cryptid Sighting: You take note of any reports of strange creatures. Whenever you first see a new type of creature, you may immediately ask one of the investigate a mystery questions.
* Zone of Strangeness: Things are not fixed. You never need act under pressure when supernatural forces alter the environment around you, and you get 2-armour against harm from sudden changes to the laws of physics.
* Psychic Event: Your mind is awakened. You may act under pressure to use the sensitive weird move, or—if sensitive is your weird move—empath.
* Higher power: Something looks out for you. You start with an extra Luck.
* Strange Dangers: You are always watching for hazards. When you have no armour, you still count as having 1-armour.
* Abduction: They taught you hidden knowledge. Gain +1 to any move when you research strange or ancient secrets to do it.
* Cosmic Insight: You have encompassed the soul of the universe. You never need to act under pressure due to feelings of fear, despair, or isolation.`,
    
    choose: 1,
    choices: [
      {
        id: "f79e8746-f32d-46b5-8ff1-a99736816b14",
        name: "Cryptid Sighting",
        variables: { sighting: "A Cryptid" },
        autoActions: [{
          name: "Cryptid Sighting",
          description: "Whenever you first see a new type of creature, ask an **'Investigate a Mystery'** questions.",
          longDescription: `You take note of any reports of strange creatures.
Whenever you first see a new type of creature, you may immediately ask one of the investigate a mystery questions.

{@investigationQuestions}`,
        }]
      },
      {
        id: "31b74c1e-c52a-4795-a847-f59fcb4b8d55",
        name: "Zone of Strangeness",
        variables: { sighting: "The Zone of Strangeness" },
        perks: {
          armor: [{ description: `Things are not fixed. You never need act under pressure when supernatural forces alter the environment around you, and you get 2-armour against harm from sudden changes to the laws of physics.`, offset: 2, max: 2, apply: false }]
        }
      },
      {
        id: "4a394360-d04a-4d8a-a1e2-9ecd43ef60dc",
        name: "Psychic Event",
        variables: { sighting: "Your Own Third Eye" },
        choose: 1,
        choices: [
          {
            id: "0bef53c0-f964-4d19-ba7e-7ee626e39859",
            name: "Gain the **'Sensitive'** move",
            variables: {},
            actions: [{
              name: "Sensitive",
              description: "Open your mind to the psychic environment.",

              coreStat: StatEnum.Weird,

              miss: "The **Keeper** can make a hard move against. Your brain makes contact with something dangerous.",

              mixedSuccess: "You gain a hazy impression about something important.",
              solidSuccess: "You gain a definite impression (a vision, tangible aura, overheard thought, etc) about something important.",
              advancedSuccess: "You gain a definite impression (a vision, tangible aura, overheard thought, etc) about something important. You may ask one follow-up question that the **Keeper** will answer honestly.",
            }]
          },
          {
            id: "9a8b9cbc-f6bf-4923-8784-317293676ab5",
            name: "Gain the **'Empath'** move",
            variables: {},
            actions: [{
              name: "Empath",
              description: "Open your brain to feel emotions of something in front of you.",
              longDescription: `
You can use **Empath** on anything with emotions, but the less human they are, the less safe it is for you.
If the emotions are especially strong or alien, you might need to **Act Under Pressure**.`,

              coreStat: StatEnum.Weird,

              miss: "The **Keeper** can make a hard move against you. You are overwhelmed by emotions.",

              mixedSuccess: "You gain only a hazy impression of their current emotional state and intentions.",
              solidSuccess: "You gain a clear impression of their current emotional state and intentions. Take +1 {forward} when acting on this knowledge.",
              advancedSuccess: "You gain a clear impression of their current emotional state and intentions. Take +1 {forward} when acting on this knowledge. You may ask one follow-up question that the Keeper will answer honestly",
            }]
          }
        ],
      },
      {
        id: "1a94a926-c626-46c5-803e-cf9707c1aed9",
        name: "Higher Power",
        variables: { sighting: "A Higher Power" },
        perks: { luck: [{ description: "Something looks out for you. You start with an extra **Luck**.", bonus: 1 }] }
      },
      {
        id: "fa699597-2e03-43d0-a310-40bb689a4148",
        name: "Strange Dangers",
        variables: { sighting: "Strange Dangers" },
        perks: { armor: [{ description: "You are always watching for hazards. When you have no armour, you still count as having 1-armour.", min: 1, apply: true }] },
      },
      {
        id: "730f23b1-70f9-4ca5-8e61-e7e9d9f10736",
        name: "Abduction",
        variables: { sighting: "Aliens" },
        perks: { allMoves: [{ description: "They taught you hidden knowledge. Gain +1 to any move when you research strange or ancient secrets to do it.", offset: 1 }] }
      },
      {
        id: "b21e1f0c-c15d-4503-b482-feeac57abfaa",
        name: "Cosmic Insight",
        variables: { sighting: "The Cosmos" },
        perks: { actUnderPressure: [{ description: "You have encompassed the soul of the universe. You never need to act under pressure due to feelings of fear, despair, or isolation." }] }
      }
    ],
  },
  {
    id: "9f347cc2-a96a-4a17-b12d-4ab6bfa427ba",
    playbook: "f7b73a9a-6447-42f8-b373-b71341bdad99", // The Searcher
    type: FeatType.Move,
    startingFeat: false,

    name: "Prepared to Defend",
    description: "Whenever you suffer harm when you **'Kick Some Ass'** or **'Protect Someone'**, you suffer 1 less **Harm**.",
    longDescription: "Even truth seekers need tto fight sometimes.",

    perks: {
      kickSomeAss: [{
        description: "When you suffer **Harm** as a result of this move, take 1 less **Harm**."
      }],
      protectSomeone: [{
        description: "When you suffer **Harm** as a result of this move, take 1 less **Harm**."
      }],
      armor: [{
        description: "When you suffer harm from **'Kick Some Ass'** or **'Protect Someone'**, you suffer 1 less **Harm**.",
        offset: 1,
        apply: false,
      }]
    }
  },
  {
    id: "b7cf9c20-3037-4355-887d-a3b14a344e31",
    playbook: "f7b73a9a-6447-42f8-b373-b71341bdad99", // The Searcher
    type: FeatType.Move,
    startingFeat: false,

    name: "Fellow Believer",
    description: "Bystanders will talk to you about weird things they would not trust others to believe.",
    longDescription: "People understand you’ve also known strangeness. Bystanders will talk to you about weird things they would not trust another hunter (or a mundane official) to believe.",

    perks: { social: [{ description: "Bystanders will talk to you about weird things they would not trust others to believe." }] }
  },
  {
    id: "114109b5-9026-451c-9545-0e5f7f3c64ec",
    playbook: "f7b73a9a-6447-42f8-b373-b71341bdad99", // The Searcher
    type: FeatType.Move,
    startingFeat: false,

    name: "Guardian",
    description: "You have a mystical ally that helps defend you",
    longDescription: `You have a mystical ally (perhaps a spirit, alien, or cryptid) who helps and defends you.
Define them, and their powers, with the Keeper’s agreement. Their look is one of: invisible, an intangible spirit thing,
a weird creature, disguised as an animal, or disguised as a person.`,

    inputs: [
      { type: InputTypes.Text, name: "guardianName", label: "Guardian Name", placeholder: "The Lonely One" },
      {
        type: InputTypes.MultipleChoice,
        name: "guardianLook",
        label: "Guardian Look",
        options: [
          "an invisible guardian", "an intangible spirit thing", "a weird creature",
          "a guardian disguised as an animal", "a guardian disguised as a person."
        ],
        allowCustom: true,
      },
      { type: InputTypes.TextArea, name: "guardianDescription", label: "Guardian Description", placeholder: "Summary, powers, etc." },
    ],

    perks: {
      social: [{ description: "You have a guardian who helps and defends you.", showInputs: [ "guardianName", "guardianLook", "guardianDescription" ] }]
    }
  },
  {
    id: "be6cc8db-59e1-405e-a98d-fa394a67b51e",
    playbook: "f7b73a9a-6447-42f8-b373-b71341bdad99", // The Searcher
    type: FeatType.Move,
    startingFeat: false,

    name: "Just Another Day",
    description: `When you have to **'Act Under Pressure'** due to a monster, phenomenon, or mystical effect, you may roll +Weird instead of +Cool.`,

    perks: {
      actUnderPressure: [{
        description: `When used due to a monster, phenomenon, or mystical effect, you may roll +Weird instead of +Cool.`,
        alternateStat: StatEnum.Weird,
      }]
    },
  },
  {
    id: "98a39976-9940-4502-a601-61323c39bffd",
    playbook: "f7b73a9a-6447-42f8-b373-b71341bdad99", // The Searcher
    type: FeatType.Move,
    startingFeat: false,

    name: "Network",
    description: "You have an {@AllyGroup} of others who had experiences similar to your first encounter.",
    longDescription: `You may gain an {@AllyGroup} of others who had experiences similar to your first encounter—perhaps
they’re a support group or hobbyist club. Detail up to five members with useful skills related to what happened to
them (none are up for fighting monsters).`,
    
    inputs: [{ type: InputTypes.Ally, name: "network", label: "Network", crewMax: 5 }],

    perks: {
      social: [{
        description: "This group had similar experiences to your first encounter. They are not up for fighting monsters.",
        showInputs: [ "supportGroup" ]
      }]
    }
  },
  {
    id: "c2217d7e-9d95-4541-9be2-b0d604ad7760",
    playbook: "f7b73a9a-6447-42f8-b373-b71341bdad99", // The Searcher
    type: FeatType.Move,
    startingFeat: false,

    name: "Ockham's Broadsword",
    description: "When you first encounter something strange, learn its classification and gain +1 {forward}.",
    longDescription: `When you first encounter something strange, you may ask the Keeper what sort of thing it is.
They will tell you if it (or the cause) is: natural, an unnatural creature, a weird phenomenon, or a person.

You gain +1 {forward} dealing with it.`,

    autoActions: [{
      name: "Ockham's Broadsword",
      description: "When you first encounter something strange, learn its classification and gain +1 {forward}.",
      longDescription: `When you first encounter something strange, you may ask the Keeper what sort of thing it is.
They will tell you if it (or the cause) is: natural, an unnatural creature, a weird phenomenon, or a person.`,
    }],
    
    perks: {
      allMoves: [{
        description: "After using **'Ockham's Broadsword'** gain +1 {forward} when dealing with the strange new thing.",
        offset: 1,
      }]
    }
  },
  {
    id: "99acd02c-9b9e-4090-9779-a740bea840fa",
    playbook: "f7b73a9a-6447-42f8-b373-b71341bdad99", // The Searcher
    type: FeatType.Move,
    startingFeat: false,

    name: "The Things I've Seen",
    description: "You can have encountered a creature or phenomenon before, giving you some knowledge in advance.",
    longDescription: `When you encounter a creature or phenomenon, you may declare that you have seen it before.
The Keeper may ask you some questions about that encounter, and will then tell you one useful fact you learned and one
danger you need to watch out for (maybe right now).`,

    autoActions: [{
      name: "The Things I've Seen",
      description: "You can have encountered a creature or phenomenon before, giving you some knowledge in advance.",
      longDescription: `When you encounter a creature or phenomenon, you may declare that you have seen it before.
The Keeper may ask you some questions about that encounter, and will then tell you one useful fact you learned and one
danger you need to watch out for (maybe right now).`,
    }],
  },
  {
    id: "709641ca-a4d0-4bd4-9160-29c19e77a5a3",
    playbook: "cfecc496-d1c1-4b30-af48-0f3f41cd02c0", // The Snoop
    type: FeatType.Move,
    startingFeat: false,

    name: "What Does That Feel Like?",
    description: "Using your camera or microphone, you can force someone to deal with just you for a moment.",
    longDescription: `When you put your camera or microphone right in a person’s face, they break off whatever they
are doing. They might go right back to it after they deal with you, but you'll create enough time for the other
**Hunters** to act in the meantime.`,
    
    autoActions: [{
      name: "What Does That Feel Like?",
      description: "Using your camera or microphone, you can force someone to deal with just you for a moment.",
      longDescription: `When you put your camera or microphone right in a person’s face, they break off whatever they
are doing. They might go right back to it after they deal with you, but you'll create enough time for the other
**Hunters** to act in the meantime.`,
    }]
  },
  {
    id: "ef35c8fe-3663-4464-a36f-3484b90b42b7",
    playbook: "cfecc496-d1c1-4b30-af48-0f3f41cd02c0", // The Snoop
    type: FeatType.Move,
    startingFeat: false,

    name: "Minor Celebrity",
    description: "Weird Move: Have a chance during each **Mystery** to impose that people have seen and like some of your work.",
    longDescription: `At the beginning of each mystery, roll +Weird. On a 10+ hold 2 and on a 7-9 hold 1.
Spend your hold during the mystery to have someone you meet know of you in a positive light
(maybe they read your blog, listen to your podcast, or watch your Internet/TV show, etc). You may end
up getting asked for autographs or given “hot” leads, etc.`,
    
    inputs: [{ type: InputTypes.Checks, name: "holds", label: "Holds", max: 2, resetPerMystery: true }],

    actions: [{
      name: "Minor Celebrity",
      description: "At the start of a mystery, roll to gain **Holds**. They can later be used to be recognized",
      coreStat: StatEnum.Weird,
      miss: "No one recognizes you during this mystery.",
      mixedSuccess: "Gain 1 **Hold**",
      solidSuccess: "Gain 2 **Hold**",
      successFooter: `Spend your hold during the mystery to have someone you meet know of you in a positive light
(maybe they read your blog, listen to your podcast, or watch your Internet/TV show, etc). You may end
up getting asked for autographs or given "hot" leads, etc.`,
      startOfMystery: true,
      showInputs: [ "holds" ],
    }],
    autoActions: [{
      name: "Minor Celebrity - Spend Hold",
      description: "Spend **Holds** to have someone you meet know of you in a positive light.",
      longDescription: `Spend your hold during the mystery to have someone you meet know of you in a positive light
(maybe they read your blog, listen to your podcast, or watch your Internet/TV show, etc). You may end
up getting asked for autographs or given "hot" leads, etc.`,
      showInputs: [ "holds" ]
    }]
  },
  {
    id: "a2e8d269-fbce-4eb3-af07-09680b6f6a4a",
    playbook: "cfecc496-d1c1-4b30-af48-0f3f41cd02c0", // The Snoop
    type: FeatType.Move,
    startingFeat: false,

    name: "We'll Fix It In Post",
    description: "You can use **'Investigate a Mystery'** on long-over interviews, attack sites, and so on.",
    longDescription: `You can use anything you could conceivably have recorded as evidence for **'Investigate a Mystery'**,
allowing you to check previous interviews, attack sites, and so on from the comfort of your laptop.`,

    perks: {
      investigateAMystery: [{
        description: `You can use anything you could conceivably have recorded, allowing you to check previous interviews,
attack sites, and so on from the comfort of your laptop.`,
      }]
    }
  },
  {
    id: "78d2b34a-8022-4a96-ad2b-2d7a5a485f5e",
    playbook: "cfecc496-d1c1-4b30-af48-0f3f41cd02c0", // The Snoop
    type: FeatType.Move,
    startingFeat: false,

    name: "Press Accreditation",
    description: "When you **'Investigate a Mystery'** using interpersonal skills, roll +Charm instead of +Sharp.",
    longDescription: `When you investigate a mystery by talking to witnesses, interviewing locals, or anything else requiring interpersonal skills, roll +Charm instead of +Sharp.`,

    perks: {
      investigateAMystery: [{
        description: `By talking to witnesses, interviewing locals, or anything else requiring interpersonal skills, you can roll +Charm instead of +Sharp.`,
        alternateStat: StatEnum.Charm,
      }]
    }
  },
  {
    id: "74063c4f-9a1c-417f-8520-9b3f3cd621ca",
    playbook: "cfecc496-d1c1-4b30-af48-0f3f41cd02c0", // The Snoop
    type: FeatType.Move,
    startingFeat: false,

    name: "Truthiness",
    description: "Whatever you tell a normal person, they'll accept that __you__ think it's true.",
    longDescription: `Whatever you tell a normal person, they'll accept that you think it's true.
If it's far out, they might think you're deluded, but they won't think you’re lying.`,
    
    autoActions: [{
      name: "Truthiness",
      description: "Whatever you tell a normal person, they'll accept that __you__ think it's true.",
      longDescription: `Whatever you tell a normal person, they'll accept that you think it's true.
If it's far out, they might think you're deluded, but they won't think you’re lying.`,
    }]
  },
  {
    id: "1db684c3-5bac-4b66-8110-898ee755d6e6",
    playbook: "cfecc496-d1c1-4b30-af48-0f3f41cd02c0", // The Snoop
    type: FeatType.Move,
    startingFeat: false,

    name: "The Mojo Wire",
    description: "When you spend a while reading all the latest news feeds looking for the weird stuff, take +1 {forward}.",
    
    perks: {
      allMoves: [{
        description: "When you spend a while reading all the latest news feeds looking for the weird stuff, take +1 {forward}.",
        offset: 1,
      }]
    }
  },
  {
    id: "",
    playbook: "",
    type: FeatType.Move,
    startingFeat: false,

    name: "",
    description: "",
    longDescription: ``,
  },
];
