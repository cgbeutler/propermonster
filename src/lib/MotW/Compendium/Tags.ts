export enum ItemTag {
  // 1-harm, 2-harm, 3-harm, etc. // How much dmg the item can deal out
  intimate = `intimate`, hand = `hand`, close = `close`, far = `far`,
  area = "area", barrier = "barrier",
  auto = "auto", forceful = "forceful", sedating = "sedating", restraining = "restraining", useful = "useful",
  holy = "holy", unholy = "unholy", magic = "magic", fire = "fire", cold = "cold", ice = "ice", electricity = "electricity",
  force = "force", lifeDrain = "life-drain",
  balanced = "balanced", heavy = "heavy", many = "many", quick = "quick", slow = "slow", small = "small",
  large = "large", loud = "loud", quiet = "quiet", hidden = "hidden",
  ignoreArmor = "ignore-armor", /*armor = "armor",*/
  batteries = "batteries", reload = "reload", capacity = "capacity", recharge = "recharge",
  returning = "returning", stun = "stun", innocuous = "innocuous", obnoxious = "obnoxious", obvious = "obvious", messy = "messy", irritating = "irritating",
  autoTargeting = "auto-targeting", unreliable = "unreliable", valuable = "valuable", volatile = "volatile",
  // [a material]	This weapon is made from the named material, and is thus useful against monsters with that weakness.
  bone = "bone", coldIron = "cold-iron", obsidian = "obsidian", silver = "silver", steel = "steel", stone = "stone", wood = "wood",
  monsterWeakness = "monster-weakness", // Catch-all for divine smite
  // Good vehicle tags
  anonymous = "anonymous", armored = "armored", classic = "classic", concealedWeapons = "concealed-weapons",
  fast = "fast", intimidating = "intimidating", medKit = "medical-kit", monsterCage = "monster-cage",
  nimble = "nimble", offRoad = "off-road", roomy = "roomy", sleepingSpace = "sleeping-space", stealthy = "stealthy",
  surveillanceGear = "surveillance-gear", toolkit = "toolkit", tough = "tough", 
  // Bad vehicle tags
  beatenUp = "beaten-up", gasGuzzler = "gas-guzzler", old = "old", sluggish = "sluggish",
  temperamental = "temperamental", uncomfortable = "uncomfortable",
  // loud and obvious also work for vehicles 
}

export const GoodNormalVehicleTags: Array<ItemTag> = [
  ItemTag.anonymous, ItemTag.classic, ItemTag.fast, ItemTag.intimidating, ItemTag.medKit, ItemTag.nimble, ItemTag.roomy,
  ItemTag.sleepingSpace, ItemTag.stealthy, ItemTag.toolkit, ItemTag.tough,
] as const;

export const GoodVehicleTags: Array<ItemTag> = [
  ...GoodNormalVehicleTags,
  ItemTag.armored, ItemTag.concealedWeapons, ItemTag.monsterCage, ItemTag.surveillanceGear,
] as const;

export const BadVehicleTags: Array<ItemTag> = [
  ItemTag.beatenUp, ItemTag.gasGuzzler, ItemTag.loud, ItemTag.obvious, ItemTag.old, ItemTag.sluggish,
  ItemTag.temperamental, ItemTag.uncomfortable,
] as const;
export const VehicleTags = [ ...GoodVehicleTags, ...BadVehicleTags ] as const;

type ItemTagsExpanded = {[key in ItemTag]: string} & {
  '1-harm': string; '2-harm': string; '3-harm': string; '4-harm': string;
  '1-armor': string; '2-armor': string; '3-armor': string;
}

