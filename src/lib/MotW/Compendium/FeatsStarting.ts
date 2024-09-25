import {ChooseModType, type Feat, FeatType, PassiveTypes, Stats} from "./CompendiumTypes";
import {ItemTag} from "./Tags";
import {BystanderTypes, CharacterTypes, InputTypes} from "./UserInputs";

export let StartingFeats: {[key: string]: Feat} = {
  BasicMoves: {
    name: `Basic Moves`,
    id: `389c473f-8500-4758-b0ab-7c013b5bdf8c`,
    featType: FeatType.Background,
    
    description: `You have all the \`basic moves\`.`,
    
    inputs: [{
      label: `Weird Move`, key: `daf59478-6a1a-43c5-b71a-d86ae854b076`,
      subLabel: `The Default 'Weird Move' is '\`Use Magic\`'.

If '\`Use Magic\`' doesn't fit your character concept, you can optionally replace it with an alternative weird move.

Note: For some \`playbooks\`, the alternative weird moves may not gain the same bonuses and benefits that \`use magic\` does.`,
      inputType: InputTypes.FeatChoice,
      choose: 1,
      defaults: [`9dc87b99-85d0-4436-89aa-5e6cb65f7e86`], // Use Magic
      options: [
        {
          name: `Use Magic`,
          id: `9dc87b99-85d0-4436-89aa-5e6cb65f7e86`,
          actions: [{
            name: `Use Magic`,
            id: `ae7216e7-d5d0-4858-9469-9c3a04f47844`,
            ability: Stats.Weird,
            description: `Describe what you're trying to achieve and how you will do the spell. \`The Keeper\` may add stipulations.`,
            longDescription: `When you **use magic**, say what you're trying to achieve and how you do the spell.

\`The Keeper\` may stipulate that:
* The spell requires weird materials.
* The spell will take 10 seconds, 30 seconds, or 1 minute to cast.
* The spell requires ritual chanting and gestures.
* The spell requires you to draw arcane symbols.
* You need one or two people to help cast the spell.
* You need to refer to a tome of magic for the details.`,

            miss: `\`The Keeper\` can make a hard move against you. Your spell will likely fail or go awry.`,
            successHeader: `
Choose the effect of your magic:
* Inflict 1 \`harm\` \`#ignore-armour\` \`#magic\` \`#obvious\`.
* Enchant a weapon. It gets +1 \`harm\` and is \`#magic\`.
* Do one thing that is beyond human limitations.
* Bar a place or portal to a specific person or a type of creature.
* Trap a specific person, minion, or monster.
* Banish a spirit or curse from the person, object, or place it inhabits.
* Summon a monster into the world.
* Communicate with something that you do not share a language with.
* Observe another place or time.
* Heal 1 **Harm** from an injury, cure a disease, or neutralize a poison.`,
            mixedSuccess: `
It worked imperfectly. Also choose a glitch. The **Keeper** will explain the full details of the glitch.
* The effect is weakened.
* The effect is of short duration.
* You take 1 **Harm** (**ignore-armour**.)
* The magic draws immediate, unwelcome attention.
* It has a problematic side effect`,
          }]
        },
        {
          name: `Empath`,
          id: `39c2a0cb-833f-4fe7-b462-426c835928a4`,
          actions: [{
            name: `Empath`,
            id: `5bd60cfb-0fe1-4b8a-a606-a665bb4a660c`,
            ability: Stats.Weird,
            description: `Open your brain to feel emotions of something in front of you.`,
            longDescription: `You can use this move on anything with emotions, but the less human they are, the less safe it is for you.
If the emotions are especially strong or alien, you might need to \`act under pressure\`.`,

            miss: `\`The Keeper\` can make a \`hard move\` against you. You are overwhelmed by emotions.`,
            mixedSuccess: `You gain only a hazy impression of their current emotional state and intentions.`,
            solidSuccess: `You gain a clear impression of their current emotional state and intentions. Take +1 \`forward\` when acting on this knowledge.`,
          }],
          modMoves: [{
            applyToMoves: [`*`],
            modRoll: 1,
            modCondition: `Apply to the first relevant roll made after getting a 10+ with Empath.`,
          }]
        },
        {
          name: `Illuminated`,
          id: `be60197e-1ee4-42d9-9962-b7260594fbbe`,
          actions: [{
            name: `Illuminated`,
            id: `e12b2b89-6e19-43bc-a70d-6e9cdb94b77c`,
            ability: Stats.Weird,
            description: `Telepathically ask the **Secret Masters** for aid.`,

            miss: `\`The Keeper\` can make a hard move against you. The **Secret Masters**' reply is terrible, garbled, or somehow dangerously wrong.`,
            mixedSuccess: `The **Secret Masters** need you to complete a task for them. Once it is done, they reveal a key fact, clue, or technique that will help you.`,
            solidSuccess: `The **Secret Masters** reveal a key fact, clue, or technique that will help you`,
          }]
        },
        {
          name: `No Limits`,
          id: `59d0d20d-8222-4928-9530-867537ebedd1`,
          actions: [{
            name: `No Limits`,
            id: `4f04c33e-f0e3-4f83-b995-c033ac1a518c`,
            ability: Stats.Weird,
            description: `Push your physical body past its limits.`,
            longDescription: `Push your physical body past its limits to the limit of human physical possibility.

For the purposes of this move, “physical possibility” means “conceivably possible for a human."

For example:
* **Physically Possible:** Lift an SUV, Jump over a truck, Punch through a wall.
* **Not Physically Possible:** Lift a building, Fly, Punch a blast of energy at a foe.`,

            miss: `\`The Keeper\` can make a hard move against you. Something goes horribly wrong.`,
            successHeader: `Your body obeys your will to the limits of physical possibility, for a moment.`,
            mixedSuccess: `Choose one additional consequence:
* Suffer 1 **Harm**.
* Take -1 forward.
* You need to rest right now.`,
            successFooter: `
For the purposes of this move, “physical possibility” means “conceivably possible for a human."

For example:
* **Physically Possible:** Lift an SUV, Jump over a truck, Punch through a wall.
* **Not Physically Possible:** Lift a building, Fly, Punch a blast of energy at a foe.`,
          }]
        },
        {
          name: `Past Lives`,
          id: `00dcbb31-c8bd-43f6-b092-2e9f2188552a`,
          actions: [{
            name: `Past Lives`,
            id: `e768eb52-feda-486f-956d-3822fa7848be`,
            ability: Stats.Weird,
            description: `Channel your previous incarnations to discover something.`,
            longDescription: `Channel your previous incarnations to discover something. Pose your questions to your past selves, then roll.

Past Lives questions:
* What did a past life discover about _____?
* How did a past life deal with _____?
* What important hidden secret can a past life show me the way to?
* What did a past life learn too late to help them?
* What does a past life advise me to do now?`,

            miss: `\`The Keeper\` can make a hard move against you and a past life takes over for a while`,
            mixedSuccess: `A past life has a little experience with this. \`The Keeper\` will answer only one of the questions:`,
            solidSuccess: `A past life has something useful to offer. \`The Keeper\` will answer two of the questions:`,
            successFooter: `* What did a past life discover about _____?
* How did a past life deal with _____?
* What important hidden secret can a past life show me the way to?
* What did a past life learn too late to help them?
* What does a past life advise me to do now?`,
          }]
        },
        {
          name: `Sensitive`,
          id: `900f37ab-615d-46e6-b369-0d14e30a1428`,
          actions: [{
            name: `Sensitive`,
            id: `0ef9f128-f877-49f6-91b2-1c9e04850f4a`,
            ability: Stats.Weird,
            description: `Open your mind to the psychic environment.`,

            miss: `\`The Keeper\` can make a hard move against. Your brain makes contact with something dangerous.`,
            mixedSuccess: `You gain a hazy impression about something important.`,
            solidSuccess: `You gain a definite impression (a vision, tangible aura, overheard thought, etc) about something important.`,
          }]
        },
        {
          name: `Trust Your Gut`,
          id: `7e61679f-4b97-4a21-b2ea-2b1ad3779410`,
          actions: [{
            name: `Trust Your Gut`,
            id: `22905bf8-71e5-453e-931c-9c8041fc4e7a`,
            ability: Stats.Weird,
            description: `Consult your instincts about what to do next.`,

            miss: `\`The Keeper\` can make a hard move against. Your instincts lead you into danger.`,
            mixedSuccess: `\`The Keeper\` will tell you a general direction to go. Take +1 \`forward\` as you explore that.`,
            solidSuccess: `\`The Keeper\` will tell you where you should go. Wherever that is, it will be important. You get +1 \`ongoing\` on the way to this place.`,
          }],
          modMoves: [{
            applyToMoves: [`*`],
            modRoll: 1,
            modCondition: `Apply while you are on your way to where your gut is leading. (On 7-9 you can only apply it once.)`,
          }]
        },
        {
          name: `Telekinesis`,
          id: `3b3ccc4b-4ef6-43f7-8748-bd71f6e224a1`,
          autoActions: [{
            name: `Minor Telekinesis`,
            id: `231dd633-f244-49dd-ba71-74ec957e1a83`,
            description: `Move something smaller than a person with your mind.`,
            longDescription: `You can move something smaller than a person with your mind.

You don't have much control, and you can't move it strongly enough to hurt anything.`,
          }],
          actions: [{
            name: `Telekinesis`,
            id: `dca44976-2a65-425a-97fd-2ef2e6474f58`,
            ability: Stats.Weird,
            description: `Fling something with your mind.`,

            miss: `\`The Keeper\` can make a hard move against. Something goes horribly wrong.`,
            mixedSuccess: `You move it but it hurts. Choose one option and mark 2 \`harm\`.`,
            solidSuccess: `You move it but it hurts a little. Choose two options and mark 1 \`harm\`.`,
            successFooter: `Telekinesis options (anything not picked is not true):
* Something is held fast.
* Something is hurt 2 \`harm\` \`#smash\`.
* Something catches fire.
* You can fling something bigger than a person.
* You keep it basically under your control.
* You suffer 1 less \`harm\`.`,
          }]
        },
        {
          name: `Weird Science`,
          id: `96d19189-33aa-4b81-b5c3-d2385e404d18`,
          actions: [{
            name: `Weird Science`,
            id: `8113df8e-c21f-417f-94b9-6a1beb0b88c4`,
            ability: Stats.Weird,
            description: `Create or adapt a device to analyze or deal with strangeness.`,
            longDescription: `Depending on your success level, you may have additional requirements to complete this move, such as:
* It needs a rare and/or weird material.
* It won't be very reliable.
* It requires huge amounts of power or fuel.
* It will take a long time to get it working.
* It won't work exactly as you intended.
* You'll need help (beyond the hunters on your team) to finish it.`,

            miss: `Something goes horribly wrong. You will still able to create your device, but \`The Keeper\` picks three requirements.`,
            mixedSuccess: `Pick one requirement and \`The Keeper\` picks a second one:`,
            solidSuccess: `Pick two requirements:`,
            successFooter: `**Weird Science** requirements:
* It needs a rare and/or weird material.
* It won't be very reliable.
* It requires huge amounts of power or fuel.
* It will take a long time to get it working.
* It won't work exactly as you intended.
* You'll need help (beyond the hunters on your team) to finish it.`,
          }]
        },
      ]
    }],
    
    autoActions: [
      {
        name: `First Aid`,
        id: `b111b57f-8748-4041-bd9b-5b5e2b976f18`,
        description: `Take a few minutes to heal 1 \`harm\` of a single wound or condition, and possibly \`stabilize\` a patient.`,
        longDescription: `Take a few minutes to heal 1 \`harm\` of a single wound or condition.
If the patient ends up with less than 3 total \`harm\`, they are \`stabilized\`.

The patient cannot benefit from this move again until there is a new injury or condition to treat.`,
      },
      {
        name: `Use Big Magic`,
        id: `8a86ba3b-1bdc-4692-be8d-65af8cbbf86e`,
        description: `Tell \`The Keeper\` the **big magic** effect you want. They will describe the requirements.`,
        longDescription: `
Perform this move when you don't have the '\`Use Magic\`' move or wish for an effect greater than '\`Use Magic\`' offers.

Tell \`The Keeper\` the **big magic** you want to do.
\`The Keeper\` will provide requirements for the magic. Once the requirements are met and the magic is cast,
the **big magic** takes effect with no final roll required.

Example **Big Magic** Requirements \`The Keeper\` may impose:
* You need to spend a lot of time (days or weeks) researching the magic ritual.
* You need to experiment with the spell - there will be lots of failures before you get it right.
* You need some rare and weird ingredients and supplies.
* The spell will take a long time (hours or days) to cast.
* You need a lot of people (2, 3, 7, 13, or more) to help.
* The spell needs to be cast at a particular place and/or time.
* You need to use magic as part of the ritual, perhaps to summon a monster, communicate with something, or bar the portal you opened.
* It will have a specific side-effect or danger.`
      },
    ],
    actions: [
      {
        name: `Kick Some Ass`,
        id: `6d3f9e16-a230-4478-9481-853c90ff4cec`,
        description: `Get into a fight and kick some ass.`,

        ability: Stats.Tough,
        showAttacks: true,

        miss: `You fail to harm your target. \`The Keeper\` can make a hard move against you. For example, whatever you're fighting may inflict greater \`harm\` on you.`,
        successHeader: `You and whatever you're fighting inflict \`harm\` on each other.`,
        solidSuccess: `Choose one extra effect:
* Take +1 \`forward\ by *gaining the advantage*.
* Give +1 \`forward\` to another \`hunter\` in the fight.
* Inflict +1 \`harm\`.
* Suffer -1 \`harm\`.
* Force the target where you want them.`,
        resultFooter: `The amount of \`harm\` you take is based on the established dangers in the game. That usually means your enemy inflicts their attack's \`harm\` rating on you and you inflict the \`harm\` rating of your weapon.`,
      },
      {
        name: `Act Under Pressure`,
        id: `bfdfd9b3-d5fa-4517-8d5e-20013364d7b0`,
        description: `Act under pressure to escape or accomplish a goal.`,

        ability: Stats.Cool,

        miss: `\`The Keeper\` can make a hard move against you. You have likely failed to do what you set out to do.`,
        mixedSuccess: `\`The Keeper\` is going to give you a worse outcome, a hard choice, or a price to pay.`,
        solidSuccess: `You successfully do what you set out to.`,
      },
      {
        name: `Help Out`,
        id: `2c7dd11e-b12b-4a02-b109-41e7daf65549`,
        description: `Help another \`hunter\`.`,

        ability: Stats.Cool,

        miss: `\`The Keeper\` can make a hard move against you. You likely failed to help and possibly put yourself and/or them at risk.`,
        successHeader: `Your help grants them +1 to their roll.`,
        mixedSuccess: `Unfortunately, you will also be exposed to trouble or danger if they roll low.`,
      },
      {
        name: `Investigate a Mystery`,
        id: `1b0ccc41-de6e-45dc-9f9f-bb1d7d33a447`,
        description: `Investigate the scene to get answers.`,

        ability: Stats.Sharp,

        miss: `\`The Keeper\` can make a hard move against you. You likely learn nothing new about the mystery and may have drawn unwanted attention or put yourself at risk.`,

        mixedSuccess: `Ask \`The Keeper\` 1 of the **Investigation Questions**:`,
        solidSuccess: `Ask \`The Keeper\` 2 of the **Investigation Questions**:`,
        successFooter: `Investigation Questions
* What happened here?
* What sort of creature/phenomena is it?
* What can it do?
* How is it doing this?
* What can hurt, fix, cure, or slow it down?
* Where did it go or what will be affected next?
* What made it move on, abate, or transfer?
* What was it going to do?
* How far does this effect reach?
* What is being concealed here?`,
      },
      {
        name: `Manipulate Someone`,
        id: `d245fc16-53f7-40bd-bdbb-45cde437adab`,
        description: `Sway someone to do something (after giving them a reason to do it.) \`Monsters\` and \`minions\` cannot normally be manipulated.`,

        ability: Stats.Charm,

        miss: `\`The Keeper\` can make a hard move against you. They will likely not do what you asked of them. Your failure could lead to further complications.`,

        mixedSuccess: `They'll do it, but only if you do something for them right now to show that you mean it. If you asked too much, they'll tell you what, if anything, it would take for them to do it.`,
        solidSuccess: `They'll do what you asked for the reason you gave them. If you asked too much, they'll tell you the minimum it would take for them to do it (or if there's no way they'd do it).`,
      },
      {
        name: `Manipulate A Hunter`,
        id: `1d8097c8-90bc-485e-90a0-0eb9e94d0959`,
        description: `Sway a fellow \`hunter\` to do something (after giving them a reason to do it.)`,

        ability: Stats.Charm,

        miss: `It's up to that \`hunter\` to decide how badly you offend or annoy them. They gain one \`experience\` if they decide not to do what you asked.`,

        mixedSuccess: `They gain one \`experience\` if they do what you ask.`,
        solidSuccess: `If they do what you ask they gain one \`experience\` and get +1 \`forward\`.`,
      },
      {
        name: `Protect Someone`,
        id: `48664b18-63e2-47fb-8363-ddcbefabe02e`,
        description: `Prevent \`harm\` to another character or object.`,

        ability: Stats.Tough,

        miss: `\`The Keeper\` can make a hard move against you. You may fail to protect them or suffer \`harm\` or a complication.`,

        mixedSuccess: `You protect them okay, but you'll suffer some or all of the \`harm\` they were going to get.`,
        solidSuccess: `You protect them okay, but you'll suffer some or all of the \`harm\` they were going to get.

Choose an extra effect:
* All impending danger is now focused on you.
* Hold the enemy back.
* Suffer -1 \`harm\`.
* Inflict \`harm\` on the enemy.`,
        
        showAttacks: true, // TODO: Only show on 10+?
      },
      {
        name: `Read A Bad Situation`,
        id: `f749882e-91f9-4c81-a14f-40a9fae2ac64`,
        description: `Look around, reading a bad situation for more information.`,

        ability: Stats.Sharp,

        miss: `You learn nothing about the situation or things get more complicated.`,

        mixedSuccess: `Ask \`The Keeper\` 1 of the **Situation Questions**:`,
        solidSuccess: `Ask \`The Keeper\` 3 of the **Situation Questions**:`,
        successFooter: `Situation Questions:
* What's my best way in?
* What's my best way out?
* Are there any dangers we haven't noticed?
* What's the biggest threat?
* What's most vulnerable to me?
* What's the best way to protect the victims?

If you act on the answers, you get +1 \`ongoing\` while the information is relevant.`,
      },
    ],
    modMoves: [{
      applyToMoves: [`*`],
      modRoll: 1,
      modCondition: `Apply while acting on relevant info you got when you \`read a bad situation\`.`
    }]
  },
  
  // ____ Playbook Moves ____
  
  Fate: {
    name: `Fate`,
    id: `2b49540f-3629-43db-a879-e8c81d436c86`,
    playbooks: [`94a658a0-f5dc-4e4b-a1ec-1b322b08d78f`], // The Chosen
    featType: FeatType.Background,

    description: `You get to decide what sort of fate is in store for you. You fate comes into play when you use \`luck\`.`,
    longDescription: `
Then pick two **Heroic Tags** and two **Doom Tags** for your fate. This is how your fate will unfold.
It's okay to pick contradictory tags: that means your fate is pulling you both ways.
Whenever you mark off a point of \`Luck\`, \`The Keeper\` will throw something from your fate at you.`,

    inputs: [
      {
        label: `Fate Origin`, key: `d12da8bc-b020-4db6-95d0-ecb2637c407d`,
        subLabel: `Choose how you found out about your fate.`,
        inputType: InputTypes.TextChoice,
        choose: 1,
        options: [
          `Nightmares and Visions`, `Some weirdo told you`, `An ancient cult found you`, `Sought out by your nemesis`,
          `Attacked by Monsters`, `Trained from birth`, `You found the prophecy`
        ],
        allowCustom: true
      },
      {
        label: `Heroic Tags`, key: `966fccaf-47b3-40dd-957f-42b63ae57ae8`, // TODO: Choice number altered by an improvement
        subLabel: `These will determine how your fate unfolds and come into play when you use \`luck\`.`,
        inputType: InputTypes.TextChoice,
        choose: 2,
        options: [
          `Sacrifice`, `You are the Champion`, `Visions`, `Secret training`, `Magical powers`, `Mystical inheritance`,
          `A normal life`, `True love`, `You can save the world`, `Hidden allies`, `The end of monsters`, `Divine help`
        ],
        allowCustom: false,
      },
      {
        label: `Doom Tags`, key: `d285daf2-ac00-4e30-b27c-6f688eb10a90`, // TODO: Total choices altered by an improvement
        subLabel: `These will also determine how your fate unfolds and come into play when you use \`luck\`.

You can pick **Doom Tags** that contradict the **Heroic Tags**. Doing so means your fate is pulling you both directions.`,
        inputType: InputTypes.TextChoice,
        choose: 2,
        options: [
          `Death`, `You can't save everyone`, `Impossible love`, `Failure`, `A nemesis`, `No normal life`,
          `Loss of loved ones`, `Treachery`, `Doubt`, `Sympathy with the enemy`, `Damnation`, `Hosts of monsters`,
          `The end of days`, `The source of Evil`
        ],
        allowCustom: false,
      },
    ],

    passives: [{
      type: PassiveTypes.Luck,
      description: `When you spend \`luck\`, \`The Keeper\` will soon bring your **Fate** into play.`,
    }]
  },
  CrookedBackground: {
    name: `Background`,
    id: `a73676f8-d7f9-4d32-98ac-aeda96b8ebc4`,
    playbooks: [`bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae`], // The Crooked
    featType: FeatType.Background,

    description: `You worked a less-than-legal job before you became a monster hunter.`,

    inputs: [
      {
        label: `Background`, key: `26b71dad-1eba-4097-b2d3-f21222bfc788`,
        inputType: InputTypes.FeatChoice,
        choose: 1,
        options: [
          {
            name: `Hoodlum`,
            id: `d2b2974c-b330-4c38-aa22-78648ae3f756`,
            
            description: `You can use +Tough (instead of +Charm) to **Manipulate Someone** with threats of violence.`,

            modMoves: [{
              applyToMoves: [`d245fc16-53f7-40bd-bdbb-45cde437adab`, `1d8097c8-90bc-485e-90a0-0eb9e94d0959`], // Manipulate Someone and Manipulate A Hunter
              alternateAbility: Stats.Tough,
              alternateAbilityCondition: `When you use threats of violence.`,
            }]
          },
          {
            name: `Burglar`,
            id: `c884798c-32f3-44ca-b9b5-e966c0151c0c`,

            description: `Sharp Move: You can break into a secure location.`,

            actions: [{
              name: `Burgle`,
              id: `5643320e-0315-4376-9341-1d78d95ad20f`,
              ability: Stats.Sharp,
              description: `Break into a secure location.`,

              miss: `\`The Keeper\` can take a hard move against you. You likely did not succeed in your burgle attempt.`,

              mixedSuccess: `Pick Two:`,
              solidSuccess: `Pick Three:`,
              successFooter: `
* You get in undetected.
* You can get out undetected.
* You don't leave a mess.
* You find what you are after.`,
            }]
          },
          {
            name: `Grifter`,
            id: `5c991827-9e8e-4533-ac32-32f49635f906`,
            
            description: `When you are about to **Manipulate Someone**, you can ask \`The Keeper\`, "What will convince this person to do what I want?"
\`The Keeper\` must answer honestly, but not necessarily completely.`,

            modMoves: [{
              applyToMoves: [`d245fc16-53f7-40bd-bdbb-45cde437adab`, `1d8097c8-90bc-485e-90a0-0eb9e94d0959`], // Manipulate Someone and Manipulate A Hunter
              footnote: `Before **Manipulate Someone**, you can ask, "What will convince this person to do what I want?"`,
            }]
          },
          {
            name: `Fixer`,
            id: `23f0898d-9dcb-411c-9c39-784fb4a5a4e2`,

            description: `You are good at finding a buyer, seller, or someone for-hire using **+Charm**.`,

            actions: [{
              name: `Fixer`,
              id: `a40e6264-36c0-4b34-b6c9-561c96d3fd83`,
              ability: Stats.Charm,
              description: `You are good at finding a buyer, seller, or someone for-hire using **+Charm**.`,

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
            name: `Assassin`,
            id: `1e123c89-81eb-4f7c-93a6-c7ca7fba088d`,

            description: `When you take your first shot at an unsuspecting target, do +2 **Harm**`,

            modAttack: [{
              name: `Assassin`,
              harmOffset: 2,
              condition: `Can apply when you take your first shot at an unsuspecting target`,
            }]
          },
          {
            name: `Charlatan`,
            id: `6772bfde-fda9-4ee6-afc4-a969475bf9d6`,

            description: `When you want people to think you are using magic or when you want to **Manipulate Someone** with fortune telling.
When you use **Manipulate Someone** with fortune telling, you may ask "What are they hoping for right now?" as a free question (even on a miss.)`,

            actions: [{
              name: `Magic Tricks`,
              id: `fc564b0c-93f0-4afd-a486-18fd22dc8efd`,
              ability: Stats.Cool,
              description: `Make people think you are using magic.`,

              miss: `\`The Keeper\` can take a hard move against you. You likely failed to convince them that you did magic.`,

              mixedSuccess: `You tripped up a couple of times. Someone may have noticed.`,
              solidSuccess: `Your audience is amazed and fooled by your illusion.`,
            }],
            modMoves: [{
              applyToMoves: [`d245fc16-53f7-40bd-bdbb-45cde437adab`, `1d8097c8-90bc-485e-90a0-0eb9e94d0959`], // Manipulate Someone and Manipulate A Hunter
              footnote: `When fortune telling, you may ask "What are they hoping for right now?" as a free question (even on a miss.)`,
              amendResults: {
                resultFooter: `If you were fortune telling, you may also ask "What are they hoping for right now?" as a free question.`
              }
            }]
          },
          {
            name: `Pickpocket`,
            id: `1e618c4e-b780-4948-8c25-ae60fffc6f26`,

            description: `Steal something small`,

            actions: [{
              name: `Pickpocket`,
              id: `d1ebc89d-fe64-4201-8401-6ee6a65ab172`,
              ability: Stats.Charm,
              description: `Steal something small`,

              miss: `\`The Keeper\` can take a hard move against you. You likely failed your pickpocket attempt.`,

              mixedSuccess: `Choose One:
* You don't grab it
* You grab the wrong thing
* They will remember you later`,
              solidSuccess: `You get it and they didn't notice you take it.`,
            }],
          }
        ],
      },
      {
        label: `Heat`, key: `728c3610-e754-4ba0-90c7-24358ca1624b`,
        inputType: InputTypes.FeatChoice,
        subLabel: `You didn't get here without making a few enemies. Pick at least two prompts and name the people involved.`,
        choose: 2,
        options: [ // TODO: These could maybe use better startingBystanderTypes
          {
            name: `A police detective has made it a personal goal to put you away.`,
            id: `b88349b0-b49d-47ba-a129-c1798c4267f3`,
            inputs: [{
              label: `Detective`, key: `a91da69a-1e19-4eb9-bcb0-c08820d8c4c0`,
              inputType: InputTypes.Character,
              startingType: CharacterTypes.Bystander,
              startingSubType: BystanderTypes.Detective,
            }]
          },
          {
            name: `You have a rival from your background who never misses a chance to screw you over.`,
            id: `ebcf8908-fec3-459d-a1a0-c81682805f3a`,
            inputs: [{
              label: `Rival`, key: `9a17d95e-ee92-4014-8bcf-b2763ac3002a`,
              inputType: InputTypes.Character,
              startingType: CharacterTypes.Bystander,
              startingSubType: BystanderTypes.Busybody
            }]
          },
          {
            name: `You pissed off a well-connected criminal and they'll do what they can to destroy you.`,
            id: `eeb4ad77-22c7-4904-abaf-63cd2eb20489`,
            inputs: [{
              label: `Criminal`, key: `ac874360-406d-4938-84eb-065298327fe6`,
              inputType: InputTypes.Character,
              startingType: CharacterTypes.Bystander,
              startingSubType: BystanderTypes.Busybody,
            }]
          },
          {
            // TODO: These all have bad names
            name: `You took advantage of someone (person or monster) with special powers.`,
            id: `e8bc6cdf-bdda-462e-92e2-322c7da86f8a`,
            inputs: [{
              label: `That Someone`, key: `797324bd-4096-414f-95e6-a1f38f1c0adb`,
              inputType: InputTypes.Character,
              startingType: CharacterTypes.Bystander,
              startingSubType: BystanderTypes.Busybody,
            }]
          },
          {
            name: `You betrayed an old partner in the middle of a job.`,
            id: `5579e44e-bf43-41c1-a261-aac300abf44a`,
            inputs: [{
              label: `Old Partner`, key: `1d4ed7f8-e3d7-4d4a-a263-f2668d33cfea`,
              inputType: InputTypes.Character,
              startingType: CharacterTypes.Bystander,
              startingSubType: BystanderTypes.Busybody,
            }]
          },
        ]
      },
      {
        label: `Discovered`, key: `da9ba856-9309-4c69-b014-89334c87900a`,
        inputType: InputTypes.FeatChoice,
        subLabel: `Pick how you discovered about the real underworld.

Keep this in mind when you select your moves, so that everything fits together.`,
        choose: 1,
        options: [
          {
            name: `The target of a job was a dangerous creature.`,
            id: `01dec569-1f26-4803-bee3-41165ccfa200`,
            featType: FeatType.SubFeat,

            inputs: [{
              label: `Target`, key: `cbe2cff9-91a8-48a8-ad07-b0b6636599f9`,
              inputType: InputTypes.TextChoice,
              choose: 1,
              options: [`Vampire`,`Werewolf`, `Troll`, `Reptiloid`],
              allowCustom: true,
            }],
          },
          {
            name: `You worked with someone who was more than they seemed.`,
            id: `b929576b-7842-49ab-ab8e-66645ba2409d`,
            featType: FeatType.SubFeat,

            inputs: [{
              label: `Accomplice`, key: `db134aba-25eb-42e6-86e7-6078af759ef8`,
              inputType: InputTypes.TextChoice,
              choose: 1,
              options: [`Vampire`,`Werewolf`, `Troll`, `Reptiloid`],
              allowCustom: true,
            }],
          },
          {
            name: `You were hired by something weird.`,
            id: `49e9812c-2502-4c38-a7e4-973da38c716a`,
            featType: FeatType.SubFeat,

            inputs: [{
              label: `Employer`, key: `fc2a8a4a-5abc-491b-b4ab-1f994e205842`,
              inputType: InputTypes.TextChoice,
              choose: 1,
              options: [`Immortal`,`God`, `Outsider`, `Witch`],
              allowCustom: true,
            }],
          },
          {
            name: `Things went south on a job. Partly 'cuz you ran into something.`,
            id: `df816f46-6849-4152-a7bb-2a3e1bbc2291`,
            featType: FeatType.SubFeat,

            inputs: [{
              label: `Encounter`, key: `6ab836dc-e2db-4bdb-b97a-1f72d31531b7`,
              inputType: InputTypes.TextChoice,
              choose: 1,
              options: [`Horde of Goblins`,`Hunger of Ghouls`, `a dream-eater`, `a salamander`],
              allowCustom: true,
            }],
          },
        ],
      }
    ],

    passives: [{
      type: PassiveTypes.Luck,
      description: `Whenever you spend \`luck\`, someone from your past will re-appear in your life. Soon.`,
    }]
  },
  Mission: {
    name: `Mission`,
    id: `2f980939-7d68-442c-a332-128136b4b7f6`,
    playbooks: [`9e9f712c-54d9-4193-b7ad-48c64f7ec9dc`], // The Divine
    featType: FeatType.Background,

    description: `You have been put on Earth for a purpose.`,

    inputs: [{
      label: `Mission`, key: `e4a070c7-fef2-4d60-9ebe-87d67c83fac1`, // Re-chosen in Adv. Improvement.
      inputType: InputTypes.TextChoice,
      choose: 1,
      options: [
        [`Adversary of the Divine`, `You are here to fight the schemes of an Adversary.`],
        [`Guardian of the End of Days`,`The End of Days approaches. Your role is to guide these \`Hunters\` and prevent it from coming to pass.`],
        [`Usher of the End of Days`, `The End of Days approaches. Your role is to guide these \`Hunters\` and ensure it comes to pass.`],
        [`Exiled`, `You have been exiled.
  
  You must work for the cause of Good without drawing attention from your brothers and sisters,
  as they are bound to execute you for your crimes.`],
        [`Apprentice of the Divine`, `One of the other \`Hunters\` has a crucial role to play in events to come.
  You must prepare them for their role, and protect them at any cost.`],
      ]
    }],

    passives: [{
      type: PassiveTypes.Luck,
      description: `When you spend \`luck\`, you get word that you must do something difficult for your **Mission**. It's urgent.`,
    }],
  },
  ExpertBackground: {
    name: `Background`,
    id: `6ee3d30e-dcf9-4e60-9364-2be9163f40c4`,
    playbooks: [`237dfbb5-fce4-46dd-8382-756982cf4cda`], // The Expert
    featType: FeatType.Background,
    
    description: `You have a long history of experience with monster hunting.`,

    passives: [{
      type: PassiveTypes.Luck,
      description: `When you spend \`luck\`, you discover something happening now is related to something you were involved in years ago.`,
    }]
  },
  Haven: {
    name: `Haven`,
    id: `237dfbb5-fce4-46dd-8382-756982cf4cda`,
    playbooks: [`237dfbb5-fce4-46dd-8382-756982cf4cda`], // The Expert
    featType: FeatType.Background,
    
    description: `You have set up a haven, a safe place to work.`,
    
    addHavens: 3,
  },
  FlakeBackground: {
    name: `Background`,
    id: `d9bdb9ad-dbf6-4c85-9517-1682a9db9d67`,
    playbooks: [`3ef37c00-3254-4af4-830a-9a21e7c6d02a`], // The Flake
    featType: FeatType.Background,
    
    description: `You see a vast web of conspiracies that no others can`,

    passives: [{
      type: PassiveTypes.Luck,
      description: `When you spend \`luck\`, pick an aspect of the current situation. \`The Keeper\` will tell you what other conspiracies that aspect connects to.`,
    }]
  },
  GumshoeBackground: {
    name: `Background`,
    id: `456589c6-453e-476a-9f4a-fcd847b0e883`,
    playbooks: [`12bc1318-24c7-4402-b9bb-be0698c4ed99`], // The Gumshoe
    featType: FeatType.Background,

    description: `You pursue the cases that sometimes others wouldn't even dream of chasing.`,

    passives: [{
      type: PassiveTypes.Luck,
      description: `When you spend \`luck\`, your next regular case will actually be a mystery for your hunter group, not a regular case at all (and the monster will focus its attention on you!)`,
    }]
  },
  GumshoeCode: {
    name: `Gumshoe Code`,
    id: `d08ea9e4-88fb-46d6-975e-1045575a4ea5`,
    playbooks: [`12bc1318-24c7-4402-b9bb-be0698c4ed99`], // The Gumshoe
    featType: FeatType.Background,

    description: `You adhere to a code that helps you \`manipulate someone\`, and protects you from possessions and charms.`,
    longDescription: `This **Code** defines your Gumshoe. Any time you violate your code, you forfeit:
* All **Code**-related **Moves** (**'The Postman Always Rings Twice'**, **'The Long Goodbye'**)
* The ability to spend **Luck** points.

These forfeits last either until the next mystery or until you make amends.

As long as you follow the **Code**, people will sense your sincerity. You gain the following:
* +1 \`ongoing\` to \`manipulate someone\`.
* Protection from being possessed or charmed by any sort of supernatural, alien, or demonic entity or item.`,

    inputs: [
      {
        label: `The Code`, key: `a746bcc2-3317-4002-9852-f63025bdabf9`, // Displayed in Luck, mods, and protections
        subLabel: `With the agreement of \`The Keeper\`, pick a one-sentence **Code** that your Gumshoe adheres to.

> Examples of Codes:
> * Murderers must be punished.
> * Monsters must be destroyed.
> * Innocents must be saved.
> * Laws must be enforced.
> * Evil must be exposed.
> * The weak must be protected from the powerful.`,
        inputType: InputTypes.Text,
        placeholder: `The weak must be protected from the powerful.`,
      },
      {
        label: `Code Broken`, key: `d424ec39-3d3b-4d9a-8cb9-49b7bc723d78`, // Displayed in Luck, mods, and protections
        inputType: InputTypes.Checks,
        max: 1,
        reset: 0,
        resetPerMystery: true,
      },
    ],

    passives: [
      {
        type: PassiveTypes.Luck,
        description: `If your code is broken, you cannot use luck.`,
        showInputs: [`a746bcc2-3317-4002-9852-f63025bdabf9`,`d424ec39-3d3b-4d9a-8cb9-49b7bc723d78`] // Code and Code Broken
      },
      {
        type: PassiveTypes.Protections,
        description: `While your code is unbroken, you cannot be possessed or charmed by any supernatural, alien, or demonic entity or item.`,
        showInputs: [`a746bcc2-3317-4002-9852-f63025bdabf9`,`d424ec39-3d3b-4d9a-8cb9-49b7bc723d78`] // Code and Code Broken
      }
    ],
    modMoves: [{
      applyToMoves: [`d245fc16-53f7-40bd-bdbb-45cde437adab`, `1d8097c8-90bc-485e-90a0-0eb9e94d0959`], // Manipulate Someone and Manipulate A Hunter
      modRoll: 1,
      modIgnoredViaInput: `d424ec39-3d3b-4d9a-8cb9-49b7bc723d78`, // Code Broken
      modCondition: `Not applied while your code is broken.`,
      footnote: `While your code is unbroken, you have +1 \`ongoing\` to \`manipulate someone\` and \`manipulate a hunter\`.`,
      footnoteInputs: [`a746bcc2-3317-4002-9852-f63025bdabf9`,`d424ec39-3d3b-4d9a-8cb9-49b7bc723d78`] // Code and Code Broken
    }],
  },
  HexBackground: {
    name: `Background`,
    id: `5d133dca-5cec-4f0d-913a-5e04de26e135`,
    playbooks: [`23bdadbc-b690-4baa-8d96-7c791b4d66da`], // The Hex
    featType: FeatType.Background,

    description: `Magic does not come natural to you. You worked for it. Pushing yourself, or your luck, can take its toll.`,

    passives: [{
      type: PassiveTypes.Luck,
      description: `When you spend \`luck\`, until the end of the \`mystery\`, backlash on your spells will be extra nasty.`,
    }]
  },
  Rotes: {
    name: `Rotes`,
    id: `725d4e16-4f2c-4eba-801e-ccf40ec2f0e9`,
    playbooks: [`23bdadbc-b690-4baa-8d96-7c791b4d66da`], // The Hex
    featType: FeatType.Background,

    description: `Through hard work, you've developed magical rotes. Rotes are more predictable and clean than regular \`use magic\`.`,
    longDescription: `Whenever you \`use magic\`, you can decide afterwards that a particular spell is a **rote** that you know.
Write down in detail what the spell does, and what it requires. You know how to cast it off the top of your head,
and you choose two requirements from this list:
* Magic words and ritual gestures.
* An object of power (wand, talisman, orb, staff, etc) which must be wielded.
* An expendable component such as sulfur, sage, or incense, which must be burned, blown, or scattered during the casting.
* Runes or symbols written or engraved on a surface (which must be prepared).
* A spilling of blood, which inflicts 1-harm upon you or a willing participant.

Give your new **rote** a name, and decide specifically what the requirements are (which words, gestures, objects,
symbols, and procedures are required). Unlike regular \`use magic\`, a **rote**'s cost and the consequences for failing
it are known to you in advance. After you cast it for the first time, treat each **rote** as a custom move—a specialised
version of \`use magic\`, which is built with \`The Keeper\`. Document what it does on a 10+, a 7-9, and a miss.
Also, a **rote** is a bit more powerful than a basic use magic spell: its glitches are less onerous and its effect
may be a little bigger.

Casting a **rote** requires you to have the needed items at hand and the ability to physically use them.
You roll \`+Weird\` to cast it, as you would when using magic normally.

#### Starting Rotes

You start out knowing up to one **rote**, which you can choose when creating your character or during play.

#### Rote Improvements

You can learn more by taking improvements—when you do, you can choose the new **rote** right away or in play.`,
    
    addRotes: 1,
  },
  Temptation: {
    name: `Temptation`,
    id: `8fcbf9e1-c853-4121-a97e-7089129cbad6`,
    playbooks: [`23bdadbc-b690-4baa-8d96-7c791b4d66da`], // The Hex
    featType: FeatType.Background,

    description: `You have a dangerous drive that you pursue, sometimes to the exclusion of your own safety.`,
    longDescription: `Whenever you give in to your **Temptation** and act accordingly, you mark \`experience\`.
You need to \`act under pressure\` to resist giving in to your **Temptation**, if a perfect opportunity presents itself;
if you fail this roll, you don't mark \`experience\` like you would have if you'd willingly acted out your desires.`,
    
    inputs: [
      {
        label: `Source`, key: `abb199a3-e9f2-4202-88c3-873076fd4f5c`,
        subLabel: `Did you **Temptation** drive you to magic, or did magic drive you to your **Temptation**?`,
        inputType: InputTypes.Text,
      },
      {
        label: `Temptation`, key: `e5543228-8f44-40bc-a9fb-8cd6fea6fece`, // Displayed by perks
        inputType: InputTypes.TextChoice,
        choose: 1,
        allowCustom: true,
        options: [
          `Vengeance: Use magic to inflict disproportionate retribution on someone who wronged you.`,
          `Power: Use magic to exert your dominance over another.`,
          `Addiction: Use magic to do what you could do without it.`,
          `Callousness: Use magic without regard for the safety of others.`,
          `Carnage: Use magic to inflict gruesome violence.`,
          `Secrets: Use magic to discover forbidden, dangerous knowledge.`,
          `Glory: Use magic to steal someone's thunder.`,
        ]
      }
    ],

    passives: [{
      type: PassiveTypes.Luck,
      description: `Whenever you give in to your **Temptation** and act accordingly, you mark \`experience\`.
If you resisted with '\`act under pressure\`' and failed, you don't mark \`experience\` like you would have if you'd willingly acted out your desires.`,
      showInputs: [`e5543228-8f44-40bc-a9fb-8cd6fea6fece`] // Temptation
    }],
    modMoves: [{
      // TODO: This is kinda sorta a separate move, in a way... hmm. Is there a way to wrap act under pressure?
      applyToMoves: [`bfdfd9b3-d5fa-4517-8d5e-20013364d7b0`], // Act Under Pressure
      footnote: `When a perfect opportunity presents itself, you need to \`act under pressure\` if you want to resist giving in to your **Temptation**.
If you choose to resist, you don't mark \`experience\` like if you had willingly acted out your desires.`,
      footnoteInputs: [`e5543228-8f44-40bc-a9fb-8cd6fea6fece`] // Temptation
    }]
  },
  Sect: {
    name: `The Sect`,
    id: `b10c02c4-e91d-4d37-8549-9f51ab415340`,
    playbooks: [`a78c7ee1-eb8d-4622-adeb-22d9d87169b5`], // The Initiate
    featType: FeatType.Background,

    description: `You are part of an ancient, secret order that slays monsters.`,

    inputs: [
      {
        label: `Sect Name`, key: `5cbd3dad-90f2-4340-b369-79c0a59e7c44`,
        inputType: InputTypes.Text,
        subLabel: `Name your sect, then answer each question below about the sect.`,
      },
      {
        label: `Where are they from?`, key: `5e562350-b6b3-47af-b571-6b6a2e30dcd0`,
        inputType: InputTypes.Text,
        placeholder: `England`
      },
      {
        label: `How old are they?`, key: `ca4fc5f4-b9e5-4028-901f-6ed879194e3a`,
        inputType: InputTypes.Text,
        placeholder: `2 years`
      },
      {
        label: `Are they religious?`, key: `b6790f22-aa3d-45b6-ad38-2de59785bd42`,
        inputType: InputTypes.Text,
        placeholder: `Catholic`,
      },
      {
        label: `Why do they stay secret?`, key: `1e2ffbaa-e35b-4eb3-8250-3a78402bb873`,
        inputType: InputTypes.Text,
        placeholder: `Extrajudicial slaying`,
      },
      {
        label: `How do they recruit?`, key: `58baaf7f-1054-4178-83e5-4f62d59cff45`,
        inputType: InputTypes.Text,
        placeholder: `"The Cross" internet forum`
      },
      {
        label: `Good Traditions`, key: `69ab3218-d78d-44b3-a0b7-045ed149ea36`,
        inputType: InputTypes.FeatChoice,
        subLabel: `\`The Keeper\` will use the good and bad traditions to determine the Sect's methods and actions.`,
        choose: 2,
        options: [
          {
            name: `Knowledgeable`,
            id: `30f9ec0f-3caa-4114-9879-7b637a8c78e4`,
            description: `Your Sect is Knowledgeable about the regular world.`,
            passives: [{
              type: PassiveTypes.Social,
              description: `Your Sect is Knowledgeable about the regular world.`,
            }]
          },
          {
            name: `Ancient Lore`,
            id: `219a874d-96e1-4d56-a73d-8c388e0c0358`,
            passives: [{
              type: PassiveTypes.Social,
              description: `Your Sect knows its Ancient Lore.`,
            }]
          },
          {
            name: `Magical Lore`,
            id: `481bcbac-b139-4130-b991-0f133042dd3d`,
            passives: [{
              type: PassiveTypes.Social,
              description: `Your Sect knows its Magical Lore.`,
            }]
          },
          {
            name: `Fighting Arts`,
            id: `855c2dba-9a94-496f-978e-1c2e40d67b5f`,
            description: `Your Sect knows its Fighting Arts. You can pick another Old-Fashioned Weapon.`,
            passives: [{
              type: PassiveTypes.Social,
              description: `Your Sect knows its Fighting Arts.`,
            }],
            modChooseInput: [{
              inputKey: `e7bf9a56-4b57-47a6-a551-b6d97ac83550`, // Gear > Old Weapons
              chooseModType: ChooseModType.add,
              choose: 1,
              totalChosenMax: 3,
            }],
          },
          {
            name: `Modernized`,
            id: `a6f76367-efbb-4d9d-b664-76434dd4d03b`,
            description: `Your Sect is more up to date with technology. You can select an additional Modern Weapon`,
            passives: [{
              type: PassiveTypes.Social,
              description: `Your Sect is more up to date with technology.`,
            }],
            modChooseInput: [{
              inputKey: `d3ff72fb-23b1-45fe-8386-2bd63e97764f`, // Gear > Modern Weapons
              chooseModType: ChooseModType.add,
              choose: 1,
              totalChosenMax: 2,
            }],
          },
          {
            name: `Chapters Everywhere`,
            id: `ef22e054-4e14-4396-8afb-e91e825f9153`,
            passives: [{
              type: PassiveTypes.Social,
              description: `Your Sect likely has a chapter nearby.`,
            }]
          },
          {
            name: `Secular Power`,
            id: `fd44494f-1641-4756-bf06-d1246169a330`,
            passives: [{
              type: PassiveTypes.Social,
              description: `Your Sect has some power in the secular world.`,
            }]
          },
          {
            name: `Flexible Tactics`,
            id: `983daf79-e03b-43e1-9d08-48fe847c75a0`,
            passives: [{
              type: PassiveTypes.Social,
              description: `Your Sect is flexible when it comes to tactics.`,
            }]
          },
          {
            name: `Open Hierarchy`,
            id: `25cfeb02-25d5-46f1-badd-922f800831fb`,
            passives: [{
              type: PassiveTypes.Social,
              description: `Your Sect is open about its hierarchy.`,
            }]
          },
          {
            name: `Integrated in Society`,
            id: `195e89bc-501a-4f25-a955-13fd2d71297e`,
            passives: [{
              type: PassiveTypes.Social,
              description: `Your Sect is integrated into society.`,
            }]
          },
          {
            name: `Rich`,
            id: `31f383e0-d28b-43bd-919e-e4562ece465c`,
            passives: [{
              type: PassiveTypes.Social,
              description: `Your Sect is rich.`,
            }]
          },
          {
            name: `Nifty Gadgets`,
            id: `8bfe0a85-508d-431a-9e2e-3ba90ee3f14a`,
            description: `Your Sect loves its nifty gadgets. You can select an additional Modern Weapon.`,

            passives: [{
              type: PassiveTypes.Social,
              description: `Your Sect loves its nifty gadgets.`,
            }],
            modChooseInput: [{
              inputKey: `d3ff72fb-23b1-45fe-8386-2bd63e97764f`, // Gear > Modern Weapons
              chooseModType: ChooseModType.add,
              choose: 1,
              totalChosenMax: 2,
            }],
          },
          {
            name: `Magical Items`,
            id: `65f41822-2f95-4e1e-96e7-79845f6df662`,
            passives: [{
              type: PassiveTypes.Social,
              description: `Your Sect has many magical items.`,
            }],
          },
        ],
      },
      {
        label: `Bad Traditions`, key: `991841d4-a7b0-4e62-afd3-5e6f97f11e2b`,
        inputType: InputTypes.FeatChoice,
        choose: 1,
        options: [
          {
            name: `Dubious Motives`,
            id: `c4776eb9-ad38-4806-8883-1dfcefd99057`,
            passives: [{
              type: PassiveTypes.Social,
              description: `Your Sect has dubious motives.`,
            }]
          },
          {
            name: `Tradition-bound`,
            id: `f9e1e1ea-247a-4dba-a3e0-28fdbbb056a6`,
            passives: [{
              type: PassiveTypes.Social,
              description: `Your Sect has a lot of traditions that it likes to stick to.`,
            }]
          },
          {
            name: `Short-sighted`,
            id: `f0750a05-9ee2-44cc-8875-62794d8d17c7`,
            passives: [{
              type: PassiveTypes.Social,
              description: `Your Sect is short-sighted.`,
            }]
          },
          {
            name: `Paranoid and secretive`,
            id: `1cd93667-8f8d-452d-9f33-0fbf5bf7cdd8`,
            passives: [{
              type: PassiveTypes.Social,
              description: `Your Sect is paranoid and secretive.`,
            }]
          },
          {
            name: `Closed hierarchy`,
            id: `6c93383f-c659-44bb-abd2-e9069e692185`,
            passives: [{
              type: PassiveTypes.Social,
              description: `Your Sect has a closed hierarchy.`,
            }]
          },
          {
            name: `Factionalized`,
            id: `26f16fb7-2e20-4afc-b6ff-03224fe2f90c`,
            passives: [{
              type: PassiveTypes.Social,
              description: `Your Sect has factions within it that have differing views.`,
            }]
          },
          {
            name: `Strict Laws`,
            id: `52651d29-6837-451c-a46f-f94266e327f9`,
            passives: [{
              type: PassiveTypes.Social,
              description: `Your Sect has strict laws that it abides.`,
            }]
          },
          {
            name: `Mystical Oaths`,
            id: `0924355d-eb21-402a-93ca-0e812af39291`,
            passives: [{
              type: PassiveTypes.Social,
              description: `Your Sect has mystical oaths.`,
            }]
          },
          {
            name: `Total Obedience`,
            id: `d9eebb40-1c1a-4fed-a6e7-79c410fa5574`,
            passives: [{
              type: PassiveTypes.Social,
              description: `Your Sect has a tradition of total obedience.`,
            }]
          },
          {
            name: `Obsolete Gear`,
            id: `f85c3fbf-a496-41ed-9a31-8092e50564a2`,
            description: `Your Sect has a tradition of using obsolete Gear. You can select an additional Old-Fashioned Weapon.`,

            passives: [{
              type: PassiveTypes.Social,
              description: `Your Sect has a tradition of using obsolete Gear.`,
            }],
            modChooseInput: [{
              inputKey: `e7bf9a56-4b57-47a6-a551-b6d97ac83550`, // Gear > Old Weapons
              chooseModType: ChooseModType.add,
              choose: 1,
              totalChosenMax: 3,
            }],
          },
          {
            name: `Poor`,
            id: `bf582633-1c12-4198-80aa-4321979e462e`,
            passives: [{
              type: PassiveTypes.Social,
              description: `Your Sect is poor.`,
            }]
          },
        ],
      },
    ],

    passives: [{
      type: PassiveTypes.Luck,
      description: `When you spend a point of **Luck**, something goes wrong for your **Sect**: an ill-advised project or a disastrous operation.`,
    }],
  },
  MonsterBreed: {
    name: `Monster Breed`,
    id: `66bf0e35-8b78-4543-a75b-048ad8b12ff2`,
    playbooks: [`a5f796af-dd20-4ee0-8920-18b80e20ec24`], // The Monstrous
    featType: FeatType.Background,

    description: `Choose your breed of monster and all that that entails.`,
    longDescription: `Create the monster you want to be. Whatever you choose defines your breed in the game.
Some classic monsters with suggestions for picks are listed below.
These are only suggestions: feel free to make a different version!

> * Vampire:
>   * Curse: Feed (blood or life-force).
>   * Natural Attacks: Life-drain or teeth with add +1 harm.
>   * Moves: Immortal, Unquenchable Vitality, or Mental Domination.
> * Werewolf:
>   * Curse: Vulnerability (silver).
>   * Natural Attacks: claws and teeth.
>   * Moves: Shapeshifter (wolf and/or wolf-man), Claws of the Beast, or Unholy Strength.
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
        label: `Classification`, key: `b9703ccd-9737-48fe-804e-7347e071d4fc`,
        inputType: InputTypes.TextChoice,
        subLabel: `Pick one Classification:
* Half-Human: You were always this way
* Half-Monster: You you were originally human and transformed somehow.`,
        choose: 1,
        options: [ `Half-Human`, `Half-Monster` ],
        allowCustom: true,
      },
      {
        label: `Background`, key: `8970f23d-d15c-44a8-a9ec-0e2b2f98438c`,
        inputType: InputTypes.TextChoice,
        choose: 1,
        options: [ `I have always fight to be Good.`, `I was evil and changed sides.` ],
        allowCustom: true,
      },
      {
        label: `Curse`, key: `2a910664-137d-4452-86ed-4c55e849a820`, // Advanced improvement can remove curse
        inputType: InputTypes.FeatChoice,
        choose: 1,
        subLabel: `Try to align your curse with the type of monster you are. See the full description for examples.`,
        options: [
          {
            name: `Feed Curse`,
            id: `79aeaee6-5e7a-457d-8180-84067d40d19e`,
            description: `You must subsist on living humans—it might take the form of blood, brains, or spiritual essence
  but it must be from people. You need to \`act under pressure\` to resist feeding whenever a perfect opportunity
  presents itself.`,
            inputs: [{
              label: `Food`, key: `1ed71a83-67bd-4bb6-b1fe-8d7fe6031f68`, // Displayed in social and mods
              inputType: InputTypes.Text,
              placeholder: `Brains, life-force, etc.`
            }],

            passives: [{
              type: PassiveTypes.Social,
              description: `You must subsist on living human tissue or essence.
You need to \`act under pressure\` to resist feeding whenever a perfect opportunity presents itself.`,
              showInputs: [`1ed71a83-67bd-4bb6-b1fe-8d7fe6031f68`] // Food
            }],
            modMoves: [{
              // TODO: This is kinda sorta a separate move, in a way... hmm. Is there a way to wrap act under pressure?
              applyToMoves: [`bfdfd9b3-d5fa-4517-8d5e-20013364d7b0`], // Act Under Pressure
              footnote: `You must subsist on living human tissue or essence.
You need to \`act under pressure\` to resist feeding whenever a perfect opportunity presents itself.`,
              footnoteInputs: [`1ed71a83-67bd-4bb6-b1fe-8d7fe6031f68`] // Food
            }]
          },
          {
            name: `Vulnerability`,
            id: `44307474-8772-492d-b5a6-aacc7e38f7a0`,
            description: `Pick a substance. You suffer +1 harm when you suffer harm from it.
  If you are bound or surrounded by it, you must \`act under pressure\` to use your powers.`,
            inputs: [{
              label: `Weakness`, key: `af97ed2b-8844-4b41-bb31-872de9a5c310`, // Displayed in health and moves
              inputType: InputTypes.Text,
              placeholder: `Silver, Rock Salt, Tree Sap, etc.`
            }],

            passives: [{
              type: PassiveTypes.Health,
              description: `You suffer +1 harm when you suffer harm from your weakness.`,
              showInputs: [`af97ed2b-8844-4b41-bb31-872de9a5c310`] // Weakness
            }],
            modMoves: [{
              // TODO: maybe show a button for another move? Then some auto-actions could kinda use that...? or is that odd?
              applyToMoves: [`*`],
              footnote: `If you are bound by or surrounded by your weakness, you must \`act under pressure\` to use your monstrous powers.`,
              footnoteInputs: [`af97ed2b-8844-4b41-bb31-872de9a5c310`] // Weakness
            }],
          },
          {
            name: `Pure Drive`,
            id: `a4b962ca-e8bc-4439-889d-37845a8970ec`,
            description: `One emotion rules you. Whenever you have a chance to indulge that emotion, you must do so immediately, or \`act under pressure\` to resist it.`,
            inputs: [{
              label: `Emotion`, key: `282e934b-46c0-4fee-b4bb-f263de1bc1d8`, // Displayed in social and mods
              inputType: InputTypes.TextChoice,
              choose: 1,
              options: [`hunger`, `hate`, `anger`, `fear`, `jealousy`, `greed`, `joy`, `pride`, `envy`, `lust`, `cruelty`],
              allowCustom: true,
            }],

            passives: [{
              type: PassiveTypes.Social,
              description: `Whenever you have a chance to indulge the emotion that rules you, you must do so immediately, or \`act under pressure\` to resist it.`,
              showInputs: [`282e934b-46c0-4fee-b4bb-f263de1bc1d8`] // Emotion weakness
            }],
            modMoves: [{
              // TODO: This is kinda sorta a separate move, in a way... hmm. Is there a way to wrap act under pressure?
              applyToMoves: [`bfdfd9b3-d5fa-4517-8d5e-20013364d7b0`], // Act Under Pressure
              footnote: `Whenever you have a chance to indulge the emotion that rules you, you must do so immediately, or \`act under pressure\` to resist it.`,
              footnoteInputs: [`282e934b-46c0-4fee-b4bb-f263de1bc1d8`] // Emotion weakness
            }]
          },
          {
            name: `Dark Master`,
            id: `b9a00011-326d-4dc8-be1a-03bd551b4451`,
            description: `You have an evil lord who doesn't know you changed sides. They still give you orders. They do not tolerate refusal or failure.`,
            inputs: [{
              label: `Dark Master`, key: `ebef1120-e2eb-4ea6-8ae6-dfaa9f6ab46d`, // Shown in social
              inputType: InputTypes.Text,
              placeholder: `Dracula`
            }],

            passives: [{
              type: PassiveTypes.Social,
              description: `You have an evil lord who doesn't know you changed sides. They still give you orders. They do not tolerate refusal or failure.`,
              showInputs: [`ebef1120-e2eb-4ea6-8ae6-dfaa9f6ab46d`] // Dark Master
            }],
          },
        ],
      },
      {
        label: `Natural Attacks`, key: `7bcaaa50-1353-449c-a9eb-3d8088f73ac6`, // Used by improvement
        inputType: InputTypes.FeatChoice,
        subLabel: `Try to align your Natural Attacks with the type of monster you are. See the description for examples.`,
        choose: 2,
        options: [
          {
            name: `Teeth`,
            id: `c4abb750-2e86-458b-9cd1-eb7069d4736a`,
            description: `Teeth attack with \`#3-harm\` \`#intimate\``,
            tags: [ItemTag.intimate],
            attacks: [{ categories: [``, `NaturalAttacks`], harm: 3 }],
          },
          {
            name: `Teeth: +1 \`harm\``,
            id: `767f051e-91b8-4514-abe7-76a98667a92d`,
            prerequisiteFeats: [`c4abb750-2e86-458b-9cd1-eb7069d4736a`], // Teeth

            modAttack: [{
              name: `Extra: +1 \`harm\``,
              harmOffset: 1,
              applyToItem: [`c4abb750-2e86-458b-9cd1-eb7069d4736a`], // Teeth
            }]
          },
          {
            name: `Teeth: Add \`#ignore-armor\``,
            id: `24b64329-9707-406f-b306-787c0d47255c`,
            prerequisiteFeats: [`c4abb750-2e86-458b-9cd1-eb7069d4736a`], // Teeth

            modAttack: [{
              name: `Extra: Add \`#ignore-armor\``,
              addTags: [ItemTag.ignoreArmor],
              applyToItem: [`c4abb750-2e86-458b-9cd1-eb7069d4736a`], // Teeth
            }]
          },
          {
            name: `Teeth: Add \`#hand\``,
            id: `4310e47c-7ea9-4f51-ad41-19efd56a0c73`,
            prerequisiteFeats: [`c4abb750-2e86-458b-9cd1-eb7069d4736a`], // Teeth

            modAttack: [{
              name: `Extra: Add \`#hand\``,
              addTags: [ItemTag.hand],
              applyToItem: [`c4abb750-2e86-458b-9cd1-eb7069d4736a`], // Teeth
            }]
          },
          {
            name: `Teeth: Add \`#close\``,
            id: `f713b5c0-ec23-4d54-a8c6-2fff61484196`,
            prerequisiteFeats: [`c4abb750-2e86-458b-9cd1-eb7069d4736a`], // Teeth

            modAttack: [{
              name: `Extra: Add \`#close\``,
              addTags: [ItemTag.close],
              applyToItem: [`c4abb750-2e86-458b-9cd1-eb7069d4736a`], // Teeth
            }]
          },
          {
            name: `Claws`,
            id: `780dbbb3-9dd1-40b2-9e18-cc8b053a77b9`,
            description: `Claws attack with \`#2-harm\` \`#hand\``,
            tags: [ItemTag.hand],
            attacks: [{ categories: [``, `NaturalAttacks`], harm: 2 }]
          },
          {
            name: `Extra: +1 \`harm\``,
            id: `767f051e-91b8-4514-abe7-76a98667a92d`,
            prerequisiteFeats: [`780dbbb3-9dd1-40b2-9e18-cc8b053a77b9`], // Claws
            modAttack: [{
              name: `Extra: +1 \`harm\``,
              harmOffset: 1,
              applyToItem: [`780dbbb3-9dd1-40b2-9e18-cc8b053a77b9`], // Claws
            }]
          },
          {
            name: `Extra: Add \`#ignore-armor\``,
            id: `24b64329-9707-406f-b306-787c0d47255c`,
            prerequisiteFeats: [`780dbbb3-9dd1-40b2-9e18-cc8b053a77b9`], // Claws
            modAttack: [{
              name: `Extra: Add \`#ignore-armor\``,
              addTags: [ItemTag.ignoreArmor],
              applyToItem: [`780dbbb3-9dd1-40b2-9e18-cc8b053a77b9`], // Claws
            }]
          },
          {
            name: `Extra: Add \`#intimate\``,
            id: `4310e47c-7ea9-4f51-ad41-19efd56a0c73`,
            prerequisiteFeats: [`780dbbb3-9dd1-40b2-9e18-cc8b053a77b9`], // Claws
            modAttack: [{
              name: `Extra: Add \`#intimate\``,
              addTags: [ItemTag.intimate],
              applyToItem: [`780dbbb3-9dd1-40b2-9e18-cc8b053a77b9`], // Claws
            }]
          },
          {
            name: `Extra: Add \`#close\``,
            id: `f713b5c0-ec23-4d54-a8c6-2fff61484196`,
            prerequisiteFeats: [`780dbbb3-9dd1-40b2-9e18-cc8b053a77b9`], // Claws
            modAttack: [{
              name: `Extra: Add \`#close\``,
              addTags: [ItemTag.close],
              applyToItem: [`780dbbb3-9dd1-40b2-9e18-cc8b053a77b9`], // Claws
            }]
          },
          {
            name: `Magical Force`,
            id: `e777c55b-b424-44d8-8f3c-7728186916ca`,
            description: `Magical Force attack with \`#1-harm\` \`#magical\` \`#close\``,
            tags: [ItemTag.close, ItemTag.magic],
            attacks: [{ categories: [``, `NaturalAttacks`], harm: 1 }]
          },
          {
            name: `Extra: +1 \`harm\``,
            id: `767f051e-91b8-4514-abe7-76a98667a92d`,
            prerequisiteFeats: [`e777c55b-b424-44d8-8f3c-7728186916ca`], //Magical Force
            modAttack: [{
              name: `Extra: +1 \`harm\``,
              harmOffset: 1,
              applyToItem: [`e777c55b-b424-44d8-8f3c-7728186916ca`], //Magical Force
            }]
          },
          {
            name: `Extra: Add \`#ignore-armor\``,
            id: `24b64329-9707-406f-b306-787c0d47255c`,
            prerequisiteFeats: [`e777c55b-b424-44d8-8f3c-7728186916ca`], //Magical Force
            modAttack: [{
              name: `Extra: Add \`#ignore-armor\``,
              addTags: [ItemTag.ignoreArmor],
              applyToItem: [`e777c55b-b424-44d8-8f3c-7728186916ca`], //Magical Force
            }]
          },
          {
            name: `Extra: Add \`#intimate\``,
            id: `4310e47c-7ea9-4f51-ad41-19efd56a0c73`,
            prerequisiteFeats: [`e777c55b-b424-44d8-8f3c-7728186916ca`], //Magical Force
            modAttack: [{
              name: `Extra: Add \`#intimate\``,
              addTags: [ItemTag.intimate],
              applyToItem: [`e777c55b-b424-44d8-8f3c-7728186916ca`], //Magical Force
            }]
          },
          {
            name: `Extra: Add \`#hand\``,
            id: `f713b5c0-ec23-4d54-a8c6-2fff61484196`,
            prerequisiteFeats: [`e777c55b-b424-44d8-8f3c-7728186916ca`], //Magical Force
            modAttack: [{
              name: `Extra: Add \`#hand\``,
              addTags: [ItemTag.hand],
              applyToItem: [`e777c55b-b424-44d8-8f3c-7728186916ca`], //Magical Force
            }]
          },
          {
            name: `Life Drain`,
            id: `7a14d1ba-917b-4dbb-b346-ccfb9d2d9f56`,
            description: `Life Drain attack with \`#1-harm\` \`#intimate\` \`#life-drain\``,
            tags: [ItemTag.intimate, ItemTag.lifeDrain],
            attacks: [{ categories: [``, `NaturalAttacks`], harm: 1 }]
          },
          {
            name: `Extra: +1 \`harm\``,
            id: `767f051e-91b8-4514-abe7-76a98667a92d`,
            prerequisiteFeats: [`7a14d1ba-917b-4dbb-b346-ccfb9d2d9f56`], // Life Drain
            modAttack: [{
              name: `Extra: +1 \`harm\``,
              harmOffset: 1,
              applyToItem: [`7a14d1ba-917b-4dbb-b346-ccfb9d2d9f56`], // Life Drain
            }]
          },
          {
            name: `Extra: Add \`#ignore-armor\``,
            id: `24b64329-9707-406f-b306-787c0d47255c`,
            prerequisiteFeats: [`7a14d1ba-917b-4dbb-b346-ccfb9d2d9f56`], // Life Drain
            modAttack: [{
              name: `Extra: Add \`#ignore-armor\``,
              addTags: [ItemTag.ignoreArmor],
              applyToItem: [`7a14d1ba-917b-4dbb-b346-ccfb9d2d9f56`], // Life Drain
            }]
          },
          {
            name: `Extra: Add \`#hand\``,
            id: `4310e47c-7ea9-4f51-ad41-19efd56a0c73`,
            prerequisiteFeats: [`7a14d1ba-917b-4dbb-b346-ccfb9d2d9f56`], // Life Drain
            modAttack: [{
              name: `Extra: Add \`#hand\``,
              addTags: [ItemTag.hand],
              applyToItem: [`7a14d1ba-917b-4dbb-b346-ccfb9d2d9f56`], // Life Drain
            }]
          },
          {
            name: `Extra: Add \`#close\``,
            id: `f713b5c0-ec23-4d54-a8c6-2fff61484196`,
            prerequisiteFeats: [`7a14d1ba-917b-4dbb-b346-ccfb9d2d9f56`], // Life Drain
            modAttack: [{
              name: `Extra: Add \`#close\``,
              addTags: [ItemTag.close],
              applyToItem: [`7a14d1ba-917b-4dbb-b346-ccfb9d2d9f56`], // Life Drain
            }]
          },
        ],
      }
    ],

    passives: [{
      type: PassiveTypes.Luck,
      description: `When you spend \`luck\`, your monster side gains power: your **Curse** may become stronger, or another **Breed** disadvantage may manifest.`,
    }],
  },
  MundaneBackground: {
    name: `Background`,
    id: `4e8dffc5-4385-462e-b2a7-15c82ec66901`,
    playbooks: [`b03c7fb1-9ce4-4cba-a527-6c1380ac5de0`], // The Mundane
    featType: FeatType.Background,

    description: `You are the regular person without any powers. That said, you do have a different kind of luck.`,

    passives: [{
      type: PassiveTypes.Luck,
      description: `When you spend \`luck\`, you'll find something weird—maybe even useful!`,
    }]
  },
  Agency: {
    name: `The Agency`,
    id: `2584ae8c-8a2b-46e2-a408-e9a9dbac0da6`,
    playbooks: [`58924c0d-c015-4fcd-8fd9-ca75f12fd019`], // The Professional
    featType: FeatType.Background,

    description: `As an Agent, you have access to agency resources, but may have to deal with red tape.`,
    longDescription: `Decide who it is you work for.
Are they a black-budget government department, a secret military unit, a clandestine police team, a private individual's crusade, a corporation, a scientific team, or what?

Is the Agency's goal to: destroy monsters, study the supernatural, protect people, gain power, or something else?

Pick two resource tags for the Agency, and two red tape tags:`,
    inputs: [
      {
        label: `Agency Name`, key: `a86859e1-d829-4def-85fe-824b4f3bc1c3`,
        subLabel: `Optional.`,
        inputType: InputTypes.Text,
      },
      {
        label: `Agency Type`, key: `40d1d5cc-f4d0-4121-9527-26530a10ef79`,
        inputType: InputTypes.TextChoice,
        choose: 1,
        allowCustom: true,
        options: [
          `a black-budget government department`, `a secret military unit`, `a clandestine police team`,
          `a private individual's crusade`, `a corporation`, `a scientific team`,
        ],
      },
      {
        label: `Agency's Goal`, key: `027e9c39-d161-4550-8f2b-3ac64d555010`,
        inputType: InputTypes.TextChoice,
        choose: 1,
        allowCustom: true,
        options: [ `destroy monsters`, `study the supernatural`, `protect people`, `gain power` ],
      },
      {
        label: `Agency Resources`, key: `cda1ce37-f4f2-48e7-8fdd-e104f27bf38d`, // Displayed on move: deal with the agency; also add 1 through improvement
        subLabel: `Choose what resources are most available through the agency. These will be easier to ask for later.`,
        inputType: InputTypes.TextChoice,
        choose: 2,
        allowCustom: false,
        options: [
          `Well-armed`, `Well-financed`, `Rigorous training`, `Official pull`, `Cover identities`, `Offices all over`,
          `Good intel`, `Recognised authority`, `Weird tech gadgets`, `Support teams`
        ],
      },
      {
        label: `Agency Red Tape`, key: `4833c3b1-8fed-461f-85f1-36a915190cd6`, // Displayed on move: deal with the agency; also changed through improvement
        subLabel: `Choose what red tape exists in the agency. You may have to work around these later.`,
        inputType: InputTypes.TextChoice,
        choose: 2,
        allowCustom: false,
        options: [
          `Dubious motives`, `Bureaucratic`, `Secretive hierarchy`, `Cryptic missions`, `Hostile superiors`,
          `Inter-departmental rivalry`, `Budget cuts`, `Take no prisoners policy`, `Live capture policy`,
        ],
      },
    ],

    passives: [{
      type: PassiveTypes.Luck,
      description: `When you spend \`luck\`, your next mission from **The Agency** comes with lots of **Red Tape**. Lots.`,
      showInputs: [`4833c3b1-8fed-461f-85f1-36a915190cd6`], // Red Tape
    }]
  },
  SearcherBackground: {
    name: `Background`,
    id: `db9135c9-8ad3-4e55-b4d6-62f747513c4d`,
    playbooks: [`f7b73a9a-6447-42f8-b373-b71341bdad99`], // The Searcher
    featType: FeatType.Background,
    prerequisiteFeats: [`38c1e7f2-ecf9-4b57-8138-4acbbbaf0a16`],
    description: `Your **First Encounter** has forever changed your life, and seems to continue to do so.`,

    passives: [{
      type: PassiveTypes.Luck,
      description: `When you spend \`luck\`, your **First Encounter** comes up in play. It could be a flashback, new occurrence, or related event.`,
    }]
  },
  SnoopCrew: {
    name: `Crew`,
    id: `5bba3e66-1e71-482e-ba5a-b5d5c3bc2c10`,
    playbooks: [`cfecc496-d1c1-4b30-af48-0f3f41cd02c0`], // The Snoop
    featType: FeatType.Background,

    description: `You have a crew that helps you capture footage and other evidence.`,
    longDescription: `You'll decide if your crew is the other hunters, or if you have an entourage.

If your crew members are not the hunters, your entourage is up to three people. You will pick a name and job for each.
Your crew are classified as \`bystanders\`, not \`allies\` (though they can become allies later.)

If your crew members are other hunters, decide together who gets which job.

Crew jobs: camera, sound, editing, dogsbody, researcher, driver, director, producer, bodyguard.

> Example: Monster Revelations
> The team has an Internet video channel, "Monster Revelations," that covers their monster hunts and teaches viewers
> about the monsters that are really out there.
> 
> A Snoop is required to run things; a Flake or Expert makes a good researcher; a Mundane can make the coffee;
> everyone else can hold a camera or microphone or carry things.`,
    
    inputs: [
      {
        label: `Crew Makeup`, key: `2fbd2cf7-a628-4480-8885-6e58a1ea0899`,
        inputType: InputTypes.FeatChoice,
        choose: 1,
        options: [
          {
            name: `Other Hunters`,
            id: `a35812d3-255d-4758-83c8-24269547b277`,
            inputs: [{
              label: `Hunters`, key: `4e906037-abfa-4cae-8254-5e01e1af4b32`,
              inputType: InputTypes.Hunter,
              inputs: [{
                label: `Crew Job`, key: `f4d72e8c-379c-466c-a4ec-36704c556846`,
                inputType: InputTypes.TextChoice,
                choose: 1,
                chooseMax: 0,
                allowCustom: true,
                options: [`camera`, `sound`, `editing`, `dogsbody`, `researcher`, `driver`, `director`, `producer`, `bodyguard.`],
              }]
            }],
          },
          {
            name: `Bystanders`,
            id: `6d425aab-ada3-4fef-ad52-aeec8bcb908a`,
            inputs: [{
              label: `Crew`, key: `a3a128ba-226b-42e5-a24b-e92fa7ca576f`,
              inputType: InputTypes.Character,
              startingType: CharacterTypes.Bystander,
              crewMin: 1,
              crewMax: 3,
              inputs: [{
                label: `Crew Job`, key: `bcb57e83-632a-439c-bf18-ad82464c6b7e`,
                inputType: InputTypes.TextChoice,
                choose: 1,
                chooseMax: 0,
                allowCustom: true,
                options: [`camera`, `sound`, `editing`, `dogsbody`, `researcher`, `driver`, `director`, `producer`, `bodyguard.`],
              }]
            }],
          }
        ]
      },
    ],

    passives: [{
      type: PassiveTypes.Luck,
      description: `Whenever you spend \`luck\`, you're going to have technical difficulties.
Breakdowns, communication problems, weird noises in the recordings, etc.`,
    }]
  },
  CombatMagic: {
    name: `Combat Magic`,
    id: `158aae53-3323-4ece-adc6-7a79d3c10e59`,
    playbooks: [`3f493473-f122-4255-8b19-3635908b2664`], // The Spell-Slinger
    featType: FeatType.Background,

    description: `You have a few attack spells you can use as weapons.`,
    longDescription: `When you use these spells to \`kick some ass\`, roll \`+Weird\` instead of \`+Tough\`.
Sometimes the situation may require you to \`act under pressure\` to cast your spell without problems.

Your combat spells can combine any of the base spells with any of the effects.`,
    
    passives: [{
      type: PassiveTypes.Luck,
      description: `When you spend \`luck\`, the official council of wizards is going to poke their nose into your business.`
    }],
    
    modMoves: [{
      applyToMoves: [`6d3f9e16-a230-4478-9481-853c90ff4cec`], // Kick Some Ass
      alternateAbility: Stats.Weird,
      alternateAbilityCondition: `When using your **Combat Magic**.`,
      replaceResults: {
        showAttacks: true,
        attackCategories: [`CombatMagic`],
      }
    }],

    inputs: [
      {
        label: `Combat Magic Picks`, key: `2fc056ef-1794-4493-aecb-4fd855c4337f`, // add 1 through improvement
        inputType: InputTypes.FeatChoice,
        subLabel: `Your combat spells are a combination a base spell and an effect.

Pick three bases and effects (you must pick at least one base option.)`,
        choose: 3,
        options: [
          {
            name: `Base: Blast \`#2-harm\` \`#close\` \`#magic\` \`#obvious\` \`#loud\``,
            id: `3507f19e-b456-4a59-9120-1e1b9f2d8a69`,
          },
          {
            name: `Base: Ball \`#1-harm\` \`#close\` \`#area\` \`#magic\` \`#obvious\` \`#loud\``,
            id: `0f858dc8-0543-4e4a-8b44-5eac3a29513b`,
          },
          {
            name: `Base: Missile \`#1-harm\` \`#far\` \`#magic\` \`#obvious\` \`#loud\``,
            id: `4a159fff-4b78-4588-8994-a37219a5aed7`,
          },
          {
            name: `Base: Wall \`#1-harm\` \`#close\` \`#1-armor\` \`#barrier\` \`#magic\` \`#obvious\` \`#loud\`)`,
            id: `be68c047-e7b5-4f69-9167-aef5592e7a68`,
          },
          {
            name: `Effect: Fire`,
            id: `37c124b7-0cea-423d-a926-feb3a606b7d9`,
            subFeats: [
              {
                name: `Fire Blast`,
                id: `f52a735e-4a66-4314-92ee-5dd11c28d286`,
                prerequisiteFeats: [`3507f19e-b456-4a59-9120-1e1b9f2d8a69`], // Blast
                tags: [ItemTag.magic,ItemTag.close,ItemTag.obvious,ItemTag.loud,ItemTag.fire],
                attacks: [{
                  categories: [`CombatMagic`],
                  harm: 4,
                  amendResults: {
                    miss: `The fire __will__ spread.`,
                    mixedSuccess: `The fire __will__ spread.`,
                  },
                }],
              },
              {
                name: `Fireball`,
                id: `534dea92-b8df-46df-9eba-452bb08d7109`,
                prerequisiteFeats: [`0f858dc8-0543-4e4a-8b44-5eac3a29513b`], // Ball
                tags: [ItemTag.magic,ItemTag.area,ItemTag.close,ItemTag.obvious,ItemTag.loud,ItemTag.fire],
                attacks: [{
                  categories: [`CombatMagic`],
                  harm: 3,
                  amendResults: {
                    miss: `The fire __will__ spread.`,
                    mixedSuccess: `The fire __will__ spread.`,
                  },
                }],
              },
              {
                name: `Fire Missile`,
                id: `518089e6-f4be-4212-9997-484c7fe792dc`,
                prerequisiteFeats: [`4a159fff-4b78-4588-8994-a37219a5aed7`], // Missile
                tags: [ItemTag.magic,ItemTag.far,ItemTag.obvious,ItemTag.loud,ItemTag.fire],

                attacks: [{
                  categories: [`CombatMagic`],
                  harm: 3,
                  amendResults: {
                    miss: `The fire __will__ spread.`,
                    mixedSuccess: `The fire __will__ spread.`,
                  }
                }]
              },
              {
                name: `Fire Wall`,
                id: `7959bdf9-b18f-49a9-8609-faa8d2051c38`,
                prerequisiteFeats: [`be68c047-e7b5-4f69-9167-aef5592e7a68`], // Wall
                tags: [ItemTag.magic,ItemTag.barrier,ItemTag.close,ItemTag.obvious,ItemTag.loud,ItemTag.fire],

                attacks: [{
                  categories: [`CombatMagic`],
                  harm: 3,
                  amendResults: {
                    miss: `The fire __will__ spread.`,
                    mixedSuccess: `The fire __will__ spread.`,
                  }
                }],
                modArmor: [{
                  name: `Fire Wall`,
                  armorOffset: 1,
                  condition: `Apply to harm traveling through the \`#barrier\`.`,
                }]
              }
            ],
          },
          {
            name: `Effect: Force/Wind`,
            id: `bca18b4e-6eaf-45f7-b716-d2ed34459a9a`,
            subFeats: [
              {
                name: `Force/Wind Blast`,
                id: `87aee2cd-bbf5-4c98-bf61-8d298172d870`,
                prerequisiteFeats: [`3507f19e-b456-4a59-9120-1e1b9f2d8a69`], // Blast
                tags: [ItemTag.magic,ItemTag.close,ItemTag.obvious,ItemTag.loud,ItemTag.forceful],
                attacks: [{ categories: [`CombatMagic`], harm: 3 }],
              },
              {
                name: `Force/Wind Ball`,
                id: `17b2bd0a-8726-40c7-a29c-70c65f797b02`,
                prerequisiteFeats: [`0f858dc8-0543-4e4a-8b44-5eac3a29513b`], // Ball
                tags: [ItemTag.magic,ItemTag.area,ItemTag.close,ItemTag.obvious,ItemTag.loud,ItemTag.forceful],
                attacks: [{ categories: [`CombatMagic`], harm: 2 }],
              },
              {
                name: `Force/Wind Missile`,
                id: `9ae87a5e-b658-4bdf-b47f-ab8767b78dfe`,
                prerequisiteFeats: [`4a159fff-4b78-4588-8994-a37219a5aed7`], // Missile
                tags: [ItemTag.magic,ItemTag.far,ItemTag.obvious,ItemTag.loud,ItemTag.forceful],
                attacks: [{ categories: [`CombatMagic`], harm: 2 }],
              },
              {
                name: `Force/Wind Wall`,
                id: `a8cce3ac-c585-49f7-9c8e-97155cb88e38`,
                prerequisiteFeats: [`be68c047-e7b5-4f69-9167-aef5592e7a68`], // Wall
                tags: [ItemTag.magic,ItemTag.barrier,ItemTag.close,ItemTag.obvious,ItemTag.loud,ItemTag.forceful],
                attacks: [{ categories: [`CombatMagic`], harm: 2 }],
                modArmor: [{
                  name: `Force/Wind Wall`,
                  armorOffset: 2,
                  condition: `Apply to harm traveling through the \`#barrier\`.`,
                }]
              }
            ]
          },
          {
            name: `Effect: Lightning/Entropic`,
            id: `d86c3030-a7f4-48cc-bd50-3041ec7c62d5`,
            subFeats: [
              {
                name: `Lightning/Entropic Blast`,
                id: `2581b956-5397-4bf8-b169-025cd1dc71a5`,
                prerequisiteFeats: [`3507f19e-b456-4a59-9120-1e1b9f2d8a69`], // Blast
                tags: [ItemTag.magic,ItemTag.close,ItemTag.obvious,ItemTag.loud,ItemTag.messy,ItemTag.electricity],
                attacks: [{ categories: [`CombatMagic`], harm: 3 }],
              },
              {
                name: `Lightning/Entropic Ball`,
                id: `40b02a1f-2a41-4080-9bae-5ee7ef1413d0`,
                prerequisiteFeats: [`0f858dc8-0543-4e4a-8b44-5eac3a29513b`], // Ball
                tags: [ItemTag.magic,ItemTag.area,ItemTag.close,ItemTag.obvious,ItemTag.loud,ItemTag.messy,ItemTag.electricity],
                attacks: [{ categories: [`CombatMagic`], harm: 2 }],
              },
              {
                name: `Lightning/Entropic Missile`,
                id: `d2b90123-b972-4051-84f4-e08fd7bcfd1e`,
                prerequisiteFeats: [`4a159fff-4b78-4588-8994-a37219a5aed7`], // Missile
                tags: [ItemTag.magic,ItemTag.far,ItemTag.obvious,ItemTag.loud,ItemTag.messy,ItemTag.electricity],
                attacks: [{ categories: [`CombatMagic`], harm: 2 }],
              },
              {
                name: `Lightning/Entropic Wall`,
                id: `f8858f18-341b-4aad-85d4-85b5e4cee41b`,
                prerequisiteFeats: [`be68c047-e7b5-4f69-9167-aef5592e7a68`], // Wall
                tags: [ItemTag.magic,ItemTag.barrier,ItemTag.close,ItemTag.obvious,ItemTag.loud,ItemTag.messy,ItemTag.electricity],
                attacks: [{ categories: [`CombatMagic`], harm: 2 }],
                modArmor: [{
                  name: `Lightning/Entropic Wall`,
                  armorOffset: 1,
                  condition: `Apply to harm traveling through the \`#barrier\`.`,
                }]
              }
            ]
          },
          {
            name: `Effect: Frost/Ice`,
            id: `55b45d21-6d5e-4e23-8cee-eb4757841c77`,
            subFeats: [
              {
                name: `Frost/Ice Blast`,
                id: `5236fbb3-4556-4397-ba96-dbd8f3b6313e`,
                prerequisiteFeats: [`3507f19e-b456-4a59-9120-1e1b9f2d8a69`], // Blast
                tags: [ItemTag.magic,ItemTag.close,ItemTag.obvious,ItemTag.loud,ItemTag.restraining],
                attacks: [{ categories: [`CombatMagic`], harm: 3 }],
              },
              {
                name: `Frost/Ice Ball`,
                id: `4d456e43-ce6e-4b43-8ca0-a556a22d0767`,
                prerequisiteFeats: [`0f858dc8-0543-4e4a-8b44-5eac3a29513b`], // Ball
                tags: [ItemTag.magic,ItemTag.area,ItemTag.close,ItemTag.obvious,ItemTag.loud,ItemTag.restraining],
                attacks: [{ categories: [`CombatMagic`], harm: 2 }],
              },
              {
                name: `Frost/Ice Missile`,
                id: `8e8eb850-7f0f-456e-98d1-3bb4453ef37d`,
                prerequisiteFeats: [`4a159fff-4b78-4588-8994-a37219a5aed7`], // Missile
                tags: [ItemTag.magic,ItemTag.far,ItemTag.obvious,ItemTag.loud,ItemTag.restraining],
                attacks: [{ categories: [`CombatMagic`], harm: 2 }],
              },
              {
                name: `Frost/Ice Wall`,
                id: `0b1897c9-d1ce-476f-b63d-35ff29ad121d`,
                prerequisiteFeats: [`be68c047-e7b5-4f69-9167-aef5592e7a68`], // Wall
                tags: [ItemTag.magic,ItemTag.barrier,ItemTag.close,ItemTag.obvious,ItemTag.loud],
                attacks: [{ categories: [`CombatMagic`], harm: 0 }],
                modArmor: [{
                  name: `Frost/Ice Wall`,
                  armorOffset: 3,
                  condition: `Apply to harm traveling through the \`#barrier\`.`,
                }]
              }
            ]
          },
          {
            name: `Effect: Earth`,
            id: `bb560d07-96c0-4ae4-ba24-a60061115f0d`,
            subFeats: [
              {
                name: `Earth Blast`,
                id: `f74c6f05-4f1c-4052-9ca0-5e8c3a480176`,
                prerequisiteFeats: [`3507f19e-b456-4a59-9120-1e1b9f2d8a69`], // Blast
                tags: [ItemTag.magic,ItemTag.close,ItemTag.obvious,ItemTag.loud,ItemTag.forceful,ItemTag.restraining],
                attacks: [{ categories: [`CombatMagic`], harm: 2 }],
              },
              {
                name: `Earth Ball`,
                id: `4d668eee-5d8b-4863-ac17-1aafefb519aa`,
                prerequisiteFeats: [`0f858dc8-0543-4e4a-8b44-5eac3a29513b`], // Ball
                tags: [ItemTag.magic,ItemTag.area,ItemTag.close,ItemTag.obvious,ItemTag.loud,ItemTag.forceful,ItemTag.restraining],
                attacks: [{ categories: [`CombatMagic`], harm: 1 }],
              },
              {
                name: `Earth Missile`,
                id: `9a65506a-f59a-4412-b43d-f37aea959953`,
                prerequisiteFeats: [`4a159fff-4b78-4588-8994-a37219a5aed7`], // Missile
                tags: [ItemTag.magic,ItemTag.far,ItemTag.obvious,ItemTag.loud,ItemTag.forceful,ItemTag.restraining],
                attacks: [{ categories: [`CombatMagic`], harm: 1 }],
              },
              {
                name: `Earth Wall`,
                id: `029e8b9d-58d2-4f1c-b2fb-b03ec368451e`,
                prerequisiteFeats: [`be68c047-e7b5-4f69-9167-aef5592e7a68`], // Wall
                tags: [ItemTag.magic,ItemTag.barrier,ItemTag.close,ItemTag.obvious,ItemTag.loud,ItemTag.forceful,ItemTag.restraining],
                attacks: [{ categories: [`CombatMagic`], harm: 1 }],
                modArmor: [{
                  name: `Earth Wall`,
                  armorOffset: 1,
                  condition: `Apply to harm traveling through the \`#barrier\`.`,
                }]
              }
            ]
          },
          {
            name: `Effect: Necromantic`,
            id: `3e8c2e01-f3d4-42dc-a3d0-606abc5b7453`,
            subFeats: [
              {
                name: `Necromantic Blast`,
                id: `61a9e39e-ceaa-40ea-8898-dcaf4f9d26ba`,
                prerequisiteFeats: [`3507f19e-b456-4a59-9120-1e1b9f2d8a69`], // Blast
                tags: [ItemTag.magic,ItemTag.close,ItemTag.obvious,ItemTag.loud,ItemTag.lifeDrain],
                attacks: [{ categories: [`CombatMagic`], harm: 2 }],
              },
              {
                name: `Necromantic Ball`,
                id: `976750a3-2361-474f-860f-81f47f71ccf0`,
                prerequisiteFeats: [`0f858dc8-0543-4e4a-8b44-5eac3a29513b`], // Ball
                tags: [ItemTag.magic,ItemTag.area,ItemTag.close,ItemTag.obvious,ItemTag.loud,ItemTag.lifeDrain],
                attacks: [{ categories: [`CombatMagic`], harm: 1 }],
              },
              {
                name: `Necromantic Missile`,
                id: `11688b11-8e79-4d98-828c-b2773617f73e`,
                prerequisiteFeats: [`4a159fff-4b78-4588-8994-a37219a5aed7`], // Missile
                tags: [ItemTag.magic,ItemTag.far,ItemTag.obvious,ItemTag.loud,ItemTag.lifeDrain],
                attacks: [{ categories: [`CombatMagic`], harm: 1 }],
              },
              {
                name: `Necromantic Wall`,
                id: `3839a799-5864-42b0-93c5-80104ff01660`,
                prerequisiteFeats: [`be68c047-e7b5-4f69-9167-aef5592e7a68`], // Wall
                tags: [ItemTag.magic,ItemTag.barrier,ItemTag.close,ItemTag.obvious,ItemTag.loud,ItemTag.lifeDrain],
                attacks: [{ categories: [`CombatMagic`], harm: 1 }],
                modArmor: [{
                  name: `Necromantic Wall`,
                  armorOffset: 1,
                  condition: `Apply to harm traveling through the \`#barrier\`.`,
                }]
              }
            ]
          },
        ]
      }
    ],
  },
  Show: {
    name: `The Show`,
    id: `0c2ab958-24d2-4710-84e4-2f5d51f69cc9`,
    playbooks: [`7db7e333-5084-4c61-970b-a3013c55ad7a`], // The Spooktacular
    featType: FeatType.Background,

    description: `You spent a long time with a traveling show and get an ability based on its style.`,

    inputs: [
      {
        label: `Show Name`, key: `7cb52a8d-8e8f-4096-a81a-ef114e9f8c58`,
        inputType: InputTypes.Text,
        subLabel: `You spent a long time with a traveling show. Name the show and answer the following questions.`,
      },
      {
        label: `Are you still with them?`, key: `33c40a2b-654f-4bc8-a40f-9decf82c2769`,
        inputType: InputTypes.FeatChoice,
        choose: 1,
        options: [
          {
            name: `Yes`,
            id: `25d04fea-dadc-422a-bf05-ee236920502a`,
            inputs: [{
              label: `How do you balance work and monster hunting?`, key: `842c6859-904c-48f2-bb0f-ba0cda677efd`,
              inputType: InputTypes.TextArea
            }]
          },
          {
            name: `No`,
            id: `a55001a8-8223-4621-af95-87b5c49289e9`,
            inputs: [{
              label: `Why did you leave?`, key: `9eae0e71-1633-4d3f-a69e-8a11a02a0764`,
              inputType: InputTypes.TextArea,
            }]
          }
        ]
      },
      {
        label: `Specialty`, key: `e5a4dda6-6093-4725-867b-c35fc51559e3`, // Pick added by improvement
        inputType: InputTypes.FeatChoice,
        choose: 1,
        options: [
          {
            name: `An Infernal Power`,
            id: `2da58e00-1566-4085-a88c-9e2d529f984e`,
            description: `A Big Bad operated the Show for evil purposes.
You signed the contract granting you three infernal favors. Spend these as if they were Luck points.
The Big Bad may restore these points when they wish, but first you must do something unforgivably terrible.
What sin have you already committed?`,
            inputs: [
              {
                label: `What sin have you commited?`, key: `3db6fff7-6bc1-4e0c-8077-17b838fa210c`,
                inputType: InputTypes.TextArea,
              },
              {
                label: `Infernal Favor`, key: `25e6b734-107e-4fcd-bf19-1bcacba2e58d`, // Displayed in luck
                inputType: InputTypes.Checks,
                max: 3,
              }
            ],
            passives: [{
              type: PassiveTypes.Luck,
              description: `You can spend your **Infernal Favor** as \`Luck\` points`,
              showInputs: [`25e6b734-107e-4fcd-bf19-1bcacba2e58d`] // Infernal Favor
            }]
          },
          {
            name: `Magic & Illusions`,
            id: `2a5deb28-4743-426e-a7c9-9f81abe9ed63`,
            description: `Weird Move: You can use illusions to lead astray or escape`,
            
            actions: [{
              name: `Conjure Illusion`,
              id: `49c0f72b-7b9f-48d7-91fa-454baf42b71b`,
              ability: Stats.Weird,
              description: `Cast confounding spells by weaving illusions. Lead them astray or escape.`,
              
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
          },
          {
            name: `Making Money`,
            id: `45c8ca65-9446-445c-b073-30c7c4e570f5`,
            description: `Charm Move: Mess with someone to bamboozle or distract them.`,
            
            actions: [{
              name: `Bamboozle`,
              id: `4008646f-c496-42a8-9abc-b6f129ff1b93`,
              ability: Stats.Charm,
              description: `Mess with someone to bamboozle or distract them.`,
              
              miss: `They are not fooled nor amused. You better run.`,
              mixedSuccess: `They overlook something of your choice, but they're more angry than baffled afterward.`,
              solidSuccess: `They don't know what's going on and overlook something of your choice.`,
            }]
          },
          {
            name: `Problem Solvers`,
            id: `4539ef13-fd24-444d-b28d-1459492b3cc6`,
            description: `The Show rolls into town, people visit and reveal their difficulties.
The crew arrange to make things better, leaving each town a little happier than when you arrived.
Well, when things go smoothly anyhow. When you chat to someone, or observe them for a few minutes, the Keeper will
tell you what their biggest problem is right now.`,

            autoActions: [{
              name: `Problem Solver`,
              id: `2bf7ee2e-9471-425b-9c20-1c599f9cebaa`,
              description: `When you chat to someone, or observe them for a few minutes, \`The Keeper\` will tell you
what their biggest problem is right now.`,
            }]
          },
          {
            name: `Supernatural Creatures`,
            id: `ad5f87d1-8067-45c4-a313-bd1425769b87`,
            description: `You're not entirely human yourself. Pick a single supernatural move from any hunter playbook
(the Monstrous is a good place to start). How does your inhuman nature show?`,
            addAnyMoves: 1,
          },
        ]
      }
    ],

    passives: [{
      type: PassiveTypes.Luck,
      description: `When you spend \`luck\`, you're going to run into someone you met at **The Show**. Could be good, could be bad, who knows?`,
    }]
  },
  DarkSide: {
    name: `The Dark Side`,
    id: `73865b22-93cf-403f-92a0-c546129ab53e`,
    playbooks: [`1dccf639-8ee6-457e-a2b4-ea2ae9a0bd1a`], // The Spooky
    featType: FeatType.Background,

    description: `Your powers have an unsavory source, and sometimes you get tempted to do things you shouldn't.`,
    longDescription: `The temptation could be orders from whatever granted your power, or urges that bubble up from
your subconscious. Something like that. Whatever it is, it's unsettling.

The Keeper can ask you to do nasty things (in accordance with your chosen **Dark Side Tags**), when your powers need you to.
If you do whatever is asked, mark \`experience\`. If you don't do it, then your powers are unavailable until the end of
the \`mystery\` (or until you cave). As you mark off \`luck\` boxes, these requests will get bigger and nastier.`,
    
    inputs: [
      {
        label: `Dark Side Tags`, key: `9c21ebec-8035-43a4-8157-5f0c1f6f0e6c`, // Can be Changed by an improvement
        inputType: InputTypes.TextChoice,
        choose: 3,
        allowCustom: false,
        options: [
          `Violence`, `Depression`, `Secrets`, `Lust`, `Dark bargain`, `Guilt`, `Soulless`, `Addiction`, `Mood swings`,
          `Rage`, `Self-destruction`, `Greed for power`, `Poor impulse control`, `Hallucinations`, `Pain`, `Paranoia`,
        ],
      },
      {
        label: `Dark Side Resisted`, key: `d694115b-ecca-4494-ae3f-e062333288f8`,
        inputType: InputTypes.Checks,
        max: 1,
        reset: 0,
        resetPerMystery: true,
      }
    ],
    
    passives: [
      {
        type: PassiveTypes.Experience,
        description: `If you do whatever \`The Keeper\` poses as a temptation of your **Dark Side Tags**, mark \`experience\`.`,
        showInputs: [`9c21ebec-8035-43a4-8157-5f0c1f6f0e6c`, `d694115b-ecca-4494-ae3f-e062333288f8`], // Dark Side Tags and Dark Side Resisted
      },
      {
        type: PassiveTypes.Luck,
        description: `The less \`luck\` you have left, the nastier your dark side's needs will get.`,
        showInputs: [`9c21ebec-8035-43a4-8157-5f0c1f6f0e6c`, `d694115b-ecca-4494-ae3f-e062333288f8`], // Dark Side Tags and Dark Side Resisted
      }
    ],
    modMoves: [{
      applyToMoves: [`*`],
      footnote: `If you did not lean into a **Dark Side Tag** temptation, then your special powers are unavailable until the end of the \`mystery\` (or until you cave.)`,
      footnoteInputs: [`9c21ebec-8035-43a4-8157-5f0c1f6f0e6c`, `d694115b-ecca-4494-ae3f-e062333288f8`], // Dark Side Tags and Dark Side Resisted
    }]
  },
  Loss: {
    name: `Loss`,
    id: `dab9c9ab-3b98-4537-b561-0cdc392ebbbd`,
    playbooks: [`36e0df53-1690-46cf-a59e-56ef397d108d`], // The Wronged
    featType: FeatType.Background,

    description: `You lost someone important to you at the hands of a monster.`,

    inputs: [
      {
        label: `Association`, key: `03b05534-719e-49cf-88d9-7e4fbc85b5be`,
        inputType: InputTypes.TextChoice,
        subLabel: `Who did you lose? Pick one or more association, then answer the following questions.`,
        choose: 1,
        chooseMax: 0,
        options: [ `Parent(s)`, `Sibling(s)`, `Spouse/Partner`, `Child(ren)`, `Best Friend(s)` ],
        allowCustom: true,
      },
      {
        label: `Name(s) of the lost?`, key: `d23c11c8-a73b-4eab-8b3a-6b8891fb72fc`,
        inputType: InputTypes.Text,
      },
      {
        label: `Weakness`, key: `bc90bd61-e0e6-4788-8b6b-db5acc94870c`,
        inputType: InputTypes.TextChoice,
        subLabel: `Why couldn't you save them?`,
        choose: 1,
        chooseMax: 0,
        options: [ `I was at fault`, `I was selfish`, `I was injured`, `I was weak`, `I was slow`, `I was scared`, `I was in denial`, `I was complicit` ],
        allowCustom: true,
      },
    ],

    passives: [{
      type: PassiveTypes.Luck,
      description: `When you spend \`luck\`, you find a dangerous lead on your prey.`,
      showInputs: [ `b1628560-6666-4b6f-904a-aa72b165e6a2` ] // Prey
    }],
  },
} as const;

export let StartingFeatsLookup: {[p:string]: Feat} = Object.fromEntries(Object.values(StartingFeats).map(f => [f.id, f]));