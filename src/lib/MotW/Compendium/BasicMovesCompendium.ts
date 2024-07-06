import {StatEnum, type Action, type AutoAction} from "./CompendiumTypes";

export let BasicAutoMoves: Array<AutoAction> = [
  {
    name: "First Aid",
    description: "Heal 1 **Harm** of a single wound or condition. Takes a few minutes.",
    longDescription: `Additional first aid will only help someone if there’s a new injury or condition to treat.`,
  }
]

export let BasicMoves: Array<Action> = [
  {
    name: "Kick Some Ass",
    description: "Get into a fight and kick some ass.",
    
    coreStat: StatEnum.Tough,

    miss: `
You fail to harm your target. The **Keeper** can make a hard move against you. For example, whatever you're fighting may inflict **Harm** on you.

The amount of **Harm** is based on the established dangers in the game. That usually means your enemy inflicts their attack's **Harm** rating on you.`,

    successHeader: `
You and whatever you're fighting inflict **Harm** on each other.

The amount of **Harm** is based on the established dangers in the game. That usually means you inflict the **Harm** rating of your **Weapon** and your enemy inflicts their attack's **Harm** rating on you.`,
    mixedSuccess: "",
    solidSuccess: `
Choose one extra effect:
* You gain the advantage: take +1 **Forward**, or give +1 **Forward** to another **Hunter**.
* You inflict terrible **Harm** (+1 Harm).
* You suffer less **Harm** (-1 Harm).
* You force them where you want them.`,
    advancedSuccess: `
Choose one enhanced effect:
* You completely hold the advantage. All **Hunters** involved in the fight get +1 **Forward**.
* You suffer no **Harm** at all.
* Your attack inflicts double the normal **Harm**.
* Your attack drives the enemy away along a rout.`,
  },
  {
    name: "Act Under Pressure",
    description: "Act under pressure to escape or accomplish a goal.",

    coreStat: StatEnum.Cool,
    
    miss: "The **Keeper** can make a hard move against you. You have likely failed to do what you set out to do.",
    
    mixedSuccess: "The **Keeper** is going to give you a worse outcome, a hard choice, or a price to pay.",
    solidSuccess: "You successfully do what you set out to.",
    advancedSuccess: "You may choose to either do what you wanted and something extra, or to do what you wanted to absolute perfection.",
  },
  {
    name: "Help Out",
    description: "Help another **Hunter**.",

    coreStat: StatEnum.Cool,

    miss: "The **Keeper** can make a hard move against you. You likely failed to help and possibly put yourself and/or them at risk.",
    
    mixedSuccess: "Your help grants them +1 to their roll, but you also expose yourself to trouble or danger if they roll low.",
    solidSuccess: "Your help grants them +1 to their roll.",
    advancedSuccess: "Your help lets them act as if they just rolled a 12, regardless of what they actually got.",
  },
  {
    name: "Investigate a Mystery",
    description: "Investigate the scene to get answers.",
    
    coreStat: StatEnum.Sharp,

    miss: "The **Keeper** can make a hard move against you. You likely learn nothing new about the mystery and may have drawn unwanted attention or put yourself at risk.",
    
    mixedSuccess: "Ask the **Keeper** 1 of the **Investigation Questions**:",
    solidSuccess: "Ask the **Keeper** 2 of the **Investigation Questions**:",
    advancedSuccess: "Ask the **Keeper** any 2 questions about the mystery. (You don't have to use the **Investigation Questions** below.)",
    successFooter: `
* What happened here?
* What sort of creature is it?
* What can it do?
* What can hurt it?
* Where did it go?
* What was it going to do?
* What is being concealed here?`,
  },
  {
    name: "Investigate A Phenomena",
    description: "Investigate a phenomena to get answers.",

    coreStat: StatEnum.Sharp,

    miss: "The **Keeper** can make a hard move against you. You likely learn nothing new about the phenomena and may have drawn unwanted attention or put yourself at risk.",
    
    mixedSuccess: "Ask the **Keeper** 1 of the Investigation Questions:",
    solidSuccess: "Ask the **Keeper** 2 of the Investigation Questions:",
    advancedSuccess: "Ask the **Keeper** any 2 questions about the mystery. (You don't have to use the Investigation Questions below.)",
    successFooter: `
* What happened here?
* What type of phenomena is it?
* What can it do?
* How is this phenomenon doing this?
* What could fix it, cure it, or slow it down?
* what made it abate, transfer, or move on?
* How far does the effect reach?
* What will be affected next?
* What is being concealed here?`,
  },
  {
    name: "Manipulate Someone",
    description: "Sway someone to do something (after giving them a reason to do it.)",

    coreStat: StatEnum.Charm,

    miss: "The **Keeper** can make a hard move against you. They will likely not do what you asked of them. Your failure could lead to further complications.",
    
    mixedSuccess: "They'll do it, but only if you do something for them right now to show that you mean it. If you asked too much, they'll tell you what, if anything, it would take for them to do it.",
    solidSuccess: "They'll do what you asked for the reason you gave them. If you asked too much, they'll tell you the minimum it would take for them to do it (or if there's no way they'd do it).",
    advancedSuccess: "Not only do they do what you want right now, they also become your ally for the rest of the mystery (or, if you do enough for them, permanently).",
  },
  {
    name: "Manipulate A Hunter",
    description: "Sway a fellow **Hunter** to do something (after giving them a reason to do it.)",

    coreStat: StatEnum.Charm,

    miss: "It's up to that **Hunter** to decide how badly you offend or annoy them. They gain one **Experience** if they decide not to do what you asked. Monsters and minions cannot normally be manipulated.",
    
    mixedSuccess: "They gain one **Experience** if they do what you ask.",
    solidSuccess: "If they do what you ask they gain one **Experience** and get +1 **Forward**.",
    advancedSuccess: "They must **Act Under Pressure** to resist your request. If they do what you ask, they gain one **Experience** and take +1 **Ongoing** while doing what you asked.",
  },
  {
    name: "Protect Someone",
    description: "Prevent harm to another character or object.",

    coreStat: StatEnum.Tough,

    miss: "The **Keeper** can make a hard move against you. You may fail to protect them or suffer **Harm** or a complication.",
    
    mixedSuccess: "You protect them okay, but you'll suffer some or all of the **Harm** they were going to get.",
    solidSuccess: `
You protect them okay, but you'll suffer some or all of the **Harm** they were going to get.

Choose an extra effect:
* You suffer little **Harm** (-1 Harm).
* All impending danger is now focused on you.
* You inflict **Harm** on the enemy.
* You hold the enemy back.`,
    advancedSuccess: "Both you and the character you are protecting are unharmed and out of danger. If you were protecting a bystander, they also become your ally.",
  },
  {
    name: "Read A Bad Situation",
    description: "Look around, reading a bad situation for more information.",

    coreStat: StatEnum.Sharp,
    
    miss: "You learn nothing about the situation or things get more complicated.",
    
    mixedSuccess: "Ask the **Keeper** 1 of the Situation Questions:",
    solidSuccess: "Ask the **Keeper** 3 of the Situation Questions:",
    advancedSuccess: "Ask the **Keeper** any 3 questions you want about the situation, not just the Situation Questions:",
    successFooter: `
* What's my best way in?
* What's my best way out?
* Are there any dangers we haven't noticed?
* What's the biggest threat?
* What's most vulnerable to me?
* What's the best way to protect the victims?

If you act on the answers, you get +1 **Ongoing** while the information is relevant.`,
  },
]
