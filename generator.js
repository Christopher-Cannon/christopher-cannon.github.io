let json = {
  "words" :
  {
    "patterns" :
    [
      "{genre} where you {action} {things}",
      "{genre} where you {adverb} {action} {things}",
      "{genre} where you can {action} {things}",
      "{genre} where you can {adverb} {action} {things}",
      "{genre} which forces you to {action} {things}",
      "{genre} which forces you to {adverb} {action} {things}",
      "{genre} which invites you to {action} {things}",
      "{genre} which invites you to {adverb} {action} {things}",
      "{genre} which questions the nature of {things}",
      "{genre} which makes you {emotion} {things}",
      "a cross between {genre} and {genre} in which you {action} {things}",
      "a cross between {genre} and {genre} in which you {adverb} {action} {things}",
      "{genre} that's also {genre} that sees you {action} {things}",
      "{genre} that's also {genre} that sees you {adverb} {action} {things}"
    ],
    "grammar" : {
      "genre" : [
        "a first person shooter",
        "a third person shooter",
        "a JRPG",
        "a god game",
        "an RPG",
        "an action game",
        "an action adventure",
        "a collectathon",
        "a racing game",
        "a mobile game",
        "a browser game",
        "a casual game",
        "a fighting game",
        "a beat-em up",
        "a shoot-em up",
        "an open-world game",
        "a board game",
        "a roguelike",
        "a souls-like",
        "a student project",
        "a clicker game",
        "a game by Hideo Kojima",
        "a game by Peter Molyneaux",
        "an indie game"
      ],
      "action" : [
        "gamify",
        "procedurally generate",
        "control",
        "implement",
        "exploit",
        "protect",
        "destroy",
        "tame",
        "hijack",
        "embrace",
        "disregard",
        "kill",
        "evade",
        "simulate",
        "observe",
        "micro-manage",
        "ruin",
        "improve",
        "rebel against",
        "fight with",
        "wrestle with",
        "become haunted by",
        "become angry about",
        "customise",
        "modify",
        "generate",
        "defeat",
        "manage",
        "hug",
        "wage war against",
        "weaponise",
        "reinvent",
        "create",
        "undermine",
        "break down",
        "regulate",
        "contemplate",
        "resurrect",
        "defy",
        "question",
        "interrogate",
        "plagiarise",
        "steal"
      ],
      "things" : [
        "communism",
        "capitalism",
        "politics",
        "telemarketers",
        "people",
        "the masses",
        "schools",
        "the economy",
        "disappointment",
        "the free market",
        "yourself",
        "marketing",
        "Tuesday",
        "Christianity",
        "the environment",
        "climate change",
        "agriculture",
        "history",
        "authority",
        "cats",
        "dogs",
        "horses",
        "birds",
        "serial killers",
        "trains",
        "cars",
        "civilisation",
        "clothing",
        "the flat earth movement",
        "Scientology",
        "terrorism",
        "the Titanic",
        "the Earth",
        "the Moon",
        "the Sun",
        "the United States",
        "Europe",
        "Africa",
        "Asia",
        "Japan",
        "China",
        "France",
        "employment",
        "mathematics",
        "physics",
        "philosophy",
        "video games",
        "progress",
        "the President of the United States of America",
        "the Prime Minister of Great Britain",
        "scissors",
        "spaghetti",
        "robots",
        "the mafia",
        "plague",
        "witchcraft",
        "magic",
        "Hideo Kojima",
        "Todd Howard",
        "Nazi Germany",
        "Soviet Russia",
        "the Cold War",
        "puns",
        "anything",
        "everything",
        "the entirety of western civilisation",
        "your house",
        "your family",
        "God",
        "aliens",
        "zombies",
        "vampires",
        "werewolves"
      ],
      "adjective" : [
        "excellent",
        "good",
        "bad",
        "terrible",
        "interesting",
        "curious",
        "questionable",
        "irrational",
        "outrageous",
        "commendable",
        "hard",
        "boring",
        "dull",
        "invigoration",
        "exciting",
        "harrowing",
        "existential",
        "dreadful"
      ],
      "emotion" : [
        "love",
        "hate",
        "loathe",
        "enjoy",
        "detest",
        "hallucinate",
        "imagine"
      ],
      "adverb" : [
        "quickly",
        "beautifully",
        "easily",
        "cruelly",
        "badly",
        "poorly",
        "silently",
        "accidentally",
        "deliberately",
        "competitively",
        "ironically"
      ],
      "inspiration" : [
        "The Lord of the Rings",
        "Star Wars",
        "The Matrix",
        "eastern philosophy",
        "eastern religion",
        "the wild west",
        "capitalist excess",
        "the Sengoku period",
        "The Iliad",
        "Dante's Inferno",
        "Greek mythology",
        "World War 1",
        "World War 2",
        "the war on drugs"
      ],
      "mechanic" : [
        "loot boxes",
        "a dynamic weather system",
        "a day/night cycle",
        "quick time events",
        "stealth mechanics",
        "a crafting system",
        "dynamic quests",
        "precision platforming",
        "wall running",
        "perma-death",
        "difficult decisions with lasting consequences"
      ],
      "addendum" : [
        ".",
        " {adverb}.",
        " but no-one cares.",
        " for no real point.",
        " to make money.",
        ", {things} not included.",
        " with {things}.",
        " who {action} {things}.",
        " who {adverb} {action} {things}.",
        " {adverb}.",
        " and make {adjective} decisions.",
        " for your personal gain.",
        " but it gets weirder.",
        " but it's a metaphor about {things}.",
        " and it's really {adjective}.",
        ", but it's {adjective}.",
        ", or so you think.",
        ", but halfway through there's a twist.",
        " in virtual reality",
        " but it's all in your head.",
        " and you {emotion} every minute of it.",
        " and there are microtransactions.",
        " but it's secretly controlled by {things}.",
        " and you can {action} your house.",
        " and you can {adverb} {action} your house.",
        " and you can {action} your life.",
        " and you can {adverb} {action} your life.",
        " in an alternate universe.",
        ", inspired by {inspiration}.",
        ", featuring Dante from the Devil May Cry series!",
        " and it's grindy as hell.",
        " and later introduces elements of {things}.",
        " and early on you're given {things} that you can {action}.",
        " with the addition of {things}.",
        " and there's a day/night cycle.",
        " with the power of {things}.",
        " and it includes {mechanic}.",
        " with {mechanic}.",
        " and it makes use of {mechanic}.",
        " in 3D.",
        " in 2D.",
        " in the future.",
        " in the past.",
        " in another world.",
        " in a fantasy world.",
        " in a dystopian world.",
        " in a post-apocalyptic world.",
        " in the modern world."
      ]
    }
  }
};

