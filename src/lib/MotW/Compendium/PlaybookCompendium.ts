import { StatEnum, type Stats } from "../Character/CharacterEnums";
import type { CompendiumDescription } from "./Shared";

export interface Rating {
  action: number;
  mystery: number;
  fantasy: number;
  storySway: number;
  support: number;
}

export interface PlaybookDesc extends CompendiumDescription {
  rating: Rating;
  
  luckEffect: string;

  startingMoves: Array<string>;
  moves: Array<string>;
  movesToChoose: number;
  statPicks: Array<{[K in typeof Stats[number]]: number}>;

  looks: Array<Array<string>>;
}

export let Playbooks: Array<PlaybookDesc> = [
  {
    id: "94a658a0-f5dc-4e4b-a1ec-1b322b08d78f",
    name: "Chosen",
    description: "You are the chosen one. You have the potential to stop the end of the world, but you are not ready for it yet.",
    rating: { action: 3, mystery: 1, fantasy: 2, storySway: 3, support: 1 },
    luckEffect: "When you spend a point of **Luck**, the **Keeper** will bring your fate into play.",
    startingMoves: ["26550868-59ce-48bd-a3ee-01b26b5b49b5", "2f8454d1-2528-428a-af7e-270ddb97019e"],
    movesToChoose: 1,
    moves: [
      "26550868-59ce-48bd-a3ee-01b26b5b49b5", "2f8454d1-2528-428a-af7e-270ddb97019e",
      "14f72ee0-bf5b-4958-ac31-f2387246b5dd", "91102186-f3b3-4836-b2f6-52ca3b567bfa",
    ],
    statPicks: [
      {Charm: 2, Cool:-1, Sharp: 1, Tough: 2, Weird:-1},
      {Charm:-1, Cool: 2, Sharp: 1, Tough: 2, Weird:-1},
      {Charm: 1, Cool: 2, Sharp: 1, Tough: 1, Weird:-1},
      {Charm:-1, Cool: 1, Sharp: 2, Tough:-1, Weird: 2},
      {Charm: 1, Cool: 2, Sharp:-1, Tough:-1, Weird: 2},
    ]
    improvements: [
      { stat: StatEnum.Charm, max: 3 },
      { stat: StatEnum.Cool, max: 3 },
      { stat: StatEnum.Sharp, max: 3 },
      { stat: StatEnum.Tough, max: 3 },
      { stat: StatEnum.Weird, max: 3 },
    ]
    advImprovements: [
      { stat: undefined, max: 3 },
    ],

    looks: [
      ["kid", "teen", "young", "burnt-out"],
      ["fresh face", "haggard face", "young face", "haunted face", "hopeful face", "controlled face"],
      ["preppy clothes", "casual wear", "urban wear", "normal clothes", "neat clothes", "street wear"],
    ]
  },
  {
    id: "bd3e69a8-fcd9-4c7b-8d98-fc778f18ecae",
    name: "Crooked",
    description: "You have an occult criminal past, but now you hunt monsters. Brings old friends and enemies into the story.",
    rating: { action: 2, mystery: 3, fantasy: 2, storySway: 2, support: 2 },
    luckEffect: "Whenever you spend a **Luck** point, someone from your past will re-appear in your life. Soon.",
    startingMoves: [],
    movesToChoose: 0,
    moves: [],
    statPicks: [
      {Charm: 1, Cool: 1, Sharp: 2, Tough: 0, Weird:-1},
      {Charm:-1, Cool: 1, Sharp: 1, Tough: 2, Weird: 0},
      {Charm:-1, Cool: 2, Sharp: 2, Tough: 0, Weird:-1},
      {Charm: 2, Cool: 1, Sharp: 1, Tough: 0, Weird:-1},
      {Charm: 2, Cool: 0, Sharp: 1, Tough:-1, Weird: 1},
    ],
    looks: [
      ["hard eyes", "friendly eyes", "watchful eyes", "smiling eyes", "calculating eyes"],
      ["street wear", "tailored suit", "cheap suit", "tracksuit", "nondescript clothes"],
    ]
  },
  {
    id: "9e9f712c-54d9-4193-b7ad-48c64f7ec9dc",
    name: "Divine",
    description: "You are, or have been imbued with, a godly power. This causes many problems, but you are formidable.",
    rating: { action: 3, mystery: 1, fantasy: 3, storySway: 3, support: 2 },
    luckEffect: "When you spend a point of **Luck**, you get word your **Mission** requires something difficult that must be done. By you. Urgently.",
    startingMoves: [],
    movesToChoose: 0,
    moves: [],
    statPicks: [
      {Charm: 1, Cool: 1, Sharp:-1, Tough: 2, Weird: 0},
      {Charm:-1, Cool: 2, Sharp:-1, Tough: 2, Weird: 0},
      {Charm:-1, Cool: 0, Sharp: 1, Tough: 2, Weird: 1},
      {Charm: 1, Cool: 1, Sharp: 0, Tough: 2, Weird:-1},
      {Charm:-1, Cool: 1, Sharp: 0, Tough: 2, Weird: 1},
    ],
    looks: [
      ["human", "marked by divinity", "inhuman"],
      ["blazing eyes", "terrifying eyes", "placid eyes", "sparkling eyes", "perceptive eyes", "starry eyes", "glowing eyes"],
      ["dirty clothes", "perfect suit", "rumpled suit", "casual clothes", "practical clothes"],
    ]
  },
  {
    id: "689d32a6-faa1-4258-9fda-894b9bdf8571",
    name: "Expert",
    description: "You have studied monsters and the occult all your life. Now you are more of a mentor and supporter to the team than a front-line monster hunter.",
    rating: { action: 3, mystery: 3, fantasy: 2, storySway: 1, support: 3 },
    luckEffect: "When you spend a point of **Luck**, you discover something happening now is related to something you were involved in years ago.",
    startingMoves: [],
    movesToChoose: 0,
    moves: [],
    statPicks: [
      {Charm:-1, Cool: 1, Sharp: 2, Tough: 1, Weird: 0},
      {Charm: 0, Cool: 1, Sharp: 2, Tough:-1, Weird: 1},
      {Charm: 1, Cool:-1, Sharp: 2, Tough: 1, Weird: 0},
      {Charm:-1, Cool: 1, Sharp: 2, Tough: 0, Weird: 1},
      {Charm:-1, Cool: 0, Sharp: 2, Tough:-1, Weird: 2},
    ],
    looks: [
      ["thoughtful face", "lined face", "scarred face", "contemplative face", "stern face", "avuncular face", "experienced face", "ancient face"],
      ["old fashioned clothes", "casual clothes", "utility clothes", "tailored clothes", "outdoor clothes"],
    ]
  },
  {
    id: "3ef37c00-3254-4af4-830a-9a21e7c6d02a",
    name: "Flake",
    description: "You believe and research the strangest side of the paranormal, and rely on intuition more than facts.",
    rating: { action: 2, mystery: 3, fantasy: 2, storySway: 1, support: 1 },
    luckEffect: "When you spend a point of **Luck**, pick an aspect of the current situation. The **Keeper** will tell you what other conspiracies that aspect connects to.",
    startingMoves: [],
    movesToChoose: 0,
    moves: [],
    statPicks: [
      {Charm: 1, Cool: 1, Sharp: 2, Tough:-1, Weird: 0},
      {Charm: 0, Cool: 1, Sharp: 2, Tough:-1, Weird: 1},
      {Charm: 1, Cool:-1, Sharp: 2, Tough: 1, Weird: 0},
      {Charm: 1, Cool:-1, Sharp: 2, Tough: 0, Weird: 1},
      {Charm:-1, Cool:-1, Sharp: 2, Tough: 0, Weird: 2},
    ],
    looks: [
      ["wild eyes", "moving eyes", "focused eyes", "searching eyes", "suspicious eyes", "wide eyes", "guarded eyes"],
      ["ratty clothes", "casual clothes", "rumpled suit", "neat clothes", "comfortable clothes", "army surplus gear"],
    ]
  },
  {
    id: "12bc1318-24c7-4402-b9bb-be0698c4ed99",
    name: "Gumshoe",
    description: "You are a detective or private eye with a connection to the supernatural, and a code. Great at solving mysteries.",
    rating: { action: 2, mystery: 3, fantasy: 1, storySway: 2, support: 1 },
    luckEffect: "When you use a point of **Luck** your next regular case will actually be a mystery for your hunter group, not a regular case at all (and the monster will focus its attention on you!)",
    startingMoves: [],
    movesToChoose: 0,
    moves: [],
    statPicks: [
      {Charm: 2, Cool: 0, Sharp: 1, Tough: 0, Weird: 0},
      {Charm: 2, Cool: 0, Sharp: 1, Tough: 1, Weird:-1},
      {Charm: 1, Cool: 0, Sharp: 2, Tough: 1, Weird:-1},
      {Charm: 1, Cool:-1, Sharp: 2, Tough: 0, Weird: 1},
      {Charm: 2, Cool: 1, Sharp: 1, Tough: 0, Weird:-1},
    ],
    looks: [
      ["angelic face", "unshaven face", "handsomely devilish face", "world-weary face", "sly face", "streetwise face", "quiet face", "knowing face", "watchful face", "merry face", "obvious ex-cop face", "hunted face"],
      ["nondescript clothes", "tailored clothes and sunglasses", "vintage clothes", "fashion clothes", "fedora and trench coat", "California casual", "biker clothes", "Pacific island casual"],
    ]
  },
  {
    id: "23bdadbc-b690-4baa-8d96-7c791b4d66da",
    name: "Hex",
    description: "A trained witch who can codify her spells so they are more predictable. Excellent at magic.",
    rating: { action: 2, mystery: 1, fantasy: 3, storySway: 1, support: 1 },
    luckEffect: "When you spend **Luck**, until the end of the mystery, backlash on your spells will be extra nasty.",
    startingMoves: [],
    movesToChoose: 0,
    moves: [],
    statPicks: [
      {Charm: 2, Cool: 0, Sharp: 0, Tough:-1, Weird: 2},
      {Charm: 1, Cool:-1, Sharp: 1, Tough: 0, Weird: 2},
      {Charm:-1, Cool: 1, Sharp: 0, Tough: 1, Weird: 2},
      {Charm:-1, Cool: 0, Sharp: 1, Tough: 1, Weird: 2},
      {Charm: 0, Cool: 0, Sharp: 2, Tough:-1, Weird: 2},
    ],
    looks: [
      ["sharp eyes", "angry eyes", "glowing eyes", "shifty eyes", "serene eyes", "featureless eyes"],
      ["retro clothes", "hippy clothes", "trendy clothes", "too-formal clothes", "ill-fitting clothes", "anachronistic clothes"],
    ]
  },
  {
    id: "a78c7ee1-eb8d-4622-adeb-22d9d87169b5",
    name: "Initiate",
    description: "You are part of an ancient monster-hunting secret society. Wide range of abilities.",
    rating: { action: 2, mystery: 3, fantasy: 1, storySway: 3, support: 2 },
    luckEffect: "When you spend a point of **Luck**, something goes wrong for your **Sect**: an ill-advised project or a disastrous operation.",
    startingMoves: [],
    movesToChoose: 0,
    moves: [],
    statPicks: [
      {Charm:-1, Cool: 1, Sharp: 0, Tough: 1, Weird: 2},
      {Charm: 0, Cool: 1, Sharp: 1, Tough:-1, Weird: 2},
      {Charm:-1, Cool: 0, Sharp:-1, Tough: 2, Weird: 2},
      {Charm: 1, Cool:-1, Sharp: 1, Tough: 0, Weird: 2},
      {Charm: 0, Cool: 0, Sharp: 0, Tough: 1, Weird: 2},
    ],
    looks: [
      ["hardened body", "tattooed body", "agile body", "strong body", "thin body", "angular body", "hunched body"],
      ["archaic clothes", "unfashionable clothes", "ceremonial clothes", "mismatched clothes", "formal clothes"],
    ],
  },
  {
    id: "a5f796af-dd20-4ee0-8920-18b80e20ec24",
    name: "Monsterous",
    description: "You are a monster—or half-monster—on the side of good. Wide variety of abilities depending on building your monstrous breed.",
    rating: { action: 3, mystery: 1, fantasy: 3, storySway: 1, support: 1 },
    luckEffect: "When you spend a point of **Luck**, your monster side gains power: your **Curse** may become stronger, or another **Breed** disadvantage may manifest.",
    startingMoves: [],
    movesToChoose: 0,
    moves: [],
    statPicks: [
      {Charm:-1, Cool:-1, Sharp: 0, Tough: 2, Weird: 3},
      {Charm:-1, Cool: 1, Sharp: 1, Tough: 0, Weird: 3},
      {Charm: 2, Cool: 0, Sharp:-1, Tough:-1, Weird: 3},
      {Charm:-2, Cool: 2, Sharp: 0, Tough: 0, Weird: 3},
      {Charm: 0, Cool:-1, Sharp: 2, Tough:-1, Weird: 3},
    ],
    looks: [
      ["almost human", "half human", "monstrous"],
      ["sinister aura", "powerful aura", "dark aura", "unnerving aura", "energetic aura", "evil aura", "bestial aura"],
      ["archaic clothes", "casual clothes", "ragged clothes", "tailored clothes", "stylish clothes", "street clothes", "outdoor clothes"],
    ],
  },
  {
    id: "b03c7fb1-9ce4-4cba-a527-6c1380ac5de0",
    name: "Mundane",
    description: "You are the regular person without any powers. Good at supporting the rest of the team (often by getting into trouble.)",
    rating: { action: 2, mystery: 3, fantasy: 1, storySway: 1, support: 3 },
    luckEffect: "When you spend a point of **Luck**, you'll find something weird—maybe even useful!",
    startingMoves: [],
    movesToChoose: 0,
    moves: [],
    statPicks: [
      {Charm: 2, Cool: 1, Sharp: 0, Tough: 1, Weird:-1},
      {Charm: 2, Cool:-1, Sharp: 1, Tough: 1, Weird: 0},
      {Charm: 2, Cool: 0, Sharp:-1, Tough: 1, Weird: 1},
      {Charm: 2, Cool: 0, Sharp: 1, Tough: 1, Weird:-1},
      {Charm: 2, Cool: 1, Sharp: 1, Tough: 0, Weird:-1},
    ],
    looks: [
      ["kid", "teen", "adult", "old"],
      ["friendly face", "alluring face", "laughing face", "trustworthy face", "average face", "serious face", "sensual face"],
      ["normal clothes", "casual clothes", "goth clothes", "sporty clothes", "work clothes", "street clothes", "nerdy clothes"],
    ],
  },
  // {
  //   id: "b33ce99a-73e9-4f15-8314-ac80bf0819d1",
  //   name: "Pararomantic",
  //   description: "You have a deep emotional bond with a monster. The relationship gives you insights into the mystical.",
  //   rating: { action: 1, mystery: 3, fantasy: 3, storySway: 3, support: 1 },
  //   luckEffect: "When you spend a point of **Luck**, also mark off one of your relationship status boxes. The **Keeper** will bring fate of your love into play.",
  //   startingMoves: [],
  //   movesToChoose: 0,
  //   moves: [],
  //   statPicks: [
  //     {Charm: 2, Cool: 1, Sharp: 0, Tough:-1, Weird: 1},
  //     {Charm: 2, Cool:-1, Sharp: 1, Tough: 1, Weird: 0},
  //     {Charm: 2, Cool: 2, Sharp: 0, Tough: 0, Weird:-1},
  //     {Charm: 2, Cool: 1, Sharp: 1, Tough:-1, Weird: 0},
  //     {Charm: 2, Cool: 0, Sharp: 2, Tough:-1, Weird: 0},
  //   ],
  //   looks: [
  //     ["friendly face", "alluring face", "laughing face", "trustworthy face", "average face", "serious face", "sensual face", "face"],
  //     ["normal clothes", "casual clothes", "goth clothes", "sporty clothes", "street clothes", "nerdy clothes"],
  //   ],
  // },
  {
    id: "58924c0d-c015-4fcd-8fd9-ca75f12fd019",
    name: "Professional",
    description: "You work for an official monster-hunting agency. Good at directing and supporting the team.",
    rating: { action: 2, mystery: 3, fantasy: 1, storySway: 2, support: 3 },
    luckEffect: "When you spend a point of **Luck**, your next mission from the **Agency** comes with lots of Red Tape. Lots.",
    startingMoves: [],
    movesToChoose: 0,
    moves: [],
    statPicks: [
      {Charm: 0, Cool: 2, Sharp:-1, Tough: 2, Weird:-1},
      {Charm:-1, Cool: 2, Sharp: 1, Tough: 1, Weird: 0},
      {Charm: 1, Cool: 2, Sharp: 1, Tough:-1, Weird: 0},
      {Charm:-1, Cool: 2, Sharp: 1, Tough: 0, Weird: 1},
      {Charm: 0, Cool: 2, Sharp: 2, Tough:-1, Weird:-1},
    ],
    looks: [
      ["chiseled face", "scarred face", "unshaven face", "soft face", "young face", "olf face", "determined face"],
      ["tailored suit", "shabby suit", "perfect suit", "utility coveralls", "battledress", "paramilitary uniform", "lab coat"],
    ],
  },
  {
    id: "f7b73a9a-6447-42f8-b373-b71341bdad99",
    name: "Searcher",
    description: "You had an encounter with the unknown that left you on a quest for answers.",
    rating: { action: 2, mystery: 3, fantasy: 3, storySway: 2, support: 1 },
    luckEffect: "When you spend a point of Luck, your first encounter comes up in play. It could be a flashback, new occurrence, or related event.",
    startingMoves: [],
    movesToChoose: 0,
    moves: [],
    statPicks: [
      {Charm: 0, Cool: 1, Sharp: 1, Tough:-1, Weird: 2},
      {Charm: 1, Cool:-1, Sharp: 1, Tough: 0, Weird: 2},
      {Charm: 0, Cool:-1, Sharp: 2, Tough: 0, Weird: 2},
      {Charm: 0, Cool: 1, Sharp: 2, Tough:-1, Weird: 1},
      {Charm: 1, Cool: 0, Sharp: 2, Tough:-1, Weird: 1},
    ],
    looks: [
      ["friendly face", "haunted face", "thoughtful face", "lined face", "curious face"],
      ["normal clothes", "casual clothes", "nerdy clothes", "tweedy clothes", "outdoor wear"],
    ],
  },
  {
    id: "cfecc496-d1c1-4b30-af48-0f3f41cd02c0",
    name: "Snoop",
    description: "You are a journalist who investigates the supernatural. All about finding the facts.",
    rating: { action: 1, mystery: 3, fantasy: 1, storySway: 2, support: 2 },
    luckEffect: "Whenever you spend a **Luck** point, you're going to have technical difficulties. Breakdowns, communication problems, weird noises in the recordings, etc.",
    startingMoves: [],
    movesToChoose: 0,
    moves: [],
    statPicks: [
      {Charm: 2, Cool:-1, Sharp: 1, Tough: 0, Weird: 1},
      {Charm: 2, Cool: 0, Sharp: 1, Tough:-1, Weird: 1},
      {Charm: 2, Cool: 1, Sharp: 1, Tough: 0, Weird:-1},
      {Charm: 2, Cool:-1, Sharp: 2, Tough:-1, Weird: 0},
      {Charm: 2, Cool: 1, Sharp: 0, Tough:-1, Weird: 1},
    ],
    looks: [
      ["slender body", "hefty body", "trim body", "jittery body", "tall body", "short body"],
      ["student clothes", "arty clothes", "old suit", "stylish suit", "safari wear", "hat & trenchcoat", "utility wear"],
    ],
  },
  {
    id: "3f493473-f122-4255-8b19-3635908b2664",
    name: "Spell-Slinger",
    description: "You are a wizard, trained and with a paid up membership. Great at casting spells.",
    rating: { action: 3, mystery: 2, fantasy: 3, storySway: 1, support: 1 },
    luckEffect: "When you spend a point of **Luck**, the official council of wizards is going to poke their nose into your business.",
    startingMoves: [],
    movesToChoose: 0,
    moves: [],
    statPicks: [
      {Charm:-1, Cool: 1, Sharp: 1, Tough: 0, Weird: 2},
      {Charm: 0, Cool:-1, Sharp: 1, Tough: 1, Weird: 2},
      {Charm:-1, Cool: 0, Sharp: 2, Tough:-1, Weird: 2},
      {Charm: 1, Cool: 0, Sharp: 1, Tough:-1, Weird: 2},
      {Charm: 0, Cool: 0, Sharp: 1, Tough: 0, Weird: 2},
    ],
    looks: [
      ["Rumpled clothes", "stylish clothes", "goth clothes", "old-fashioned clothes"],
      ["shadowed eyes", "fierce eyes", "weary eyes", "sparkling eyes"],
    ],
  },
  {
    id: "7db7e333-5084-4c61-970b-a3013c55ad7a",
    name: "Spooktacular",
    description: "You were part of the crew in a mystical carnival. You are good socially and have access to useful magical skills.",
    rating: { action: 1, mystery: 2, fantasy: 3, storySway: 2, support: 2 },
    luckEffect: "When you spend a point of **Luck**, you're going to run into someone you met at the Show. Could be good, could be bad, who knows?",
    startingMoves: [],
    movesToChoose: 0,
    moves: [],
    statPicks: [
      {Charm: 2, Cool:-1, Sharp: 1, Tough: 0, Weird: 1},
      {Charm: 2, Cool: 1, Sharp: 0, Tough:-1, Weird: 1},
      {Charm: 2, Cool: 0, Sharp:-1, Tough:-1, Weird: 2},
      {Charm: 1, Cool: 0, Sharp:-1, Tough: 1, Weird: 2},
      {Charm: 1, Cool: 1, Sharp: 0, Tough:-1, Weird: 2},
    ],
    looks: [
      ["human", "slightly inhuman", "fate-marked"],
      ["friendly face", "guarded face", "observant face", "open face", "weathered face", "young face"],
      ["fancy clothes", "old clothes", "stage costume", "working clothes"],
    ],
  },
  {
    id: "1dccf639-8ee6-457e-a2b4-ea2ae9a0bd1a",
    name: "Spooky",
    description: "You have strange, dark mystical powers that tempt you to do bad things. Great at weird dark magic and angst.",
    rating: { action: 2, mystery: 3, fantasy: 3, storySway: 2, support: 1 },
    luckEffect: "As you mark off **Luck** boxes, your dark side's needs will get nastier.",
    startingMoves: [],
    movesToChoose: 0,
    moves: [],
    statPicks: [
      {Charm: 1, Cool: 0, Sharp: 1, Tough:-1, Weird: 2},
      {Charm:-1, Cool: 1, Sharp: 0, Tough: 1, Weird: 2},
      {Charm: 2, Cool: 0, Sharp:-1, Tough:-1, Weird: 2},
      {Charm: 0, Cool:-1, Sharp: 1, Tough: 1, Weird: 2},
      {Charm:-1, Cool:-1, Sharp: 2, Tough: 0, Weird: 2},
    ],
    looks: [
      ["kid","teen","adult","old"],
      ["burning eyes", "dark eyes", "pained eyes", "blank eyes", "unblinking eyes", "piercing eyes", "shadowed eyes", "creepy eyes"],
      ["ratty clothes", "casual clothes", "goth clothes", "neat clothes", "nerdy clothes"],
    ],
  },
  {
    id: "36e0df53-1690-46cf-a59e-56ef397d108d",
    name: "Wronged",
    description: "You lost everything important to monsters and seek revenge by killing them all. All about desperate action.",
    rating: { action: 3, mystery: 2, fantasy: 1, storySway: 3, support: 2 },
    luckEffect: "When you spend a point of **Luck**, you find a dangerous lead on your prey.",
    startingMoves: [],
    movesToChoose: 0,
    moves: [],
    statPicks: [
      {Charm: 0, Cool: 1, Sharp:-1, Tough: 2, Weird: 1},
      {Charm: 0, Cool: 0, Sharp: 1, Tough: 2, Weird: 0},
      {Charm: 1, Cool: 0, Sharp: 1, Tough: 2, Weird:-1},
      {Charm:-1, Cool:-1, Sharp: 0, Tough: 2, Weird: 2},
      {Charm: 1, Cool:-1, Sharp: 0, Tough: 2, Weird: 1},
    ],
    looks: [
      ["sad eyes", "icy eyes", "angry eyes", "untouchable eyes", "emotionless eyes", "hurt eyes", "harrowed eyes"],
      ["nondescript clothes", "ragged clothes", "casual clothes", "hunting gear", "army surplus gear", "old clothes"],
    ],
  },
]
