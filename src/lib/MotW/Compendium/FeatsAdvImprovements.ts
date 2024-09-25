import {ChooseModType, type Feat, FeatType, PassiveTypes, Stats} from "./CompendiumTypes";
import {CharacterTypes, InputTypes} from "./UserInputs";

export let AdvImprovements: {[key: string]: Feat} = {
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
      chooseModType: ChooseModType.add,
      choose: 2,
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
Your retired \`hunter\` might, at your and \`The Keeper\`’s discretion, count as an \`ally\` for the other hunters.

You can create a new \`hunter\` to play.`,
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
      label: `Rating`, key: `cfa71209-cb45-42aa-bc71-8b051cfd5164`,
      inputType: InputTypes.FeatChoice,
      choose: 1,
      options: [
        {
          name: `Charm`,
          id: `ccf5a872-32ee-4039-a3b5-14548fed9783`,
          offsetStat: {ability: Stats.Charm, offset: 1, max: 3},
        },
        {
          name: `Cool`,
          id: `b8b215ea-7ae4-4a63-9c6b-2dca7ef67dae`,
          offsetStat: {ability: Stats.Cool, offset: 1, max: 3},
        },
        {
          name: `Sharp`,
          id: `58f0ef31-72f6-46d7-abb4-6a30d99119f4`,
          offsetStat: {ability: Stats.Sharp, offset: 1, max: 3},
        },
        {
          name: `Tough`,
          id: `cca27f49-2674-4647-8c7f-68c825dd5ca9`,
          offsetStat: {ability: Stats.Tough, offset: 1, max: 3},
        },
        {
          name: `Weird`,
          id: `c5d609f0-27d1-48b0-8649-7058cc04416e`,
          offsetStat: {ability: Stats.Weird, offset: 1, max: 3},
        },
      ],
    }]
  },
  
  // The Chosen
  AlteredDestiny: {
    name: `AlteredDestiny`,
    id: `5091d1c0-5100-44f2-a7de-bcb39134a8f3`,
    playbooks: [`94a658a0-f5dc-4e4b-a1ec-1b322b08d78f`], // The Chosen
    description: `Delete one of your **Doom Tags** and (optionally) one of your **Heroic Tags**.
You have managed to alter your destiny.`,
    modChooseInput: [
      {
        inputKey: `d285daf2-ac00-4e30-b27c-6f688eb10a90`, // Doom Tags
        chooseModType: ChooseModType.remove,
        choose: 1,
      },
      {
        inputKey: `966fccaf-47b3-40dd-957f-42b63ae57ae8`, // Heroic Tags
        chooseModType: ChooseModType.remove,
        choose: 0,
        chooseMax: 1,
      }
    ]
  },
  
  // The Divine
  NewMission: {
    name: `A New Mission`,
    id: `581e1cf3-5a08-4a88-b345-7eeb3ba6930a`,
    playbooks: [`9e9f712c-54d9-4193-b7ad-48c64f7ec9dc`], // The Divine
    description: `Change your **Mission**. Select a different **Mission** from the normal options,
or (with the Keeper's agreement) a new mission of your own creation.`,
    
    modChooseInput: [{
      inputKey: `e4a070c7-fef2-4d60-9ebe-87d67c83fac1`, // Mission
      chooseModType: ChooseModType.replace,
      choose: 1,
      allowCustom: true,
    }]
  },
  
  // The Gumshoe
  GumshoeAlly: {
    name: `Trusted Contact`,
    id: `c02ff2b3-a5c4-4bd6-9e31-9369c9d07b3a`,
    playbooks: [`12bc1318-24c7-4402-b9bb-be0698c4ed99`], // The Gumshoe
    description: `Turn one of your contacts into an ally`,
    inputs: [{
      label: `Ally Contact`, key: `2d01725b-0f29-4117-b3d3-6c65e5411d44`,
      inputType: InputTypes.Character,
      startingType: CharacterTypes.Ally,
    }],
  },
  
  // The Hex
  AdvRotes: {
    name: `Take Another Two Rotes`,
    id: `4281bada-8c4a-4df4-9791-a38385ccbf73`,
    playbooks: [`23bdadbc-b690-4baa-8d96-7c791b4d66da`], // The Hex
    prerequisiteFeats: [`d1ab9d1e-e475-41e8-9954-be66137c5b53`, `65cff63f-1d3e-4fdf-8ba8-7c72daca9b88`], // Take a Rote 1 & 2
    description: `Gain another two **Rotes**.`,
    addRotes: 2,
  },
  AdvancedHexMove: {
    name: `Advanced Hex Move`,
    id: `e05140ed-63c7-43c7-b3f3-8a8d429a4076`,
    playbooks: [`23bdadbc-b690-4baa-8d96-7c791b4d66da`], // The Hex
    description: `Choose one of the two **Advanced Hex Move** options.`,
    inputs: [{
      label: `Advanced Move`, key: `a3bda7f6-327a-42d9-8de0-08d7e47ad441`,
      inputType: InputTypes.FeatChoice,
      choose: 1,
      options: [
        {
          name: `Apotheosis`,
          id: `8117bd37-52ae-40ed-b04d-5f0d321a571d`,
          description: `You become a terrifying fount of mystical power and can lose control in the face of harm or loss.`,
          longDescription: `You become a terrifying fount of mystical power. Once per mystery, after you suffer loss or
harm, you may enter a state where you have both immense power and zero interest in the well-being of other people.
While in this state, you can fly, use \`+Weird\` to \`kick some ass instead\` of \`+Tough\` (using innate magic as a
3-harm weapon with whatever properties you choose), ignore the component costs of your rotes, ignore one requirement of
every spell you cast with use magic, and you have +1 \`ongoing\` to do everything. On the other hand, you outright
cannot use the \`protect someone\` move, you have all the **Temptations**, and you have to indulge them whenever a good
opportunity presents itself. When you try to resist a **temptation**, roll \`+Cool\`.
On a 10+, your apotheosis ends.
On a 7-9, it ends with you doing something dangerous or cruel.
On a miss, it ends only after you harm someone (or something) you love.`,
          // TODO: Convert the above into a mess of stuff.
        },
        {
          name: `Synthesis`,
          id: `59862ed9-6f56-43b3-aa12-9303b75574b8`,
          description: `Lose your **Temptations** and gain \`experience\` when you \`help out\` or \`protect someone\``,
          longDescription: `You manage to conciliate your dark power with your moral impulses. You lose your **Temptation**.
Whenever you use magic to \`help out\` or \`protect someone\`, you mark \`experience\`. Mark a second \`experience\` if
you do it at the expense of your own safety.`,
          // TODO: Convert the above into a mess of stuff.
        },
      ]
    }],
  },
  
  // The Initiate
  SectLeader: {
    name: `Sect Leader`,
    id: `61323ff6-e547-4782-a35c-fd6778390e90`,
    playbooks: [`a78c7ee1-eb8d-4622-adeb-22d9d87169b5`], // The Initiate
    description: `You have become the leader, or the effective leader, of the whole **Sect**.`,
    passives: [{
      type: PassiveTypes.Social,
      description: `You are the leader, or the effective leader, of the whole **Sect**.`,
    }]
  },
  
  // The Monstrous
  CurseFree: {
    name: `Curse Free`,
    id: `8f6278ce-fd92-46a8-923d-46a0e0f927e0`,
    playbooks: [`a5f796af-dd20-4ee0-8920-18b80e20ec24`], // The Monstrous
    description: `Free yourself from the curse of your kind. Your **Curse** no longer applies, but you lose 1 \`Weird\`.`,
    offsetStat: {
      ability: Stats.Weird,
      offset: -1,
    },
    modChooseInput: [{
      inputKey: `2a910664-137d-4452-86ed-4c55e849a820`, // Curse
      chooseModType: ChooseModType.remove,
      choose: 1,
    }]
  },
  MonstrousRetirement: {
    name: `Monstrous Retirement`,
    id: `6a5648fb-2eb7-43b2-8195-7289398c6eca`,
    playbooks: [`a5f796af-dd20-4ee0-8920-18b80e20ec24`], // The Monstrous
    description: `You turn evil (again.) Retire your \`hunter\`. They become one of \`The Keeper\`'s threats.`,
    longDescription: `Your \`hunter\` has become evil or returned to evil.

\`The Keeper\` takes over playing the \`hunter\` and it becomes one of \`The Keeper\`'s threats that you could face.

You can create a new \`hunter\` to play.`,
  },
  
  // The Professional
  PulledSomeStrings: {
    name: `Pulled Some Strings`,
    id: `f7e39afc-98cb-44a6-adeb-72da46a9ef0c`,
    playbooks: [`58924c0d-c015-4fcd-8fd9-ca75f12fd019`], // The Professional
    description: `Get some or all of the other \`hunters\` hired at your **agency**.`,
    longDescription: `Get some or all of the other players' hunters hired by your agency.
They get the **deal with the agency** move, as well as a **salary** and **benefits**.`,
    // TODO: How would we do this?
  },
  
  // The Searcher
  WhereItAllBegan: {
    name: `Where It All Began`,
    id: `828cae7d-0645-493f-b46c-8eaed45f1a8a`,
    playbooks: [`f7b73a9a-6447-42f8-b373-b71341bdad99`], // The Searcher
    description: `Finally get the answers you seek. Your **First Encounter** is centered and answered in the next mystery.`,
    longDescription: `Resolve your **First Encounter**. Tell \`The Keeper\` to make the next mystery about your **First Encounter**.
The mystery should put to rest the \`hunter\`'s remaining questions about their **First Encounter**
(although there are sure to be new threads to investigate after...)`,
  },
  
  // The Snoop
  Superstar: {
    name: `Superstar`,
    id: `938d7fbe-1e7a-4431-b428-1fae3786f86e`,
    playbooks: [`cfecc496-d1c1-4b30-af48-0f3f41cd02c0`], // The Searcher
    description: `Make it big. You're a superstar now!`,
    passives: [{
      type: PassiveTypes.Social,
      description: `You are a **Superstar** now.`,
    }]
  },
  
  // The Spell-Slinger
  AdvancedCombatMagic: {
    name: `Advanced Combat Magic`,
    id: `4fe2a1b6-503d-4a91-a39d-f00d86cce35e`,
    playbooks: [`3f493473-f122-4255-8b19-3635908b2664`], // The Spell-Slinger
    prerequisiteMoves: [`d400a36e-7458-47ef-9f78-c67efd3dcb61`], // Improved Combat Magic
    description: `Take another **Combat Magic** pick.`,
    modChooseInput: [{
      inputKey: `2fc056ef-1794-4493-aecb-4fd855c4337f`, // Combat Magic
      chooseModType: ChooseModType.add,
      choose: 1,
    }]
  },
  ResourcefulCaster: {
    name: `Resourceful Caster`,
    id: `b2f0ee9b-fc2f-4bd5-8d5c-deb04540a732`,
    playbooks: [`3f493473-f122-4255-8b19-3635908b2664`], // The Spell-Slinger
    prerequisiteFeats: [`ad31fd43-9c0a-48b1-819f-23b66d89d11e`], // Tools and Techniques
    description: `You may get rid of one **Tools and Techniques** requirement.`,
    modChooseInput: [{
      inputKey: `5a82730e-9ed6-4581-a3dd-f99a7dfd9e87`, // Tools and Techniques
      chooseModType: ChooseModType.remove,
      choose: 1,
    }]
  },
  
  // The Spooktacular
  Ringmaster: {
    name: `Ringmaster`,
    id: `f4fc3ae8-f374-40a4-bd17-a145f0144965`,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    description: `Get your own traveling show.`,
    longDescription: `You have your own traveling show. It may be that you took over your old one or started one anew.`,
    passives: [{
      type: PassiveTypes.Social,
      description: `You have your own traveling show.`,
    }]
  },
  
  // The Spooky
  DarkCircumvention: {
    name: `Dark Circumvention`,
    id: `2a453c8d-c995-4903-a364-c432c8ecd902`,
    playbooks: [`1dccf639-8ee6-457e-a2b4-ea2ae9a0bd1a`], // The Spooky
    description: `You discover how to use your powers at a lower price. Delete one **Dark Side** tag.`,
    modChooseInput: [{
      inputKey: `9c21ebec-8035-43a4-8157-5f0c1f6f0e6c`, // Dark Side
      chooseModType: ChooseModType.remove,
      choose: 1,
    }]
  },
  
  // The Wronged
  EndOfTheRoad: {
    name: `End of the Road`,
    id: `6594a511-257f-4bfd-bda3-06dcc43a0a8e`,
    playbooks: [`36e0df53-1690-46cf-a59e-56ef397d108d`], // The Wronged
    description: `You track down the specific monster(s) responsible for your loss as the next \`mystery\`.`,
    longDescription: `You track down the specific monster(s) responsible for your loss.

Tell \`The Keeper\` to make the next mystery about them.`,
  },
  VengefulTransference: {
    name: `Vengeful Transference`,
    id: `c2330315-7b21-4755-9b86-ebcb12807c54`,
    playbooks: [`36e0df53-1690-46cf-a59e-56ef397d108d`], // The Wronged
    description: `Pick a new target for **I Know My Prey**.`,
    longDescription: `Change the target of your vengeful rage. Pick a new monster breed:
**I Know My Prey** now applies to them instead.`,
    
    showInputs: [`b1628560-6666-4b6f-904a-aa72b165e6a2`], // My Prey
  },
};

export let AdvImprovementsLookup = Object.fromEntries(Object.values(AdvImprovements).map(f => [f.id, f]));