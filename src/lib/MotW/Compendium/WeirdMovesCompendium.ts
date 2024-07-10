import { StatEnum, type Action, type AutoAction } from "./CompendiumTypes";

export let BigMagicDescription: AutoAction = {
  name: "Use Big Magic",
  description: "Tell the **Keeper** the **Big Magic** effect you want. They will provide the requirements.",
  longDescription: `
Perform **Big Magic** when you don't have the **Use Magic** move or wish for an effect greater than **Use Magic** can offer.

Tell the **Keeper** the **Big Magic** you want to do.
The **Keeper** will provide requirements for the magic. Once the requirements are met and the magic is cast,
the **Big Magic** takes effect with no roll required.

Example **Big Magic** Requirements:
* You need to spend a lot of time (days or weeks) researching the magic ritual.
* You need to experiment with the spell - there will be lots of failures before you get it right.
* You need some rare and weird ingredients and supplies.
* The spell will take a long time (hours or days) to cast.
* You need a lot of people (2, 3, 7, 13, or more) to help.
* The spell needs to be cast at a particular place and/or time.
* You need to use magic as part of the ritual, perhaps to summon a monster, communicate with something, or bar the portal you opened.
* It will have a specific side-effect or danger.`
};

export let WeirdMoves: Array<Action> = [
  {
    name: "Use Magic",
    description: "Describe what you're trying to achieve and how you will do the spell. The **Keeper** may add stipulations.",
    longDescription: `
When you **Use Magic**, say what you're trying to achieve and how you do the spell.

The **Keeper** may stipulate that:
* The spell requires weird materials.
* The spell will take 10 seconds, 30 seconds, or 1 minute to cast.
* The spell requires ritual chanting and gestures.
* The spell requires you to draw arcane symbols.
* You need one or two people to help cast the spell.
* You need to refer to a tome of magic for the details.
`,

    coreStat: StatEnum.Weird,

    miss: "The **Keeper** can make a hard move against you. Your spell will likely fail or go awry.",
    
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
    solidSuccess: "",
    advancedSuccess: "The **Keeper** will also offer you an added benefit.",
  },
  {
    name: "Empath",
    description: "Open your brain to feel emotions of something in front of you.",
    longDescription: `
You can use **Empath** on anything with emotions, but the less human they are, the less safe it is for you.
If the emotions are especially strong or alien, you might need to **Act Under Pressure**.`,

    coreStat: StatEnum.Weird,

    miss: "The **Keeper** can make a hard move against you. You are overwhelmed by emotions.",
    
    mixedSuccess: "You gain only a hazy impression of their current emotional state and intentions.",
    solidSuccess: "You gain a clear impression of their current emotional state and intentions. Take +1 forward when acting on this knowledge.",
    advancedSuccess: "You gain a clear impression of their current emotional state and intentions. Take +1 forward when acting on this knowledge. You may ask one follow-up question that the Keeper will answer honestly",
  },
  {
    name: "Illuminated",
    description: "Telepathically ask the Secret Masters for aid.",

    coreStat: StatEnum.Weird,

    miss: "The **Keeper** can make a hard move against you. The Secret Masters' reply is terrible, garbled, or somehow dangerously wrong.",
    
    mixedSuccess: "The Secret Masters need you to complete a task for them. Once it is done, they reveal a key fact, clue, or technique that will help you.",
    solidSuccess: "The Secret Masters reveal a key fact, clue, or technique that will help you",
    advancedSuccess: "The Secret Masters reveal a key fact, clue, or technique that will help you. You may ask one follow-up question that the Keeper will answer honestly",
  },
  {
    name: "No Limits",
    description: "Push your physical body past its limits.",
    longDescription: `Push your physical body past its limits to the limit of human physical possibility.

For the purposes of this move, “physical possibility” means “conceivably possible for a human."

For example:
* **Physically Possible:** Lift an SUV, Jump over a truck, Punch through a wall.
* **Not Physically Possible:** Lift a building, Fly, Punch a blast of energy at a foe.`,

    coreStat: StatEnum.Weird,

    miss: "The **Keeper** can make a hard move against you. Something goes horribly wrong.",
    
    successHeader: "Your body obeys your will to the limits of physical possibility, for a moment.",
    mixedSuccess: `Choose one additional consequence:
* Suffer 1 **Harm**.
* Take -1 forward.
* You need to rest right now.`,
    solidSuccess: "",
    advancedSuccess: "You can continue acting at your body's limits for 30 seconds.",
    successFooter: `
For the purposes of this move, “physical possibility” means “conceivably possible for a human."

For example:
* **Physically Possible:** Lift an SUV, Jump over a truck, Punch through a wall.
* **Not Physically Possible:** Lift a building, Fly, Punch a blast of energy at a foe.
    `
  },
  {
    name: "Past Lives",
    description: "Channel your previous incarnations to discover something.",
    longDescription: `Channel your previous incarnations to discover something. Ask one of the following questions, then roll.

Past Lives questions:
* What did a past life discover about _____?
* How did a past life deal with _____?
* What important hidden secret can a past life show me the way to?
* What did a past life learn too late to help them?
* What does a past life advise me to do now?`,

    coreStat: StatEnum.Weird,

    miss: "The **Keeper** can make a hard move against you and a past life takes over for a while",

    mixedSuccess: "A past life has a little experience with this. The **Keeper** will answer only one of the questions:",
    solidSuccess: "A past life has something useful to offer. The **Keeper** will answer two of the questions:",
    advancedSuccess: "A past life knows exactly what you were after. Ask the Keeper one of the questions below, and one free-form question. Gain +1 ongoing while acting on the answers.",
    successFooter: `
* What did a past life discover about _____?
* How did a past life deal with _____?
* What important hidden secret can a past life show me the way to?
* What did a past life learn too late to help them?
* What does a past life advise me to do now?`,
  },
  {
    name: "Sensitive",
    description: "Open your mind to the psychic environment.",

    coreStat: StatEnum.Weird,

    miss: "The **Keeper** can make a hard move against. Your brain makes contact with something dangerous.",

    mixedSuccess: "You gain a hazy impression about something important.",
    solidSuccess: "You gain a definite impression (a vision, tangible aura, overheard thought, etc) about something important.",
    advancedSuccess: "You gain a definite impression (a vision, tangible aura, overheard thought, etc) about something important. You may ask one follow-up question that the **Keeper** will answer honestly.",
  },
  {
    name: "Trust Your Gut",
    description: "Consult your instincts about what to do next.",

    coreStat: StatEnum.Weird,

    miss: "The **Keeper** can make a hard move against. Your instincts lead you into danger.",

    mixedSuccess: "The **Keeper** will tell you a general direction to go. Take +1 **Forward** as you explore that.",
    solidSuccess: "The **Keeper** will tell you where you should go. Wherever that is, it will be important. You get +1 ongoing on the way to this place.",
    advancedSuccess: "The **Keeper** will tell you where you should go. Wherever that is, it will be important. You get +1 ongoing on the way to this place. The **Keeper** will also tell you one important thing you should investigate further.",
  },
  {
    name: "Telekinesis",
    description: "Fling something with your mind.",
    longDescription: `By default you can move something smaller than a person. You don't have much control, and you can't move it strongly enough to hurt anything.`,

    coreStat: StatEnum.Weird,

    miss: "The **Keeper** can make a hard move against. Something goes horribly wrong.",

    mixedSuccess: "You move it but it hurts. Choose one option and mark 2-harm.",
    solidSuccess: "You move it but it hurts a little. Choose two options and mark 1-harm.",
    advancedSuccess: `You move it but it hurts a little. Choose three options and mark 1-harm. You can choose from these additional options:

* Something explodes (3-harm close fire area messy)
* Something implodes (3-harm close crush)
* Lots of stuff is flying under your control.
* You have perfect and precise control over exactly what happens.`,

    successFooter: `
By default you can move something smaller than a person. You don't have much control, and you can't move it strongly enough to hurt anything.

Telekinesis options (anything not picked is not true):
* Something is held fast.
* Something is hurt (2-harm smash).
* Something catches fire.
* You can fling something bigger than a person.
* You keep it basically under your control.
* You suffer 1 less harm.`,
  },
  {
    name: "Weird Science",
    description: "Create or adapt a device to analyze or deal with strangeness.",
    longDescription: `
Depending on your success level, you may have additional requirements to complete the **Weird Science**, such as:
* It needs a rare and/or weird material.
* It won’t be very reliable.
* It requires huge amounts of power or fuel.
* It will take a long time to get it working.
* It won’t work exactly as you intended.
* You’ll need help (beyond the hunters on your team) to finish it.`,

    coreStat: StatEnum.Weird,

    miss: "Something goes horribly wrong. You are still able to create your device, but the **Keeper** picks three requirements.",

    mixedSuccess: "Pick one requirement and the **Keeper** picks a second one:",
    solidSuccess: "Pick two requirements:",
    advancedSuccess: "Pick two requirements below. You gain +1 ongoing when operating the device.",

    successFooter: `

**Weird Science** requirements:
* It needs a rare and/or weird material.
* It won’t be very reliable.
* It requires huge amounts of power or fuel.
* It will take a long time to get it working.
* It won’t work exactly as you intended.
* You’ll need help (beyond the hunters on your team) to finish it.`,
  },
]
