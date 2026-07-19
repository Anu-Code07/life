import type { Story, Quote } from "../types";

export const stories: Story[] = [
  {
    id: "lotr",
    title: "The Lord of the Rings",
    source: "J.R.R. Tolkien",
    category: "Literature",
    description: "A journey to destroy evil that changes everyone who undertakes it — especially the one who carries the burden.",
    themes: ["sacrifice", "friendship", "the cost of victory", "inability to return home"],
    characters: ["Frodo", "Sam", "Aragorn", "Gandalf"],
  },
  {
    id: "berserk",
    title: "Berserk",
    source: "Kentaro Miura",
    category: "Manga",
    description: "A dark fantasy about a man who refuses to break despite unimaginable suffering.",
    themes: ["perseverance", "free will", "trauma", "humanity"],
    characters: ["Guts", "Griffith", "Casca"],
  },
  {
    id: "god-of-war",
    title: "God of War",
    source: "Santa Monica Studio",
    category: "Games",
    description: "A god learning to be a father while haunted by the monster he once was.",
    themes: ["redemption", "fatherhood", "mythology", "grief"],
    characters: ["Kratos", "Atreus"],
  },
  {
    id: "rdr2",
    title: "Red Dead Redemption 2",
    source: "Rockstar Games",
    category: "Games",
    description: "An outlaw gang's dying days, seen through a man trying to find redemption before it's too late.",
    themes: ["redemption", "loyalty", "mortality", "the end of an era"],
    characters: ["Arthur Morgan", "Dutch", "John Marston"],
  },
  {
    id: "dark-souls",
    title: "Dark Souls",
    source: "FromSoftware",
    category: "Games",
    description: "A world dying around you, where perseverance in the face of hopelessness is the only victory.",
    themes: ["perseverance", "cycles", "hope in darkness", "the fire fades"],
    characters: ["The Chosen Undead", "Solaire", "Artorias"],
  },
  {
    id: "one-piece",
    title: "One Piece",
    source: "Eiichiro Oda",
    category: "Anime",
    description: "A grand adventure about freedom, dreams, and the bonds that make life worth living.",
    themes: ["freedom", "dreams", "friendship", "legacy"],
    characters: ["Luffy", "Zoro", "Nami", "Sanji"],
  },
  {
    id: "attack-on-titan",
    title: "Attack on Titan",
    source: "Hajime Isayama",
    category: "Anime",
    description: "Humanity trapped behind walls, fighting for freedom at any cost.",
    themes: ["freedom", "cycle of hatred", "sacrifice", "the cost of peace"],
    characters: ["Eren", "Mikasa", "Armin", "Levi"],
  },
  {
    id: "iliad",
    title: "The Iliad",
    source: "Homer",
    category: "Mythology",
    description: "The rage of Achilles and the tragedy of war fought for glory that isn't your own.",
    themes: ["honor", "rage", "mortality", "glory vs purpose"],
    characters: ["Achilles", "Hector", "Odysseus", "Agamemnon"],
  },
  {
    id: "odyssey",
    title: "The Odyssey",
    source: "Homer",
    category: "Mythology",
    description: "A ten-year journey home to a wife and son who may no longer recognize the man who returns.",
    themes: ["homecoming", "perseverance", "identity", "temptation"],
    characters: ["Odysseus", "Penelope", "Telemachus"],
  },
  {
    id: "dune",
    title: "Dune",
    source: "Frank Herbert",
    category: "Literature",
    description: "A young man thrust into destiny, learning that the path to power transforms you utterly.",
    themes: ["destiny", "power", "ecology", "religion as control"],
    characters: ["Paul Atreides", "Lady Jessica", "Chani"],
  },
  {
    id: "matrix",
    title: "The Matrix",
    source: "The Wachowskis",
    category: "Film",
    description: "What if everything you believed was real was a comfortable lie?",
    themes: ["reality", "choice", "awakening", "the red pill"],
    characters: ["Neo", "Morpheus", "Trinity"],
  },
  {
    id: "shawshank",
    title: "The Shawshank Redemption",
    source: "Stephen King / Frank Darabont",
    category: "Film",
    description: "Hope as a weapon against institutional despair.",
    themes: ["hope", "freedom", "patience", "institutional cruelty"],
    characters: ["Andy Dufresne", "Red"],
  },
];

