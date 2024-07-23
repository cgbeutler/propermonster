import {type Feat, FeatTypeEnum, StatEnum} from "./CompendiumTypes";
import {InputTypes} from "./UserInputTypes";

export let ImprovementFeats: Array<Feat> = [
  {
    name: `Gain 2 Advanced Moves`,
    id: `b276602e-b737-4b1e-a750-58c38417a349`,
    featType: FeatTypeEnum.AdvancedImprovement,
    prerequisites: [`389c473f-8500-4758-b0ab-7c013b5bdf8c`],
    
    description: `Upgrade 2 of the basic moves to be Advanced.`,
    longDescription: `Choose 2 of the basic moves to upgrade to **advanced moves**.

#### Advanced Moves
When you roll a 12+ on an **advanced move**, you gain additional benefits or advanced options for that move.

Since advanced moves are contingent on getting a 12+, you may not want to upgrade a move unless you have a high
rating (stat) for that move.`,
    inputs: [{
      label: `Advanced Moves`, key: `5eaf1013-ff64-451d-90f4-6a8601beacc8`,
      inputType: InputTypes.FeatChoice,
      choose: 2,
      options: [
        {
          name: `Kick Some Ass`,
          id: `9d8fa78c-9a05-42c7-a9b3-92b600fc5739`,
          featType: FeatTypeEnum.SubFeat,
          prerequisiteMoves: [`6d3f9e16-a230-4478-9481-853c90ff4cec`], // Kick Some Ass
          perks: {
            modMoves: [{
              name: `Advanced`,
              applyToMoves: [`6d3f9e16-a230-4478-9481-853c90ff4cec`], // Kick Some Ass
              amendResults: {
                advancedSuccess: `Choose one enhanced effect:
* Give all \`hunters\` in the fight +1 \`forward\` as you *completely hold the advantage*.
* Inflict double \`harm\`.
* Suffer no \`harm\`.
* Drive the target away along a specific route or force them *exactly* where you want them.`,
              }
            }]
          }
        },
        {
          name: `Act Under Pressure`,
          id: `553a28d1-f6b1-4ec7-977e-3d52cf8b812b`,
          featType: FeatTypeEnum.SubFeat,
          prerequisiteMoves: [`bfdfd9b3-d5fa-4517-8d5e-20013364d7b0`], // Act Under Pressure
          perks: {
            modMoves: [{
              name: `Advanced`,
              applyToMoves: [`bfdfd9b3-d5fa-4517-8d5e-20013364d7b0`], // Act Under Pressure
              amendResults: {
                advancedSuccess: `You may choose to either do what you wanted and something extra, or to do what you wanted to absolute perfection.`,
              }
            }]
          }
        },
        {
          name: `Help Out`,
          id: `eae0577f-cc15-4a14-a1ef-59969c8772bf`,
          featType: FeatTypeEnum.SubFeat,
          prerequisiteMoves: [`2c7dd11e-b12b-4a02-b109-41e7daf65549`], // Help Out
          perks: {
            modMoves: [{
              name: `Advanced`,
              applyToMoves: [`2c7dd11e-b12b-4a02-b109-41e7daf65549`], // Help Out
              amendResults: {
                advancedSuccess: `Your help lets them act as if they just rolled a 12, regardless of what they actually got.`,
              }
            }]
          }
        },
        {
          name: `Investigate a Mystery`,
          id: `b4ae4906-b297-46bf-9833-d69d8c6f482d`,
          featType: FeatTypeEnum.SubFeat,
          prerequisiteMoves: [`1b0ccc41-de6e-45dc-9f9f-bb1d7d33a447`], // Investigate A Mystery
          perks: {
            modMoves: [{
              name: `Advanced`,
              applyToMoves: [`1b0ccc41-de6e-45dc-9f9f-bb1d7d33a447`], // Investigate A Mystery
              amendResults: {
                advancedSuccess: `Ask \`The Keeper\` any 2 questions about the \`mystery\`. (You don't have to use the **Investigation Questions** below.)`,
              }
            }]
          }
        },
        {
          name: `Manipulate Someone & Manipulate A Hunter`,
          id: `e0585aad-aad4-49db-8d12-c383eb3addd0`,
          featType: FeatTypeEnum.SubFeat,
          prerequisiteMoves: [`d245fc16-53f7-40bd-bdbb-45cde437adab`,`1d8097c8-90bc-485e-90a0-0eb9e94d0959`], // Manipulate Someone & Manipulate A Hunter
          perks: {
            modMoves: [
              {
                name: `Advanced`,
                applyToMoves: [`d245fc16-53f7-40bd-bdbb-45cde437adab`], // Manipulate Someone
                amendResults: {
                  advancedSuccess: `Not only do they do what you want right now, they also become your \`ally\` for the rest of the mystery (or, if you do enough for them, permanently).`,
                }
              },
              {
                name: `Advanced`,
                applyToMoves: [`1d8097c8-90bc-485e-90a0-0eb9e94d0959`], // Manipulate A Hunter
                amendResults: {
                  advancedSuccess: `They must \`act under pressure\` to resist your request. If they do what you ask, they gain one \`experience\` and take +1 \`ongoing\` while doing what you asked.`,
                }
              }
            ]
          }
        },
        {
          name: `Protect Someone`,
          id: `5458ec1f-31a0-4d97-97ac-1270334e55fd`,
          featType: FeatTypeEnum.SubFeat,
          prerequisiteMoves: [`48664b18-63e2-47fb-8363-ddcbefabe02e`], // Protect Someone
          perks: {
            modMoves: [{
              name: `Advanced`,
              applyToMoves: [`48664b18-63e2-47fb-8363-ddcbefabe02e`], // Protect Someone
              amendResults: {
                advancedSuccess: `Both you and the character you are protecting are unharmed and out of danger. If you were protecting a \`bystander\`, they also become your \`ally\`.`,
              }
            }]
          }
        },
        {
          name: `Read A Bad Situation`,
          id: `66529d96-1341-4b1b-874a-5dfc1451c653`,
          featType: FeatTypeEnum.SubFeat,
          prerequisiteMoves: [`f749882e-91f9-4c81-a14f-40a9fae2ac64`], // Read A Bad Situation
          perks: {
            modMoves: [{
              name: `Advanced`,
              applyToMoves: [`f749882e-91f9-4c81-a14f-40a9fae2ac64`], // Read A Bad Situation
              amendResults: {
                advancedSuccess: `Ask \`The Keeper\` any 3 questions you want about the situation, not just the **Situation Questions**:`,
              }
            }]
          }
        },
        {
          name: `Use Magic`,
          id: `f6da376d-ddfb-4df8-8cf5-3200d5c71ea7`,
          featType: FeatTypeEnum.SubFeat,
          prerequisiteMoves: [`ae7216e7-d5d0-4858-9469-9c3a04f47844`], // Use Magic
          perks: {
            modMoves: [{
              name: `Advanced`,
              applyToMoves: [`ae7216e7-d5d0-4858-9469-9c3a04f47844`], // Use Magic
              amendResults: {
                advancedSuccess: `\`The Keeper\` will also offer you an added benefit.`,
              }
            }]
          }
        },
        {
          name: `Empath`,
          id: `72afeb96-73a0-4ee6-ad5e-991259da7276`,
          featType: FeatTypeEnum.SubFeat,
          prerequisiteMoves: [`39c2a0cb-833f-4fe7-b462-426c835928a4`], // Empath
          perks: {
            modMoves: [{
              name: `Advanced`,
              applyToMoves: [`39c2a0cb-833f-4fe7-b462-426c835928a4`], // Empath
              amendResults: {
                advancedSuccess: `You gain a clear impression of their current emotional state and intentions.
Take +1 \`forward\` when acting on this knowledge.
You may ask one follow-up question that \`The Keeper\` will answer honestly.`,
              }
            }]
          }
        },
        {
          name: `Illuminated`,
          id: `29a8f62d-5be2-44d0-b76b-6ffb57fbe3d5`,
          featType: FeatTypeEnum.SubFeat,
          prerequisiteMoves: [`be60197e-1ee4-42d9-9962-b7260594fbbe`], // Illuminated
          perks: {
            modMoves: [{
              name: `Advanced`,
              applyToMoves: [`be60197e-1ee4-42d9-9962-b7260594fbbe`], // Illuminated
              amendResults: {
                advancedSuccess: `The **Secret Masters** reveal a key fact, clue, or technique that will help you.
You may ask one follow-up question that \`The Keeper\` will answer honestly.`,
              }
            }]
          }
        },
        {
          name: `No Limits`,
          id: `1e68d99c-056d-4af0-9f6a-921405d22e31`,
          featType: FeatTypeEnum.SubFeat,
          prerequisiteMoves: [`4f04c33e-f0e3-4f83-b995-c033ac1a518c`], // No Limits
          perks: {
            modMoves: [{
              name: `Advanced`,
              applyToMoves: [`4f04c33e-f0e3-4f83-b995-c033ac1a518c`], // No Limits
              amendResults: {
                advancedSuccess: `You can continue acting at your body's limits for 30 seconds.`,
              }
            }]
          }
        },
        {
          name: `Past Lives`,
          id: `65ed25c0-e182-437d-8dd3-e19aee52caaf`,
          featType: FeatTypeEnum.SubFeat,
          prerequisiteMoves: [`e768eb52-feda-486f-956d-3822fa7848be`], // Past Lives
          perks: {
            modMoves: [{
              name: `Advanced`,
              applyToMoves: [`e768eb52-feda-486f-956d-3822fa7848be`], // Past Lives
              amendResults: {
                advancedSuccess: `A past life knows exactly what you were after.
Ask \`The Keeper\` one of the questions below, and one free-form question. Gain +1 \`ongoing\` while acting on the answers.`,
                // TODO: Ad the above 'ongoing' 
              }
            }]
          }
        },
        {
          name: `Sensitive`,
          id: `e290f85f-161f-46c5-9630-7b52ee8985c5`,
          featType: FeatTypeEnum.SubFeat,
          prerequisiteMoves: [`0ef9f128-f877-49f6-91b2-1c9e04850f4a`], // Sensitive
          perks: {
            modMoves: [{
              name: `Advanced`,
              applyToMoves: [`0ef9f128-f877-49f6-91b2-1c9e04850f4a`], // Sensitive
              amendResults: {
                advancedSuccess: `You gain a definite impression (a vision, tangible aura, overheard thought, etc) about something important.
You may ask one follow-up question that \`The Keeper\` will answer honestly.`,
              }
            }]
          }
        },
        {
          name: `Trust Your Gut`,
          id: `aec35f64-0953-4a64-91fc-54ffc839ffd1`,
          featType: FeatTypeEnum.SubFeat,
          prerequisiteMoves: [`22905bf8-71e5-453e-931c-9c8041fc4e7a`], // Trust Your Gut
          perks: {
            modMoves: [{
              name: `Advanced`,
              applyToMoves: [`22905bf8-71e5-453e-931c-9c8041fc4e7a`], // Trust Your Gut
              amendResults: {
                advancedSuccess: `\`The Keeper\` will tell you where you should go.
Wherever that is, it will be important. You get +1 \`ongoing\` on the way to this place.
\`The Keeper\` will also tell you one important thing you should investigate further.`,
              }
            }]
          }
        },
        {
          name: `Telekinesis`,
          id: `acf54d1a-f31e-43ed-a858-9e3c951893e5`,
          featType: FeatTypeEnum.SubFeat,
          prerequisiteMoves: [`dca44976-2a65-425a-97fd-2ef2e6474f58`], // Telekinesis
          perks: {
            modMoves: [{
              name: `Advanced`,
              applyToMoves: [`dca44976-2a65-425a-97fd-2ef2e6474f58`], // Telekinesis
              amendResults: {
                advancedSuccess: `You move it but it hurts a little. Choose three options and mark 1 \`harm\`. You can also choose from these additional options:
* Something explodes 3 \`harm\` \`#close\` \`#fire\` \`#area\` \`#messy\`
* Something implodes 3 \`harm\` \`#close\` \`#crush\`
* Lots of stuff is flying under your control.
* You have perfect and precise control over exactly what happens.`,
              }
            }]
          }
        },
        {
          name: `Weird Science`,
          id: `c35aa07f-3dcf-4388-8e8b-ef7ff931cf00`,
          featType: FeatTypeEnum.SubFeat,
          prerequisiteMoves: [`8113df8e-c21f-417f-94b9-6a1beb0b88c4`], // Weird Science
          perks: {
            modMoves: [{
              name: `Advanced`,
              applyToMoves: [`8113df8e-c21f-417f-94b9-6a1beb0b88c4`], // Weird Science
              amendResults: {
                advancedSuccess: `Pick two requirements below. You gain +1 \`ongoing\` when operating the device.`,
                // TODO: Add the above `ongoing`?
              }
            }]
          }
        },
        {
          name: ``,
          id: ``,
          featType: FeatTypeEnum.SubFeat,
          prerequisiteMoves: [``], // 
          perks: {
            modMoves: [{
              name: `Advanced`,
              applyToMoves: [``], // 
              amendResults: {
                advancedSuccess: ``,
              }
            }]
          }
        },
      ]
    }]
  },
  {
    name: `Gain 2 More Advanced Moves`,
    id: `417a510b-a530-414a-9f95-9ed1f4bcb757`,
    featType: FeatTypeEnum.AdvancedImprovement,
    prerequisites: [`b276602e-b737-4b1e-a750-58c38417a349`], // Gain 2 Advanced Moves
    
    description: `Upgrade 2 more basic moves to be Advanced.`,
    longDescription: `Choose 2 more basic moves to upgrade to **advanced moves**.

#### Advanced Moves
When you roll a 12+ on an **advanced move**, you gain additional benefits or advanced options for that move.

Since advanced moves are contingent on getting a 12+, you may not want to upgrade a move unless you have a high
rating (stat) for that move.`,
    
    perks: {
      modChooseInput: [{
        inputKey: `5eaf1013-ff64-451d-90f4-6a8601beacc8`,
        offset: 2,
      }]
    },
  },
  {
    name: `Get +1 to any rating (max +3)`,
    id: `84e6f05e-4197-4db6-ac92-6cce7a60fc96`,
    playbooks: [`94a658a0-f5dc-4e4b-a1ec-1b322b08d78f`], // The Chosen
    
    featType: FeatTypeEnum.AdvancedImprovement,
    inputs: [{
      label: `Rating`,
      inputType: InputTypes.FeatChoice,
      choose: 1,
      options: [
        {
          id: `ccf5a872-32ee-4039-a3b5-14548fed9783`,
          name: `Charm`,
          perks: {charm: {bonus: 1, max: 3}}
        },
        {
          id: `b8b215ea-7ae4-4a63-9c6b-2dca7ef67dae`,
          name: `Cool`,
          perks: {cool: {bonus: 1, max: 3}}
        },
        {
          id: `58f0ef31-72f6-46d7-abb4-6a30d99119f4`,
          name: `Sharp`,
          perks: {sharp: {bonus: 1, max: 3}}
        },
        {
          id: `cca27f49-2674-4647-8c7f-68c825dd5ca9`,
          name: `Tough`,
          perks: {tough: {bonus: 1, max: 3}}
        },
        {
          id: `c5d609f0-27d1-48b0-8649-7058cc04416e`,
          name: `Weird`,
          perks: {weird: {bonus: 1, max: 3}}
        },
      ]
    }]
  },
  {
    name: `Gain 1 \`Luck\``,
    id: `d4816fa8-a8a5-40a0-80d0-fc770d176b23`,
    playbooks: [`94a658a0-f5dc-4e4b-a1ec-1b322b08d78f`], // The Chosen
    featType: FeatTypeEnum.AdvancedImprovement,
    
    perks: {
      luck: [{ description: `Advanced Improvement`, bonus: 1 }]
    }
  },
]