/* 
Quest Genie
Created By: Joshua R. Sanford
Date: 10/25/2023
Description: This script will generate a randomized quest for the user to complete. This quest could be
used within a tabletop RPG or a video game.
*/

// Global Variables

// An array of Quest Giver Tribes
const questGiverTribes = [
  "The Alduin",
  "The Dragonborn",
  "The Greybeards",
  "The Blades",
  "The Thalmor",
  "The Dark Brotherhood",
  "The Companions",
  "The College of Winterhold",
  "The Dawnguard",
  "The Volkihar Clan",
  "The Forsworn",
  "The Silver Hand",
  "The Vigilants of Stendarr",
  "The Imperial Legion",
  "The Stormcloaks",
  "The Thieves Guild",
  "The Bards College",
];

// An array of Quest Giver Names
const questGiverNames = [
  "Aela the Huntress",
  "Ahtar",
  "Angrenor Once-Honored",
  "Angvid",
  "Arcadia",
  "Balimund",
  "Belethor",
  "Benor",
  "Bolgeir Bearclaw",
  "Camilla Valerius",
  "Cosnach",
  "Danica Pure-Spring",
  "Delphine",
  "Dinya Balu",
  "Ennodius Papius",
  "Erik the Slayer",
  "Faendal",
  "Farengar Secret-Fire",
  "Farkas",
  "Ghorza gra-Bagol",
  "Golldir",
  "Grelka",
  "Hadring",
  "Haran",
  "Marcurio",
  "Maven Black-Briar",
  "Mjoll the Lioness",
  "Nazeem",
  "Nelkir",
  "Vex",
  "Vilkas",
  "Viola Giordano",
  "Wilhelm",
  "Ysolda",
];

// An array of Quest Types
const questActions = [
  "find",
  "retrieve",
  "kill",
  "escort",
  "deliver",
  "steal",
  "destroy",
  "collect",
  "rescue",
  "investigate",
  "discover",
  "interrogate",
  "recover",
  "acquire",
  "obtain",
  "locate",
  "return",
  "search",
];

// An array of quest locations
const questLocations = [
  "a cave",
  "a dungeon",
  "a castle",
  "a tower",
  "a keep",
  "a fort",
  "a camp",
  "a mine",
  "a tomb",
  "a crypt",
  "a ruin",
  "a temple",
  "a shrine",
  "a house",
  "a shack",
  "a cabin",
  "a farm",
  "a mill",
  "a lumber mill",
  "a sawmill",
  "a tavern",
  "a inn",
  "a shop",
  "a store",
  "a market",
  "a stall",
];

//An array of map locations and cities
const questMapLocations = [
  "Whiterun",
  "Solitude",
  "Markarth",
  "Windhelm",
  "Riften",
  "Falkreath",
  "Morthal",
  "Dawnstar",
  "Winterhold",
  "Riverwood",
  "Ivarstead Forest",
  "Helgen",
  "Darkwater Crossing",
  "Karthwasten",
  "Kynesgrove",
  "Rorikstead",
  "Shor's Stone",
  "Stonehills",
  "Dragon Bridge",
  "Kynesgrove",
  "Shor's Stone",
];

// An array of rewards the user can recieve for completing the quest
const questRewards = [
  "gold",
  "the loin's dagger",
  "the lion's sword",
  "the dragon helm",
  "the dragon shield",
  "the blade of woe",
  "the blade of sacrifice",
  "the blade of the blooded",
  "the helm of truth",
  "a health potion",
  "a stamina potion",
  "a magicka potion",
];
