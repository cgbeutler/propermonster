import {Abilities, type Feat, FeatType, PassiveTypes} from "./CompendiumTypes";


export const havenLookup: Array<Feat> = [
  {
    name: `Lore Library`,
    id: `090a7975-c38b-4650-a859-4d9c2ed4151b`,
    featType: FeatType.Haven,
    
    description: `Reading the tomes and grimoires in this library help prepare you (+1 \`forward\`) to \`use magic\`.`,
    longDescription: `When you hit the books, take +1 \`forward\` to \`investigate the mystery\` (as long as historical or reference works are appropriate).`,

    modMoves: [{
      applyToMoves: [`1b0ccc41-de6e-45dc-9f9f-bb1d7d33a447`], // Investigate A Mystery
      modRoll: 1,
      modCondition: `Apply once after you have spent time reading in your **Lore Library** about the relevant histories and references.`,
    }],
    passives: [{
      type: PassiveTypes.Haven,
      description: `Study the books here to take +1 \`forward\` to \`investigate the mystery\` (as long as historical or reference works are appropriate).`,
    }]
  },
  {
    name: `Mystical Library`,
    id: `38639a3f-c64d-459f-920e-a2ccb8ebe8e3`,
    featType: FeatType.Haven,
    
    description: `Reading the tomes and grimoires in this library help prepare you (+1 \`forward\`) to \`use magic\`.`,
    longDescription: `If you use your library’s occult tomes and grimoires, preparing with your tomes and grimoires,
take +1 \`forward\` for \`use magic\` (or another **basic weird move**.)`,

    modMoves: [{
      applyToMoves: [
        `ae7216e7-d5d0-4858-9469-9c3a04f47844`, // Use Magic
        `5bd60cfb-0fe1-4b8a-a606-a665bb4a660c`, // Empath
        `e12b2b89-6e19-43bc-a70d-6e9cdb94b77c`, // Illuminated
        `59d0d20d-8222-4928-9530-867537ebedd1`, // No Limits
        `00dcbb31-c8bd-43f6-b092-2e9f2188552a`, // Past Lives
        `0ef9f128-f877-49f6-91b2-1c9e04850f4a`, // Sensitive
        `22905bf8-71e5-453e-931c-9c8041fc4e7a`, // Trust Your Gut
        `231dd633-f244-49dd-ba71-74ec957e1a83`, // Telekinesis
        `8113df8e-c21f-417f-94b9-6a1beb0b88c4`, // Weird Science
      ],
      modRoll: 1,
      modCondition: `Apply once after you have spent time reading in your **Mystical Library**.`,
    }],
    
    passives: [{
      type: PassiveTypes.Haven,
      description: `If you use your library’s occult tomes and grimoires, preparing with your tomes and grimoires, take +1 \`forward\` for \`use magic\`.`,
    }]
  },
  {
    name: `Protection Spells`,
    id: `8f343004-d7fb-4369-a419-3b87bf584b3a`,
    featType: FeatType.Haven,
    
    description: `Your \`haven\` is safe from monsters.`,
    longDescription: `Monsters cannot enter your \`haven\` without doing something very special and difficult to evade the wards.`,

    passives: [{
      type: PassiveTypes.Haven,
      description: `Monsters cannot enter your \`haven\` without doing something very special and difficult to evade the wards.`,
    }]

  },
  {
    name: `Armory`,
    id: `637b8472-b759-4c0b-bff2-f593384e11ec`,
    featType: FeatType.Haven,
    
    description: `You have a stockpile of mystical and rare monster-killing weapons and items.`,

    actions: [{
      name: `Search Armory`,
      id: `3a59e632-23b2-405f-b2a3-8052a44b0496`,
      description: `Search your armory's stockpile of weapons and items for what you need.`,
      longDescription: `You have a stockpile of mystical and rare monster-killing weapons and items.
If you need a special weapon, you can search for it in your armory as a \`+Weird\` move.`,
      ability: Abilities.Weird,
      miss: `You've got the wrong thing`,
      mixedSuccess: `You have it, but only the minimum amount (if that matters.)`,
      solidSuccess: `You have it (and plenty of it, if that matters.)`
    }],
    
    passives: [{
      type: PassiveTypes.Haven,
      description: `You have a stockpile of mystical and rare monster-killing weapons and items (see the "Search Armory" move.)`,
    }]
  },
  {
    name: `Infirmary`,
    id: `e1f6077a-9861-460f-8bd9-a4edb3ef25e0`,
    featType: FeatType.Haven,
    
    description: `You can heal people, and have the space for one or two to recuperate.`,
    longDescription: `You can heal people, and have the space for one or two to recuperate.
The Keeper will tell you how long any patient’s recovery is likely to take, and if you need extra supplies or help.`,

    passives: [
      {
        type: PassiveTypes.Haven,
        description: `You can heal people, and have the space for one or two to recuperate.
The Keeper will tell you how long any patient’s recovery is likely to take, and if you need extra supplies or help.`,
      },
      {
        type: PassiveTypes.Health,
        description: `You can heal people, and have the space for one or two to recuperate.
The Keeper will tell you how long any patient’s recovery is likely to take, and if you need extra supplies or help.`,
      },
    ]
  },
  {
    name: `Workshop`,
    id: `b2ba4eab-6479-450c-b9be-50923ddf6f20`,
    featType: FeatType.Haven,
    
    description: `You have a space for building and repairing guns, cars and other gadgets.`,
    longDescription: `You have a space for building and repairing guns, cars and other gadgets.
Work out with the Keeper how long any repair or construction will take, and if you need extra supplies or help.`,

    passives: [{
      type: PassiveTypes.Haven,
      description: `You have a space for building and repairing guns, cars and other gadgets.
Work out with the Keeper how long any repair or construction will take, and if you need extra supplies or help.`,
    }]
  },
  {
    name: `Oubliette`,
    id: `7848b9d8-285d-489d-aa61-dc14b208fc2e`,
    featType: FeatType.Haven,
    
    description: `Anything you stash in the oubliette can’t be found, can’t do any magic, and can’t get out.`,
    longDescription: `This room is isolated from every kind of monster, spirit and magic that you know about.
Anything you stash in there can’t be found, can’t do any magic, and can’t get out.
This room is perfect for your burgeoning collection of creatures and artifacts.`,
    
    passives: [
      {
        type: PassiveTypes.Haven,
        description: `This room is isolated from every kind of monster, spirit and magic that you know about.
Anything you stash in there can't be found, can't do any magic, and can't get out.`,
      },
      {
        type: PassiveTypes.Inventory,
        description: `Anything you stash in the oubliette can't be found, can’t do any magic, and can’t get out.`,
      }
    ]
  },
  {
    name: `Panic Room`,
    id: `c2652b3e-a420-47d1-ba61-77699eb8f7b0`,
    featType: FeatType.Haven,
    
    description: `You can hide out there for a few days, safe from pretty much anything.`,
    longDescription: `This has essential supplies and is protected by normal and mystical means.
You can hide out there for a few days, safe from pretty much anything.`,

    passives: [
      {
        type: PassiveTypes.Haven,
        description: `This has essential supplies and is protected by normal and mystical means.
You can hide out there for a few days, safe from pretty much anything.`,
      },
      {
        type: PassiveTypes.Protections,
        description: `You can hide out in your **Panic Room** for a few days, safe from pretty much anything.`,
      },
    ]
  },
  {
    name: `Magical Laboratory`,
    id: `131725f9-d136-4bf6-b5ff-bdfa297b71d3`,
    featType: FeatType.Haven,
    
    description: `A mystical lab with all kinds of weird ingredients and tools useful for casting spells.`,
    longDescription: `You have a mystical lab with all kinds of weird ingredients and tools to help with
\`use magic\`, \`big magic\`, and any other magical moves.`,

    modMoves: [{
      applyToMoves: [`*`],
      footnote: `You have a **Magical Laboratory** with all kinds of weird ingredients and tools to help with magic moves.`,
    }],
    passives: [{
      type: PassiveTypes.Haven,
      description: `You have a mystical lab with all kinds of weird ingredients and tools to help with
\`use magic\`, \`big magic\`, and any other magical moves.`,
    }]
  },
  {
    name: `Film Lab and Editing Suite`,
    id: `3639d3ad-8ee4-46d0-8542-e1ae1e155980`,
    featType: FeatType.Haven,
    
    description: `A lab for developing film and manipulating it.`,

    passives: [{
      type: PassiveTypes.Haven,
      description: `You can develop film yourself here and manipulate it, such as zooming in, adding contrast, etc.`,
    }]
  },
] as const;