export const ItemTagDescriptions: { [key in keyof ItemTagsExpanded]: string } = {
  '1-harm': "Inflicts a wound worth 1 harm to something, reduced by its armor.",
  '2-harm': "Inflicts a wound worth 2 harm to something, reduced by its armor.",
  '3-harm': "Inflicts a wound worth 3 harm to something, reduced by its armor.",
  '4-harm': "Inflicts a wound worth 4 harm to something, reduced by its armor.",
  '1-armor': "Reduces incoming harm by 1.",
  '2-armor': "Reduces incoming harm by 2.",
  '3-armor': "Reduces incoming harm by 3.",
  
  // __ Item Tags __
  // 1-harm, 2-harm, 3-harm, etc. // How much dmg the item can deal out
  "area": "Can hit multiple foes. Divide the Harm you inflict across multiple targets.",
  "barrier": "Does harm to anything that passes through it. Counts as armor against any attacks that pass through it.",

  "intimate": "Effective at the closest of quarters—within the embrace of your foe.",
  "hand": "Effective within arms' reach.",
  "close": "Effective at fairly close quarters—outside arms' reach, but not too far.",
  // "mid": "Effective at medium range. Useful only if firearms and ranges are important within your game.",
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
  "loud": "Loud enough that it draws attention while in use.",
  "quiet": "Makes a lot less noise than one might expect.",
  "hidden": "Cannot be seen while in use.",

  "ignore-armor": "Harm from this item is not reduced by Armor. If armor has the 'magic' tag, then the attack needs both 'ignore-armor' and 'magic' to bypass the armor.",
  // "armor": "Armor provides harm reduction to harm moves - equal to the armor number.",

  "batteries": "Liable to run out of power at bad moments.",
  "capacity": "Has a limited capacity. May have to remove previous items if it fills up.",
  "reload": "Has limited ammunition or media, and may run out and need to be reloaded.",
  "recharge": "Must be recharged in some way; plugged into an outlet or perhaps bathed in moonlight.",

  "returning": "Returns to the owner/user at their call. May have a condition; Worth, light, etc.",
  "stun": "Causes creatures to be stunned briefly.",
  "innocuous": "Doesn't draw suspicion.",
  "obnoxious": "Draws immediate attention.",
  "obvious": "Cannot be hidden easily. Normal folks may notice it.",
  "messy": "Spreads a lot of blood and gore around.",
  "auto-targeting": "Finds targets on its own.",
  "unreliable": "Needs regular cleaning and maintenance, otherwise it just isn't gonna work.",
  "valuable": "Antique or made of valuable materials.",
  "volatile": "Dangerous and unstable.",
  "irritating": "Irritates sensitive areas, like the eyes, slowing or stopping your target in its tracks.",

  "bone": "Made of bone.",
  "cold-iron": "Made of cold iron.",
  "obsidian": "Made of obsidian.",
  "silver": "Made of silver or coated in silver.",
  "steel": "Made of steel.",
  "stone": "Made of stone.",
  "wood": "Made of wood.",
  "monster-weakness": "Always counts as a weakness for monsters.",
  // [a material]	This weapon is made from the named material, and is thus useful against monsters with that weakness.
  
  // __ Vehicle Tags __
  "anonymous": "Has no discernible markings.",
  "armored": "Harm passing through is reduced as if you had +1 **Armor**.",
  "classic": "Admired by car lovers and the older generation.",
  "concealed-weapons": "Contains some basic weapons, if you know where to look.",
  "fast": "Can outmatch others in a drag race.",
  "intimidating": "They won't wanna mess with you while you're behind the wheel.",
  "medical-kit": "Heal an additional point (2-harm) when using First Aid.",
  "monster-cage": "Temporarily hold a monster.",
  "nimble": "Can outmaneuver other vehicles.",
  "off-road": "Can go off-road without much trouble.",
  "roomy": "Can fit more people or things.",
  "sleeping-space": "Get a decent night sleep even on the go. (Allowing you to heal the usual 1 **Harm**.)",
  "stealthy": "Makes little noise.",
  "surveillance-gear": "Has equipment for watching, listening, and recording from a distance.",
  "toolkit": "Has a lot of common tools.",
  "tough": "It would take a lot to disable this vehicle.",

  "beaten-up": "It likely won't impress anyone.",
  "gas-guzzler": "It may run out of gas at inopportune times.",
  // "loud": "Draws attention while its running.",
  // "obvious": "Draws attention and stands out.",
  "old": "Lacks modern features and may take more maintenance.",
  "sluggish": "Not great in a chase or on steep hills.",
  "temperamental": "Likely to break down or not start at random times.",
  "uncomfortable": "Staying it it for long may bring on stiffness and pangs.",
}