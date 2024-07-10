export const PositiveVehicleTags = [
  "anonymous", "armored", "classic", "concealed-weapons", "fast", "intimidating", "medical-kit", "monster-cage",
  "nimble", "roomy", "sleeping-space", "stealthy", "surveillance-gear", "toolkit", "tough",
] as const;

export const NegativeVehicleTags = [
  "beaten-up", "gas-guzzler", "loud", "obvious", "old", "slow", "temperamental", "uncomfortable",
] as const;

export const VehicleTags = [ ...PositiveVehicleTags, ...NegativeVehicleTags ] as const;


export enum RangeEnum { Intimate = "intimate", Hand = "hand", Close = "close", Far = "far" }

export const ItemTags = [
  // 1-harm, 2-harm, 3-harm, etc. // How much dmg the item can deal out
  "area", "barrier",
  "intimate", "hand", "close", "mid", "far", 
  "auto", "forceful", "sedating", "restraining", "useful",
  "holy", "unholy", "magic", "fire", "cold", "ice", "electricity", "force", "life-drain",
  "balanced", "heavy", "many", "quick", "slow", "small",
  "large", "loud", "quiet",
  "ignore-armor", "armor",
  "batteries", "reload", "recharge",
  "returning", "stun", "innocuous", "obnoxious", "messy", "auto-targeting", "unreliable", "valuable", "volatile",
  // [a material]	This weapon is made from the named material, and is thus useful against monsters with that weakness.
  "wood", "silver",
] as const;


export const _tagDescriptions: { [key in typeof VehicleTags[number]]: string } = {
  // __ Vehicle Tags __
  "anonymous": "Has no discernable markings.",
  "armored": "While inside, you have +1 **Armor**.",
  "classic": "Admired by car lovers and the older generation.",
  "concealed-weapons": "Contains some basic weapons, if you know where to look.",
  "fast": "Can outmatch others in a drag race.",
  "intimidating": "They won't wanna mess with you while you're behind the wheel.",
  "medical-kit": "Heal an additional point (2-harm) when using First Aid.",
  "monster-cage": "Temporarily hold a monster.",
  "nimble": "Can outmaneuver other vehicles.",
  "roomy": "Can fit more people or things.",
  "sleeping-space": "Get a decent night sleep even on the go. (Allowing you to heal the usual 1 **Harm**.)",
  "stealthy": "Makes little noise.",
  "surveillance-gear": "Has equipment for watching, listening, and recording from a distance.",
  "toolkit": "Has a lot of common tools.",
  "tough": "It would take a lot to disable this vehicle.",

  "beaten-up": "It likely won't impress anyone.",
  "gas-guzzler": "It may run out of gas at inopportune times.",
  "loud": "Draws attention while its running.",
  "obvious": "Draws attention and stands out.",
  "old": "Lacks modern features and may take more maintenance.",
  "slow": "Not great in a chase or on steep hills.",
  "temperamental": "Likely to break down or not start at random times.",
  "uncomfortable": "Staying it it for long may bring on stiffness and pangs.",
}

export const ItemTagDescriptions: { [key in typeof ItemTags[number]]: string } = {
  // __ Item Tags __
  // 1-harm, 2-harm, 3-harm, etc. // How much dmg the item can deal out
  "area": "Can hit multiple foes. Divide the Harm you inflict across multiple targets.",
  "barrier": "Does harm to anything that passes through it. Counts as armor against any attacks that pass through it.",

  "intimate": "Effective at the closest of quarters—within the embrace of your foe.",
  "hand": "Effective within arms' reach.",
  "close": "Effective at fairly close quarters—outside arms' reach, but not too far.",
  "mid": "Effective at medium range. Useful only if firearms and ranges are important within your game.",
  "far": "Effective at long range.",

  "auto": "Rapid, automatic fire, possibly draining its reserves quickly.",
  "forceful": "Success pushes things around, allowing you to 'force them where you want them' in addition to normal attack effects.",
  "sedating": "Success educes a loss of consciousness.",
  "restraining": "Success entangles or grabs the victim.",
  "useful": "Has other uses aside from violence.",

  "holy": "Effective against monsters with a weakness to holy.",
  "unholy": "Effective against monsters with a weakness to unholy.",
  "magic": "Effective against creatures with magic protection or armor that normal weapons would miss or be reduced by.",
  "fire": "Success sets things on fire.",
  "cold": "Lower the temperature. Success may restrain or slow targets.",
  "ice": "Freeze or lower the temperature. May restrain or slow targets.",
  "electricity": "Electrocute targets. Success may stun or force someone to drop something.",
  "force": "Utilizes pure kinetic energy or magical pressure.",
  "life-drain": "Success healed the wielder of harm equal to the harm dished out.",

  "balanced": "Easy to wield and keep your grip on.",
  "heavy": "Burdensome and difficult to wield.",
  "many": "You can carry a large number of it.",
  "quick": "Takes less time to prepare and attack, giving you a better chance of going first.",
  "slow": "Takes time to prepare and attack.",

  "small": "Easy to conceal.",
  "large": "Bulky and may be unwieldy.",
  "loud": "Loud enough that it draws attention.",
  "quiet": "Makes a lot less noise than one might expect.",

  "ignore-armor": "Harm from this item is not reduced by Armor. If armor has the 'magic' tag, then the attack needs both 'ignore-armor' and 'magic' to bypass the armor.",
  "armor": "Armor provides harm reduction to harm moves - equal to the armor number.",

  "batteries": "Liable to run out of power at bad moments.",
  "reload": "Has limited ammunition, and may run out and need to be reloaded.",
  "recharge": "Must be recharged in some way; plugged into an outlet, or perhaps bathed in moonlight",

  "returning": "Returns to the owner/user at their call. May have a condition; Worth, light, etc.",
  "stun": "Causes creatures to be stunned briefly.",
  "innocuous": "Doesn't draw suspicion.",
  "obnoxious": "Draws immediate attention.",
  "messy": "Spreads a lot of blood and gore around.",
  "auto-targeting": "Finds targets on its own.",
  "unreliable": "Needs regular cleaning and maintenance, otherwise it just isn't gonna work.",
  "valuable": "Antique or made of valuable materials.",
  "volatile": "Dangerous and unstable.",
  
  "wood": "Made of wood.",
  "silver": "Made of silver or coated in silver.",
  // [a material]	This weapon is made from the named material, and is thus useful against monsters with that weakness.
}