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

// An array of character Names
const characterNames = [
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
  ["find", "retrieve", "deliver", "collect", "locate", "return"],
  ["kill", "interrogate", "escort", "rescue"],
  ["steal", "destroy", "recover", "acquire", "obtain"],
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
  "the city of Whiterun",
  "the mountain of Solitude",
  "the town of Markarth",
  "the city of Windhelm",
  "the forest of Riften",
  "the city of Falkreath",
  "the mountain of Morthal",
  "the town of Dawnstar",
  "the forest of Winterhold",
  "the city of Riverwood",
  "the Ivarstead Forest",
  "the city of Helgen",
  "Darkwater Crossing",
  "the forest of Karthwasten",
  "the town of Kynesgrove",
  "the city of Rorikstead",
  "the mountain of Shor's Stone",
  "the city of Stonehills",
  "the Dragon's Bridge",
  "the forest of Kynesgrove",
  "the Shor's Stone",
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

// function to form the quest message
const formQuestMessage = () => {
  // generate a random number for each array
  const randomQuestGiverTribe = Math.floor(
    Math.random() * questGiverTribes.length
  );
  const randomQuestGiverName = Math.floor(
    Math.random() * characterNames.length
  );
  const randomQuestAction = Math.floor(Math.random() * questActions.length);
  const randomQuestLocation = Math.floor(Math.random() * questLocations.length);
  const randomQuestMapLocation = Math.floor(
    Math.random() * questMapLocations.length
  );
  const randomQuestReward = Math.floor(Math.random() * questRewards.length);

  // form the quest message
  let questMessage = `${characterNames[randomQuestGiverName]} of ${questGiverTribes[randomQuestGiverTribe]} has asked you to `;
  switch (randomQuestAction) {
    case 0:
    default:
      questMessage += `${
        questActions[0][Math.floor(Math.random() * questActions[0].length)]
      } `;
      const object =
        Math.floor(Math.random() * 3) > 1
          ? characterNames[Math.floor(Math.random() * characterNames.length)]
          : questRewards[Math.floor(Math.random() * questRewards.length)];
      questMessage += `${object} `;
      questMessage += "from ";
      break;
    case 1:
      questMessage += `${
        questActions[1][Math.floor(Math.random() * questActions[1].length)]
      } ${characterNames[Math.floor(Math.random() * characterNames.length)]}`;
      questMessage += ". They are in ";
      break;
    case 2:
      questMessage += `${
        questActions[2][Math.floor(Math.random() * questActions[2].length)]
      } ${questRewards[Math.floor(Math.random() * questRewards.length)]} `;
      questMessage += "from ";
      break;
  }

  questMessage += `${questLocations[randomQuestLocation]} in ${
    questMapLocations[randomQuestMapLocation]
  }. Your reward will be ${
    randomQuestReward === 0
      ? Math.floor(Math.random() * 500) + " " + questRewards[randomQuestReward]
      : questRewards[randomQuestReward]
  }.`;
  // return the quest message
  return questMessage;
};

console.log(formQuestMessage());
