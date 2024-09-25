import type { CompendiumDescription } from "./Shared";
import {Improvements} from "./FeatsImprovements";
import {AdvImprovements} from "./FeatsAdvImprovements";
import type {Stats, Vibe} from "./CompendiumTypes";
import {StartingFeats} from "./FeatsStarting";
import {StartingGear} from "./FeatsGear";
import {Moves} from "./FeatMoves";

export interface PlaybookDesc extends CompendiumDescription {
  blurb: string;
  vibe: Vibe;
  statPicks: Array<{[K in Stats]: number}>;
  
  startingFeats: Array<string>;
  movesToChoose: number;
  moves: Array<string>;
  gear: string;
  improvements: Array<string>;
  advImprovements: Array<string>;

  looks: Array<Array<string>>;
}

export let Playbooks: Array<PlaybookDesc> = [
  {
    name: `Chosen`,
    id: `94a658a0-f5dc-4e4b-a1ec-1b322b08d78f`,
    description: `You are the chosen one. You have the potential to stop the end of the world, but you are not ready for it yet.`,
    blurb: `Your birth was prophesied. You are the Chosen One, and with your abilities you can save the world.
If you fail, all will be destroyed. It all rests on you. Only you.`,
    vibe: { action: 3, mystery: 1, fantasy: 2, storySway: 3, support: 1 },

    statPicks: [
      {Charm: 2, Cool:-1, Sharp: 1, Tough: 2, Weird:-1},
      {Charm:-1, Cool: 2, Sharp: 1, Tough: 2, Weird:-1},
      {Charm: 1, Cool: 2, Sharp: 1, Tough: 1, Weird:-1},
      {Charm:-1, Cool: 1, Sharp: 2, Tough:-1, Weird: 2},
      {Charm: 1, Cool: 2, Sharp:-1, Tough:-1, Weird: 2},
    ],
    
    startingFeats: [
      StartingFeats.BasicMoves.id,
      StartingFeats.Fate.id, // +Luck effect
      Moves.DestinysPlaything.id,
      Moves.ImHereForAReason.id,
    ],
   
    movesToChoose: 1,
    moves: [
      Moves.TheBigEntrance.id,
      Moves.Devastating.id,
      Moves.Dutiful.id,
      Moves.Invincible.id,
      Moves.Resilience.id,
    ],
    
    gear: StartingGear.Chosen.id,
    
    improvements: [
      Improvements.CharmMax3.id,
      Improvements.CoolMax3.id,
      Improvements.SharpMax3.id,
      Improvements.ToughMax3.id,
      Improvements.WeirdMax3.id,
      Improvements.Move.id,
      Improvements.Move2.id,
      Improvements.Ally.id,
      Improvements.AnyMove.id,
      Improvements.AnyMove2.id,
    ],
    advImprovements: [
      AdvImprovements.AlteredDestiny.id,
      AdvImprovements.StatUp.id,
      AdvImprovements.Luck.id,
      AdvImprovements.AdvMoves.id,
      AdvImprovements.AdvMoves2.id,
      AdvImprovements.SecondHunter.id,
      AdvImprovements.ChangeType.id,
      AdvImprovements.Retire.id,
    ],

    looks: [
      ["kid", "teen", "young", "burnt-out"],
      ["fresh face", "haggard face", "young face", "haunted face", "hopeful face", "controlled face"],
      ["preppy clothes", "casual wear", "urban wear", "normal clothes", "neat clothes", "street wear"],
    ]
  },
  {
    name: `Crooked`,
    id: `bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae`,
    description: `You have an occult criminal past, but now you hunt monsters. Brings old friends and enemies into the story.`,
    blurb: `“Yeah, I've been around the block. A bit of this, a bit of that.
When I came across the secret underworld of monsters and magic… well… it wasn't so different from the underworld I already knew.
It was easy to find an angle, just like before.”`,
    vibe: { action: 2, mystery: 3, fantasy: 2, storySway: 2, support: 2 },
    
    statPicks: [
      {Charm: 1, Cool: 1, Sharp: 2, Tough: 0, Weird:-1},
      {Charm:-1, Cool: 1, Sharp: 1, Tough: 2, Weird: 0},
      {Charm:-1, Cool: 2, Sharp: 2, Tough: 0, Weird:-1},
      {Charm: 2, Cool: 1, Sharp: 1, Tough: 0, Weird:-1},
      {Charm: 2, Cool: 0, Sharp: 1, Tough:-1, Weird: 1},
    ],

    startingFeats: [
      StartingFeats.BasicMoves.id,
      StartingFeats.CrookedBackground.id, // +Luck effect
    ],
    
    movesToChoose: 2,
    moves: [
      Moves.Artifact.id,
      Moves.CrookedCrew.id,
      Moves.DealWithTheDevil.id,
      Moves.FriendsOnTheForce.id,
      Moves.Made.id,
      Moves.Driver.id,
      Moves.HomeGround.id,
      Moves.Notorious.id,
    ],
    
    gear: StartingGear.Crooked.id,
    
    improvements: [
      Improvements.SharpMax3.id,
      Improvements.CharmMax2.id,
      Improvements.CoolMax2.id,
      Improvements.ToughMax2.id,
      Improvements.Move.id,
      Improvements.Move2.id,
      Improvements.CrookedAlly.id,
      Improvements.StashOfMoney.id,
      Improvements.AnyMove.id,
      Improvements.AnyMove2.id,
    ],
    advImprovements: [// TODO: No uniques? Make our own?
      AdvImprovements.StatUp.id,
      AdvImprovements.Luck.id,
      AdvImprovements.AdvMoves.id,
      AdvImprovements.AdvMoves2.id,
      AdvImprovements.SecondHunter.id,
      AdvImprovements.ChangeType.id,
      AdvImprovements.Retire.id,
    ],
    
    looks: [
      ["hard eyes", "friendly eyes", "watchful eyes", "smiling eyes", "calculating eyes"],
      ["street wear", "tailored suit", "cheap suit", "tracksuit", "nondescript clothes"],
    ]
  },
  {
    name: `Divine`,
    id: `9e9f712c-54d9-4193-b7ad-48c64f7ec9dc`,
    description: `You are, or have been imbued with, a godly power. This causes many problems, but you are formidable.`,
    blurb: `I am the Light, the Sword.

I am sent to defend the meek from Darkness.

All Evil fears me, for I am its end.`,
    vibe: { action: 3, mystery: 1, fantasy: 3, storySway: 3, support: 2 },

    statPicks: [
      {Charm: 1, Cool: 1, Sharp:-1, Tough: 2, Weird: 0},
      {Charm:-1, Cool: 2, Sharp:-1, Tough: 2, Weird: 0},
      {Charm:-1, Cool: 0, Sharp: 1, Tough: 2, Weird: 1},
      {Charm: 1, Cool: 1, Sharp: 0, Tough: 2, Weird:-1},
      {Charm:-1, Cool: 1, Sharp: 0, Tough: 2, Weird: 1},
    ],
    
    startingFeats: [
      StartingFeats.BasicMoves.id,
      StartingFeats.Mission.id, // +Luck effect
    ],
    
    movesToChoose: 3,
    moves: [
      Moves.BossFromBeyond.id,
      Moves.AngelWings.id,
      Moves.WhatINeed.id,
      Moves.Smite.id,
      Moves.Soothe.id,
      Moves.LayOnHands.id,
      Moves.CastOutEvil.id,
    ],
    
    gear: StartingGear.Divine.id,
    
    improvements: [
      Improvements.ToughMax3.id,
      Improvements.CharmMax2.id,
      Improvements.CoolMax2.id,
      Improvements.SharpMax2.id,
      Improvements.WeirdMax2.id,
      Improvements.Move.id,
      Improvements.Move2.id,
      Improvements.DivineAlly.id,
      Improvements.AnyMove.id,
      Improvements.AnyMove2.id,
    ],
    advImprovements: [
      AdvImprovements.NewMission.id,
      AdvImprovements.StatUp.id,
      AdvImprovements.Luck.id,
      AdvImprovements.AdvMoves.id,
      AdvImprovements.AdvMoves2.id,
      AdvImprovements.SecondHunter.id,
      AdvImprovements.ChangeType.id,
      AdvImprovements.Retire.id,
    ],
    
    looks: [
      ["human", "marked by divinity", "inhuman"],
      ["blazing eyes", "terrifying eyes", "placid eyes", "sparkling eyes", "perceptive eyes", "starry eyes", "glowing eyes"],
      ["dirty clothes", "perfect suit", "rumpled suit", "casual clothes", "practical clothes"],
    ]
  },
  {
    name: `Expert`,
    id: `689d32a6-faa1-4258-9fda-894b9bdf8571`,
    description: `You have studied monsters and the occult all your life. Now you are more of a mentor and supporter to the team than a front-line monster hunter.`,
    blurb: `I have dedicated my life to the study of the unnatural.
I know their habits, their weaknesses.
I may not be youngest or strongest, but my knowledge makes me the biggest threat.`,
    vibe: { action: 3, mystery: 3, fantasy: 2, storySway: 1, support: 3 },

    statPicks: [
      {Charm:-1, Cool: 1, Sharp: 2, Tough: 1, Weird: 0},
      {Charm: 0, Cool: 1, Sharp: 2, Tough:-1, Weird: 1},
      {Charm: 1, Cool:-1, Sharp: 2, Tough: 1, Weird: 0},
      {Charm:-1, Cool: 1, Sharp: 2, Tough: 0, Weird: 1},
      {Charm:-1, Cool: 0, Sharp: 2, Tough:-1, Weird: 2},
    ],
    
    startingFeats: [
      StartingFeats.BasicMoves.id,
      StartingFeats.ExpertBackground.id, // +Luck effect
      StartingFeats.Haven.id,
    ],
    
    movesToChoose: 2,
    moves: [
      Moves.IveReadAboutThis.id,
      Moves.OftenRight.id,
      Moves.Preparedness.id,
      Moves.NotAsBadAsItLooked.id,
      Moves.PreciseStrike.id,
      Moves.TheOneWithThePlan.id,
      Moves.DarkPast.id,
    ],

    gear: StartingGear.Expert.id,
    
    improvements: [
      Improvements.SharpMax3.id,
      Improvements.CharmMax2.id,
      Improvements.CoolMax2.id,
      Improvements.WeirdMax2.id,
      Improvements.Move.id,
      Improvements.Move2.id,
      Improvements.HavenPick.id,
      Improvements.HavenPick2.id,
      Improvements.AnyMove.id,
      Improvements.AnyMove2.id,
    ],
    advImprovements: [// TODO: No uniques? Make our own?
      AdvImprovements.StatUp.id,
      AdvImprovements.Luck.id,
      AdvImprovements.AdvMoves.id,
      AdvImprovements.AdvMoves2.id,
      AdvImprovements.SecondHunter.id,
      AdvImprovements.ChangeType.id,
      AdvImprovements.Retire.id,
    ],
    
    looks: [
      ["thoughtful face", "lined face", "scarred face", "contemplative face", "stern face", "avuncular face", "experienced face", "ancient face"],
      ["old fashioned clothes", "casual clothes", "utility clothes", "tailored clothes", "outdoor clothes"],
    ]
  },
  {
    name: `Flake`,
    id: `3ef37c00-3254-4af4-830a-9a21e7c6d02a`,
    description: `You believe and research the strangest side of the paranormal, and rely on intuition more than facts.`,
    blurb: `Everything's connected. But not everyone can see the patterns, and most people don't even look that hard.
But me, I can never stop looking deeper. I can never stop seeing the truth. I spot the patterns.
That's how I found the monsters, and that's how I help kill them.`,
    vibe: { action: 2, mystery: 3, fantasy: 2, storySway: 1, support: 1 },

    statPicks: [
      {Charm: 1, Cool: 1, Sharp: 2, Tough:-1, Weird: 0},
      {Charm: 0, Cool: 1, Sharp: 2, Tough:-1, Weird: 1},
      {Charm: 1, Cool:-1, Sharp: 2, Tough: 1, Weird: 0},
      {Charm: 1, Cool:-1, Sharp: 2, Tough: 0, Weird: 1},
      {Charm:-1, Cool:-1, Sharp: 2, Tough: 0, Weird: 2},
    ],
    
    startingFeats: [
      StartingFeats.BasicMoves.id,
      StartingFeats.FlakeBackground.id, // +Luck effect
    ],
    
    movesToChoose: 3,
    moves: [
      Moves.ConnectTheDots.id,
      Moves.CrazyEyes.id,
      Moves.ItAllFitsTogether.id,
      Moves.SuspiciousMind.id,
      Moves.OftenOverlooked.id,
      Moves.Contrary.id,
      Moves.NetFriends.id,
      Moves.Sneaky.id,
    ],

    gear: StartingGear.Flake.id,
    
    improvements: [
      Improvements.SharpMax3.id,
      Improvements.CharmMax2.id,
      Improvements.CoolMax2.id,
      Improvements.WeirdMax2.id,
      Improvements.Move.id,
      Improvements.Move2.id,
      Improvements.Haven.id,
      Improvements.HavenPick.id,
      Improvements.AnyMove.id,
      Improvements.AnyMove2.id,
    ],
    advImprovements: [// TODO: No uniques? Make our own?
      AdvImprovements.StatUp.id,
      AdvImprovements.Luck.id,
      AdvImprovements.AdvMoves.id,
      AdvImprovements.AdvMoves2.id,
      AdvImprovements.SecondHunter.id,
      AdvImprovements.ChangeType.id,
      AdvImprovements.Retire.id,
    ],
    
    looks: [
      ["wild eyes", "moving eyes", "focused eyes", "searching eyes", "suspicious eyes", "wide eyes", "guarded eyes"],
      ["ratty clothes", "casual clothes", "rumpled suit", "neat clothes", "comfortable clothes", "army surplus gear"],
    ]
  },
  {
    name: `Gumshoe`,
    id: `12bc1318-24c7-4402-b9bb-be0698c4ed99`,
    description: `You are a detective or private eye with a connection to the supernatural, and a code. Great at solving mysteries.`,
    blurb: `“You won't understand this… When I take a case, I'm supposed to do something about it.
You're supposed to do something about it whether you like it or not.
You've got to pay for what you've done, sweetheart, whatever it is I might feel about you.
Yes, I'll have some bad nights, but I'll still have myself.”`,
    vibe: { action: 2, mystery: 3, fantasy: 1, storySway: 2, support: 1 },

    statPicks: [
      {Charm: 2, Cool: 0, Sharp: 1, Tough: 0, Weird: 0},
      {Charm: 2, Cool: 0, Sharp: 1, Tough: 1, Weird:-1},
      {Charm: 1, Cool: 0, Sharp: 2, Tough: 1, Weird:-1},
      {Charm: 1, Cool:-1, Sharp: 2, Tough: 0, Weird: 1},
      {Charm: 2, Cool: 1, Sharp: 1, Tough: 0, Weird:-1},
    ],
    
    startingFeats: [
      StartingFeats.BasicMoves.id,
      StartingFeats.GumshoeBackground.id, // +Luck effect
      StartingFeats.GumshoeCode.id, // Gumshoe Code
      Moves.OccultConfidential.id,
      Moves.TheNakedCity.id,
    ],
    
    movesToChoose: 1,
    moves: [
      Moves.ThePostman.id,
      Moves.TheLongGoodbye.id,
      Moves.JessicaJonesEntry.id,
      Moves.OutOfThePast.id,
      Moves.AsphaltJungle.id,
      Moves.Hacker.id,
      Moves.JustOneMoreThing.id,
    ],

    gear: StartingGear.Gumshoe.id,
    
    improvements: [
      Improvements.CharmMax3.id,
      Improvements.SharpMax3.id,
      Improvements.CoolMax2.id,
      Improvements.ToughMax2.id,
      Improvements.Move.id,
      Improvements.Move2.id,
      Improvements.DelayTheInevitable.id,
      Improvements.GumshoeHaven.id,
      Improvements.TheBareNakedCity.id,
    ],
    advImprovements: [
      AdvImprovements.GumshoeAlly.id,
      AdvImprovements.StatUp.id,
      AdvImprovements.Luck.id,
      AdvImprovements.AdvMoves.id,
      AdvImprovements.AdvMoves2.id,
      AdvImprovements.SecondHunter.id,
      AdvImprovements.ChangeType.id,
      AdvImprovements.Retire.id,
    ],
    
    looks: [
      ["angelic face", "unshaven face", "handsomely devilish face", "world-weary face", "sly face", "streetwise face", "quiet face", "knowing face", "watchful face", "merry face", "obvious ex-cop face", "hunted face"],
      ["nondescript clothes", "tailored clothes and sunglasses", "vintage clothes", "fashion clothes", "fedora and trench coat", "California casual", "biker clothes", "Pacific island casual"],
    ]
  },
  {
    name: `Hex`,
    id: `23bdadbc-b690-4baa-8d96-7c791b4d66da`,
    description: `A trained witch who can codify her spells so they are more predictable. Excellent at magic.`,
    blurb: `“I didn't have magic fall into my lap.
I'm not blessed, I'm not one of the scary children—I'm just a girl who found a way to give herself the strength to fight this war.
I don't have the option of not taking this risk.”`,
    vibe: { action: 2, mystery: 1, fantasy: 3, storySway: 1, support: 1 },

    statPicks: [
      {Charm: 2, Cool: 0, Sharp: 0, Tough:-1, Weird: 2},
      {Charm: 1, Cool:-1, Sharp: 1, Tough: 0, Weird: 2},
      {Charm:-1, Cool: 1, Sharp: 0, Tough: 1, Weird: 2},
      {Charm:-1, Cool: 0, Sharp: 1, Tough: 1, Weird: 2},
      {Charm: 0, Cool: 0, Sharp: 2, Tough:-1, Weird: 2},
    ],
    
    startingFeats: [
      StartingFeats.BasicMoves.id,
      StartingFeats.HexBackground.id, // +Luck effect
      StartingFeats.Rotes.id,
      StartingFeats.Temptation.id,
      Moves.BadLuckCharm.id,
    ],

    movesToChoose: 2,
    moves: [
      Moves.BurnEverything.id,
      Moves.CastTheBones.id,
      Moves.ForceOfWill.id,
      Moves.LuckOfTheDamned.id,
      Moves.SympatheticToken.id,
      Moves.ThisMightSting.id,
      Moves.WiseSoul.id,
    ],

    gear: StartingGear.Hex.id,
    
    improvements: [
      Improvements.WeirdMax3.id,
      Improvements.CharmMax2.id,
      Improvements.CoolMax2.id,
      Improvements.SharpMax2.id,
      Improvements.Rote.id,
      Improvements.Rote2.id,
      Improvements.Rote3.id,
      Improvements.HexMove.id,
      Improvements.HexMove2.id,
      Improvements.Haven.id,
      Improvements.AnyMove.id,
    ],
    advImprovements: [
      AdvImprovements.AdvRotes.id,
      AdvImprovements.AdvancedHexMove.id,
      AdvImprovements.StatUp.id,
      AdvImprovements.Luck.id,
      AdvImprovements.AdvMoves.id,
      AdvImprovements.AdvMoves2.id,
      AdvImprovements.SecondHunter.id,
      AdvImprovements.ChangeType.id,
      AdvImprovements.Retire.id,
    ],
    
    looks: [
      ["sharp eyes", "angry eyes", "glowing eyes", "shifty eyes", "serene eyes", "featureless eyes"],
      ["retro clothes", "hippy clothes", "trendy clothes", "too-formal clothes", "ill-fitting clothes", "anachronistic clothes"],
    ]
  },
  {
    name: `Initiate`,
    id: `a78c7ee1-eb8d-4622-adeb-22d9d87169b5`,
    description: `You are part of an ancient monster-hunting secret society. Wide range of abilities.`,
    blurb: `Since the dawn of history, we have been the bulwark against Darkness.
We know the Evils of the world, and we stand against them so that the mass of humanity need not fear.
We are the Flame that cleanses the Shadows.`,
    vibe: { action: 2, mystery: 3, fantasy: 1, storySway: 3, support: 2 },

    statPicks: [
      {Charm:-1, Cool: 1, Sharp: 0, Tough: 1, Weird: 2},
      {Charm: 0, Cool: 1, Sharp: 1, Tough:-1, Weird: 2},
      {Charm:-1, Cool: 0, Sharp:-1, Tough: 2, Weird: 2},
      {Charm: 1, Cool:-1, Sharp: 1, Tough: 0, Weird: 2},
      {Charm: 0, Cool: 0, Sharp: 0, Tough: 1, Weird: 2},
    ],
    
    startingFeats: [
      StartingFeats.BasicMoves.id,
      StartingFeats.Sect.id, // +Luck effect
      Moves.TheCall.id,
    ],

    movesToChoose: 3,
    moves: [
      Moves.AncientFightingArts.id,
      Moves.Mystic.id,
      Moves.Fortunes.id,
      Moves.SacredOath.id,
      Moves.Mentor.id,
      Moves.Apprentice.id,
      Moves.HelpingHand.id,
      Moves.ThatOldBlackMagic.id,
    ],

    gear: StartingGear.Initiate.id,
    
    improvements: [
      Improvements.WeirdMax3.id,
      Improvements.CoolMax2.id,
      Improvements.SharpMax2.id,
      Improvements.ToughMax2.id,
      Improvements.Move.id,
      Improvements.Move2.id,
      Improvements.SectCommander.id,
      Improvements.InitiateTeamLead.id,
      Improvements.AnyMove.id,
      Improvements.AnyMove2.id,
    ],
    advImprovements: [
      AdvImprovements.SectLeader.id,
      AdvImprovements.StatUp.id,
      AdvImprovements.Luck.id,
      AdvImprovements.AdvMoves.id,
      AdvImprovements.AdvMoves2.id,
      AdvImprovements.SecondHunter.id,
      AdvImprovements.ChangeType.id,
      AdvImprovements.Retire.id,
    ],
    
    looks: [
      ["hardened body", "tattooed body", "agile body", "strong body", "thin body", "angular body", "hunched body"],
      ["archaic clothes", "unfashionable clothes", "ceremonial clothes", "mismatched clothes", "formal clothes"],
    ],
  },
  {
    name: `Monstrous`,
    id: `a5f796af-dd20-4ee0-8920-18b80e20ec24`,
    description: `You are a monster—or half-monster—on the side of good. Wide variety of abilities depending on building your monstrous breed.`,
    blurb: `I feel the hunger, the lust to destroy. But I fight it: I never give in.
I'm not human any more, not really, but I have to protect those who still are.
That way I can tell myself I'm different to the other monsters.

Sometimes I can even believe it.`,
    vibe: { action: 3, mystery: 1, fantasy: 3, storySway: 1, support: 1 },

    statPicks: [
      {Charm:-1, Cool:-1, Sharp: 0, Tough: 2, Weird: 3},
      {Charm:-1, Cool: 1, Sharp: 1, Tough: 0, Weird: 3},
      {Charm: 2, Cool: 0, Sharp:-1, Tough:-1, Weird: 3},
      {Charm:-2, Cool: 2, Sharp: 0, Tough: 0, Weird: 3},
      {Charm: 0, Cool:-1, Sharp: 2, Tough:-1, Weird: 3},
    ],
    
    startingFeats: [
      StartingFeats.BasicMoves.id,
      StartingFeats.MonsterBreed.id, // +Luck effect
    ],
    
    movesToChoose: 2,
    moves: [
      Moves.Immortal.id,
      Moves.UnnaturalAppeal.id,
      Moves.UnholyStrength.id,
      Moves.Incorporeal.id,
      Moves.PreternaturalSpeed.id,
      Moves.ClawsOfTheBeast.id,
      Moves.MentalDomination.id,
      Moves.UnquenchableVitality.id,
      Moves.DarkNegotiator.id,
      Moves.Flight.id,
      Moves.Shapeshifter.id,
      Moves.SomethingBorrowed.id,
    ],

    gear: StartingGear.Monstrous.id,
    
    improvements: [
      Improvements.CharmMax2.id,
      Improvements.CoolMax2.id,
      Improvements.SharpMax2.id,
      Improvements.ToughMax2.id,
      Improvements.Move.id,
      Improvements.Move2.id,
      Improvements.Haven.id,
      Improvements.NaturalAttacks.id,
      Improvements.AnyMove.id,
      Improvements.AnyMove2.id,
    ],
    advImprovements: [
      AdvImprovements.CurseFree.id,
      AdvImprovements.MonstrousRetirement.id,
      AdvImprovements.StatUp.id,
      AdvImprovements.Luck.id,
      AdvImprovements.AdvMoves.id,
      AdvImprovements.AdvMoves2.id,
      AdvImprovements.SecondHunter.id,
      AdvImprovements.ChangeType.id,
      AdvImprovements.Retire.id,
    ],
    
    looks: [
      ["almost human", "half human", "monstrous"],
      ["sinister aura", "powerful aura", "dark aura", "unnerving aura", "energetic aura", "evil aura", "bestial aura"],
      ["archaic clothes", "casual clothes", "ragged clothes", "tailored clothes", "stylish clothes", "street clothes", "outdoor clothes"],
    ],
  },
  {
    name: `Mundane`,
    id: `b03c7fb1-9ce4-4cba-a527-6c1380ac5de0`,
    description: `You are the regular person without any powers. Good at supporting the rest of the team (often by getting into trouble.)`,
    blurb: `You heard about how monsters only pick on people with crazy powers who can fight back on even terms?
Yeah, me neither. But, hell, I ended up in this monster-hunting team so I gotta do what I can, right?`,
    vibe: { action: 2, mystery: 3, fantasy: 1, storySway: 1, support: 3 },

    statPicks: [
      {Charm: 2, Cool: 1, Sharp: 0, Tough: 1, Weird:-1},
      {Charm: 2, Cool:-1, Sharp: 1, Tough: 1, Weird: 0},
      {Charm: 2, Cool: 0, Sharp:-1, Tough: 1, Weird: 1},
      {Charm: 2, Cool: 0, Sharp: 1, Tough: 1, Weird:-1},
      {Charm: 2, Cool: 1, Sharp: 1, Tough: 0, Weird:-1},
    ],
    
    startingFeats: [
      StartingFeats.BasicMoves.id,
      StartingFeats.MundaneBackground.id, // +Luck effect
    ],

    movesToChoose: 3,
    moves: [
      Moves.AlwaysTheVictim.id,
      Moves.Oops.id,
      Moves.LetsGetOutOfHere.id,
      Moves.PanicButton.id,
      Moves.ThePowerOfHeart.id,
      Moves.TrustMe.id,
      Moves.WhatCouldGoWrong.id,
      Moves.IllCheckItOut.id,
    ],

    gear: StartingGear.Mundane.id,
    
    improvements: [
      Improvements.CharmMax3.id,
      Improvements.CoolMax2.id,
      Improvements.SharpMax2.id,
      Improvements.ToughMax2.id,
      Improvements.Move.id,
      Improvements.Move2.id,
      Improvements.Luck.id,
      Improvements.Luck2.id,
      Improvements.AnyMove.id,
      Improvements.AnyMove2.id,
    ],
    advImprovements: [
      AdvImprovements.StatUp.id,
      AdvImprovements.Luck.id,
      AdvImprovements.Luck2.id,
      AdvImprovements.AdvMoves.id,
      AdvImprovements.AdvMoves2.id,
      AdvImprovements.SecondHunter.id,
      AdvImprovements.ChangeType.id,
      AdvImprovements.Retire.id,
    ],
    
    looks: [
      ["kid", "teen", "adult", "old"],
      ["friendly face", "alluring face", "laughing face", "trustworthy face", "average face", "serious face", "sensual face"],
      ["normal clothes", "casual clothes", "goth clothes", "sporty clothes", "work clothes", "street clothes", "nerdy clothes"],
    ],
  },
  {
    name: `Professional`,
    id: `58924c0d-c015-4fcd-8fd9-ca75f12fd019`,
    description: `You work for an official monster-hunting agency. Good at directing and supporting the team.`,
    blurb: `It's kind of strange when your regular 9-to-5 job is to hunt down monsters.
Still, that's the job I took on when I joined this outfit. It pays well, and the benefits are good.
Like they say, “You don't have to be crazy to work here, but it sure helps!”`,
    vibe: { action: 2, mystery: 3, fantasy: 1, storySway: 2, support: 3 },

    statPicks: [
      {Charm: 0, Cool: 2, Sharp:-1, Tough: 2, Weird:-1},
      {Charm:-1, Cool: 2, Sharp: 1, Tough: 1, Weird: 0},
      {Charm: 1, Cool: 2, Sharp: 1, Tough:-1, Weird: 0},
      {Charm:-1, Cool: 2, Sharp: 1, Tough: 0, Weird: 1},
      {Charm: 0, Cool: 2, Sharp: 2, Tough:-1, Weird:-1},
    ],
    
    startingFeats: [
      StartingFeats.BasicMoves.id,
      StartingFeats.Agency.id, // +Luck effect
      Moves.DealWithTheAgency.id,
    ],

    movesToChoose: 3,
    moves: [
      Moves.BottleItUp.id,
      Moves.Unfazeable.id,
      Moves.BattlefieldAwareness.id,
      Moves.LeaveNoOneBehind.id,
      Moves.TacticalGenius.id,
      Moves.Medic.id,
      Moves.Mobility.id,
    ],

    gear: StartingGear.Professional.id,
    
    improvements: [
      Improvements.CoolMax3.id,
      Improvements.CharmMax2.id,
      Improvements.SharpMax2.id,
      Improvements.ToughMax2.id,
      Improvements.Move.id,
      Improvements.Move2.id,
      Improvements.AgencyShift.id,
      Improvements.ProfessionalTeamLead.id,
      Improvements.AnyMove.id,
      Improvements.AnyMove2.id,
    ],
    advImprovements: [
      AdvImprovements.StatUp.id,
      AdvImprovements.Luck.id,
      AdvImprovements.AdvMoves.id,
      AdvImprovements.AdvMoves2.id,

      AdvImprovements.SecondHunter.id,
      AdvImprovements.ChangeType.id,
      AdvImprovements.Retire.id,
    ],
    
    looks: [
      ["chiseled face", "scarred face", "unshaven face", "soft face", "young face", "olf face", "determined face"],
      ["tailored suit", "shabby suit", "perfect suit", "utility coveralls", "battledress", "paramilitary uniform", "lab coat"],
    ],
  },
  {
    name: `Searcher`,
    id: `f7b73a9a-6447-42f8-b373-b71341bdad99`,
    description: `You had an encounter with the unknown that left you on a quest for answers.`,
    blurb: `“There's still so much to be discovered and explained, even now.
Perhaps only one event in a thousand is true weirdness—but I'll investigate them all to find it.”`,
    vibe: { action: 2, mystery: 3, fantasy: 3, storySway: 2, support: 1 },

    statPicks: [
      {Charm: 0, Cool: 1, Sharp: 1, Tough:-1, Weird: 2},
      {Charm: 1, Cool:-1, Sharp: 1, Tough: 0, Weird: 2},
      {Charm: 0, Cool:-1, Sharp: 2, Tough: 0, Weird: 2},
      {Charm: 0, Cool: 1, Sharp: 2, Tough:-1, Weird: 1},
      {Charm: 1, Cool: 0, Sharp: 2, Tough:-1, Weird: 1},
    ],
    
    startingFeats: [
      StartingFeats.BasicMoves.id,
      Moves.FirstEncounter.id,
      StartingFeats.SearcherBackground.id, // +Luck effect - Depends on First Encounter Move
    ],

    movesToChoose: 2,
    moves: [
      Moves.PreparedToDefend.id,
      Moves.FellowBeliever.id,
      Moves.Guardian.id,
      Moves.JustAnotherDay.id,
      Moves.Network.id,
      Moves.OckhamsBroadsword.id,
      Moves.TheThingsIveSeen.id,
    ],

    gear: StartingGear.Searcher.id,
    
    improvements: [
      Improvements.SharpMax3.id,
      Improvements.WeirdMax3.id,
      Improvements.CharmMax2.id,
      Improvements.CoolMax2.id,
      Improvements.Move.id,
      Improvements.Move2.id,
      Improvements.Ally.id,
      Improvements.SecondFirstEncounter.id,
      Improvements.AnyMove.id,
      Improvements.AnyMove2.id,
    ],
    advImprovements: [
      AdvImprovements.WhereItAllBegan.id,
      AdvImprovements.StatUp.id,
      AdvImprovements.Luck.id,
      AdvImprovements.Luck2.id,
      AdvImprovements.AdvMoves.id,
      AdvImprovements.AdvMoves2.id,
      AdvImprovements.SecondHunter.id,
      AdvImprovements.ChangeType.id,
      AdvImprovements.Retire.id,
    ],
    
    looks: [
      ["friendly face", "haunted face", "thoughtful face", "lined face", "curious face"],
      ["normal clothes", "casual clothes", "nerdy clothes", "tweedy clothes", "outdoor wear"],
    ],
  },
  {
    name: `Snoop`,
    id: `cfecc496-d1c1-4b30-af48-0f3f41cd02c0`,
    description: `You are a journalist who investigates the supernatural. All about finding the facts.`,
    blurb: `Cryptids have kept out of sight, but I'm going to find them and record them.
The evidence will be incontrovertible, and I'll be the one who did it.
I'm going to be a superstar one day, you mark my words! Hey... did you just feel a chill?`,
    vibe: { action: 1, mystery: 3, fantasy: 1, storySway: 2, support: 2 },

    statPicks: [
      {Charm: 2, Cool:-1, Sharp: 1, Tough: 0, Weird: 1},
      {Charm: 2, Cool: 0, Sharp: 1, Tough:-1, Weird: 1},
      {Charm: 2, Cool: 1, Sharp: 1, Tough: 0, Weird:-1},
      {Charm: 2, Cool:-1, Sharp: 2, Tough:-1, Weird: 0},
      {Charm: 2, Cool: 1, Sharp: 0, Tough:-1, Weird: 1},
    ],
    
    startingFeats: [
      StartingFeats.BasicMoves.id,
      StartingFeats.SnoopCrew.id, // +Luck effect
    ],

    movesToChoose: 3,
    moves: [
      Moves.WhatDoesThatFeelLike.id,
      Moves.MinorCelebrity.id,
      Moves.FixItInPost.id,
      Moves.PressAccreditation.id,
      Moves.Truthiness.id,
      Moves.TheMojoWire.id,
      Moves.RelaxedProducer.id,
    ],

    gear: StartingGear.Snoop.id,
    
    improvements: [
      Improvements.CharmMax3.id,
      Improvements.CoolMax2.id,
      Improvements.SharpMax2.id,
      Improvements.WeirdMax2.id,
      Improvements.Move.id,
      Improvements.Move2.id,
      Improvements.TraumaBonding.id,
      Improvements.SnoopHaven.id,
      Improvements.AnyMove.id,
      Improvements.AnyMove2.id,
    ],
    advImprovements: [
      AdvImprovements.Superstar.id,
      AdvImprovements.StatUp.id,
      AdvImprovements.Luck.id,
      AdvImprovements.AdvMoves.id,
      AdvImprovements.AdvMoves2.id,
      AdvImprovements.SecondHunter.id,
      AdvImprovements.ChangeType.id,
      AdvImprovements.Retire.id,
    ],
    
    looks: [
      ["slender body", "hefty body", "trim body", "jittery body", "tall body", "short body"],
      ["student clothes", "arty clothes", "old suit", "stylish suit", "safari wear", "hat & trenchcoat", "utility wear"],
    ],
  },
  {
    name: `Spell-Slinger`,
    id: `3f493473-f122-4255-8b19-3635908b2664`,
    description: `You are a wizard, trained and with a paid up membership. Great at casting spells.`,
    blurb: `Fight fire with **fire magic**.`,
    vibe: { action: 3, mystery: 2, fantasy: 3, storySway: 1, support: 1 },

    statPicks: [
      {Charm:-1, Cool: 1, Sharp: 1, Tough: 0, Weird: 2},
      {Charm: 0, Cool:-1, Sharp: 1, Tough: 1, Weird: 2},
      {Charm:-1, Cool: 0, Sharp: 2, Tough:-1, Weird: 2},
      {Charm: 1, Cool: 0, Sharp: 1, Tough:-1, Weird: 2},
      {Charm: 0, Cool: 0, Sharp: 1, Tough: 0, Weird: 2},
    ],
    
    startingFeats: [
      StartingFeats.BasicMoves.id,
      StartingFeats.CombatMagic.id, // +Luck effect
      Moves.ToolsAndTechniques.id,
    ],

    movesToChoose: 3,
    moves: [
      Moves.AdvancedArcaneTraining.id,
      Moves.ArcaneReputation.id,
      Moves.CouldveBeenWorse.id,
      Moves.EnchantedClothing.id,
      Moves.ForensicDivination.id,
      Moves.GoBigOrGoHome.id,
      Moves.NotMyFault.id,
      Moves.Practitioner.id,
      Moves.ShieldSpell.id,
      Moves.ThirdEye.id,
    ],
    
    gear: StartingGear.SpellSlinger.id,
    
    improvements: [
      Improvements.WeirdMax3.id,
      Improvements.CoolMax2.id,
      Improvements.SharpMax2.id,
      Improvements.ToughMax2.id,
      Improvements.Move.id,
      Improvements.Move2.id,
      Improvements.ImprovedCombatMagic.id,
      Improvements.AnyMove.id,
      Improvements.AnyMove2.id,
    ],
    advImprovements: [
      AdvImprovements.AdvancedCombatMagic.id,
      AdvImprovements.ResourcefulCaster.id,
      AdvImprovements.StatUp.id,
      AdvImprovements.Luck.id,
      AdvImprovements.AdvMoves.id,
      AdvImprovements.AdvMoves2.id,
      AdvImprovements.SecondHunter.id,
      AdvImprovements.ChangeType.id,
      AdvImprovements.Retire.id,
    ],
    
    looks: [
      ["Rumpled clothes", "stylish clothes", "goth clothes", "old-fashioned clothes"],
      ["shadowed eyes", "fierce eyes", "weary eyes", "sparkling eyes"],
    ],
  },
  {
    name: `Spooktacular`,
    id: `7db7e333-5084-4c61-970b-a3013c55ad7a`,
    description: `You were part of the crew in a mystical carnival. You are good socially and have access to useful magical skills.`,
    blurb: `I've traveled all over, pretty much everywhere you can make a dollar.
I've made people happy, and I guess annoyed a few. But everywhere you go has monsters–this show included.`,
    vibe: { action: 1, mystery: 2, fantasy: 3, storySway: 2, support: 2 },

    statPicks: [
      {Charm: 2, Cool:-1, Sharp: 1, Tough: 0, Weird: 1},
      {Charm: 2, Cool: 1, Sharp: 0, Tough:-1, Weird: 1},
      {Charm: 2, Cool: 0, Sharp:-1, Tough:-1, Weird: 2},
      {Charm: 1, Cool: 0, Sharp:-1, Tough: 1, Weird: 2},
      {Charm: 1, Cool: 1, Sharp: 0, Tough:-1, Weird: 2},
    ],
    
    startingFeats: [
      StartingFeats.BasicMoves.id,
      StartingFeats.Show.id, // +Luck effect
    ],

    movesToChoose: 2,
    moves: [
      Moves.PutOnAShow.id,
      Moves.ANegotiablePrice.id,
      Moves.Easygoin.id,
      Moves.PayItBackward.id,
      Moves.TheOldCrew.id,
      Moves.TheGameIsFixed.id,
    ],

    gear: StartingGear.Spooktacular.id,
    
    improvements: [
      Improvements.CharmMax3.id,
      Improvements.WeirdMax3.id,
      Improvements.CoolMax2.id,
      Improvements.SharpMax2.id,
      Improvements.Move.id,
      Improvements.Move2.id,
      Improvements.Ally.id,
      Improvements.TheShow.id,
      Improvements.AnyMove.id,
      Improvements.AnyMove2.id,
    ],
    advImprovements: [
      AdvImprovements.Ringmaster.id,
      AdvImprovements.StatUp.id,
      AdvImprovements.Luck.id,
      AdvImprovements.AdvMoves.id,
      AdvImprovements.AdvMoves2.id,
      AdvImprovements.SecondHunter.id,
      AdvImprovements.ChangeType.id,
      AdvImprovements.Retire.id,
    ],
    
    looks: [
      ["human", "slightly inhuman", "fate-marked"],
      ["friendly face", "guarded face", "observant face", "open face", "weathered face", "young face"],
      ["fancy clothes", "old clothes", "stage costume", "working clothes"],
    ],
  },
  {
    name: `Spooky`,
    id: `1dccf639-8ee6-457e-a2b4-ea2ae9a0bd1a`,
    description: `You have strange, dark mystical powers that tempt you to do bad things. Great at weird dark magic and angst.`,
    blurb: `I can do things, things that normal people can't.
But there's a price—I haven't paid it in full, yet, but the bill's gonna come due soon.
It's best I don't tell you any more. You get too close, you'll get hurt.`,
    vibe: { action: 2, mystery: 3, fantasy: 3, storySway: 2, support: 1 },

    statPicks: [
      {Charm: 1, Cool: 0, Sharp: 1, Tough:-1, Weird: 2},
      {Charm:-1, Cool: 1, Sharp: 0, Tough: 1, Weird: 2},
      {Charm: 2, Cool: 0, Sharp:-1, Tough:-1, Weird: 2},
      {Charm: 0, Cool:-1, Sharp: 1, Tough: 1, Weird: 2},
      {Charm:-1, Cool:-1, Sharp: 2, Tough: 0, Weird: 2},
    ],
    
    startingFeats: [
      StartingFeats.BasicMoves.id,
      StartingFeats.DarkSide.id, // +Luck effect
    ],

    movesToChoose: 3,
    moves: [
      Moves.Telepathy.id,
      Moves.Hex.id,
      Moves.TheSight.id,
      Moves.Premonitions.id,
      Moves.Hunches.id,
      Moves.TuneIn.id,
      Moves.TheBigWhammy.id,
      Moves.Jinx.id,
    ],

    gear: StartingGear.Spooky.id,
    
    improvements: [
      Improvements.WeirdMax3.id,
      Improvements.CharmMax2.id,
      Improvements.CoolMax2.id,
      Improvements.SharpMax2.id,
      Improvements.Move.id,
      Improvements.Move2.id,
      Improvements.DarkTides.id,
      Improvements.SpookyLibrary.id,
      Improvements.AnyMove.id,
      Improvements.AnyMove2.id,
    ],
    advImprovements: [
      AdvImprovements.DarkCircumvention.id,
      AdvImprovements.StatUp.id,
      AdvImprovements.Luck.id,
      AdvImprovements.AdvMoves.id,
      AdvImprovements.AdvMoves2.id,
      AdvImprovements.SecondHunter.id,
      AdvImprovements.ChangeType.id,
      AdvImprovements.Retire.id,
    ],
    
    looks: [
      ["kid","teen","adult","old"],
      ["burning eyes", "dark eyes", "pained eyes", "blank eyes", "unblinking eyes", "piercing eyes", "shadowed eyes", "creepy eyes"],
      ["ratty clothes", "casual clothes", "goth clothes", "neat clothes", "nerdy clothes"],
    ],
  },
  {
    name: `Wronged`,
    id: `36e0df53-1690-46cf-a59e-56ef397d108d`,
    description: `You lost everything important to monsters and seek revenge by killing them all. All about desperate action.`,
    blurb: `They took my loved ones.
Back then I wasn't strong enough to fight, but I studied, trained, and now I'm ready to cleanse the world of their taint.
I'll kill them all. That's all I have left.`,
    vibe: { action: 3, mystery: 2, fantasy: 1, storySway: 3, support: 2 },

    statPicks: [
      {Charm: 0, Cool: 1, Sharp:-1, Tough: 2, Weird: 1},
      {Charm: 0, Cool: 0, Sharp: 1, Tough: 2, Weird: 0},
      {Charm: 1, Cool: 0, Sharp: 1, Tough: 2, Weird:-1},
      {Charm:-1, Cool:-1, Sharp: 0, Tough: 2, Weird: 2},
      {Charm: 1, Cool:-1, Sharp: 0, Tough: 2, Weird: 1},
    ],
    
    startingFeats: [
      StartingFeats.BasicMoves.id,
      Moves.IKnowMyPrey.id,
      StartingFeats.Loss.id, // +Luck effect - Depends on I Know My Prey
    ],

    movesToChoose: 2,
    moves: [
      Moves.Berserk.id,
      Moves.NeverAgain.id,
      Moves.WhatDoesntKillMe.id,
      Moves.Fervor.id,
      Moves.SafetyFirst.id,
      Moves.DIYSurgery.id,
      Moves.ToolsMatter.id,
    ],

    gear: StartingGear.Wronged.id,
    
    improvements: [
      Improvements.ToughMax3.id,
      Improvements.CoolMax2.id,
      Improvements.SharpMax2.id,
      Improvements.WeirdMax2.id,
      Improvements.Move.id,
      Improvements.Move2.id,
      Improvements.Haven.id,
      Improvements.HavenPick.id,
      Improvements.AnyMove.id,
      Improvements.AnyMove2.id,
    ],
    advImprovements: [
      AdvImprovements.EndOfTheRoad.id,
      AdvImprovements.VengefulTransference.id,
      AdvImprovements.StatUp.id,
      AdvImprovements.Luck.id,
      AdvImprovements.AdvMoves.id,
      AdvImprovements.AdvMoves2.id,
      AdvImprovements.SecondHunter.id,
      AdvImprovements.ChangeType.id,
      AdvImprovements.Retire.id,
    ],
    
    looks: [
      ["sad eyes", "icy eyes", "angry eyes", "untouchable eyes", "emotionless eyes", "hurt eyes", "harrowed eyes"],
      ["nondescript clothes", "ragged clothes", "casual clothes", "hunting gear", "army surplus gear", "old clothes"],
    ],
  },
]

export let PlaybookLookup = Object.fromEntries(Playbooks.map(f => [f.id, f]));
