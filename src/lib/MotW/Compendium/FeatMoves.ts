import {type Feat, FeatType, PassiveTypes, Stats} from "./CompendiumTypes";
import {AllyType, BystanderTypes, CharacterTypes, InputTypes} from "./UserInputs";
import {Gear} from "./Gear";
import {ItemTag} from "./Tags";

export let Moves: {[key: string]: Feat} = {
  // Chosen
  DestinysPlaything: {
    name: `Destiny's Plaything`,
    id: `5a92f2da-ca73-4fac-b859-08f2c745ae9b`,
    playbooks: [`94a658a0-f5dc-4e4b-a1ec-1b322b08d78f`], // The Chosen
    featType: FeatType.Move,

    description: `At the beginning of each \`mystery\`, roll to see what is revealed about your immediate future.`,
    actions: [{
      name: `Destiny's Plaything`,
      id: `7bb53fda-19d2-4244-b2f5-824fdddfdc2a`,
      ability: Stats.Weird,
      
      description: `At the beginning of each \`mystery\`, roll to see what is revealed about your immediate future.`,

      miss: `Something bad is going to happen to you...`,

      mixedSuccess: `You get a vague hint about the coming \`mystery\`.`,
      solidSuccess: `\`The Keeper\` will reveal a useful detail about the coming \`mystery\`.`,
    }]
  },
  ImHereForAReason: {
    name: `I'm Here For A Reason`,
    id: `2f8454d1-2528-428a-af7e-270ddb97019e`,
    playbooks: [`94a658a0-f5dc-4e4b-a1ec-1b322b08d78f`], // The Chosen
    featType: FeatType.Move,

    description: `You can use \`luck\` to come back to life.`,
    longDescription: `There's something you are destined to do.
Work out the details with \`The Keeper\`, based on your **Fate** selection.
You cannot die until it comes to pass.

If you die in play, then you must spend a \`luck\` point. You will then, somehow, recover or be returned to life.
Once your task is done (or you use up all your \`luck\`) all bets are off.`,
    
    inputs: [{
      label: `Destiny`,
      key: `231e409e-867b-4fa8-a2c9-f43f44f9cf69`,
      subLabel: `You are here for a reason. Work with \`The Keeper\` to figure out what you are destined to do using your **fate** tags.`,
      inputType: InputTypes.Text,
    }],
    
    passives: [{
      type: PassiveTypes.Luck,
      description: `You can use \`luck\` to come back to life.`,
    }],
  },
  TheBigEntrance: {
    name: `The Big Entrance`,
    id: `14f72ee0-bf5b-4958-ac31-f2387246b5dd`,
    playbooks: [`94a658a0-f5dc-4e4b-a1ec-1b322b08d78f`], // The Chosen
    featType: FeatType.Move,

    description: `Make a showy entrance into a dangerous situation.`,

    actions: [{
      name: `The Big Entrance`,
      id: `5cc465a6-538d-4223-aa19-183a6338ad87`,
      ability: Stats.Cool,
      description: `Make a showy entrance into a dangerous situation.`,

      miss: `You're marked as the biggest threat by all enemies who are present.`,
      mixedSuccess: `You pick one person or monster to stop, watch and listen until you finish talking.`,
      solidSuccess: `Everyone stops to watch and listen until you finish your opening speech.`,
    }]
  },
  Devastating: {
    name: `Devastating`,
    id: `91102186-f3b3-4836-b2f6-52ca3b567bfa`,
    playbooks: [`94a658a0-f5dc-4e4b-a1ec-1b322b08d78f`], // The Chosen
    featType: FeatType.Move,

    description: `When you inflict \`harm\`, you may inflict +1 \`harm\``,
    
    modAttack: [{
      name: `Devastating`,
      harmOffset: 1,
    }]
  },
  Dutiful: {
    name: `Dutiful`,
    id: `9b5d9bbc-7c9f-4c5f-aef0-c63cf848081e`,
    playbooks: [`94a658a0-f5dc-4e4b-a1ec-1b322b08d78f`], // The Chosen
    featType: FeatType.Move,
    prerequisiteFeats: [`2b49540f-3629-43db-a879-e8c81d436c86`], // Your Fate

    description: `When your **Fate** rears its ugly head, and you act in accordance with any of your **Fate Tags** (either heroic or doom) then mark experience. If it's a heroic tag, take +1 \`forward\`.`,

    passives: [{
      type: PassiveTypes.Experience,
      description: `When you respond to your **Fate** with any of your **Fate Tags**, mark experience. (If it's a heroic tag, take +1 \`forward\`.)`,
    }]
  },
  Invincible: {
    name: `Invincible`,
    id: `34b4eede-c8b1-40ea-a16b-b2e8ef160d8d`,
    playbooks: [`94a658a0-f5dc-4e4b-a1ec-1b322b08d78f`], // The Chosen
    featType: FeatType.Move,

    description: `You always count as having 2 **Armor**. This doesn't stack with other protection.`,
    
    armors: [{ armor: 2 }]
  },
  Resilience: {
    name: `Resilience`,
    id: `a84f5881-0188-4cb1-a303-f913fe939e72`,
    playbooks: [`94a658a0-f5dc-4e4b-a1ec-1b322b08d78f`], // The Chosen
    featType: FeatType.Move,

    description: `You heal faster than normal people. Any time your \`harm\` gets healed, heal an extra point. Additionally, your wounds count as 1 \`harm\` less for the purpose of \`The Keeper\`'s harm moves.`,

    passives: [
      {
        type: PassiveTypes.Health,
        description: `Any time your \`harm\` gets healed, heal an extra point.`,
      },
      {
        type: PassiveTypes.Health,
        description: `Your wounds count as 1 \`harm\` less in regard to \`The Keeper\`'s \`harm\` moves.`,
      }
    ],
  },
  // Crooked
  Artifact: {
    name: `Artifact`,
    id: `1a49552b-c007-466a-8e1a-c4b48f13be59`,
    playbooks: [`bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae`], // The Crooked
    featType: FeatType.Move,

    description: `You 'found' a magical artifact with handy powers, and kept it.`,
    
    longDescription: `Pick One:
* Protective Amulet: 1 **Armor** #magic #recharge.
* Lucky Charm: Use instead of \`luck\` only once.
* Grimoire: Studying the book gives +1 \`forward\` to **Use Magic** (or an alternate Weird Basic Move.)
* Skeleton Key: Opens any magically sealed lock.
* Imp Stone: A weak demon is bound to serve the holder. The imp must be summoned with **Use Magic**.`,

    inputs: [{
      label: `Artifact`,
      key: `75762b54-2f1d-44eb-875d-dfdf1dfd7190`,
      inputType: InputTypes.FeatChoice,
      choose: 1,
      options: [
        Gear.ProtectiveAmulet,
        Gear.LuckyCharm,
        Gear.Grimoire,
        Gear.SkeletonKey,
        Gear.ImpStone,
      ]
    }],
  },
  CrookedCrew: {
    name: `Crew`,
    id: `8245c701-9ad3-4c48-a519-d17ab595439f`,
    playbooks: [`bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae`], // The Crooked
    featType: FeatType.Move,

    description: `You have a regular crew: a team of three or four people who will help you out with pretty much anything. They count as an ally team.`,

    inputs: [{
      label: `Gang`,
      key: `fda8ddab-ad70-4cd5-873b-a50f69e52f9a`, // Displayed in social
      inputType: InputTypes.Character,
      startingType: CharacterTypes.Ally,
      crewMin: 3,
      crewMax: 4
    }],

    passives: [{
      type: PassiveTypes.Social,
      description: `You have a crew that will help you out with pretty much anything. They count as an ally team.`,
      showInputs: [ `fda8ddab-ad70-4cd5-873b-a50f69e52f9a` ] // Gang
    }]
  },
  DealWithTheDevil: {
    name: `Deal with the Devil`,
    id: `9745fbb6-da21-4e2c-bb74-cd2beb5874fe`,
    playbooks: [`bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae`], // The Crooked
    featType: FeatType.Move,

    description: `You sold your soul to the Devil.`,
    
    longDescription: `Pick one or two things you got out of the deal:
* Wealth
* Fame,
* Youth,
* Sensual Gratification
* Skill (add +1 to two stats)

Payment is due when you die in 6 months (if you picked 2 things) or 1 year (if you picked 1 thing.)`,

    inputs: [{
      label: `Deal`,
      key: `b967e73a-6436-4ee7-b29e-9d24e1f72055`,
      inputType: InputTypes.FeatChoice,
      choose: 1,
      options: [
        {
          name: `1 perk, 1 year to live.`,
          description: `You were given 1 perk, but have only 1 year to live.`,
          id: `b4bbe310-89fc-46a7-9db2-d3c931c2951a`,
          passives: [{
            type: PassiveTypes.SessionStart,
            description: `Ask \`The Keeper\` how much time elapses since the last mystery. Update your months remaining.`,
            showInputs: [`de86daa1-1ff8-46f7-8d00-614cb173cb8d`], // Months Remaining
          }],
          inputs: [
            {
              label: `Months Remaining`, key: `de86daa1-1ff8-46f7-8d00-614cb173cb8d`, // Displayed at the start of the session
              subLabel: `until the collection day for your soul.`,
              inputType: InputTypes.Checks,
              max: 12,
            },
            {
              label: `Deal Perk`, key: `725cb27d-d609-4354-9ba8-d0e422350e28`,
              inputType: InputTypes.FeatChoice,
              choose: 1,
              options: [
                {
                  name: `Wealth`,
                  id: `a684fdef-26a0-492a-9d4f-7050992c92dd`,
                  passives: [{
                    type: PassiveTypes.Inventory,
                    description: `You sold your soul for wealth.`,
                  }]
                },
                {
                  name: `Fame`,
                  id: `1ed585f3-f6f2-4e21-8e89-0228feb53c76`,
                  passives: [{
                    type: PassiveTypes.Social,
                    description: `You sold your soul for fame.`,
                  }]
                },
                {
                  name: `Youth`,
                  id: `ae1e108a-7328-464f-b43c-c8a14139c3e3`,
                  passives: [{
                    type: PassiveTypes.Social,
                    description: `You sold your soul for youth.`,
                  }]
                },
                {
                  name: `Sexual gratification`,
                  id: `8189152a-6e65-40e5-896d-29ed45858eb3`,
                  passives: [{
                    type: PassiveTypes.Social,
                    description: `You sold your soul for sexual gratification.`,
                  }]
                },
                {
                  name: `Skill (+1 to a stat)`,
                  id: `ec0fdacc-0f6b-4b10-836f-3399a3b5decb`,
                  description: `You gain skill, which grants you +1 to a rating (stat) of your choice`,
                  inputs: [{
                    label: `Rating`,
                    key: `81eae7fa-bbb0-4e96-9ce7-f37420b43801`,
                    inputType: InputTypes.FeatChoice,
                    choose: 1,
                    options: [
                      {
                        name: `Charm`,
                        id: `0dca3bb3-b019-4315-ac86-a65576f14986`,
                        offsetStat: {ability: Stats.Charm, offset: 1, max: 4},
                      },
                      {
                        name: `Cool`,
                        id: `a9849b53-3e7c-4fe1-84fe-fb504c2bffe3`,
                        offsetStat: {ability: Stats.Cool, offset: 1, max: 4},
                      },
                      {
                        name: `Sharp`,
                        id: `422b60c7-3f41-42f0-8177-d6e5e9b47440`,
                        offsetStat: {ability: Stats.Sharp, offset: 1, max: 4},
                      },
                      {
                        name: `Tough`,
                        id: `9f142324-918a-43ec-a219-83df2269cf50`,
                        offsetStat: {ability: Stats.Tough, offset: 1, max: 4},
                      },
                      {
                        name: `Weird`,
                        id: `3393b93d-c718-40c2-a44d-134101cf4ae7`,
                        offsetStat: {ability: Stats.Weird, offset: 1, max: 4},
                      },
                    ]
                  }],
                },
              ]
            },
          ],
        },
        {
          name: `2 perks, 6 months to live.`,
          id: `b8a364f8-832f-452e-94a0-0ffb2524d51b`,
          description: `You gain 2 perks, but have only 6 months to live.`,
          passives: [{
            type: PassiveTypes.SessionStart,
            description: `Ask \`The Keeper\` how much time elapses since the last mystery. Update your months remaining.`,
            showInputs: [`f4322cb9-ca6a-4982-864a-f57c7d77e321`] // Months Remaining
          }],
          inputs: [
            {
              label: `Months Remaining`, key: `f4322cb9-ca6a-4982-864a-f57c7d77e321`, // Displayed at the start of the session
              subLabel: `until the collection day for your soul.`,
              inputType: InputTypes.Checks,
              max: 6,
            },
            {
              label: `Deal Perks`,
              key: `725cb27d-d609-4354-9ba8-d0e422350e28`,
              inputType: InputTypes.FeatChoice,
              choose: 2,
              options: [
                {
                  name: `Wealth`,
                  id: `a684fdef-26a0-492a-9d4f-7050992c92dd`,
                  passives: [{
                    type: PassiveTypes.Inventory,
                    description: `You sold your soul for wealth.`,
                  }]
                },
                {
                  name: `Fame`,
                  id: `1ed585f3-f6f2-4e21-8e89-0228feb53c76`,
                  passives: [{
                    type: PassiveTypes.Social,
                    description: `You sold your soul for fame.`,
                  }]
                },
                {
                  name: `Youth`,
                  id: `ae1e108a-7328-464f-b43c-c8a14139c3e3`,
                  passives: [{
                    type: PassiveTypes.Social,
                    description: `You sold your soul for youth.`,
                  }]
                },
                {
                  name: `Sexual gratification`,
                  id: `8189152a-6e65-40e5-896d-29ed45858eb3`,
                  passives: [{
                    type: PassiveTypes.Social,
                    description: `You sold your soul for sexual gratification.`,
                  }]
                },
                {
                  name: `Skill (+1 to a stat)`,
                  id: `ec0fdacc-0f6b-4b10-836f-3399a3b5decb`,
                  description: `You gain skill, which grants you +1 to a rating (stat) of your choice`,
                  inputs: [{
                    label: `Rating`,
                    key: `81eae7fa-bbb0-4e96-9ce7-f37420b43801`,
                    inputType: InputTypes.FeatChoice,
                    choose: 1,
                    options: [
                      {
                        name: `Charm`,
                        id: `0dca3bb3-b019-4315-ac86-a65576f14986`,
                        offsetStat: {ability: Stats.Charm, offset: 1, max: 4},
                      },
                      {
                        name: `Cool`,
                        id: `a9849b53-3e7c-4fe1-84fe-fb504c2bffe3`,
                        offsetStat: {ability: Stats.Cool, offset: 1, max: 4},
                      },
                      {
                        name: `Sharp`,
                        id: `422b60c7-3f41-42f0-8177-d6e5e9b47440`,
                        offsetStat: {ability: Stats.Sharp, offset: 1, max: 4},
                      },
                      {
                        name: `Tough`,
                        id: `9f142324-918a-43ec-a219-83df2269cf50`,
                        offsetStat: {ability: Stats.Tough, offset: 1, max: 4},
                      },
                      {
                        name: `Weird`,
                        id: `3393b93d-c718-40c2-a44d-134101cf4ae7`,
                        offsetStat: {ability: Stats.Weird, offset: 1, max: 4},
                      },
                    ]
                  }],
                },
              ]
            },
          ],
        },
      ],
    }]
  },
  FriendsOnTheForce: {
    name: `Friends on the Force`,
    id: `7f61cb80-f1c2-4fa4-8d42-4e0b61559f38`,
    playbooks: [`bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae`], // The Crooked
    featType: FeatType.Move,

    description: `You know a few cops who can help, for certain considerations. You can lose the cops using **Act Under Pressure**.`,
    longDescription: `You know a few cops who can be persuaded to look the other way or do you a favor, for certain considerations.
You can **Act Under Pressure** to get in touch with them when you need to divert any law enforcement attention.
There will be a cost, although maybe not right now.`,

    passives: [{
      type: PassiveTypes.Social,
      description: `You know a few cops who can be persuaded to look the other way or do you a favor, for certain considerations.`,
    }],
    modMoves: [{
      applyToMoves: [`bfdfd9b3-d5fa-4517-8d5e-20013364d7b0`], // Act Under Pressure
      footnote: `You can get in touch with your **friends on the force** when you need to divert any law enforcement attention.
There will be a cost, although maybe not right now.`,
    }],
  },
  Made: {
    name: `Made`,
    id: `85c5b933-f703-42ec-b74c-b14ec16e161c`,
    playbooks: [`bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae`], // The Crooked
    featType: FeatType.Move,

    description: `You're "made" in a gang. You can call on the gang members to help you out. Your Boss may have jobs for you.`,
    longDescription: `You're "made" in a gang. Name the gang and describe how their operations tie into your background.
You can call on the gang members to help you out, but they'll expect to be paid. Your bosses will have requests for you now and again, but
you'll be paid. Minor trouble will be overlooked, but you better not screw over any other "made" gangsters.`,

    inputs: [
      {
        label: `Gang Name`, key: `080beb57-4a37-4fa6-b002-851ed5698294`, // Displayed in social
        inputType: InputTypes.Text,
      },
      {
        label: `Gang Description`, key: `0c5e81a8-a058-4aa3-9aa8-82e12f30326e`,
        inputType: InputTypes.TextArea,
        placeholder: `Gang operations. How the gang relates to your background. etc.`,
      },
    ],

    passives: [
      {
        type: PassiveTypes.Social,
        description: `You can call on your gang members to help you out. They'll expect to be paid.`
      },
      {
        type: PassiveTypes.Social,
        description: `Your bosses will have requests for you now and again, but you'll be paid.`,
        showInputs: [ `080beb57-4a37-4fa6-b002-851ed5698294` ] // Gang Name
      },
    ]
  },
  Driver: {
    name: `Driver`,
    id: `15cfa72c-bfee-45ed-a3d4-2923805b31cd`,
    playbooks: [`bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae`], // The Crooked
    featType: FeatType.Move,

    description: `You have +1 \`ongoing\` when driving, you can hotwire anything using tools, and you own two vehicles.`,
    longDescription: `You have +1 \`ongoing\` when driving.
    
    You can hotwire anything (the older it is, the fewer tools you need to do it.)
    
    You own two handy, widely-available vehicles (perhaps a sports car and a van.)`,

    autoActions: [{
      name: `Hotwiring`,
      id: `1c08723e-716b-47d4-bf1a-775f6c6913fd`,
      description: `You can hotwire anything (the older it is, the fewer tools you need to do it.)`,
    }],
    modMoves: [{
      applyToMoves: [`*`],
      modRoll: 1,
      modCondition: `Apply while driving`,
    }],
    
    inputs: [
      {
        label: `Driver Vehicle 1`, key: `a43a7cef-1dad-49bc-b81c-2d9d048ca9ae`,
        inputType: InputTypes.FeatChoice,
        choose: 1,
        options: [ Gear.Car, Gear.Van, Gear.Motorcycle ],
      },
      {
        label: `Driver Vehicle 2`, key: `22038164-0cbe-4f9d-a35a-669a6ed2b015`,
        inputType: InputTypes.FeatChoice,
        choose: 1,
        options: [ Gear.Car, Gear.Van, Gear.Motorcycle ],
      },
    ]
  },
  HomeGround: {
    name: `Home Ground`,
    id: `0790ae58-043a-45ac-a48f-5c61f4c2d5de`,
    playbooks: [`bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae`], // The Crooked
    featType: FeatType.Move,

    description: `Your crew made a point of keeping the locals happy. Your neighborhood will always be willing to help, no questions asked.`,
    longDescription: `Your crew made a point of keeping the locals happy - keeping them safe, ensuring things always went down okay, etc.
When you're back in your old neighborhood, you can always find people who will hide you or help you with a minor favor, no questions asked.`,

    passives: [{
      type: PassiveTypes.Social,
      description: `Your neighborhood will always be willing to hide you or do minor favors, no questions asked.`,
    }]
  },
  Notorious: {
    name: `Notorious`,
    id: `707e0de6-f495-4262-b687-46589c965568`,
    playbooks: [`bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae`], // The Crooked
    featType: FeatType.Move,

    description: `You have a reputation from your criminal past. You can reveal it to manipulate people more easily.`,
    longDescription: `You have a reputation from your criminal past.
When you reveal who you are, your terrifying reputation counts as a reason for people to do what you ask, for the **Manipulate Someone** move.
Revealing your identity to someone can create problems later, of course.`,

    modMoves: [{
      applyToMoves: [`d245fc16-53f7-40bd-bdbb-45cde437adab`, `1d8097c8-90bc-485e-90a0-0eb9e94d0959`], // Manipulate Someone and Manipulate A Hunter
      footnote: `You can reveal your **Notorious** identity instead of providing a reason (may complicate things later.)`,
    }]
  },
  // Divine
  BossFromBeyond: {
    name: `Boss from Beyond`,
    id: `6e2397c4-971e-4529-b26d-66bd35168ccd`,
    playbooks: [`9e9f712c-54d9-4193-b7ad-48c64f7ec9dc`], // The Divine
    featType: FeatType.Move,

    description: `At the beginning of each mystery, roll to meet with the boss.`,
    
    inputs: [
      {
        label: `Task(s)`, key: `a3bce4bd-5490-4bcb-a8f9-56884cbc4058`, // Displayed in action
        inputType: InputTypes.TextArea,
      },
      {
        label: `Task(s) Failed`, key: `fcd255fd-aeb9-4e2d-9088-8396d5409314`, // Displayed in action
        inputType: InputTypes.Checks,
        max: 1,
      },
    ],
    
    passives: [{
      type: PassiveTypes.Social,
      description: `Your superiors occasionally ask you to perform a task.`,
      showInputs: [`a3bce4bd-5490-4bcb-a8f9-56884cbc4058`, `fcd255fd-aeb9-4e2d-9088-8396d5409314`]
    }],
    
    actions: [{
      name: `Boss from Beyond`,
      id: `ea0d7a46-ea22-479c-84f0-cd8e6b759aa0`,
      ability: Stats.Weird,
      description: `At the beginning of each mystery, roll to meet with the boss.`,

      miss: `Your superiors require you do a terrible task.`,
      mixedSuccess: `Your superiors ask you to do a complicated or difficult task.`,
      solidSuccess: `Your superiors ask you to do a simple task.`,
      successFooter: `Additionally, You can ask your superiors one of the **Investigate a Mystery** questions:
\`@investigationQuestions\`
`,
      resultFooter: `If you do not accomplish what the boss ordered, you cannot use this move again until you have made up for your failure in some way.`,

      startOfMystery: true,
      showInputs: [`a3bce4bd-5490-4bcb-a8f9-56884cbc4058`, `fcd255fd-aeb9-4e2d-9088-8396d5409314`]
    }],
  },
  AngelWings: {
    name: `Angel Wings`,
    id: `d68efbb3-0a67-42d1-81c1-86a1d09cecf5`,
    playbooks: [`9e9f712c-54d9-4193-b7ad-48c64f7ec9dc`], // The Divine
    featType: FeatType.Move,

    description: `You can go instantly to anywhere you've visited before, or to a person you know well. If you try to take 1 or 2 people, you have to roll.`,
    
    actions: [{
      name: `Angel Wings`,
      id: `6b62afd0-43a7-4ddf-830e-9f300a069af9`,
      ability: Stats.Weird,
      description: `You can go instantly to anywhere you've visited before with 1 or 2 people. (No roll required to travel alone.)`,
      
      miss: `\`The Keeper\` can take a hard move against you. Your attempt likely failed or went terribly wrong.`,
      mixedSuccess: `You didn't quite manage it. Either you are all separated or you all appear in the wrong place.`,
      solidSuccess: `You all get where you wanted to go.`,
    }],
    autoActions: [{
      name: `Angel Wings`,
      id: `c01e640a-7477-4ce2-a792-2089a36cbc8d`,
      description: `You can go instantly to anywhere you've visited before, or to a person you know well. (See the **Ability** if you want to take people with you.)`
    }]
  },
  WhatINeed: {
    name: `What I Need, When I Need It`,
    id: `6f96fc77-c094-4aca-94e9-76eee2705815`,
    playbooks: [`9e9f712c-54d9-4193-b7ad-48c64f7ec9dc`], // The Divine
    featType: FeatType.Move,

    description: `You may store any small object you own in a magical space no one can get to. You can retrieve stored items any time into your hand.`,
    
    autoActions: [{
      name: `What I Need, When I Need It`,
      id: `c0243416-2271-4be1-a896-a429eb9ec1c1`,
      description: `You may store any small object you own in a magical space no one can get to. You can retrieve stored items any time into your hand.`
    }]
  },
  Smite: {
    name: `Smite`,
    id: `572a1a57-cd59-4362-b7df-a9cd1894a870`,
    playbooks: [`9e9f712c-54d9-4193-b7ad-48c64f7ec9dc`], // The Divine
    featType: FeatType.Move,

    description: `Your unarmed strikes are stronger. Your body and divine weapon count as a weakness for monsters.`,
    longDescription: `Your body and divine weapon always count as a weakness for the monsters you fight.
Your unarmed attacks are 2 \`harm\` #intimate #hand #messy`,

    tags: [ ItemTag.intimate, ItemTag.hand, ItemTag.messy, ItemTag.monsterWeakness ],
    
    attacks: [{
      harm: 2,
    }],
    
    modAttack: [{
      name: `Smite`,
      addTags: [ItemTag.monsterWeakness],
      applyToItem: [
        `f5d91c17-26b4-4c7a-991c-f0554a2939e5`, // Flaming Sword
        `cdf705e3-86f4-4b3d-b6bf-0d98a20a66e3`, // Thunder Hammer
        `c483daf7-9ad4-4c62-949c-6595e741daf9`, // Razor Whip,
        `0d89fa7b-1a2d-4380-a3dd-36d649172f6f`, // Five Demon Bag
        `d67eb2b2-504a-4461-8eb8-41f29e342159`, // Silver Trident
      ],
    }]
  },
  Soothe: {
    name: `Soothe`,
    id: `3fa74412-4f53-4b47-b125-f17f7e3eed9e`,
    playbooks: [`9e9f712c-54d9-4193-b7ad-48c64f7ec9dc`], // The Divine
    featType: FeatType.Move,

    description: `Talk to someone for a few seconds to calm them.`,
    longDescription: `When you talk to someone for a few seconds in a quiet voice, you can calm them down and block any panic, anger, or other negative emotions they have.
This works even if the thing freaking them out is still present, as long as your voice can be heard.`,
    
    autoActions: [{
      name: `Soothe`,
      id: `e4eee36e-2a22-45af-86e9-d84eaf920d4b`,
      description: `Talk to someone for a few seconds to calm them.`,
      longDescription: `When you talk to someone for a few seconds in a quiet voice, you can calm them down and block any panic, anger, or other negative emotions they have.
This works even if the thing freaking them out is still present, as long as your voice can be heard.`,
    }]
  },
  LayOnHands: {
    name: `Lay On Hands`,
    id: `d66c3ec4-38af-46c7-a375-e8eb1359c334`,
    playbooks: [`9e9f712c-54d9-4193-b7ad-48c64f7ec9dc`], // The Divine
    featType: FeatType.Move,

    description: `Your touch can heal injury and disease.`,

    actions: [{
      name: `Lay On Hands`,
      id: `0c2e4e1d-7d0f-48ef-85ea-32e38c092a9c`,
      ability: Stats.Cool,
      description: `Your touch can heal injury and disease.`,
      
      miss: `Your aura causes them extra harm`,
      mixedSuccess: `Heal 2 \`harm\` or an illness and **Stabilize** the target.

Unfortunately, you take the damage or illness upon yourself.`,
      solidSuccess: `Heal 2 \`harm\` or an illness and **Stabilize** the target.`
    }]
  },
  CastOutEvil: {
    name: `Cast Out Evil`,
    id: `5f13cf64-03d7-489c-8ebf-8578a19b4e44`,
    playbooks: [`9e9f712c-54d9-4193-b7ad-48c64f7ec9dc`], // The Divine
    featType: FeatType.Move,

    description: `You may banish an unnatural creature from your presence.`,
    longDescription: `You may banish an unnatural creature from your presence. This move may be used on unnatural \`Hunters\`, like 'The Monstrous'.`,

    actions: [{
      name: `Cast Out Evil`,
      id: `adece5b7-531c-436c-aca9-d562e3489f87`,
      ability: Stats.Tough,
      description: `You may banish an unnatural creature from your presence.`,
      
      miss: `Something is keeping it here... that's not good.`,
      mixedSuccess: `It takes a little while for the banishing to take effect--the creature has time to make one or two actions.`,
      solidSuccess: `It is banished!`,
      successFooter: `The banished creature is unharmed. You have no control over where it goes.`
    }]
  },
  // Expert
  IveReadAboutThis: {
    name: `I've Read About This Sort Of Thing`,
    id: `6db80acb-2a78-413c-bcb9-ae62ca361f9e`,
    playbooks: [`689d32a6-faa1-4258-9fda-894b9bdf8571`], // The Expert
    featType: FeatType.Move,

    description: `You can roll +Sharp (instead of +Cool) when you \`act under pressure\``,

    modMoves: [{
      applyToMoves: [`bfdfd9b3-d5fa-4517-8d5e-20013364d7b0`], // Act Under Pressure
      alternateAbility: Stats.Sharp,
    }]
  },
  OftenRight: {
    name: `Often Right`,
    id: `b95e492e-4947-4249-9daf-ee311daede55`,
    playbooks: [`689d32a6-faa1-4258-9fda-894b9bdf8571`], // The Expert
    featType: FeatType.Move,

    description: `Grant +1 \`ongoing\` and gain experience when a \`Hunter\` comes to you for advice.`,
    longDescription: `When a \`Hunter\` comes you you for advice, give them your honest opinion or advice. If they take your advice, they get +1 \`ongoing\` while they follow your advice, and you mark **Experience**.`,

    autoActions: [{
      name: `Often Right`,
      id: `8da7c6d7-46bd-447f-a764-7cb2ef3eeb65`,
      description: `When a \`Hunter\` comes you to for honest advice, giving it will gain **Experience** and grant them +1 \`ongoing\`.`,
      longDescription: `When a \`hunter\` comes you you for advice, give them your honest opinion or advice. If they take your advice, they get +1 \`ongoing\` while they follow your advice, and you mark **Experience**.`,
    }]
  },
  Preparedness: {
    name: `Preparedness`,
    id: `19b7c2ce-772c-435f-bd76-6d5758a49e76`,
    playbooks: [`689d32a6-faa1-4258-9fda-894b9bdf8571`], // The Expert
    featType: FeatType.Move,

    description: `When you need something unusual or rare, you may... just have it.`,

    actions: [{
      name: `Preparedness`,
      id: `894e5396-6082-4790-ba07-0cd46fae7395`,
      ability: Stats.Sharp,
      description: `When you need something unusual or rare, you may... just have it.`,
      
      miss: `You know where it is, but it's somewhere real bad.`,
      mixedSuccess: `You have it, but not here. It will take some time to get it.`,
      solidSuccess: `You have it right here right now.`
    }]
  },
  NotAsBadAsItLooked: {
    name: `It Wasn't As Bad As It Looked`,
    id: `09d5b526-ab5d-40c1-b59f-40c05e1e5b97`,
    playbooks: [`689d32a6-faa1-4258-9fda-894b9bdf8571`], // The Expert
    featType: FeatType.Move,

    description: `Once per mystery you may attempt to keep going despite your injuries.`,
    
    actions: [{
      name: `It Wasn't As Bad As It Looked`,
      id: `3b8c299a-8a56-4678-883d-4abcc68b5a5c`,
      ability: Stats.Cool,
      description: `Once per mystery you may attempt to keep going despite your injuries.`,
      
      uses: 1, usesResetAtEndOfMystery: true,
      
      miss: `It was worse than it looked. The Keeper may inflict a harm move on you or make your wounds unstable.`,
      mixedSuccess: `Choose One: Heal 1 harm -or- stabilize your wounds.`,
      solidSuccess: `Heal 2 harm and stabilize your wounds.`,
      
      showHealing: true,
    }]
  },
  PreciseStrike: {
    name: `Precise Strike`,
    id: `f649cb50-aab1-4681-88a7-6782156f7388`,
    playbooks: [`689d32a6-faa1-4258-9fda-894b9bdf8571`], // The Expert
    featType: FeatType.Move,

    description: `When you **inflict \`harm\` on a monster**, you can aim for a weak spot.`,

    actions: [{
      name: `Precise Strike`,
      id: `42f4d84f-1fa8-4986-84b3-8b1f49e96209`,
      ability: Stats.Tough,
      description: `When you inflict \`harm\` on a monster, you can aim for a weak spot.`,
      
      miss: `You have left yourself open to the monster.`,
      mixedSuccess: `You inflict +1 \`harm\`.`,
      solidSuccess: `You inflict +2 \`harm\`.`,
    }]
  },
  TheOneWithThePlan: {
    name: `The One With The Plan`,
    id: `adaa8efc-6b8f-4f28-95a1-7aa333af312d`,
    playbooks: [`689d32a6-faa1-4258-9fda-894b9bdf8571`], // The Expert
    featType: FeatType.Move,

    description: `At the beginning of each mystery, roll for points to be in the right place at the right time.`,
    longDescription: `At the beginning of each mystery, you will roll to gain \`holds\`.

Spend \`holds\` to be where you need to be, prepared and ready.

If you fail, \`The Keeper\` gains a \`hold\`, which can be spent to put you in the worst place, unprepared and unready.`,
    
    showInputsInSummary: [`cbc5554a-2843-4605-b965-8e54ae25179a`], // Holds
    inputs: [
      {
        label: `Holds`, key: `cbc5554a-2843-4605-b965-8e54ae25179a`, // Displayed in Actions
        inputType: InputTypes.Checks,
        max: 2,
        resetPerMystery: true
      },
      {
        label: `Keeper Holds`, key: `d3d35b7c-3541-4ad1-84f4-d0c2d7c0cbdc`, // Displayed in Actions
        inputType: InputTypes.Checks,
        max: 1,
        resetPerMystery: true
      },
    ],
    
    actions: [{
      name: `The One With The Plan`,
      id: `0cb627bf-74ba-4d97-b185-e5da34d1be70`,
      ability: Stats.Tough,
      description: `At the beginning of each mystery, roll for **Holds** to use later to be in the right place at the right time.`,
      
      miss: `\`The Keeper\` \`holds\` 1 and can spend it to put you in the worst place, unprepared and unready.`,
      mixedSuccess: `\`Hold\` 1.`,
      solidSuccess: `\`Hold\` 2.`,
      successFooter: `You can spend your \`Hold\` to be where you need to be, prepared and ready.`,
      startOfMystery: true,
      showInputs: [`cbc5554a-2843-4605-b965-8e54ae25179a`, `d3d35b7c-3541-4ad1-84f4-d0c2d7c0cbdc`] // Holds and Keeper Holds
    }],
  },
  DarkPast: {
    name: `Dark Past`,
    id: `3de6096b-69cb-4ae4-8e93-2cad11d32cda`,
    playbooks: [`689d32a6-faa1-4258-9fda-894b9bdf8571`], // The Expert
    featType: FeatType.Move,

    description: `Trawl through your memories for something relevant to the case at hand.`,

    actions: [{
      name: `Dark Past`,
      id: `d7a18bda-f346-45db-bf64-e2caa0f46326`,
      ability: Stats.Weird,
      description: `Trawl through your memories for something relevant to the case at hand.`,
      
      miss: `You can ask \`The Keeper\` one of these questions, but that will mean you are personally complicit in creating the situation you are now dealing with.`,
      mixedSuccess: `Ask \`The Keeper\` one of these questions:`,
      solidSuccess: `Ask \`The Keeper\` two of these questions:`,
      resultFooter: `* When I dealt this creature (or one of its kind), what did I learn?
* What black magic do I know that could help here?
* Do I know anyone who might be behind this?
* Who do I know who can help us right now?`
    }]
  },
  // Flake
  ConnectTheDots: {
    name: `Connect the Dots`,
    id: `1e8b0a9b-d78d-48ec-8589-379a871999d8`,
    playbooks: [`3ef37c00-3254-4af4-830a-9a21e7c6d02a`], // The Flake
    featType: FeatType.Move,

    description: `At the beginning of each mystery, look for wider patterns that the current events may be part of.`,

    showInputsInSummary: [`fe159006-3e73-4132-a321-16e4810f05e0`], // Holds
    
    inputs: [{
      label: `Holds`, key: `fe159006-3e73-4132-a321-16e4810f05e0`, // Displayed in Actions
      inputType: InputTypes.Checks,
      max: 3,
      resetPerMystery: true,
    }],

    actions: [{
      name: `Connect the Dots`,
      id: `f7b5b487-640c-48b8-9355-dcb22c56b078`,
      ability: Stats.Sharp,
      description: `Look for wider patterns that the current events may be part of.`,
      longDescription: `At the start of a \`mystery\`, you'll roll to gain \`holds\`.

During the \`mystery\`, you can spend a \`hold\` to ask any one of the following questions:
* Is this person connected to the current events more than they are saying?
* When and where will the next critical event occur?
* What does the monster want from this person?
* Is this connected to previous mysteries we have investigated?
* How does this mystery connect to the bigger picture?`,
      
      miss: `You fail to see any connections. \`The Keeper\` may take a move against you based on your inability to see the bigger picture.`,
      mixedSuccess: `\`Hold\` 1.`,
      solidSuccess: `\`Hold\` 3.`,
      successFooter: `During the \`mystery\`, you can spend a \`hold\` to ask any one of the following questions:
* Is this person connected to the current events more than they are saying?
* When and where will the next critical event occur?
* What does the monster want from this person?
* Is this connected to previous mysteries we have investigated?
* How does this mystery connect to the bigger picture?`,

      startOfMystery: true,
      showInputs: [`fe159006-3e73-4132-a321-16e4810f05e0`] // Holds
    }],
  },
  CrazyEyes: {
    name: `Crazy Eyes`,
    id: `d4880510-6fc2-449e-a6f6-0849c8ec36d1`,
    playbooks: [`3ef37c00-3254-4af4-830a-9a21e7c6d02a`], // The Flake
    featType: FeatType.Move,

    description: `Gain +1 Weird (max +3)`,
    offsetStat: {ability: Stats.Weird, offset: 1, max: 3 },
  },
  ItAllFitsTogether: {
    name: `See, It All Fits Together`,
    id: `98dbb124-67af-4cb9-9a8c-24bf46ee0805`,
    playbooks: [`3ef37c00-3254-4af4-830a-9a21e7c6d02a`], // The Flake
    featType: FeatType.Move,

    description: `You can roll +Sharp (instead of +Charm) when you \`manipulate someone\``,

    modMoves: [{
      applyToMoves: [`d245fc16-53f7-40bd-bdbb-45cde437adab`, `1d8097c8-90bc-485e-90a0-0eb9e94d0959`], // Manipulate Someone and Manipulate A Hunter
      alternateAbility: Stats.Sharp,
    }]
  },
  SuspiciousMind: {
    name: `Suspicious Mind`,
    id: `0e00af10-e0c3-49a7-a922-b54cafa09675`,
    playbooks: [`3ef37c00-3254-4af4-830a-9a21e7c6d02a`], // The Flake
    featType: FeatType.Move,

    description: `If someone lies to you, you know it.`,

    passives: [{
      type: PassiveTypes.Protections,
      description: `If someone lies to you, you know it.`,
    }]
  },
  OftenOverlooked: {
    name: `Often Overlooked`,
    id: `5a3d28e5-fb9b-4b6c-90d5-2884a963cea3`,
    playbooks: [`3ef37c00-3254-4af4-830a-9a21e7c6d02a`], // The Flake
    featType: FeatType.Move,

    description: `When you act all crazy, but are taken as an obvious distraction to be ignored.`,

    actions: [{
      name: `Often Overlooked`,
      id: `0650cc3c-bb48-4e5b-8e3a-deebb32f959f`,
      ability: Stats.Weird,
      description: `When you act all crazy, but are taken as an obvious distraction to be ignored.`,
      
      miss: `You draw lots (but not all) the attention.`,
      mixedSuccess: `You are regarded as either un-threatening or unimportant (pick one.)`,
      solidSuccess: `You are regarded as un-threatening and unimportant.`
    }]
  },
  Contrary: {
    name: `Contrary`,
    id: `ea9088b8-319b-410d-bfe2-5dfc9e479db6`,
    playbooks: [`3ef37c00-3254-4af4-830a-9a21e7c6d02a`], // The Flake
    featType: FeatType.Move,

    description: `When you seek out and receive honest advice, then do something else instead.`,
    longDescription: `When you seek out and receive honest advice on the best course of action for you and then do something else instead, mark experience.
If you do exactly the opposite of their advice, you also take +1 \`ongoing\` on any moves you make pursuing that course.`,

    passives: [{
      type: PassiveTypes.Experience,
      description: `When you seek out and receive honest advice, then do something else instead, gain +1 **Experience**.`,
    }],
    modMoves: [{
      applyToMoves: [`*`],
      modRoll: 1,
      modCondition: `Apply while you do the exact opposite of honest advice given to you (and gain \`experience\`, if you haven't already for this advice.)`,
    }]
  },
  NetFriends: {
    name: `Net Friends`,
    id: `981370ad-63a5-4f58-a4cf-79683ac40bdc`,
    playbooks: [`3ef37c00-3254-4af4-830a-9a21e7c6d02a`], // The Flake
    featType: FeatType.Move,

    description: `You know a lot of people on the Internet. You can contact a net friend to help with a mystery.`,

    actions: [{
      name: `Net Friends`,
      id: `8e982fb5-f5fc-4a75-8dbd-d9ab32c2f455`,
      ability: Stats.Charm,
      description: `You know a lot of people on the Internet. You can contact a net friend to help with a mystery.`,

      miss: `You burn some bridges online.`,
      mixedSuccess: `They're prepared to help, but it's either going to take some time or you're going to have to do part of it yourself.`,
      solidSuccess: `They're available and helpful--they can fix something, break a code, hack a computer, or get you some special information.`,
    }]
  },
  Sneaky: {
    name: `Sneaky`,
    id: `d63fe39c-5505-4ab6-b1d0-6b3223b306fe`,
    playbooks: [`3ef37c00-3254-4af4-830a-9a21e7c6d02a`], // The Flake
    featType: FeatType.Move,

    description: `When you attack from ambush, or from behind, inflict +2 \`harm\`.`,

    modAttack: [{
      name: `Sneaky`,
      // TODO: Is this right? Does this apply harm instead of roll bonus?
      harmOffset: 2,
      condition: `Apply when you attack from ambush or from behind.`,
    }]
  },
  // Gumshoe
  OccultConfidential: {
    name: `Occult Confidential`,
    id: `5464ec99-8e20-4732-8d4d-b46442036ad4`,
    playbooks: [`12bc1318-24c7-4402-b9bb-be0698c4ed99`], // The Gumshoe
    featType: FeatType.Move,

    description: `The first time in each mystery that you observe a monster, minion, or phenomenon in action, you may ask an "\`investigate a mystery\`" question.`,
    
    autoActions: [{
      name: `Occult Confidential`,
      id: `978f6c0b-5ca3-4d21-889a-3b080d15ecaa`,
      description: `The first time in each mystery that you observe a monster, minion, or phenomenon in action, you may ask a question.`,
      
      uses: 1, usesResetAtEndOfMystery: true,

      longDescription: `The first time in each mystery that you observe a monster, minion, or phenomenon in action, you may ask one of the following questions:
\`@investigationQuestions\``,
    }]
  },
  TheNakedCity: {
    // TODO: This one is kinda odd. You're supposed to pick 4 things, then all abilities, etc. rely on those choices.
    name: `The Naked City`,
    id: `65cadd94-cffe-46a9-be0d-840811627edf`,
    playbooks: [`12bc1318-24c7-4402-b9bb-be0698c4ed99`], // The Gumshoe
    featType: FeatType.Move,

    description: `You have lots of personal contacts wherever you go. You can hit them up for clues and small favors.`,
    longDescription: `You have lots of personal contacts wherever you go.

You can hit up a contact for info (+1 to one \`investigate a mystery\` roll) or small favor. There may be a small cost involved.
Personal contacts can provide more significant help. \`The Keeper\` decides their price on a case-by-case basis.

Pick four contact types from the provided areas (or from other areas agreed to between you and \`The Keeper\`.)`,

    inputs: [{
      label: `Contact Types`, key: `59efa6f6-a69f-4626-b16d-98c2027c2cc0`, // Displayed in Actions and modded by improvement
      inputType: InputTypes.TextChoice,
      choose: 4,
      options: [
        `Academics`, `Accountants`, `Artists`, `Bartenders`, `Clergy`, `Conspiracy Theorists`, `Construction`,
        `Courts`, `Criminals (organized)`, `Criminals (street)`, `Cultists`, `Engineers`, `Espionage`, `Film and TV`,
        `Forensic Scientists`, `Fringe Scientists`, `Hackers`, `Journalists`, `Lawyers`, `Mechanics`, `Media`,
        `Medical Practitioners`, `Military`, `Morgue`, `Occult`, `Police (local)`, `Police (national)`, `Politicians`,
        `Prisons`, `Private Security`, `Property Developers`, `Stage Magicians`, `Technologists`, `Transportation`
      ],
      allowCustom: true,
    }],

    autoActions: [{
      name: `The Naked City`,
      id: `2b52b95f-8280-4a63-9ceb-9171cceca70b`,
      description: `You have lots of personal contacts wherever you go. You can hit them up for clues and small favors.`,
      longDescription: `You have lots of personal contacts wherever you go.

You can hit up a contact for info (+1 to one \`investigate a mystery\` roll) or small favor. There may be a small cost involved.
Personal contacts can provide more significant help. \`The Keeper\` decides their price on a case-by-case basis.`,
      showInputs: [ `59efa6f6-a69f-4626-b16d-98c2027c2cc0` ], // Contacts
    }],
    modMoves: [{
      applyToMoves: [`1b0ccc41-de6e-45dc-9f9f-bb1d7d33a447`], // Investigate a Mystery
      footnote: `You have lots of personal contacts wherever you go. You can hit them up for clues and small favors.`,
      footnoteInputs: [ `59efa6f6-a69f-4626-b16d-98c2027c2cc0` ], // Contacts
    }],
  },
  ThePostman: {
    name: `The Postman Always Rings Twice`,
    id: `6104c52f-a784-4f0c-9c7e-366ed0272786`,
    playbooks: [`12bc1318-24c7-4402-b9bb-be0698c4ed99`], // The Gumshoe
    featType: FeatType.Move,
    prerequisiteFeats: [`d08ea9e4-88fb-46d6-975e-1045575a4ea5`], // Gumshoe Code

    description: `Twice per mystery--as long as you adhere to your **Code**--you may re-roll a roll`,

    autoActions: [{
      name: `The Postman Always Rings Twice`,
      id: `1b8f7215-b74c-40bb-9196-ff4d08dff886`,
      description: `Twice per \`mystery\`--as long as you adhere to your **Code**--you may re-roll a roll`,
      uses: 2, usesResetAtEndOfMystery: true,
      showInputs: [`a746bcc2-3317-4002-9852-f63025bdabf9`,`d424ec39-3d3b-4d9a-8cb9-49b7bc723d78`] // Code and Code Broken
    }]
  },
  TheLongGoodbye: {
    name: `The Long Goodbye`,
    id: `4f8fd245-5c7d-4aec-bfb8-1a916d0774fd`,
    playbooks: [`12bc1318-24c7-4402-b9bb-be0698c4ed99`], // The Gumshoe
    featType: FeatType.Move,
    prerequisiteFeats: [`d08ea9e4-88fb-46d6-975e-1045575a4ea5`], // Gumshoe Code

    description: `You can't die wile you have an open case and an unbroken **Code**.`,
    longDescription: `You can't die with an open case __and__ an unbroken Code. You suffer all \`harm\`, as normal,
but your death is postponed until you have either completed or abandoned the case, or you break your **Code** (then all bets are off.)`,

    passives: [{
      type: PassiveTypes.Health,
      description: `You can't die wile you have an open case __and__ an unbroken **Code**.`,
      showInputs: [`a746bcc2-3317-4002-9852-f63025bdabf9`,`d424ec39-3d3b-4d9a-8cb9-49b7bc723d78`] // Code and Code Broken
    }]
  },
  JessicaJonesEntry: {
    name: `Jessica Jones Entry`,
    id: `c5611e67-15b9-481f-887e-8bc776a7459e`,
    playbooks: [`12bc1318-24c7-4402-b9bb-be0698c4ed99`], // The Gumshoe
    featType: FeatType.Move,

    description: `When you double-talk your way into a secure location with **+Charm**.`,

    actions: [{
      name: `Jessica Jones Entry`,
      id: `ebd8dcb4-1a70-43e7-85d4-0f0903caebcf`,
      // TODO: This reference is dumb. Add a long description to help.
      description: `When you double-talk your way into a secure location with **+Charm**.`,
      ability: Stats.Charm,

      miss: `Pick one:`,
      mixedSuccess: `Pick two:`,
      solidSuccess: `Pick three:`,
      resultFooter: `
* You don't leave any trace of what you searched.
* You find what you wanted.
* You find something else that's important.
* You don't piss anyone off.
* You aren't recognized`,
    }]
  },
  OutOfThePast: {
    name: `Out of the Past`,
    id: `ae903567-50c4-439b-ae69-cf2ca62ee099`,
    playbooks: [`12bc1318-24c7-4402-b9bb-be0698c4ed99`], // The Gumshoe
    featType: FeatType.Move,

    description: `A police buddy will do you big favors, but expect something in return.`,
    longDescription: `You have a police buddy who will do you big favors.
Get in touch with them when you need to redirect law enforcement attention,
get a heads-up on what operations are planned, or access police files.

You owe them: Expect them to collect it soon.`,
    inputs: [{
      label: `Police Buddy`, key: `4302d123-58bf-4e28-bd89-5933f44d9f97`, // Displayed on action
      subLabel: `A have a police buddy who will do you big favors.
Get in touch with them when you need to redirect law enforcement attention,
get a heads-up on what operations are planned, or access police files.`,
      inputType: InputTypes.Character,
      startingType: CharacterTypes.Bystander,
      crewMin: 1,
      crewMax: 2,
    }],
    
    autoActions: [{
      name: `Out of the Past`,
      id: `104ba07d-8deb-4a5f-b336-f16b98149d65`,
      description: `A police buddy will do you big favors, but expect something in return.`,
      showInputs: [`4302d123-58bf-4e28-bd89-5933f44d9f97`] // Police Buddy
    }]
  },
  AsphaltJungle: {
    name: `Asphalt Jungle`,
    id: `0c3cfd4f-a0a4-45e2-bc14-d7d8ab9b199b`,
    playbooks: [`12bc1318-24c7-4402-b9bb-be0698c4ed99`], // The Gumshoe
    featType: FeatType.Move,

    description: `You heal faster than normal people and aren't affected by scuffs and scrapes.`,
    longDescription: `You heal faster than normal people. Any time your \`harm\` gets healed, heal an extra point.
You are immune to all the harm move effects under '0-harm' and '1-harm' (when \`The Keeper\` would apply these, ignore it.)

Example 0-Harm and 1-Harm Move Effects you are immune to:
* Momentarily inhibited.
* Drop something.
* Take -1 \`forward\`.
* Fall down.
* Take -1 \`ongoing\`.
* Pass out.
* Intense Pain.`,

    passives: [
      {
        type: PassiveTypes.Health,
        description: `Any time your \`harm\` gets healed, heal an extra point.`,
      },
      {
        type: PassiveTypes.Protections,
        description: `You are immune to **Harm Move** effects under '0-harm' and '1-harm'.`,
      },
    ]
  },
  Hacker: {
    name: `Hacker with a Dragon Tattoo`,
    id: `86a82955-3477-47da-afd4-209662ebabe6`,
    playbooks: [`12bc1318-24c7-4402-b9bb-be0698c4ed99`], // The Gumshoe
    featType: FeatType.Move,

    description: `Hack into a computer system.`,

    actions: [{
      name: `Hacker with a Dragon Tattoo`,
      id: `1d5ad9d0-e566-4c37-9361-49095eeac5ca`,
      ability: Stats.Sharp,
      description: `When you hack into a computer system with **+Sharp**.`,
      
      miss: `\`The Keeper\` can make a hard move against you. You likely failed to hack the computer system.`,
      mixedSuccess: `Pick one:`,
      solidSuccess: `Pick two:`,
      successFooter: `
* You leave no traces.
* You learn something important.
* You can leave misinformation in place.
* You gain access to somewhere you want to get into.
`,
    }]
  },
  JustOneMoreThing: {
    name: `"Just one more thing"`,
    id: `b47fdf18-3519-4bfa-9418-a31602233cba`,
    playbooks: [`12bc1318-24c7-4402-b9bb-be0698c4ed99`], // The Gumshoe
    featType: FeatType.Move,

    description: `When you ask a suspect leading questions.`,

    actions: [{
      name: `"Just one more thing"`,
      id: `db5b2ed9-1e27-4172-8ec4-f1b016d29da0`,
      ability: Stats.Charm,
      description: `When you ask a suspect leading questions.`,
      
      miss: `\`Hold\` 1, but something bad is going to happen to you...`,
      mixedSuccess: `\`Hold\` 1`,
      solidSuccess: `\`Hold\` 2`,
      resultFooter: `You can spend one \`hold\` to ask \`The Keeper\` one of the following questions:
* Was that a lie?
* What is something you left out that you didn't want me to notice?
* Are you complicit with any ongoing criminal activity?
* Did you commit this specific crime?

OR an \`investigate a mystery\` Question:
\`@investigationQuestions}\``
    }]
  },
  // Hex
  BadLuckCharm: {
    name: `Bad Luck Charm`,
    id: `9669821e-791a-40b0-b37a-0eecaed69e41`,
    playbooks: [`23bdadbc-b690-4baa-8d96-7c791b4d66da`], // The Hex
    featType: FeatType.Move,
    prerequisiteMoves: [`ae7216e7-d5d0-4858-9469-9c3a04f47844`], // Use Magic

    description: `Whenever you fail to \`use magic\`, the backlash will never directly affect __you__.`,
    longDescription: `Whenever you \`use magic\` and miss, the backlash never affects you directly if there's someone else around to hit.
It'll go for allies, other \`Hunters\`, innocent bystanders, etc. Every so often it may even hit an enemy.`,

    modMoves: [{
      applyToMoves: [`ae7216e7-d5d0-4858-9469-9c3a04f47844`], // Use Magic
      footnote: `The backlash of a miss will never directly affect you (others on the other-hand...)`,
      amendResults: {
        miss: `The backlash doesn't affect you directly if there's someone else around to hit.
It'll go for \`allies\`, other \`Hunters\`, innocent \`bystanders\`, etc. Every so often it may even hit an enemy.`,
      }
    }]
  },
  BurnEverything: {
    name: `Burn Everything`,
    id: `e0e31f7a-8ade-4d4c-9707-0587647427aa`,
    playbooks: [`23bdadbc-b690-4baa-8d96-7c791b4d66da`], // The Hex
    featType: FeatType.Move,
    prerequisiteMoves: [`ae7216e7-d5d0-4858-9469-9c3a04f47844`], // Use Magic

    description: `When you \`use magic\` to inflict \`harm\`, you can choose to inflict 3 \`harm\` in an \`area\` or 3 \`harm\` that \`ignores armor\``,

    modMoves: [{
      applyToMoves: [`ae7216e7-d5d0-4858-9469-9c3a04f47844`], // Use Magic
      footnote: `When you \`use magic\` to inflict \`harm\`, you can choose to inflict [\`#3-Harm\` \`#area\` \`#magic\` \`#obvious\`] or [\`#3-Harm\` \`#ignore-armor\` \`#magic\` \`#obvious\`]`,
      amendResults: {
        successHeader: `Through **'Burn Everything'**, have the following effect options as well:
* Inflict 3 \`harm\` \`#area\` \`#magic\` \`#obvious\`
* Inflict 3 \`harm\` \`#ignore-armor\` \`#magic\` \`#obvious\``,
      },
    }]
  },
  CastTheBones: {
    name: `Cast the Bones`,
    id: `237fa70b-094e-4fd4-9919-581d82acc23d`,
    playbooks: [`23bdadbc-b690-4baa-8d96-7c791b4d66da`], // The Hex
    featType: FeatType.Move,

    description: `Once per \`mystery\`, you may perform a kind of divination to see the future using **+Sharp**.`,
    longDescription: `Once per \`mystery\`, you may perform some kind of divination (tarot, casting runes, reading entrails, etc.) to glean information about the future.`,

    actions: [{
      name: `Cast the Bones`,
      id: `eaa858da-2de9-46bf-95b1-6428cec2df21`,
      ability: Stats.Sharp,
      description: `Once per \`mystery\`, you can perform a kind of divination to see the future.`,
      longDescription: `Once per \`mystery\`, you may perform some kind of divination (tarot, casting runes, reading entrails, etc.) to glean information about the future.`,

      miss: `You get some information, but it's not what you wanted to hear.`,
      mixedSuccess: `\`Hold\` 1`,
      solidSuccess: `\`Hold\` 2`,
      successFooter: `You can spend one \`hold\` to ask \`The Keeper\` one of the following questions.
\`The Keeper\` will answer truthfully, with either a direct answer or how to find out:
* What can I gain from this person/place/thing/creature?
* Who has touched this person/place/thing/creature before me?

You can also ask questions from the "\`investigate a mystery\`" list:
\`@investigationQuestions\``,

      uses: 1,
      usesResetAtEndOfMystery: true,
    }]
  },
  ForceOfWill: {
    name: `Force of Will`,
    id: `9958712b-55a4-48fd-a9d5-c519bdf6a444`,
    playbooks: [`23bdadbc-b690-4baa-8d96-7c791b4d66da`], // The Hex
    featType: FeatType.Move,

    description: `Apply your will into dispelling a magical effect, blocking a spell, or suspending a phenomenon.`,

    actions: [{
      name: `Force of Will`,
      id: `8bfc2192-346a-473c-b378-60cb8f8c07f2`,
      ability: Stats.Weird,
      description: `Apply your will into dispelling a magical effect, blocking a spell, or suspending a phenomenon.`,

      miss: `\`The Keeper\` can make a hard move against you. You likely failed at dispelling the target.`,
      successHeader: `Momentary magics are canceled completely. Long lasting spells and effects are suspended temporarily.`,
      mixedSuccess: `Unfortunately, you take 1 \`harm\` as the strain of dismissing the magic unravels you.`,
      solidSuccess: `You can also spend \`luck\` to instantly snuff out a powerful spell or strange effect.`,
    }]
  },
  LuckOfTheDamned: {
    name: `Luck of the Damned`,
    id: `50864b4a-29c9-4dfc-86f2-cf11f2883296`,
    playbooks: [`23bdadbc-b690-4baa-8d96-7c791b4d66da`], // The Hex
    featType: FeatType.Move,

    description: `After you \`use magic\` or cast a **Rote**, take +1 \`forward\` on the next roll you make.`,

    modMoves: [
      {
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
          `*rote`, // All Rotes
        ],
        footnote: `After you use this move, take +1 \`forward\` on the next roll you make.`
      },
      {
        applyToMoves: [`*`],
        modRoll: 1,
        modCondition: `Apply once to the move you make after you cast a **Rote** or \`use magic\` (or another **basic weird move**.)`,
      }
    ]
  },
  SympatheticToken: {
    name: `Sympathetic Token`,
    id: `15f9c6e4-67a5-43f0-9bf1-89c94a205400`,
    playbooks: [`23bdadbc-b690-4baa-8d96-7c791b4d66da`], // The Hex
    featType: FeatType.Move,

    description: `While carrying a token from someone, you gain +1 \`ongoing\` to \`use magic\` to target them and you can target them distance. Token is lost on a miss.`,
    longDescription: `As long as you carry a personal object belonging to someone, such as a lock of hair, a full set of toenails, or a treasured family heirloom,
you get +1 \`ongoing\` to \`use magic\` against them. You can also \`use magic\` against them from a distance.
If you try to \`use magic\` against them and miss, the token is lost, destroyed, or loses its power.`,
    
    modMoves: [{
      applyToMoves: [
        // Only these target a person:
        `ae7216e7-d5d0-4858-9469-9c3a04f47844`, // Use Magic
        `5bd60cfb-0fe1-4b8a-a606-a665bb4a660c`, // Empath
        // `e12b2b89-6e19-43bc-a70d-6e9cdb94b77c`, // Illuminated
        // `59d0d20d-8222-4928-9530-867537ebedd1`, // No Limits
        // `00dcbb31-c8bd-43f6-b092-2e9f2188552a`, // Past Lives
        // `0ef9f128-f877-49f6-91b2-1c9e04850f4a`, // Sensitive
        // `22905bf8-71e5-453e-931c-9c8041fc4e7a`, // Trust Your Gut
        `231dd633-f244-49dd-ba71-74ec957e1a83`, // Telekinesis
        // `8113df8e-c21f-417f-94b9-6a1beb0b88c4`, // Weird Science
        `*rote`, // All Rotes
      ],
      footnote: `While carrying a token from someone, you gain +1 \`ongoing\` when targeting them and you can target them at a distance. The token is lost on a miss.`,
      modRoll: 1,
      modCondition: `Apply while targeting someone and carrying a token from them. (The token is lost on a miss.)`,
    }]
  },
  ThisMightSting: {
    name: `This Might Sting`,
    id: `b8635e43-5b46-4a26-a39e-ed33dbe13b14`,
    playbooks: [`23bdadbc-b690-4baa-8d96-7c791b4d66da`], // The Hex
    featType: FeatType.Move,
    prerequisiteMoves: [`ae7216e7-d5d0-4858-9469-9c3a04f47844`], // Use Magic

    description: `You can \`use magic\` to heal 3 \`harm\`, but the process is exceptionally painful. On a 7-9 it also leaves a gnarly scar.`,

    modMoves: [{
      applyToMoves: [`ae7216e7-d5d0-4858-9469-9c3a04f47844`], // Use Magic
      footnote: `You can heal 3 \`harm\`, but the process is exceptionally painful. On a 7-9 it also leaves a gnarly scar.`,
      amendResults: {
        successHeader: `* You can heal 3 \`harm\`, but the process is exceptionally painful.`,
        mixedSuccess: `If you chose to 'heal 3 \`harm\`', it leaves a gnarly scar.`,
        showHealing: true,
      },
    }]
  },
  WiseSoul: {
    name: `Wise Soul`,
    id: `6632c6fd-082d-425d-9f16-aeb87ecc2809`,
    playbooks: [`23bdadbc-b690-4baa-8d96-7c791b4d66da`], // The Hex
    featType: FeatType.Move,
    prerequisiteMoves: [`ae7216e7-d5d0-4858-9469-9c3a04f47844`], // Use Magic

    description: `Whenever you \`use magic\`, you can get a glimpse of of the worst result and back out before the roll.`,
    longDescription: `Whenever you \`use magic\`, right before you roll, you can ask \`The Keeper\` what exactly would happen on a miss.
If you dislike the risk, you can stop casting at the last second and let the spell fizzle harmlessly. All effort is wasted.`,

    modMoves: [{
      applyToMoves: [`ae7216e7-d5d0-4858-9469-9c3a04f47844`], // Use Magic
      footnote: `Before you roll, you can ask what would happen on a miss and decide to end the spell before it is rolled.`,
    }]
  },
  // Initiate
  TheCall: {
    name: `The Call`,
    id: `96ee3021-d46d-42b6-8b77-8aeea00288d4`,
    playbooks: [`a78c7ee1-eb8d-4622-adeb-22d9d87169b5`], // The Initiate
    featType: FeatType.Move,

    description: `While in good standing with your **Sect**, roll for help (and possibly a mission) at the start of each \`mystery\`.`,

    inputs: [
      {
        label: `Mission`, key: `22c70019-eb32-4c07-a57d-f1900545cd80`, // Displayed in action
        inputType: InputTypes.TextArea,
        placeholder: `Protect the boy`,
      },
      {
        label: `Failed`, key: `264a6d5d-d0d4-4939-ae33-f3e5f8a0a34c`, // Displayed in action
        inputType: InputTypes.Checks,
        max: 1,
      },
    ],
    
    actions: [{
      name: `The Call`,
      id: `e98c877c-36f8-4d96-b805-59e60b995691`,
      ability: Stats.Charm,
      description: `While in good standing with your **Sect**, roll for help at the start of each \`mystery\`.`,
      
      miss: `They ask you to do something bad.`,
      mixedSuccess: `You get a mission associated with the coming \`mystery\`. If you do it, they'll give you some info or help.`,
      solidSuccess: `They provide some useful info or help in the field.`,
      resultFooter: `If you fail a mission or refuse an order, you'll be in trouble with the **Sect** until you atone.`,
      startOfMystery: true,
      showInputs: [`22c70019-eb32-4c07-a57d-f1900545cd80`,`264a6d5d-d0d4-4939-ae33-f3e5f8a0a34c`] // Mission and Failed
    }],
  },
  AncientFightingArts: {
    name: `Ancient Fighting Arts`,
    id: `ce09e84b-504e-447e-a3d5-bbfe71c0e84c`,
    playbooks: [`a78c7ee1-eb8d-4622-adeb-22d9d87169b5`], // The Initiate
    featType: FeatType.Move,

    description: `When using an old-fashioned \`#hand\` weapon, you inflict +1 \`harm\` and gain a +1 whenever you roll to \`protect someone\`.`,

    modAttack: [{
      name: `Ancient Fighting Arts`,
      harmOffset: 1,
      applyToItem: [
        Gear.Sword.id,
        Gear.Axe.id,
        Gear.BigSword.id,
        Gear.BigAxe.id,
        Gear.SilverKnife.id,
        Gear.FightingSticks.id,
        Gear.Spear.id,
        Gear.Mace.id,
      ],
    }],
    modMoves: [{
      applyToMoves: [`48664b18-63e2-47fb-8363-ddcbefabe02e`], // Protect Someone
      modRoll: 1,
      modCondition: `Apply while using an old-fashioned \`#hand\` weapon.`,
    }]
  },
  Mystic: {
    name: `Mystic`,
    id: `6d558030-3af3-47d7-aca6-1011403dbbc4`,
    playbooks: [`a78c7ee1-eb8d-4622-adeb-22d9d87169b5`], // The Initiate
    featType: FeatType.Move,

    description: `Every time you successfully \`use magic\`, take +1 \`forward\``,

    modMoves: [{
      applyToMoves: [`*`],
      modRoll: 1,
      modCondition: `Apply once after you successfully \`use magic\`.`,
    }]
  },
  Fortunes: {
    name: `Fortunes`,
    id: `1e12c3e8-cdcb-47c6-b23d-31e9051e9969`,
    playbooks: [`a78c7ee1-eb8d-4622-adeb-22d9d87169b5`], // The Initiate
    featType: FeatType.Move,

    description: `Use Sect secrets to predict the future once per mystery.`,

    actions: [{
      name: `Fortunes`,
      id: `e14faa72-4ecb-4c4b-b182-548026072bfe`,
      ability: Stats.Weird,
      description: `Use Sect secrets to predict the future once per mystery.`,

      miss: `You get bad information and \`The Keeper\` decides how that affects you.`,
      mixedSuccess: `\`Hold\` 1`,
      solidSuccess: `\`Hold\` 3`,
      successFooter: `Spend a \`hold\` to:
* Have a useful object ready.
* Be somewhere you are needed, just in time.
* Take +1 \`forward\`, or give +1 \`forward\` to another \`hunter\`.
* Retroactively warn someone about an attack, so it doesn't happen.`,
    }]
  },
  SacredOath: {
    name: `Sacred Oath`,
    id: `13b1c4d5-b513-421f-bf16-61a9093fe62b`,
    playbooks: [`a78c7ee1-eb8d-4622-adeb-22d9d87169b5`], // The Initiate
    featType: FeatType.Move,

    description: `Bind yourself to a single goal. This oath empowers you and can gain you \`experience\``,
    longDescription: `You may bind yourself to a single goal, forsaking something during your quest
(e.g. speech, all sustenance but bread and water, alcohol, lying, sex, etc).
Get \`The Keeper\`'s agreement on this--it should match the goal in importance and difficulty.
While you keep your oath and work towards your goal,
mark **Experience** at the end of every session and get +1 on any rolls that directly help achieve the goal.
If you break the oath, take -1 \`ongoing\` until you have atoned.`,

    inputs: [
      {
        label: `Oath Goal`, key: `f3e3a5b3-6ecd-429e-88f7-262c22c0ad14`,
        inputType: InputTypes.Text,
        placeholder: `Kill Dracula`,
      },
      {
        label: `Oath Sacrifice`, key: `f148a7ab-213b-443c-b5f4-9695766c4f81`,
        inputType: InputTypes.Text,
        placeholder: `Eat not but bread and water.`
      },
      {
        label: `Oath Broken`, key: `079f2681-d57c-469a-a36c-058f08968f95`,
        inputType: InputTypes.Checks,
        max: 1,
      },
    ],

    modMoves: [
      {
        applyToMoves: [`*`],
        modRoll: 1,
        modCondition: `Apply while your Oath is intact and this action would directly help you achieve your goal.`,
        // Oath details show in next item
      },
      {
        applyToMoves: [`*`],
        modRoll: -1,
        modAppliedViaInput: `079f2681-d57c-469a-a36c-058f08968f95`, // Oath broken
        modCondition: `Applied while your Oath is broken (until you atone.)`,
        resultInputs: [ `f3e3a5b3-6ecd-429e-88f7-262c22c0ad14`, `f148a7ab-213b-443c-b5f4-9695766c4f81`, `079f2681-d57c-469a-a36c-058f08968f95` ] // Oath Goal, Sacrifice, and Broken
      }
    ],
    passives: [{
      type: PassiveTypes.SessionEnd,
      description: `While your Oath is intact and you are working toward your goal, take +1 \`Experience\` at the end of each session.`,
      showInputs: [ `f3e3a5b3-6ecd-429e-88f7-262c22c0ad14`, `f148a7ab-213b-443c-b5f4-9695766c4f81`, `079f2681-d57c-469a-a36c-058f08968f95` ] // Oath Goal, Sacrifice, and Broken
    }],
  },
  Mentor: {
    name: `Mentor`,
    id: `dea250ab-6c99-4b41-b732-16e2671d010a`,
    playbooks: [`a78c7ee1-eb8d-4622-adeb-22d9d87169b5`], // The Initiate
    featType: FeatType.Move,

    description: `Contact your mentor in the Sect for information.`,

    inputs: [{
      label: `Mentor`, key: `c598494b-e8bc-43e3-b226-fe965b21fd8a`, // Displayed in Action
      inputType: InputTypes.Character,
      startingType: CharacterTypes.Bystander,
      startingSubType: BystanderTypes.Mentor,
    }],

    actions: [{
      name: `Contact Mentor`,
      id: `071484c2-f07d-41e3-af79-826f8d7bc969`,
      ability: Stats.Sharp,
      description: `Contact your mentor in the Sect for information.`,
      
      miss: `Your question causes trouble.`,
      mixedSuccess: `Choose: They're either busy and can't help --OR-- They answer the question but you owe them a favour.`,
      solidSuccess: `You get an answer to your question, no problem.`,
      showInputs: [`c598494b-e8bc-43e3-b226-fe965b21fd8a`], // Mentor
    }]
  },
  Apprentice: {
    name: `Apprentice`,
    id: `bf7257f4-7422-4a9d-8361-1169e3ecf467`,
    playbooks: [`a78c7ee1-eb8d-4622-adeb-22d9d87169b5`], // The Initiate
    featType: FeatType.Move,

    description: `You have an apprentice. Your job is to teach them the Sect's ways. They count as a \`ally/subordinate\`.`,
    
    inputs: [{
      label: `Apprentice`, key: `60296362-aaec-4f55-9789-5fdb3a23384e`,
      subLabel: `You have an apprentice. Your job is to teach them the Sect's ways.`,
      inputType: InputTypes.Character,
      startingType: CharacterTypes.Ally,
      startingSubType: AllyType.Subordinate,
    }],
  },
  HelpingHand: {
    name: `Helping Hand`,
    id: `b41a4186-7467-46a0-8d5e-17e7ec4ceda1`,
    playbooks: [`a78c7ee1-eb8d-4622-adeb-22d9d87169b5`], // The Initiate
    featType: FeatType.Move,

    description: `When you successfully \`help out\` another \`Hunter\`, they get +2 instead of the usual +1.`,

    modMoves: [
      {
        applyToMoves: [`2c7dd11e-b12b-4a02-b109-41e7daf65549`], // Help Out
        footnote: `When you successfully \`help out\` another \`Hunter\`, they get +2 instead of the usual +1.`,
        replaceResults: {
          successHeader: `Your help grants them +2 to their roll.`
        }
      }
    ],
  },
  ThatOldBlackMagic: {
    name: `That Old Black Magic`,
    id: `01d31b85-9d83-4c02-ac6a-c3b75ad0f9d8`,
    playbooks: [`a78c7ee1-eb8d-4622-adeb-22d9d87169b5`], // The Initiate
    featType: FeatType.Move,
    prerequisiteMoves: [`ae7216e7-d5d0-4858-9469-9c3a04f47844`], // Use Magic

    description: `When you \`use magic\`, you can ask a question from the **Investigate a Mystery** move as your effect.`,

    modMoves: [{
      applyToMoves: [`ae7216e7-d5d0-4858-9469-9c3a04f47844`], // Use Magic
      footnote: `When you \`use magic\`, you can ask a question from the **Investigate a Mystery** move as your effect.`,
      amendResults: {
        successHeader: `* You can also ask one of these questions as an effect:
\`  @investigationQuestions\``, // TODO: Make the infill indent when it finds whitespace
      }
    }]
  },
  // Monstrous
  Immortal: {
    name: `Immortal`,
    id: `56ad962b-c655-43f7-b241-c0546efb0566`,
    playbooks: [`a5f796af-dd20-4ee0-8920-18b80e20ec24`], // The Monstrous
    featType: FeatType.Move,

    description: `You do not age or sicken, and whenever you suffer \`harm\`, you suffer 1 less \`harm\`.`,

    passives: [{
      type: PassiveTypes.Protections,
      description: `You do not age or sicken.`
    }],
    
    modArmor: [{
      name: `Immortal`,
      armorOffset: 1,
    }],
  },
  UnnaturalAppeal: {
    name: `Unnatural Appeal`,
    id: `bd27946f-1430-4cca-9715-1cd349374aea`,
    playbooks: [`a5f796af-dd20-4ee0-8920-18b80e20ec24`], // The Monstrous
    featType: FeatType.Move,

    description: `Roll **+Weird** instead of **+Charm** when you \`manipulate someone\`.`,

    modMoves: [{
      applyToMoves: [`d245fc16-53f7-40bd-bdbb-45cde437adab`, `1d8097c8-90bc-485e-90a0-0eb9e94d0959`], // Manipulate Someone and Manipulate A Hunter
      alternateAbility: Stats.Weird
    }]
  },
  UnholyStrength: {
    name: `Unholy Strength`,
    id: `9a3bddb6-d4a7-43b5-b213-745666aaf772`,
    playbooks: [`a5f796af-dd20-4ee0-8920-18b80e20ec24`], // The Monstrous
    featType: FeatType.Move,

    description: `When you \`kick some ass\`, roll **+Weird** instead of **+Tough**.`,
    
    modMoves: [{
      applyToMoves: [`6d3f9e16-a230-4478-9481-853c90ff4cec`], // Kick Some Ass
      alternateAbility: Stats.Weird,
    }]
  },
  Incorporeal: {
    name: `Incorporeal`,
    id: `801dd250-a87b-458a-a0db-ed767bca546b`,
    playbooks: [`a5f796af-dd20-4ee0-8920-18b80e20ec24`], // The Monstrous
    featType: FeatType.Move,

    description: `You may move freely through solid objects (but not people.)`,

    autoActions: [{
      name: `Incorporeal`,
      id: `8311d2af-4863-46c1-932f-fd13e735b9af`,
      description: `You may move freely through solid objects (but not people.)`,
    }]
  },
  PreternaturalSpeed: {
    name: `Preternatural Speed`,
    id: `dbd58c57-657e-4895-8242-4880e32ee321`,
    playbooks: [`a5f796af-dd20-4ee0-8920-18b80e20ec24`], // The Monstrous
    featType: FeatType.Move,

    description: `You go much faster than normal people. When you chase, flee, or run, take +1 \`ongoing\``,
    
    modMoves: [{
      applyToMoves: [`*`],
      modRoll: 1,
      modCondition: `Apply while you chase, flee, or run.`,
    }]
  },
  ClawsOfTheBeast: {
    name: `Claws of the Beast`,
    id: `2a1580ad-5567-4c5c-8617-1922243bdfc9`,
    playbooks: [`a5f796af-dd20-4ee0-8920-18b80e20ec24`], // The Monstrous
    featType: FeatType.Move,

    description: `All your natural attacks get +1 \`harm\``,
    
    modAttack: [{
      name: `Claws of the Beast`,
      harmOffset: 1,
      applyToItem: [ // Natural Attacks
        `c4abb750-2e86-458b-9cd1-eb7069d4736a`, // Teeth
        `780dbbb3-9dd1-40b2-9e18-cc8b053a77b9`, // Claws
        `e777c55b-b424-44d8-8f3c-7728186916ca`, // Magical Force
        `7a14d1ba-917b-4dbb-b346-ccfb9d2d9f56`, // Life Drain
      ]
    }]
  },
  MentalDomination: {
    name: `Mental Domination`,
    id: `f1076b20-3125-486f-a2d8-d091f552b267`,
    playbooks: [`a5f796af-dd20-4ee0-8920-18b80e20ec24`], // The Monstrous
    featType: FeatType.Move,

    description: `When you gaze into a normal human's eyes and exert your will over them.`,

    actions: [{
      name: `Mental Domination`,
      id: `2c3a9514-4494-406f-9158-89748ea36fc8`,
      ability: Stats.Charm,
      description: `When you gaze into a normal human's eyes and exert your will over them, giving them orders to obey.`,

      miss: `\`The Keeper\` can make a hard move against you. You likely failed to gain any control over them.`,
      mixedSuccess: `\`Hold\` 1`,
      solidSuccess: `\`Hold\` 3`,
      successFooter: `You may spend your \`hold\` to give the target an order. Regular people will follow your order, whatever it is.
\`Hunters\` can choose whether they do it or not. If they do, they mark \`experience\`.`
    }]
  },
  UnquenchableVitality: {
    name: `Unquenchable vitality`,
    id: `1ff4e38a-867f-4564-baa9-6e676c6d75ed`,
    playbooks: [`a5f796af-dd20-4ee0-8920-18b80e20ec24`], // The Monstrous
    featType: FeatType.Move,

    description: `When you have taken \`harm\`, you can heal yourself.`,

    actions: [{
      name: `Unquenchable Vitality`,
      id: `f0958b0a-d816-471c-b119-6b710203990c`,
      ability: Stats.Cool,
      description: `When you have taken \`harm\`, you can heal yourself.`,
      
      miss: `Your injuries worsen.`,
      mixedSuccess: `Heal 1 \`harm\` and stabilise your injuries.`,
      solidSuccess: `Heal 2 \`harm\` and stabilise your injuries.`,
      
      showHealing: true,
    }]
  },
  DarkNegotiator: {
    name: `Dark Negotiator`,
    id: `6a9dc239-37d1-468f-82b4-97c62a9f9404`,
    playbooks: [`a5f796af-dd20-4ee0-8920-18b80e20ec24`], // The Monstrous
    featType: FeatType.Move,

    description: `You can use the \`manipulate someone\` move on monsters as well as people, if they can reason and talk`,

    modMoves: [{
      applyToMoves: [`d245fc16-53f7-40bd-bdbb-45cde437adab`], // Manipulate Someone
      footnote: `You can manipulate monsters as well as people, if they can reason and talk`,
    }],
  },
  Flight: {
    name: `Flight`,
    id: `26130600-3c03-4b42-8b7b-e99c071fa454`,
    playbooks: [`a5f796af-dd20-4ee0-8920-18b80e20ec24`], // The Monstrous
    featType: FeatType.Move,

    description: `You can fly`,

    autoActions: [{
      name: `Flight`,
      id: `92fc4107-c604-4b8a-9dd4-754b3705c39d`,
      description: `You can fly`,
    }]
  },
  Shapeshifter: {
    name: `Shapeshifter`,
    id: `3fa06789-e37f-4d34-9816-e4d373bfbe51`,
    playbooks: [`a5f796af-dd20-4ee0-8920-18b80e20ec24`], // The Monstrous
    featType: FeatType.Move,

    description: `You may change your form (usually into an animal) for a bonus to \`investigate a mystery\`.`,
    longDescription: `You may change your form (usually into an animal.) Decide if you have on alternate form or several, and detail them.
You gain +1 to \`investigate a mystery\` when using an alternate form's superior senses (e.g. smell of a wolf, sight of an eagle, etc.)`,
    
    inputs: [{
      label: `Shape(s)`, key: `4711de96-36b5-427f-8e8d-c4f67e57ef3d`, // Displayed in Actions
      inputType: InputTypes.Text,
      placeholder: `wolf, eagle, etc.`,
    }],

    autoActions: [{
      name: `Shapeshift`,
      id: `8b4d864f-a956-4ffb-a9f2-ea5054b733d9`,
      description: `Change into one of your alternate forms.`,
      showInputs: [ `4711de96-36b5-427f-8e8d-c4f67e57ef3d` ], // Shapes
    }],
    modMoves: [{
      applyToMoves: [`1b0ccc41-de6e-45dc-9f9f-bb1d7d33a447`], // Investigate a Mystery
      footnoteInputs: [ `4711de96-36b5-427f-8e8d-c4f67e57ef3d` ], // Shapes
      modRoll: 1,
      modCondition: `Apply while using one of your alternate form's superior senses.`,
    }]
  },
  SomethingBorrowed: {
    name: `Something Borrowed`,
    id: `6e9cd55e-50ff-4bb8-b03c-8e1fa9f72632`,
    playbooks: [`a5f796af-dd20-4ee0-8920-18b80e20ec24`], // The Monstrous
    featType: FeatType.Move,

    description: `Take a move from another \`Hunter\` \`Playbook\` that is not currently in play.`,

    addAnyMoves: 1,
  },
  // Mundane
  AlwaysTheVictim: {
    name: `Always the Victim`,
    id: `2b55c1b5-c8a2-4941-ba72-b320ebf69ff8`,
    playbooks: [`b03c7fb1-9ce4-4cba-a527-6c1380ac5de0`], // The Mundane
    featType: FeatType.Move,

    description: `When a \`Hunter\` protects you, they mark **Experience**. When you get captured, you mark \`Experience\`.`,
    longDescription: `When another \`Hunter\` uses \`protect someone\` to protect you, they mark \`Experience\`.
Whenever a monster captures you, you mark **Experience**.`,

    passives: [
      {
        type: PassiveTypes.Experience, 
        description: `When a monster captures you, you mark \`Experience\`.`,
      },
      {
        type: PassiveTypes.Protections,
        description: `When another \`Hunter\` uses \`protect someone\` to protect you, they mark \`Experience\`.`,
      },
    ]
  },
  Oops: {
    name: `Oops!`,
    id: `bc97a6b5-e697-416e-8d29-c635dab08fe0`,
    playbooks: [`b03c7fb1-9ce4-4cba-a527-6c1380ac5de0`], // The Mundane
    featType: FeatType.Move,

    description: `Stumble across something important or useful.`,
    longDescription: `If you want to stumble across something important, tell \`The Keeper\`.
You will find something important and useful, although not necessarily related to your immediate problems.`,

    autoActions: [{
      name: `Oops!`,
      id: `6a590111-0f45-4e4a-9368-9cd11c37c063`,
      description: `Stumble across something important or useful.`,
      longDescription: `If you want to stumble across something important, tell \`The Keeper\`.
You will find something important and useful, although not necessarily related to your immediate problems.`,
    }]
  },
  LetsGetOutOfHere: {
    name: `Let's Get Out Of Here!`,
    id: `b58eb47e-4bf7-40f8-b6c5-64274b47a99a`,
    playbooks: [`b03c7fb1-9ce4-4cba-a527-6c1380ac5de0`], // The Mundane
    featType: FeatType.Move,

    description: `If you can \`protect someone\` by telling them what to do, or by leading them out, roll +Charm instead of +Tough.`,
    
    modMoves: [{
      applyToMoves: [`48664b18-63e2-47fb-8363-ddcbefabe02e`], // Protect Someone
      alternateAbility: Stats.Charm,
      alternateAbilityCondition: `If you can \`protect someone\` by telling them what to do, or by leading them out.`,
    }]
  },
  PanicButton: {
    name: `Panic Button`,
    id: `541a73ef-cdea-4244-b9ba-d705d260cfed`,
    playbooks: [`b03c7fb1-9ce4-4cba-a527-6c1380ac5de0`], // The Mundane
    featType: FeatType.Move,

    description: `When you need to escape, name the route you'll try.`,

    actions: [{
      name: `Panic Button`,
      id: `b9cb058c-f74a-46b7-98ca-ad955d52266d`,
      ability: Stats.Sharp,
      description: `When you need to escape, name the route you'll try.`,

      miss: `You are caught halfway out`,
      mixedSuccess: `You can go or stay, but if you go, it's going to cost you
(you leave something behind or something comes with you.)`,
      solidSuccess: `You're out of danger, no problem.`,
    }]
  },
  ThePowerOfHeart: {
    name: `The Power of Heart`,
    id: `318f4157-277f-4056-8d54-50bfac3c7349`,
    playbooks: [`b03c7fb1-9ce4-4cba-a527-6c1380ac5de0`], // The Mundane
    featType: FeatType.Move,

    description: `When fighting a monster, if you \`help out\`, you can automatically succeed.`,
    longDescription: `When fighting a monster, if you \`help out\`, you can skip rolling **+Cool** to automatically help as though you rolled a 10.`,

    modMoves: [{
      applyToMoves: [`2c7dd11e-b12b-4a02-b109-41e7daf65549`], // Help Out
      autoRoll: 10,
      autoCondition: `While fighting a monster.`,
    }]
  },
  TrustMe: {
    name: `Trust Me`,
    id: `01dee0d8-76fd-42bb-b9ac-058a40b5fb3a`,
    playbooks: [`b03c7fb1-9ce4-4cba-a527-6c1380ac5de0`], // The Mundane
    featType: FeatType.Move,

    description: `When you try to protect someone from danger by telling them the truth and what to do.`,

    actions: [{
      name: `Trust Me`,
      id: `02f7901c-f56b-49af-8c5b-5f8ef9b71114`,
      ability: Stats.Charm,
      description: `When you try to protect someone from danger by telling them the truth and what to do.`,
      
      miss: `They think you're crazy or maybe dangerous too.`,
      mixedSuccess: `They will do what you say they should, but \`The Keeper\` chooses one from:
* They ask you a hard question first.
* They stall and dither a while.
* They have a "better" idea.`,
      solidSuccess: `They will do what you say they should, no questions asked.`,
    }],
  },
  WhatCouldGoWrong: {
    name: `What Could Go Wrong?`,
    id: `8e961dc1-d6b7-429e-8898-389c415b43f3`,
    playbooks: [`b03c7fb1-9ce4-4cba-a527-6c1380ac5de0`], // The Mundane
    featType: FeatType.Move,

    description: `Whenever you charge into immediate danger without hedging your bets, **Hold 2**.`,
    
    inputs: [{
      label: `Holds`, key: `84d045a8-2829-49f6-9a4d-603af5ca7d21`, // Displayed in Action and modifiers
      inputType: InputTypes.Checks,
      max: 2,
    }],

    autoActions: [{
      name: `What Could Go Wrong?`,
      id: `b1604fb9-c1c7-4992-b0e2-0742218e80ee`,
      description: `Whenever you **charge into immediate danger** without hedging your bets, \`hold\` 2.`,
      longDescription: `Whenever you charge into immediate danger without hedging your bets, \`hold\` 2.

You may spend your \`hold\` to:
* Inflict +1 \`harm\`.
* Reduce someone's \`harm\` suffered by 1.
* Take +2 \`forward\` on an \`act under pressure\` roll.`,
      showInputs: [ `84d045a8-2829-49f6-9a4d-603af5ca7d21` ] // Holds
    }],
    modAttack: [{
      name: `What Could Go Wrong?`,
      // description: `Spend 1 \`Hold\` to inflict +1 \`harm\`.`,
      harmOffset: 1,
      condition: `Can apply by spending 1 \`hold\`.`,
      showInputs: [ `84d045a8-2829-49f6-9a4d-603af5ca7d21` ] // Holds
    }],
    modMoves: [{
      applyToMoves: [`bfdfd9b3-d5fa-4517-8d5e-20013364d7b0`], // Act Under Pressure
      modRoll: 2,
      modCondition: `Can apply by spending 1 \`hold\`.`,
      footnoteInputs: [ `84d045a8-2829-49f6-9a4d-603af5ca7d21` ] // Holds
    }],
  },
  IllCheckItOut: {
    name: `Don't Worry, I'll Check It Out`,
    id: `349e9759-969b-48cc-8445-4cd66b28895f`,
    playbooks: [`b03c7fb1-9ce4-4cba-a527-6c1380ac5de0`], // The Mundane
    featType: FeatType.Move,

    description: `Whenever you **go off by yourself**, to check out somewhere (or something) scary, mark **Experience**.`,

    passives: [{
      type: PassiveTypes.Experience,
      description: `Whenever you **go off by yourself**, to check out somewhere (or something) scary.`,
    }]
  },
  // Professional
  DealWithTheAgency: {
    name: `Deal With The Agency`,
    id: `2a436e16-6633-4b05-a133-9b971d007bee`,
    playbooks: [`58924c0d-c015-4fcd-8fd9-ca75f12fd019`], // The Professional
    featType: FeatType.Move,
    prerequisiteFeats: [`2584ae8c-8a2b-46e2-a408-e9a9dbac0da6`], // The Agency

    description: `When you deal with the Agency, requesting help or gear, or making excuses for a failure.`,
    longDescription: `When you deal with the Agency, requesting help or gear, or making excuses for a failure, roll +Sharp.
You may bet help or forgiveness, or they may put you in the proverbial doghouse.`,

    actions: [{
      name: `Deal With The Agency`,
      id: `9f45209a-803f-41a9-bc17-4cfb2b1c28ed`,
      ability: Stats.Sharp,
      description: `When you deal with the Agency, requesting help or gear, or making excuses for a failure.`,
      
      miss: `You screwed up: You might be suspended or under investigation, or just in the doghouse. You certainly aren't getting any help until you sort it all out.`,
      mixedSuccess: `Things aren't so great. You might get chewed out by your superiors and there'll be fallout, but you get what you need for the job.`,
      solidSuccess: `You're good--your request for gear or personnel is okayed, or your slip-up goes unnoticed.`,
      showInputs: [`cda1ce37-f4f2-48e7-8fdd-e104f27bf38d`, `4833c3b1-8fed-461f-85f1-36a915190cd6`], // Agency resources and red tape
    }],
  },
  BottleItUp: {
    name: `Bottle It Up`,
    id: `a014068d-fb29-4d4d-a221-ef9804aceb32`,
    playbooks: [`58924c0d-c015-4fcd-8fd9-ca75f12fd019`], // The Professional
    featType: FeatType.Move,

    description: `You can take a bonus to \`act under pressure\` that will come back later.`,
    longDescription: `If you want, you can take up to a +3 bonus when you \`act under pressure\`.
For each +1 you use, \`The Keeper\` \`holds\` 1. That \`hold\` can be spent later--one to one--to give you
-1 on any move __except__ "\`act under pressure\`".`,

    inputs: [{
      label: `Keeper's Holds`, key: `3de748b3-2a4f-41cc-899f-24b0fcc76dd2`, // Displayed in mods
      inputType: InputTypes.Checks,
      max: 3
    }],
  
    modMoves: [
      {
        applyToMoves: [`bfdfd9b3-d5fa-4517-8d5e-20013364d7b0`], // Act Under Pressure
        modRoll: 1,
        modCondition: `Can apply by giving \`The Keeper\` 1 \`hold\`.`,
      },
      {
        applyToMoves: [`bfdfd9b3-d5fa-4517-8d5e-20013364d7b0`], // Act Under Pressure
        modRoll: 2,
        modCondition: `Can apply by giving \`The Keeper\` 2 \`holds\`.`,
      },
      {
        applyToMoves: [`bfdfd9b3-d5fa-4517-8d5e-20013364d7b0`], // Act Under Pressure
        modRoll: 3,
        modCondition: `Can apply by giving \`The Keeper\` 3 \`holds\`.`,
        footnoteInputs: [ `3de748b3-2a4f-41cc-899f-24b0fcc76dd2` ] // Keeper Holds
      },
      {
        applyToMoves: [`*`, `!bfdfd9b3-d5fa-4517-8d5e-20013364d7b0`], // TODO: Have exclusions? If so, remove from description below.
        modRoll: -1,
        modCondition: `Apply when \`The Keeper\` spends 1 \`hold\` to impose a -1 to any move (except "\`act under pressure\`")`,
        footnoteInputs: [ `3de748b3-2a4f-41cc-899f-24b0fcc76dd2` ] // Keeper Holds
      }
    ],
  },
  Unfazeable: {
    name: `Unfazeable`,
    id: `027a8b33-7347-4f44-9d67-b5aa5d2d28c6`,
    playbooks: [`58924c0d-c015-4fcd-8fd9-ca75f12fd019`], // The Professional
    featType: FeatType.Move,

    description: `Take +1 Cool (max +3)`,
    offsetStat: { ability: Stats.Cool, offset: 1, max: 3 },
  },
  BattlefieldAwareness: {
    name: `Battlefield Awareness`,
    id: `b161d4ff-c1e7-4af0-852a-51f17e6f69e3`,
    playbooks: [`58924c0d-c015-4fcd-8fd9-ca75f12fd019`], // The Professional
    featType: FeatType.Move,

    description: `Your awareness gives you +1 Armor (max 2-armor) on top of whatever you get from your gear.`,
    longDescription: `You always know what's happening around you, and what to watch out for.
Take +1 Armor (max 2 armor) on top of whatever you get from your gear.`,
    
    modArmor: [{
      name: `Battlefield Awareness`,
      armorOffset: 1,
      armorMax: 2,
    }],
  },
  LeaveNoOneBehind: {
    name: `Leave No One Behind`,
    id: `3f5f986c-8fca-42b8-87ef-607c9d23a7d8`,
    playbooks: [`58924c0d-c015-4fcd-8fd9-ca75f12fd019`], // The Professional
    featType: FeatType.Move,

    description: `In combat, you can **help someone escape**.`,

    actions: [{
      name: `Leave No One Behind`,
      id: `179411c1-da3a-46bc-b261-bd0a491fee24`,
      ability: Stats.Sharp,
      description: `In combat, you can **help someone escape**.`,

      miss: `You fail to get them out and you've attracted hostile attention.`,
      mixedSuccess: `You can either get them out or suffer no harm, you choose.`,
      solidSuccess: `You get them out clean.`,
      showDamage: true,
    }],
  },
  TacticalGenius: {
    name: `Tactical Genius`,
    id: `b146eabd-6312-4b77-b30a-e07a7a1a94db`,
    playbooks: [`58924c0d-c015-4fcd-8fd9-ca75f12fd019`], // The Professional
    featType: FeatType.Move,

    description: `When you \`read a bad situation\`, you can roll **+Cool** instead of **+Sharp**.`,

    modMoves: [{
      applyToMoves: [`f749882e-91f9-4c81-a14f-40a9fae2ac64`], // Read A Bad Situation
      alternateAbility: Stats.Cool,
    }]
  },
  Medic: {
    name: `Medic`,
    id: `b559c100-ab23-46bf-9bd7-2f620fc2bf01`,
    playbooks: [`58924c0d-c015-4fcd-8fd9-ca75f12fd019`], // The Professional
    featType: FeatType.Move,

    description: `You have a full first aid kit, and the training to heal people.`,

    actions: [{
      name: `Medic`,
      id: `af5b26e4-a9c5-4900-9f84-3639f992d140`,
      ability: Stats.Cool,
      description: `You have a full first aid kit, and the training to heal people.`,

      miss: `You cause an extra 1 \`harm\`.`,
      mixedSuccess: `Choose one: heal 2 \`harm\` --OR-- \`stabilize\` the patient.`,
      solidSuccess: `The patient is \`stabilized\` and healed of 2 \`harm\`.`,
      showHealing: true,
      showDamage: true,
    }],
  },
  Mobility: {
    name: `Mobility`,
    id: `820c1ce2-8bd4-4b6c-a5c1-982841d5ea0a`,
    playbooks: [`58924c0d-c015-4fcd-8fd9-ca75f12fd019`], // The Professional
    featType: FeatType.Move,

    description: `You have a vehicle built for monster hunting.`,
    longDescription: `You have a truck, van, or car built for monster hunting.
Choose two good things and one bad thing about it (two good tags and one bad tag.)`,
    
    subFeatsById: [Gear.Professional.id],
  },
  // Searcher
  FirstEncounter: {
    name: `First Encounter`,
    id: `38c1e7f2-ecf9-4b57-8138-4acbbbaf0a16`,
    playbooks: [`f7b73a9a-6447-42f8-b373-b71341bdad99`], // The Searcher
    featType: FeatType.Move,

    description: `You experienced one strange event that started your journey and unlocked a new capability for you.`,
    longDescription: `One strange event started you down this path, sparking your need to discover the truth behind
the unexplained. Decide what that event was: pick a category and take the associated move.
Then tell everyone what happened to you (or someone close to you.)

Encounter Options:
* Cryptid Sighting: You take note of any reports of strange creatures. Whenever you first see a new type of creature, you may immediately ask one of the investigate a mystery questions.
* Zone of Strangeness: Things are not fixed. You never need act under pressure when supernatural forces alter the environment around you, and you get 2-armor against harm from sudden changes to the laws of physics.
* Psychic Event: Your mind is awakened. You may act under pressure to use the sensitive weird move, or—if sensitive is your weird move—empath.
* Higher power: Something looks out for you. You start with an extra Luck.
* Strange Dangers: You are always watching for hazards. When you have no armor, you still count as having 1-armor.
* Abduction: They taught you hidden knowledge. Gain +1 to any move when you research strange or ancient secrets to do it.
* Cosmic Insight: You have encompassed the soul of the universe. You never need to act under pressure due to feelings of fear, despair, or isolation.`,
    
    inputs: [{
      label: `Encounter`, key: `5a23e324-2336-46cf-be84-f44a8771497d`, // Add 1 through improvement
      inputType: InputTypes.FeatChoice,
      choose: 1,
      options: [
        {
          name: `Cryptid Sighting`,
          id: `f79e8746-f32d-46b5-8ff1-a99736816b14`,
          description: `You take note of any reports of strange creatures.
Whenever you first see a new type of creature, you may immediately ask one of the investigate a mystery questions.`,
          autoActions: [{
            name: `Cryptid Sighting`,
            id: `4dd637fd-d4a0-4dae-80e4-0401365b0163`,
            description: `Whenever you first see a new type of creature, ask an "\`investigate a mystery\`" questions.`,
            longDescription: `You take note of any reports of strange creatures.
Whenever you first see a new type of creature, you may immediately ask one of the investigate a mystery questions.

\`@investigationQuestions\``,
          }]
        },
        {
          name: `Zone of Strangeness`,
          id: `31b74c1e-c52a-4795-a847-f59fcb4b8d55`,
          description: `Things are not fixed. You never need \`act under pressure\` when supernatural forces alter the environment around you, and you get 2 \`armor\` against \`harm\` from sudden changes to the laws of physics.`,
          armors: [{
            armor: 2,
            armorCondition: `Apply when reality is altered around you, like sudden changes to the laws of physics.`,
          }],
          modMoves: [{
            applyToMoves: [`bfdfd9b3-d5fa-4517-8d5e-20013364d7b0`], // Act Under Pressure
            footnote: `You never need to roll this move when supernatural forces alter the environment around you.`
          }]
        },
        {
          name: `Psychic Event`,
          id: `4a394360-d04a-4d8a-a1e2-9ecd43ef60dc`,
          description: `You gain the \`Sensitive\` alternative basic weird move. If you already have it, you gain the \`Empath\` alternative basic weird move`,
          inputs: [{
            label: `Psychic Move`, key: `54a2f550-d85f-4888-a94b-3c833973f293`,
            inputType: InputTypes.FeatChoiceById,
            choose: 1,
            options: [
              `900f37ab-615d-46e6-b369-0d14e30a1428`, // Sensitive
              `39c2a0cb-833f-4fe7-b462-426c835928a4`, // Empath
            ],
          }]
        },
        {
          name: `Higher Power`,
          id: `1a94a926-c626-46c5-803e-cf9707c1aed9`,
          description: `Something looks out for you. You gain a \`luck\` point.`,
          offsetMaxLuck: 1,
        },
        {
          name: `Strange Dangers`,
          id: `fa699597-2e03-43d0-a310-40bb689a4148`,
          description: `You are always watching for hazards. When you have no \`armor\`, you still count as having 1 \`armor\`.`,
          armors: [{ armor: 1 }]
        },
        {
          name: `Abduction`,
          id: `730f23b1-70f9-4ca5-8e61-e7e9d9f10736`,
          description: `They taught you hidden knowledge. Gain +1 to any move when you research strange or ancient secrets to do it.`,
          modMoves: [{
            applyToMoves: [`*`],
            modRoll: 1,
            modCondition: `Apply once after you researched the current action using strange or ancient secrets.`,
          }]
        },
        {
          name: `Cosmic Insight`,
          id: `b21e1f0c-c15d-4503-b482-feeac57abfaa`,
          description: `You have encompassed the soul of the universe. You never need to \`act under pressure\` due to feelings of fear, despair, or isolation.`,
          modMoves: [{
            applyToMoves: [`bfdfd9b3-d5fa-4517-8d5e-20013364d7b0`], // Act Under Pressure
            footnote: `You have encompassed the soul of the universe.
You never need to roll this move due to feelings of fear, despair, or isolation.`,
          }]
        },
      ],
    }],
  },
  PreparedToDefend: {
    name: `Prepared to Defend`,
    id: `9f347cc2-a96a-4a17-b12d-4ab6bfa427ba`,
    playbooks: [`f7b73a9a-6447-42f8-b373-b71341bdad99`], // The Searcher
    featType: FeatType.Move,

    description: `Whenever you suffer harm when you \`kick some ass\` or \`protect someone\`, you suffer 1 less \`harm\`.`,
    longDescription: `Even truth seekers need tto fight sometimes.`,

    modMoves: [
      {
        applyToMoves: [
          `6d3f9e16-a230-4478-9481-853c90ff4cec`, // Kick Some Ass
          `741a2850-42e2-45db-8f8c-ed92999c555a`, // Combat Magic
        ],
        footnote: `When you suffer \`harm\` as a result of this move, take 1 less \`harm\`.`,
      },
      {
        applyToMoves: [`48664b18-63e2-47fb-8363-ddcbefabe02e`], // Protect Someone
        footnote: `When you suffer \`harm\` as a result of this move, take 1 less \`harm\`.`
      }
    ],
    modArmor: [{
      name: `Prepared to Defend`,
      // description: `When you suffer harm from \`kick some ass\` or \`protect someone\`, you suffer 1 less \`harm\`.`,
      armorOffset: 1,
      condition: `Apply when you suffer \`harm\` from \`kick some ass\` or \`protect someone\``,
    }]
  },
  FellowBeliever: {
    name: `Fellow Believer`,
    id: `b7cf9c20-3037-4355-887d-a3b14a344e31`,
    playbooks: [`f7b73a9a-6447-42f8-b373-b71341bdad99`], // The Searcher
    featType: FeatType.Move,

    description: `Bystanders will talk to you about weird things they would not trust others to believe.`,
    longDescription: `People understand you've also known strangeness. Bystanders will talk to you about weird things they would not trust another \`Hunter\` (or a mundane official) to believe.`,

    passives: [{
      type: PassiveTypes.Social,
      description: `Bystanders will talk to you about weird things they would not trust others to believe.`,
    }]
  },
  Guardian: {
    name: `Guardian`,
    id: `114109b5-9026-451c-9545-0e5f7f3c64ec`,
    playbooks: [`f7b73a9a-6447-42f8-b373-b71341bdad99`], // The Searcher
    featType: FeatType.Move,

    description: `You have a mystical ally that helps defend you`,
    longDescription: `You have a mystical ally (perhaps a spirit, alien, or cryptid) who helps and defends you.
Define them, and their powers, with \`The Keeper\`'s agreement. Their look is one of: invisible, an intangible spirit thing,
a weird creature, disguised as an animal, or disguised as a person.`,

    inputs: [{
      label: `Guardian`, key: `d2f7bdf5-6bb1-451f-af95-3ca8651d2f90`, // Displayed in Social
      inputType: InputTypes.Character,
      startingType: CharacterTypes.Ally,
      startingSubType: AllyType.Bodyguard,
      inputs: [
        {
          label: `Guardian Look`, key: `0724222c-f06d-42b0-9f6e-dee45d75a67d`,
          inputType: InputTypes.TextChoice,
          allowCustom: true,
          choose: 1,
          options: [
            `an invisible guardian`, `an intangible spirit thing`, `a weird creature`,
            `a guardian disguised as an animal`, `a guardian disguised as a person.`
          ],
        },
        {
          label: `Guardian Powers`, key: `8c6a5db9-01bf-48e8-b80e-c3e00a2417fb`,
          inputType: InputTypes.Text,
        },
      ]
    }],

    passives: [{
      type: PassiveTypes.Social,
      description: `You have a guardian who helps and defends you.`,
      showInputs: [ `d2f7bdf5-6bb1-451f-af95-3ca8651d2f90` ] // Guardian
    }]
  },
  JustAnotherDay: {
    name: `Just Another Day`,
    id: `be6cc8db-59e1-405e-a98d-fa394a67b51e`,
    playbooks: [`f7b73a9a-6447-42f8-b373-b71341bdad99`], // The Searcher
    featType: FeatType.Move,

    description: `When you have to \`act under pressure\` due to a monster, phenomenon, or mystical effect, you may roll +Weird instead of +Cool.`,

    modMoves: [{
      applyToMoves: [`bfdfd9b3-d5fa-4517-8d5e-20013364d7b0`], // Act Under Pressure
      alternateAbility: Stats.Weird,
      alternateAbilityCondition: `When used due to a monster, phenomenon, or mystical effect.`,
    }]
  },
  Network: {
    name: `Network`,
    id: `98a39976-9940-4502-a601-61323c39bffd`,
    playbooks: [`f7b73a9a-6447-42f8-b373-b71341bdad99`], // The Searcher
    featType: FeatType.Move,

    description: `You have an \`ally\` group of others who had experiences similar to your first encounter.`,
    longDescription: `You may gain an \`ally\` group of others who had experiences similar to your first encounter—perhaps
they're a support group or hobbyist club. Detail up to five members with useful skills related to what happened to
them (none are up for fighting monsters).`,
    
    inputs: [{
      label: `Network`, key: `2a9e1b97-5d29-4738-abf9-392016f098bf`, // Displayed in social
      subLabel: `Your network of others with similar experiences. They are not up for fighting, but will help in other ways.`,
      inputType: InputTypes.Character,
      startingType: CharacterTypes.Ally,
      crewMin: 2,
      crewMax: 5,
      inputs: [{
        label: `Skills`, key: `018f3899-fad7-43af-aa1c-268eb2015af6`,
        inputType: InputTypes.Text,
      }]
    }],

    passives: [{
      type: PassiveTypes.Social,
      description: `This group had similar experiences to your first encounter. They are not up for fighting monsters.`,
      showInputs: [ `2a9e1b97-5d29-4738-abf9-392016f098bf` ] // Network
    }]
  },
  OckhamsBroadsword: {
    name: `Ockham's Broadsword`,
    id: `c2217d7e-9d95-4541-9be2-b0d604ad7760`,
    playbooks: [`f7b73a9a-6447-42f8-b373-b71341bdad99`], // The Searcher
    featType: FeatType.Move,

    description: `When you first encounter something strange, learn its classification and gain +1 \`forward\`.`,
    longDescription: `When you first encounter something strange, you may ask \`The Keeper\` what sort of thing it is.
They will tell you if it (or the cause) is: natural, an unnatural creature, a weird phenomenon, or a person.

You gain +1 \`forward\` dealing with it.`,
    
    autoActions: [{
      name: `Ockham's Broadsword`,
      id: `74c8cee8-fc01-4581-a6ba-acc073e91570`,
      description: `When you first encounter something strange, learn its classification and gain +1 \`forward\`.`,
      longDescription: `When you first encounter something strange, you may ask \`The Keeper\` what sort of thing it is.
They will tell you if it (or the cause) is: natural, an unnatural creature, a weird phenomenon, or a person.`,
    }],
    modMoves: [{
      applyToMoves: [`*`],
      modRoll: 1,
      modCondition: `Can apply once when having a **first-encounter** if you use **'Ockham's Broadsword'** first.`,
    }]
  },
  TheThingsIveSeen: {
    name: `The Things I've Seen`,
    id: `99acd02c-9b9e-4090-9779-a740bea840fa`,
    playbooks: [`f7b73a9a-6447-42f8-b373-b71341bdad99`], // The Searcher
    featType: FeatType.Move,

    description: `You can have encountered a creature or phenomenon before, giving you some knowledge in advance.`,
    longDescription: `When you encounter a creature or phenomenon, you may declare that you have seen it before.
\`The Keeper\` may ask you some questions about that encounter, and will then tell you one useful fact you learned and one
danger you need to watch out for (maybe right now).`,

    autoActions: [{
      name: `The Things I've Seen`,
      id: `e82ef156-0881-477b-bc9d-402c3a0ccb5f`,
      description: `You can have encountered a creature or phenomenon before, giving you some knowledge in advance.`,
      longDescription: `When you encounter a creature or phenomenon, you may declare that you have seen it before.
\`The Keeper\` may ask you some questions about that encounter, and will then tell you one useful fact you learned and one
danger you need to watch out for (maybe right now).`,
    }],
  },
  // Snoop
  WhatDoesThatFeelLike: {
    name: `What Does That Feel Like?`,
    id: `709641ca-a4d0-4bd4-9160-29c19e77a5a3`,
    playbooks: [`cfecc496-d1c1-4b30-af48-0f3f41cd02c0`], // The Snoop
    featType: FeatType.Move,

    description: `Using your camera or microphone, you can force someone to deal with just you for a moment.`,
    longDescription: `When you put your camera or microphone right in a person's face, they break off whatever they
are doing. They might go right back to it after they deal with you, but you'll create enough time for the other
\`Hunters\` to act in the meantime.`,

    autoActions: [{
      name: `What Does That Feel Like?`,
      id: `db599113-d17f-4590-a034-c2e3ba780273`,
      description: `Using your camera or microphone, you can force someone to deal with just you for a moment.`,
      longDescription: `When you put your camera or microphone right in a person's face, they break off whatever they
are doing. They might go right back to it after they deal with you, but you'll create enough time for the other
\`hunters\` to act in the meantime.`,
    }]
  },
  MinorCelebrity: {
    name: `Minor Celebrity`,
    id: `ef35c8fe-3663-4464-a36f-3484b90b42b7`,
    playbooks: [`cfecc496-d1c1-4b30-af48-0f3f41cd02c0`], // The Snoop
    featType: FeatType.Move,

    description: `Have a chance during each \`mystery\` to impose that people have seen and like some of your work.`,
    longDescription: `Roll at the beginning of each mystery to gain \`holds\`.

Spend a \`hold\` during the mystery to have someone you meet know of you in a positive light
(maybe they read your blog, listen to your podcast, or watch your Internet/TV show, etc). You may end
up getting asked for autographs or given “hot” leads, etc.`,
    
    showInputsInSummary: [`7d06339d-bab4-4ab4-acfd-ee3c699673ca`], // Holds
    
    inputs: [{
      label: `Holds`, key: `7d06339d-bab4-4ab4-acfd-ee3c699673ca`, // Displayed in Actions 
      inputType: InputTypes.Checks,
      max: 2,
      resetPerMystery: true
    }],

    actions: [{
      name: `Minor Celebrity`,
      id: `2f6c749b-2065-464f-a6ae-a6ad5c5fbde0`,
      ability: Stats.Weird,
      description: `At the start of a mystery, roll to gain **Holds**. They can later be used to be recognized`,
      
      miss: `No one recognizes you during this mystery.`,
      mixedSuccess: `Gain 1 \`hold\``,
      solidSuccess: `Gain 2 \`hold\``,
      successFooter: `Spend your \`hold\` during the mystery to have someone you meet know of you in a positive light
(maybe they read your blog, listen to your podcast, or watch your Internet/TV show, etc). You may end
up getting asked for autographs or given "hot" leads, etc.`,
      startOfMystery: true,
      showInputs: [`7d06339d-bab4-4ab4-acfd-ee3c699673ca`], // Holds
    }],
  },
  FixItInPost: {
    name: `We'll Fix It In Post`,
    id: `a2e8d269-fbce-4eb3-af07-09680b6f6a4a`,
    playbooks: [`cfecc496-d1c1-4b30-af48-0f3f41cd02c0`], // The Snoop
    featType: FeatType.Move,

    description: `You can \`investigate a mystery\` on past interviews, attack sites, and so on.`,
    longDescription: `You can use anything you could conceivably have recorded as evidence for \`investigate a mystery\`,
allowing you to check previous interviews, attack sites, and so on from the comfort of your laptop.`,

    modMoves: [{
      applyToMoves: [`1b0ccc41-de6e-45dc-9f9f-bb1d7d33a447`], // Investigate a Mystery
      footnote: `You can use anything you could conceivably have recorded, allowing you to check previous interviews,
attack sites, and so on from the comfort of your laptop.`,
    }]
  },
  PressAccreditation: {
    name: `Press Accreditation`,
    id: `78d2b34a-8022-4a96-ad2b-2d7a5a485f5e`,
    playbooks: [`cfecc496-d1c1-4b30-af48-0f3f41cd02c0`], // The Snoop
    featType: FeatType.Move,

    description: `When you \`investigate a mystery\` using interpersonal skills, roll +Charm instead of +Sharp.`,
    longDescription: `When you investigate a mystery by talking to witnesses, interviewing locals, or anything else requiring interpersonal skills, roll +Charm instead of +Sharp.`,

    modMoves: [{
      applyToMoves: [`1b0ccc41-de6e-45dc-9f9f-bb1d7d33a447`], // Investigate a Mystery
      alternateAbility: Stats.Charm,
      alternateAbilityCondition: `When talking to witnesses, interviewing locals, or anything else requiring interpersonal skills.`,
    }]
  },
  Truthiness: {
    name: `Truthiness`,
    id: `74063c4f-9a1c-417f-8520-9b3f3cd621ca`,
    playbooks: [`cfecc496-d1c1-4b30-af48-0f3f41cd02c0`], // The Snoop
    featType: FeatType.Move,

    description: `Whatever you tell a normal person, they'll accept that __you__ think it's true.`,
    longDescription: `Whatever you tell a normal person, they'll accept that you think it's true.
If it's far out, they might think you're deluded, but they won't think you're lying.`,

    autoActions: [{
      name: `Truthiness`,
      id: `31010559-42ba-44bb-9d7b-786581bbe4f5`,
      description: `Whatever you tell a normal person, they'll accept that __you__ think it's true.`,
      longDescription: `Whatever you tell a normal person, they'll accept that you think it's true.
If it's far out, they might think you're deluded, but they won't think you're lying.`,
    }]
  },
  TheMojoWire: {
    name: `The Mojo Wire`,
    id: `1db684c3-5bac-4b66-8110-898ee755d6e6`,
    playbooks: [`cfecc496-d1c1-4b30-af48-0f3f41cd02c0`], // The Snoop
    featType: FeatType.Move,

    description: `When you spend a while reading all the latest news feeds looking for the weird stuff, take +1 \`forward\`.`,
    
    modMoves: [{
      applyToMoves: [`*`],
      modRoll: 1,
      modCondition: `Apply once after you spend a while reading all the latest news feeds looking for the weird stuff.`,
    }]
  },
  RelaxedProducer: {
    name: `Relaxed Producer`,
    id: `a53e108a-d580-43c3-aeca-fc4c05fa1833`,
    playbooks: [`cfecc496-d1c1-4b30-af48-0f3f41cd02c0`], // The Snoop
    featType: FeatType.Move,

    description: `You're employed, with a pay check and little or no oversight. You may occasionally be tasked with a story.`,
    longDescription: `You're employed, with a regular pay check and little or no oversight. As long as you send in a
story every few days, no matter how bizarre, you're set.

Every now and again they'll send you somewhere in particular, and when that happens it usually involves supernatural activity.
Unless they need human interest, in which case it will be a kitten show or agricultural fair or something.`,
    
    passives: [
      {
        type: PassiveTypes.Inventory,
        description: `You're employed with a regular paycheck.`,
      },
      {
        type: PassiveTypes.Social,
        description: `Your employer expects stories from you every few days.`,
      },
      {
        type: PassiveTypes.Social,
        description: `Your employer may occasionally send you to cover a story of interest.`,
      }
    ],
  },
  // Spell-Slinger
  ToolsAndTechniques: {
    name: `Tools and Techniques`,
    id: `ad31fd43-9c0a-48b1-819f-23b66d89d11e`,
    playbooks: [`3f493473-f122-4255-8b19-3635908b2664`], // The Spell-Slinger
    featType: FeatType.Move,
    prerequisiteFeats: [`158aae53-3323-4ece-adc6-7a79d3c10e59`], // Combat Magic

    description: `To use your combat magic effectively, you rely on a collection of tools and techniques.`,
    longDescription: `To use your combat magic effectively, you rely on a collection of tools and techniques.

Choose all but 1 requirement for your combat magic:
* Consumables: You need certain supplies (powders, oils, etc.) on hand, some will be used up each cast. If you don't have them, take 1-harm ignore-armor when you cast.
* Foci: You need wands, staves, and other obvious props to focus. If you don't have what you need, your combat magic does 1 less harm.
* Gestures: You need to wave your hands around to use combat magic. If you're restrained, take -1 \`ongoing\` for combat magic.
* Incantations: You must speak in an arcane language to control your magic. If you use combat magic without speaking, act under pressure to avoid scrambling your thoughts.`,
    
    inputs: [{
      label: `Tools & Techniques`, key: `5a82730e-9ed6-4581-a3dd-f99a7dfd9e87`, // One can be removed as Adv. Imp.
      inputType: InputTypes.FeatChoice,
      choose: 3,
      options: [
        {
          name: `Consumables`,
          id: `959c6b17-66ef-4080-bf2b-9398823997e3`,
          description: `To use **Combat Magic**, you need certain supplies (powders, oils, etc) on hand.
Some supplies will be used up with each cast.

If you don't have your supplies when using **Combat Magic**, you take 1 \`harm\` \`#ignore-armour\`.`,

          modMoves: [{
            applyToMoves: [`741a2850-42e2-45db-8f8c-ed92999c555a`], // Combat Magic
            footnote: `If you don't have your supplies when using **Combat Magic**, you take 1 \`harm\` \`#ignore-armour\``,
          }],
        },
        {
          name: `Foci`,
          id: `c5dedb02-f653-4099-a571-8583bbcf3e1f`,
          description: `You need wands, staves, and other \`#obvious\` props to focus.

If you don't have what you need, your Combat Magic does 1 less \`harm\`.`,

          modAttack: [{
            name: `Combat Magic Focus`,
            harmOffset: -1,
            condition: `Apply while you do not have your Combat Magic Focus.`,
            applyToItem: [
              `f52a735e-4a66-4314-92ee-5dd11c28d286`,`534dea92-b8df-46df-9eba-452bb08d7109`,`518089e6-f4be-4212-9997-484c7fe792dc`,`7959bdf9-b18f-49a9-8609-faa8d2051c38`, // Fire
              `87aee2cd-bbf5-4c98-bf61-8d298172d870`,`17b2bd0a-8726-40c7-a29c-70c65f797b02`,`9ae87a5e-b658-4bdf-b47f-ab8767b78dfe`,`a8cce3ac-c585-49f7-9c8e-97155cb88e38`, // Force/Wind
              `2581b956-5397-4bf8-b169-025cd1dc71a5`,`40b02a1f-2a41-4080-9bae-5ee7ef1413d0`,`d2b90123-b972-4051-84f4-e08fd7bcfd1e`,`f8858f18-341b-4aad-85d4-85b5e4cee41b`, // Lightning/Entropy
              `5236fbb3-4556-4397-ba96-dbd8f3b6313e`,`4d456e43-ce6e-4b43-8ca0-a556a22d0767`,`8e8eb850-7f0f-456e-98d1-3bb4453ef37d`,`0b1897c9-d1ce-476f-b63d-35ff29ad121d`, // Frost/Ice
              `f74c6f05-4f1c-4052-9ca0-5e8c3a480176`,`4d668eee-5d8b-4863-ac17-1aafefb519aa`,`9a65506a-f59a-4412-b43d-f37aea959953`,`029e8b9d-58d2-4f1c-b2fb-b03ec368451e`, // Earth
              `61a9e39e-ceaa-40ea-8898-dcaf4f9d26ba`,`976750a3-2361-474f-860f-81f47f71ccf0`,`11688b11-8e79-4d98-828c-b2773617f73e`,`3839a799-5864-42b0-93c5-80104ff01660`, // Necromantic
            ],
          }]
        },
        {
          name: `Gestures`,
          id: `d79e3620-089e-4691-bed8-2c40dbf3963d`,
          description: `You need to wave your hands around to use **Combat Magic**. If you're restrained, take -1 \`ongoing\` for combat magic.`,

          modMoves: [{
            applyToMoves: [`741a2850-42e2-45db-8f8c-ed92999c555a`], // Combat Magic
            modRoll: -1,
            modCondition: `Apply while you are restrained and attempting **Combat Magic**.`,
          }],
        },
        {
          name: `Incantations`,
          id: `487f9d6d-b81b-4a3f-bb24-8c1b393a06b6`,
          description: `You must speak in an arcane language to control your magic.

If you use **Combat Magic** without speaking, \`act under pressure\` to avoid scrambling your thoughts.`,

          modMoves: [{
            applyToMoves: [`741a2850-42e2-45db-8f8c-ed92999c555a`], // Combat Magic
            footnote: `If you use **Combat Magic** without speaking, \`act under pressure\` to avoid scrambling your thoughts.`,
          }],
        },
      ],
    }],
  },
  AdvancedArcaneTraining: {
    name: `Advanced Arcane Training`,
    id: `c478b9d1-ea43-4bea-afad-c822ac2019d1`,
    playbooks: [`3f493473-f122-4255-8b19-3635908b2664`], // The Spell-Slinger
    featType: FeatType.Move,
    prerequisiteFeats: [`ad31fd43-9c0a-48b1-819f-23b66d89d11e`], // Tools and Techniques

    description: `If you have two of your three **Tools and Techniques** at the ready, you may ignore the third one.`,

    modMoves: [{
      applyToMoves: [`741a2850-42e2-45db-8f8c-ed92999c555a`], // Combat Magic
      footnote: `When using **Combat Magic**, one of your three **Tools and Techniques** requirements can be ignored.`,
    }],
  },
  ArcaneReputation: {
    name: `Arcane Reputation`,
    id: `77ceff75-547b-433e-b1f9-fc1b6f1cec57`,
    playbooks: [`3f493473-f122-4255-8b19-3635908b2664`], // The Spell-Slinger
    featType: FeatType.Move,

    description: `Three big organizations or groups have heard of you and respect your power.`,
    longDescription: `Pick three big organizations or groups in the supernatural community, which can include some
of the more sociable types of monsters. They've heard of you and respect your power.

With affected humans, take +1 \`forward\` when you manipulate them.

You may manipulate affected monsters as if they were human, with no bonus.`,
    
    inputs: [{
      label: `Familiar Groups`, key: `aa4c4efd-23ff-417d-b220-ba6c29908ba0`, // Displayed in mods
      inputType: InputTypes.Text,
      placeholder: `Illuminati, Vampires, Werewolves`,
    }],
    
    modMoves: [
      {
        applyToMoves: [`d245fc16-53f7-40bd-bdbb-45cde437adab`,`1d8097c8-90bc-485e-90a0-0eb9e94d0959`], // Manipulate Someone/A Hunter 
        modRoll: 1,
        modCondition: `Apply to your first roll against humans in the selected groups/organizations.`,
        footnoteInputs: [`aa4c4efd-23ff-417d-b220-ba6c29908ba0`], // Familiar Groups
      },
      {
        applyToMoves: [`d245fc16-53f7-40bd-bdbb-45cde437adab`], // Manipulate Someone
        footnote: `You can manipulate Monsters in the selected groups/organizations. They've heard of you.`,
        footnoteInputs: [`aa4c4efd-23ff-417d-b220-ba6c29908ba0`], // Familiar Groups
      }
    ]
  },
  CouldveBeenWorse: {
    name: `Could've Been Worse`,
    id: `4189519d-3a37-44cb-beb0-bcdc9cf47065`,
    playbooks: [`3f493473-f122-4255-8b19-3635908b2664`], // The Spell-Slinger
    featType: FeatType.Move,
    prerequisiteMoves: [`ae7216e7-d5d0-4858-9469-9c3a04f47844`], // Use Magic

    description: `When you miss a use magic roll, you can choose to fizzle or push through the spell instead of the default.`,
    longDescription: `When you miss a use magic roll you can choose one of the following options instead of losing control of the magic:
* Fizzle: The preparations and materials for the spell are ruined. You'll have to start over from scratch with the prep time doubled.
* This Is Gonna Suck: The effect happens, but you trigger all of the listed glitches but one. You pick the one you avoid.`,
    
    modMoves: [{
      applyToMoves: [`ae7216e7-d5d0-4858-9469-9c3a04f47844`], // Use Magic
      footnote: `When you miss a use magic roll, you can choose to fizzle or push through the spell instead of the default.`,
      amendResults: {
        miss: `Through **'Could've Been Worse'**, you can choose one of the following instead of the above:
* Fizzle: The preparations and materials for the spell are ruined. You'll have to start over from scratch with the prep time doubled.
* This Is Gonna Suck: The effect happens, but you trigger all of the listed glitches but one. You pick the one you avoid.`,
      }
    }]
  },
  EnchantedClothing: {
    name: `Enchanted Clothing`,
    id: `90c723b2-4123-497e-bf36-3e555f0efb4a`,
    playbooks: [`3f493473-f122-4255-8b19-3635908b2664`], // The Spell-Slinger
    featType: FeatType.Move,

    description: `Enchant an article of clothing that can reduce harm by 1.`,
    longDescription: `Pick an article of every-day clothing. The item is enchanted without any change in appearance.
Take -1 harm from any source that tries to get at you through the garment.`,
    
    inputs: [{
      label: `Enchanted Garment`, key: `1a21234b-fed4-4155-80d8-5603f4ca65f8`, // Displayed in armor mods
      inputType: InputTypes.Text,
      placeholder: `Jacket, pants, etc.`,
    }],
    
    modArmor: [{
      name: `Enchanted Clothing`,
      // description: `Take -1 harm from any source that tries to get at you through the enchanted garment.`,
      armorOffset: 1,
      condition: `Apply to sources passing through your enchanted garment.`,
      showInputs: [ `1a21234b-fed4-4155-80d8-5603f4ca65f8` ], // Enchanted Garment
    }]
  },
  ForensicDivination: {
    name: `Forensic Divination`,
    id: `6ff0ed76-70df-430d-bbaa-f8a427530eee`,
    playbooks: [`3f493473-f122-4255-8b19-3635908b2664`], // The Spell-Slinger
    featType: FeatType.Move,

    description: `When you successfully \`investigate a mystery\`, you may ask “What magic was done here?” as a free extra question.`,
    
    modMoves: [{
      applyToMoves: [`1b0ccc41-de6e-45dc-9f9f-bb1d7d33a447`], // Investigate a Mystery
      footnote: `On a success, you may ask “What magic was done here?” as a free extra question.`,
      amendResults: {
        successFooter: `You may also ask “What magic was done here?” as a free extra question.`,
      }
    }]
  },
  GoBigOrGoHome: {
    name: `Go Big or Go Home`,
    id: `dd82affe-c980-4258-af00-77afbfe6fc6a`,
    playbooks: [`3f493473-f122-4255-8b19-3635908b2664`], // The Spell-Slinger
    prerequisiteMoves: [`9dc87b99-85d0-4436-89aa-5e6cb65f7e86`], // Use Magic
    featType: FeatType.Move,

    description: `When you must \`use magic\` as a requirement for **'Big Magic'**, take +1 \`ongoing\` to those \`use magic\` rolls.`,
    
    modMoves: [{
      applyToMoves: [`9dc87b99-85d0-4436-89aa-5e6cb65f7e86`], // Use Magic
      modRoll: 1,
      modCondition: `Apply when casting a \`use magic\` requirement for \`big magic\`.`,
    }]
  },
  NotMyFault: {
    name: `Not My Fault`,
    id: `72cf7947-7241-4800-9c13-2f31cc321219`,
    playbooks: [`3f493473-f122-4255-8b19-3635908b2664`], // The Spell-Slinger
    featType: FeatType.Move,

    description: `+1 to \`act under pressure\` when you are dealing with the consequences of your own spell-casting.`,
    
    modMoves: [{
      applyToMoves: [`bfdfd9b3-d5fa-4517-8d5e-20013364d7b0`], // Act Under Pressure
      modRoll: 1,
      modCondition: `Apply while you are dealing with the consequences of your own spell-casting.`,
    }]
  },
  Practitioner: {
    name: `Practitioner`,
    id: `90fad060-0401-4cb6-8b14-3f6a152054bb`,
    playbooks: [`3f493473-f122-4255-8b19-3635908b2664`], // The Spell-Slinger
    featType: FeatType.Move,
    prerequisiteMoves: [`9dc87b99-85d0-4436-89aa-5e6cb65f7e86`], // Use Magic

    description: `Choose two effects available to you under use magic. Take +1 to \`use magic\` whenever you choose one of those effects.`,
    
    inputs: [{
      label: `Effects`, key: `958d22c0-42df-4c3f-bd36-18b24363f981`, // Displayed in Use Magic
      inputType: InputTypes.TextChoice,
      options: [
        `Inflict harm`, `Enchant a weapon`, `Do one thing that is beyond human limitations.`,
        `Bar a place or portal to a specific person or a type of creature.`,
        `Trap a specific person, minion, or monster.`,
        `Banish a spirit or curse from the person, object, or place it inhabits.`,
        `Summon a monster into the world.`, `Communicate with something that you do not share a language with.`,
        `Observe another place or time.`, `Heal 1-harm from an injury, or cure a disease, or neutralize a poison.`
      ],
      allowCustom: false,
      choose: 2,
    }],
    
    modMoves: [{
      applyToMoves: [`9dc87b99-85d0-4436-89aa-5e6cb65f7e86`], // Use Magic
      modRoll: 1,
      modCondition: `Apply when you choose to cast one of the chosen practitioner effects.`,
      resultInputs: [ `958d22c0-42df-4c3f-bd36-18b24363f981` ] // Effects
    }]
  },
  ShieldSpell: {
    name: `Shield Spell`,
    id: `dcec4be5-53eb-4569-a18e-e6c89e034cee`,
    playbooks: [`3f493473-f122-4255-8b19-3635908b2664`], // The Spell-Slinger
    featType: FeatType.Move,

    description: `When you \`protect someone\`, gain 2-armor against any \`Harm\` that is transferred to you. This doesn't stack with your other armor, if any.`,

    modArmor: [{
      name: `Shield Spell`,
      // description: `When you \`protect someone\`, gain 2-armor against any \`Harm\` that is transferred to you. This doesn't stack with your other armor, if any.`,
      armorOffset: 2,
      armorMax: 2,
      condition: `Can apply to harm transferred to you when you \`protect someone\`. Does not stack with other armor.`,
    }],
    modMoves: [{
      applyToMoves: [`48664b18-63e2-47fb-8363-ddcbefabe02e`], // Protect Someone
      footnote: `Gain 2-armor against any \`harm\` that is transferred to you. This doesn't stack with other armor.`,
      amendResults: {
        resultFooter: `Gain Spell Shield \`#2-armor\` against any \`harm\` that is transferred to you. This doesn't stack with other armor.`
      }
    }]
  },
  ThirdEye: {
    name: `Third Eye`,
    id: `a2f6b29f-a2ec-486f-97b6-d4f7dcdd6a60`,
    playbooks: [`3f493473-f122-4255-8b19-3635908b2664`], // The Spell-Slinger
    featType: FeatType.Move,

    description: `Optionally, you can **open your third eye** to take in extra, supernatural information.`,
    longDescription: `When you \`read a bad situation\`, you can open up your third eye for a moment to take in extra information.
Take +1 **hold** on any result of 7 or more, plus you can see invisible things.
On a miss, you may still get 1 hold, but you're exposed to supernatural danger.
Unfiltered hidden reality is rough on the mind!`,
    
    modMoves: [{
      applyToMoves: [`f749882e-91f9-4c81-a14f-40a9fae2ac64`], // Read A Bad Situation
      footnote: `Optionally, you can **open your third eye** to take in extra, supernatural information.`,
      amendResults: {
        miss: `If you **opened your third eye**, you are exposed to supernatural danger, but you can ask one question:
* What's my best way in?
* What's my best way out?
* Are there any dangers we haven't noticed?
* What's the biggest threat?
* What's most vulnerable to me?
* What's the best way to protect the victims?`,
        successFooter: `If you opened your third eye, you can see invisible things and you can **ask one additional question**.`
      }
    }]
  },
  // Spooktacular
  PutOnAShow: {
    name: `Put On A Show`,
    id: `53c09225-5014-40bd-a125-0ce2487e92ff`,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    featType: FeatType.Move,

    description: `You can entertain people so they feel joy and forget their troubles.`,
    longDescription: `You can entertain people so they feel joy and forget their troubles.
Say what you do and roll +Charm if it's pure performance or +Weird if you add a pinch of magic.`,

    actions: [{
      name: `Put On A Show`,
      id: `7c8f6e44-6ebf-4772-9e8d-19ff67c3c345`,
      ability: Stats.Charm,
      description: `You can entertain people so they feel joy and forget their troubles.`,
      longDescription: `You can entertain people so they feel joy and forget their troubles.
Say what you do and roll +Charm if it's pure performance or +Weird if you add a pinch of magic.`,

      miss: `\`The Keeper\` can take a hard move against you. You likely failed to distract the crowd from their woes.`,
      successHeader: `The audience is transported and happy. Troubles and trauma are eased in their minds, for a good while.`,
      mixedSuccess: `Pick one: the effect just lasts a little while -OR- it lasts the regular time but there's a ruckus when you're done.`,
      solidSuccess: ``,
    }],
    modMoves: [{
      applyToMoves: [`7c8f6e44-6ebf-4772-9e8d-19ff67c3c345`], // Put On A Show
      alternateAbility: Stats.Weird,
      alternateAbilityCondition: `If you add even a pinch of actual magic.`,
    }]
  },
  ANegotiablePrice: {
    name: `A Negotiable Price`,
    id: `4e526985-0c62-455a-9ea8-b9ae8ff56fae`,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    featType: FeatType.Move,

    description: `You can make a magical deal to fulfill a desire for someone else in exchange for secrets.`,
    longDescription: `You can make a magical deal to fulfill a desire for someone else. The price is that they
reveal to you a secret, the world then arranges itself to fulfill their desire, fitting the scale of the secret.`,

    autoActions: [{
      name: `A Negotiable Price`,
      id: `56da8106-58d9-4d60-9aa6-ff4f50a0698a`,
      description: `You can make a magical deal to fulfill a desire for someone else in exchange for secrets.`,
      longDescription: `You can make a magical deal to fulfill a desire for someone else. The price is that they
reveal to you a secret, the world then arranges itself to fulfill their desire, fitting the scale of the secret.`,
    }]
  },
  Easygoin: {
    name: `Easygoin'`,
    id: `c2481f0f-4669-4198-91c4-6e8e3e9eb03e`,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    featType: FeatType.Move,

    description: `Attempt to make a good impression on someone you just met.`,
    longDescription: `You have the gift of being friendly and easy to chat to. Attempt to make a good impression on someone you just met.`,

    actions: [{
      name: `Easygoin'`,
      id: `f780058a-0bbd-4fab-9584-3e38fd85dc10`,
      ability: Stats.Charm,
      description: `Chat someone up and attempt to make a good impression on someone you just met.`,
      
      miss: `They think you're playing them, and they'll not trust you or your companions.`,
      mixedSuccess: `They open up more than usual but still regard you as a stranger.`,
      solidSuccess: `They treat you asa trustworthy and friendly acquaintance.`,
    }]
  },
  PayItBackward: {
    name: `Pay It Backward`,
    id: `6e069f07-3c7a-4675-a17b-a3951f7a555e`,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    featType: FeatType.Move,

    description: `Give yourself or someone else advantage... but it'll come back to haunt you later.`,
    longDescription: `Give yourself or someone else an advantage on any roll: roll 3 dice and select the best
2 for your result. Whenever you do this, the Keeper gains 1 hold. That hold may be spent to give any hunter
(but usually you) a disadvantage: roll 3 dice and select the worst 2 instead.`,
    
    inputs: [{
      label: `Keeper Holds`, key: `f66bd228-56c2-40f0-97ff-39e80d4046f9`, // Displayed in Action
      inputType: InputTypes.Checks,
      max: 3,
    }],

    autoActions: [{
      name: `Pay It Backward`,
      id: `e640aa7e-ccc7-4312-9fe1-c4fad82bdcfe`,
      description: `Give yourself or someone else advantage... but it'll come back to haunt you later.`,
      longDescription: `Give yourself or someone else an advantage on any roll: roll 3 dice and select the best
2 for your result. Whenever you do this, the Keeper gains 1 hold. That hold may be spent to give any hunter
(but usually you) a disadvantage: roll 3 dice and select the worst 2 instead.`,
      showInputs: [`f66bd228-56c2-40f0-97ff-39e80d4046f9`], // Keeper Holds
    }]
  },
  TheOldCrew: {
    name: `The Old Crew`,
    id: `dfca294d-2b75-4fcc-a487-47cee7fc1168`,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    featType: FeatType.Move,

    description: `Your old team is great at setting up a scene, creating a distraction, or even intimidating folks.`,
    longDescription: `You have an \`ally team\` of Show folks you worked with. They are great at setting up a scene,
creating a distraction, or even intimidating folks.`,
    
    inputs: [{
      label: `Crew`, key: `e10c5b74-6b4f-4a8e-993a-e344b3f4cc7f`,
      inputType: InputTypes.Character,
      startingType: CharacterTypes.Ally,
      crewMin: 2,
      crewMax: 5,
    }],
  },
  TheGameIsFixed: {
    name: `The Game is Fixed`,
    id: `21f0e94e-c385-4453-abae-3af0a135e3cd`,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    featType: FeatType.Move,
    prerequisiteMoves: [`9dc87b99-85d0-4436-89aa-5e6cb65f7e86`], // Use Magic

    description: `When you \`use magic\` in a crowded and chaotic place, you get +1 \`forward\` and extra effect options.`,
    longDescription: `When you \`use magic\` in a crowded and chaotic place (like a fairground), take +1 \`forward\`.

You may also choose the following effects whenever you \`use magic\`:
* Someone fails a skilled task.
* You disappear unnoticed and untraceable in a crowded and chaotic scene.
* Instantly set up or pack away a carnival stall or camp site.
* Track someone.
* Get a bunch of cash.`,

    modMoves: [
      {
        applyToMoves: [`9dc87b99-85d0-4436-89aa-5e6cb65f7e86`], // Use Magic
        footnote: `Gain new \`use magic\` effects: Foil someone, fade into a crowd, instant packing, tracking people, and getting cash.`,
        
        modRoll: 1,
        modCondition: `Apply to your first roll in a crowded or chaotic place (like a fairground.)`,
        
        amendResults: {
          successHeader: `* ***The Game is Fixed:***
* Someone fails a skilled task.
* You disappear unnoticed and untraceable in a crowded and chaotic scene.
* Instantly set up or pack away a carnival stall or camp site.
* Track someone.
* Get a bunch of cash.`
        }
      },
    ]
  },
  // Spooky
  Telepathy: {
    name: `Telepathy`,
    id: `adb84981-fcf0-4dc4-9287-684776c63a96`,
    playbooks: [`1dccf639-8ee6-457e-a2b4-ea2ae9a0bd1a`], // The Spooky
    featType: FeatType.Move,

    description: `You can read people's thoughts and put words in their mind.`,
    longDescription: `You can read people's thoughts and put words in their mind.
This can allow you to \`investigate a mystery\` or \`read a bad situation\` without needing to actually talk.
You can also \`manipulate someone\` without speaking.

You still roll moves as normal, except people will not expect the weirdness of your mental communication.`,
    
    modMoves: [
      {
        applyToMoves: [
          `1b0ccc41-de6e-45dc-9f9f-bb1d7d33a447`, // Investigate a Mystery
          `f749882e-91f9-4c81-a14f-40a9fae2ac64`, // Read A Bad Situation
          `d245fc16-53f7-40bd-bdbb-45cde437adab`, `1d8097c8-90bc-485e-90a0-0eb9e94d0959`, // Manipulate Someone and Manipulate A Hunter
        ],
        footnote: `You can read people's thoughts and put words in their mind. You can use this move without speaking.
People will not expect the weirdness of your mental communication.`,
      },
    ],
  },
  Hex: {
    name: `Hex`,
    id: `fdd4e42b-4238-49ba-9adb-193a68dd7306`,
    playbooks: [`1dccf639-8ee6-457e-a2b4-ea2ae9a0bd1a`], // The Spooky
    featType: FeatType.Move,
    prerequisiteMoves: [`ae7216e7-d5d0-4858-9469-9c3a04f47844`], // Use Magic

    description: `Gain new \`use magic\` effects: Disease, harm, and breaking things.`,
    longDescription: `When you cast a spell with \`use magic\`, as well as the normal effects, you may pick from the following:
* The target contracts a disease.
* The target immediately suffers harm (\`#2-harm\` \`magic\` \`#ignore-armor\`.)
* The target breaks something precious or important.`,
    
    modMoves: [{
      applyToMoves: [`ae7216e7-d5d0-4858-9469-9c3a04f47844`], // Use Magic
      footnote: `Gain new \`use magic\` effects: Disease, harm, and breaking things.`,
      amendResults: {
        successHeader: `* ***Hex:***
  * The target contracts a disease.
  * The target immediately suffers harm (\`#2-harm\` \`magic\` \`#ignore-armor\`.)
  * The target breaks something precious or important.`,
      }
    }]
  },
  TheSight: {
    name: `The Sight`,
    id: `c071c318-a4cb-4e72-aef3-81177118064d`,
    playbooks: [`1dccf639-8ee6-457e-a2b4-ea2ae9a0bd1a`], // The Spooky
    featType: FeatType.Move,

    description: `You can see the invisible, including spirits and magical influences. You can communicate with spirits.`,
    longDescription: `You can see the invisible, especially spirits and magical influences.
You may communicate with (maybe even make deals with) the spirits you see, and they give you more opportunities to spot
clues when you \`investigate a mystery\`.`,
    
    passives: [{
      type: PassiveTypes.Social,
      description: `You can see and communicate with (maybe even make deals with) the invisible spirits you see.`
    }],
    modMoves: [{
      applyToMoves: [`1b0ccc41-de6e-45dc-9f9f-bb1d7d33a447`], // Investigate a Mystery
      footnote: `You can see the invisible, especially spirits and magical influences.
Communicating with spirits may give you more opportunities to spot clues when you \`investigate a mystery\`.`
    }]
  },
  Premonitions: {
    name: `Premonitions`,
    id: `15631a05-960d-4862-9d29-8b7abdbe3fca`,
    playbooks: [`1dccf639-8ee6-457e-a2b4-ea2ae9a0bd1a`], // The Spooky
    featType: FeatType.Move,

    description: `At the start of each \`mystery\`, gain a premonition of things to come.`,
    
    inputs: [
      {
        label: `Keeper Holds`, key: `bd761bc6-e52d-46a9-b4b6-c03b7eb80e5b`, // Displayed in action
        inputType: InputTypes.Checks,
        max: 3,
        resetPerMystery: true
      },
      {
        label: `Premonition`, key: `532b76d0-53c5-4a36-b331-71faf7e57337`, // Displayed in action and experience
        inputType: InputTypes.Text,
      },
    ],

    actions: [{
      name: `Premonitions`,
      id: `d980724d-447d-4a2b-bd7d-5d1f0c12e46c`,
      ability: Stats.Weird,
      description: `At the start of each \`mystery\`, gain a premonition of things to come.`,
      
      startOfMystery: true,
      miss: `You get a vision of something bad happening to you and \`The Keeper\` \`holds\` 3, to be spent one-for-one as penalties to rolls you make.`,
      mixedSuccess: `You get clouded images of something bad that is yet to happen: mark \`experience\` if you stop it.`,
      solidSuccess: `You get a detailed vision of something bad that is yet to happen. You take +1 \`forward\` to prevent it coming true, and mark \`experience\` if you stop it.`,
      showInputs: [`532b76d0-53c5-4a36-b331-71faf7e57337`, `bd761bc6-e52d-46a9-b4b6-c03b7eb80e5b`]
    }],
    passives: [{
      type: PassiveTypes.Experience,
      description: `If you had a successful premonition and stopped it from happening, gain 1 \`experience\``,
      showInputs: [`532b76d0-53c5-4a36-b331-71faf7e57337`],
    }],
  },
  Hunches: {
    name: `Hunches`,
    id: `85cf4934-1713-46ba-9be3-7c65eab20356`,
    playbooks: [`1dccf639-8ee6-457e-a2b4-ea2ae9a0bd1a`], // The Spooky
    featType: FeatType.Move,

    description: `When something bad is happening (or just about to happen) somewhere that you aren't, have a hunch that gets you there.`,

    actions: [{
      name: `Hunches`,
      id: `b00ce276-628e-402a-bb37-8739f216c9f6`,
      ability: Stats.Sharp,
      description: `When something bad is happening (or just about to happen) somewhere that you aren't, have a hunch that gets you there.`,
      
      miss: `You get there just in time to be in trouble yourself.`,
      mixedSuccess: `You get there late. You have time to intervene, but not to prevent it altogether.`,
      solidSuccess: `You knew where you needed to go, just in time to get there.`,
    }]
  },
  TuneIn: {
    name: `Tune In`,
    id: `619f3e51-8f08-4f30-85f3-343aa90c6f92`,
    playbooks: [`1dccf639-8ee6-457e-a2b4-ea2ae9a0bd1a`], // The Spooky
    featType: FeatType.Move,

    description: `You can attune your mind to a monster or minion in order to gain information about it or its plans.`,
    longDescription: `You can attune your mind to a monster or minion.
Roll +Weird.

Spend one hold to ask the Keeper one of the following questions, and gain +1 ongoing while acting on the answers:`,

    actions: [{
      name: `Tune In`,
      id: `2dc2c1ee-2a42-4f5e-9918-156517c0eca7`,
      ability: Stats.Weird,
      description: `You can attune your mind to a monster or minion in order to gain information about it or its plans.`,
      
      miss: `The monster has becomes aware of you.`,
      mixedSuccess: `\`Hold\` 1.`,
      solidSuccess: `\`Hold\` 3.`,
      successFooter: `Spend one \`Hold\` to ask \`The Keeper\` one of the following questions and gain +1 \`ongoing\` while acting on the answers:
* Where is the creature right now?
* What is it planning to do right now?
* Who is it going to attack next?
* Who does it regard as the biggest threat?
* How can I attract its attention?`,
    }],
    modMoves: [{
      applyToMoves: [`*`],
      modRoll: 1,
      modCondition: `Apply while you are acting on the answers you got from a successful **'Tune In'** to the mind of a monster.`,
    }]
  },
  TheBigWhammy: {
    name: `The Big Whammy`,
    id: `6e2c22df-af87-4379-9119-2e74898ea4e5`,
    playbooks: [`1dccf639-8ee6-457e-a2b4-ea2ae9a0bd1a`], // The Spooky
    featType: FeatType.Move,

    description: `You can use your powers to \`kick some ass\`, rolling +Weird instead of +Tough.`,
    longDescription: `You can use your powers to \`kick some ass\`, rolling +Weird instead of +Tough.
The attack has \`#2-harm\` \`#close\` \`#obvious\` \`#ignore-armor\`. On a miss, you'll get a magical backlash.`,

    tags: [ ItemTag.close, ItemTag.obvious, ItemTag.ignoreArmor ],
    attacks: [{
      categories: [`TheBigWhammy`],
      harm: 2,
      amendResults: {
        miss: `If you performed a **'Big Whammy'**, you now also get a magical backlash.`,
      },
    }],
    
    modMoves: [{
      applyToMoves: [`6d3f9e16-a230-4478-9481-853c90ff4cec`], // Kick Some Ass
      alternateAbility: Stats.Weird,
      alternateAbilityCondition: `If you use your powers to perform a '**Big Whammy**'.`,
      amendResults: {
        showAttacks: true,
        attackCategories: [`TheBigWhammy`],
      },
    }],
  },
  Jinx: {
    name: `Jinx`,
    id: `c0fecb86-a274-4891-b5e6-3ab5a82d3f4d`,
    playbooks: [`1dccf639-8ee6-457e-a2b4-ea2ae9a0bd1a`], // The Spooky
    featType: FeatType.Move,

    description: `Jinx a target to encourage coincidences to occur the way you want.`,
    
    inputs: [
      {
        label: `Holds`, key: `75f71391-2fcf-4fd9-a47c-e7ce8c085aaa`, // Displayed in Action
        inputType: InputTypes.Checks,
        max: 2,
      },
      {
        label: `Keeper Holds`, key: `014d89ce-277f-4c86-866d-f5692101350c`, // Displayed in Action
        inputType: InputTypes.Checks,
        max: 2,
      },
    ],

    actions: [{
      name: `Jinx`,
      id: `7088311a-0f12-4752-84ab-37b51c71edf7`,
      ability: Stats.Weird,
      description: `Jinx a target to encourage coincidences to occur the way you want.`,
      longDescription: `Roll to gain \`holds\`. On a fail, \`The Keeper\` gets 2 \`holds\`.

One \`hold\` can be spent by you or \`The Keeper\` to:
* Interfere with a \`hunter\`, giving them -1 \`forward\`.
* Help a \`hunter\`, giving them +1 \`forward\`, by interfering with their enemy.
* Interfere with what a \`monster\`, \`minion\`, or \`bystander\` is trying to do.
* Inflict 1 \`harm\` on the target due to an accident.
* The target finds something you left for them.
* The target loses something that you will soon find.`,
        
      miss: `\`The Keeper\` gets to \`hold\` 2 over you.`,
      mixedSuccess: `\`Hold\` 1`,
      solidSuccess: `\`Hold\` 2`,
      resultFooter: `One \`hold\` can be spent by you or \`The Keeper\` to:
* Interfere with a \`hunter\`, giving them -1 \`forward\`.
* Help a \`hunter\`, giving them +1 \`forward\`, by interfering with their enemy.
* Interfere with what a \`monster\`, \`minion\`, or \`bystander\` is trying to do.
* Inflict 1 \`harm\` on the target due to an accident.
* The target finds something you left for them.
* The target loses something that you will soon find.`,
      showInputs: [`75f71391-2fcf-4fd9-a47c-e7ce8c085aaa`, `014d89ce-277f-4c86-866d-f5692101350c`] // Holds and Keeper Holds
    }],
  },
  // Wronged
  IKnowMyPrey: {
    name: `I Know My Prey`,
    id: `c61b697b-7ee0-4d46-8af0-200172ae97d2`,
    playbooks: [`36e0df53-1690-46cf-a59e-56ef397d108d`], // The Wronged
    featType: FeatType.Move,

    description: `You lost someone important to you at the hands of a monster.`,
    
    inputs: [{
      label: `My Prey`, key: `b1628560-6666-4b6f-904a-aa72b165e6a2`, // Displayed in mods
      subLabel: `What did the deed? (With the Keeper's agreement, pick the monster breed.)`,
      inputType: InputTypes.Text,
      placeholder: `Vampires, Werewolves, or Robots etc.`
    }],

    modMoves: [{
      applyToMoves: [`*`],
      modRoll: 1,
      modCondition: `Apply while knowingly investigating, pursuing or fighting the breed of monster that caused your loss.`,
      footnoteInputs: [ `b1628560-6666-4b6f-904a-aa72b165e6a2` ] // Prey
    }],
  },
  Berserk: {
    name: `Berserk`,
    id: `c0836425-0d62-46f1-9cd0-88b4c8c99a0e`,
    playbooks: [`36e0df53-1690-46cf-a59e-56ef397d108d`], // The Wronged
    featType: FeatType.Move,

    description: `No matter how much harm you take, you can always keep going until the current fight is over.`,
    longDescription: `No matter how much harm you take, you can always keep going until the current fight is over.
During a fight, \`The Keeper\` may not use harm moves on you and you cannot die. When the fight ends, all
harm takes effect as normal.`,
    
    passives: [{
      type: PassiveTypes.Health,
      description: `No matter how much \`harm\` you take, you can always keep going until the current fight is over.
During a fight, \`The Keeper\` may not use \`harm moves\` on you and you cannot die. When the fight ends, all \`harm\`
takes effect as normal.`,
    }]
  },
  NeverAgain: {
    name: `Never Again`,
    id: `b60157bc-c9c8-4511-a97e-4262b827fc06`,
    playbooks: [`36e0df53-1690-46cf-a59e-56ef397d108d`], // The Wronged
    featType: FeatType.Move,

    description: `In combat, you may \`protect someone\` without rolling, as if you had rolled a 10+, but you may not choose to "suffer little harm."`,
    longDescription: `In combat, you may \`protect someone\` without rolling, as if you had rolled a 10+, but you may not choose to "suffer little harm."

When you prevent harm to another character you protect them okay, but you'll suffer some or all of the harm they were going to get.
Choose an extra:
• All impending danger is now focused on you.
• You inflict harm on the enemy.
• You hold the enemy back`,
    
    modMoves: [{
      applyToMoves: [`48664b18-63e2-47fb-8363-ddcbefabe02e`], // Protect Someone
      autoRoll: 10,
      modCondition: `Can apply while in combat, though you may __not__ choose to "suffer little harm" if you do.`,
      amendResults: {
        successFooter: `If you used **'Never Again'** to take an automatic 10, you cannot choose "suffer little harm".`,
      }
    }]
  },
  WhatDoesntKillMe: {
    name: `What Does Not Kill Me...`,
    id: `dcb22925-e5d5-46ca-aeb0-001640084f0f`,
    playbooks: [`36e0df53-1690-46cf-a59e-56ef397d108d`], // The Wronged
    featType: FeatType.Move,

    description: `If you have suffered \`harm\` in a fight, you gain +1 \`ongoing\` until the fight is over.`,
    
    modMoves: [{
      applyToMoves: [`*`],
      modRoll: 1,
      modCondition: `Apply during a fight in which you have suffered harm.`,
    }]
  },
  Fervor: {
    name: `Fervor`,
    id: `486000a8-2345-451b-b65d-339a5374aad3`,
    playbooks: [`36e0df53-1690-46cf-a59e-56ef397d108d`], // The Wronged
    featType: FeatType.Move,

    description: `When you \`manipulate someone\`, roll +Tough instead of +Charm.`,
    
    modMoves: [{
      applyToMoves: [`d245fc16-53f7-40bd-bdbb-45cde437adab`, `1d8097c8-90bc-485e-90a0-0eb9e94d0959`], // Manipulate Someone and Manipulate A Hunter
      alternateAbility: Stats.Tough
    }]
  },
  SafetyFirst: {
    name: `Safety First`,
    id: `fc1b8038-803a-4a4e-8296-fad4d1d65b04`,
    playbooks: [`36e0df53-1690-46cf-a59e-56ef397d108d`], // The Wronged
    featType: FeatType.Move,

    description: `You have jury-rigged extra protection into your gear, giving you +1 armor (maximum 2-armor).`,
    
    modArmor: [{
      name: `Safety First`,
      armorOffset: 1,
      armorMax: 2,
    }]
  },
  DIYSurgery: {
    name: `DIY Surgery`,
    id: `47603ea7-3061-4ad9-8463-6498ccc602e5`,
    playbooks: [`36e0df53-1690-46cf-a59e-56ef397d108d`], // The Wronged
    featType: FeatType.Move,

    description: `You do quick and dirty first aid on someone (including yourself).`,
    longDescription: ``,

    actions: [{
      name: `DIY Surgery`,
      id: `d2611b9c-ee3d-4d0e-8207-97af6a014524`,
      ability: Stats.Cool,
      description: `You do quick and dirty first aid on someone (including yourself).`,
      
      miss: `\`The Keeper\` can take a hard move against you. You likely failed to apply healing, but \`The Keeper\` may allow you to apply the normal \`First Aid\` effects.`,
      mixedSuccess: `Choose one of the following outcomes:
* Heal 1 \`harm\` and \`stabilize\` the patient, but they take -1 \`forward\`.
* Heal 2 \`harm\` and \`stabilize\` the patient, but it'll return as 2 \`harm\` and become \`unstable\` again later.
* Heal 2 \`harm\` and \`stabilize\` the patient, but they take -1 \`ongoing\` until it's fixed properly.`,
      solidSuccess: `It's all good. Heal 2 \`harm\` and \`stabilize\` your patient.`,
    }]
  },
  ToolsMatter: {
    name: `Tools Matter`,
    id: `5a573905-b41e-4f50-9b94-d710de9f5445`,
    playbooks: [`36e0df53-1690-46cf-a59e-56ef397d108d`], // The Wronged
    featType: FeatType.Move,

    description: `With your **Signature Weapon**, you get +1 to \`kick some ass\`.`,
    
    modMoves: [{
      applyToMoves: [`6d3f9e16-a230-4478-9481-853c90ff4cec`], // Kick Some Ass
      modRoll: 1,
      modCondition: `Apply while using your **Signature Weapon**.`,
    }]
  },
} as const;

export let MovesLookup = Object.fromEntries(Object.values(Moves).map(f => [f.id, f]))