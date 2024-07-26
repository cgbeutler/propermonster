import {Abilities, type Feat, FeatType} from "./CompendiumTypes";
import {InputTypes} from "./UserInputTypes";

export let AdvImprovementFeats: {[key: string]: Feat} = {
  AdvMoves: {
    name: `Gain 2 Advanced Moves`,
    id: `b276602e-b737-4b1e-a750-58c38417a349`,
    featType: FeatType.AdvancedImprovement,
    prerequisiteFeats: [`389c473f-8500-4758-b0ab-7c013b5bdf8c`],

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
          featType: FeatType.SubFeat,
          prerequisiteMoves: [`6d3f9e16-a230-4478-9481-853c90ff4cec`], // Kick Some Ass

          modMoves: [{
            applyToMoves: [`6d3f9e16-a230-4478-9481-853c90ff4cec`], // Kick Some Ass
            amendResults: {
              advancedSuccess: `Choose one enhanced effect:
* Give all \`hunters\` in the fight +1 \`forward\` as you *completely hold the advantage*.
* Inflict double \`harm\`.
* Suffer no \`harm\`.
* Drive the target away along a specific route or force them *exactly* where you want them.`,
            }
          }]
        },
        {
          name: `Act Under Pressure`,
          id: `553a28d1-f6b1-4ec7-977e-3d52cf8b812b`,
          featType: FeatType.SubFeat,
          prerequisiteMoves: [`bfdfd9b3-d5fa-4517-8d5e-20013364d7b0`], // Act Under Pressure

          modMoves: [{
            applyToMoves: [`bfdfd9b3-d5fa-4517-8d5e-20013364d7b0`], // Act Under Pressure
            amendResults: {
              advancedSuccess: `You may choose to either do what you wanted and something extra, or to do what you wanted to absolute perfection.`,
            }
          }]
        },
        {
          name: `Help Out`,
          id: `eae0577f-cc15-4a14-a1ef-59969c8772bf`,
          featType: FeatType.SubFeat,
          prerequisiteMoves: [`2c7dd11e-b12b-4a02-b109-41e7daf65549`], // Help Out

          modMoves: [{
            applyToMoves: [`2c7dd11e-b12b-4a02-b109-41e7daf65549`], // Help Out
            amendResults: {
              advancedSuccess: `Your help lets them act as if they just rolled a 12, regardless of what they actually got.`,
            }
          }]
        },
        {
          name: `Investigate a Mystery`,
          id: `b4ae4906-b297-46bf-9833-d69d8c6f482d`,
          featType: FeatType.SubFeat,
          prerequisiteMoves: [`1b0ccc41-de6e-45dc-9f9f-bb1d7d33a447`], // Investigate A Mystery

          modMoves: [{
            applyToMoves: [`1b0ccc41-de6e-45dc-9f9f-bb1d7d33a447`], // Investigate A Mystery
            amendResults: {
              advancedSuccess: `Ask \`The Keeper\` any 2 questions about the \`mystery\`. (You don't have to use the **Investigation Questions** below.)`,
            }
          }]
        },
        {
          name: `Manipulate Someone & Manipulate A Hunter`,
          id: `e0585aad-aad4-49db-8d12-c383eb3addd0`,
          featType: FeatType.SubFeat,
          prerequisiteMoves: [`d245fc16-53f7-40bd-bdbb-45cde437adab`, `1d8097c8-90bc-485e-90a0-0eb9e94d0959`], // Manipulate Someone & Manipulate A Hunter

          modMoves: [
            {
              applyToMoves: [`d245fc16-53f7-40bd-bdbb-45cde437adab`], // Manipulate Someone
              amendResults: {
                advancedSuccess: `Not only do they do what you want right now, they also become your \`ally\` for the rest of the mystery (or, if you do enough for them, permanently).`,
              }
            },
            {
              applyToMoves: [`1d8097c8-90bc-485e-90a0-0eb9e94d0959`], // Manipulate A Hunter
              amendResults: {
                advancedSuccess: `They must \`act under pressure\` to resist your request. If they do what you ask, they gain one \`experience\` and take +1 \`ongoing\` while doing what you asked.`,
              }
            }
          ]
        },
        {
          name: `Protect Someone`,
          id: `5458ec1f-31a0-4d97-97ac-1270334e55fd`,
          featType: FeatType.SubFeat,
          prerequisiteMoves: [`48664b18-63e2-47fb-8363-ddcbefabe02e`], // Protect Someone

          modMoves: [{
            applyToMoves: [`48664b18-63e2-47fb-8363-ddcbefabe02e`], // Protect Someone
            amendResults: {
              advancedSuccess: `Both you and the character you are protecting are unharmed and out of danger. If you were protecting a \`bystander\`, they also become your \`ally\`.`,
            }
          }]
        },
        {
          name: `Read A Bad Situation`,
          id: `66529d96-1341-4b1b-874a-5dfc1451c653`,
          featType: FeatType.SubFeat,
          prerequisiteMoves: [`f749882e-91f9-4c81-a14f-40a9fae2ac64`], // Read A Bad Situation

          modMoves: [{
            applyToMoves: [`f749882e-91f9-4c81-a14f-40a9fae2ac64`], // Read A Bad Situation
            amendResults: {
              advancedSuccess: `Ask \`The Keeper\` any 3 questions you want about the situation, not just the **Situation Questions**:`,
            }
          }]
        },
        {
          name: `Use Magic`,
          id: `f6da376d-ddfb-4df8-8cf5-3200d5c71ea7`,
          featType: FeatType.SubFeat,
          prerequisiteMoves: [`ae7216e7-d5d0-4858-9469-9c3a04f47844`], // Use Magic

          modMoves: [{
            applyToMoves: [`ae7216e7-d5d0-4858-9469-9c3a04f47844`], // Use Magic
            amendResults: {
              advancedSuccess: `\`The Keeper\` will also offer you an added benefit.`,
            }
          }]
        },
        {
          name: `Empath`,
          id: `72afeb96-73a0-4ee6-ad5e-991259da7276`,
          featType: FeatType.SubFeat,
          prerequisiteMoves: [`39c2a0cb-833f-4fe7-b462-426c835928a4`], // Empath

          modMoves: [{
            applyToMoves: [`39c2a0cb-833f-4fe7-b462-426c835928a4`], // Empath
            amendResults: {
              advancedSuccess: `You gain a clear impression of their current emotional state and intentions.
Take +1 \`forward\` when acting on this knowledge.
You may ask one follow-up question that \`The Keeper\` will answer honestly.`,
            }
          }]
        },
        {
          name: `Illuminated`,
          id: `29a8f62d-5be2-44d0-b76b-6ffb57fbe3d5`,
          featType: FeatType.SubFeat,
          prerequisiteMoves: [`be60197e-1ee4-42d9-9962-b7260594fbbe`], // Illuminated

          modMoves: [{
            applyToMoves: [`be60197e-1ee4-42d9-9962-b7260594fbbe`], // Illuminated
            amendResults: {
              advancedSuccess: `The **Secret Masters** reveal a key fact, clue, or technique that will help you.
You may ask one follow-up question that \`The Keeper\` will answer honestly.`,
            }
          }]
        },
        {
          name: `No Limits`,
          id: `1e68d99c-056d-4af0-9f6a-921405d22e31`,
          featType: FeatType.SubFeat,
          prerequisiteMoves: [`4f04c33e-f0e3-4f83-b995-c033ac1a518c`], // No Limits

          modMoves: [{
            applyToMoves: [`4f04c33e-f0e3-4f83-b995-c033ac1a518c`], // No Limits
            amendResults: {
              advancedSuccess: `You can continue acting at your body's limits for 30 seconds.`,
            }
          }]
        },
        {
          name: `Past Lives`,
          id: `65ed25c0-e182-437d-8dd3-e19aee52caaf`,
          featType: FeatType.SubFeat,
          prerequisiteMoves: [`e768eb52-feda-486f-956d-3822fa7848be`], // Past Lives

          modMoves: [{
            applyToMoves: [`e768eb52-feda-486f-956d-3822fa7848be`], // Past Lives
            amendResults: {
              advancedSuccess: `A past life knows exactly what you were after.
Ask \`The Keeper\` one of the questions below, and one free-form question. Gain +1 \`ongoing\` while acting on the answers.`,
              // TODO: Ad the above 'ongoing' 
            }
          }]
        },
        {
          name: `Sensitive`,
          id: `e290f85f-161f-46c5-9630-7b52ee8985c5`,
          featType: FeatType.SubFeat,
          prerequisiteMoves: [`0ef9f128-f877-49f6-91b2-1c9e04850f4a`], // Sensitive

          modMoves: [{
            applyToMoves: [`0ef9f128-f877-49f6-91b2-1c9e04850f4a`], // Sensitive
            amendResults: {
              advancedSuccess: `You gain a definite impression (a vision, tangible aura, overheard thought, etc) about something important.
You may ask one follow-up question that \`The Keeper\` will answer honestly.`,
            }
          }]
        },
        {
          name: `Trust Your Gut`,
          id: `aec35f64-0953-4a64-91fc-54ffc839ffd1`,
          featType: FeatType.SubFeat,
          prerequisiteMoves: [`22905bf8-71e5-453e-931c-9c8041fc4e7a`], // Trust Your Gut

          modMoves: [{
            applyToMoves: [`22905bf8-71e5-453e-931c-9c8041fc4e7a`], // Trust Your Gut
            amendResults: {
              advancedSuccess: `\`The Keeper\` will tell you where you should go.
Wherever that is, it will be important. You get +1 \`ongoing\` on the way to this place.
\`The Keeper\` will also tell you one important thing you should investigate further.`,
            }
          }]
        },
        {
          name: `Telekinesis`,
          id: `acf54d1a-f31e-43ed-a858-9e3c951893e5`,
          featType: FeatType.SubFeat,
          prerequisiteMoves: [`dca44976-2a65-425a-97fd-2ef2e6474f58`], // Telekinesis

          modMoves: [{
            applyToMoves: [`dca44976-2a65-425a-97fd-2ef2e6474f58`], // Telekinesis
            amendResults: {
              advancedSuccess: `You move it but it hurts a little. Choose three options and mark 1 \`harm\`. You can also choose from these additional options:
* Something explodes 3 \`harm\` \`#close\` \`#fire\` \`#area\` \`#messy\`
* Something implodes 3 \`harm\` \`#close\` \`#crush\`
* Lots of stuff is flying under your control.
* You have perfect and precise control over exactly what happens.`,
            }
          }]
        },
        {
          name: `Weird Science`,
          id: `c35aa07f-3dcf-4388-8e8b-ef7ff931cf00`,
          featType: FeatType.SubFeat,
          prerequisiteMoves: [`8113df8e-c21f-417f-94b9-6a1beb0b88c4`], // Weird Science

          modMoves: [{
            applyToMoves: [`8113df8e-c21f-417f-94b9-6a1beb0b88c4`], // Weird Science
            amendResults: {
              advancedSuccess: `Pick two requirements below. You gain +1 \`ongoing\` when operating the device.`,
              // TODO: Add the above `ongoing`?
            }
          }]
        },
      ]
    }]
  },
  AdvMoves2: {
    name: `Gain 2 More Advanced Moves`,
    id: `417a510b-a530-414a-9f95-9ed1f4bcb757`,
    featType: FeatType.AdvancedImprovement,
    prerequisiteFeats: [`b276602e-b737-4b1e-a750-58c38417a349`], // Gain 2 Advanced Moves

    description: `Upgrade 2 more basic moves to be Advanced.`,
    longDescription: `Choose 2 more basic moves to upgrade to **advanced moves**.

#### Advanced Moves
When you roll a 12+ on an **advanced move**, you gain additional benefits or advanced options for that move.

Since advanced moves are contingent on getting a 12+, you may not want to upgrade a move unless you have a high
rating (stat) for that move.`,

    modChooseInput: [{
      inputKey: `5eaf1013-ff64-451d-90f4-6a8601beacc8`,
      offset: 2,
    }]
  },
  ChangeType: {
    name: `Change Hunter Type`,
    id: `af9a4440-fe3d-4fd6-8b67-ea310b6d2b86`,
    description: `Change this hunter to a new type.`,
    longDescription: `This option represents a shift or change in your character.
You will pick another playbook. It should make sense with the change you have experienced or want to bring into the story.

The following changes to your playbook will then occur:
* Ratings (stats): No Change
* Luck: No Change in points. Luck effect changes.
* Experience: No Change (though you cannot take advanced improvements for another 5 levels.)
* Moves:
  * Add the moves of your new playbook, as you would when creating a new hunter.
  * Review old moves with \`The Keeper\` to see if they still apply. Ask yourself, "Is it is intrinsic to who I am, or just something I did for a while?"
* Gear: Choose which gear to swap for the new gear, similar to how you reviewed your 'moves'.
* Name & Look: Change, if you want. 
* History: No Change
* Special Playbook Features: Swapped with the new ones.`,
  },
  Luck: {
    name: `Gain 1 \`Luck\``,
    id: `d4816fa8-a8a5-40a0-80d0-fc770d176b23`,
    featType: FeatType.AdvancedImprovement,

    offsetMaxLuck: 1,
  },
  Luck2: {
    name: `Gain 1 \`Luck\``,
    id: `d4816fa8-a8a5-40a0-80d0-fc770d176b23`,
    playbooks: [`b03c7fb1-9ce4-4cba-a527-6c1380ac5de0`, `f7b73a9a-6447-42f8-b373-b71341bdad99`], // The Mundane & The Searcher
    featType: FeatType.AdvancedImprovement,

    offsetMaxLuck: 1,
  },
  Retire: {
    name: `Retire`,
    id: `6a5648fb-2eb7-43b2-8195-7289398c6eca`,
    description: `Retire your \`hunter\` to safety.`,
    longDescription: `Your \`hunter\` retires to a safe place.
They no longer actively hunt monsters, and have found a place to live that’s safe from old enemies.

\`The Keeper\` takes over playing the \`hunter\`.
 
Your \`hunter\` is safe from \`The Keeper\`’s threats, and never count as a threat themselves.
Your retired \`hunter\` might, at your and \`The Keeper\`’s discretion, count as an \`ally\` for the other hunters.`,
  },
  SecondHunter: {
    name: `Second Hunter`,
    id: `d9b10f45-95c9-43c0-a4a8-55d7af5aeb48`,
    description: `Create a second \`hunter\` to play alongside this one.`,
    longDescription: `Create a new \`hunter\` to join the team.
You can play both \`hunters\` at once, or maybe take turns, deciding which of them will come along on a \`mystery\` on a case-by-case basis.

Make up the new \`hunter\` as normal, except for history.
Only pick history for the \`hunters\` played by different people—don't tie your own hunters together with history picks.`,
  },
  StatUp: {
    name: `Get +1 to any rating (max +3)`,
    id: `84e6f05e-4197-4db6-ac92-6cce7a60fc96`,

    featType: FeatType.AdvancedImprovement,
    inputs: [{
      label: `Rating`,
      inputType: InputTypes.FeatChoice,
      choose: 1,
      options: [
        {
          id: `ccf5a872-32ee-4039-a3b5-14548fed9783`,
          name: `Charm`,
          abilityImprovement: {ability: Abilities.Charm, bonus: 1, max: 3},
        },
        {
          id: `b8b215ea-7ae4-4a63-9c6b-2dca7ef67dae`,
          name: `Cool`,
          abilityImprovement: {ability: Abilities.Cool, bonus: 1, max: 3},
        },
        {
          id: `58f0ef31-72f6-46d7-abb4-6a30d99119f4`,
          name: `Sharp`,
          abilityImprovement: {ability: Abilities.Sharp, bonus: 1, max: 3},
        },
        {
          id: `cca27f49-2674-4647-8c7f-68c825dd5ca9`,
          name: `Tough`,
          abilityImprovement: {ability: Abilities.Tough, bonus: 1, max: 3},
        },
        {
          id: `c5d609f0-27d1-48b0-8649-7058cc04416e`,
          name: `Weird`,
          abilityImprovement: {ability: Abilities.Weird, bonus: 1, max: 3},
        },
      ]
    }]
  },
}