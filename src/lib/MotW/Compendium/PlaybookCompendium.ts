import { StatEnum, type Stats } from "../Character/CharacterEnums";
import type { CompendiumDescription } from "./Shared";
import {ImprovementFeats} from "./FeatsImprovements";
import {AdvImprovementFeats} from "./FeatsAdvImprovements";

export interface Rating {
  action: number;
  mystery: number;
  fantasy: number;
  storySway: number;
  support: number;
}

export interface PlaybookDesc extends CompendiumDescription {
  blurb: string;
  blurbScore: Rating;
  statPicks: Array<{[K in typeof Stats[number]]: number}>;
  
  startingFeats: Array<string>;
  movesToChoose: number;
  moves: Array<string>;
  improvements: Array<string>;
  advImprovements: Array<string>;

  looks: Array<Array<string>>;
}

export let Playbooks: Array<PlaybookDesc> = [
  {
    id: `94a658a0-f5dc-4e4b-a1ec-1b322b08d78f`,
    name: `Chosen`,
    description: `You are the chosen one. You have the potential to stop the end of the world, but you are not ready for it yet.`,
    blurb: `Your birth was prophesied. You are the Chosen One, and with your abilities you can save the world.
If you fail, all will be destroyed. It all rests on you. Only you.`,
    blurbScore: { action: 3, mystery: 1, fantasy: 2, storySway: 3, support: 1 },

    statPicks: [
      {Charm: 2, Cool:-1, Sharp: 1, Tough: 2, Weird:-1},
      {Charm:-1, Cool: 2, Sharp: 1, Tough: 2, Weird:-1},
      {Charm: 1, Cool: 2, Sharp: 1, Tough: 1, Weird:-1},
      {Charm:-1, Cool: 1, Sharp: 2, Tough:-1, Weird: 2},
      {Charm: 1, Cool: 2, Sharp:-1, Tough:-1, Weird: 2},
    ],
    
    startingFeats: [
      `2b49540f-3629-43db-a879-e8c81d436c86`, // Chosen Fate + Luck effect
      `5a92f2da-ca73-4fac-b859-08f2c745ae9b`, // Destiny's Plaything
      `2f8454d1-2528-428a-af7e-270ddb97019e`, // I'm Here For A Reason
      `9d2855cd-bdf6-4655-b7b7-76b7677a9982`, // Gear
    ],
   
    movesToChoose: 1,
    moves: [
      `14f72ee0-bf5b-4958-ac31-f2387246b5dd`, // Big Entrance
      `91102186-f3b3-4836-b2f6-52ca3b567bfa`, // Devastating
      `9b5d9bbc-7c9f-4c5f-aef0-c63cf848081e`, // Dutiful
    ],
    improvements: [
      ImprovementFeats.CharmMax3.id,
      ImprovementFeats.CoolMax3.id,
      ImprovementFeats.SharpMax3.id,
      ImprovementFeats.ToughMax3.id,
      ImprovementFeats.WeirdMax3.id,
      ImprovementFeats.Move.id,
      ImprovementFeats.Move2.id,
      ImprovementFeats.Ally.id,
      ImprovementFeats.AnyMove.id,
      ImprovementFeats.AnyMove2.id,
    ],
    advImprovements: [
      AdvImprovementFeats.StatUp.id,
      AdvImprovementFeats.Luck.id,
      AdvImprovementFeats.AdvMoves.id,
      AdvImprovementFeats.AdvMoves2.id,
      
      AdvImprovementFeats.SecondHunter.id,
      AdvImprovementFeats.ChangeType.id,
      AdvImprovementFeats.Retire.id,
    ],

    looks: [
      ["kid", "teen", "young", "burnt-out"],
      ["fresh face", "haggard face", "young face", "haunted face", "hopeful face", "controlled face"],
      ["preppy clothes", "casual wear", "urban wear", "normal clothes", "neat clothes", "street wear"],
    ]
  },
  {
    id: `bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae`,
    name: `Crooked`,
    description: `You have an occult criminal past, but now you hunt monsters. Brings old friends and enemies into the story.`,
    blurb: `“Yeah, I've been around the block. A bit of this, a bit of that.
When I came across the secret underworld of monsters and magic… well… it wasn't so different from the underworld I already knew.
It was easy to find an angle, just like before.”`,
    blurbScore: { action: 2, mystery: 3, fantasy: 2, storySway: 2, support: 2 },
    
    statPicks: [
      {Charm: 1, Cool: 1, Sharp: 2, Tough: 0, Weird:-1},
      {Charm:-1, Cool: 1, Sharp: 1, Tough: 2, Weird: 0},
      {Charm:-1, Cool: 2, Sharp: 2, Tough: 0, Weird:-1},
      {Charm: 2, Cool: 1, Sharp: 1, Tough: 0, Weird:-1},
      {Charm: 2, Cool: 0, Sharp: 1, Tough:-1, Weird: 1},
    ],

    startingFeats: [
      `a73676f8-d7f9-4d32-98ac-aeda96b8ebc4`, // Crooked Background + Luck effect
      `5fa16edd-c71d-44d5-b5cb-7660aa10c292`, // Gear
    ],
    
    movesToChoose: 2,
    moves: [

    ],
    improvements: [
      ImprovementFeats.SharpMax3.id,
      ImprovementFeats.CharmMax2.id,
      ImprovementFeats.CoolMax2.id,
      ImprovementFeats.ToughMax2.id,
      ImprovementFeats.Move.id,
      ImprovementFeats.Move2.id,
      ImprovementFeats.CrookedAlly.id,
      ImprovementFeats.StashOfMoney.id,
      ImprovementFeats.AnyMove.id,
      ImprovementFeats.AnyMove2.id,
    ],
    advImprovements: [// TODO: No uniques? Make our own?
      AdvImprovementFeats.StatUp.id,
      AdvImprovementFeats.Luck.id,
      AdvImprovementFeats.AdvMoves.id,
      AdvImprovementFeats.AdvMoves2.id,
      AdvImprovementFeats.SecondHunter.id,
      AdvImprovementFeats.ChangeType.id,
      AdvImprovementFeats.Retire.id,
    ],
    
    looks: [
      ["hard eyes", "friendly eyes", "watchful eyes", "smiling eyes", "calculating eyes"],
      ["street wear", "tailored suit", "cheap suit", "tracksuit", "nondescript clothes"],
    ]
  },
  {
    id: `9e9f712c-54d9-4193-b7ad-48c64f7ec9dc`,
    name: `Divine`,
    description: `You are, or have been imbued with, a godly power. This causes many problems, but you are formidable.`,
    blurb: `I am the Light, the Sword.

I am sent to defend the meek from Darkness.

All Evil fears me, for I am its end.`,
    blurbScore: { action: 3, mystery: 1, fantasy: 3, storySway: 3, support: 2 },

    statPicks: [
      {Charm: 1, Cool: 1, Sharp:-1, Tough: 2, Weird: 0},
      {Charm:-1, Cool: 2, Sharp:-1, Tough: 2, Weird: 0},
      {Charm:-1, Cool: 0, Sharp: 1, Tough: 2, Weird: 1},
      {Charm: 1, Cool: 1, Sharp: 0, Tough: 2, Weird:-1},
      {Charm:-1, Cool: 1, Sharp: 0, Tough: 2, Weird: 1},
    ],
    
    startingFeats: [
      `2f980939-7d68-442c-a332-128136b4b7f6`, // Divine Mission + Luck effect
      `70f95c2f-9b6a-4a28-9d74-11d647f14944`, // Gear
    ],
    
    movesToChoose: 3,
    moves: [

    ],
    improvements: [
      ImprovementFeats.ToughMax3.id,
      ImprovementFeats.CharmMax2.id,
      ImprovementFeats.CoolMax2.id,
      ImprovementFeats.SharpMax2.id,
      ImprovementFeats.WeirdMax2.id,
      ImprovementFeats.Move.id,
      ImprovementFeats.Move2.id,
      ImprovementFeats.DivineAlly.id,
      ImprovementFeats.AnyMove.id,
      ImprovementFeats.AnyMove2.id,
    ],
    advImprovements: [
      AdvImprovementFeats.StatUp.id,
      AdvImprovementFeats.Luck.id,
      AdvImprovementFeats.AdvMoves.id,
      AdvImprovementFeats.AdvMoves2.id,

      AdvImprovementFeats.SecondHunter.id,
      AdvImprovementFeats.ChangeType.id,
      AdvImprovementFeats.Retire.id,
    ],
    
    looks: [
      ["human", "marked by divinity", "inhuman"],
      ["blazing eyes", "terrifying eyes", "placid eyes", "sparkling eyes", "perceptive eyes", "starry eyes", "glowing eyes"],
      ["dirty clothes", "perfect suit", "rumpled suit", "casual clothes", "practical clothes"],
    ]
  },
  {
    id: `689d32a6-faa1-4258-9fda-894b9bdf8571`,
    name: `Expert`,
    description: `You have studied monsters and the occult all your life. Now you are more of a mentor and supporter to the team than a front-line monster hunter.`,
    blurb: `I have dedicated my life to the study of the unnatural.
I know their habits, their weaknesses.
I may not be youngest or strongest, but my knowledge makes me the biggest threat.`,
    blurbScore: { action: 3, mystery: 3, fantasy: 2, storySway: 1, support: 3 },

    statPicks: [
      {Charm:-1, Cool: 1, Sharp: 2, Tough: 1, Weird: 0},
      {Charm: 0, Cool: 1, Sharp: 2, Tough:-1, Weird: 1},
      {Charm: 1, Cool:-1, Sharp: 2, Tough: 1, Weird: 0},
      {Charm:-1, Cool: 1, Sharp: 2, Tough: 0, Weird: 1},
      {Charm:-1, Cool: 0, Sharp: 2, Tough:-1, Weird: 2},
    ],
    
    startingFeats: [
      `6ee3d30e-dcf9-4e60-9364-2be9163f40c4`, // Expert Background + Luck effect
      `237dfbb5-fce4-46dd-8382-756982cf4cda`, // Export Haven
      `b755dd6c-4a1f-466f-8b04-a9a61a69ddd4`, // Gear
    ],
    
    movesToChoose: 2,
    moves: [

    ],
    improvements: [
      ImprovementFeats.SharpMax3.id,
      ImprovementFeats.CharmMax2.id,
      ImprovementFeats.CoolMax2.id,
      ImprovementFeats.WeirdMax2.id,
      ImprovementFeats.Move.id,
      ImprovementFeats.Move2.id,
      ImprovementFeats.HavenPick.id,
      ImprovementFeats.HavenPick2.id,
      ImprovementFeats.AnyMove.id,
      ImprovementFeats.AnyMove2.id,
    ],
    advImprovements: [// TODO: No uniques? Make our own?
      AdvImprovementFeats.StatUp.id,
      AdvImprovementFeats.Luck.id,
      AdvImprovementFeats.AdvMoves.id,
      AdvImprovementFeats.AdvMoves2.id,
      AdvImprovementFeats.SecondHunter.id,
      AdvImprovementFeats.ChangeType.id,
      AdvImprovementFeats.Retire.id,
    ],
    
    looks: [
      ["thoughtful face", "lined face", "scarred face", "contemplative face", "stern face", "avuncular face", "experienced face", "ancient face"],
      ["old fashioned clothes", "casual clothes", "utility clothes", "tailored clothes", "outdoor clothes"],
    ]
  },
  {
    id: `3ef37c00-3254-4af4-830a-9a21e7c6d02a`,
    name: `Flake`,
    description: `You believe and research the strangest side of the paranormal, and rely on intuition more than facts.`,
    blurb: `Everything's connected. But not everyone can see the patterns, and most people don't even look that hard.
But me, I can never stop looking deeper. I can never stop seeing the truth. I spot the patterns.
That's how I found the monsters, and that's how I help kill them.`,
    blurbScore: { action: 2, mystery: 3, fantasy: 2, storySway: 1, support: 1 },

    statPicks: [
      {Charm: 1, Cool: 1, Sharp: 2, Tough:-1, Weird: 0},
      {Charm: 0, Cool: 1, Sharp: 2, Tough:-1, Weird: 1},
      {Charm: 1, Cool:-1, Sharp: 2, Tough: 1, Weird: 0},
      {Charm: 1, Cool:-1, Sharp: 2, Tough: 0, Weird: 1},
      {Charm:-1, Cool:-1, Sharp: 2, Tough: 0, Weird: 2},
    ],
    
    startingFeats: [
      `d9bdb9ad-dbf6-4c85-9517-1682a9db9d67`, // Flake Background + Luck effect
      `97eae3fe-b56d-41db-9580-88ca63ff19e7`, // Gear
    ],
    
    movesToChoose: 3,
    moves: [

    ],
    improvements: [
      ImprovementFeats.SharpMax3.id,
      ImprovementFeats.CharmMax2.id,
      ImprovementFeats.CoolMax2.id,
      ImprovementFeats.WeirdMax2.id,
      ImprovementFeats.Move.id,
      ImprovementFeats.Move2.id,
      ImprovementFeats.Haven.id,
      ImprovementFeats.HavenPick.id,
      ImprovementFeats.AnyMove.id,
      ImprovementFeats.AnyMove2.id,
    ],
    advImprovements: [// TODO: No uniques? Make our own?
      AdvImprovementFeats.StatUp.id,
      AdvImprovementFeats.Luck.id,
      AdvImprovementFeats.AdvMoves.id,
      AdvImprovementFeats.AdvMoves2.id,
      AdvImprovementFeats.SecondHunter.id,
      AdvImprovementFeats.ChangeType.id,
      AdvImprovementFeats.Retire.id,
    ],
    
    looks: [
      ["wild eyes", "moving eyes", "focused eyes", "searching eyes", "suspicious eyes", "wide eyes", "guarded eyes"],
      ["ratty clothes", "casual clothes", "rumpled suit", "neat clothes", "comfortable clothes", "army surplus gear"],
    ]
  },
  {
    id: `12bc1318-24c7-4402-b9bb-be0698c4ed99`,
    name: `Gumshoe`,
    description: `You are a detective or private eye with a connection to the supernatural, and a code. Great at solving mysteries.`,
    blurb: `“You won't understand this… When I take a case, I'm supposed to do something about it.
You're supposed to do something about it whether you like it or not.
You've got to pay for what you've done, sweetheart, whatever it is I might feel about you.
Yes, I'll have some bad nights, but I'll still have myself.”`,
    blurbScore: { action: 2, mystery: 3, fantasy: 1, storySway: 2, support: 1 },

    statPicks: [
      {Charm: 2, Cool: 0, Sharp: 1, Tough: 0, Weird: 0},
      {Charm: 2, Cool: 0, Sharp: 1, Tough: 1, Weird:-1},
      {Charm: 1, Cool: 0, Sharp: 2, Tough: 1, Weird:-1},
      {Charm: 1, Cool:-1, Sharp: 2, Tough: 0, Weird: 1},
      {Charm: 2, Cool: 1, Sharp: 1, Tough: 0, Weird:-1},
    ],
    
    startingFeats: [
      `456589c6-453e-476a-9f4a-fcd847b0e883`, // Gumshoe Background + Luck effect
      `d08ea9e4-88fb-46d6-975e-1045575a4ea5`, // Gumshoe Code
      `5464ec99-8e20-4732-8d4d-b46442036ad4`, // Occult Confidential
      `65cadd94-cffe-46a9-be0d-840811627edf`, // The Naked City
      `e60b335d-f3ef-44fb-839b-6fa2014b86af`, // Gear
    ],
    
    movesToChoose: 1,
    moves: [

    ],
    improvements: [
      ImprovementFeats.CharmMax3.id,
      ImprovementFeats.SharpMax3.id,
      ImprovementFeats.CoolMax2.id,
      ImprovementFeats.ToughMax2.id,
      ImprovementFeats.Move.id,
      ImprovementFeats.Move2.id,
      ImprovementFeats.DelayTheInevitable.id,
      ImprovementFeats.GumshoeHaven.id,
      ImprovementFeats.TheBareNakedCity.id,
    ],
    advImprovements: [
      AdvImprovementFeats.StatUp.id,
      AdvImprovementFeats.Luck.id,
      AdvImprovementFeats.AdvMoves.id,
      AdvImprovementFeats.AdvMoves2.id,

      AdvImprovementFeats.SecondHunter.id,
      AdvImprovementFeats.ChangeType.id,
      AdvImprovementFeats.Retire.id,
    ],
    
    looks: [
      ["angelic face", "unshaven face", "handsomely devilish face", "world-weary face", "sly face", "streetwise face", "quiet face", "knowing face", "watchful face", "merry face", "obvious ex-cop face", "hunted face"],
      ["nondescript clothes", "tailored clothes and sunglasses", "vintage clothes", "fashion clothes", "fedora and trench coat", "California casual", "biker clothes", "Pacific island casual"],
    ]
  },
  {
    id: `23bdadbc-b690-4baa-8d96-7c791b4d66da`,
    name: `Hex`,
    description: `A trained witch who can codify her spells so they are more predictable. Excellent at magic.`,
    blurb: `“I didn't have magic fall into my lap.
I'm not blessed, I'm not one of the scary children—I'm just a girl who found a way to give herself the strength to fight this war.
I don't have the option of not taking this risk.”`,
    blurbScore: { action: 2, mystery: 1, fantasy: 3, storySway: 1, support: 1 },

    statPicks: [
      {Charm: 2, Cool: 0, Sharp: 0, Tough:-1, Weird: 2},
      {Charm: 1, Cool:-1, Sharp: 1, Tough: 0, Weird: 2},
      {Charm:-1, Cool: 1, Sharp: 0, Tough: 1, Weird: 2},
      {Charm:-1, Cool: 0, Sharp: 1, Tough: 1, Weird: 2},
      {Charm: 0, Cool: 0, Sharp: 2, Tough:-1, Weird: 2},
    ],
    
    startingFeats: [
      `5d133dca-5cec-4f0d-913a-5e04de26e135`, // Hex Background + Luck effect
      `725d4e16-4f2c-4eba-801e-ccf40ec2f0e9`, // Rotes
      `8fcbf9e1-c853-4121-a97e-7089129cbad6`, // Temptation
      `9669821e-791a-40b0-b37a-0eecaed69e41`, // Bad Luck Charm
      `6d36b37a-cbcc-4468-9a4e-5d4182891d15`, // Gear
    ],

    movesToChoose: 2,
    moves: [

    ],
    improvements: [
      ImprovementFeats.WeirdMax3.id,
      ImprovementFeats.CharmMax2.id,
      ImprovementFeats.CoolMax2.id,
      ImprovementFeats.SharpMax2.id,
      ImprovementFeats.Rote.id,
      ImprovementFeats.Rote2.id,
      ImprovementFeats.Rote3.id,
      ImprovementFeats.HexMove.id,
      ImprovementFeats.HexMove2.id,
      ImprovementFeats.Haven.id,
      ImprovementFeats.AnyMove.id,
    ],
    advImprovements: [
      AdvImprovementFeats.StatUp.id,
      AdvImprovementFeats.Luck.id,
      AdvImprovementFeats.AdvMoves.id,
      AdvImprovementFeats.AdvMoves2.id,

      AdvImprovementFeats.SecondHunter.id,
      AdvImprovementFeats.ChangeType.id,
      AdvImprovementFeats.Retire.id,
    ],
    
    looks: [
      ["sharp eyes", "angry eyes", "glowing eyes", "shifty eyes", "serene eyes", "featureless eyes"],
      ["retro clothes", "hippy clothes", "trendy clothes", "too-formal clothes", "ill-fitting clothes", "anachronistic clothes"],
    ]
  },
  {
    id: `a78c7ee1-eb8d-4622-adeb-22d9d87169b5`,
    name: `Initiate`,
    description: `You are part of an ancient monster-hunting secret society. Wide range of abilities.`,
    blurb: `Since the dawn of history, we have been the bulwark against Darkness.
We know the Evils of the world, and we stand against them so that the mass of humanity need not fear.
We are the Flame that cleanses the Shadows.`,
    blurbScore: { action: 2, mystery: 3, fantasy: 1, storySway: 3, support: 2 },

    statPicks: [
      {Charm:-1, Cool: 1, Sharp: 0, Tough: 1, Weird: 2},
      {Charm: 0, Cool: 1, Sharp: 1, Tough:-1, Weird: 2},
      {Charm:-1, Cool: 0, Sharp:-1, Tough: 2, Weird: 2},
      {Charm: 1, Cool:-1, Sharp: 1, Tough: 0, Weird: 2},
      {Charm: 0, Cool: 0, Sharp: 0, Tough: 1, Weird: 2},
    ],
    
    startingFeats: [
      `b10c02c4-e91d-4d37-8549-9f51ab415340`, // The Sect + Luck effect
      `e5f53dc6-f940-4ebe-85b6-c9755b22acae`, // The Call
      `18925ae2-350e-463d-b942-27d28ef7dab6`, // Gear
    ],

    movesToChoose: 3,
    moves: [

    ],
    improvements: [
      ImprovementFeats.WeirdMax3.id,
      ImprovementFeats.CoolMax2.id,
      ImprovementFeats.SharpMax2.id,
      ImprovementFeats.ToughMax2.id,
      ImprovementFeats.Move.id,
      ImprovementFeats.Move2.id,
      ImprovementFeats.SectCommander.id,
      ImprovementFeats.InitiateTeamLead.id,
      ImprovementFeats.AnyMove.id,
      ImprovementFeats.AnyMove2.id,
    ],
    advImprovements: [
      AdvImprovementFeats.StatUp.id,
      AdvImprovementFeats.Luck.id,
      AdvImprovementFeats.AdvMoves.id,
      AdvImprovementFeats.AdvMoves2.id,

      AdvImprovementFeats.SecondHunter.id,
      AdvImprovementFeats.ChangeType.id,
      AdvImprovementFeats.Retire.id,
    ],
    
    looks: [
      ["hardened body", "tattooed body", "agile body", "strong body", "thin body", "angular body", "hunched body"],
      ["archaic clothes", "unfashionable clothes", "ceremonial clothes", "mismatched clothes", "formal clothes"],
    ],
  },
  {
    id: `a5f796af-dd20-4ee0-8920-18b80e20ec24`,
    name: `Monstrous`,
    description: `You are a monster—or half-monster—on the side of good. Wide variety of abilities depending on building your monstrous breed.`,
    blurb: `I feel the hunger, the lust to destroy. But I fight it: I never give in.
I'm not human any more, not really, but I have to protect those who still are.
That way I can tell myself I'm different to the other monsters.

Sometimes I can even believe it.`,
    blurbScore: { action: 3, mystery: 1, fantasy: 3, storySway: 1, support: 1 },

    statPicks: [
      {Charm:-1, Cool:-1, Sharp: 0, Tough: 2, Weird: 3},
      {Charm:-1, Cool: 1, Sharp: 1, Tough: 0, Weird: 3},
      {Charm: 2, Cool: 0, Sharp:-1, Tough:-1, Weird: 3},
      {Charm:-2, Cool: 2, Sharp: 0, Tough: 0, Weird: 3},
      {Charm: 0, Cool:-1, Sharp: 2, Tough:-1, Weird: 3},
    ],
    
    startingFeats: [
      `66bf0e35-8b78-4543-a75b-048ad8b12ff2`, // Monster Breed + Luck effect
      `f8a61f37-cb13-4228-ab20-6647e5589507`, // Gear
    ],
    
    movesToChoose: 2,
    moves: [

    ],
    improvements: [
      ImprovementFeats.CharmMax2.id,
      ImprovementFeats.CoolMax2.id,
      ImprovementFeats.SharpMax2.id,
      ImprovementFeats.ToughMax2.id,
      ImprovementFeats.Move.id,
      ImprovementFeats.Move2.id,
      ImprovementFeats.Haven.id,
      ImprovementFeats.NaturalAttacks.id,
      ImprovementFeats.AnyMove.id,
      ImprovementFeats.AnyMove2.id,
    ],
    advImprovements: [
      AdvImprovementFeats.StatUp.id,
      AdvImprovementFeats.Luck.id,
      AdvImprovementFeats.AdvMoves.id,
      AdvImprovementFeats.AdvMoves2.id,

      AdvImprovementFeats.SecondHunter.id,
      AdvImprovementFeats.ChangeType.id,
      AdvImprovementFeats.Retire.id,
    ],
    
    looks: [
      ["almost human", "half human", "monstrous"],
      ["sinister aura", "powerful aura", "dark aura", "unnerving aura", "energetic aura", "evil aura", "bestial aura"],
      ["archaic clothes", "casual clothes", "ragged clothes", "tailored clothes", "stylish clothes", "street clothes", "outdoor clothes"],
    ],
  },
  {
    id: `b03c7fb1-9ce4-4cba-a527-6c1380ac5de0`,
    name: `Mundane`,
    description: `You are the regular person without any powers. Good at supporting the rest of the team (often by getting into trouble.)`,
    blurb: `You heard about how monsters only pick on people with crazy powers who can fight back on even terms?
Yeah, me neither. But, hell, I ended up in this monster-hunting team so I gotta do what I can, right?`,
    blurbScore: { action: 2, mystery: 3, fantasy: 1, storySway: 1, support: 3 },

    statPicks: [
      {Charm: 2, Cool: 1, Sharp: 0, Tough: 1, Weird:-1},
      {Charm: 2, Cool:-1, Sharp: 1, Tough: 1, Weird: 0},
      {Charm: 2, Cool: 0, Sharp:-1, Tough: 1, Weird: 1},
      {Charm: 2, Cool: 0, Sharp: 1, Tough: 1, Weird:-1},
      {Charm: 2, Cool: 1, Sharp: 1, Tough: 0, Weird:-1},
    ],
    
    startingFeats: [
      `4e8dffc5-4385-462e-b2a7-15c82ec66901`, // Mundane Background + Luck effect
      `c8b4a894-620a-4ebc-bc08-359081857f40`, // Gear
    ],

    movesToChoose: 3,
    moves: [

    ],
    improvements: [
      ImprovementFeats.CharmMax3.id,
      ImprovementFeats.CoolMax2.id,
      ImprovementFeats.SharpMax2.id,
      ImprovementFeats.ToughMax2.id,
      ImprovementFeats.Move.id,
      ImprovementFeats.Move2.id,
      ImprovementFeats.Luck.id,
      ImprovementFeats.Luck2.id,
      ImprovementFeats.AnyMove.id,
      ImprovementFeats.AnyMove2.id,
    ],
    advImprovements: [
      AdvImprovementFeats.StatUp.id,
      AdvImprovementFeats.Luck.id,
      AdvImprovementFeats.Luck2.id,
      AdvImprovementFeats.AdvMoves.id,
      AdvImprovementFeats.AdvMoves2.id,
      AdvImprovementFeats.SecondHunter.id,
      AdvImprovementFeats.ChangeType.id,
      AdvImprovementFeats.Retire.id,
    ],
    
    looks: [
      ["kid", "teen", "adult", "old"],
      ["friendly face", "alluring face", "laughing face", "trustworthy face", "average face", "serious face", "sensual face"],
      ["normal clothes", "casual clothes", "goth clothes", "sporty clothes", "work clothes", "street clothes", "nerdy clothes"],
    ],
  },
  {
    id: `58924c0d-c015-4fcd-8fd9-ca75f12fd019`,
    name: `Professional`,
    description: `You work for an official monster-hunting agency. Good at directing and supporting the team.`,
    blurb: `It's kind of strange when your regular 9-to-5 job is to hunt down monsters.
Still, that's the job I took on when I joined this outfit. It pays well, and the benefits are good.
Like they say, “You don't have to be crazy to work here, but it sure helps!”`,
    blurbScore: { action: 2, mystery: 3, fantasy: 1, storySway: 2, support: 3 },

    statPicks: [
      {Charm: 0, Cool: 2, Sharp:-1, Tough: 2, Weird:-1},
      {Charm:-1, Cool: 2, Sharp: 1, Tough: 1, Weird: 0},
      {Charm: 1, Cool: 2, Sharp: 1, Tough:-1, Weird: 0},
      {Charm:-1, Cool: 2, Sharp: 1, Tough: 0, Weird: 1},
      {Charm: 0, Cool: 2, Sharp: 2, Tough:-1, Weird:-1},
    ],
    
    startingFeats: [
      `2584ae8c-8a2b-46e2-a408-e9a9dbac0da6`, // The Agency + Luck effect
      `2a436e16-6633-4b05-a133-9b971d007bee`, // Deal with the Agency
      `77a7a4df-d4cc-4f40-9e92-e401558e0f0a`, // Gear
    ],

    movesToChoose: 3,
    moves: [

    ],
    improvements: [
      ImprovementFeats.CoolMax3.id,
      ImprovementFeats.CharmMax2.id,
      ImprovementFeats.SharpMax2.id,
      ImprovementFeats.ToughMax2.id,
      ImprovementFeats.Move.id,
      ImprovementFeats.Move2.id,
      ImprovementFeats.AgencyShift.id,
      ImprovementFeats.ProfessionalTeamLead.id,
      ImprovementFeats.AnyMove.id,
      ImprovementFeats.AnyMove2.id,
    ],
    advImprovements: [
      AdvImprovementFeats.StatUp.id,
      AdvImprovementFeats.Luck.id,
      AdvImprovementFeats.AdvMoves.id,
      AdvImprovementFeats.AdvMoves2.id,

      AdvImprovementFeats.SecondHunter.id,
      AdvImprovementFeats.ChangeType.id,
      AdvImprovementFeats.Retire.id,
    ],
    
    looks: [
      ["chiseled face", "scarred face", "unshaven face", "soft face", "young face", "olf face", "determined face"],
      ["tailored suit", "shabby suit", "perfect suit", "utility coveralls", "battledress", "paramilitary uniform", "lab coat"],
    ],
  },
  {
    id: `f7b73a9a-6447-42f8-b373-b71341bdad99`,
    name: `Searcher`,
    description: `You had an encounter with the unknown that left you on a quest for answers.`,
    blurb: `“There's still so much to be discovered and explained, even now.
Perhaps only one event in a thousand is true weirdness—but I'll investigate them all to find it.”`,
    blurbScore: { action: 2, mystery: 3, fantasy: 3, storySway: 2, support: 1 },

    statPicks: [
      {Charm: 0, Cool: 1, Sharp: 1, Tough:-1, Weird: 2},
      {Charm: 1, Cool:-1, Sharp: 1, Tough: 0, Weird: 2},
      {Charm: 0, Cool:-1, Sharp: 2, Tough: 0, Weird: 2},
      {Charm: 0, Cool: 1, Sharp: 2, Tough:-1, Weird: 1},
      {Charm: 1, Cool: 0, Sharp: 2, Tough:-1, Weird: 1},
    ],
    
    startingFeats: [
      `38c1e7f2-ecf9-4b57-8138-4acbbbaf0a16`, // First Encounter
      `db9135c9-8ad3-4e55-b4d6-62f747513c4d`, // Searcher Background + Luck effect
      `6c0a242e-2d35-433b-b3cc-d218ec462c84`, // Gear
    ],

    movesToChoose: 2,
    moves: [

    ],
    improvements: [
      ImprovementFeats.SharpMax3.id,
      ImprovementFeats.WeirdMax3.id,
      ImprovementFeats.CharmMax2.id,
      ImprovementFeats.CoolMax2.id,
      ImprovementFeats.Move.id,
      ImprovementFeats.Move2.id,
      ImprovementFeats.Ally.id,
      ImprovementFeats.SecondFirstEncounter.id,
      ImprovementFeats.AnyMove.id,
      ImprovementFeats.AnyMove2.id,
    ],
    advImprovements: [
      AdvImprovementFeats.StatUp.id,
      AdvImprovementFeats.Luck.id,
      AdvImprovementFeats.Luck2.id,
      AdvImprovementFeats.AdvMoves.id,
      AdvImprovementFeats.AdvMoves2.id,

      AdvImprovementFeats.SecondHunter.id,
      AdvImprovementFeats.ChangeType.id,
      AdvImprovementFeats.Retire.id,
    ],
    
    looks: [
      ["friendly face", "haunted face", "thoughtful face", "lined face", "curious face"],
      ["normal clothes", "casual clothes", "nerdy clothes", "tweedy clothes", "outdoor wear"],
    ],
  },
  {
    id: `cfecc496-d1c1-4b30-af48-0f3f41cd02c0`,
    name: `Snoop`,
    description: `You are a journalist who investigates the supernatural. All about finding the facts.`,
    blurb: `Cryptids have kept out of sight, but I'm going to find them and record them.
The evidence will be incontrovertible, and I'll be the one who did it.
I'm going to be a superstar one day, you mark my words! Hey... did you just feel a chill?`,
    blurbScore: { action: 1, mystery: 3, fantasy: 1, storySway: 2, support: 2 },

    statPicks: [
      {Charm: 2, Cool:-1, Sharp: 1, Tough: 0, Weird: 1},
      {Charm: 2, Cool: 0, Sharp: 1, Tough:-1, Weird: 1},
      {Charm: 2, Cool: 1, Sharp: 1, Tough: 0, Weird:-1},
      {Charm: 2, Cool:-1, Sharp: 2, Tough:-1, Weird: 0},
      {Charm: 2, Cool: 1, Sharp: 0, Tough:-1, Weird: 1},
    ],
    
    startingFeats: [
      `5bba3e66-1e71-482e-ba5a-b5d5c3bc2c10`, // Crew + Luck effect
      `f7573bf7-5192-443a-9c3c-28798dce7e66`, // Gear
    ],

    movesToChoose: 3,
    moves: [

    ],
    improvements: [
      ImprovementFeats.CharmMax3.id,
      ImprovementFeats.CoolMax2.id,
      ImprovementFeats.SharpMax2.id,
      ImprovementFeats.WeirdMax2.id,
      ImprovementFeats.Move.id,
      ImprovementFeats.Move2.id,
      ImprovementFeats.TraumaBonding.id,
      ImprovementFeats.SnoopHaven.id,
      ImprovementFeats.AnyMove.id,
      ImprovementFeats.AnyMove2.id,
    ],
    advImprovements: [
      AdvImprovementFeats.StatUp.id,
      AdvImprovementFeats.Luck.id,
      AdvImprovementFeats.AdvMoves.id,
      AdvImprovementFeats.AdvMoves2.id,

      AdvImprovementFeats.SecondHunter.id,
      AdvImprovementFeats.ChangeType.id,
      AdvImprovementFeats.Retire.id,
    ],
    
    looks: [
      ["slender body", "hefty body", "trim body", "jittery body", "tall body", "short body"],
      ["student clothes", "arty clothes", "old suit", "stylish suit", "safari wear", "hat & trenchcoat", "utility wear"],
    ],
  },
  {
    id: `3f493473-f122-4255-8b19-3635908b2664`,
    name: `Spell-Slinger`,
    description: `You are a wizard, trained and with a paid up membership. Great at casting spells.`,
    blurb: `Fight fire with **fire magic**.`,
    blurbScore: { action: 3, mystery: 2, fantasy: 3, storySway: 1, support: 1 },

    statPicks: [
      {Charm:-1, Cool: 1, Sharp: 1, Tough: 0, Weird: 2},
      {Charm: 0, Cool:-1, Sharp: 1, Tough: 1, Weird: 2},
      {Charm:-1, Cool: 0, Sharp: 2, Tough:-1, Weird: 2},
      {Charm: 1, Cool: 0, Sharp: 1, Tough:-1, Weird: 2},
      {Charm: 0, Cool: 0, Sharp: 1, Tough: 0, Weird: 2},
    ],
    
    startingFeats: [
      `158aae53-3323-4ece-adc6-7a79d3c10e59`, // Combat Magic + Luck effect
      `ad31fd43-9c0a-48b1-819f-23b66d89d11e`, // The Spell-Slinger
      `3c30b246-6d27-4d32-8919-6f2bcc566ad2`, // Gear
    ],

    movesToChoose: 3,
    moves: [

    ],
    improvements: [
      ImprovementFeats.WeirdMax3.id,
      ImprovementFeats.CoolMax2.id,
      ImprovementFeats.SharpMax2.id,
      ImprovementFeats.ToughMax2.id,
      ImprovementFeats.Move.id,
      ImprovementFeats.Move2.id,
      ImprovementFeats.CombatMagic.id,
      ImprovementFeats.AnyMove.id,
      ImprovementFeats.AnyMove2.id,
    ],
    advImprovements: [
      AdvImprovementFeats.StatUp.id,
      AdvImprovementFeats.Luck.id,
      AdvImprovementFeats.AdvMoves.id,
      AdvImprovementFeats.AdvMoves2.id,

      AdvImprovementFeats.SecondHunter.id,
      AdvImprovementFeats.ChangeType.id,
      AdvImprovementFeats.Retire.id,
    ],
    
    looks: [
      ["Rumpled clothes", "stylish clothes", "goth clothes", "old-fashioned clothes"],
      ["shadowed eyes", "fierce eyes", "weary eyes", "sparkling eyes"],
    ],
  },
  {
    id: `7db7e333-5084-4c61-970b-a3013c55ad7a`,
    name: `Spooktacular`,
    description: `You were part of the crew in a mystical carnival. You are good socially and have access to useful magical skills.`,
    blurb: `I've traveled all over, pretty much everywhere you can make a dollar.
I've made people happy, and I guess annoyed a few. But everywhere you go has monsters–this show included.`,
    blurbScore: { action: 1, mystery: 2, fantasy: 3, storySway: 2, support: 2 },

    statPicks: [
      {Charm: 2, Cool:-1, Sharp: 1, Tough: 0, Weird: 1},
      {Charm: 2, Cool: 1, Sharp: 0, Tough:-1, Weird: 1},
      {Charm: 2, Cool: 0, Sharp:-1, Tough:-1, Weird: 2},
      {Charm: 1, Cool: 0, Sharp:-1, Tough: 1, Weird: 2},
      {Charm: 1, Cool: 1, Sharp: 0, Tough:-1, Weird: 2},
    ],
    
    startingFeats: [
      `0c2ab958-24d2-4710-84e4-2f5d51f69cc9`, // The Show + luck effect
      `5b05d02f-8f34-405f-84f5-e14261cbd48b`, // Gear
    ],

    movesToChoose: 2,
    moves: [

    ],
    improvements: [
      ImprovementFeats.CharmMax3.id,
      ImprovementFeats.WeirdMax3.id,
      ImprovementFeats.CoolMax2.id,
      ImprovementFeats.SharpMax2.id,
      ImprovementFeats.Move.id,
      ImprovementFeats.Move2.id,
      ImprovementFeats.Ally.id,
      ImprovementFeats.TheShow.id,
      ImprovementFeats.AnyMove.id,
      ImprovementFeats.AnyMove2.id,
    ],
    advImprovements: [
      AdvImprovementFeats.StatUp.id,
      AdvImprovementFeats.Luck.id,
      AdvImprovementFeats.AdvMoves.id,
      AdvImprovementFeats.AdvMoves2.id,

      AdvImprovementFeats.SecondHunter.id,
      AdvImprovementFeats.ChangeType.id,
      AdvImprovementFeats.Retire.id,
    ],
    
    looks: [
      ["human", "slightly inhuman", "fate-marked"],
      ["friendly face", "guarded face", "observant face", "open face", "weathered face", "young face"],
      ["fancy clothes", "old clothes", "stage costume", "working clothes"],
    ],
  },
  {
    id: `1dccf639-8ee6-457e-a2b4-ea2ae9a0bd1a`,
    name: "Spooky",
    description: "You have strange, dark mystical powers that tempt you to do bad things. Great at weird dark magic and angst.",
    blurb: `I can do things, things that normal people can't.
But there's a price—I haven't paid it in full, yet, but the bill's gonna come due soon.
It's best I don't tell you any more. You get too close, you'll get hurt.`,
    blurbScore: { action: 2, mystery: 3, fantasy: 3, storySway: 2, support: 1 },

    statPicks: [
      {Charm: 1, Cool: 0, Sharp: 1, Tough:-1, Weird: 2},
      {Charm:-1, Cool: 1, Sharp: 0, Tough: 1, Weird: 2},
      {Charm: 2, Cool: 0, Sharp:-1, Tough:-1, Weird: 2},
      {Charm: 0, Cool:-1, Sharp: 1, Tough: 1, Weird: 2},
      {Charm:-1, Cool:-1, Sharp: 2, Tough: 0, Weird: 2},
    ],
    
    startingFeats: [
      `73865b22-93cf-403f-92a0-c546129ab53e`, // The Dark Side + luck effect
      `1e7a1da4-0e3b-4170-977b-367446ee2943`, // Gear
    ],

    movesToChoose: 3,
    moves: [

    ],
    improvements: [
      ImprovementFeats.WeirdMax3.id,
      ImprovementFeats.CharmMax2.id,
      ImprovementFeats.CoolMax2.id,
      ImprovementFeats.SharpMax2.id,
      ImprovementFeats.Move.id,
      ImprovementFeats.Move2.id,
      ImprovementFeats.DarkTides.id,
      ImprovementFeats.SpookyLibrary.id,
      ImprovementFeats.AnyMove.id,
      ImprovementFeats.AnyMove2.id,
    ],
    advImprovements: [
      AdvImprovementFeats.StatUp.id,
      AdvImprovementFeats.Luck.id,
      AdvImprovementFeats.AdvMoves.id,
      AdvImprovementFeats.AdvMoves2.id,

      AdvImprovementFeats.SecondHunter.id,
      AdvImprovementFeats.ChangeType.id,
      AdvImprovementFeats.Retire.id,
    ],
    
    looks: [
      ["kid","teen","adult","old"],
      ["burning eyes", "dark eyes", "pained eyes", "blank eyes", "unblinking eyes", "piercing eyes", "shadowed eyes", "creepy eyes"],
      ["ratty clothes", "casual clothes", "goth clothes", "neat clothes", "nerdy clothes"],
    ],
  },
  {
    id: `36e0df53-1690-46cf-a59e-56ef397d108d`,
    name: `Wronged`,
    description: `You lost everything important to monsters and seek revenge by killing them all. All about desperate action.`,
    blurb: `They took my loved ones.
Back then I wasn't strong enough to fight, but I studied, trained, and now I'm ready to cleanse the world of their taint.
I'll kill them all. That's all I have left.`,
    blurbScore: { action: 3, mystery: 2, fantasy: 1, storySway: 3, support: 2 },

    statPicks: [
      {Charm: 0, Cool: 1, Sharp:-1, Tough: 2, Weird: 1},
      {Charm: 0, Cool: 0, Sharp: 1, Tough: 2, Weird: 0},
      {Charm: 1, Cool: 0, Sharp: 1, Tough: 2, Weird:-1},
      {Charm:-1, Cool:-1, Sharp: 0, Tough: 2, Weird: 2},
      {Charm: 1, Cool:-1, Sharp: 0, Tough: 2, Weird: 1},
    ],
    
    startingFeats: [
      `c61b697b-7ee0-4d46-8af0-200172ae97d2`, // I Know My Prey
      `dab9c9ab-3b98-4537-b561-0cdc392ebbbd`, // Loss + luck effect
      `53939d63-c4e4-483a-b4cd-09f54e0d1c90`, // Gear
    ],

    movesToChoose: 2,
    moves: [

    ],
    improvements: [
      ImprovementFeats.ToughMax3.id,
      ImprovementFeats.CoolMax2.id,
      ImprovementFeats.SharpMax2.id,
      ImprovementFeats.WeirdMax2.id,
      ImprovementFeats.Move.id,
      ImprovementFeats.Move2.id,
      ImprovementFeats.Haven.id,
      ImprovementFeats.HavenPick.id,
      ImprovementFeats.AnyMove.id,
      ImprovementFeats.AnyMove2.id,
    ],
    advImprovements: [
      AdvImprovementFeats.StatUp.id,
      AdvImprovementFeats.Luck.id,
      AdvImprovementFeats.AdvMoves.id,
      AdvImprovementFeats.AdvMoves2.id,

      AdvImprovementFeats.SecondHunter.id,
      AdvImprovementFeats.ChangeType.id,
      AdvImprovementFeats.Retire.id,
    ],
    
    looks: [
      ["sad eyes", "icy eyes", "angry eyes", "untouchable eyes", "emotionless eyes", "hurt eyes", "harrowed eyes"],
      ["nondescript clothes", "ragged clothes", "casual clothes", "hunting gear", "army surplus gear", "old clothes"],
    ],
  },
]