export const quotes: Quote[] = [
  {
    id: "frodo-quote",
    text: "How do you pick up the threads of an old life? How do you go on, when in your heart you begin to understand there is no going back?",
    author: "Frodo Baggins",
    source: "The Lord of the Rings",
    themes: ["nostalgia", "change", "loss"],
  },
  {
    id: "kratos-quote",
    text: "Do not be sorry. Be better.",
    author: "Kratos",
    source: "God of War",
    themes: ["redemption", "growth", "action"],
  },
  {
    id: "camus-quote",
    text: "One must imagine Sisyphus happy.",
    author: "Albert Camus",
    source: "The Myth of Sisyphus",
    themes: ["absurdism", "perseverance", "meaning"],
  },
  {
    id: "aurelius-quote",
    text: "You have power over your mind — not outside events. Realize this, and you will find strength.",
    author: "Marcus Aurelius",
    source: "Meditations",
    themes: ["stoicism", "control", "inner strength"],
  },
  {
    id: "seneca-quote",
    text: "We suffer more often in imagination than in reality.",
    author: "Seneca",
    source: "Letters from a Stoic",
    themes: ["anxiety", "stoicism", "fear"],
  },
  {
    id: "nietzsche-quote",
    text: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche",
    source: "Twilight of the Idols",
    themes: ["purpose", "suffering", "meaning"],
  },
  {
    id: "luffy-quote",
    text: "I don't want to conquer anything. I just think the guy with the most freedom in this ocean is the Pirate King!",
    author: "Monkey D. Luffy",
    source: "One Piece",
    themes: ["freedom", "dreams", "joy"],
  },
  {
    id: "bojack-quote",
    text: "It gets easier. Every day it gets a little easier. But you gotta do it every day — that's the hard part.",
    author: "Jogging Baboon",
    source: "BoJack Horseman",
    themes: ["perseverance", "change", "habit"],
  },
  {
    id: "arthur-quote",
    text: "We can't change what's done. We can only move on.",
    author: "Arthur Morgan",
    source: "Red Dead Redemption 2",
    themes: ["acceptance", "redemption", "moving forward"],
  },
  {
    id: "gandalf-quote",
    text: "All we have to decide is what to do with the time that is given us.",
    author: "Gandalf",
    source: "The Lord of the Rings",
    themes: ["choice", "time", "courage"],
  },
  {
    id: "mandela-quote",
    text: "I learned that courage was not the absence of fear, but the triumph over it.",
    author: "Nelson Mandela",
    source: "Long Walk to Freedom",
    themes: ["courage", "fear", "leadership"],
  },
  {
    id: "tesla-quote",
    text: "The present is theirs; the future, for which I really worked, is mine.",
    author: "Nikola Tesla",
    source: "History",
    themes: ["vision", "perseverance", "legacy"],
  },
];

export function searchStories(query: string): Story[] {
  const q = query.toLowerCase();
  return stories.filter(
    (s) =>
      s.title.toLowerCase().includes(q) ||
      s.source.toLowerCase().includes(q) ||
      s.themes.some((t) => t.includes(q)) ||
      s.characters.some((c) => c.toLowerCase().includes(q))
  );
}

export function searchQuotes(query: string): Quote[] {
  const q = query.toLowerCase();
  return quotes.filter(
    (qt) =>
      qt.text.toLowerCase().includes(q) ||
      qt.author.toLowerCase().includes(q) ||
      qt.source.toLowerCase().includes(q) ||
      qt.themes.some((t) => t.includes(q))
  );
}
