import type { SimilarStory } from "@/lib/types";

export interface DailyChapterEnrichment {
  context: string;
  whyItMatters: string;
  reflection: string;
  similarStories: SimilarStory[];
  closingThought: string;
}

export const dailyChapterEnrichment: Record<string, DailyChapterEnrichment> = {
  "achilles-rage": {
    context:
      "The Trojan War had dragged on for nine years. Agamemnon, king of the Greeks, seized Briseis — a woman given to Achilles as war-prize — to replace his own lost concubine. It was a public humiliation of Greece's greatest warrior, fought for a king's ego rather than any cause Achilles believed in.",
    whyItMatters:
      "When you're grinding at work, in a relationship, or in a life that feels like someone else's script, Achilles names the rage underneath: not laziness, not weakness — the refusal to bleed for another person's glory.",
    reflection:
      "His withdrawal nearly destroyed the Greek army. His return destroyed Hector — not for Agamemnon, but for Patroclus. The lesson isn't that rage is noble. It's that your energy belongs to battles that are actually yours. Know the difference before you burn out or burn everything down.",
    similarStories: [
      { character: "Arjuna", source: "Bhagavad Gita", reason: "Also froze when duty demanded a war he didn't choose" },
      { character: "Karna", source: "Mahabharata", reason: "Fought loyally for a cause that wasn't truly his" },
    ],
    closingThought: "The war goes on either way. Make sure it's yours.",
  },
  "frodo-return": {
    context:
      "Frodo Baggins was a hobbit who wanted nothing more than his garden, his books, and second breakfast. The Ring found him anyway. For months he carried corruption toward Mount Doom — watched friends fall, bore wounds that never closed, and did what no one else could.",
    whyItMatters:
      "If you've come back from grief, illness, burnout, or trauma and found that home feels strange — not because it changed, but because you did — Frodo is your mirror.",
    reflection:
      "The Shire didn't reject him. It simply couldn't hold what he'd become. Leaving for the Grey Havens wasn't failure. It was honesty. Some experiences are too large for the life you had before. You don't owe anyone a performance of who you used to be.",
    similarStories: [
      { character: "Odysseus", source: "The Odyssey", reason: "Returned home after decades to find he no longer fit" },
      { character: "Joel Miller", source: "The Last of Us", reason: "Survived the impossible and couldn't go back to before" },
    ],
    closingThought: "You can love the Shire and still need to leave it.",
  },
  "guts-keep-moving": {
    context:
      "Guts was born from a corpse, raised by mercenaries, betrayed by his closest friend in the Eclipse — an event that cost him his arm, his eye, and everyone he loved. Demons hunted him. The world offered no justice, no happy ending, no god worth praying to.",
    whyItMatters:
      "When life keeps hitting and people tell you to 'stay positive,' Guts is the answer for those who are tired of pretending. He doesn't walk because he believes it gets better. He walks because stopping is death.",
    reflection:
      "His sword is absurdly large because his burden is absurdly large. He protects Casca not because he's healed — he isn't — but because connection is the one thing the abyss can't take if you refuse to let go. Forward motion isn't optimism. Sometimes it's the only rebellion left.",
    similarStories: [
      { character: "Levi Ackerman", source: "Attack on Titan", reason: "Keeps fighting after losing everyone, again and again" },
      { character: "Rocky Balboa", source: "Rocky", reason: "Gets hit, keeps moving — no promise of victory" },
    ],
    closingThought: "Keep walking. Not because it's easy. Because you're still here.",
  },
  "kratos-better": {
    context:
      "Kratos murdered his own family in a god's trickery. He killed gods, titans, and anything in his path. By the time he reached the Norse lands, he was a ghost — a father trying not to become the monster his son would fear.",
    whyItMatters:
      "If your past includes versions of yourself you're ashamed of — anger, addiction, cruelty, cowardice — Kratos doesn't ask you to pretend it didn't happen. He asks you to be better now, in the moments that still matter.",
    reflection:
      "'Do not be sorry. Be better.' is not cruelty. It's permission to stop drowning in guilt and start building something your past self couldn't have built. Atreus didn't need a perfect father. He needed one who kept trying.",
    similarStories: [
      { character: "Arthur Morgan", source: "Red Dead Redemption 2", reason: "Dying man choosing grace in his final days" },
      { character: "Simba", source: "The Lion King", reason: "Ran from the past until he faced who he was meant to become" },
    ],
    closingThought: "The ghost can still become a father.",
  },
  "mandela-fear": {
    context:
      "In 1962, Nelson Mandela was sentenced to life in prison for opposing apartheid. Robben Island was designed to break men — limestone quarries, isolation, decades of darkness. He emerged 27 years later at age 71, when the world expected vengeance.",
    whyItMatters:
      "Fear of speaking up, fear of failure, fear of what they'll think — Mandela didn't become fearless in prison. He learned that courage is a practice, not a personality trait.",
    reflection:
      "He chose reconciliation not because the system deserved mercy, but because a nation chained to revenge would never be free. Your scale is different, but the principle holds: the bravest act is often the one that doesn't feel brave at all.",
    similarStories: [
      { character: "Atticus Finch", source: "To Kill a Mockingbird", reason: "Stood for justice knowing he would lose" },
      { character: "Marcus Aurelius", source: "Meditations", reason: "Led through plague and war without becoming what he fought" },
    ],
    closingThought: "Courage is not the absence of fear. It is the decision that something else matters more.",
  },
  "camus-sisyphus": {
    context:
      "The gods punished Sisyphus for his cunning — condemning him to roll a boulder up a hill forever, only to watch it roll back down each time he reached the summit. Albert Camus took this myth and made it the centerpiece of his philosophy of the absurd.",
    whyItMatters:
      "The job that goes nowhere. The relationship that repeats the same fight. The dream that keeps slipping. Sisyphus is every person who has ever asked: what's the point of trying again?",
    reflection:
      "Camus didn't say the boulder was meaningful. He said imagining Sisyphus happy is the rebellion — choosing to push not because the gods are fair, but because your defiance is yours. Absurdity doesn't mean despair. It means creating meaning where none was given.",
    similarStories: [
      { character: "Vincent van Gogh", source: "History", reason: "Painted masterpieces no one wanted to buy" },
      { character: "BoJack Horseman", source: "BoJack Horseman", reason: "Gets up every day and tries again, despite everything" },
    ],
    closingThought: "The boulder rolls back. You push anyway. That is the whole victory.",
  },
  "arthur-redemption": {
    context:
      "Arthur Morgan was a gunslinger dying of tuberculosis, loyal to Dutch van der Linde long after Dutch lost his way. Banks, trains, violence — a life that left blood on every horizon. When he learned he was running out of time, he had to decide what a dying outlaw could still do.",
    whyItMatters:
      "If you feel like you've wasted years — wrong career, wrong people, wrong choices — Arthur's story is for anyone who thinks it's too late to become someone different.",
    reflection:
      "He couldn't undo the robberies or the bodies. He could help John Marston escape. He could be kind to strangers. Redemption wasn't a reset button — it was how he spent his remaining breaths. The clock doesn't erase the past. It clarifies what still counts.",
    similarStories: [
      { character: "Kratos", source: "God of War", reason: "Monster trying to become a father in the time he has left" },
      { character: "Dumbledore", source: "Harry Potter", reason: "Carried guilt for decades but chose to be light for others" },
    ],
    closingThought: "You can't change what's done. You can still choose what the ending looks like.",
  },
  "luffy-freedom": {
    context:
      "In a world ruled by the World Government and the Navy, Monkey D. Luffy set sail with nothing but a straw hat and a dream: to find the One Piece and become Pirate King — not to rule, but to be the freest person alive.",
    whyItMatters:
      "When you feel trapped — by expectations, by money, by fear of what people will say — Luffy is the boy who laughs at the cage and sails straight into the storm.",
    reflection:
      "He loses nakama. He nearly dies countless times. He never stops grinning — not because life is easy, but because joy is his answer to a world that wants him small. Freedom isn't the absence of chains. It's refusing to let them define you.",
    similarStories: [
      { character: "Eren Yeager", source: "Attack on Titan", reason: "Also obsessed with freedom — but paid a darker price" },
      { character: "Rocky Balboa", source: "Rocky", reason: "Proved a nobody could go the distance" },
    ],
    closingThought: "The ocean is vast. So is the life you're allowed to claim.",
  },
  "shawshank-hope": {
    context:
      "Andy Dufresne was a banker sentenced to life for murders he didn't commit. Shawshank Prison was designed to crush souls — routine, brutality, the slow erosion of dignity. Most men gave up. Andy didn't.",
    whyItMatters:
      "When you're stuck — a dead-end job, a toxic situation, a season that feels endless — Andy's twenty-year tunnel is proof that patience and hope can be weapons.",
    reflection:
      "He played Mozart over the prison speakers so men who'd forgotten beauty could remember it. He wrote letters for years to fund a library. He escaped not through rage but through a rock hammer and 19 years of persistence. Hope isn't naive when it's disciplined.",
    similarStories: [
      { character: "Red", source: "The Shawshank Redemption", reason: "Kept hope alive when the prison tried to kill it" },
      { character: "Mandela", source: "Long Walk to Freedom", reason: "Survived decades of confinement without losing himself" },
    ],
    closingThought: "Remember: hope is a good thing. Maybe the best of things.",
  },
  "odysseus-journey": {
    context:
      "After ten years of war at Troy, Odysseus angered Poseidon and was cursed to wander ten more years — past the Cyclops, the Sirens, Circe, Scylla and Charybdis. His crew died. His youth faded. Home kept receding.",
    whyItMatters:
      "When your goal feels impossibly far — finishing school, healing, building a life, getting home to yourself — Odysseus is the man who kept sailing when every god and monster said stop.",
    reflection:
      "Penelope waited twenty years. Telemachus grew up without him. When Odysseus finally reached Ithaca, he was unrecognizable — because the journey had carved him into someone new. Home isn't where you started. It's what you never stopped walking toward.",
    similarStories: [
      { character: "Frodo Baggins", source: "Lord of the Rings", reason: "Long journey that changed him beyond return" },
      { character: "Siddhartha", source: "Siddhartha", reason: "Wandered many paths before finding peace" },
    ],
    closingThought: "The sea is long. Ithaca is still worth it.",
  },
  "dumbledore-light": {
    context:
      "Albus Dumbledore was once a young man who dreamed of power alongside Grindelwald — until his sister Ariana died in the crossfire. He spent the rest of his life carrying that guilt, leading Hogwarts, and preparing a boy to die.",
    whyItMatters:
      "If you smile through pain so others feel safe — if you carry guilt no one sees — Dumbledore knows that being the light doesn't mean being unbroken.",
    reflection:
      "He told Harry that happiness can be found in the darkest times, if one remembers to turn on the light. He wasn't preaching from comfort. He was describing his own daily practice. You can be shattered and still be someone's reason to believe good exists.",
    similarStories: [
      { character: "Gandalf", source: "Lord of the Rings", reason: "Ancient guide who carried weight others never saw" },
      { character: "Marcus Aurelius", source: "Meditations", reason: "Led through darkness while writing himself toward peace" },
    ],
    closingThought: "Turn on the light — even when you feel none yourself.",
  },
  "musashi-way": {
    context:
      "Miyamoto Musashi fought his first duel at thirteen. By thirty, he had won over sixty — never losing. He wandered Japan as a ronin, studied strategy, and eventually retreated to a cave to write The Book of Five Rings.",
    whyItMatters:
      "In a world of distraction — notifications, comparison, endless noise — Musashi's discipline is radical: do nothing that is of no use.",
    reflection:
      "He could have rested on being undefeated. Instead he kept stripping away ego, seeking wisdom beyond the blade. Mastery without purpose is just violence with skill. The question isn't whether you're good at something. It's whether it serves who you're becoming.",
    similarStories: [
      { character: "Ekalavya", source: "Mahabharata", reason: "Achieved mastery through solitary devotion" },
      { character: "Siddhartha", source: "Siddhartha", reason: "Sought wisdom beyond every teacher and path" },
    ],
    closingThought: "Cut away everything that is not the way.",
  },
  "bojack-change": {
    context:
      "BoJack Horseman was a '90s sitcom star — wealthy, famous, and hollow. He sabotaged every relationship, drowned in alcohol, and hated himself with the precision of someone who'd practiced it for decades.",
    whyItMatters:
      "If you've hurt people while hurting yourself — if change feels impossible because you've tried before — BoJack doesn't promise a fairy-tale ending. It promises that showing up matters.",
    reflection:
      "Diane's line — 'It gets easier. Every day it gets a little easier. But you gotta do it every day — that's the hard part' — is the most honest thing about healing ever written. You're not broken because it's hard. You're human. Keep choosing differently.",
    similarStories: [
      { character: "Camus", source: "The Myth of Sisyphus", reason: "Gets up every day and tries again, despite everything" },
      { character: "Kratos", source: "God of War", reason: "Trying to outgrow a monstrous past one day at a time" },
    ],
    closingThought: "Do it every day. That's the whole hard part.",
  },
  "atticus-stand": {
    context:
      "Maycomb, Alabama, 1930s. Tom Robinson, a Black man, was accused of a crime he didn't commit. Atticus Finch was appointed to defend him — knowing the jury, the town, and the verdict before the trial began.",
    whyItMatters:
      "When everyone around you accepts something wrong as normal — at work, in culture, in silence — Atticus is the man who stood anyway.",
    reflection:
      "He told Scout that real courage is 'when you know you're licked before you begin, but you begin anyway.' He didn't win the trial. He won something harder: he showed his children what integrity looks like when it costs everything.",
    similarStories: [
      { character: "Mandela", source: "Long Walk to Freedom", reason: "Fought injustice knowing the cost" },
      { character: "Yudhishthira", source: "Mahabharata", reason: "Chose truth when lies would have been easier" },
    ],
    closingThought: "Conscience doesn't take polls. Stand anyway.",
  },
  "artorias-dark": {
    context:
      "Artorias was one of the Four Knights of Gwyn — the greatest warrior in Anor Londo. When the Abyss threatened to consume Lordran, he went alone into the darkness to halt its spread, armed only with his sword and his wolf companion Sif.",
    whyItMatters:
      "Sometimes you face something knowing you won't walk away — a sacrifice for someone else, a line you hold so others can retreat. Artorias is for those battles.",
    reflection:
      "He was corrupted. He failed. He is remembered as a tragedy. But his sacrifice slowed the Abyss. Not every hero gets a victory screen. Some hold the door long enough for the world to continue. That is still heroism.",
    similarStories: [
      { character: "Bhishma", source: "Mahabharata", reason: "Bound by vow to fight on the wrong side of a just war" },
      { character: "Levi Ackerman", source: "Attack on Titan", reason: "Makes impossible choices so others survive" },
    ],
    closingThought: "Hold the line. Even when you know you won't cross it.",
  },
  "siddhartha-search": {
    context:
      "Siddhartha was born a Brahmin's son in ancient India — handsome, intelligent, destined for comfort. He left it all: first to become an ascetic, then a merchant, then a lover, then a ferryman. Each path promised truth. Each fell short.",
    whyItMatters:
      "If you've reinvented yourself — changed careers, beliefs, relationships, identities — and still feel lost, Siddhartha says: you're not failing. You're searching.",
    reflection:
      "Enlightenment didn't come from a teacher or a book. It came when he stopped running from experience and listened to the river — to the unity of joy and sorrow, gain and loss. You are not one version of yourself. You are every version you've survived.",
    similarStories: [
      { character: "Siddhartha", source: "Siddhartha", reason: "Every path was necessary; none was complete alone" },
      { character: "Shiva", source: "Hindu Mythology", reason: "Destruction of the old self as necessary transformation" },
    ],
    closingThought: "Listen to the river. It already knows.",
  },
  "eren-freedom": {
    context:
      "Eren Yeager grew up behind three walls, told that titans had wiped out humanity. All he wanted was to see the ocean. When the walls fell and his mother died, that boy became something the world would fear.",
    whyItMatters:
      "Freedom is seductive. Eren asks the question we avoid: what would you destroy to be free? And would you recognize yourself afterward?",
    reflection:
      "He didn't become a villain in one moment. Each compromise felt justified — protecting friends, protecting Paradis, protecting freedom. The tragedy is how easily noble desires curdle into atrocity. Want freedom. But watch what you become chasing it.",
    similarStories: [
      { character: "Paul Atreides", source: "Dune", reason: "Seized destiny and unleashed holy war" },
      { character: "Luffy", source: "One Piece", reason: "Sought freedom without becoming what he hated" },
    ],
    closingThought: "Fight for freedom. Don't become the cage you escaped.",
  },
  "van-gogh-star": {
    context:
      "Vincent van Gogh painted furiously between psychotic episodes, poverty, and isolation. He sold one painting in his lifetime. His brother Theo supported him. The world looked away.",
    whyItMatters:
      "When you create — write, build, make art — and no one sees it, Van Gogh is proof that the work matters even without applause.",
    reflection:
      "Starry Night was painted from an asylum window. Sunflowers were painted for a friend who would never hang them in a gallery. He didn't create because he was happy. He created because making beauty was how he stayed alive. Your audience can come later. Making it is the act of courage.",
    similarStories: [
      { character: "Sisyphus", source: "Greek Mythology", reason: "Work that seemed futile, done anyway" },
      { character: "Musashi", source: "History", reason: "Devoted life to craft beyond recognition" },
    ],
    closingThought: "Paint the stars. Even if no one is watching.",
  },
  "paul-atreides": {
    context:
      "Paul Atreides was fifteen when his family was destroyed on Arrakis. The Bene Gesserit, the spice, and millennia of breeding had shaped him into a figure the Fremen would call Muad'Dib — a messiah who could see every possible future.",
    whyItMatters:
      "When people tell you what you're 'meant' for — family expectations, career paths, destiny — Paul warns: be careful what you're destined for.",
    reflection:
      "He seized power to save his family and triggered a holy war that killed billions. Every gift came with a shadow. Purpose can be a cage dressed as calling. Choose your path — don't just accept the one laid out for you.",
    similarStories: [
      { character: "Eren Yeager", source: "Attack on Titan", reason: "Freedom at a cost the world couldn't bear" },
      { character: "Arjuna", source: "Bhagavad Gita", reason: "Destined warrior who had to choose his path consciously" },
    ],
    closingThought: "I must not fear. But I must not confuse destiny with wisdom.",
  },
  "rocky-balance": {
    context:
      "Rocky Balboa was a small-time boxer and debt collector in Philadelphia — a nobody. When heavyweight champion Apollo Creed needed a last-minute opponent, Rocky got a shot no one thought he deserved.",
    whyItMatters:
      "When you feel like a bum — overlooked, underestimated, not enough — Rocky is the story of going the distance even when winning isn't the point.",
    reflection:
      "He lost the fight. He went fifteen rounds with the champion of the world. He proved to himself he wasn't a bum. That was enough. Sometimes the victory isn't the trophy. It's knowing you didn't stay down.",
    similarStories: [
      { character: "Guts", source: "Berserk", reason: "Keeps moving forward without promise of victory" },
      { character: "Ekalavya", source: "Mahabharata", reason: "Nobody who became greater than those who dismissed him" },
    ],
    closingThought: "Go the distance. That's the win.",
  },
  "aurelius-mind": {
    context:
      "In AD 161, Marcus Aurelius became emperor of Rome — the most powerful man alive. He did not want the throne; he wanted philosophy. The Antonine Plague killed thousands. Germanic tribes hammered the borders. His general Cassius rebelled. Children died. Amid all this, he wrote private notes in Greek, never meant to be read.",
    whyItMatters:
      "When everything around you is chaos — work, health, relationships, things you cannot control — Marcus offers something radical: the one thing you always own is your response.",
    reflection:
      "Most of us rehearse catastrophes at 2 AM. Marcus rehearsed acceptance, duty, and mental sovereignty. You don't need an empire to use his method. Catch yourself fighting wars you cannot win, and redirect your energy toward what is actually yours: your mind, your choices, your character.",
    similarStories: [
      { character: "Seneca", source: "Stoicism", reason: "Wrote philosophy while navigating power and peril" },
      { character: "Krishna", source: "Bhagavad Gita", reason: "Taught action without clinging to outcomes" },
    ],
    closingThought: "The empire could fall. Your mind does not have to.",
  },
  "joel-ellie": {
    context:
      "On outbreak day, Joel Miller lost his daughter Sarah. Twenty years later, he smuggled a girl named Ellie across a ruined America — not because he believed in saving humanity, but because she became the daughter he chose.",
    whyItMatters:
      "When the world demands a noble sacrifice and your heart demands you protect one person — Joel asks the question no philosophy answers cleanly.",
    reflection:
      "He saved Ellie from the Fireflies knowing it might doom humanity. Was it right? The story refuses to judge. It asks what you'd do for one person you love when every system says let them go. Love isn't always noble. Sometimes it's choosing one person over the world.",
    similarStories: [
      { character: "Savitri", source: "Mahabharata", reason: "Followed love into the realm of death itself" },
      { character: "Karna", source: "Mahabharata", reason: "Chose loyalty to one friend over blood and kingdom" },
    ],
    closingThought: "Some choices have no clean answer. Only the one you'd make again.",
  },
  "simba-return": {
    context:
      "Simba was heir to Pride Rock until Scar tricked him into believing he caused Mufasa's death. He ran — built a carefree life with Timon and Pumbaa while the Pride Lands rotted under Scar's rule.",
    whyItMatters:
      "If you've been running from guilt, from responsibility, from a version of yourself you're afraid to face — Simba's story is about what happens when you stop.",
    reflection:
      "Rafiki didn't tell him to forget the past. He hit him with a stick and said: 'Oh yes, the past can hurt. But you can either run from it or learn from it.' Leadership wasn't about being fearless. It was about returning to who he was meant to be.",
    similarStories: [
      { character: "Kratos", source: "God of War", reason: "Returned to face the past and become someone new" },
      { character: "Frodo Baggins", source: "Lord of the Rings", reason: "Could not outrun what the journey made of him" },
    ],
    closingThought: "The past hurts. Return to it anyway.",
  },
  "gandalf-time": {
    context:
      "Gandalf was a Maia — an ancient spirit sent to Middle-earth not to rule but to guide. He fell fighting the Balrog in Moria and returned changed. He carried the knowledge that Sauron could not be defeated by strength alone.",
    whyItMatters:
      "You don't get to choose your moment — the layoff, the diagnosis, the breakup, the war. Gandalf's wisdom is about what you do inside the time you're given.",
    reflection:
      "His power was never fireworks. It was showing ordinary people — hobbits, a ranger, a dwarf, an elf — that they were capable of extraordinary things. You can't control when the quest begins. You can decide who you are once it does.",
    similarStories: [
      { character: "Dumbledore", source: "Harry Potter", reason: "Guide who carried impossible weight with grace" },
      { character: "Krishna", source: "Bhagavad Gita", reason: "Friend and teacher in the moment of crisis" },
    ],
    closingThought: "All you have to decide is what to do with the time that is given you.",
  },
  "levi-continue": {
    context:
      "Levi Ackerman lost every squad he ever led. He watched Erwin die. He cleaned blood off his blades and kept fighting — not because he believed in victory, but because someone had to make the impossible choices.",
    whyItMatters:
      "When you've been the strong one for too long — carrying grief quietly, making hard calls no one else will — Levi doesn't offer comfort. He offers recognition.",
    reflection:
      "His cruelty was compassion compressed into action. He chose to believe in the choices he made because the alternative was paralysis. Strength sometimes looks like making the hard call and carrying it alone. You don't have to feel good about it. You have to keep going.",
    similarStories: [
      { character: "Guts", source: "Berserk", reason: "Keeps fighting after losing everything, repeatedly" },
      { character: "Artorias", source: "Dark Souls", reason: "Made the sacrifice no one else could" },
    ],
    closingThought: "Believe you won't regret the choice. Then live with it.",
  },
  "arjuna-doubt": {
    context:
      "On the field of Kurukshetra, two armies faced each other — cousins, teachers, elders. Arjuna, the finest archer alive, looked across the battlefield and saw everyone he loved on both sides. His hands trembled. He dropped his bow.",
    whyItMatters:
      "When duty demands something that breaks your heart — leaving, fighting, choosing, ending — Arjuna's collapse is the most human moment in the Gita.",
    reflection:
      "Krishna didn't tell him to stop feeling. He taught him to act without attachment to outcome — to do what must be done while releasing the ego that makes every loss unbearable. Arjuna picked up the bow not because war was easy, but because some duties break you before they make you.",
    similarStories: [
      { character: "Achilles", source: "The Iliad", reason: "Warrior who questioned whether the battle was his" },
      { character: "Bhishma", source: "Mahabharata", reason: "Bound to fight despite knowing it was wrong" },
    ],
    closingThought: "Pick up the bow. Not without fear — through it.",
  },
  "karna-loyalty": {
    context:
      "Karna was born the son of Kunti and the sun god Surya — but raised as a charioteer's son. The world mocked his origin while he surpassed every warrior. When he learned the Pandavas were his brothers, he had already sworn loyalty to Duryodhana, the one friend who stood by him when no one else would.",
    whyItMatters:
      "When the world judges you for where you came from — not who you are — Karna is the man who kept his word when fate gave him every reason not to.",
    reflection:
      "He gave away his divine armor knowing it would cost his life. He fought on the wrong side because his word mattered more than convenience. You cannot control how the world treats you. You can control whether you betray yourself.",
    similarStories: [
      { character: "Bhishma", source: "Mahabharata", reason: "Terrible vow that defined and imprisoned him" },
      { character: "Joel Miller", source: "The Last of Us", reason: "Chose one bond over the greater good" },
    ],
    closingThought: "Let the world abandon you. Never abandon your word.",
  },
  "rama-exile": {
    context:
      "Rama was beloved prince of Ayodhya, about to be crowned. On the eve of his coronation, his stepmother Kaikeyi demanded his father's two boons: crown her son Bharata, exile Rama for fourteen years. Dasharatha could not break his word. Rama could have seized the throne. He walked into the forest.",
    whyItMatters:
      "When doing the right thing costs you everything — the promotion, the relationship, the easy path — Rama is the measure of integrity without applause.",
    reflection:
      "He didn't rage at his father. He didn't fight the system. He honored a promise that wasn't even his — because dharma mattered more than a crown. Suffering wasn't weakness. It was the price of being someone who could not bend his integrity.",
    similarStories: [
      { character: "Yudhishthira", source: "Mahabharata", reason: "Chose righteousness over comfort at every turn" },
      { character: "Atticus Finch", source: "To Kill a Mockingbird", reason: "Stood for justice knowing he would lose" },
    ],
    closingThought: "Walk the harder path. That is the crown.",
  },
  "sita-fire": {
    context:
      "Sita was abducted by Ravana and imprisoned in Lanka — surrounded by demons, tested, threatened. She refused every offer of comfort that came with surrender. When Rama rescued her, the world doubted her purity anyway.",
    whyItMatters:
      "When people question your worth after what was done to you — when survival itself is treated as suspect — Sita's fire is your answer.",
    reflection:
      "She walked through agni pariksha — the trial by fire — not because she needed to prove anything to herself, but because the world demanded proof. The flames did not touch her. Her strength was never in the rescue. It was in surviving with her soul intact.",
    similarStories: [
      { character: "Savitri", source: "Mahabharata", reason: "Faced death itself and would not yield" },
      { character: "Draupadi", source: "Mahabharata", reason: "Endured humiliation and emerged with dignity intact" },
    ],
    closingThought: "What they did to you is not who you are.",
  },
  "hanuman-leap": {
    context:
      "When Rama's wife Sita was held in Lanka across a vast ocean, the monkey army despaired — the sea was too wide. Hanuman had been cursed to forget his own power until reminded by love and duty.",
    whyItMatters:
      "When you're told something is impossible — the dream, the recovery, the leap — Hanuman is the reminder that you may have forgotten what you're capable of.",
    reflection:
      "Jambavan told him what he truly was. Hanuman grew to the size of a mountain and leapt across the sea — not for glory, but because Rama needed him. Devotion makes cowards into forces of nature. Your power awakens when something matters more than fear.",
    similarStories: [
      { character: "Rocky Balboa", source: "Rocky", reason: "Nobody who discovered he could go the distance" },
      { character: "Arjuna", source: "Bhagavad Gita", reason: "Warrior who needed reminding of his true nature" },
    ],
    closingThought: "The ocean is wide. Your devotion is wider.",
  },
  "yudhishthira-truth": {
    context:
      "Yudhishthira, eldest of the Pandavas, lost his kingdom, his brothers, and his wife Draupadi in a rigged game of dice. He endured thirteen years of exile — in forests and in disguise — while the Kauravas ruled.",
    whyItMatters:
      "When every shortcut is available — a lie that would end the pain, a compromise that would restore comfort — Yudhishthira is the king who refused.",
    reflection:
      "When the war ended and he stood at heaven's gate, he would not enter without the dog that followed him — Dharma itself in disguise. Integrity is not what you proclaim. It's what you refuse to trade away, even when no one is watching.",
    similarStories: [
      { character: "Rama", source: "Ramayana", reason: "Chose dharma over crown and comfort" },
      { character: "Karna", source: "Mahabharata", reason: "Kept his word when the world offered easier paths" },
    ],
    closingThought: "Truth alone triumphs. Not quickly. But always.",
  },
  "bhishma-vow": {
    context:
      "Devavrata was a prince who gave up the throne, marriage, and children so his father Shantanu could marry Satyavati. The gods named him Bhishma — the terrible one — for the weight of that vow. He kept it for a lifetime.",
    whyItMatters:
      "When a promise you made — to family, to work, to an identity — has become a prison, Bhishma asks: which vows are worth the life they cost?",
    reflection:
      "He fought on the wrong side of the Kurukshetra war because his vow bound him to the throne, not to justice. Noble sacrifice can become a cage if you never allow yourself to change. Keep your word — but know which promises serve your soul and which break it.",
    similarStories: [
      { character: "Karna", source: "Mahabharata", reason: "Loyalty that outlasted wisdom" },
      { character: "Arjuna", source: "Bhagavad Gita", reason: "Duty that demanded questioning, not blind obedience" },
    ],
    closingThought: "A vow spoken in truth binds the soul. Choose them carefully.",
  },
  "ekalavya-mastery": {
    context:
      "Ekalavya was a tribal boy rejected by the great guru Dronacharya because of his caste. He built a clay statue of his teacher and practiced alone in the forest until he surpassed Arjuna — the greatest archer of the age.",
    whyItMatters:
      "When doors close on you — rejected, overlooked, told you're not enough — Ekalavya is the boy who became master without permission.",
    reflection:
      "When Drona saw Ekalavya's skill, he demanded guru dakshina — payment. Ekalavya cut off his own right thumb without hesitation. The world calls it injustice. He called it dharma. Mastery demands sacrifice. The question is whether the price serves your soul or breaks it.",
    similarStories: [
      { character: "Van Gogh", source: "History", reason: "Mastered craft without recognition" },
      { character: "Rocky Balboa", source: "Rocky", reason: "Nobody who proved he belonged" },
    ],
    closingThought: "They can take the thumb. Not what you became.",
  },
  "savitri-death": {
    context:
      "Savitri chose her own husband Satyavan knowing the sage Narada had foretold he would die in one year. When Yama, the god of death, came for his soul, Savitri followed — walking behind them with unwavering devotion.",
    whyItMatters:
      "When love demands you stand in front of loss — illness, grief, the end of something precious — Savitri is the woman who argued with death itself.",
    reflection:
      "She spoke with such wisdom that Yama offered boons. She chose her father-in-law's sight, her husband's kingdom, and finally — his life. Love did not defeat death through force. It defeated death through unwavering presence. Some things are worth standing in front of death for.",
    similarStories: [
      { character: "Joel Miller", source: "The Last of Us", reason: "Chose one person over the world's demands" },
      { character: "Sita", source: "Ramayana", reason: "Refused surrender even in captivity" },
    ],
    closingThought: "Love does not always win. But it always shows up.",
  },
  "krishna-karma": {
    context:
      "On the battlefield of Kurukshetra, Arjuna collapsed. Krishna — his charioteer, his friend, the divine — did not command him to fight. He spoke. For eighteen chapters, he explained the nature of action, duty, and the soul.",
    whyItMatters:
      "When you're paralyzed between choices — afraid of failure, afraid of success, afraid of what people will think — Krishna's teaching is the oldest answer to modern anxiety.",
    reflection:
      "Do your duty. Act fully. But release your grip on the outcome — praise, blame, victory, defeat. The warrior who acts without clinging is free even on the battlefield. This isn't indifference. It's the deepest engagement, performed without the ego that makes every loss unbearable.",
    similarStories: [
      { character: "Marcus Aurelius", source: "Meditations", reason: "Control the mind, release what you cannot control" },
      { character: "Arjuna", source: "Bhagavad Gita", reason: "The student who needed this teaching most" },
    ],
    closingThought: "Act with everything. Hold the result with open hands.",
  },
  "shiva-destruction": {
    context:
      "In Hindu cosmology, Shiva is the destroyer — but destruction is not evil. It is the necessary end of what has outlived its purpose. He dances the Tandava in cremation grounds, surrounded by ashes, because he understands what the living forget.",
    whyItMatters:
      "When your old life dies — the job, the relationship, the identity, the certainty — it feels like punishment. Shiva says: it might be clearing.",
    reflection:
      "Every ending opens a new cycle. When everything falls apart, something in you is being made room for what comes next. Shiva is not punishing you. He is the god who dances in the fire because he knows what rises from ash.",
    similarStories: [
      { character: "Siddhartha", source: "Siddhartha", reason: "Let every old self die to find truth" },
      { character: "Frodo Baggins", source: "Lord of the Rings", reason: "Old life could not contain who he became" },
    ],
    closingThought: "What falls apart is making room. Dance in the fire.",
  },
};

export function getChapterEnrichment(id: string): DailyChapterEnrichment | undefined {
  return dailyChapterEnrichment[id];
}
