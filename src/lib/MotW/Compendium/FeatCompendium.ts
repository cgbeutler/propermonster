import {type FeatDesc, StatEnum, type SubFeatDesc} from "./CompendiumTypes";
import {AllyType, InputTypes, MulticlassTypes} from "./UserInputTypes";
import {RangeEnum} from "./Tags";
import {itemLookup} from "./Gear";

export let UniversalFeats: Array<SubFeatDesc> = [
  {
    id: "4cbc4894-e8f2-454b-8e31-a2bebe0f07c9",
    name: "Default Attacks",
    description: `Default unarmed and improvised attacks`,
    perks: {
      attacks: [
        {
          name: "Unarmed",
          description: `Any attack that is equal to or less than a punch in severity.`,
          harm: 0,
          ranges: [RangeEnum.Intimate, RangeEnum.Hand],
        },
        {
          name: "Basic Improvised Weapon",
          description: `A sharp or heavy object (such as a kitchen knife or a lamp.) If it can be thrown effectively, you can use \`#close\`.`,
          harm: 1,
          ranges: [RangeEnum.Hand, RangeEnum.Close],
        },
        {
          name: "Heavy Improvised Weapon",
          description: `A really heavy object (such as a microwave or bar stool.)`,
          harm: 2,
          ranges: [RangeEnum.Hand],
          tags: ["heavy"]
        },
      ]
    }
  }
]