let patterns = json['words']['patterns'];
// genre, things, action, adjective, emotion, adverb, addendum
let grammar = json['words']['grammar'];
let idea = document.getElementById('idea');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * Math.floor(max)) + min;
}

function generate() {
  let chosenPattern = getRandomInt(0, patterns.length);
  let addendum = getRandomInt(0, grammar['addendum'].length);
  let regex = /[{][a-z]+[}]/gm;
  let rno = 0;
  let replace = '';

  let currentIdea = patterns[chosenPattern] + grammar['addendum'][addendum];

  // Determine how many matches to make
  let placeholders = [...currentIdea.matchAll(regex)];

  for (const p of placeholders) {
    switch(p[0]) {
      case '{genre}':
        currentIdea = replaceStr(grammar['genre'], currentIdea, /[{][genre]+[}]/)
        break;

      case '{things}':
        currentIdea = replaceStr(grammar['things'], currentIdea, /[{][things]+[}]/)
        break;

      case '{action}':
        currentIdea = replaceStr(grammar['action'], currentIdea, /[{][action]+[}]/)
        break;

      case '{adjective}':
        currentIdea = replaceStr(grammar['adjective'], currentIdea, /[{][adjective]+[}]/)
        break;

      case '{emotion}':
        currentIdea = replaceStr(grammar['emotion'], currentIdea, /[{][emotion]+[}]/)
        break;

      case '{adverb}':
        currentIdea = replaceStr(grammar['adverb'], currentIdea, /[{][adverb]+[}]/)
        break;

      case '{inspiration}':
        currentIdea = replaceStr(grammar['inspiration'], currentIdea, /[{][inspiration]+[}]/)
        break;

      case '{mechanic}':
        currentIdea = replaceStr(grammar['mechanic'], currentIdea, /[{][mechanic]+[}]/)
        break;

      case '{addendum}':
        currentIdea = replaceStr(grammar['addendum'], currentIdea, /[{][addendum]+[}]/)
        break;

      default:
        break;
    }
  }
  idea.innerHTML = currentIdea;
  console.log(currentIdea);
}

function replaceStr(arr, str, regex) {
  rno = getRandomInt(0, arr.length);
  replace = arr[rno];
  return str.replace(regex, replace);
}