export let Feats: Array<FeatDesc> = [
  {
    id: "2b49540f-3629-43db-a879-e8c81d436c86",
    playbook: "94a658a0-f5dc-4e4b-a1ec-1b322b08d78f", // The Chosen
    startingFeat: true,
    multiclassable: false,

    name: "Your Fate",
    description: "You get to decide what sort of fate is in store for you.",
    longDescription: `You get to decide what sort of fate is in store for you.

Choose how you found out about your fate (Your Fate Origin.)

Then pick two **Heroic Tags** and two **Doom Tags** for your fate. This is how your fate will unfold.
It's okay to pick contradictory tags: that means your fate is pulling you both ways.
Whenever you mark off a point of \`Luck\`, \`The Keeper\` will throw something from your fate at you.`,
    
    // TODO: Somehow we need to reach in and change the number of choices for the heroic and doom tags.
    //       or perhaps just list the chosen ones and let you choose which to remove? Sounds tricky.
    inputs: [
      {
        id: "fateOrigin", type: InputTypes.MultipleChoice,
        label: "Fate Origin",
        choose: 1,
        options: [
          "Nightmares and Visions", "Some weirdo told you", "An ancient cult found you", "Sought out by your nemesis",
          "Attacked by Monsters", "Trained from birth", "You found the prophecy"
        ],
        allowCustom: true
      },
      {
        id: "heroicTags", type: InputTypes.MultipleChoice,
        label: "Heroic Tags",
        choose: 2,
        options: [
          "Sacrifice", "You are the Champion", "Visions", "Secret training", "Magical powers", "Mystical inheritance",
          "A normal life", "True love", "You can save the world", "Hidden allies", "The end of monsters", "Divine help"
        ],
        allowCustom: false,
      },
      {
        id: "doomTags", type: InputTypes.MultipleChoice,
        label: "Doom Tags",
        choose: 2,
        options: [
          "Death", "You can't save everyone", "Impossible love", "Failure", "A nemesis", "No normal life",
          "Loss of loved ones", "Treachery", "Doubt", "Sympathy with the enemy", "Damnation", "Hosts of monsters",
          "The end of days", "The source of Evil"
        ],
        allowCustom: false,
      },
    ]
  },
  {
    id: "5a92f2da-ca73-4fac-b859-08f2c745ae9b",
    playbook: "94a658a0-f5dc-4e4b-a1ec-1b322b08d78f", // The Chosen
    startingFeat: true,
    multiclassable: true,

    name: "Destiny's Plaything",
    description: `At the beginning of each **Mystery**, roll to see what is revealed about your immediate future.`,
    perks: {
      actions: [
        {
          name: "Destiny's Plaything",
          description: `At the beginning of each **Mystery**, roll to see what is revealed about your immediate future.`,

          coreStat: StatEnum.Weird,

          miss: `Something bad is going to happen to you...`,

          mixedSuccess: `You get a vague hint about the coming **Mystery**.`,
          solidSuccess: `\`The Keeper\` will reveal a useful detail about the coming **Mystery**.`,
        },
      ]
    }
  },
  {
    id: "2f8454d1-2528-428a-af7e-270ddb97019e",
    playbook: "94a658a0-f5dc-4e4b-a1ec-1b322b08d78f", // The Chosen
    startingFeat: true,
    multiclassable: true,

    name: "I'm Here For A Reason",
    description: `You can use **Luck** to come back to life.`,
    longDescription: `There's something you are destined to do.
Work out the details with \`The Keeper\`, based on your **Fate** selection.
You cannot die until it comes to pass.

If you die in play, then you must spend a **Luck** point. You will then, somehow, recover or be returned to life.
Once your task is done (or you use up all your **Luck**) all bets are off.`,
    perks: {
      luck: [
        {
          description: `You can use **Luck** to come back to life.`,
        }
      ]
    }
  },
  {
    id: "14f72ee0-bf5b-4958-ac31-f2387246b5dd",
    playbook: "94a658a0-f5dc-4e4b-a1ec-1b322b08d78f", // The Chosen
    startingFeat: false,
    multiclassable: true,

    name: "The Big Entrance",
    description: `Make a showy entrance into a dangerous situation.`,

    perks: {
      actions: [
        {
          name: "The Big Entrance",
          description: `Make a showy entrance into a dangerous situation.`,

          coreStat: StatEnum.Cool,

          miss: `You're marked as the biggest threat by all enemies who are present.`,

          mixedSuccess: `You pick one person or monster to stop, watch and listen until you finish talking.`,
          solidSuccess: `Everyone stops to watch and listen until you finish your opening speech.`,
        }
      ]
    }
  },
  {
    id: "91102186-f3b3-4836-b2f6-52ca3b567bfa",
    playbook: "94a658a0-f5dc-4e4b-a1ec-1b322b08d78f", // The Chosen
    startingFeat: false,
    multiclassable: true,

    name: "Devastating",
    description: `When you inflict **Harm**, you may inflict +1 **Harm**`,
    
    perks: {
      attackModifiers: [{
        name: "Devastating",
        description: `When you inflict **Harm**, you may inflict +1 **Harm**`,
        offset: 1,
      }]
    }
  },
  {
    id: "9b5d9bbc-7c9f-4c5f-aef0-c63cf848081e",
    playbook: "94a658a0-f5dc-4e4b-a1ec-1b322b08d78f", // The Chosen
    startingFeat: false,
    multiclassable: true,

    name: "Dutiful",
    description: `When your **Fate** rears its ugly head, and you act in accordance with any of your **Fate Tags** (either heroic or doom) then mark experience. If it's a heroic tag, take +1 \`forward\`.`,

    perks: {
      experience: [{
        description: `When you respond to your **Fate** with any of your **Fate Tags**, mark experience. (If it's a heroic tag, take +1 \`forward\`.)`,
      }]
    }
  },
  {
    id: "34b4eede-c8b1-40ea-a16b-b2e8ef160d8d",
    playbook: "94a658a0-f5dc-4e4b-a1ec-1b322b08d78f", // The Chosen
    startingFeat: false,
    multiclassable: true,

    name: "Invincible",
    description: `You always count as having 2 **Armor**. This doesn't stack with other protection.`,
    
    perks: {
      armors: [
        {
          name: `Plot Armor`,
          description: `You always count as having 2 **Armor**. This doesn't stack with other protection.`,
          armor: 2,
        },
      ]
    }
  },
  {
    id: "a84f5881-0188-4cb1-a303-f913fe939e72",
    playbook: "94a658a0-f5dc-4e4b-a1ec-1b322b08d78f", // The Chosen
    startingFeat: false,
    multiclassable: true,

    name: "Resilience",
    description: `You heal faster than normal people. Any time your **Harm** gets healed, heal an extra point. Additionally, your wounds count as 1 **Harm** less for the purpose of \`The Keeper\`'s harm moves.`,

    perks: {
      health: [
        {
          description: `Any time your **Harm** gets healed, heal an extra point.`,
        },
        {
          description: `Your wounds count as 1 **Harm** less in regard to \`The Keeper\`'s **Harm** moves.`,
        }
      ]
    }
  },
  {
    id: "a73676f8-d7f9-4d32-98ac-aeda96b8ebc4",
    playbook: "bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae", // The Crooked
    startingFeat: false,
    multiclassable: false,

    name: "Background",
    description: `You worked a less-than-legal job before you bake a monster hunter.`,

    inputs: [{
      type: InputTypes.Augment,
      id: "background",
      label: "Background",
      choose: 1,
      options: [
        {
          id: "d2b2974c-b330-4c38-aa22-78648ae3f756",
          name: "Hoodlum",
          description: `You can use +Tough (instead of +Charm) to **Manipulate Someone** with threats of violence.`,
  
          perks: {
            manipulateSomeone: [{
              description: `You can use +Tough (instead of +Charm) to **Manipulate Someone** with threats of violence.`,
              alternateStat: StatEnum.Tough,
            }]
          }
        },
        {
          id: "c884798c-32f3-44ca-b9b5-e966c0151c0c",
          name: "Burglar",
          description: `Sharp Move: You can break into a secure location.`,
  
          perks: {
            actions: [{
              name: "Burgle",
              description: `Break into a secure location.`,

              coreStat: StatEnum.Sharp,

              miss: `\`The Keeper\` can take a hard move against you. You likely did not succeed in your burgle attempt.`,

              mixedSuccess: `Pick Two:`,
              solidSuccess: `Pick Three:`,
              successFooter: `
* You get in undetected.
* You can get out undetected.
* You don't leave a mess.
* You find what you are after.
        `,
            }]
          }
        },
        {
          id: "5c991827-9e8e-4533-ac32-32f49635f906",
          name: "Grifter",
          description: `When you are about to **Manipulate Someone**, you can ask \`The Keeper\`, "What will convince this person to do what I want?"
\`The Keeper\` must answer honestly, but not necessarily completely.`,
  
          perks: {
            manipulateSomeone: [{
              description: `Before **Manipulate Someone**, you can ask, "What will convince this person to do what I want?"`,
            }]
          }
        },
        {
          id: "23f0898d-9dcb-411c-9c39-784fb4a5a4e2",
          name: "Fixer",
          description: `You are good at finding a buyer, seller, or someone for-hire using **+Charm**.`,
  
          perks: {
            actions: [{
              name: "Fixer",
              description: `You are good at finding a buyer, seller, or someone for-hire using **+Charm**.`,

              coreStat: StatEnum.Charm,

              miss: `The only person who can help is someone who absolutely hates you.`,

              mixedSuccess: `You know the one person who can probably do it, but theres a complication.

Pick One:
* You owe them.
* They screwed you over.
* You screwed them over.`,
              solidSuccess: `You know just the person who would be interested.`,

            }]
          }
        },
        {
          id: "1e123c89-81eb-4f7c-93a6-c7ca7fba088d",
          name: "Assassin",
          description: `When you take your first shot at an unsuspecting target, do +2 **Harm**`,
  
          perks: {
            attackModifiers: [{
              name: `Assassin`,
              description: `When you take your first shot at an unsuspecting target, do +2 **Harm**`,
              offset: 2,
              apply: false,
            }]
          }
        },
        {
          id: "6772bfde-fda9-4ee6-afc4-a969475bf9d6",
          name: "Charlatan",
          description: `When you want people to think you are using magic or when you want to **Manipulate Someone** with fortune telling.
When you use **Manipulate Someone** with fortune telling, you may ask "What are they hoping for right now?" as a free question (even on a miss.)`,
  
          perks: {
            actions: [{
              name: "Magic Tricks",
              description: `Make people think you are using magic.`,

              coreStat: StatEnum.Cool,

              miss: `\`The Keeper\` can take a hard move against you. You likely failed to convince them that you did magic.`,

              mixedSuccess: `You tripped up a couple of times. Someone may have noticed.`,
              solidSuccess: `Your audience is amazed and fooled by your illusion.`,
            }],
            manipulateSomeone: [{description: `When fortune telling, you may ask "What are they hoping for right now?" as a free question (even on a miss.)`}]
          }
        },
        {
          id: "1e618c4e-b780-4948-8c25-ae60fffc6f26",
          name: "Pickpocket",
          description: `Steal something small`,

          perks: {
            actions: [{
              name: "Pickpocket",
              description: `Steal something small`,

              coreStat: StatEnum.Charm,

              miss: `\`The Keeper\` can take a hard move against you. You likely failed your pickpocket attempt.`,

              mixedSuccess: `Choose One:
* You don't grab it
* You grab the wrong thing
* They will remember you later`,
              solidSuccess: `You get it and they didn't notice you take it.`,
            }],
          }
        }
      ],
    }]
  },
  {
    id: "1a49552b-c007-466a-8e1a-c4b48f13be59",
    playbook: "bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae", // The Crooked
    startingFeat: false,
    multiclassable: true,

    name: "Artifact",
    description: `You 'found' a magical artifact with handy powers, and kept it.`,
    showInputs: [ "artifact" ],
    
    longDescription: `Pick One:
* Protective Amulet: 1 **Armor** #magic #recharge.
* Lucky Charm: Use instead of **Luck** only once.
* Grimoire: Studying the book gives +1 \`forward\` to **Use Magic** (or an alternate Weird Basic Move.)
* Skeleton Key: Opens any magically sealed lock.
* Imp Stone: A weak demon is bound to serve the holder. The imp must be summoned with **Use Magic**.`,

    inputs: [{
      type: InputTypes.Items,
      id: "artifact",
      label: "Artifact",
      choose: 1,
      options: [
        itemLookup.ProtectiveAmulet.id,
        itemLookup.LuckyCharm.id,
        itemLookup.Grimoir.id,
        itemLookup.SkeletonKey.id,
        itemLookup.ImpStone.id,
      ]
    }]
  },
  {
    id: "8245c701-9ad3-4c48-a519-d17ab595439f",
    playbook: "bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae", // The Crooked
    startingFeat: false,
    multiclassable: true,

    name: "Crew",
    description: `You have a regular crew: a team of three or four people who will help you out with pretty much anything. They count as an ally team.`,

    inputs: [{ type: InputTypes.Ally, id: "crew", label: "Gang", crewMin: 3, crewMax: 4 }],

    perks: {
      social: [{
        description: `You have a crew that will help you out with pretty much anything. They count as an ally team.`,
        showInputs: [ "crew" ]
      }]
    }
  },
  {
    id: "9745fbb6-da21-4e2c-bb74-cd2beb5874fe",
    playbook: "bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae", // The Crooked
    startingFeat: false,
    multiclassable: true,

    name: "Deal with the Devil",
    description: `You sold your soul to the Devil.`,
    showInputs: [ "deal" ],
    
    longDescription: `Pick one or two things you got out of the deal:
* Wealth
* Fame,
* Youth,
* Sensual Gratification
* Skill (add +1 to two stats)

Payment is due when you die in 6 months (if you picked 2 things) or 1 year (if you picked 1 thing.)`,

    inputs: [{
      type: InputTypes.Augment,
      id: "deal",
      label: "Deal",
      choose: 1,
      options: [
        {
          id: "b4bbe310-89fc-46a7-9db2-d3c931c2951a",
          name: "You were given 1 perk, but have only 1 year to live.",
          inputs: [{
            type: InputTypes.Augment,
            id: "deal2",
            label: "Perk",
            choose: 1,
            options: [
              {
                id: "a684fdef-26a0-492a-9d4f-7050992c92dd",
                name: "Wealth",
                perks: {
                  inventory: [{description: `You sold your soul for wealth. You have only 1 year till your soul is forfeit.`,}]
                }
              },
              {
                id: "1ed585f3-f6f2-4e21-8e89-0228feb53c76",
                name: "Fame",
                perks: {
                  social: [{description: `You sold your soul for fame. You have only 1 year till your soul is forfeit.`,}]
                }
              },
              {
                id: "ae1e108a-7328-464f-b43c-c8a14139c3e3",
                name: "Youth",
                perks: {
                  social: [{description: `You sold your soul for youth. You have only 1 year till your soul is forfeit.`,}]
                }
              },
              {
                id: "8189152a-6e65-40e5-896d-29ed45858eb3",
                name: "Sexual gratification",
                perks: {
                  social: [{description: `You sold your soul for sexual gratification. You have only 1 year till your soul is forfeit.`,}]
                }
              },
              {
                id: "ec0fdacc-0f6b-4b10-836f-3399a3b5decb",
                name: "Skill (+1 to a stat)",
                description: `You gain skill, which grants you +1 to a rating (stat) of your choice`,
                inputs: [{
                  type: InputTypes.Augment,
                  id: "deal3",
                  label: "Rating",
                  choose: 1,
                  options: [
                    {
                      id: "0dca3bb3-b019-4315-ac86-a65576f14986",
                      name: "Charm",
                      perks: {charm: {bonus: 1, max: 4}}
                    },
                    {
                      id: "a9849b53-3e7c-4fe1-84fe-fb504c2bffe3",
                      name: "Cool",
                      perks: {cool: {bonus: 1, max: 4}}
                    },
                    {
                      id: "422b60c7-3f41-42f0-8177-d6e5e9b47440",
                      name: "Sharp",
                      perks: {sharp: {bonus: 1, max: 4}}
                    },
                    {
                      id: "9f142324-918a-43ec-a219-83df2269cf50",
                      name: "Tough",
                      perks: {tough: {bonus: 1, max: 4}}
                    },
                    {
                      id: "3393b93d-c718-40c2-a44d-134101cf4ae7",
                      name: "Weird",
                      perks: {weird: {bonus: 1, max: 4}}
                    },
                  ]
                }]
              },
            ]
          }]
        },
        {
          id: "b8a364f8-832f-452e-94a0-0ffb2524d51b",
          name: "You gain 2 perks, but have only 6 months to live.",
          inputs: [{
            type: InputTypes.Augment,
            id: "deal2",
            label: "Perks",
            choose: 2,
            options: [
              {
                id: "a684fdef-26a0-492a-9d4f-7050992c92dd",
                name: "Wealth",
                perks: {
                  inventory: [{description: `You sold your soul for wealth. You have only 1 year till your soul is forfeit.`}]
                }
              },
              {
                id: "1ed585f3-f6f2-4e21-8e89-0228feb53c76",
                name: "Fame",
                perks: {
                  social: [{description: `You sold your soul for fame. You have only 1 year till your soul is forfeit.`}]
                }
              },
              {
                id: "ae1e108a-7328-464f-b43c-c8a14139c3e3",
                name: "Youth",
                perks: {
                  social: [{description: `You sold your soul for youth. You have only 1 year till your soul is forfeit.`}]
                }
              },
              {
                id: "8189152a-6e65-40e5-896d-29ed45858eb3",
                name: "Sexual Gratification",
                perks: {
                  social: [{description: `You sold your soul for sexual gratification. You have only 1 year till your soul is forfeit.`}]
                }
              },
              {
                id: "ec0fdacc-0f6b-4b10-836f-3399a3b5decb",
                name: "Skill (+1 to a stat)",
                inputs: [{
                  type: InputTypes.Augment,
                  id: "deal3",
                  label: "Rating",
                  choose: 1,
                  options: [
                    {
                      id: "0dca3bb3-b019-4315-ac86-a65576f14986",
                      name: "Charm",
                      perks: {charm: {bonus: 1, max: 5}}
                    },
                    {
                      id: "a9849b53-3e7c-4fe1-84fe-fb504c2bffe3",
                      name: "Cool",
                      perks: {cool: {bonus: 1, max: 5}}
                    },
                    {
                      id: "422b60c7-3f41-42f0-8177-d6e5e9b47440",
                      name: "Sharp",
                      perks: {
                        sharp: {bonus: 1, max: 5}
                      }
                    },
                    {
                      id: "9f142324-918a-43ec-a219-83df2269cf50",
                      name: "Tough",
                      perks: {tough: {bonus: 1, max: 5}}
                    },
                    {
                      id: "3393b93d-c718-40c2-a44d-134101cf4ae7",
                      name: "Weird",
                      perks: {weird: {bonus: 1, max: 5}}
                    },
                  ]
                }]
              },
            ]
          }]
        },
      ]
    }]
  },
  {
    id: "7f61cb80-f1c2-4fa4-8d42-4e0b61559f38",
    playbook: "bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae", // The Crooked
    startingFeat: false,
    multiclassable: true,

    name: "Friends on the Force",
    description: `You know a few cops who can help, for certain considerations. You can lose the cops using **Act Under Pressure**.`,
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
    startingFeat: false,
    multiclassable: true,

    name: "Made",
    description: `You're "made" in a gang. You can call on the gang members to help you out. Your Boss may have jobs for you.`,
    longDescription: `You're "made" in a gang. Name the gang and describe how their operations tie into your background.
You can call on the gang members to help you out, but they'll expect to be paid. Your bosses will have requests for you now and again, but
you'll be paid. Minor trouble will be overlooked, but you better not screw over any other "made" gangsters.`,

    inputs: [
      { type: InputTypes.Text, id: "gangName", label: "Gang Name", placeholder: "The Hornets" },
      { type: InputTypes.TextArea, id: "gangDescription", label: "Gang Description", placeholder: "Gang operations. How the gang relates to your background. etc." },
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
    startingFeat: false,
    multiclassable: true,

    name: "Driver",
    description: `You have +1 \`ongoing\` when driving, you can hotwire anything using tools, and you own two vehicles.`,
    longDescription: `You have +1 \`ongoing\` when driving.
    
    You can hotwire anything (the older it is, the fewer tools you need to do it.)
    
    You own two handy, widely-available vehicles (perhaps a sports car and a van.)`,

    perks: {
      autoActions: [{
        name: "Hotwiring",
        description: `You can hotwire anything (the older it is, the fewer tools you need to do it.)`,
      }],
      allMoves: [{
        description: `You have +1 \`ongoing\` when driving.`,
        offset: 1,
      }],
    },

    vehicles: [
      { description: `Driver Vehicle 1. A handy, widely-available vehicle. (Likely lacks armor, monster cages, etc.)` },
      { description: `Driver Vehicle 2. A handy, widely-available vehicle. (Likely lacks armor, monster cages, etc.)` },
    ]
  },
  {
    id: "0790ae58-043a-45ac-a48f-5c61f4c2d5de",
    playbook: "bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae", // The Crooked
    startingFeat: false,
    multiclassable: true,

    name: "Home Ground",
    description: `Your crew made a point of keeping the locals happy. Your neighborhood will always be willing to help, no questions asked.`,
    longDescription: `Your crew made a point of keeping the locals happy - keeping them safe, ensuring things always went down okay, etc.
When you're back in your old neighborhood, you can always find people who will hide you or help you with a minor favor, no questions asked.`,

    perks: {
      social: [{ description: `Your neighborhood will always be willing to hide you or do minor favors, no questions asked.` }]
    }
  },
  {
    id: "707e0de6-f495-4262-b687-46589c965568",
    playbook: "bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae", // The Crooked
    startingFeat: false,
    multiclassable: true,

    name: "Notorious",
    description: `You have a reputation from your criminal past. You can reveal it to manipulate people more easily.`,
    longDescription: `You have a reputation from your criminal past.
When you reveal who you are, your terrifying reputation counts as a reason for people to do what you ask, for the **Manipulate Someone** move.
Revealing your identity to someone can create problems later, of course.`,

    perks: {
      manipulateSomeone: [{ description: `You can reveal your **Notorious** identity instead of providing a reason (may complicate things later.)` }]
    }
  },
  {
    id: "54736d93-6bc7-4292-b3ef-810e4d5e8f76",
    playbook: "bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae", // The Crooked
    startingFeat: true,
    multiclassable: false,

    name: "Gear",
    description: `You have 3 effective weapons`,
    
    inputs: [{
      id: "weapons",
      type: InputTypes.Augment,
      label: "Weapons",
      choose: 3,
      options: [
        {
          id: ".22 Revolver",
          name: "",
        }
      ]
    }]
  },
  {
    id: "2f980939-7d68-442c-a332-128136b4b7f6",
    playbook: "9e9f712c-54d9-4193-b7ad-48c64f7ec9dc", // The Divine
    startingFeat: true,
    multiclassable: false,

    name: "Mission",
    description: "You have been put on Earth for a purpose.",
    showInputs: ["mission"],
    
    inputs: [{
      id: "mission",
      type: InputTypes.Augment,
      label: "Mission",
      choose: 1,
      options: [
        {
          id: "63e20d42-35fc-49fc-ab10-f966252b7a2a",
          name: "Adversary of the Divine",
          description: "You are here to fight the schemes of an Adversary.",
        },
        {
          id: "6fb7421e-e702-4407-ad09-e641e3d270e2",
          name: "Guardian of the End of Days",
          description: `The End of Days approaches. Your role is to guide these \`Hunters\` and prevent it from coming to pass.`,
        },
        {
          id: "a5ca2fdb-1f94-49ea-8d2b-45377243f9fd",
          name: "Usher of the End of Days",
          description: `The End of Days approaches. Your role is to guide these \`Hunters\` and ensure it comes to pass.`,
        },
        {
          id: "250d7930-832d-4c94-ac6a-948febc3e2fe",
          name: "Exiled",
          description: `You have been exiled.
  
  You must work for the cause of Good without drawing attention from your brothers and sisters,
  as they are bound to execute you for your crimes.`,
        },
        {
          id: "9b7c2160-a9a8-4206-9f0c-3ed2edd18fce",
          name: "Apprentice of the Divine",
          description: `One of the other \`Hunters\` has a crucial role to play in events to come.
  You must prepare them for their role, and protect them at any cost.`,
        },
      ]
    }]
  },
  {
    id: "70f95c2f-9b6a-4a28-9d74-11d647f14944",
    playbook: "9e9f712c-54d9-4193-b7ad-48c64f7ec9dc", // The Divine
    startingFeat: true,
    multiclassable: false,
    
    name: "Gear",
    description: `You gain one divine weapon and some divine armor.`,
    longDescription: `Pick one divine weapon. You also get divine armor with 1 \`armor\` that is \`#holy\`.
Your divine armor has a look suited to your origin.`,
    
    inputs: [{
      id: `divineWeapon`,
      type: InputTypes.Items,
      label: `Divine Weapon`,
      choose: 1,
      options: [
        itemLookup.FlamingSword.id,
        itemLookup.ThunderHammer.id,
        itemLookup.RazorWhip.id,
        itemLookup.FiveDemonBag.id,
        itemLookup.SilverTrident.id,
      ]
    }],
    perks: {
      armors: [{
        name: `Divine Armor`,
        armor: 1,
        tags: [ `holy` ],
      }]
    }
  },
  {
    id: "6e2397c4-971e-4529-b26d-66bd35168ccd",
    playbook: "9e9f712c-54d9-4193-b7ad-48c64f7ec9dc", // The Divine
    startingFeat: false,
    multiclassable: true,

    name: "Boss from Beyond",
    description: `At the beginning of each mystery, roll to meet with the boss.`,
    
    inputs: [
      { type: InputTypes.TextArea, id: "task", label: "Task(s)", placeholder: "" },
      { type: InputTypes.Checks, id: "taskFailed", label: "Task(s) Failed", max: 1 },
    ],
    
    perks: {
      actions: [{
        name: "Boss from Beyond",
        coreStat: StatEnum.Weird,
        description: `At the beginning of each mystery, roll to meet with the boss.`,

        miss: `Your superiors require you do a terrible task.`,

        mixedSuccess: `Your superiors ask you to do a complicated or difficult task.`,
        solidSuccess: `Your superiors ask you to do a simple task.`,
        successFooter: `Additionally, You can ask your superiors one of the **Investigate a Mystery** questions:
\`@investigationQuestions\`
`,
        resultFooter: `If you do not accomplish what the boss ordered, you cannot use this move again until you have made up for your failure in some way.`,

        startOfMystery: true,
        showInputs: ["task", "taskFailed"]
      }]
    }
  },
  {
    id: "d68efbb3-0a67-42d1-81c1-86a1d09cecf5",
    playbook: "9e9f712c-54d9-4193-b7ad-48c64f7ec9dc", // The Divine
    startingFeat: false,
    multiclassable: true,

    name: "Angel Wings",
    description: `You can go instantly to anywhere you've visited before, or to a person you know well. If you try to take 1 or 2 people, you have to roll.`,
    
    perks: {
      actions: [{
        name: "Angel Wings",
        coreStat: StatEnum.Weird,
        description: `You can go instantly to anywhere you've visited before with 1 or 2 people. (No roll required to travel alone.)`,
        miss: `\`The Keeper\` can take a hard move against you. Your attempt likely failed or went terribly wrong.`,
        mixedSuccess: `You didn't quite manage it. Either you are all separated or you all appear in the wrong place.`,
        solidSuccess: `You all get where you wanted to go.`,
      }],
      autoActions: [{
        name: "Angel Wings",
        description: `You can go instantly to anywhere you've visited before, or to a person you know well. (See the **Ability** if you want to take people with you.)`
      }]
    }
  },
  {
    id: "6f96fc77-c094-4aca-94e9-76eee2705815",
    playbook: "9e9f712c-54d9-4193-b7ad-48c64f7ec9dc", // The Divine
    startingFeat: false,
    multiclassable: true,

    name: "What I Need, When I Need It",
    description: `You may store any small object you own in a magical space no one can get to. You can retrieve stored items any time into your hand.`,
    
    perks: {
      autoActions: [{
        name: "What I Need, When I Need It",
        description: `You may store any small object you own in a magical space no one can get to. You can retrieve stored items any time into your hand.`
      }]
    }
  },
  {
    id: "572a1a57-cd59-4362-b7df-a9cd1894a870",
    playbook: "9e9f712c-54d9-4193-b7ad-48c64f7ec9dc", // The Divine
    startingFeat: false,
    multiclassable: true,

    name: "Smite",
    description: `Your body and divine weapon always count as a weakness against the monsters you fight. Your unarmed attacks are 2 **Harm** #intimate #hand #messy`,

    perks: {
      attacks: [{
        name: "Smite - Unarmed", description: `Counts as a weakness against monsters.`,
        harm: 2, ranges: [ RangeEnum.Intimate, RangeEnum.Hand ], tags: [ "messy" ],
      }]
    }
  },
  {
    id: "3fa74412-4f53-4b47-b125-f17f7e3eed9e",
    playbook: "9e9f712c-54d9-4193-b7ad-48c64f7ec9dc", // The Divine
    startingFeat: false,
    multiclassable: true,

    name: "Soothe",
    description: `Talk to someone for a few seconds to calm them.`,
    longDescription: `When you talk to someone for a few seconds in a quiet voice, you can calm them down and block any panic, anger, or other negative emotions they have.
This works even if the thing freaking them out is still present, as long as your voice can be heard.`,
    perks: {
      autoActions: [{
        name: "Soothe",
        description: `Talk to someone for a few seconds to calm them.`,
        longDescription: `When you talk to someone for a few seconds in a quiet voice, you can calm them down and block any panic, anger, or other negative emotions they have.
This works even if the thing freaking them out is still present, as long as your voice can be heard.`,
      }]
    }
  },
  {
    id: "d66c3ec4-38af-46c7-a375-e8eb1359c334",
    playbook: "9e9f712c-54d9-4193-b7ad-48c64f7ec9dc", // The Divine
    startingFeat: false,
    multiclassable: true,

    name: "Lay On Hands",
    description: `Your touch can heal injury and disease.`,
    perks: {
      actions: [{
        name: "Lay On Hands",
        description: `Your touch can heal injury and disease.`,
        coreStat: StatEnum.Cool,
        miss: `Your aura causes them extra harm`,
        mixedSuccess: `Heal 2 **Harm** or an illness and **Stabilize** the target.

Unfortunately, you take the damage or illness upon yourself.`,
        solidSuccess: `Heal 2 **Harm** or an illness and **Stabilize** the target.`
      }]
    }
  },
  {
    id: "5f13cf64-03d7-489c-8ebf-8578a19b4e44",
    playbook: "9e9f712c-54d9-4193-b7ad-48c64f7ec9dc", // The Divine
    startingFeat: false,
    multiclassable: true,

    name: "Cast Out Evil",
    description: `You may banish an unnatural creature from your presence.`,
    longDescription: `You may banish an unnatural creature from your presence. This move may be used on unnatural \`Hunters\`, like 'The Monstrous'.`,
    perks: {
      actions: [{
        name: "Cast Out Evil",
        description: `You may banish an unnatural creature from your presence.`,
        coreStat: StatEnum.Tough,
        miss: `Something is keeping it here... that's not good.`,
        mixedSuccess: `It takes a little while for the banishing to take effect--the creature has time to make one or two actions.`,
        solidSuccess: `It is banished!`,
        successFooter: `The banished creature is unharmed. You have no control over where it goes.`
      }]
    }
  },
  {
    id: "6db80acb-2a78-413c-bcb9-ae62ca361f9e",
    playbook: "689d32a6-faa1-4258-9fda-894b9bdf8571", // The Expert
    startingFeat: false,
    multiclassable: true,

    name: `I've Read About This Sort Of Thing`,
    description: `You can roll +Sharp (instead of +Cool) when you **Act Under Pressure**`,

    perks: {
      actUnderPressure: [{
        description: `You can roll +Sharp (instead of +Cool) when you **Act Under Pressure**`,
        alternateStat: StatEnum.Sharp
      }]
    }
  },
  {
    id: "b95e492e-4947-4249-9daf-ee311daede55",
    playbook: "689d32a6-faa1-4258-9fda-894b9bdf8571", // The Expert
    startingFeat: false,
    multiclassable: true,

    name: "Often Right",
    description: `Grant +1 \`ongoing\` and gain experience when a \`Hunter\` comes to you for advice.`,
    longDescription: `When a \`Hunter\` comes you you for advice, give them your honest opinion or advice. If they take your advice, they get +1 \`ongoing\` while they follow your advice, and you mark **Experience**.`,
    perks: {
      autoActions: [{
        name: "Often Right",
        description: `When a \`Hunter\` comes you to for honest advice, giving it will gain **Experience** and grant them +1 \`ongoing\`.`,
        longDescription: `When a \`hunter\` comes you you for advice, give them your honest opinion or advice. If they take your advice, they get +1 \`ongoing\` while they follow your advice, and you mark **Experience**.`,
      }]
    }
  },
  {
    id: "19b7c2ce-772c-435f-bd76-6d5758a49e76",
    playbook: "689d32a6-faa1-4258-9fda-894b9bdf8571", // The Expert
    startingFeat: false,
    multiclassable: true,

    name: "Preparedness",
    description: `When you need something unusual or rare, you may... just have it.`,
    perks: {
      actions: [{
        name: "Preparedness",
        description: `When you need something unusual or rare, you may... just have it.`,
        coreStat: StatEnum.Sharp,
        miss: `You know where it is, but it's somewhere real bad.`,
        mixedSuccess: `You have it, but not here. It will take some time to get it.`,
        solidSuccess: `You have it right here right now.`
      }]
    }
  },
  {
    id: "09d5b526-ab5d-40c1-b59f-40c05e1e5b97",
    playbook: "689d32a6-faa1-4258-9fda-894b9bdf8571", // The Expert
    startingFeat: false,
    multiclassable: true,

    name: "It Wasn't As Bad As It Looked",
    description: `Once per mystery you may attempt to keep going despite your injuries.`,

    perks: {
      actions: [{
        name: "It Wasn't As Bad As It Looked",
        description: `Once per mystery you may attempt to keep going despite your injuries.`,
        coreStat: StatEnum.Cool,
        miss: `It was worse than it looked. The Keeper may inflict a harm move on you or make your wounds unstable.`,
        mixedSuccess: `Choose One: Heal 1 harm -or- stabilize your wounds.`,
        solidSuccess: `Heal 2 harm and stabilize your wounds.`,
        uses: 1,
        usesResetAtEndOfMystery: true,
      }]
    }
  },
  {
    id: "f649cb50-aab1-4681-88a7-6782156f7388",
    playbook: "689d32a6-faa1-4258-9fda-894b9bdf8571", // The Expert
    startingFeat: false,
    multiclassable: true,

    name: "Precise Strike",
    description: `When you inflict harm on a monster, you can aim for a weak spot.`,
    perks: {
      actions: [{
        name: "Precise Strike",
        description: `When you inflict harm on a monster, you can aim for a weak spot.`,
        coreStat: StatEnum.Tough,
        miss: `You have left yourself open to the monster.`,
        mixedSuccess: `You inflict +1 **Harm**.`,
        solidSuccess: `You inflict +2 **Harm**.`,
      }]
    }
  },
  {
    id: "adaa8efc-6b8f-4f28-95a1-7aa333af312d",
    playbook: "689d32a6-faa1-4258-9fda-894b9bdf8571", // The Expert
    startingFeat: false,
    multiclassable: true,

    name: "The One With The Plan",
    description: `At the beginning of each mystery, roll for points to be in the right place at the right time.`,
    
    inputs: [
      { type: InputTypes.Checks, id: "holds", label: "Holds", max: 2, resetPerMystery: true },
      { type: InputTypes.Checks, id: "keeperHolds", label: "Keeper Holds", max: 1, resetPerMystery: true },
    ],
    
    perks: {
      actions: [{
        name: "The One With The Plan",
        description: `At the beginning of each mystery, roll for **Holds** to use later to be in the right place at the right time.`,
        coreStat: StatEnum.Tough,
        miss: `\`The Keeper\` **Holds** 1 and can spend it to put you in the worst place, unprepared and unready.`,
        mixedSuccess: `**Hold** 1.`,
        solidSuccess: `**Hold** 2.`,
        successFooter: `You can spend your **Hold** to be where you need to be, prepared and ready.`,
        startOfMystery: true,
        showInputs: ["holds", "keeperHolds"]
      }],
      autoActions: [{
        name: "The One With The Plan - Spend Hold",
        description: `Spend **Holds** to be where you need to be, prepared and ready.`,
        showInputs: ["holds", "keeperHolds"],
      }]
    }
  },
  {
    id: "3de6096b-69cb-4ae4-8e93-2cad11d32cda",
    playbook: "689d32a6-faa1-4258-9fda-894b9bdf8571", // The Expert
    startingFeat: false,
    multiclassable: true,

    name: "Dark Past",
    description: `Trawl through your memories for something relevant to the case at hand.`,
    perks: {
      actions: [{
        name: "Dark Past",
        description: `Trawl through your memories for something relevant to the case at hand.`,
        coreStat: StatEnum.Weird,
        miss: `You can ask \`The Keeper\` one of these questions, but that will mean you are personally complicit in creating the situation you are now dealing with.`,
        mixedSuccess: `Ask \`The Keeper\` one of these questions:`,
        solidSuccess: `Ask \`The Keeper\` two of these questions:`,
        resultFooter: `
* When I dealt this creature (or one of its kind), what did I learn?
* What black magic do I know that could help here?
* Do I know anyone who might be behind this?
* Who do I know who can help us right now?`
      }]
    }
  },
  {
    id: "1e8b0a9b-d78d-48ec-8589-379a871999d8",
    playbook: "3ef37c00-3254-4af4-830a-9a21e7c6d02a", // The Flake
    startingFeat: false,
    multiclassable: true,

    name: "Connect the Dots",
    description: `At the beginning of each mystery, look for wider patterns that the current events may be part of.`,
    
    inputs: [{ type: InputTypes.Checks, id: "holds", label: "Holds", max: 3, resetPerMystery: true }],

    perks: {
      actions: [{
        name: "Connect the Dots",
        description: `Look for wider patterns that the current events may be part of.`,

        coreStat: StatEnum.Sharp,

        miss: `You fail to see any connections. \`The Keeper\` may take a move against you based on your inability to see the bigger picture.`,
        mixedSuccess: `**Hold** 1.`,
        solidSuccess: `**Hold** 3.`,
        successFooter: `
During the mystery, you can spend your **Hold** to ask any one of the following questions:
* Is this person connected to the current events more than they are saying?
* When and where will the next critical event occur?
* What does the monster want from this person?
* Is this connected to previous mysteries we have investigated?
* How does this mystery connect to the bigger picture?`,

        startOfMystery: true,
        showInputs: ["holds"]
      }],
      autoActions: [{
        name: "Connect the Dots - Spend Hold",
        description: `Spend your **Holds** to ask any one of the questions, gaining a view of the greater picture.`,
        longDescription: `During the mystery, you can spend your **Hold** to ask any one of the following questions:
* Is this person connected to the current events more than they are saying?
* When and where will the next critical event occur?
* What does the monster want from this person?
* Is this connected to previous mysteries we have investigated?
* How does this mystery connect to the bigger picture?`,
        showInputs: ["holds"]
      }]
    }
  },
  {
    id: "d4880510-6fc2-449e-a6f6-0849c8ec36d1",
    playbook: "3ef37c00-3254-4af4-830a-9a21e7c6d02a", // The Flake
    startingFeat: false,
    multiclassable: true,

    name: "Crazy Eyes",
    description: `Gain +1 Weird (max +3)`,

    perks: { weird: { bonus: 1, max: 3 } }
  },
  {
    id: "98dbb124-67af-4cb9-9a8c-24bf46ee0805",
    playbook: "3ef37c00-3254-4af4-830a-9a21e7c6d02a", // The Flake
    startingFeat: false,
    multiclassable: true,

    name: "See, It All Fits Together",
    description: `You can roll +Sharp (instead of +Charm) when you \`manipulate someone\``,

    perks: {
      manipulateSomeone: [{
        description: `You can roll +Sharp (instead of +Charm) when you \`manipulate someone\``,
        alternateStat: StatEnum.Charm,
      }]
    }
  },
  {
    id: "0e00af10-e0c3-49a7-a922-b54cafa09675",
    playbook: "3ef37c00-3254-4af4-830a-9a21e7c6d02a", // The Flake
    startingFeat: false,
    multiclassable: true,

    name: "Suspicious Mind",
    description: `If someone lies to you, you know it.`,

    perks: {
      protections: [{ description: `If someone lies to you, you know it.` }]
    }
  },
  {
    id: "5a3d28e5-fb9b-4b6c-90d5-2884a963cea3",
    playbook: "3ef37c00-3254-4af4-830a-9a21e7c6d02a", // The Flake
    startingFeat: false,
    multiclassable: true,

    name: "Often Overlooked",
    description: `When you act all crazy, but are taken as an obvious distraction to be ignored.`,

    perks: {
      actions: [{
        name: "Often Overlooked",
        description: `When you act all crazy, but are taken as an obvious distraction to be ignored.`,
        coreStat: StatEnum.Weird,
        miss: `You draw lots (but not all) the attention.`,
        mixedSuccess: `You are regarded as either un-threatening or unimportant (pick one.)`,
        solidSuccess: `You are regarded as un-threatening and unimportant.`
      }]
    }
  },
  {
    id: "ea9088b8-319b-410d-bfe2-5dfc9e479db6",
    playbook: "3ef37c00-3254-4af4-830a-9a21e7c6d02a", // The Flake
    startingFeat: false,
    multiclassable: true,

    name: "Contrary",
    description: `When you seek out and receive honest advice, then do something else instead.`,
    longDescription: `When you seek out and receive honest advice on the best course of action for you and then do something else instead, mark experience.
If you do exactly the opposite of their advice, you also take +1 \`ongoing\` on any moves you make pursuing that course.`,

    perks: {
      experience: [{ description: `When you seek out and receive honest advice, then do something else instead, gain +1 **Experience**.` }],
      allMoves: [{
        description: `When you do the exact opposite of honest advice given to you, gain +1 \`ongoing\` (and gain Experience, if you haven't already for this advice.)`,
        offset: 1,
      }]
    }
  },
  {
    id: "981370ad-63a5-4f58-a4cf-79683ac40bdc",
    playbook: "3ef37c00-3254-4af4-830a-9a21e7c6d02a", // The Flake
    startingFeat: false,
    multiclassable: true,

    name: "Net Friends",
    description: `You know a lot of people on the Internet. You can contact a net friend to help with a mystery.`,

    perks: {
      actions: [{
        name: "Net Friends",
        description: `You know a lot of people on the Internet. You can contact a net friend to help with a mystery.`,

        coreStat: StatEnum.Charm,

        miss: `You burn some bridges online.`,
        mixedSuccess: `They're prepared to help, but it's either going to take some time or you're going to have to do part of it yourself.`,
        solidSuccess: `They're available and helpful--they can fix something, break a code, hack a computer, or get you some special information.`,
      }]
    }
  },
  {
    id: "d63fe39c-5505-4ab6-b1d0-6b3223b306fe",
    playbook: "3ef37c00-3254-4af4-830a-9a21e7c6d02a", // The Flake
    startingFeat: false,
    multiclassable: true,

    name: "Sneaky",
    description: `When you attack from ambush, or from behind, inflict +2 **Harm**.`,

    perks: {
      attackModifiers: [{
        name: `Sneaky`,
        description: `When you attack from ambush, or from behind, inflict +2 **Harm**.`,
        offset: 2,
        apply: false,
      }]
    }
  },
  {
    id: "d08ea9e4-88fb-46d6-975e-1045575a4ea5",
    playbook: "12bc1318-24c7-4402-b9bb-be0698c4ed99", // The Gumshoe
    startingFeat: true,
    multiclassable: false,

    name: "Gumshoe Code",
    description: `You adhere to a code that helps you \`manipulate someone\`, and protects you from possessions and charms.`,
    longDescription: `With the agreement of \`The Keeper\`, pick a one-sentence **Code** that your Gumshoe adheres to.

This **Code** defines your Gumshoe. Any time you violate your code, you forfeit:
* All **Code**-related **Moves** (**'The Postman Always Rings Twice'**, **'The Long Goodbye'**)
* The ability to spend **Luck** points.

These forfeits last either until the next mystery or until you make amends.

As long as you follow the **Code**, people will sense your sincerity. You gain the following:
* +1 \`ongoing\` to \`manipulate someone\`
* Protection from being possessed or charmed by any sort of supernatural, alien, or demonic entity or item

Examples of Codes:
* Murderers must be punished.
* Monsters must be destroyed.
* Innocents must be saved.
* Laws must be enforced.
* Evil must be exposed.
* The weak must be protected from the powerful.`,

    inputs: [
      { type: InputTypes.Text, id: "code", label: "The Code", placeholder: "The weak must be protected from the powerful." },
      { type: InputTypes.Checks, id: "codeBroken", label: "Code Broken", max: 1, resetPerMystery: true },
    ],

    perks: {
      luck: [{
        description: `If your code is broken, you cannot use luck.`,
        showInputs: [ "code", "codeBroken" ]
      }],
      manipulateSomeone: [{
        description: `If your code is unbroken, you have +1 \`ongoing\`.`,
        offset: 1,
        showInputs: [ "code", "codeBroken" ]
      }],
      protections: [{
        description: `If your code is unbroken, you cannot be possessed or charmed by any supernatural, alien, or demonic entity or item.`,
        showInputs: [ "code", "codeBroken" ]
      }]
    }
  },
  {
    id: "5464ec99-8e20-4732-8d4d-b46442036ad4",
    playbook: "12bc1318-24c7-4402-b9bb-be0698c4ed99", // The Gumshoe
    startingFeat: true,
    multiclassable: true,

    name: "Occult Confidential",
    description: `The first time in each mystery that you observe a monster, minion, or phenomenon in action, you may ask an "\`investigate a mystery\`" question.`,

    perks: {
      autoActions: [{
        name: "Occult Confidential",
        description: `The first time in each mystery that you observe a monster, minion, or phenomenon in action, you may ask a question.`,
        uses: 1,
        usesResetAtEndOfMystery: true,

        longDescription: `The first time in each mystery that you observe a monster, minion, or phenomenon in action, you may ask one of the following questions:
\`@investigationQuestions\``,
      }]
    }
  },
  {
    // TODO: This one is kinda odd. You're supposed to pick 4 things, then all abilities, etc. rely on those choices.
    id: "65cadd94-cffe-46a9-be0d-840811627edf",
    playbook: "12bc1318-24c7-4402-b9bb-be0698c4ed99", // The Gumshoe
    startingFeat: true,
    multiclassable: true,

    name: "The Naked City",
    description: `You have lots of personal contacts wherever you go. You can hit them up for clues and small favors.`,
    longDescription: `You have lots of personal contacts wherever you go.

You can hit up a contact for info (+1 to one \`investigate a mystery\` roll) or small favor. There may be a small cost involved.
Personal contacts can provide more significant help. \`The Keeper\` decides their price on a case-by-case basis.

Pick four contact types from the provided areas (or from other areas agreed to between you and \`The Keeper\`.)`,

    inputs: [
      {
        id: "contacts", type: InputTypes.MultipleChoice,
        label: "Contact Types",
        choose: 4,
        options: [
          "Academics", "Accountants", "Artists", "Bartenders", "Clergy", "Conspiracy Theorists", "Construction",
          "Courts", "Criminals (organized)", "Criminals (street)", "Cultists", "Engineers", "Espionage", "Film and TV",
          "Forensic Scientists", "Fringe Scientists", "Hackers", "Journalists", "Lawyers", "Mechanics", "Media",
          "Medical Practitioners", "Military", "Morgue", "Occult", "Police (local)", "Police (national)", "Politicians",
          "Prisons", "Private Security", "Property Developers", "Stage Magicians", "Technologists", "Transportation"
        ],
        allowCustom: true,
      }
    ],

    perks: {
      autoActions: [{
        name: "The Naked City",
        description: `You have lots of personal contacts wherever you go. You can hit them up for clues and small favors.`,
        longDescription: `You have lots of personal contacts wherever you go.
  
You can hit up a contact for info (+1 to one \`investigate a mystery\` roll) or small favor. There may be a small cost involved.
Personal contacts can provide more significant help. \`The Keeper\` decides their price on a case-by-case basis.`,
        showInputs: [ "contacts" ],
      }],
      investigateAMystery: [{
        description: `You have lots of personal contacts wherever you go. You can hit them up for clues and small favors.`,
        showInputs: [ "contacts" ],
      }],
    },
  },
  {
    id: "6104c52f-a784-4f0c-9c7e-366ed0272786",
    playbook: "12bc1318-24c7-4402-b9bb-be0698c4ed99", // The Gumshoe
    startingFeat: false,
    multiclassable: true,

    name: "The Postman Always Rings Twice",
    description: `Twice per mystery--as long as you adhere to your **Code**--you may reroll a roll`,

    perks: {
      autoActions: [{
        name: "The Postman Always Rings Twice",
        description: `Twice per mystery--as long as you adhere to your **Code**--you may reroll a roll`,
        uses: 2,
        usesResetAtEndOfMystery: true,
      }]
    }
  },
  {
    id: "4f8fd245-5c7d-4aec-bfb8-1a916d0774fd",
    playbook: "12bc1318-24c7-4402-b9bb-be0698c4ed99", // The Gumshoe
    startingFeat: false,
    multiclassable: true,

    name: "The Long Goodbye",
    description: `You can't die wile you have an open case and an unbroken **Code**.`,
    longDescription: `You can't die with an open case __and__ an unbroken Code. You suffer all **Harm**, as normal,
but your death is postponed until you have either completed or abandoned the case, or you break your **Code** (then all bets are off.)`,

    perks: {
      health: [{ description: `You can't die wile you have an open case __and__ an unbroken **Code**.` }]
    }
  },
  {
    id: "c5611e67-15b9-481f-887e-8bc776a7459e",
    playbook: "12bc1318-24c7-4402-b9bb-be0698c4ed99", // The Gumshoe
    startingFeat: false,
    multiclassable: true,

    name: "Jessica Jones Entry",
    description: `When you double-talk your way into a secure location with **+Charm**.`,

    perks: {
      actions: [{
        name: "Jessica Jones Entry",
        // TODO: This reference is dumb. Add a long description to help.
        description: `When you double-talk your way into a secure location with **+Charm**.`,
        coreStat: StatEnum.Charm,

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
    }
  },
  {
    id: "ae903567-50c4-439b-ae69-cf2ca62ee099",
    playbook: "12bc1318-24c7-4402-b9bb-be0698c4ed99", // The Gumshoe
    startingFeat: false,
    multiclassable: true,

    name: "Out of the Past",
    description: `A police buddy will do you big favors, but expect something in return.`,
    longDescription: `You have a police buddy who will do you big favors.
Get in touch with them when you need to redirect law enforcement attention,
get a heads-up on what operations are planned, or access police files.

You owe them: Expect them to collect it soon.`,
    perks: {
      autoActions: [{
        name: "Out of the Past",
        description: `A police buddy will do you big favors, but expect something in return.`,
      }]
    }
  },
  {
    id: "0c3cfd4f-a0a4-45e2-bc14-d7d8ab9b199b",
    playbook: "12bc1318-24c7-4402-b9bb-be0698c4ed99", // The Gumshoe
    startingFeat: false,
    multiclassable: true,

    name: "Asphalt Jungle",
    description: `You heal faster than normal people and aren't affected by scuffs and scrapes.`,
    longDescription: `You heal faster than normal people. Any time your **Harm** gets healed, heal an extra point.
You are immune to all the harm move effects under '0-harm' and '1-harm' (when \`The Keeper\` would apply these, ignore it.)

Example 0-Harm and 1-Harm Move Effects you are immune to:
* Momentarily inhibited.
* Drop something.
* Take -1 \`forward\`.
* Fall down.
* Take -1 \`ongoing\`.
* Pass out.
* Intense Pain.`,

    perks: {
      health: [{ description: `Any time your **Harm** gets healed, heal an extra point.` }],
      protections: [{ description: `You are immune to **Harm Move** effects under '0-harm' and '1-harm'.` }],
    }
  },
  {
    id: "86a82955-3477-47da-afd4-209662ebabe6",
    playbook: "12bc1318-24c7-4402-b9bb-be0698c4ed99", // The Gumshoe
    startingFeat: false,
    multiclassable: true,

    name: "Hacker with a Dragon Tattoo",
    description: `When you hack into a computer system with **+Sharp**.`,

    perks: {
      actions: [{
        name: "Hacker with a Dragon Tattoo",
        description: `When you hack into a computer system with **+Sharp**.`,
        coreStat: StatEnum.Sharp,
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
    }
  },
  {
    id: "b47fdf18-3519-4bfa-9418-a31602233cba",
    playbook: "12bc1318-24c7-4402-b9bb-be0698c4ed99", // The Gumshoe
    startingFeat: false,
    multiclassable: true,

    name: `"Just one more thing"`,
    description: `When you ask a suspect leading questions with **+Charm**.`,

    perks: {
      actions: [{
        name: `"Just one more thing"`,
        description: `When you ask a suspect leading questions with **+Charm**.`,
        coreStat: StatEnum.Charm,
        miss: `**Hold** 1, but something bad is going to happen to you...`,
        mixedSuccess: `**Hold** 1`,
        solidSuccess: `**Hold** 2`,
        resultFooter: `You can spend one **Hold** to ask \`The Keeper\` one of the following questions:
* Was that a lie?
* What is something you left out that you didn't want me to notice?
* Are you complicit with any ongoing criminal activity?
* Did you commit this specific crime?

OR an \`investigate a mystery\` Question:
\`@investigationQuestions}\``
      }]
    }
  },
  {
    id: "9669821e-791a-40b0-b37a-0eecaed69e41",
    playbook: "23bdadbc-b690-4baa-8d96-7c791b4d66da", // The Hex
    startingFeat: true,
    multiclassable: true,

    name: "Bad Luck Charm",
    description: `Whenever you fail to \`use magic\`, the backlash will never directly affect __you__.`,
    longDescription: `Whenever you \`use magic\` and miss, the backlash never affects you directly if there's someone else around to hit.
It'll go for allies, other \`Hunters\`, innocent bystanders, etc. Every so often it may even hit an enemy.`,

    perks: {
      weirdMove: [{ description: `The backlash of a miss will never directly affect you (others on the otherhand...)` }]
    }
  },
  {
    id: "e0e31f7a-8ade-4d4c-9707-0587647427aa",
    playbook: "23bdadbc-b690-4baa-8d96-7c791b4d66da", // The Hex
    startingFeat: false,
    multiclassable: true,

    name: "Burn Everything",
    description: `When you \`use magic\` to inflict \`harm\`, you can choose to inflict 3 \`harm\` in an \`area\` or 3 \`harm\` that \`ignores armor\``,

    perks: {
      useMagic: [{
        description: `When you \`use magic\` to inflict \`harm\`, you can choose to inflict [\`#3-Harm\` \`#area\` \`#magic\` \`#obvious\`] or [\`#3-Harm\` \`#ignore-armor\` \`#magic\` \`#obvious\`]`,
        successHeader2: `Through **'Burn Everything'**, have the following effect options as well:
* Inflict 3 \`harm\` \`#area\` \`#magic\` \`#obvious\`
* Inflict 3 \`harm\` \`#ignore-armor\` \`#magic\` \`#obvious\``,
      }]
    }
  },
  {
    id: "237fa70b-094e-4fd4-9919-581d82acc23d",
    playbook: "23bdadbc-b690-4baa-8d96-7c791b4d66da", // The Hex
    startingFeat: false,
    multiclassable: true,

    name: "Cast the Bones",
    description: `Once per **Mystery**, you may perform a kind of divination to see the future using **+Sharp**.`,
    longDescription: `Once per **Mystery**, you may perform some kind of divination (tarot, casting runes, reading entrails, etc.) to glean information about the future.`,

    perks: {
      actions: [{
        name: "Cast the Bones",
        description: `Once per **Mystery**, you can perform a kind of divination to see the future.`,
        longDescription: `Once per **Mystery**, you may perform some kind of divination (tarot, casting runes, reading entrails, etc.) to glean information about the future.`,

        coreStat: StatEnum.Sharp,

        miss: `You get some information, but it's not what you wanted to hear.`,
        mixedSuccess: `**Hold** 1`,
        solidSuccess: `**Hold** 2`,
        successFooter: `You can spend one **Hold** to ask \`The Keeper\` one of the following questions.
\`The Keeper\` will answer truthfully, with either a direct answer or how to find out:
* What can I gain from this person/place/thing/creature?
* Who has touched this person/place/thing/creature before me?

You can also ask questions from the "\`investigate a mystery\`" list:
\`@investigationQuestions\``,

        uses: 1,
        usesResetAtEndOfMystery: true,
      }]
    }
  },
  {
    id: "9958712b-55a4-48fd-a9d5-c519bdf6a444",
    playbook: "23bdadbc-b690-4baa-8d96-7c791b4d66da", // The Hex
    startingFeat: false,
    multiclassable: true,

    name: "Force of Will",
    description: `Apply your will into dispelling a magical effect, blocking a spell, or suspending a phenomenon using **+Weird**.`,

    perks: {
      actions: [{
        name: "Force of Will",
        description: `Apply your will into dispelling a magical effect, blocking a spell, or suspending a phenomenon using **+Weird**.`,
        coreStat: StatEnum.Weird,
        miss: `\`The Keeper\` can make a hard move against you. You likely failed at dispelling the target.`,
        successHeader: `Momentary magics are canceled completely. Long lasting spells and effects are suspended temporarily.`,
        mixedSuccess: `Unfortunately, you take 1 **Harm** as the strain of dismissing the magic unravels you.`,
        solidSuccess: `You can also spend **Luck** to instantly snuff out a powerful spell or strange effect.`,
      }]
    }
  },
  {
    id: "50864b4a-29c9-4dfc-86f2-cf11f2883296",
    playbook: "23bdadbc-b690-4baa-8d96-7c791b4d66da", // The Hex
    startingFeat: false,
    multiclassable: true,

    name: "Luck of the Damned",
    description: `After you \`use magic\` or cast a **Rote**, take +1 \`forward\` on the next roll you make.`,

    perks: { useMagic: [{ description: `After you \`use magic\` or cast a **Rote**, take +1 \`forward\` on the next roll you make.` }] }
    // TODO: Bonus to all rolls everywhere?
  },
  {
    id: "15f9c6e4-67a5-43f0-9bf1-89c94a205400",
    playbook: "23bdadbc-b690-4baa-8d96-7c791b4d66da", // The Hex
    startingFeat: false,
    multiclassable: true,

    name: "Sympathetic Token",
    description: `While carrying a token from someone, you gain +1 \`ongoing\` to \`use magic\` to target them and you can target them distance. Token is lost on a miss.`,
    longDescription: `As long as you carry a personal object belonging to someone, such as a lock of hair, a full set of toenails, or a treasured family heirloom,
you get +1 \`ongoing\` to \`use magic\` against them. You can also \`use magic\` against them from a distance.
If you try to \`use magic\` against them and miss, the token is lost, destroyed, or loses its power.`,
    
    perks: { useMagic: [{ description: `While carrying a token from someone, you gain +1 \`ongoing\` when targeting them and you can target them distance. Token is lost on a miss.` }] }
  },
  {
    id: "b8635e43-5b46-4a26-a39e-ed33dbe13b14",
    playbook: "23bdadbc-b690-4baa-8d96-7c791b4d66da", // The Hex
    startingFeat: false,
    multiclassable: true,

    name: "This Might String",
    description: `You can \`use magic\` to heal 3 **Harm**, but the process is exceptionally painful. On a [7..9] it also leaves a gnarly scar.`,

    perks: { useMagic: [{ description: `You can heal 3 **Harm**, but the process is exceptionally painful. On a [7..9] it also leaves a gnarly scar.`, }] }
  },
  {
    id: "6632c6fd-082d-425d-9f16-aeb87ecc2809",
    playbook: "23bdadbc-b690-4baa-8d96-7c791b4d66da", // The Hex
    startingFeat: false,
    multiclassable: true,

    name: "Wise Soul",
    description: `Whenever you \`use magic\`, you can get a glimpse of of the worst result and back out before the roll.`,
    longDescription: `Whenever you \`use magic\`, right before you roll, you can ask \`The Keeper\` what exactly would happen on a miss.
If you dislike the risk, you can stop casting at the last second and let the spell fizzle harmlessly. All effort is wasted.`,

    perks: { useMagic: [{ description: `Before you roll, you can ask what would happen on a miss and decide to end the spell before it is rolled.`, }] }
  },
  {
    id: "96ee3021-d46d-42b6-8b77-8aeea00288d4",
    playbook: "a78c7ee1-eb8d-4622-adeb-22d9d87169b5", // The Initiate
    startingFeat: true,
    multiclassable: true,

    name: "The Call",
    description: `While in good standing with your **Sect**, roll for help (and possibly a mission) at the start of each **Mystery** using **+Charm**.`,

    inputs: [
      { type: InputTypes.TextArea, id: "mission", label: "Mission", placeholder: "Protect the boy" },
      { type: InputTypes.Checks, id: "failed", label: "Failed", max: 1 },
    ],
    
    perks: {
      actions: [{
        name: "The Call",
        description: `While in good standing with your **Sect**, roll for help at the start of each **Mystery**.`,
        coreStat: StatEnum.Charm,
        miss: `They ask you to do something bad.`,
        mixedSuccess: `You get a mission associated with the coming **Mystery**. If you do it, they'll give you some info or help.`,
        solidSuccess: `They provide some useful info or help in the field.`,
        resultFooter: `If you fail a mission or refuse an order, you'll be in trouble with the **Sect** until you atone.`,
        startOfMystery: true,
      }]
    }
  },
  {
    id: "ce09e84b-504e-447e-a3d5-bbfe71c0e84c",
    playbook: "a78c7ee1-eb8d-4622-adeb-22d9d87169b5", // The Initiate
    startingFeat: false,
    multiclassable: true,

    name: "Ancient Fighting Arts",
    description: `When using an old-fashioned \`#hand\` weapon, you inflict +1 **Harm** and gain a +1 whenever you roll to \`protect someone\`.`,

    perks: {
      attackModifiers: [{
        name: `Ancient Fighting Arts`,
        description: `When using an old-fashioned \`#hand\` weapon, you inflict +1 **Harm**.`,
        offset: 1,
        apply: false,
      }],
      protectSomeone: [{
        description: `When using an old-fashioned \`#hand\` weapon, you gain a +1 whenever you roll to \`protect someone\`.`,
        offset: 1,
      }]
    }
  },
  {
    id: "6d558030-3af3-47d7-aca6-1011403dbbc4",
    playbook: "a78c7ee1-eb8d-4622-adeb-22d9d87169b5", // The Initiate
    startingFeat: false,
    multiclassable: true,

    name: "Mystic",
    description: `Every time you successfully \`use magic\`, take +1 \`forward\``,

    perks: { allMoves: [{ description: `Every time you successfully \`use magic\`, take +1 \`forward\`` }] }
  },
  {
    id: "1e12c3e8-cdcb-47c6-b23d-31e9051e9969",
    playbook: "a78c7ee1-eb8d-4622-adeb-22d9d87169b5", // The Initiate
    startingFeat: false,
    multiclassable: true,

    name: "Fortunes",
    description: `Weird Move: Use Sect secrets to predict the future once per mystery.`,

    perks: {
      actions: [{
        name: "Fortunes",
        description: `Use Sect secrets to predict the future once per mystery.`,
        coreStat: StatEnum.Weird,
        miss: `You get bad information and \`The Keeper\` decides how that affects you.`,
        mixedSuccess: `**Hold** 1`,
        solidSuccess: `**Hold** 3`,
        successFooter: `Spend your **Hold** to:
* Have a useful object ready.
* Be somewhere you are needed, just in time.
* Take +1 \`forward\`, or give +1 \`forward\` to another \`Hunter\`.
* Retroactively warn someone about an attack, so it doesn't happen.`,
      }]
    }
  },
  {
    id: "13b1c4d5-b513-421f-bf16-61a9093fe62b",
    playbook: "a78c7ee1-eb8d-4622-adeb-22d9d87169b5", // The Initiate
    startingFeat: false,
    multiclassable: true,

    name: "Sacred Oath",
    description: `Bind yourself to a single goal. This oath empowers you and can gain you \`Experience\``,
    longDescription: `You may bind yourself to a single goal, forsaking something during your quest
(e.g. speech, all sustenance but bread and water, alcohol, lying, sex, etc).
Get \`The Keeper\`'s agreement on this--it should match the goal in importance and difficulty.
While you keep your oath and work towards your goal,
mark **Experience** at the end of every session and get +1 on any rolls that directly help achieve the goal.
If you break the oath, take -1 \`ongoing\` until you have atoned.`,

    inputs: [
      { type: InputTypes.Text, id: "oathGoal", label: "Oath Goal", placeholder: "Kill Dracula" },
      { type: InputTypes.Text, id: "oathSacrifice", label: "Oath Sacrifice", placeholder: "Eat not but bread and water." },
      { type: InputTypes.Checks, id: "oathBroken", label: "Oath Broken", max: 1 }
    ],

    perks: {
      allMoves: [
        {
          description: `While your Oath is intact, get +1 to any roll that directly helps you achieve your goal.`,
          offset: 1,
          // Oath details show in next item
        },{
          description: `If your Oath is broken, take -1 \`ongoing\` until you atone.`,
          offset: -1,
          showInputs: [ "oathGoal", "oathSacrifice", "oathBroken" ]
        }
      ],
      endOfSession: [{
        description: `While your Oath is intact and you are working toward your goal, take +1 \`Experience\` at the end of each session.`,
        showInputs: [ "oathGoal", "oathSacrifice", "oathBroken" ]
      }],
    }
  },
  {
    id: "dea250ab-6c99-4b41-b732-16e2671d010a",
    playbook: "a78c7ee1-eb8d-4622-adeb-22d9d87169b5", // The Initiate
    startingFeat: false,
    multiclassable: true,

    name: "Mentor",
    description: `Sharp Move: Contact your mentor in the Sect for information.`,

    inputs: [
      { type: InputTypes.Text, id: "mentor", label: "Mentor's Name", placeholder: "Atticus Greymore III" },
      { type: InputTypes.TextArea, id: "mentorDescription", label: "Mentor Description", placeholder: "Summary, Note, etc." }
    ],

    perks: {
      actions: [{
        name: "Mentor",
        description: `Contact your mentor in the Sect for information.`,
        coreStat: StatEnum.Sharp,
        miss: `Your question causes trouble.`,
        mixedSuccess: `Choose: They're either busy and can't help --OR-- They answer the question but you owe them a favour.`,
        solidSuccess: `You get an answer to your question, no problem.`,
      }]
    }
  },
  {
    id: "bf7257f4-7422-4a9d-8361-1169e3ecf467",
    playbook: "a78c7ee1-eb8d-4622-adeb-22d9d87169b5", // The Initiate
    startingFeat: false,
    multiclassable: true,

    name: "Apprentice",
    description: `You have an apprentice. Your job is to teach them the Sect's ways. They count as a \`ally/subordinate\`.`,
    
    inputs: [{ type: InputTypes.Ally, id: "apprentice", label: "Apprentice", startingAllyType: AllyType.Subordinate }],

    perks: {
      social: [{
        description: `You have an apprentice. Your job is to teach them the Sect's ways.`,
        showInputs: [ "apprentice" ]
      }]
    }
  },
  {
    id: "b41a4186-7467-46a0-8d5e-17e7ec4ceda1",
    playbook: "a78c7ee1-eb8d-4622-adeb-22d9d87169b5", // The Initiate
    startingFeat: false,
    multiclassable: true,

    name: "Helping Hand",
    description: `When you successfully \`help out\` another \`Hunter\`, they get +2 instead of the usual +1.`,

    perks: {
      helpOut: [{
        description: `When you successfully \`help out\` another \`Hunter\`, they get +2 instead of the usual +1.`,
        offset: 1,
      }],
    }
  },
  {
    id: "01d31b85-9d83-4c02-ac6a-c3b75ad0f9d8",
    playbook: "a78c7ee1-eb8d-4622-adeb-22d9d87169b5", // The Initiate
    startingFeat: false,
    multiclassable: true,

    name: "That Old Black Magic",
    description: `When you \`use magic\`, you can ask a question from the **Investigate a Mystery** move as your effect.`,

    perks: {
      useMagic: [{
        description: `When you \`use magic\`, you can ask a question from the **Investigate a Mystery** move as your effect.`,
        successHeader2: `Using **'That Old Black Magic'**, you can also ask one of these questions as an effect:
\`@investigationQuestions\``,
      }]
    }
  },
  {
    id: "66bf0e35-8b78-4543-a75b-048ad8b12ff2",
    playbook: "a5f796af-dd20-4ee0-8920-18b80e20ec24", // The Monstrous
    startingFeat: true,
    multiclassable: false,

    name: "Monster Breed",
    description: "Choose your breed of monster and all that that entails.",
    longDescription: `You will need to decide the following:
* Pick one Classification:
  * Half-Human: You were always this way
  * Half-Monster: You you were originally human and transformed somehow.
* Pick one Alignment:
  * Good Natured: You were always fighting to be Good.
  * Turncoat: You were evil and changed sides.
* Pick a curse and your natural attacks.

Create the monster you want to be. Whatever you choose defines your breed in the game.
Some classic monsters with suggestions for picks are listed below.
These are only suggestions: feel free to make a different version!

> * Vampire:
>   * Curse: Feed (blood or life-force).
>   * Natural Attacks: Life-drain or teeth with add +1 harm.
>   * Moves: Immortal, Unquenchable Vitality, or Mental Domination.
> * Werewolf:
>   * Curse: Vulnerability (silver).
>   * Natural Attacks: claws and teeth.
>   * Moves: Shapeshifter (wolf and/or wolfman), Claws of the Beast, or Unholy Strength.
> * Ghost:
>   * Curse: Vulnerability (rock salt).
>   * Natural Attacks: magical force with add range for \`#hand\`.
>   * Moves: Incorporeal and Immortal.
> * Faerie:
>   * Curse: Pure Drive (Joy).
>   * Natural Attacks: Magical force with ignore-armor.
>   * Moves: Flight and Preternatural Speed.
> * Demon:
>   * Curse: Pure Drive (Cruelty).
>   * Natural Attacks: Claws with +1 harm.
>   * Moves: Dark negotiator and Unquenchable Vitality.
> * Orc:
>   * Curse: Dark Master (the orc overlord).
>   * Natural Attacks: Teeth with ignore-armor.
>   * Moves: Unholy Strength and Dark Negotiator.
> * Zombie:
>   * Curse: Pure Drive (hunger) or feed (flesh or brains).
>   * Natural Attacks: teeth with +1 harm.
>   * Moves: Immortal and Unquenchable Vitality.
`,
    
    inputs: [
      {
        id: "", type: InputTypes.Label,
        label: "Archetype",
        subLabel: `Pick one Classification:
  * Half-Human: You were always this way
  * Half-Monster: You you were originally human and transformed somehow.
Then pick one Alignment:
  * Good Natured: You were always fighting to be Good.
  * Turncoat: You were evil and changed sides.`,
      },
      {
        id: "classification", type: InputTypes.MultipleChoice,
        label: "Classification",
        choose: 1,
        options: [ "Half-Human", "Half-Monster" ],
        allowCustom: true,
      },
      {
        id: "alignment", type: InputTypes.MultipleChoice,
        label: "Alignment",
        choose: 1,
        options: [ "Good Natured", "Turncoat" ],
        allowCustom: true,
      },
      {
        id: "", type: InputTypes.Label,
        label: "Curse",
        subLabel: `Try to align your curse with the type of monster you are. See the description for examples.`,
      },
      {
        type: InputTypes.Augment,
        id: "curse",
        label: "Curse",
        options: [
          {
            id: "79aeaee6-5e7a-457d-8180-84067d40d19e",
            name: "Feed Curse",
            description: `You must subsist on living humans—it might take the form of blood, brains, or spiritual essence
  but it must be from people. You need to \`act under pressure\` to resist feeding whenever a perfect opportunity
  presents itself.`,
            inputs: [{
              id: "weakness",
              type: InputTypes.Text,
              label: "Food",
              placeholder: "Brains, life-force, etc."
            }],
            perks: {
              social: [{
                description: `You must subsist on living human tissue or essence.
  You need to \`act under pressure\` to resist feeding whenever a perfect opportunity presents itself.`,
                showInputs: ["weakness"]
              }],
              actUnderPressure: [{
                description: `You must subsist on living human tissue or essence.
  You need to \`act under pressure\` to resist feeding whenever a perfect opportunity presents itself.`,
                showInputs: ["weakness"]
              }]
            }
          },
          {
            id: "44307474-8772-492d-b5a6-aacc7e38f7a0",
            name: "Vulnerability",
            description: `Pick a substance. You suffer +1 harm when you suffer harm from it.
  If you are bound or surrounded by it, you must \`act under pressure\` to use your powers.`,
            inputs: [{
              id: "weakness",
              type: InputTypes.Text,
              label: "Weakness",
              placeholder: "Silver, Rock Salt, Tree Sap, etc."
            }],
            perks: {
              health: [{
                description: `You suffer +1 harm when you suffer harm from your weakness.`,
                showInputs: ["weakness"]
              }],
              allMoves: [{
                description: `If you are bound by or surrounded by your weakness, you must \`act under pressure\` to use your monstrous powers.`,
                showInputs: ["weakness"]
              }],
            }
          },
          {
            id: "a4b962ca-e8bc-4439-889d-37845a8970ec",
            name: "Pure Drive",
            description: `One emotion rules you. Whenever you have a chance to indulge that emotion, you must do so immediately, or \`act under pressure\` to resist it.`,
            inputs: [{
              id: "weakness", type: InputTypes.MultipleChoice,
              label: "Emotion",
              options: ["hunger", "hate", "anger", "fear", "jealousy", "greed", "joy", "pride", "envy", "lust", "cruelty"],
              allowCustom: true
            }],
            perks: {
              social: [{
                description: `Whenever you have a chance to indulge the emotion that rules you, you must do so immediately, or \`act under pressure\` to resist it.`,
                showInputs: ["weakness"]
              }],
              actUnderPressure: [{
                description: `Whenever you have a chance to indulge the emotion that rules you, you must do so immediately, or \`act under pressure\` to resist it.`,
                showInputs: ["weakness"]
              }]
            }
          },
          {
            id: "b9a00011-326d-4dc8-be1a-03bd551b4451",
            name: "Dark Master",
            description: "You have an evil lord who doesn't know you changed sides. They still give you orders. They do not tolerate refusal or failure.",
            inputs: [{id: "master", type: InputTypes.Text, label: "Dark Master", placeholder: "Dracula"}],
            perks: {
              social: [{
                description: `You have an evil lord who doesn't know you changed sides. They still give you orders. They do not tolerate refusal or failure.`,
                showInputs: ["master"]
              }],
            }
          },
        ],
      },
      {
        id: "", type: InputTypes.Label,
        label: "Natural Attacks",
        subLabel: `Try to align your Natural Attacks with the type of monster you are. See the description for examples.`,
      },
      {
        type: InputTypes.Augment,
        id: "naturalAttackType",
        label: "Natural Attacks",
        choose: 1,
        options: [
          {
            id: "6a42a3fe-8860-4dbc-a1c2-05ef3d212f79",
            name: "Choose two Bases",
            description: `Choose two Bases for your Natural Attacks`,
            inputs: [{
              type: InputTypes.Augment,
              id: "naturalAttackBases",
              label: "Natural Attack Bases",
              choose: 2,
              options: [
                {
                  id: "c4abb750-2e86-458b-9cd1-eb7069d4736a",
                  name: "Teeth",
                  description: `Teeth attack with \`#3-harm\` \`#intimate\``,
                  perks: {
                    attacks: [{
                      name: "Teeth", description: "Monstrous Natural Attack with your Teeth",
                      harm: 3, ranges: [ RangeEnum.Intimate ],
                    }]
                  }
                },
                {
                  id: "780dbbb3-9dd1-40b2-9e18-cc8b053a77b9",
                  name: "Claws",
                  description: `Claws attack with \`#2-harm\` \`#hand\``,
                  perks: {
                    attacks: [{
                      name: "Claws", description: "Monstrous Natural Attack with your Claws",
                      harm: 2, ranges: [ RangeEnum.Hand ],
                    }]
                  }
                },
                {
                  id: "e777c55b-b424-44d8-8f3c-7728186916ca",
                  name: "Magical Force",
                  description: `Magical Force attack with \`#1-harm\` \`#magical\` \`#close\``,
                  perks: {
                    attacks: [{
                      name: "Magical Force", description: "Monstrous Natural Attack with a Magical Force",
                      harm: 1, ranges: [ RangeEnum.Close ], tags: [ "magical" ]
                    }]
                  }
                },
                {
                  id: "7a14d1ba-917b-4dbb-b346-ccfb9d2d9f56",
                  name: "Life Drain",
                  description: `Life Drain attack with \`#1-harm\` \`#intimate\` \`#life-drain\``,
                  perks: {
                    attacks: [{
                      name: "Life Drain", description: "Monstrous Natural Attack with a Life Drain",
                      harm: 1, ranges: [ RangeEnum.Intimate ], tags: [ "life-drain" ]
                    }]
                  }
                }
              ]
            }]
          },
          {
            id: "1650807d-d542-4714-9dd2-6b245364075d",
            name: "Choose a Base and add an Extra to it.",
            description: `Choose one Base for a Natural Attack and add one Extra to it.`,
            inputs: [{
              type: InputTypes.Augment,
              id: "naturalAttack",
              label: "Natural Attack",
              choose: 1,
              options: [
                {
                  id: "c4abb750-2e86-458b-9cd1-eb7069d4736a",
                  name: "Teeth +1 Harm",
                  description: `Teeth attack with \`#4-harm\` \`#intimate\``,
                  perks: {
                    attacks: [{
                      name: "Teeth", description: "Monstrous Natural Attack with your Teeth",
                      harm: 4, ranges: [ RangeEnum.Intimate ],
                    }]
                  }
                },
                {
                  id: "c4abb750-2e86-458b-9cd1-eb7069d4736a",
                  name: "Teeth +ignore-armor",
                  description: `Teeth attack with \`#3-harm\` \`#intimate\` \`ignore-armor\``,
                  perks: {
                    attacks: [{
                      name: "Teeth", description: "Monstrous Natural Attack with your Teeth",
                      harm: 3, ranges: [ RangeEnum.Intimate ], tags: [ "ignore-armor" ],
                    }]
                  }
                },
                {
                  id: "c4abb750-2e86-458b-9cd1-eb7069d4736a",
                  name: "Teeth +hand range",
                  description: `Teeth attack with \`#3-harm\` \`#intimate\` \`#hand\``,
                  perks: {
                    attacks: [{
                      name: "Teeth", description: "Monstrous Natural Attack with your Teeth",
                      harm: 3, ranges: [ RangeEnum.Intimate, RangeEnum.Hand ],
                    }]
                  }
                },
                {
                  id: "c4abb750-2e86-458b-9cd1-eb7069d4736a",
                  name: "Teeth +close range",
                  description: `Teeth attack with \`#3-harm\` \`#intimate\` \`close\``,
                  perks: {
                    attacks: [{
                      name: "Teeth", description: "Monstrous Natural Attack with your Teeth",
                      harm: 3, ranges: [ RangeEnum.Intimate, RangeEnum.Close ],
                    }]
                  }
                },
                {
                  id: "780dbbb3-9dd1-40b2-9e18-cc8b053a77b9",
                  name: "Claws +1 Harm",
                  description: `Claws attack with \`#3-harm\` \`#hand\``,
                  perks: {
                    attacks: [{
                      name: "Claws", description: "Monstrous Natural Attack with your Claws",
                      harm: 3, ranges: [ RangeEnum.Hand ],
                    }]
                  }
                },
                {
                  id: "780dbbb3-9dd1-40b2-9e18-cc8b053a77b9",
                  name: "Claws +ignore-armor",
                  description: `Claws attack with \`#2-harm\` \`#ignore-armor\` \`#hand\``,
                  perks: {
                    attacks: [{
                      name: "Claws", description: "Monstrous Natural Attack with your Claws",
                      harm: 2, ranges: [ RangeEnum.Hand ], tags: [ "ignore-armor" ],
                    }]
                  }
                },
                {
                  id: "780dbbb3-9dd1-40b2-9e18-cc8b053a77b9",
                  name: "Claws +intimate range",
                  description: `Claws attack with \`#2-harm\` \`#intimate\` \`#hand\``,
                  perks: {
                    attacks: [{
                      name: "Claws", description: "Monstrous Natural Attack with your Claws",
                      harm: 2, ranges: [ RangeEnum.Intimate, RangeEnum.Hand ],
                    }]
                  }
                },
                {
                  id: "780dbbb3-9dd1-40b2-9e18-cc8b053a77b9",
                  name: "Claws +close range",
                  description: `Claws attack with \`#2-harm\` \`#hand\` \`#close\``,
                  perks: {
                    attacks: [{
                      name: "Claws", description: "Monstrous Natural Attack with your Claws",
                      harm: 2, ranges: [ RangeEnum.Hand, RangeEnum.Close ],
                    }]
                  }
                },
                {
                  id: "e777c55b-b424-44d8-8f3c-7728186916ca",
                  name: "Magical Force +1 Harm",
                  description: `Magical Force attack with \`#2-harm\` \`#magical\` \`#close\``,
                  perks: {
                    attacks: [{
                      name: "Magical Force", description: "Monstrous Natural Attack with a Magical Force",
                      harm: 2, ranges: [ RangeEnum.Close ], tags: [ "magical" ],
                    }]
                  }
                },
                {
                  id: "e777c55b-b424-44d8-8f3c-7728186916ca",
                  name: "Magical Force +ignore-armor",
                  description: `Magical Force attack with \`#1-harm\` \`#magical\` \`#ignore-armor\` \`#close\``,
                  perks: {
                    attacks: [{
                      name: "Magical Force", description: "Monstrous Natural Attack with a Magical Force",
                      harm: 1, ranges: [ RangeEnum.Close ], tags: [ "magical", "ignore-armor" ],
                    }]
                  }
                },
                {
                  id: "e777c55b-b424-44d8-8f3c-7728186916ca",
                  name: "Magical Force +intimate range",
                  description: `Magical Force attack with \`#1-harm\` \`#magical\` \`#intimate\` \`#close\``,
                  perks: {
                    attacks: [{
                      name: "Magical Force", description: "Monstrous Natural Attack with a Magical Force",
                      harm: 1, ranges: [RangeEnum.Intimate, RangeEnum.Close], tags: [ "magical", "intimate", "close" ],
                    }]
                  }
                },
                {
                  id: "e777c55b-b424-44d8-8f3c-7728186916ca",
                  name: "Magical Force +hand range",
                  description: `Magical Force attack with \`#1-harm\` \`#magical\` \`#hand\` \`#close\``,
                  perks: {
                    attacks: [{
                      name: "Magical Force", description: "Monstrous Natural Attack with a Magical Force",
                      harm: 1, ranges: [ RangeEnum.Hand, RangeEnum.Close ], tags: [ "magical" ],
                    }]
                  }
                },
                {
                  id: "7a14d1ba-917b-4dbb-b346-ccfb9d2d9f56",
                  name: "Life Drain +1 Harm",
                  description: `Life Drain attack with \`#2-harm\` \`#intimate\` \`#life-drain\``,
                  perks: {
                    attacks: [{
                      name: "Life Drain", description: "Monstrous Natural Attack with a Life Drain",
                      harm: 2, ranges: [ RangeEnum.Intimate ], tags: [ "life-drain" ],
                    }]
                  }
                },
                {
                  id: "7a14d1ba-917b-4dbb-b346-ccfb9d2d9f56",
                  name: "Life Drain +ignore-armor",
                  description: `Life Drain attack with \`#1-harm\` \`#ignore-armor\` \`#intimate\` \`#life-drain\``,
                  perks: {
                    attacks: [{
                      name: "Life Drain", description: "Monstrous Natural Attack with a Life Drain",
                      harm: 1, ranges: [RangeEnum.Intimate], tags: ["ignore-armor", "life-drain"],
                    }]
                  }
                },
                {
                  id: "7a14d1ba-917b-4dbb-b346-ccfb9d2d9f56",
                  name: "Life Drain +hand range",
                  description: `Life Drain attack with \`#1-harm\` \`#intimate\` \`hand\` \`#life-drain\``,
                  perks: {
                    attacks: [{
                      name: "Life Drain", description: "Monstrous Natural Attack with a Life Drain",
                      harm: 1, ranges: [ RangeEnum.Intimate, RangeEnum.Hand ], tags: [ "life-drain" ],
                    }]
                  }
                },
                {
                  id: "7a14d1ba-917b-4dbb-b346-ccfb9d2d9f56",
                  name: "Life Drain +close range",
                  description: `Life Drain attack with \`#1-harm\` \`#intimate\` \`close\` \`#life-drain\``,
                  perks: {
                    attacks: [{
                      name: "Life Drain", description: "Monstrous Natural Attack with a Life Drain",
                      harm: 1, ranges: [ RangeEnum.Intimate, RangeEnum.Close ], tags: [ "life-drain" ],
                    }]
                  }
                }
              ]
            }]
          },
        ]
      }
    ],
  },
  {
    id: "56ad962b-c655-43f7-b241-c0546efb0566",
    playbook: "a5f796af-dd20-4ee0-8920-18b80e20ec24", // The Monstrous
    startingFeat: false,
    multiclassable: true,

    name: "Immortal",
    description: `You do not age or sicken, and whenever you suffer **Harm**, you suffer 1 less **Harm**.`,

    perks: {
      protections: [{
        description: `You do not age or sicken.`
      }],
      armorModifiers: [{
        name: `Immortal`,
        description: `Whenever you suffer **Harm**, you suffer 1 less **Harm**.`,
        offset: 1,
      }],
    }
  },
  {
    id: "bd27946f-1430-4cca-9715-1cd349374aea",
    playbook: "a5f796af-dd20-4ee0-8920-18b80e20ec24", // The Monstrous
    startingFeat: false,
    multiclassable: true,

    name: "Unnatural Appeal",
    description: `Roll **+Weird** instead of **+Charm** when you \`manipulate someone\`.`,

    perks: {
      // TODO: We don't need a description for this. Maybe its time to split those types.
      manipulateSomeone: [{ description: `Roll **+Weird** instead of **+Charm** when you \`manipulate someone\`.`, alternateStat: StatEnum.Weird }]
    }
  },
  {
    id: "9a3bddb6-d4a7-43b5-b213-745666aaf772",
    playbook: "a5f796af-dd20-4ee0-8920-18b80e20ec24", // The Monstrous
    startingFeat: false,
    multiclassable: true,

    name: "Unholy Strength",
    description: `When you \`kick some ass\`, roll **+Weird** instead of **+Tough**.`,
    
    perks: {
      kickSomeAss: [{ description: `When you \`kick some ass\`, roll **+Weird** instead of **+Tough**.`, alternateStat: StatEnum.Weird }]
    }
  },
  {
    id: "801dd250-a87b-458a-a0db-ed767bca546b",
    playbook: "a5f796af-dd20-4ee0-8920-18b80e20ec24", // The Monstrous
    startingFeat: false,
    multiclassable: true,

    name: "Incorporeal",
    description: `You may move freely through solid objects (but not people.)`,

    perks: {
      autoActions: [{
        name: "Incorporeal",
        description: `You may move freely through solid objects (but not people.)`,
      }]
    }
  },
  {
    id: "dbd58c57-657e-4895-8242-4880e32ee321",
    playbook: "a5f796af-dd20-4ee0-8920-18b80e20ec24", // The Monstrous
    startingFeat: false,
    multiclassable: true,

    name: "Preternatural Speed",
    description: `You go much faster than normal people. When you chase, flee, or run, take +1 \`ongoing\``,
    
    perks: {
      allMoves: [{
        description: `When you chase, flee, or run, take +1 \`ongoing\`. You go much faster than normal people.`,
        offset: 1,
      }]
    }
  },
  {
    id: "2a1580ad-5567-4c5c-8617-1922243bdfc9",
    playbook: "a5f796af-dd20-4ee0-8920-18b80e20ec24", // The Monstrous
    startingFeat: false,
    multiclassable: true,

    name: "Claws of the Beast",
    description: `All your natural attacks get +1 **Harm**`,
    
    perks: {
      attackModifiers: [{
        name: `Claws of the Beast`,
        description: `All your natural attacks get +1 **Harm**`,
        offset: 1,
        apply: false
      }]
    }
  },
  {
    id: "f1076b20-3125-486f-a2d8-d091f552b267",
    playbook: "a5f796af-dd20-4ee0-8920-18b80e20ec24", // The Monstrous
    startingFeat: false,
    multiclassable: true,

    name: "Mental Domination",
    description: `Charm Move: When you gaze into a normal human's eyes and exert your will over them.`,

    perks: {
      actions: [{
        name: "Mental Domination",
        description: `When you gaze into a normal human's eyes and exert your will over them, giving them orders to obey.`,
        coreStat: StatEnum.Charm,
        miss: `\`The Keeper\` can make a hard move against you. You likely failed to gain any control over them.`,
        mixedSuccess: `**Hold** 1`,
        solidSuccess: `**Hold** 3`,
        successFooter: `You may spend your **Hold** to give the target an order. Regular people will follow your order, whatever it is.
\`Hunters\` can choose whether they do it or not. If they do, they mark **Experience**.`
      }]
    }
  },
  {
    id: "1ff4e38a-867f-4564-baa9-6e676c6d75ed",
    playbook: "a5f796af-dd20-4ee0-8920-18b80e20ec24", // The Monstrous
    startingFeat: false,
    multiclassable: true,

    name: "Unquenchable vitality",
    description: `Cool Move: When you have taken **Harm**, you can heal yourself.`,

    perks: {
      actions: [{
        name: "Unquenchable vitality",
        description: `Cool Move: When you have taken **Harm**, you can heal yourself.`,
        coreStat: StatEnum.Cool,
        miss: `Your injuries worsen.`,
        mixedSuccess: `Heal 1 **Harm** and stabilise your injuries.`,
        solidSuccess: `Heal 2 **Harm** and stabilise your injuries.`,
      }]
    }
  },
  {
    id: "6a9dc239-37d1-468f-82b4-97c62a9f9404",
    playbook: "a5f796af-dd20-4ee0-8920-18b80e20ec24", // The Monstrous
    startingFeat: false,
    multiclassable: true,

    name: "Dark Negotiator",
    description: `You can use the \`manipulate someone\` move on monsters as well as people, if they can reason and talk`,

    perks: {
      manipulateSomeone: [{
        description: `You can manipulate monsters as well as people, if they can reason and talk`,
      }],
    }
  },
  {
    id: "26130600-3c03-4b42-8b7b-e99c071fa454",
    playbook: "a5f796af-dd20-4ee0-8920-18b80e20ec24", // The Monstrous
    startingFeat: false,
    multiclassable: true,

    name: "Flight",
    description: `You can fly`,

    perks: {
      autoActions: [{
        name: "Flight",
        description: `You can fly`,
      }]
    }
  },
  {
    id: "3fa06789-e37f-4d34-9816-e4d373bfbe51",
    playbook: "a5f796af-dd20-4ee0-8920-18b80e20ec24", // The Monstrous
    startingFeat: false,
    multiclassable: true,

    name: "Shapeshifter",
    description: `You may change your form (usually into an animal) for a bonus to \`investigate a mystery\`.`,
    longDescription: `You may change your form (usually into an animal.) Decide if you have on alternate form or several, and detail them.
You gain +1 to \`investigate a mystery\` when using an alternate form's superior senses (e.g. smell of a wolf, sight of an eagle, etc.)`,
    
    inputs: [
      { type: InputTypes.Text, id: "shapes", label: "Shape(s)", placeholder: "wolf, eagle, etc." },
    ],

    perks: {
      autoActions: [{
        name: "Shapeshift",
        description: `Change into one of your alternate forms.`,
        showInputs: [ "shapes" ],
      }],
      investigateAMystery: [{
        description: `While in one of your alternate form's superior senses, you gain +1 to \`investigate a mystery\`.`,
        offset: 1,
        showInputs: [ "shapes" ],
      }]
    },
  },
  {
    id: "6e9cd55e-50ff-4bb8-b03c-8e1fa9f72632",
    playbook: "a5f796af-dd20-4ee0-8920-18b80e20ec24", // The Monstrous
    startingFeat: false,
    multiclassable: true,

    name: "Something Borrowed",
    description: `Take a move from another \`Hunter\` \`Playbook\` that is not currently in play.`,

    borrowMove: 1,
  },
  {
    id: "2b55c1b5-c8a2-4941-ba72-b320ebf69ff8",
    playbook: "b03c7fb1-9ce4-4cba-a527-6c1380ac5de0", // The Mundane
    startingFeat: false,
    multiclassable: true,

    name: "Always the Victim",
    description: `When a \`Hunter\` protects you, they mark **Experience**. When you get captured, you mark \`Experience\`.`,
    longDescription: `When another \`Hunter\` uses \`protect someone\` to protect you, they mark \`Experience\`.
Whenever a monster captures you, you mark **Experience**.`,

    perks: {
      experience: [{ description: `When a monster captures you, you mark \`Experience\`.` }],
      protections: [{ description: `When another \`Hunter\` uses \`protect someone\` to protect you, they mark \`Experience\`.` }],
    }
  },
  {
    id: "bc97a6b5-e697-416e-8d29-c635dab08fe0",
    playbook: "b03c7fb1-9ce4-4cba-a527-6c1380ac5de0", // The Mundane
    startingFeat: false,
    multiclassable: true,

    name: "Oops!",
    description: `Stumble across something important or useful.`,
    longDescription: `If you want to stumble across something important, tell \`The Keeper\`.
You will find something important and useful, although not necessarily related to your immediate problems.`,

    perks: {
      autoActions: [{
        name: "Oops!",
        description: `Stumble across something important or useful.`,
        longDescription: `If you want to stumble across something important, tell \`The Keeper\`.
You will find something important and useful, although not necessarily related to your immediate problems.`,
      }]
    }
  },
  {
    id: "b58eb47e-4bf7-40f8-b6c5-64274b47a99a",
    playbook: "b03c7fb1-9ce4-4cba-a527-6c1380ac5de0", // The Mundane
    startingFeat: false,
    multiclassable: true,

    name: "Let's Get Out Of Here!",
    description: `If you can \`protect someone\` by telling them what to do, or by leading them out, roll +Charm instead of +Tough.`,
    
    perks: {
      protectSomeone: [{
        description: `If you can \`protect someone\` by telling them what to do, or by leading them out, roll +Charm instead.`,
        alternateStat: StatEnum.Charm,
      }]
    }
  },
  {
    id: "541a73ef-cdea-4244-b9ba-d705d260cfed",
    playbook: "b03c7fb1-9ce4-4cba-a527-6c1380ac5de0", // The Mundane
    startingFeat: false,
    multiclassable: true,

    name: "Panic Button",
    description: `Sharp Move: When you need to escape, name the route you'll try.`,

    perks: {
      actions: [{
        name: "Panic Button",
        description: `Sharp Move: When you need to escape, name the route you'll try.`,
        coreStat: StatEnum.Sharp,
        miss: `You are caught halfway out`,
        mixedSuccess: `You can go or stay, but if you go, it's going to cost you
(you leave something behind or something comes with you.)`,
        solidSuccess: `You're out of danger, no problem.`,
      }]
    }
  },
  {
    id: "318f4157-277f-4056-8d54-50bfac3c7349",
    playbook: "b03c7fb1-9ce4-4cba-a527-6c1380ac5de0", // The Mundane
    startingFeat: false,
    multiclassable: true,

    name: "The Power of Heart",
    description: `When fighting a monster, if you \`help out\`, you can automatically succeed.`,
    longDescription: `When fighting a monster, if you \`help out\`, you can skip rolling **+Cool** to automatically help as though you rolled a 10.`,

    perks: {
      helpOut: [{
        description: `When fighting a monster, you can skip rolling to automatically help as if you rolled a 10.`,
        canAutoRoll: 10,
      }]
    },
  },
  {
    id: "01dee0d8-76fd-42bb-b9ac-058a40b5fb3a",
    playbook: "b03c7fb1-9ce4-4cba-a527-6c1380ac5de0", // The Mundane
    startingFeat: false,
    multiclassable: true,

    name: "Trust Me",
    description: `Charm Move: When you try to protect someone from danger by telling them the truth and what to do.`,

    perks: {
      actions: [{
        name: "Trust Me",
        description: `When you try to protect someone from danger by telling them the truth and what to do.`,
        coreStat: StatEnum.Charm,
        miss: `They think you're crazy or maybe dangerous too.`,
        mixedSuccess: `They will do what you say they should, but \`The Keeper\` chooses one from:
* They ask you a hard question first.
* They stall and dither a while.
* They have a "better" idea.`,
        solidSuccess: `They will do what you say they should, no questions asked.`,
      }],
    }
  },
  {
    id: "8e961dc1-d6b7-429e-8898-389c415b43f3",
    playbook: "b03c7fb1-9ce4-4cba-a527-6c1380ac5de0", // The Mundane
    startingFeat: false,
    multiclassable: true,

    name: "What Could Go Wrong?",
    description: `Whenever you charge into immediate danger without hedging your bets, **Hold 2**.`,
    
    inputs: [ { type: InputTypes.Checks, id: "hold", label: "WCGW? Holds", max: 2 } ],

    perks: {
      autoActions: [{
        name: "What Could Go Wrong?",
        description: `Whenever you **charge into immediate danger** without hedging your bets, **Hold** 2.`,
        longDescription: `Whenever you charge into immediate danger without hedging your bets, **Hold** 2.

You may spend your **Hold** to:
* Inflict +1 **Harm**.
* Reduce someone's **Harm** suffered by 1.
* Take +2 \`forward\` on an \`act under pressure\` roll.`,
        showInputs: [ 'hold' ]
      }],
      attackModifiers: [{
        name: `What Could Go Wrong?`,
        description: `Spend 1 **Hold** to inflict +1 **Harm**.`,
        offset: 1,
        apply: false,
        showInputs: [ "hold" ]
      }],
      actUnderPressure: [{
        description: `Spend 1 **Hold** to gain +2.`,
        offset: +2,
        showInputs: [ "hold" ]
      }],
    }
  },
  {
    id: "349e9759-969b-48cc-8445-4cd66b28895f",
    playbook: "b03c7fb1-9ce4-4cba-a527-6c1380ac5de0", // The Mundane
    startingFeat: false,
    multiclassable: true,

    name: "Don't Worry, I'll Check It Out",
    description: `Whenever you **go off by yourself**, to check out somewhere (or something) scary, mark **Experience**.`,

    perks: {
      experience: [{
        description: `Whenever you **go off by yourself**, to check out somewhere (or something) scary.`,
      }]
    },
  },
//   {
//     id: "bb4e925c-35f6-40a9-9734-033baa4e8c40",
//     playbook: "b33ce99a-73e9-4f15-8314-ac80bf0819d1", // The Pararomantic
//     startingFeat: false,
//     multiclassable: true,
//
//     name: "Supernatural Guide",
//     description: `You have a (most likely intimate) connection to a being who is your **Guide**.`,
//     longDescription: `You have a (most likely intimate) connection to some supernatural being who is your **Guide** into
// the world beyond. Choose if your relationship is secret or not.
//
// Determine what kind of creature your **Guide** is and how your relationship works. Say what kind of power they possess.
// \`The Keeper\` will decide how it works and define your **Guide** as a **Threat**.
//
// If your **Guide** is another \`Hunter\`, determine together how your relationship works.
//
// Whenever you would roll **+Weird** you can roll **+Charm** instead, by channeling the power of your bond.
// When you do so and miss, in addition to the usual consequences, you and your **Guide** suffer. \`The Keeper\` chooses two of the following:
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
//         description: `Channel your **Guide** through the power of your **Bond**.`,
//         alternateStat: StatEnum.Charm,
//         showInputs: [ "bondLocked" ],
//         miss2: `If you channeled your **Guide** to roll **Charm** instead of **Weird**, you and your **Guide** also suffer. \`The Keeper\` chooses two of the following:
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
    startingFeat: true,
    multiclassable: true,

    name: "Deal With The Agency",
    description: `Sharp Move: When you deal with the Agency, requesting help or gear, or making excuses for a failure.`,
    longDescription: `When you deal with the Agency, requesting help or gear, or making excuses for a failure, roll +Sharp.
You may bet help or forgiveness, or they may put you in the proverbial doghouse.`,

    perks: {
      actions: [{
        name: "Deal With The Agency",
        description: `When you deal with the Agency, requesting help or gear, or making excuses for a failure.`,
        coreStat: StatEnum.Sharp,
        miss: `You screwed up: You might be suspended or under investigation, or just in the doghouse. You certainly aren't getting any help until you sort it all out.`,
        mixedSuccess: `Things aren't so great. You might get chewed out by your superiors and there'll be fallout, but you get what you need for the job.`,
        solidSuccess: `You're good--your request for gear or personnel is okayed, or your slip-up goes unnoticed.`,
      }],
    }
  },
  {
    id: "a014068d-fb29-4d4d-a221-ef9804aceb32",
    playbook: "58924c0d-c015-4fcd-8fd9-ca75f12fd019", // The Professional
    startingFeat: false,
    multiclassable: true,

    name: "Bottle It Up",
    description: `You can take a bonus to \`act under pressure\` that will come back later.`,
    longDescription: `If you want, you can take up to a +3 bonus when you \`act under pressure\`.
For each +1 you use, \`The Keeper\` **Holds** 1. That **Hold** can be spent later--one to one--to give you
-1 on any move __except__ "\`act under pressure\`".`,

    inputs: [ { type: InputTypes.Checks, id: "keeperHolds", label: "Keeper's Holds", max: 3 } ],
    
    perks: {
      actUnderPressure: [
        { description: `You can take +1. \`The Keeper\` gets 1 **Hold**.`, offset: 1 },
        { description: `You can take +2. \`The Keeper\` gets 2 **Hold**.`, offset: 2 },
        { description: `You can take +3. \`The Keeper\` gets 3 **Hold**.`, offset: 3, showInputs: [ "keeperHolds" ] }
      ],
      allMoves: [{ description: `\`The Keeper\` may spend 1 **Hold** to impose a -1 to any move except "\`act under pressure\`"`, showInputs: [ "keeperHolds" ] }],
    }
  },
  {
    id: "027a8b33-7347-4f44-9d67-b5aa5d2d28c6",
    playbook: "58924c0d-c015-4fcd-8fd9-ca75f12fd019", // The Professional
    startingFeat: false,
    multiclassable: true,

    name: "Unfazeable",
    description: `Take +1 Cool (max +3)`,

    perks: { cool: { bonus: 1, max: 3 } },
  },
  {
    id: "b161d4ff-c1e7-4af0-852a-51f17e6f69e3",
    playbook: "58924c0d-c015-4fcd-8fd9-ca75f12fd019", // The Professional
    startingFeat: false,
    multiclassable: true,

    name: "Battlefield Awareness",
    description: `Your awareness gives you +1 Armor (max 2-armor) on top of whatever you get from your gear.`,
    longDescription: `You always know what's happening around you, and what to watch out for.
Take +1 Armor (max 2 armor) on top of whatever you get from your gear.`,
    
    perks: {
      armorModifiers: [{
        name: `Battlefield Awareness`,
        description: `Your awareness gives you +1 Armor on top of whatever you get from your gear (max 2-armor.)`,
        offset: 1,
        max: 2,
      }],
    },
  },
  {
    id: "3f5f986c-8fca-42b8-87ef-607c9d23a7d8",
    playbook: "58924c0d-c015-4fcd-8fd9-ca75f12fd019", // The Professional
    startingFeat: false,
    multiclassable: true,

    name: "Leave No One Behind",
    description: `Sharp Move: In combat, you can **help someone escape**.`,

    perks: {
      actions: [{
        name: "Leave No One Behind",
        description: `In combat, you can **help someone escape**.`,
        coreStat: StatEnum.Sharp,
        miss: `You fail to get them out and you've attracted hostile attention.`,
        mixedSuccess: `You can either get them out or suffer no harm, you choose.`,
        solidSuccess: `You get them out clean.`,
      }],
    }
  },
  {
    id: "b146eabd-6312-4b77-b30a-e07a7a1a94db",
    playbook: "58924c0d-c015-4fcd-8fd9-ca75f12fd019", // The Professional
    startingFeat: false,
    multiclassable: true,

    name: "Tactical Genius",
    description: `When you \`read a bad situation\`, you can roll **+Cool** instead of **+Sharp**.`,

    perks: {
      readABadSituation: [{
        description: `When you \`read a bad situation\`, you can roll **+Cool** instead of **+Sharp**.`,
        alternateStat: StatEnum.Cool,
      }]
    }
  },
  {
    id: "b559c100-ab23-46bf-9bd7-2f620fc2bf01",
    playbook: "58924c0d-c015-4fcd-8fd9-ca75f12fd019", // The Professional
    startingFeat: false,
    multiclassable: true,

    name: "Medic",
    description: `Cool Move: You have a full first aid kit, and the training to heal people.`,

    perks: {
      actions: [{
        name: "Medic",
        description: `You have a full first aid kit, and the training to heal people.`,
        coreStat: StatEnum.Cool,
        miss: `You cause an extra 1 \`harm\`.`,
        mixedSuccess: `Choose one: heal 2 \`harm\` --OR-- \`stabilize\` the patient.`,
        solidSuccess: `The patient is \`stabilized\` and healed of 2 \`harm\`.`,
      }],
    }
  },
  {
    id: "820c1ce2-8bd4-4b6c-a5c1-982841d5ea0a",
    playbook: "58924c0d-c015-4fcd-8fd9-ca75f12fd019", // The Professional
    startingFeat: false,
    multiclassable: true,

    name: "Mobility",
    description: `You have a vehicle built for monster hunting.`,
    longDescription: `You have a truck, van, or car built for monster hunting.
Choose two good things and one bad thing about it (two good tags and one bad tag.)`,
    
    vehicles: [{ description: `A truck, van, or car built for monster hunting.` }]
  },
  {
    id: "38c1e7f2-ecf9-4b57-8138-4acbbbaf0a16",
    playbook: "f7b73a9a-6447-42f8-b373-b71341bdad99", // The Searcher
    startingFeat: true,
    multiclassable: true,

    name: "First Encounter",
    description: `You experienced one strange event that started your journey and unlocked a new capability for you.`,
    showInputs: ["encounter"],
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
      type: InputTypes.Augment,
      id: "encounter",
      label: "Encounter",
      choose: 1,
      options: [
        {
          id: "f79e8746-f32d-46b5-8ff1-a99736816b14",
          name: "Cryptid Sighting",
          description: `You take note of any reports of strange creatures.
Whenever you first see a new type of creature, you may immediately ask one of the investigate a mystery questions.`,
          perks: {
            autoActions: [{
              name: "Cryptid Sighting",
              description: `Whenever you first see a new type of creature, ask an "\`investigate a mystery\`" questions.`,
              longDescription: `You take note of any reports of strange creatures.
Whenever you first see a new type of creature, you may immediately ask one of the investigate a mystery questions.

\`@investigationQuestions\``,
            }]
          }
        },
        {
          id: "31b74c1e-c52a-4795-a847-f59fcb4b8d55",
          name: "Zone of Strangeness",
          description: `Things are not fixed. You never need \`act under pressure\` when supernatural forces alter the environment around you, and you get 2 \`armor\` against \`harm\` from sudden changes to the laws of physics.`,
          perks: {
            armors: [{
              name: `Zone of Strangeness`,
              description: `You get 2 \`armor\` against \`harm\` from sudden changes to the laws of physics.`,
              armor: 2,
              conditional: true,
            }],
            actUnderPressure: [{
              description: `You never need \`act under pressure\` when supernatural forces alter the environment around you.`
            }]
          }
        },
        {
          id: "4a394360-d04a-4d8a-a1e2-9ecd43ef60dc",
          name: "Psychic Event",
          description: `You gain the \`Sensitive\` alternative basic weird move. If you already have it, you gain the \`Empath\` alternative basic weird move`,
          inputs: [{
            type: InputTypes.GainWeirdMove,
            id: "psychicMove",
            label: "Psychic Move",
            choose: 1,
            options: [ "Sensitive", "Empath" ],
          }]
        },
        {
          id: "1a94a926-c626-46c5-803e-cf9707c1aed9",
          name: "Higher Power",
          description: `Something looks out for you. You start with an extra **Luck**.`,
          perks: {luck: [{description: `Something looks out for you. You start with an extra **Luck**.`, bonus: 1}]}
        },
        {
          id: "fa699597-2e03-43d0-a310-40bb689a4148",
          name: "Strange Dangers",
          description: `You are always watching for hazards. When you have no \`armor\`, you still count as having 1 \`armor\`.`,
          perks: {
            armors: [{
              name: `Strange Dangers`,
              description: `You are always watching for hazards. When you have no \`armor\`, you still count as having 1 \`armor\`.`,
              armor: 1,
            }]
          },
        },
        {
          id: "730f23b1-70f9-4ca5-8e61-e7e9d9f10736",
          name: "Abduction",
          description: `They taught you hidden knowledge. Gain +1 to any move when you research strange or ancient secrets to do it.`,
          perks: {
            allMoves: [{
              description: `They taught you hidden knowledge. Gain +1 to any move when you research strange or ancient secrets to do it.`,
              offset: 1
            }]
          }
        },
        {
          id: "b21e1f0c-c15d-4503-b482-feeac57abfaa",
          name: "Cosmic Insight",
          description: `You have encompassed the soul of the universe. You never need to \`act under pressure\` due to feelings of fear, despair, or isolation.`,
          perks: {actUnderPressure: [{description: `You have encompassed the soul of the universe. You never need to act under pressure due to feelings of fear, despair, or isolation.`}]}
        }
      ],
    }]
  },
  {
    id: "9f347cc2-a96a-4a17-b12d-4ab6bfa427ba",
    playbook: "f7b73a9a-6447-42f8-b373-b71341bdad99", // The Searcher
    startingFeat: false,
    multiclassable: true,

    name: "Prepared to Defend",
    description: `Whenever you suffer harm when you \`kick some ass\` or \`protect someone\`, you suffer 1 less **Harm**.`,
    longDescription: `Even truth seekers need tto fight sometimes.`,

    perks: {
      kickSomeAss: [{
        description: `When you suffer **Harm** as a result of this move, take 1 less **Harm**.`
      }],
      protectSomeone: [{
        description: `When you suffer **Harm** as a result of this move, take 1 less **Harm**.`
      }],
      armorModifiers: [{
        name: `Prepared to Defend`,
        description: `When you suffer harm from \`kick some ass\` or \`protect someone\`, you suffer 1 less **Harm**.`,
        offset: 1,
        conditional: true,
      }]
    }
  },
  {
    id: "b7cf9c20-3037-4355-887d-a3b14a344e31",
    playbook: "f7b73a9a-6447-42f8-b373-b71341bdad99", // The Searcher
    startingFeat: false,
    multiclassable: true,

    name: "Fellow Believer",
    description: `Bystanders will talk to you about weird things they would not trust others to believe.`,
    longDescription: `People understand you've also known strangeness. Bystanders will talk to you about weird things they would not trust another \`Hunter\` (or a mundane official) to believe.`,

    perks: { social: [{ description: `Bystanders will talk to you about weird things they would not trust others to believe.` }] }
  },
  {
    id: "114109b5-9026-451c-9545-0e5f7f3c64ec",
    playbook: "f7b73a9a-6447-42f8-b373-b71341bdad99", // The Searcher
    startingFeat: false,
    multiclassable: true,

    name: "Guardian",
    description: `You have a mystical ally that helps defend you`,
    longDescription: `You have a mystical ally (perhaps a spirit, alien, or cryptid) who helps and defends you.
Define them, and their powers, with \`The Keeper\`'s agreement. Their look is one of: invisible, an intangible spirit thing,
a weird creature, disguised as an animal, or disguised as a person.`,

    inputs: [
      { type: InputTypes.Text, id: "guardianName", label: "Guardian Name", placeholder: "The Lonely One" },
      {
        type: InputTypes.MultipleChoice,
        id: "guardianLook",
        label: "Guardian Look",
        options: [
          "an invisible guardian", "an intangible spirit thing", "a weird creature",
          "a guardian disguised as an animal", "a guardian disguised as a person."
        ],
        allowCustom: true,
      },
      { type: InputTypes.TextArea, id: "guardianDescription", label: "Guardian Description", placeholder: "Summary, powers, etc." },
    ],

    perks: {
      social: [{ description: `You have a guardian who helps and defends you.`, showInputs: [ "guardianName", "guardianLook", "guardianDescription" ] }]
    }
  },
  {
    id: "be6cc8db-59e1-405e-a98d-fa394a67b51e",
    playbook: "f7b73a9a-6447-42f8-b373-b71341bdad99", // The Searcher
    startingFeat: false,
    multiclassable: true,

    name: "Just Another Day",
    description: `When you have to \`act under pressure\` due to a monster, phenomenon, or mystical effect, you may roll +Weird instead of +Cool.`,

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
    startingFeat: false,
    multiclassable: true,

    name: "Network",
    description: `You have an \`ally\` group of others who had experiences similar to your first encounter.`,
    longDescription: `You may gain an \`ally\` group of others who had experiences similar to your first encounter—perhaps
they're a support group or hobbyist club. Detail up to five members with useful skills related to what happened to
them (none are up for fighting monsters).`,
    
    inputs: [{ type: InputTypes.Ally, id: "network", label: "Network", crewMax: 5 }],

    perks: {
      social: [{
        description: `This group had similar experiences to your first encounter. They are not up for fighting monsters.`,
        showInputs: [ "supportGroup" ]
      }]
    }
  },
  {
    id: "c2217d7e-9d95-4541-9be2-b0d604ad7760",
    playbook: "f7b73a9a-6447-42f8-b373-b71341bdad99", // The Searcher
    startingFeat: false,
    multiclassable: true,

    name: "Ockham's Broadsword",
    description: `When you first encounter something strange, learn its classification and gain +1 \`forward\`.`,
    longDescription: `When you first encounter something strange, you may ask \`The Keeper\` what sort of thing it is.
They will tell you if it (or the cause) is: natural, an unnatural creature, a weird phenomenon, or a person.

You gain +1 \`forward\` dealing with it.`,
    
    perks: {
      autoActions: [{
        name: "Ockham's Broadsword",
        description: `When you first encounter something strange, learn its classification and gain +1 \`forward\`.`,
        longDescription: `When you first encounter something strange, you may ask \`The Keeper\` what sort of thing it is.
They will tell you if it (or the cause) is: natural, an unnatural creature, a weird phenomenon, or a person.`,
      }],
      allMoves: [{
        description: `After using **'Ockham's Broadsword'** gain +1 \`forward\` when dealing with the strange new thing.`,
        offset: 1,
      }]
    }
  },
  {
    id: "99acd02c-9b9e-4090-9779-a740bea840fa",
    playbook: "f7b73a9a-6447-42f8-b373-b71341bdad99", // The Searcher
    startingFeat: false,
    multiclassable: true,

    name: "The Things I've Seen",
    description: `You can have encountered a creature or phenomenon before, giving you some knowledge in advance.`,
    longDescription: `When you encounter a creature or phenomenon, you may declare that you have seen it before.
\`The Keeper\` may ask you some questions about that encounter, and will then tell you one useful fact you learned and one
danger you need to watch out for (maybe right now).`,

    perks: {
      autoActions: [{
        name: "The Things I've Seen",
        description: `You can have encountered a creature or phenomenon before, giving you some knowledge in advance.`,
        longDescription: `When you encounter a creature or phenomenon, you may declare that you have seen it before.
\`The Keeper\` may ask you some questions about that encounter, and will then tell you one useful fact you learned and one
danger you need to watch out for (maybe right now).`,
      }],
    }
  },
  {
    id: "709641ca-a4d0-4bd4-9160-29c19e77a5a3",
    playbook: "cfecc496-d1c1-4b30-af48-0f3f41cd02c0", // The Snoop
    startingFeat: false,
    multiclassable: true,

    name: "What Does That Feel Like?",
    description: `Using your camera or microphone, you can force someone to deal with just you for a moment.`,
    longDescription: `When you put your camera or microphone right in a person's face, they break off whatever they
are doing. They might go right back to it after they deal with you, but you'll create enough time for the other
\`Hunters\` to act in the meantime.`,

    perks: {
      autoActions: [{
        name: "What Does That Feel Like?",
        description: `Using your camera or microphone, you can force someone to deal with just you for a moment.`,
        longDescription: `When you put your camera or microphone right in a person's face, they break off whatever they
are doing. They might go right back to it after they deal with you, but you'll create enough time for the other
\`Hunters\` to act in the meantime.`,
      }]
    }
  },
  {
    id: "ef35c8fe-3663-4464-a36f-3484b90b42b7",
    playbook: "cfecc496-d1c1-4b30-af48-0f3f41cd02c0", // The Snoop
    startingFeat: false,
    multiclassable: true,

    name: "Minor Celebrity",
    description: `Weird Move: Have a chance during each **Mystery** to impose that people have seen and like some of your work.`,
    longDescription: `At the beginning of each mystery, roll +Weird. On a 10+ hold 2 and on a 7-9 hold 1.
Spend your hold during the mystery to have someone you meet know of you in a positive light
(maybe they read your blog, listen to your podcast, or watch your Internet/TV show, etc). You may end
up getting asked for autographs or given “hot” leads, etc.`,
    
    inputs: [{ type: InputTypes.Checks, id: "holds", label: "Holds", max: 2, resetPerMystery: true }],

    perks: {
      actions: [{
        name: "Minor Celebrity",
        description: `At the start of a mystery, roll to gain **Holds**. They can later be used to be recognized`,
        coreStat: StatEnum.Weird,
        miss: `No one recognizes you during this mystery.`,
        mixedSuccess: `Gain 1 **Hold**`,
        solidSuccess: `Gain 2 **Hold**`,
        successFooter: `Spend your hold during the mystery to have someone you meet know of you in a positive light
(maybe they read your blog, listen to your podcast, or watch your Internet/TV show, etc). You may end
up getting asked for autographs or given "hot" leads, etc.`,
        startOfMystery: true,
        showInputs: ["holds"],
      }],
      autoActions: [{
        name: "Minor Celebrity - Spend Hold",
        description: `Spend **Holds** to have someone you meet know of you in a positive light.`,
        longDescription: `Spend your hold during the mystery to have someone you meet know of you in a positive light
(maybe they read your blog, listen to your podcast, or watch your Internet/TV show, etc). You may end
up getting asked for autographs or given "hot" leads, etc.`,
        showInputs: ["holds"]
      }]
    }
  },
  {
    id: "a2e8d269-fbce-4eb3-af07-09680b6f6a4a",
    playbook: "cfecc496-d1c1-4b30-af48-0f3f41cd02c0", // The Snoop
    startingFeat: false,
    multiclassable: true,

    name: "We'll Fix It In Post",
    description: `You can \`investigate a mystery\` on past interviews, attack sites, and so on.`,
    longDescription: `You can use anything you could conceivably have recorded as evidence for \`investigate a mystery\`,
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
    startingFeat: false,
    multiclassable: true,

    name: "Press Accreditation",
    description: `When you \`investigate a mystery\` using interpersonal skills, roll +Charm instead of +Sharp.`,
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
    startingFeat: false,
    multiclassable: true,

    name: "Truthiness",
    description: `Whatever you tell a normal person, they'll accept that __you__ think it's true.`,
    longDescription: `Whatever you tell a normal person, they'll accept that you think it's true.
If it's far out, they might think you're deluded, but they won't think you're lying.`,

    perks: {
      autoActions: [{
        name: "Truthiness",
        description: `Whatever you tell a normal person, they'll accept that __you__ think it's true.`,
        longDescription: `Whatever you tell a normal person, they'll accept that you think it's true.
If it's far out, they might think you're deluded, but they won't think you're lying.`,
      }]
    }
  },
  {
    id: "1db684c3-5bac-4b66-8110-898ee755d6e6",
    playbook: "cfecc496-d1c1-4b30-af48-0f3f41cd02c0", // The Snoop
    startingFeat: false,
    multiclassable: true,

    name: "The Mojo Wire",
    description: `When you spend a while reading all the latest news feeds looking for the weird stuff, take +1 \`forward\`.`,
    
    perks: {
      allMoves: [{
        description: `When you spend a while reading all the latest news feeds looking for the weird stuff, take +1 \`forward\`.`,
        offset: 1,
      }]
    }
  },
  {
    id: "a53e108a-d580-43c3-aeca-fc4c05fa1833",
    playbook: "cfecc496-d1c1-4b30-af48-0f3f41cd02c0", // The Snoop
    startingFeat: false,
    multiclassable: true,

    name: "Relaxed Producer",
    description: `You're employed, with a pay check and little or no oversight. You may occasionally be tasked with a story.`,
    longDescription: `You're employed, with a regular pay check and little or no oversight. As long as you send in a
story every few days, no matter how bizarre, you're set.

Every now and again they'll send you somewhere in particular, and when that happens it usually involves supernatural activity.
Unless they need human interest, in which case it will be a kitten show or agricultural fair or something.`,
    
    perks: {
      inventory: [{ description: `You're employed with a regular paycheck.` }],
      social: [
        { description: `Your employer expects stories from you every few days.` },
        { description: `Your employer may occasionally send you to cover a story of interest.` }
      ],
    }
  },
//   { hmmmmm. Could be under Combat Magic entirely? 
//     id: "ad31fd43-9c0a-48b1-819f-23b66d89d11e",
//     playbook: "3f493473-f122-4255-8b19-3635908b2664", // The Spell Slinger
//     startingFeat: true,
//     multiclassable: false, //? Was just a move, but can you really multiclass without the base piece?
//
//     name: "Tools and Techniques",
//     description: `To use your combat magic effectively, you rely on a collection of tools and techniques.`,
//     longDescription: `To use your combat magic effectively, you rely on a collection of tools and techniques.
//
// Choose all but 1 requirement for your combat magic:
// * Consumables: You need certain supplies (powders, oils, etc) on hand, some will be used up each cast. If you don't have them, take 1-harm ignore-armor when you cast.
// * Foci: You need wands, staves, and other obvious props to focus. If you don't have what you need, your combat magic does 1 less harm.
// * Gestures: You need to wave your hands around to use combat magic. If you're restrained, take -1 \`ongoing\` for combat magic.
// * Incantations: You must speak in an arcane language to control your magic. If you use combat magic without speaking, act under pressure to avoid scrambling your thoughts.`,
//     choose: 3,
//     choices: [
//       {
//         id: "959c6b17-66ef-4080-bf2b-9398823997e3",
//         name: "Consumables",
//         perks: {
//           kickSomeAss
//         },
//       },
//     ],
//   },
//   { // Once you decide on what to do with Combat magic, come back to this one.
//     id: "c478b9d1-ea43-4bea-afad-c822ac2019d1",
//     playbook: "3f493473-f122-4255-8b19-3635908b2664", // The Spell Slinger
//     startingFeat: false,
//     multiclassable: false, //? Just a regular move, but you kinda need tools and techniques with kinda needs combat magic
//
//     name: "Advanced Arcane Training",
//     description: `If you have two of your three **Tools and Techniques** at the ready, you may ignore the third one.`,
//   },
  {
    id: "77ceff75-547b-433e-b1f9-fc1b6f1cec57",
    playbook: "3f493473-f122-4255-8b19-3635908b2664", // The Spell Slinger
    startingFeat: false,
    multiclassable: true,

    name: "Arcane Reputation",
    description: `Three big organizations or groups have heard of you and respect your power.`,
    longDescription: `Pick three big organizations or groups in the supernatural community, which can include some
of the more sociable types of monsters. They've heard of you and respect your power.

With affected humans, take +1 \`forward\` when you manipulate them.

You may manipulate affected monsters as if they were human, with no bonus.`,
    
    inputs: [
      { type: InputTypes.Text, id: "groups", label: "Familiar Groups", placeholder: "Illuminati, Vampires, Werewolves" }
    ],
    
    perks: {
      manipulateSomeone: [
        { description: `Take +1 \`forward\` against Humans in the selected groups/organizations. They've heard of you.`, offset: 1, showInputs: [ "groups" ] },
        { description: `You can manipulate Monsters in the selected groups/organizations. They've heard of you.`, showInputs: [ "groups" ] },
      ]
    }
  },
  {
    id: "4189519d-3a37-44cb-beb0-bcdc9cf47065",
    playbook: "3f493473-f122-4255-8b19-3635908b2664", // The Spell Slinger
    startingFeat: false,
    multiclassable: true,

    name: "Could've Been Worse",
    description: `When you miss a use magic roll, you can choose to fizzle or push through the spell instead of the default.`,
    longDescription: `When you miss a use magic roll you can choose one of the following options instead of losing control of the magic:
* Fizzle: The preparations and materials for the spell are ruined. You'll have to start over from scratch with the prep time doubled.
* This Is Gonna Suck: The effect happens, but you trigger all of the listed glitches but one. You pick the one you avoid.`,
    
    perks: {
      useMagic: [{
        description: `When you miss a use magic roll, you can choose to fizzle or push through the spell instead of the default.`,
        miss2: `Through **'Could've Been Worse'**, you can choose one of the following instead of the above:
* Fizzle: The preparations and materials for the spell are ruined. You'll have to start over from scratch with the prep time doubled.
* This Is Gonna Suck: The effect happens, but you trigger all of the listed glitches but one. You pick the one you avoid.`
      }]
    }
  },
  {
    id: "90c723b2-4123-497e-bf36-3e555f0efb4a",
    playbook: "3f493473-f122-4255-8b19-3635908b2664", // The Spell Slinger
    startingFeat: false,
    multiclassable: true,

    name: "Enchanted Clothing",
    description: `Enchant an article of clothing that can reduce harm by 1.`,
    longDescription: `Pick an article of every-day clothing. The item is enchanted without any change in appearance.
Take -1 harm from any source that tries to get at you through the garment.`,
    
    inputs: [{ type: InputTypes.Text, id: "item", label: "Enchanted Garment", placeholder: "Jacket, pants, etc." }],
    
    perks: {
      armorModifiers: [{
        name: `Enchanted Clothing`,
        description: `Take -1 harm from any source that tries to get at you through the enchanted garment.`,
        offset: 1,
        conditional: true,
        showInputs: [ "item" ],
      }]
    }
  },
  {
    id: "6ff0ed76-70df-430d-bbaa-f8a427530eee",
    playbook: "3f493473-f122-4255-8b19-3635908b2664", // The Spell Slinger
    startingFeat: false,
    multiclassable: true,

    name: "Forensic Divination",
    description: `When you successfully \`investigate a mystery\`, you may ask “What magic was done here?” as a free extra question.`,
    
    perks: {
      investigateAMystery: [{
        description: `On a success, you may ask “What magic was done here?” as a free extra question.`,
        successFooter2: `Forensic Divination: You may also ask “What magic was done here?” as a free extra question.`
      }]
    }
  },
  {
    id: "dd82affe-c980-4258-af00-77afbfe6fc6a",
    playbook: "3f493473-f122-4255-8b19-3635908b2664", // The Spell Slinger
    startingFeat: false,
    multiclassable: true,

    name: "Go Big or Go Home",
    description: `When you must \`use magic\` as a requirement for **'Big Magic'**, take +1 \`ongoing\` to those \`use magic\` rolls.`,
    
    perks: {
      useMagic: [{ description: `When performed as a requirement for **'Big Magic'**.`, offset: 1 }]
    }
  },
  {
    id: "72cf7947-7241-4800-9c13-2f31cc321219",
    playbook: "3f493473-f122-4255-8b19-3635908b2664", // The Spell Slinger
    startingFeat: false,
    multiclassable: true,

    name: "Not My Fault",
    description: `+1 to \`act under pressure\` when you are dealing with the consequences of your own spell-casting.`,
    
    perks: {
      actUnderPressure: [{ description: `When you are dealing with the consequences of your own spell-casting.`, offset: 1 }]
    }
  },
  {
    id: "90fad060-0401-4cb6-8b14-3f6a152054bb",
    playbook: "3f493473-f122-4255-8b19-3635908b2664", // The Spell Slinger
    startingFeat: false,
    multiclassable: true,
    
    inputs: [{
      type: InputTypes.MultipleChoice, id: "effects", label: "Effects",
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

    name: "Practitioner",
    description: `Choose two effects available to you under use magic. Take +1 to \`use magic\` whenever you choose one of those effects.`,
    
    perks: {
      useMagic: [{ description: `When you choose to cast one of the chosen effects.`, offset: 1, showInputs: [ 'effects' ] }]
    }
  },
  {
    id: "dcec4be5-53eb-4569-a18e-e6c89e034cee",
    playbook: "3f493473-f122-4255-8b19-3635908b2664", // The Spell Slinger
    startingFeat: false,
    multiclassable: true,

    name: "Shield Spell",
    description: `When you \`protect someone\`, gain 2-armor against any \`Harm\` that is transferred to you. This doesn't stack with your other armor, if any.`,

    perks: {
      armors: [{
        name: `Shield Spell`,
        description: `When you \`protect someone\`, gain 2-armor against any \`Harm\` that is transferred to you. This doesn't stack with your other armor, if any.`,
        armor: 2,
        conditional: true,
      }],
      protectSomeone: [{
        description: `Gain 2-armor against any \`Harm\` that is transferred to you. This doesn't stack with other armor.`,
        resultFooter2: `Gain 2-armor against any \`Harm\` that is transferred to you. This doesn't stack with other armor.`
      }]
    }
  },
  {
    id: "a2f6b29f-a2ec-486f-97b6-d4f7dcdd6a60",
    playbook: "3f493473-f122-4255-8b19-3635908b2664", // The Spell Slinger
    startingFeat: false,
    multiclassable: true,

    name: "Third Eye",
    description: `Optionally, you can **open your third eye** to take in extra, supernatural information.`,
    longDescription: `When you \`read a bad situation\`, you can open up your third eye for a moment to take in extra information.
Take +1 **hold** on any result of 7 or more, plus you can see invisible things.
On a miss, you may still get 1 hold, but you're exposed to supernatural danger.
Unfiltered hidden reality is rough on the mind!`,
    
    perks: {
      readABadSituation: [{
        description: `Optionally, you can **open your third eye** to take in extra, supernatural information.`,
        miss2: `If you opened your third eye, you are exposed to supernatural danger, but you can ask one question:
* What's my best way in?
* What's my best way out?
* Are there any dangers we haven't noticed?
* What's the biggest threat?
* What's most vulnerable to me?
* What's the best way to protect the victims?`,
        successFooter2: `If you opened your third eye, you can see invisible things and you can **ask one additional question**.`
      }]
    }
  },
  {
    id: "0c2ab958-24d2-4710-84e4-2f5d51f69cc9",
    playbook: "7db7e333-5084-4c61-970b-a3013c55ad7a", // The Spooktacular
    startingFeat: true,
    multiclassable: false,

    name: "The Show",
    description: `You spent a long time with a traveling show and get an ability based on its style.`,
    longDescription: `You spent a long time with a traveling show and get an ability based on its style.
Are you still with them? If so, how do you balance work and monster hunting? If you left, why was that?`,

    inputs: [{
      type: InputTypes.Augment,
      id: "show",
      label: "Specialty",
      choose: 1,
      options: [
        {
          id: "2da58e00-1566-4085-a88c-9e2d529f984e",
          name: "An Infernal Power",
          description: `A Big Bad operated the Show for evil purposes.
You signed the contract granting you three infernal favors. Spend these as if they were Luck points.
The Big Bad may restore these points when they wish, but first you must do something unforgivably terrible.
What sin have you already committed?`,
          inputs: [
            {
              id: "sin", type: InputTypes.TextArea,
              label: "What sin have you commited?",
              placeholder: ""
            },
            {
              id: "infernalFavor", type: InputTypes.Checks,
              label: "Infernal Favor",
              max: 3,
            }
          ],
          perks: {
            luck: [{ description: "You can spend your **Infernal Favor** as \`Luck\` points", showInputs: [ "infernalFavor" ] }]
          }
        },
        {
          id: "2a5deb28-4743-426e-a7c9-9f81abe9ed63",
          name: "Magic & Illusions",
          description: `Weird Move: You can use illusions to lead astray or escape`,
          perks: {
            actions: [{
              name: "Conjure Illusion",
              description: `Cast confounding spells by weaving illusions. Lead them astray or escape.`,
              coreStat: StatEnum.Weird,
              miss: `\`The Keeper\` can take a hard move. It has gone badly, as magic always does.`,
              mixedSuccess: `It doesn't quite work.

Choose one:
* They are led in a direction of your choice.
* You and those you choose escape undetected

BUT \`The Keeper\` also chooses one:
* Someone isn't fooled.
* You gain unwelcome attention.`,
              solidSuccess: `It worked!

Choose One:
* They are led in a direction of your choice.
* You and those you choose escape undetected.`,
            }]
          }
        },
        {
          id: "45c8ca65-9446-445c-b073-30c7c4e570f5",
          name: "Making Money",
          description: `Charm Move: Mess with someone to bamboozle or distract them.`,
          perks: {
            actions: [{
              name: "Bamboozle",
              description: `Mess with someone to bamboozle or distract them.`,
              coreStat: StatEnum.Charm,
              miss: `They are not fooled nor amused. You better run.`,
              mixedSuccess: `They overlook something of your choice, but they're more angry than baffled afterward.`,
              solidSuccess: `They don't know what's going on and overlook something of your choice.`,
            }]
          }
        },
        {
          id: "4539ef13-fd24-444d-b28d-1459492b3cc6",
          name: "Problem Solvers",
          description: `The Show rolls into town, people visit and reveal their difficulties.
The crew arrange to make things better, leaving each town a little happier than when you arrived.
Well, when things go smoothly anyhow. When you chat to someone, or observe them for a few minutes, the Keeper will
tell you what their biggest problem is right now.`,
          perks: {
            autoActions: [{
              name: "Problem Solver",
              description: `When you chat to someone, or observe them for a few minutes, \`The Keeper\` will tell you
what their biggest problem is right now.`,
            }]
          }
        },
        {
          id: "ad5f87d1-8067-45c4-a313-bd1425769b87",
          name: "Supernatural Creatures",
          description: `You're not entirely human yourself. Pick a single supernatural move from any hunter playbook
(the Monstrous is a good place to start). How does your inhuman nature show?`,
          inputs: [{
            type: InputTypes.Multiclass,
            id: "supernaturalMove",
            label: "Supernatural Move",
            choose: 1,
            optionsType: MulticlassTypes.Move,
          }]
        },
      ]
    }],
  },
  {
    id: "53c09225-5014-40bd-a125-0ce2487e92ff",
    playbook: "7db7e333-5084-4c61-970b-a3013c55ad7a", // The Spooktacular
    startingFeat: false,
    multiclassable: true,

    name: "Put On A Show",
    description: `Charm or Weird Move: You can entertain people so they feel joy and forget their troubles.`,
    longDescription: `You can entertain people so they feel joy and forget their troubles.
Say what you do and roll +Charm if it's pure performance or +Weird if you add a pinch of magic.`,
    perks: {
      actions: [{
        name: "Put On A Show",
        description: `You can entertain people so they feel joy and forget their troubles.`,
        longDescription: `You can entertain people so they feel joy and forget their troubles.
Say what you do and roll +Charm if it's pure performance or +Weird if you add a pinch of magic.`,
        coreStat: StatEnum.Charm,
        alternateStat: StatEnum.Weird,

        miss: `\`The Keeper\` can take a hard move against you. You likely failed to distract the crowd from their woes.`,
        successHeader: `The audience is transported and happy. Troubles and trauma are eased in their minds, for a good while.`,
        mixedSuccess: `Pick one: the effect just lasts a little while -OR- it lasts the regular time but there's a ruckus when you're done.`,
        solidSuccess: ``,
      }]
    }
  },
  {
    id: "4e526985-0c62-455a-9ea8-b9ae8ff56fae",
    playbook: "7db7e333-5084-4c61-970b-a3013c55ad7a", // The Spooktacular
    startingFeat: false,
    multiclassable: true,

    name: "A Negotiable Price",
    description: "You can make a magical deal to fulfill a desire for someone else in exchange for secrets.",
    longDescription: `You can make a magical deal to fulfill a desire for someone else. The price is that they
reveal to you a secret, the world then arranges itself to fulfill their desire, fitting the scale of the secret.`,
    perks: {
      autoActions: [{
        name: "A Negotiable Price",
        description: "You can make a magical deal to fulfill a desire for someone else in exchange for secrets.",
        longDescription: `You can make a magical deal to fulfill a desire for someone else. The price is that they
reveal to you a secret, the world then arranges itself to fulfill their desire, fitting the scale of the secret.`,
      }]
    }
  },
  {
    id: "c2481f0f-4669-4198-91c4-6e8e3e9eb03e",
    playbook: "7db7e333-5084-4c61-970b-a3013c55ad7a", // The Spooktacular
    startingFeat: false,
    multiclassable: true,

    name: "Easygoin'",
    description: `Charm Move: `,
    longDescription: `You have the gift of being friendly and easy to chat to. Attempt to make a good impression on someone you just met.`,
    perks: {
      actions: [{
        name: "Easygoin'",
        description: `Chat someone up and attempt to make a good impression on someone you just met.`,
        coreStat: StatEnum.Charm,
        miss: `They think you're playing them, and they'll not trust you or your companions.`,
        mixedSuccess: `They open up more than usual but still regard you as a stranger.`,
        solidSuccess: `They treat you asa trustworthy and friendly acquaintance.`,
      }]
    }
  },
  {
    id: "6e069f07-3c7a-4675-a17b-a3951f7a555e",
    playbook: "7db7e333-5084-4c61-970b-a3013c55ad7a", // The Spooktacular
    startingFeat: false,
    multiclassable: true,

    name: "Pay It Backward",
    description: `Give yourself or someone else advantage... but it'll come back to haunt you later.`,
    longDescription: `Give yourself or someone else an advantage on any roll: roll 3 dice and select the best
2 for your result. Whenever you do this, the Keeper gains 1 hold. That hold may be spent to give any hunter
(but usually you) a disadvantage: roll 3 dice and select the worst 2 instead.`,
    
    inputs: [{
      id: "keeperHolds", type: InputTypes.Checks,
      label: "Keeper Holds",
      max: 3,
    }],

    perks: {
      autoActions: [{
        name: "Pay It Backward",
        description: `Give yourself or someone else advantage... but it'll come back to haunt you later.`,
        longDescription: `Give yourself or someone else an advantage on any roll: roll 3 dice and select the best
2 for your result. Whenever you do this, the Keeper gains 1 hold. That hold may be spent to give any hunter
(but usually you) a disadvantage: roll 3 dice and select the worst 2 instead.`,
        showInputs: ["keeperHolds"],
      }]
    }
  },
  {
    id: "dfca294d-2b75-4fcc-a487-47cee7fc1168",
    playbook: "7db7e333-5084-4c61-970b-a3013c55ad7a", // The Spooktacular
    startingFeat: false,
    multiclassable: true,

    name: "The Old Crew",
    description: ``,
    longDescription: `You have an \`ally team\` of Show folks you worked with. They are great at setting up a scene,
creating a distraction, or even intimidating folks.`,
    
    inputs: [{
      id: "crew", type: InputTypes.Ally,
      label: "Crew",
      crewMax: 5,
    }],
    
    perks: {
      social: [{
        description: `Your crew is great at setting up a scene, creating a distraction, or even intimidating folks.`,
        showInputs: [ "crew" ]
      }]
    }
  },
  {
    id: "21f0e94e-c385-4453-abae-3af0a135e3cd",
    playbook: "7db7e333-5084-4c61-970b-a3013c55ad7a", // The Spooktacular
    startingFeat: false,
    multiclassable: true,

    name: "The Game is Fixed",
    description: ``,
    longDescription: `When you use magic in a crowded and chaotic place (like a fairground), take +1 \`forward\`.

You may also choose the following effects whenever you \`use magic\`:
* Someone fails a skilled task.
* You disappear unnoticed and untraceable in a crowded and chaotic scene.
* Instantly set up or pack away a carnival stall or camp site.
* Track someone.
* Get a bunch of cash.`,
    perks: {
      useMagic: [{
        description: `In a crowded or chaotic place (like a fairground) take +1 \`forward\`.`,
        offset: 1,
        successHeader2: `
Using **'The Game is Fixed'**, you may also choose the following effects:
* Someone fails a skilled task.
* You disappear unnoticed and untraceable in a crowded and chaotic scene.
* Instantly set up or pack away a carnival stall or camp site.
* Track someone.
* Get a bunch of cash.`
      }]
    }
  },
  {
    id: "adb84981-fcf0-4dc4-9287-684776c63a96",
    playbook: "1dccf639-8ee6-457e-a2b4-ea2ae9a0bd1a", // The Spooky
    startingFeat: false,
    multiclassable: true,

    name: "Telepathy",
    description: ``,
    longDescription: `You can read people's thoughts and put words in their mind.
This can allow you to \`investigate a mystery\` or \`read a bad situation\` without needing to actually talk.
You can also \`manipulate someone\` without speaking.

You still roll moves as normal, except people will not expect the weirdness of your mental communication.`,
    
    perks: {
      investigateAMystery: [{
        description: `You can read people's thoughts and put words in their mind. You can use this move without speaking.
People will not expect the weirdness of your mental communication.`,
      }],
      readABadSituation: [{
        description: `You can read people's thoughts and put words in their mind. You can use this move without speaking.
People will not expect the weirdness of your mental communication.`,
      }],
      manipulateSomeone: [{
        description: `You can read people's thoughts and put words in their mind. You can use this move without speaking.
People will not expect the weirdness of your mental communication.`,
      }]
    }
  },
  {
    id: "fdd4e42b-4238-49ba-9adb-193a68dd7306",
    playbook: "1dccf639-8ee6-457e-a2b4-ea2ae9a0bd1a", // The Spooky
    startingFeat: false,
    multiclassable: true,

    name: "Hex",
    description: `Gain new \`use magic\` effects: Disease, harm, and breaking things.`,
    longDescription: `When you cast a spell with \`use magic\`, as well as the normal effects, you may pick from the following:
* The target contracts a disease.
* The target immediately suffers harm (\`#2-harm\` \`magic\` \`#ignore-armor\`.)
* The target breaks something precious or important.`,
    
    perks: {
      useMagic: [{
        description: `Gain new \`use magic\` effects: Disease, harm, and breaking things.`,
        successHeader2: `
Using **'Hex'** you may also pick from the following:
* The target contracts a disease.
* The target immediately suffers harm (\`#2-harm\` \`magic\` \`#ignore-armor\`.)
* The target breaks something precious or important.`, 
      }]
    }
  },
  {
    id: "c071c318-a4cb-4e72-aef3-81177118064d",
    playbook: "1dccf639-8ee6-457e-a2b4-ea2ae9a0bd1a", // The Spooky
    startingFeat: false,
    multiclassable: true,

    name: "The Sight",
    description: `You can see the invisible, including spirits and magical influences. You can communicate with spirits.`,
    longDescription: `You can see the invisible, especially spirits and magical influences.
You may communicate with (maybe even make deals with) the spirits you see, and they give you more opportunities to spot
clues when you \`investigate a mystery\`.`,
    
    perks: {
      social: [{ description: `You can see and communicate with (maybe even make deals with) the invisible spirits you see.` }],
      investigateAMystery: [{ description: `You can see the invisible, especially spirits and magical influences.
Communicating with spirits may give you more opportunities to spot clues when you \`investigate a mystery\`.` }]
    }
  },
  {
    id: "15631a05-960d-4862-9d29-8b7abdbe3fca",
    playbook: "1dccf639-8ee6-457e-a2b4-ea2ae9a0bd1a", // The Spooky
    startingFeat: false,
    multiclassable: true,

    name: "Premonitions",
    description: `At the start of each \`mystery\`, gain a premonition of things to come.`,
    
    inputs: [
      { id: "keeperHolds", type: InputTypes.Checks, label: "Keeper Holds", max: 3, resetPerMystery: true },
      { id: "premonition", type: InputTypes.Text, label: "Premonition", placeholder: "" },
    ],

    perks: {
      actions: [{
        name: "Premonitions",
        description: `At the start of each \`mystery\`, gain a premonition of things to come.`,
        coreStat: StatEnum.Weird,
        startOfMystery: true,
        miss: `You get a vision of something bad happening to you and \`The Keeper\` holds 3, to be spent one-for-one as penalties to rolls you make.`,
        mixedSuccess: `You get clouded images of something bad that is yet to happen: mark \`experience\` if you stop it.`,
        solidSuccess: `You get a detailed vision of something bad that is yet to happen. You take +1 \`forward\` to prevent it coming true, and mark \`experience\` if you stop it.`,
        showInputs: ["keeperHolds", "premonition"]
      }],
      experience: [{ description: `If you had a successful premonition and stopped it from happening, gain 1 \`experience\``, showInputs: [ "premonition" ] }],
    }
  },
  {
    id: "85cf4934-1713-46ba-9be3-7c65eab20356",
    playbook: "1dccf639-8ee6-457e-a2b4-ea2ae9a0bd1a", // The Spooky
    startingFeat: false,
    multiclassable: true,

    name: "Hunches",
    description: `Sharp Move: `,
    longDescription: `When something bad is happening (or just about to happen) somewhere that you aren't, have a hunch that gets you there.`,

    perks: {
      actions: [{
        name: "Hunches",
        description: `When something bad is happening (or just about to happen) somewhere that you aren't, have a hunch that gets you there.`,
        coreStat: StatEnum.Sharp,
        miss: `You get there just in time to be in trouble yourself.`,
        mixedSuccess: `You get there late. You have time to intervene, but not to prevent it altogether.`,
        solidSuccess: `You knew where you needed to go, just in time to get there.`,
      }]
    }
  },
  {
    id: "619f3e51-8f08-4f30-85f3-343aa90c6f92",
    playbook: "1dccf639-8ee6-457e-a2b4-ea2ae9a0bd1a", // The Spooky
    startingFeat: false,
    multiclassable: true,

    name: "Tune In",
    description: `Weird Move: You can attune your mind to a monster or minion in order to gain information about it or its plans.`,
    longDescription: `You can attune your mind to a monster or minion.
Roll +Weird.

Spend one hold to ask the Keeper one of the following questions, and gain +1 ongoing while acting on the answers:`,
    perks: {
      actions: [{
        name: "Tune In",
        description: `You can attune your mind to a monster or minion in order to gain information about it or its plans.`,
        coreStat: StatEnum.Weird,
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
      allMoves: [{
        description: `After successfully using **'Tune In'** to connect to the mind of a monster, gain +1 \`ongoing\` while acting on the answers you got.`,
        offset: 1,
      }]
    }
  },
  {
    id: "6e2c22df-af87-4379-9119-2e74898ea4e5",
    playbook: "1dccf639-8ee6-457e-a2b4-ea2ae9a0bd1a", // The Spooky
    startingFeat: false,
    multiclassable: true,

    name: "The Big Whammy",
    description: `You can use your powers to \`kick some ass\`, rolling +Weird instead of +Tough.`,
    longDescription: `You can use your powers to \`kick some ass\`, rolling +Weird instead of +Tough.
The attack has \`#2-harm\` \`#close\` \`#obvious\` \`#ignore-armor\`. On a miss, you'll get a magical backlash.`,
    
    perks: {
      attacks: [{
        name: "Big Whammy", description: `Use your powers to \`kick some ass\`.`,
        harm: 2, ranges: [ RangeEnum.Close ], tags: [ "obvious", "ignore-armor" ],
        overrideStat: StatEnum.Weird,
        miss2: `If you used your powers to perform a **'Big Whammy'**, you now also get a magical backlash.`,
      }],
    }
  },
  {
    id: "c0fecb86-a274-4891-b5e6-3ab5a82d3f4d",
    playbook: "1dccf639-8ee6-457e-a2b4-ea2ae9a0bd1a", // The Spooky
    startingFeat: false,
    multiclassable: true,

    name: "Jinx",
    description: `Jinx a target to encourage coincidences to occur the way you want.`,
    
    inputs: [
      { id: "holds", type: InputTypes.Checks, label: "Holds", max: 2 },
      { id: "keeperHolds", type: InputTypes.Checks, label: "Keeper Holds", max: 2 },
    ],

    perks: {
      actions: [{
        name: "Jinx",
        description: `Jinx a target to encourage coincidences to occur the way you want.`,
        coreStat: StatEnum.Weird,
        miss: `\`The Keeper\` gets to \`Hold\` 2 over you.`,
        mixedSuccess: `\`Hold\` 1`,
        solidSuccess: `\`Hold\` 2`,
        resultFooter: `One of these \`Holds\` can be spent to:
* Interfere with a \`Hunter\`, giving them -1 \`forward\`.
* Help a \`hunter\`, giving them +1 \`forward\`, by interfering with their enemy.
* Interfere with what a \`monster\`, \`minion\`, or \`bystander\` is trying to do.
* Inflict 1 \`harm\` on the target due to an accident.
* The target finds something you left for them.
* The target loses something that you will soon find.`,
        showInputs: ["holds", "keeperHolds"]
      }],
    }
  },
  {
    id: "dab9c9ab-3b98-4537-b561-0cdc392ebbbd",
    playbook: "36e0df53-1690-46cf-a59e-56ef397d108d", // The Wronged
    startingFeat: true,
    multiclassable: false,

    name: "Loss",
    description: `You lost someone important to you at the hands of a monster.`,

    inputs: [
      {
        id: "whoLabel", type: InputTypes.Label,
        label: "Who you lost", subLabel: "Who did you lose? Pick one or more:"
      },
      {
        id: "association", type: InputTypes.MultipleChoice,
        label: "Association",
        choose: -1,
        options: [ "Parent(s)", "Sibling(s)", "Spouse/Partner", "Child(ren)", "Best Friend(s)" ],
        allowCustom: true,
      },
      { id: "personLost", type: InputTypes.Text, label: "Name(s)", placeholder: "" },
      {
        id: "whatLabel", type: InputTypes.Label,
        label: "What did it", subLabel: "With the Keeper’s agreement, pick the monster breed."
      },
      {
        id: "prey", type: InputTypes.Text, label: "My Prey", placeholder: "Vampires, Werewolves, or Robots etc."
      },
      {
        id: "howLabel", type: InputTypes.Label,
        label: "How it happened", subLabel: "Why couldn't you save them?"
      },
      {
        id: "weakness", type: InputTypes.MultipleChoice,
        label: "Weakness",
        choose: -1,
        options: [ "I was at fault", "I was selfish", "I was injured", "I was weak", "I was slow", "I was scared", "I was in denial", "I was complicit" ],
        allowCustom: true,
      },
      {
        id: "notes", type: InputTypes.TextArea,
        label: "Notes",
        placeholder: "",
      }
    ],
    
    perks: {
      allMoves: [{
        description: `I Know My Prey: You get +1 \`ongoing\` when knowingly investigating, pursuing or fighting the breed of monster that caused your loss.`,
        showInputs: [ "prey" ]
      }]
    }
  },
  {
    id: "c0836425-0d62-46f1-9cd0-88b4c8c99a0e",
    playbook: "36e0df53-1690-46cf-a59e-56ef397d108d", // The Wronged
    startingFeat: false,
    multiclassable: true,

    name: "Berserk",
    description: `No matter how much harm you take, you can always keep going until the current fight is over.`,
    longDescription: `No matter how much harm you take, you can always keep going until the current fight is over.
During a fight, \`The Keeper\` may not use harm moves on you and you cannot die. When the fight ends, all
harm takes effect as normal.`,
    
    perks: {
      health: [{ description: `No matter how much \`harm\` you take, you can always keep going until the current fight is over.
During a fight, \`The Keeper\` may not use \`harm moves\` on you and you cannot die. When the fight ends, all \`harm\`
takes effect as normal.` }]
    }
  },
  {
    id: "b60157bc-c9c8-4511-a97e-4262b827fc06",
    playbook: "36e0df53-1690-46cf-a59e-56ef397d108d", // The Wronged
    startingFeat: false,
    multiclassable: true,

    name: "Never Again",
    description: `In combat, you may \`protect someone\` without rolling, as if you had rolled a 10+, but you may not choose to “suffer little harm."`,
    longDescription: `In combat, you may \`protect someone\` without rolling, as if you had rolled a 10+, but you may not choose to “suffer little harm."

When you prevent harm to another character you protect them okay, but you'll suffer some or all of the harm they were going to get.
Choose an extra:
• All impending danger is now focused on you.
• You inflict harm on the enemy.
• You hold the enemy back`,
    
    perks: {
      protectSomeone: [{
        description: `In combat, you may can automatically succeed with a 10, but you may not choose to “suffer little harm".`,
        canAutoRoll: 10,
        successFooter2: `If you used **'Never Again'** to take an automatic 10, you cannot choose "suffer little harm".`,
      }]
    }
  },
  {
    id: "dcb22925-e5d5-46ca-aeb0-001640084f0f",
    playbook: "36e0df53-1690-46cf-a59e-56ef397d108d", // The Wronged
    startingFeat: false,
    multiclassable: true,

    name: "What Does Not Kill Me...",
    description: `If you have suffered \`harm\` in a fight, you gain +1 \`ongoing\` until the fight is over.`,
    
    perks: {
      allMoves: [{ description: `If you have suffered harm in a fight, you gain +1 ongoing until the fight is over.`, offset: 1 }]
    }
  },
  {
    id: "486000a8-2345-451b-b65d-339a5374aad3",
    playbook: "36e0df53-1690-46cf-a59e-56ef397d108d", // The Wronged
    startingFeat: false,
    multiclassable: true,

    name: "Fervor",
    description: `When you \`manipulate someone\`, roll +Tough instead of +Charm.`,
    
    perks: { manipulateSomeone: [{ description: `You can roll +Tough instead of +Charm.`, alternateStat: StatEnum.Tough }] }
  },
  {
    id: "fc1b8038-803a-4a4e-8296-fad4d1d65b04",
    playbook: "36e0df53-1690-46cf-a59e-56ef397d108d", // The Wronged
    startingFeat: false,
    multiclassable: true,

    name: "Safety First",
    description: `You have jury-rigged extra protection into your gear, giving you +1 armor (maximum 2-armor).`,
    
    perks: {
      armorModifiers: [{
        name: `Safety First`,
        description: `You have jury-rigged extra protection into your gear, giving you +1 armor (maximum 2-armor).`,
        offset: 1,
        max: 2,
      }]
    }
  },
  {
    id: "47603ea7-3061-4ad9-8463-6498ccc602e5",
    playbook: "36e0df53-1690-46cf-a59e-56ef397d108d", // The Wronged
    startingFeat: false,
    multiclassable: true,

    name: "DIY Surgery",
    description: `You do quick and dirty first aid on someone (including yourself).`,
    longDescription: ``,
    perks: {
      actions: [{
        name: "DIY Surgery",
        description: `You do quick and dirty first aid on someone (including yourself).`,
        coreStat: StatEnum.Cool,
        miss: `\`The Keeper\` can take a hard move against you. You likely failed to apply healing, but \`The Keeper\` may allow you to apply the normal \`First Aid\` effects.`,
        mixedSuccess: `Choose one of the following outcomes:
* Heal 1 \`harm\` and \`stabilize\` the patient, but they take -1 \`forward\`.
* Heal 2 \`harm\` and \`stabilize\` the patient, but it'll return as 2 \`harm\` and become \`unstable\` again later.
* Heal 2 \`harm\` and \`stabilize\` the patient, but they take -1 \`ongoing\` until it’s fixed properly.`,
        solidSuccess: `It’s all good. Heal 2 \`harm\` and \`stabilize\` your patient.`,
      }]
    }
  },
  {
    id: "5a573905-b41e-4f50-9b94-d710de9f5445",
    playbook: "36e0df53-1690-46cf-a59e-56ef397d108d", // The Wronged
    startingFeat: false,
    multiclassable: true,

    name: "Tools Matter",
    description: `With your **Signature Weapon**, you get +1 to \`kick some ass\`.`,
    
    perks: {
      kickSomeAss: [{
        description: `When using your **Signature Weapon**`,
        offset: 1,
        showInputs: [ "signatureWeapon" ]
      }]
    }
  },
  {
    id: "",
    playbook: "",
    startingFeat: false,
    multiclassable: true,

    name: "",
    description: ``,
    longDescription: ``,
  },
];
