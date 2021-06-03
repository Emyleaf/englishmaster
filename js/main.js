if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered!");
        console.log(registration);
    }).catch(error => {
        console.log("SW Registration Failed!");
        console.log(error);
    })
}

const parole = ["Agnello", "Alligatore", "Anatra", "Aquila", "Aragosta", "Asino", "Balena", "Cane", "Capra", "Cavallo", "Cervo", "Cinghiale", "Coccodrillo",
    "Coniglio", "Corvo", "Criceto", "Delfino", "Elefante", "Falco", "Gabbiano", "Gatto", "Gattino", "Gazzella", "Ghepardo", "Giraffa", "Granchio", "Gufo", "Ippopotamo",
    "Leone", "Lucertola", "Lupo", "Maiale", "Mucca", "Medusa", "Oca", "Orso", "Pantera", "Pappagallo", "Pecora", "Pesce", "Piccione", "Pitone", "Pollo", "Rana",
    "Rondine", "Rospo", "Scoiattolo", "Scimmia", "Serpente", "Squalo", "Tacchino", "Tartaruga", "Tasso", "Tigre", "Tonno", "Topo", "Toro", "Volpe",

    "Testa", "Capelli", "Naso", "Sopracciglio", "Occhio", "Orecchio", "Labbra", "Bocca", "Denti", "Faccia", "Collo", "Lingua", "Gola", "Guancia", "Mento",
    "Spalla", "Petto", "Schiena", "Cuore", "Braccio", "Polso", "Stomaco", "Pancia", "Unghia", "Ginocchio", "Gamba", "Mano", "Piede", "Caviglia", "Dita dei piedi",
    "Corpo", "Coscia", "Fianco", "Gomito", "Pollice", "Vita", "Pelle", "Osso", "Muscolo", "Ascella", "Tallone",

    "Casa", "Soggiorno", "Sala da pranzo", "Cucina", "Bagno", "Stanza da letto", "Sgabuzzino", "Giardino", "Divano", "Poltrona", "Armadio", "Tavolo", "Sedia",
    "Porta", "Finestra", "Ingresso", "Scale", "Frigo", "Lavello", "Letto", "Doccia", "Vasca da bagno", "Camino", "Tappeto", "Lampadario", "Lavatrice",
    "Scrivania", "Forno", "Lavastoviglie", "Condizionatore", "Termosifone", "Tetto", "Pavimento", "Balcone", "Campanello",

    "Maglietta", "Abito", "Costume da bagno", "Mutande", "Calzini", "Vestito", "Gonna", "Pigiama", "Giacca", "Cappotto", "Impermeabile", "Pantaloni", "Pantaloncini",
    "Scarpe", "Stivali", "Sciarpa", "Cintura", "Cappello", "Cravatta", "Guanto", "Maglione", "Felpa", "Felpa cappuccio", "Collana", "Borsa", "Orologio", "Portafoglio",
    "Chiavi", "Orecchini", "Trucco", "Rossetto", "Braccialetto",

    "Bianco", "Nero", "Verde", "Giallo", "Arancione", "Blu", "Rosa", "Marrone", "Porpora", "Rosso", "Oro", "Grigio", "Argento", "Viola", "Azzurro",

    "Mela", "Arancia", "Banana", "Ananas", "Pera", "Pesca (Frutto)", "Melone", "Ciliegia", "Anguria", "Cocco", "Lampone", "Fragola", "Limone", "Uva", "Carota", "Patata",
    "Pomodoro", "Cipolla", "Aglio", "Zucca", "Mais", "Insalata", "Peperoncino", "Latte", "Uova", "Pane", "Burro", "Succo d'arancia", "Panna", "Formaggio",
    "Gelato", "Biscotto", "Cereale", "Acqua", "Vino", "Zuppa", "Olio", "Riso", "Sale", "Zucchero", "Cocacola", "Tè", "Caffè", "Pancetta", "Bistecca", "Polpette di carne",
    "Prosciutto", "Carne di maiale", "Piovra", "Pescespada", "Salmone",

    "Famiglia", "Genitori", "Padre", "Papà", "Madre", "Mamma", "Nonni", "Nonno", "Nonna", "Figlio", "Figlia", "Fratello", "Sorella", "Gemello", "Marito", "Moglie",
    "Cugino/a", "Zio", "Zia",

    "Attore", "Attrice", "Artista", "Panettiere", "Barista", "Costruttore", "Macellaio", "Capocuoco", "Chimico", "Cuoco", "Ballerino/a", "Dentista", "Direttore",
    "Medico", "Elettricista", "Ingegnere", "Contadino", "Pompiere", "Assistente di volo", "Fioraio", "Giardiniere", "Parrucchiere", "Giornalista", "Giudice",
    "Avvocato", "Bibliotecario", "Infermiera", "Pittore", "Fotografo", "Fisioterapista", "Idraulico", "Poliziotto", "Politico", "Postino", "Pensionato",
    "Marinaio", "Scienziato", "Segretario", "Commesso", "Cantante", "Insegnante", "Veterinario", "Cameriere", "Cameriera", "Scrittore",

    "Aerobica", "Tiro con l'arco", "Atletica", "Pallacanestro", "Arrampicata", "Ciclismo", "Freccette", "Tuffi", "Pesca (Sport)", "Calcio", "Escursionismo", "Equitazione",
    "Caccia", "Arti marziali", "Corsa", "Sci", "Nuoto", "Pallavolo", "Sollevamento pesi", "Palla", "Mazza da baseball", "Canna da pesca", "Scarpe da corsa", "Palestra",
    "Piscina", "Sconfitta", "Vittoria", "Pareggio", "Vincitore", "Perdente", "Lega", "Classifica", "Arbitro", "Punteggio",

    "Nuvole", "Luce del sole", "Mare", "Cielo", "Tempesta", "Pioggia", "Vento", "Lampo fulmine", "Brezza leggera", "Grandine", "Fiocchi di neve", "Tuono",
    "Neve", "Nuvoloso", "Nebbioso", "Soleggiato", "Ventoso", "Tempestoso", "Giorno", "Notte", "Mezzogiorno", "Mezzanotte", "Mese", "Anno", "Ora", "Minuto",
    "Alba", "Tramonto", "Crepuscolo", "Oggi", "Ieri", "Domani", "Mattina", "Pomeriggio", "Sera", "Estate", "Inverno", "Autunno", "Primavera",

    "Io", "Tu/Voi", "Lui", "Lei", "Esso/a", "Noi", "Essi", "Mio", "Tuo/Vostro", "Di lui", "Di lei", "Di esso/a", "Nostro", "Di loro",

    "Alto", "Grasso", "Altezza", "Sovrappeso", "Basso", "Snello", "Bell'aspetto", "Figo", "Carina", "Brutto", "Vecchio", "Giovane",
    "Ricci (capelli)", "Lisci (capelli)", "Mossi (capelli)", "Ambizioso", "Noioso", "Coraggioso", "Calmo", "Prudente", "Fiducioso", "Creativo", "Deciso",
    "Determinato", "Stupido", "Amichevole", "Gentile", "Onesto", "Introverso", "Geloso", "Generoso", "Pigro", "Leale", "Pazzo", "Nervoso", "Educato", "Affidabile",
    "Responsabile", "Maleducato", "Egoista", "Serio", "Timido", "Intelligente", "Riflessivo",

    "Aeroporto", "Galleria d'arte", "Banca", "Fermata dell'autobus", "Pasticceria", "Campeggio", "Chiesa", "Caserma pompieri", "Casa vacanze", "Ospedale",
    "Biblioteca", "Museo", "Ufficio postale", "Ristorante", "Scuola", "Grattacielo", "Centro commerciale", "Teatro", "Municipio", "Stazione ferroviaria",
    "Università", "Salone di bellezza", "Negozio di vestiti", "Gioielleria", "Supermercato",

    "Aereo", "Ambulanza", "Bicicletta", "Barca", "Autobus", "Auto", "Carrozza", "Nave da crociera", "Traghetto", "Elicottero", "Moto", "Motoscafo", "Zattera",
    "Barca a vela", "Nave", "Navicella spaziale", "Sottomarino", "Carro armato", "Treno", "Metropolitana", "Furgone",

    "Essere", "Diventare", "Cominciare", "Scommettere", "Rompere", "Portare", "Costruire", "Comprare", "Potere", "Catturare", "Scegliere", "Venire", "Tagliare",
    "Fare", "Guidare", "Bere", "Mangiare", "Cadere", "Nutrire", "Sentire (sentimento)", "Combattere", "Volare", "Dimenticare", "Perdonare", "Congelare", "Prendere",
    "Dare", "Andare", "Crescere", "Avere", "Sentire", "Nascondere", "Colpire", "Tenere", "Ferire", "Conservare", "Conoscere", "Distendere", "Condurre", "Imparare",
    "Lasciare", "Mentire", "Intendere", "Incontrare", "Fraintendere", "Pagare", "Mettere", "Uscire/Smettere", "Leggere", "Cavalcare", "Suonare",
    "Salire/aumentare", "Correre", "Dire", "Vedere", "Cercare", "Vendere", "Spedire", "Mettere/Collocare", "Agitare", "Sparare", "Cantare", "Sedersi", "Dormire", "Uccidere",
    "Scorrere", "Odorare", "Parlare", "Spendere", "Dividere", "Diffondere", "Alzarsi/Stare sul posto", "Rubare", "Appiccicare", "Puzzare", "Nuotare", "Insegnare", "Raccontare",
    "Pensare", "Lanciare", "Svegliarsi", "Vestire", "Scrivere", //551

    "Felice", "Felicità", "Impaurito", "Paura", "Arrabbiato", "Rabbia", "Infastidito", "Ansioso", "Ansia", "Apatico", "Apatia", "Vergognoso", "Vergogna",
    "Annoiato", "Noia", "Curioso", "Curiosità", "Depresso", "Depressione", "Deluso", "Delusione", "Imbarazzato", "Imbarazzo", "Colpevole", "Odiato", "Odio",
    "Speranzoso", "Speranza", "Solitario", "Solitudine", "Amato", "Orgoglioso", "Triste", "Tristezza", "Sorpreso", "Stanco", "Preoccupato",

    "E", "O", "Ma", "Così/Quindi", "Nemmeno/Neppure", "Dopo", "Anche se", "Come", "Come se", "Fintantoché", "Tanto quanto", "Appena", "Perché", "Prima",
    "Se", "Di/Di quanto", "Che", "Finché", "A meno che", "Quando", "Dove", "Mentre/Finché", "Chi", "Altrimenti", "Invece",

    "Strisce pedonali", "Semaforo", "All'incrocio", "Rotatoria", "Metropolitana", "Ponte", "Vai a dritto", "Gira a sinistra", "Gira a destra", "Torna indietro",
    "Prosegui oltre", "Attraversa il ponte", "Prendi la seconda strada a destra", "Prendi la prima strada a sinistra", "Prendi la terza strada a destra",
    "Continua su questa strada", "Scendi alla stazione di Livorno", "Percorri la via", "Di fianco a", "Dietro all'angolo", "Davanti a", "Tra"

]

const traduzione = [
    //animali
    "Lamb", "Alligator", "Duck", "Eagle", "Lobster", "Donkey", "Whale", "Dog", "Goat", "Horse", "Deer", "Boar", "Crocodile", "Rabbit", "Raven", "Hamster",
    "Dolphin", "Elephant", "Hawk", "Seagull", "Cat", "Kitten", "Gazelle", "Cheetah", "Giraffe", "Crab", "Owl", "Hippopotamus", "Lion", "Lizard", "Wolf",
    "Pig", "Cow", "Jellyfish", "Goose", "Bear", "Panther", "Parrot", "Sheep", "Fish", "Pigeon", "Python", "Chicken", "Frog", "Swallow", "Toad", "Squirrel", "Monkey",
    "Snake", "Shark", "Turkey", "Turtle", "Badger", "Tiger", "Tuna", "Mouse", "Bull", "Fox",

    //parti del corpo
    "Head", "Hair", "Nose", "Eyebrow", "Eye", "Ear", "Lips", "Mouth", "Teeth", "Face", "Neck", "Tongue", "Throat", "Cheek", "Chin", "Shoulder", "Chest", "Back",
    "Heart", "Arm", "Wrist", "Stomach", "Belly", "Nail", "Knee", "Leg", "Hand", "Foot", "Ankle", "Toes", "Body", "Thigh", "Hip", "Elbow", "Thumb", "Waist",
    "Skin", "Bone", "Muscle", "Armpit", "Heel",

    //mobili e stanze casa
    "House/home", "Living room", "Dining room", "Kitchen", "Bathroom", "Bedroom", "Storage room", "Garden", "Sofa", "Armchair", "Wardrobe", "Table", "Chair",
    "Door", "Window", "Hall", "Stairs", "Fridge", "Sink", "Bed", "Shower", "Bath", "Chimney", "Carpet", "Chandelier", "Washing machine", "Desk", "Oven",
    "Dishwasher", "Air conditioner", "Radiator", "Roof", "Floor", "Balcony", "Doorbell",

    //vestiario e accessori
    "T-shirt", "Suit", "Swimsuit", "Underwear", "Socks", "Dress", "Skirt", "Pajamas", "Jacket", "Coat", "Raincoat", "Trousers", "Shorts", "Shoes", "Boots",
    "Scarf", "Belt", "Hat", "Tie", "Glove", "Jumper", "Sweatshirt", "Hoodie", "Necklace", "Bag", "Watch", "Wallet", "Keys", "Earrings", "Makeup", "Lipstick",
    "Bracelet",

    //colori
    "White", "Black", "Green", "Yellow", "Orange", "Blue", "Pink", "Brown", "Purple", "Red", "Gold", "Grey", "Silver", "Violet", "Azure",

    //alimenti
    "Apple", "Orange (Frutto)", "Banana", "Pineapple", "Pear", "Peach", "Melon", "Cherry", "Watermelon", "Coconut", "Raspberry", "Strawberry", "Lemon", "Grape",
    "Carrot", "Potato", "Tomato", "Onion", "Garlic", "Pumpkin", "Corn", "Salad", "Chili", "Milk", "Egg", "Bread", "Butter", "Orange juice", "Cream", "Cheese",
    "Ice cream", "Cookie", "Cereal", "Water", "Wine", "Soup", "Oil", "Rice", "Salt", "Sugar", "Coke", "Tea", "Coffee", "Bacon", "Steak", "Meatballs", "Ham",
    "Pork", "Octopus", "Swordfish", "Salmon",

    //famiglia
    "Family", "Parents", "Father", "Dad", "Mother", "Mom", "Grandparents", "Grandfather", "Grandmother", "Son", "Daughter", "Brother", "Sister", "Twin", "Husband",
    "Wife", "Cousin", "Uncle", "Aunt", //250

    //professioni
    "Actor", "Actress", "Artist", "Baker", "Barman", "Builder", "Butcher", "Chef", "Chemist", "Cook", "Dancer", "Dentist", "Director", "Doctor", "Electrician",
    "Engineer", "Farmer", "Firefighter", "Flight attendant", "Florist", "Gardener", "Hairdresser", "Journalist", "Judge", "Lawyer", "Librarian", "Nurse",
    "Painter", "Photographer", "Physiotherapist", "Plumber", "Policeman", "Politician", "Postman", "Retired", "Sailor", "Scientist", "Secretary", "Shop assistant",
    "Singer", "Teacher", "Vet", "Waiter", "Waitress", "Writer", //295

    //sports
    "Aerobics", "Archery", "Athletics", "Basketball", "Climbing", "Cycling", "Darts", "Diving", "Fishing", "Football/Soccer", "Hiking", "Horse-riding", "Hunting",
    "Martial arts", "Running", "Skiing", "Swimming", "Volleyball", "Weightlifting", "Ball", "Baseball bat", "Fishing rod", "Running shoes", "Gym", "Swimming pool",
    "Defeat/Loss", "Victory", "Draw", "Winner", "Loser", "League", "Placement", "Referee", "Score",

    //weather and time
    "Clouds", "Sunshine", "Sea", "Sky", "Storm", "Rain", "Wind", "Lightning", "Gentle breeze", "Hail", "Snowflakes", "Thunder", "Snow", "Cloudy", "Foggy",
    "Sunny", "Windy", "Stormy", "Day", "Night", "Highnoon", "Midnight", "Month", "Year", "Hour", "Minute", "Sunrise/Dawn", "Sunset", "Dusk/Nightfall",
    "Today", "Yesterday", "Tomorrow", "Morning", "Afternoon", "Evening", "Summer", "Winter", "Autumn", "Spring", //364+4

    //pronomi
    "I", "You", "He", "She", "It", "We", "They", "My", "Your", "His", "Her", "Its", "Our", "Their", //378+4

    //aggettivi
    "Tall", "Fat", "Height", "Overweight", "Short", "Slim", "Goodlooking", "Handsome", "Pretty", "Ugly", "Old", "Young", "Curly", "Straight", "Wavy", "Ambitious",
    "Boring", "Brave", "Calm", "Cautious", "Confident", "Creative", "Decisive", "Determined", "Dumb", "Friendly", "Gentle", "Honest", "Introverted", "Jealous",
    "Kind", "Lazy", "Loyal", "Crazy/Mad", "Nervous", "Polite", "Reliable", "Responsible", "Rude", "Selfish", "Serious", "Shy", "Smart", "Thoughtful", //422

    //city
    "Airport", "Art gallery", "Bank", "Bus stop", "Cake shop", "Camping", "Church", "Fire station", "Holiday home", "Hospital", "Library", "Museum",
    "Post office", "Restaurant", "School", "Skyscraper", "Shopping centre", "Theatre", "Town hall", "Train station", "University", "Beauty salon",
    "Clothes shop", "Jewelry store", "Supermarket", //447

    //vehicles
    "Airplane", "Ambulance", "Bicycle", "Boat", "Bus", "Car", "Carriage", "Cruise ship", "Ferry boat", "Helicopter", "Motorcycle", "Motorboat", "Raft",
    "Sailing boat", "Ship", "Spaceship", "Submarine", "Tank", "Train", "Underground", "Van", //468

    //verbs
    "Be", "Become", "Begin", "Bet", "Break", "Bring", "Build", "Buy", "Can", "Catch", "Choose", "Come", "Cut", "Do/Make", "Drive", "Drink", "Eat", "Fall", "Feed",
    "Feel", "Fight", "Fly", "Forget", "Forgive", "Freeze", "Take/Get", "Give", "Go", "Grow", "Have", "Hear", "Hide", "Hit", "Hold", "Hurt", "Keep", "Know", "Lay", "Lead",
    "Learn", "Leave/Let", "Lie", "Mean", "Meet", "Misunderstand", "Pay", "Put", "Quit", "Read", "Ride", "Ring", "Rise", "Run", "Say", "See", "Seek/Look for", "Sell", "Send",
    "Set", "Shake", "Shoot", "Sing", "Sit", "Sleep", "Slay", "Slide", "Smell", "Speak", "Spend", "Split", "Spread", "Stand", "Steal", "Stick", "Stink", "Swim",
    "Teach", "Tell", "Think", "Throw", "Wake", "Wear", "Write", //551

    //emotions
    "Happy", "Happiness", "Afraid", "Fear", "Angry", "Anger", "Annoyed", "Anxious", "Anxiety", "Apathetic", "Apathy", "Ashamed", "Shame", "Bored", "Boredom",
    "Curious", "Curiosity", "Depressed", "Depression", "Disappointed", "Disappointment", "Embarrassed", "Embarrassment", "Guilty", "Hated", "Hate", "Hopeful",
    "Hope", "Lonely", "Loneliness", "Loved", "Proud", "Sad", "Sadness", "Surprised", "Tired", "Worried", //588

    //conju
    "And", "Or", "But", "So", "Neither", "After", "Although", "As", "As if", "As long as", "As much as", "As soon as", "Because", "Before",
    "If", "Than", "That (congiunz.)", "Till/Until", "Unless", "When", "Where", "While", "Who", "Else", "Instead", //611

    //directions
    "Crosswalk", "Traffic light", "At the crossroad", "Roundabout", "Underground", "Bridge", "Go straight", "Turn left", "Turn right", "Turn around",
    "Go past", "Go across the bridge", "Take the second street on the right", "Take the first street on the left", "Take the third street on the right",
    "Continue on this road", "Get off at Leghorn station", "Go along the street", "Next to", "Round the corner", "In front of", "Between"

]

/*const indici = [
    0,
    57, //animali
    58,
    98, //parti del corpo
    99,
    133, //mobili e stanze casa
    134,
    165, //vestiario e accessori
    166,
    180, //colori
    181,
    231, //alimenti
    232,
    250, //family
    251,
    295, //jobs
    296,
    329, //sports
    330,
    364, //weather and time
    365,
    378, // pronomi
    379,
    422, //aggettivi
    423,
    447, //city
    448,
    468, //vehicles
    469,
    551, //verbs
    552,
    588, //emotions
    589,
    611, //conju
    612,
    633 //directions

]*/

let categoria_scelta;
let inizio_categoria;
let fine_categoria;
let numero_categorie = 18;
let sprite_robin = "./img/robin_sprite.png";
let sprite_takumi = "./img/takumi_sprite.png";
let sprite_tiki = "./img/tiki_sprite.png";
let sprite_roy = "./img/roy_sprite.png";
let sprite_selezionato = sprite_robin;
let vittoria_robin = "./mp4/victory_robin.mp4";
let vittoria_takumi = "./mp4/victory_takumi.mp4";
let vittoria_tiki = "./mp4/victory_tiki.mp4";
let vittoria_roy = "./mp4/victory_roy.mp4";
let vittoria_selezionata = vittoria_robin;

let goanim;
let stopanim;
//console.log(traduzione[426]);

function hide_presentazione(alloppureboss) {

    let x = document.getElementById("benvenuto");
    let y = document.getElementById("allenatioboss");
    let z = document.getElementById("allenamenti");
    let zp = document.getElementById("allenamentip");
    let k = document.getElementById("iboss");
    let kp = document.getElementById("ibossp");
    let back = document.getElementById("back");

    x.classList.add("invisibile");
    y.classList.add("invisibile");
    document.getElementById("downloadbtn").classList.add("invisibile");
    document.getElementById("changepg").classList.add("invisibile");


    if (alloppureboss == 1) {
        z.classList.remove("invisibile");
        zp.classList.remove("invisibile");
        back.classList.remove("invisibile");
    } else if (alloppureboss == 2) {
        k.classList.remove("invisibile");
        kp.classList.remove("invisibile");
        back.classList.remove("invisibile");
    } else if (alloppureboss == 4) {
        back.classList.remove("invisibile");
        document.getElementById("probar").classList.remove("invisibile");
        salutemax = 10;
        puntiferita = 0;
        document.getElementById("bar").classList.add("is-success");
        document.getElementById("bar").classList.remove("is-warning");
        document.getElementById("bar").classList.remove("is-danger");

        document.getElementById("points").classList.add("invisibile");
        document.getElementById("points").textContent = "";

        gioco('infinite', 2);
    } else {

        x.classList.remove("invisibile");
        y.classList.remove("invisibile");

        document.getElementById("downloadbtn").classList.remove("invisibile");
        document.getElementById("changepg").classList.remove("invisibile");

        z.classList.add("invisibile");
        k.classList.add("invisibile");
        zp.classList.add("invisibile");
        kp.classList.add("invisibile");

        document.getElementById("probar").classList.add("invisibile");

        document.getElementById("scenarioallenamento").classList.add("invisibile");
        document.getElementById("points").classList.add("invisibile");
        back.classList.add("invisibile");

        document.getElementById("scenarioboss").classList.remove("invisibile");
        document.getElementById("sprite").classList.remove("invisibile");
        document.getElementById("spritebossdiv").classList.add("invisibile");

        document.getElementById("spritediv").classList.remove("is-half-mobile");
        document.getElementById("spritebossdiv").classList.remove("is-half-mobile");

        document.getElementById("spritediv").classList.remove("is-4-desktop");
        document.getElementById("spritediv").classList.remove("is-offset-2-desktop");
        document.getElementById("spritebossdiv").classList.remove("is-4-desktop");

        document.getElementById("lvl").innerHTML = "";

        clearInterval(goanim);
        clearInterval(stopanim);
        document.getElementById("spriteboss").classList.remove("anim");
        goanim = 0;
        stopanim = 0;
    }

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function gioco(categoria, bossornot) {

    if (categoria == "animals") {
        inizio_categoria = 0;
        fine_categoria = 57;
    } else if (categoria == "body") {
        inizio_categoria = 58;
        fine_categoria = 98;
    } else if (categoria == "house") {
        inizio_categoria = 99;
        fine_categoria = 133;
    } else if (categoria == "clothes") {
        inizio_categoria = 134;
        fine_categoria = 165;
    } else if (categoria == "colors") {
        inizio_categoria = 166;
        fine_categoria = 180;
    } else if (categoria == "foods") {
        inizio_categoria = 181;
        fine_categoria = 231;
    } else if (categoria == "family") {
        inizio_categoria = 232;
        fine_categoria = 250;
    } else if (categoria == "jobs") {
        inizio_categoria = 251;
        fine_categoria = 295;
    } else if (categoria == "sports") {
        inizio_categoria = 296;
        fine_categoria = 329;
    } else if (categoria == "weather") {
        inizio_categoria = 330;
        fine_categoria = 368;
    } else if (categoria == "prono") {
        inizio_categoria = 369;
        fine_categoria = 382;
    } else if (categoria == "adjecti") {
        inizio_categoria = 383;
        fine_categoria = 426;
    } else if (categoria == "city") {
        inizio_categoria = 427;
        fine_categoria = 451;
    } else if (categoria == "vehicles") {
        inizio_categoria = 452;
        fine_categoria = 472;
    } else if (categoria == "verbs") {
        inizio_categoria = 473;
        fine_categoria = 555;
    } else if (categoria == "emotions") {
        inizio_categoria = 556;
        fine_categoria = 592;
    } else if (categoria == "conju") {
        inizio_categoria = 593;
        fine_categoria = 617;
    } else if (categoria == "directions") {
        inizio_categoria = 618;
        fine_categoria = 639;
    }

    categoria_scelta = categoria;

    document.getElementById("scenarioallenamento").classList.remove("invisibile");
    document.getElementById("allenamenti").classList.add("invisibile");
    document.getElementById("allenamentip").classList.add("invisibile");
    document.getElementById("iboss").classList.add("invisibile");
    document.getElementById("ibossp").classList.add("invisibile");

    if (bossornot == 0) {
        giocoinloop();
    } else if (bossornot == 1) {
        counterp = 0;

        if (categoria == "facile") {
            counterpmax = 10;
        } else if (categoria == "facile+") {
            counterpmax = 20;
        } else if (categoria == "facile++") {
            counterpmax = 30;
        } else if (categoria == "intermedio") {
            counterpmax = 40;
        } else if (categoria == "intermedio+") {
            counterpmax = 60;
        } else if (categoria == "intermedio++") {
            counterpmax = 80;
        } else if (categoria == "difficile") {
            counterpmax = 100;
        } else if (categoria == "difficile+") {
            counterpmax = 125;
        } else if (categoria == "impossibile") {
            counterpmax = 150;
        }

        giocoinloopboss(categoria);
        document.getElementById("spritediv").classList.add("is-half-mobile");
        document.getElementById("spritediv").classList.add("is-4-desktop");
        document.getElementById("spritediv").classList.add("is-offset-2-desktop");
        document.getElementById("spritebossdiv").classList.add("is-half-mobile");
        document.getElementById("spritebossdiv").classList.add("is-4-desktop");
        document.getElementById("points").classList.remove("invisibile");
        document.getElementById("spritebossdiv").classList.remove("invisibile");

        goanim = setInterval(starta, 4000);
        stopanim = setInterval(stopa, 8000);

    } else {

        counterp = 0;
        counterpmax = 500;

        giocoinlooptorre();
        document.getElementById("spritediv").classList.add("is-half-mobile");
        document.getElementById("spritediv").classList.add("is-4-desktop");
        document.getElementById("spritediv").classList.add("is-offset-2-desktop");
        document.getElementById("spritebossdiv").classList.add("is-half-mobile");
        document.getElementById("spritebossdiv").classList.add("is-4-desktop");
        document.getElementById("points").classList.add("invisibile");
        document.getElementById("spritebossdiv").classList.remove("invisibile");

        goanim = setInterval(starta, 4000);
        stopanim = setInterval(stopa, 8000);
    }

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function giocoinloop() {

    let sce1 = document.getElementById("scelta1");
    let sce2 = document.getElementById("scelta2");

    document.getElementById("sprite").src = sprite_selezionato;
    sce1.classList.remove("is-success");
    sce2.classList.remove("is-success");
    sce1.classList.remove("is-danger");
    sce2.classList.remove("is-danger");

    let n_random = Math.floor(Math.random() * (fine_categoria + 1 - inizio_categoria)) + inizio_categoria;

    document.getElementById("titletraduzione").innerHTML = "Qual è la traduzione di " + traduzione[n_random] + "?";

    let dplasceltacor = Math.floor(Math.random() * 2) + 1;
    let sceltasbagliata = Math.floor(Math.random() * (fine_categoria + 1 - inizio_categoria)) + inizio_categoria;

    while (n_random == sceltasbagliata) {
        sceltasbagliata = Math.floor(Math.random() * (fine_categoria + 1 - inizio_categoria)) + inizio_categoria;
    }

    if (dplasceltacor == 1) {
        sce1.innerHTML = parole[n_random];
        sce2.innerHTML = parole[sceltasbagliata];
        sce1.setAttribute("onclick", "winorlose(1, 'scelta1')");
        sce2.setAttribute("onclick", "winorlose(2, 'scelta2')");

    } else {
        sce1.innerHTML = parole[sceltasbagliata];
        sce2.innerHTML = parole[n_random];
        sce1.setAttribute("onclick", "winorlose(2, 'scelta1')");
        sce2.setAttribute("onclick", "winorlose(1, 'scelta2')");
    }
}

let counterpmax;
let counterp;

function giocoinloopboss(cat) {

    let sce1 = document.getElementById("scelta1");
    let sce2 = document.getElementById("scelta2");

    if (cat == "facile") {
        document.getElementById("spriteboss").src = "./img/slime.png";
    } else if (cat == "facile+") {
        document.getElementById("spriteboss").src = "./img/vampistrello.png";
    } else if (cat == "facile++") {
        document.getElementById("spriteboss").src = "./img/mimic.png";
    } else if (cat == "intermedio") {
        document.getElementById("spriteboss").src = "./img/jargon.png";
    } else if (cat == "intermedio+") {
        document.getElementById("spriteboss").src = "./img/golembronze.png";
    } else if (cat == "intermedio++") {
        document.getElementById("spriteboss").src = "./img/gigante.png";
    } else if (cat == "difficile") {
        document.getElementById("spriteboss").src = "./img/kingslime.png";
    } else if (cat == "difficile+") {
        document.getElementById("spriteboss").src = "./img/blackdragon.png";
    } else if (cat == "impossibile") {
        document.getElementById("spriteboss").src = "./img/diodeltuono.png";
    }

    sce1.classList.remove("is-success");
    sce2.classList.remove("is-success");
    sce1.classList.remove("is-danger");
    sce2.classList.remove("is-danger");

    document.getElementById("sprite").src = sprite_selezionato;
    document.getElementById("points").innerHTML = counterp + "/" + counterpmax;

    let n_categoria = Math.floor(Math.random() * numero_categorie);

    if (n_categoria == 0) {
        inizio_categoria = 0;
        fine_categoria = 57;
    } else if (n_categoria == 1) {
        inizio_categoria = 58;
        fine_categoria = 98;
    } else if (n_categoria == 2) {
        inizio_categoria = 99;
        fine_categoria = 133;
    } else if (n_categoria == 3) {
        inizio_categoria = 134;
        fine_categoria = 165;
    } else if (n_categoria == 4) {
        inizio_categoria = 166;
        fine_categoria = 180;
    } else if (n_categoria == 5) {
        inizio_categoria = 181;
        fine_categoria = 231;
    } else if (n_categoria == 6) {
        inizio_categoria = 232;
        fine_categoria = 250;
    } else if (n_categoria == 7) {
        inizio_categoria = 251;
        fine_categoria = 295;
    } else if (n_categoria == 8) {
        inizio_categoria = 296;
        fine_categoria = 329;
    } else if (n_categoria == 9) {
        inizio_categoria = 330;
        fine_categoria = 368;
    } else if (n_categoria == 10) {
        inizio_categoria = 369;
        fine_categoria = 382;
    } else if (n_categoria == 11) {
        inizio_categoria = 383;
        fine_categoria = 426;
    } else if (n_categoria == 12) {
        inizio_categoria = 427;
        fine_categoria = 451;
    } else if (n_categoria == 13) {
        inizio_categoria = 452;
        fine_categoria = 472;
    } else if (n_categoria == 14) {
        inizio_categoria = 473;
        fine_categoria = 555;
    } else if (n_categoria == 15) {
        inizio_categoria = 556;
        fine_categoria = 592;
    } else if (n_categoria == 16) {
        inizio_categoria = 593;
        fine_categoria = 617;
    } else if (n_categoria == 17) {
        inizio_categoria = 618;
        fine_categoria = 639;
    }

    let n_random = Math.floor(Math.random() * (fine_categoria + 1 - inizio_categoria)) + inizio_categoria;

    document.getElementById("titletraduzione").innerHTML = "Qual è la traduzione di " + traduzione[n_random] + "?";

    let dplasceltacor = Math.floor(Math.random() * 2) + 1;
    let sceltasbagliata = Math.floor(Math.random() * (fine_categoria + 1 - inizio_categoria)) + inizio_categoria;

    while (n_random == sceltasbagliata) {
        sceltasbagliata = Math.floor(Math.random() * (fine_categoria + 1 - inizio_categoria)) + inizio_categoria;
    }

    if (dplasceltacor == 1) {
        sce1.innerHTML = parole[n_random];
        sce2.innerHTML = parole[sceltasbagliata];
        sce1.setAttribute("onclick", "winorloseboss(1, 'scelta1')");
        sce2.setAttribute("onclick", "winorloseboss(2, 'scelta2')");

    } else {
        sce1.innerHTML = parole[sceltasbagliata];
        sce2.innerHTML = parole[n_random];
        sce1.setAttribute("onclick", "winorloseboss(2, 'scelta1')");
        sce2.setAttribute("onclick", "winorloseboss(1, 'scelta2')");
    }
}

let salutemax = 10;
let puntiferita = 0;

function giocoinlooptorre() {

    let sce1 = document.getElementById("scelta1");
    let sce2 = document.getElementById("scelta2");
    let barrasalute = document.getElementById("bar");

    if (counterp <= 10) {
        document.getElementById("spriteboss").src = "./img/1porcino.png";
        document.getElementById("lvl").innerHTML = "Lv. 1";
        if (counterp == 10) {
            puntiferita = 0;
            salutemax = 10;
            barrasalute.max = salutemax;
            barrasalute.value = salutemax;
            document.getElementById("spriteboss").src = "./img/2budino.png";
            document.getElementById("lvl").innerHTML = "Lv. 2";

            document.getElementById("bar").classList.add("is-success");
            document.getElementById("bar").classList.remove("is-danger");
        } else {

            barrasalute.max = salutemax;
            barrasalute.value = salutemax - puntiferita;
            if (((barrasalute.value) / (barrasalute.max)) * 100 < 50 && ((barrasalute.value) / (barrasalute.max)) * 100 > 25) {
                document.getElementById("bar").classList.add("is-warning");
                document.getElementById("bar").classList.remove("is-success");
            } else if (((barrasalute.value) / (barrasalute.max)) * 100 <= 25) {
                document.getElementById("bar").classList.add("is-danger");
                document.getElementById("bar").classList.remove("is-warning");
            }
        }

        puntiferita++;

    } else if (counterp <= 20 && counterp >= 11) {
        document.getElementById("spriteboss").src = "./img/2budino.png";
        document.getElementById("lvl").innerHTML = "Lv. 2";
        if (counterp == 20) {
            puntiferita = 0;
            salutemax = 10;
            barrasalute.max = salutemax;
            barrasalute.value = salutemax;
            document.getElementById("spriteboss").src = "./img/3sacco.png";
            document.getElementById("lvl").innerHTML = "Lv. 3";
            document.getElementById("bar").classList.add("is-success");
            document.getElementById("bar").classList.remove("is-danger");
        } else {

            barrasalute.max = salutemax;
            barrasalute.value = salutemax - puntiferita;
            if (((barrasalute.value) / (barrasalute.max)) * 100 < 50 && ((barrasalute.value) / (barrasalute.max)) * 100 > 25) {
                document.getElementById("bar").classList.add("is-warning");
                document.getElementById("bar").classList.remove("is-success");
            } else if (((barrasalute.value) / (barrasalute.max)) * 100 <= 25) {
                document.getElementById("bar").classList.add("is-danger");
                document.getElementById("bar").classList.remove("is-warning");
            }
        }

        puntiferita++;

    } else if (counterp <= 30 && counterp >= 21) {
        document.getElementById("spriteboss").src = "./img/3sacco.png";
        document.getElementById("lvl").innerHTML = "Lv. 3";


        if (counterp == 30) {
            puntiferita = 0;
            salutemax = 10;
            barrasalute.max = salutemax;
            barrasalute.value = salutemax;
            document.getElementById("spriteboss").src = "./img/4greendragon.png";
            document.getElementById("lvl").innerHTML = "Lv. 4";
            document.getElementById("bar").classList.add("is-success");
            document.getElementById("bar").classList.remove("is-danger");
        } else {

            barrasalute.max = salutemax;
            barrasalute.value = salutemax - puntiferita;
            if (((barrasalute.value) / (barrasalute.max)) * 100 < 50 && ((barrasalute.value) / (barrasalute.max)) * 100 > 25) {
                document.getElementById("bar").classList.add("is-warning");
                document.getElementById("bar").classList.remove("is-success");
            } else if (((barrasalute.value) / (barrasalute.max)) * 100 <= 25) {
                document.getElementById("bar").classList.add("is-danger");
                document.getElementById("bar").classList.remove("is-warning");
            }
        }

        puntiferita++;

    } else if (counterp <= 40 && counterp >= 31) {
        document.getElementById("spriteboss").src = "./img/4greendragon.png";
        document.getElementById("lvl").innerHTML = "Lv. 4";

        if (counterp == 40) {
            puntiferita = 0;
            salutemax = 20;
            barrasalute.max = salutemax;
            barrasalute.value = salutemax;
            document.getElementById("spriteboss").src = "./img/5knightslime.png";
            document.getElementById("lvl").innerHTML = "Lv. 5";
            document.getElementById("bar").classList.add("is-success");
            document.getElementById("bar").classList.remove("is-danger");
        } else {

            barrasalute.max = salutemax;
            barrasalute.value = salutemax - puntiferita;
            if (((barrasalute.value) / (barrasalute.max)) * 100 < 50 && ((barrasalute.value) / (barrasalute.max)) * 100 > 25) {
                document.getElementById("bar").classList.add("is-warning");
                document.getElementById("bar").classList.remove("is-success");
            } else if (((barrasalute.value) / (barrasalute.max)) * 100 <= 25) {
                document.getElementById("bar").classList.add("is-danger");
                document.getElementById("bar").classList.remove("is-warning");
            }
        }

        puntiferita++;

    } else if (counterp <= 60 && counterp >= 41) {
        document.getElementById("spriteboss").src = "./img/5knightslime.png";
        document.getElementById("lvl").innerHTML = "Lv. 5";

        if (counterp == 60) {
            puntiferita = 0;
            salutemax = 20;
            barrasalute.max = salutemax;
            barrasalute.value = salutemax;
            document.getElementById("spriteboss").src = "./img/6cinghorco.png";
            document.getElementById("lvl").innerHTML = "Lv. 6";
            document.getElementById("bar").classList.add("is-success");
            document.getElementById("bar").classList.remove("is-danger");
        } else {

            barrasalute.max = salutemax;
            barrasalute.value = salutemax - puntiferita;
            if (((barrasalute.value) / (barrasalute.max)) * 100 < 50 && ((barrasalute.value) / (barrasalute.max)) * 100 > 25) {
                document.getElementById("bar").classList.add("is-warning");
                document.getElementById("bar").classList.remove("is-success");
            } else if (((barrasalute.value) / (barrasalute.max)) * 100 <= 25) {
                document.getElementById("bar").classList.add("is-danger");
                document.getElementById("bar").classList.remove("is-warning");
            }
        }

        puntiferita++;

    } else if (counterp <= 80 && counterp >= 61) {
        document.getElementById("spriteboss").src = "./img/6cinghorco.png";
        document.getElementById("lvl").innerHTML = "Lv. 6";

        if (counterp == 80) {
            puntiferita = 0;
            salutemax = 20;
            barrasalute.max = salutemax;
            barrasalute.value = salutemax;
            document.getElementById("spriteboss").src = "./img/7skeled.png";
            document.getElementById("lvl").innerHTML = "Lv. 7";
            document.getElementById("bar").classList.add("is-success");
            document.getElementById("bar").classList.remove("is-danger");
        } else {

            barrasalute.max = salutemax;
            barrasalute.value = salutemax - puntiferita;
            if (((barrasalute.value) / (barrasalute.max)) * 100 < 50 && ((barrasalute.value) / (barrasalute.max)) * 100 > 25) {
                document.getElementById("bar").classList.add("is-warning");
                document.getElementById("bar").classList.remove("is-success");
            } else if (((barrasalute.value) / (barrasalute.max)) * 100 <= 25) {
                document.getElementById("bar").classList.add("is-danger");
                document.getElementById("bar").classList.remove("is-warning");
            }
        }

        puntiferita++;

    } else if (counterp <= 100 && counterp >= 81) {
        document.getElementById("spriteboss").src = "./img/7skeled.png";
        document.getElementById("lvl").innerHTML = "Lv. 7";

        if (counterp == 100) {
            puntiferita = 0;
            salutemax = 25;
            barrasalute.max = salutemax;
            barrasalute.value = salutemax;
            document.getElementById("spriteboss").src = "./img/8grif.png";
            document.getElementById("lvl").innerHTML = "Lv. 8";
            document.getElementById("bar").classList.add("is-success");
            document.getElementById("bar").classList.remove("is-danger");
        } else {

            barrasalute.max = salutemax;
            barrasalute.value = salutemax - puntiferita;
            if (((barrasalute.value) / (barrasalute.max)) * 100 < 50 && ((barrasalute.value) / (barrasalute.max)) * 100 > 25) {
                document.getElementById("bar").classList.add("is-warning");
                document.getElementById("bar").classList.remove("is-success");
            } else if (((barrasalute.value) / (barrasalute.max)) * 100 <= 25) {
                document.getElementById("bar").classList.add("is-danger");
                document.getElementById("bar").classList.remove("is-warning");
            }
        }

        puntiferita++;

    } else if (counterp <= 125 && counterp >= 101) {
        document.getElementById("spriteboss").src = "./img/8grif.png";
        document.getElementById("lvl").innerHTML = "Lv. 8";

        if (counterp == 125) {
            puntiferita = 0;
            salutemax = 25;
            barrasalute.max = salutemax;
            barrasalute.value = salutemax;
            document.getElementById("spriteboss").src = "./img/9dragslime.png";
            document.getElementById("lvl").innerHTML = "Lv. 9";
            document.getElementById("bar").classList.add("is-success");
            document.getElementById("bar").classList.remove("is-danger");
        } else {

            barrasalute.max = salutemax;
            barrasalute.value = salutemax - puntiferita;
            if (((barrasalute.value) / (barrasalute.max)) * 100 < 50 && ((barrasalute.value) / (barrasalute.max)) * 100 > 25) {
                document.getElementById("bar").classList.add("is-warning");
                document.getElementById("bar").classList.remove("is-success");
            } else if (((barrasalute.value) / (barrasalute.max)) * 100 <= 25) {
                document.getElementById("bar").classList.add("is-danger");
                document.getElementById("bar").classList.remove("is-warning");
            }
        }

        puntiferita++;

    } else if (counterp <= 150 && counterp >= 126) {
        document.getElementById("spriteboss").src = "./img/9dragslime.png";
        document.getElementById("lvl").innerHTML = "Lv. 9";

        if (counterp == 150) {
            puntiferita = 0;
            salutemax = 25;
            barrasalute.max = salutemax;
            barrasalute.value = salutemax;
            document.getElementById("spriteboss").src = "./img/10golemoro.png";
            document.getElementById("lvl").innerHTML = "Lv. 10";
            document.getElementById("bar").classList.add("is-success");
            document.getElementById("bar").classList.remove("is-danger");
        } else {

            barrasalute.max = salutemax;
            barrasalute.value = salutemax - puntiferita;
            if (((barrasalute.value) / (barrasalute.max)) * 100 < 50 && ((barrasalute.value) / (barrasalute.max)) * 100 > 25) {
                document.getElementById("bar").classList.add("is-warning");
                document.getElementById("bar").classList.remove("is-success");
            } else if (((barrasalute.value) / (barrasalute.max)) * 100 <= 25) {
                document.getElementById("bar").classList.add("is-danger");
                document.getElementById("bar").classList.remove("is-warning");
            }
        }

        puntiferita++;

    } else if (counterp <= 175 && counterp >= 151) {
        document.getElementById("spriteboss").src = "./img/10golemoro.png";
        document.getElementById("lvl").innerHTML = "Lv. 10";

        if (counterp == 175) {
            puntiferita = 0;
            salutemax = 30;
            barrasalute.max = salutemax;
            barrasalute.value = salutemax;
            document.getElementById("spriteboss").src = "./img/11slot.png";
            document.getElementById("lvl").innerHTML = "Lv. 11";
            document.getElementById("bar").classList.add("is-success");
            document.getElementById("bar").classList.remove("is-danger");
        } else {

            barrasalute.max = salutemax;
            barrasalute.value = salutemax - puntiferita;
            if (((barrasalute.value) / (barrasalute.max)) * 100 < 50 && ((barrasalute.value) / (barrasalute.max)) * 100 > 25) {
                document.getElementById("bar").classList.add("is-warning");
                document.getElementById("bar").classList.remove("is-success");
            } else if (((barrasalute.value) / (barrasalute.max)) * 100 <= 25) {
                document.getElementById("bar").classList.add("is-danger");
                document.getElementById("bar").classList.remove("is-warning");
            }
        }

        puntiferita++;

    } else if (counterp <= 205 && counterp >= 176) {
        document.getElementById("spriteboss").src = "./img/11slot.png";
        document.getElementById("lvl").innerHTML = "Lv. 11";

        if (counterp == 205) {
            puntiferita = 0;
            salutemax = 30;
            barrasalute.max = salutemax;
            barrasalute.value = salutemax;
            document.getElementById("spriteboss").src = "./img/12cicloperosa.png";
            document.getElementById("lvl").innerHTML = "Lv. 12";
            document.getElementById("bar").classList.add("is-success");
            document.getElementById("bar").classList.remove("is-danger");
        } else {

            barrasalute.max = salutemax;
            barrasalute.value = salutemax - puntiferita;
            if (((barrasalute.value) / (barrasalute.max)) * 100 < 50 && ((barrasalute.value) / (barrasalute.max)) * 100 > 25) {
                document.getElementById("bar").classList.add("is-warning");
                document.getElementById("bar").classList.remove("is-success");
            } else if (((barrasalute.value) / (barrasalute.max)) * 100 <= 25) {
                document.getElementById("bar").classList.add("is-danger");
                document.getElementById("bar").classList.remove("is-warning");
            }
        }

        puntiferita++;

    } else if (counterp <= 235 && counterp >= 206) {
        document.getElementById("spriteboss").src = "./img/12cicloperosa.png";
        document.getElementById("lvl").innerHTML = "Lv. 12";

        if (counterp == 235) {
            puntiferita = 0;
            salutemax = 30;
            barrasalute.max = salutemax;
            barrasalute.value = salutemax;
            document.getElementById("spriteboss").src = "./img/13gyld.png";
            document.getElementById("lvl").innerHTML = "Lv. 13";
            document.getElementById("bar").classList.add("is-success");
            document.getElementById("bar").classList.remove("is-danger");
        } else {

            barrasalute.max = salutemax;
            barrasalute.value = salutemax - puntiferita;
            if (((barrasalute.value) / (barrasalute.max)) * 100 < 50 && ((barrasalute.value) / (barrasalute.max)) * 100 > 25) {
                document.getElementById("bar").classList.add("is-warning");
                document.getElementById("bar").classList.remove("is-success");
            } else if (((barrasalute.value) / (barrasalute.max)) * 100 <= 25) {
                document.getElementById("bar").classList.add("is-danger");
                document.getElementById("bar").classList.remove("is-warning");
            }
        }

        puntiferita++;

    } else if (counterp <= 265 && counterp >= 236) {
        document.getElementById("spriteboss").src = "./img/13gyld.png";
        document.getElementById("lvl").innerHTML = "Lv. 13";

        if (counterp == 265) {
            puntiferita = 0;
            salutemax = 35;
            barrasalute.max = salutemax;
            barrasalute.value = salutemax;
            document.getElementById("spriteboss").src = "./img/14ironmaid.png";
            document.getElementById("lvl").innerHTML = "Lv. 14";
            document.getElementById("bar").classList.add("is-success");
            document.getElementById("bar").classList.remove("is-danger");
        } else {

            barrasalute.max = salutemax;
            barrasalute.value = salutemax - puntiferita;
            if (((barrasalute.value) / (barrasalute.max)) * 100 < 50 && ((barrasalute.value) / (barrasalute.max)) * 100 > 25) {
                document.getElementById("bar").classList.add("is-warning");
                document.getElementById("bar").classList.remove("is-success");
            } else if (((barrasalute.value) / (barrasalute.max)) * 100 <= 25) {
                document.getElementById("bar").classList.add("is-danger");
                document.getElementById("bar").classList.remove("is-warning");
            }
        }

        puntiferita++;

    } else if (counterp <= 300 && counterp >= 266) {
        document.getElementById("spriteboss").src = "./img/14ironmaid.png";
        document.getElementById("lvl").innerHTML = "Lv. 14";

        if (counterp == 300) {
            puntiferita = 0;
            salutemax = 35;
            barrasalute.max = salutemax;
            barrasalute.value = salutemax;
            document.getElementById("spriteboss").src = "./img/15goldrago.png";
            document.getElementById("lvl").innerHTML = "Lv. 15";
            document.getElementById("bar").classList.add("is-success");
            document.getElementById("bar").classList.remove("is-danger");
        } else {

            barrasalute.max = salutemax;
            barrasalute.value = salutemax - puntiferita;
            if (((barrasalute.value) / (barrasalute.max)) * 100 < 50 && ((barrasalute.value) / (barrasalute.max)) * 100 > 25) {
                document.getElementById("bar").classList.add("is-warning");
                document.getElementById("bar").classList.remove("is-success");
            } else if (((barrasalute.value) / (barrasalute.max)) * 100 <= 25) {
                document.getElementById("bar").classList.add("is-danger");
                document.getElementById("bar").classList.remove("is-warning");
            }
        }

        puntiferita++;

    } else if (counterp <= 335 && counterp >= 301) {
        document.getElementById("spriteboss").src = "./img/15goldrago.png";
        document.getElementById("lvl").innerHTML = "Lv. 15";

        if (counterp == 335) {
            puntiferita = 0;
            salutemax = 35;
            barrasalute.max = salutemax;
            barrasalute.value = salutemax;
            document.getElementById("spriteboss").src = "./img/16firegod.png";
            document.getElementById("lvl").innerHTML = "Lv. 16";
            document.getElementById("bar").classList.add("is-success");
            document.getElementById("bar").classList.remove("is-danger");
        } else {

            barrasalute.max = salutemax;
            barrasalute.value = salutemax - puntiferita;
            if (((barrasalute.value) / (barrasalute.max)) * 100 < 50 && ((barrasalute.value) / (barrasalute.max)) * 100 > 25) {
                document.getElementById("bar").classList.add("is-warning");
                document.getElementById("bar").classList.remove("is-success");
            } else if (((barrasalute.value) / (barrasalute.max)) * 100 <= 25) {
                document.getElementById("bar").classList.add("is-danger");
                document.getElementById("bar").classList.remove("is-warning");
            }
        }

        puntiferita++;

    } else if (counterp <= 370 && counterp >= 336) {
        document.getElementById("spriteboss").src = "./img/16firegod.png";
        document.getElementById("lvl").innerHTML = "Lv. 16";

        if (counterp == 370) {
            puntiferita = 0;
            salutemax = 40;
            barrasalute.max = salutemax;
            barrasalute.value = salutemax;
            document.getElementById("spriteboss").src = "./img/17sandgod.png";
            document.getElementById("lvl").innerHTML = "Lv. 17";
            document.getElementById("bar").classList.add("is-success");
            document.getElementById("bar").classList.remove("is-danger");
        } else {

            barrasalute.max = salutemax;
            barrasalute.value = salutemax - puntiferita;
            if (((barrasalute.value) / (barrasalute.max)) * 100 < 50 && ((barrasalute.value) / (barrasalute.max)) * 100 > 25) {
                document.getElementById("bar").classList.add("is-warning");
                document.getElementById("bar").classList.remove("is-success");
            } else if (((barrasalute.value) / (barrasalute.max)) * 100 <= 25) {
                document.getElementById("bar").classList.add("is-danger");
                document.getElementById("bar").classList.remove("is-warning");
            }
        }

        puntiferita++;

    } else if (counterp <= 410 && counterp >= 371) {
        document.getElementById("spriteboss").src = "./img/17sandgod.png";
        document.getElementById("lvl").innerHTML = "Lv. 17";

        if (counterp == 410) {
            puntiferita = 0;
            salutemax = 45;
            barrasalute.max = salutemax;
            barrasalute.value = salutemax;
            document.getElementById("spriteboss").src = "./img/18bossfinale.png";
            document.getElementById("lvl").innerHTML = "Lv. 18";
            document.getElementById("bar").classList.add("is-success");
            document.getElementById("bar").classList.remove("is-danger");
        } else {

            barrasalute.max = salutemax;
            barrasalute.value = salutemax - puntiferita;
            if (((barrasalute.value) / (barrasalute.max)) * 100 < 50 && ((barrasalute.value) / (barrasalute.max)) * 100 > 25) {
                document.getElementById("bar").classList.add("is-warning");
                document.getElementById("bar").classList.remove("is-success");
            } else if (((barrasalute.value) / (barrasalute.max)) * 100 <= 25) {
                document.getElementById("bar").classList.add("is-danger");
                document.getElementById("bar").classList.remove("is-warning");
            }
        }

        puntiferita++;

    } else if (counterp <= 455 && counterp >= 411) {
        document.getElementById("spriteboss").src = "./img/18bossfinale.png";
        document.getElementById("lvl").innerHTML = "Lv. 18";

        if (counterp == 455) {
            puntiferita = 0;
            salutemax = 45;
            barrasalute.max = salutemax;
            barrasalute.value = salutemax;
            document.getElementById("spriteboss").src = "./img/19bossfinale2.png";
            document.getElementById("lvl").innerHTML = "Lv. 19";
            document.getElementById("bar").classList.add("is-success");
            document.getElementById("bar").classList.remove("is-danger");
        } else {

            barrasalute.max = salutemax;
            barrasalute.value = salutemax - puntiferita;
            if (((barrasalute.value) / (barrasalute.max)) * 100 < 50 && ((barrasalute.value) / (barrasalute.max)) * 100 > 25) {
                document.getElementById("bar").classList.add("is-warning");
                document.getElementById("bar").classList.remove("is-success");
            } else if (((barrasalute.value) / (barrasalute.max)) * 100 <= 25) {
                document.getElementById("bar").classList.add("is-danger");
                document.getElementById("bar").classList.remove("is-warning");
            }
        }

        puntiferita++;

    } else if (counterp <= 500 && counterp >= 456) {
        document.getElementById("spriteboss").src = "./img/19bossfinale2.png";
        document.getElementById("lvl").innerHTML = "Lv. 19";

        barrasalute.max = salutemax;
        barrasalute.value = salutemax - puntiferita;
        if (((barrasalute.value) / (barrasalute.max)) * 100 < 50 && ((barrasalute.value) / (barrasalute.max)) * 100 > 25) {
            document.getElementById("bar").classList.add("is-warning");
            document.getElementById("bar").classList.remove("is-success");
        } else if (((barrasalute.value) / (barrasalute.max)) * 100 <= 25) {
            document.getElementById("bar").classList.add("is-danger");
            document.getElementById("bar").classList.remove("is-warning");
        }

        puntiferita++;

        if (counterp == 500) {
            document.getElementById("lvl").innerHTML = "Lv. 20";
        }
    }

    sce1.classList.remove("is-success");
    sce2.classList.remove("is-success");
    sce1.classList.remove("is-danger");
    sce2.classList.remove("is-danger");

    document.getElementById("sprite").src = sprite_selezionato;

    let n_categoria = Math.floor(Math.random() * numero_categorie);

    if (n_categoria == 0) {
        inizio_categoria = 0;
        fine_categoria = 57;
    } else if (n_categoria == 1) {
        inizio_categoria = 58;
        fine_categoria = 98;
    } else if (n_categoria == 2) {
        inizio_categoria = 99;
        fine_categoria = 133;
    } else if (n_categoria == 3) {
        inizio_categoria = 134;
        fine_categoria = 165;
    } else if (n_categoria == 4) {
        inizio_categoria = 166;
        fine_categoria = 180;
    } else if (n_categoria == 5) {
        inizio_categoria = 181;
        fine_categoria = 231;
    } else if (n_categoria == 6) {
        inizio_categoria = 232;
        fine_categoria = 250;
    } else if (n_categoria == 7) {
        inizio_categoria = 251;
        fine_categoria = 295;
    } else if (n_categoria == 8) {
        inizio_categoria = 296;
        fine_categoria = 329;
    } else if (n_categoria == 9) {
        inizio_categoria = 330;
        fine_categoria = 368;
    } else if (n_categoria == 10) {
        inizio_categoria = 369;
        fine_categoria = 382;
    } else if (n_categoria == 11) {
        inizio_categoria = 383;
        fine_categoria = 426;
    } else if (n_categoria == 12) {
        inizio_categoria = 427;
        fine_categoria = 451;
    } else if (n_categoria == 13) {
        inizio_categoria = 452;
        fine_categoria = 472;
    } else if (n_categoria == 14) {
        inizio_categoria = 473;
        fine_categoria = 555;
    } else if (n_categoria == 15) {
        inizio_categoria = 556;
        fine_categoria = 592;
    } else if (n_categoria == 16) {
        inizio_categoria = 593;
        fine_categoria = 617;
    } else if (n_categoria == 17) {
        inizio_categoria = 618;
        fine_categoria = 639;
    }

    let n_random = Math.floor(Math.random() * (fine_categoria + 1 - inizio_categoria)) + inizio_categoria;

    document.getElementById("titletraduzione").innerHTML = "Qual è la traduzione di " + traduzione[n_random] + "?";

    let dplasceltacor = Math.floor(Math.random() * 2) + 1;
    let sceltasbagliata = Math.floor(Math.random() * (fine_categoria + 1 - inizio_categoria)) + inizio_categoria;

    while (n_random == sceltasbagliata) {
        sceltasbagliata = Math.floor(Math.random() * (fine_categoria + 1 - inizio_categoria)) + inizio_categoria;
    }

    if (dplasceltacor == 1) {
        sce1.innerHTML = parole[n_random];
        sce2.innerHTML = parole[sceltasbagliata];
        sce1.setAttribute("onclick", "winorlosetorre(1, 'scelta1')");
        sce2.setAttribute("onclick", "winorlosetorre(2, 'scelta2')");

    } else {
        sce1.innerHTML = parole[sceltasbagliata];
        sce2.innerHTML = parole[n_random];
        sce1.setAttribute("onclick", "winorlosetorre(2, 'scelta1')");
        sce2.setAttribute("onclick", "winorlosetorre(1, 'scelta2')");
    }
}

var audio = new Audio('./lvlup2.0.mp3');
var audiolvl = new Audio('./lvlupmodbassissimo.mp3');

function winorlose(x, elem) {

    if (x == 1) {
        audio.play();
        document.getElementById(elem).classList.add("is-success");
        if (sprite_selezionato == sprite_robin) {
            document.getElementById("sprite").src = "./img/robin_sprite2.png";
        } else if (sprite_selezionato == sprite_takumi) {
            document.getElementById("sprite").src = "./img/takumi_sprite2.png";
        } else if (sprite_selezionato == sprite_tiki) {
            document.getElementById("sprite").src = "./img/tiki_sprite2.png";
        } else if (sprite_selezionato == sprite_roy) {
            document.getElementById("sprite").src = "./img/roy_sprite2.png";
        }
    } else {
        document.getElementById(elem).classList.add("is-danger");
    }

    setTimeout(function () {
        giocoinloop();
    }, 700);
}

function winorloseboss(x, elem) {

    if (x == 1) {
        audio.play();
        counterp++;
        document.getElementById("points").innerHTML = counterp + "/" + counterpmax;

        document.getElementById(elem).classList.add("is-success");

        if (sprite_selezionato == sprite_robin) {
            document.getElementById("sprite").src = "./img/robin_sprite2.png";
        } else if (sprite_selezionato == sprite_takumi) {
            document.getElementById("sprite").src = "./img/takumi_sprite2.png";
        } else if (sprite_selezionato == sprite_tiki) {
            document.getElementById("sprite").src = "./img/tiki_sprite2.png";
        } else if (sprite_selezionato == sprite_roy) {
            document.getElementById("sprite").src = "./img/roy_sprite2.png";
        }

        if (counterp == counterpmax) {

            clearInterval(goanim);
            clearInterval(stopanim);
            document.getElementById("spriteboss").classList.remove("anim");
            goanim = 0;
            stopanim = 0;

            setTimeout(function () {
                document.getElementById("back").classList.add("invisibile");
                document.getElementById("points").classList.add("invisibile");
                document.getElementById("points").textContent = "";
                document.getElementById("scenarioboss").classList.add("invisibile");
                document.getElementById("scenarioallenamento").classList.add("invisibile");
                document.getElementById("spritediv").classList.add("invisibile");
                document.getElementById("spritebossdiv").classList.add("invisibile");

            }, 700);

            setTimeout(function () {

                document.getElementById("vic").classList.add("centro");
                document.getElementById("vic").classList.remove("invisibile");
                document.getElementById("vic").play();

                setTimeout(function () {
                    document.getElementById("vic").pause();
                    document.getElementById("vic").classList.add("invisibile");
                    document.getElementById("vic").classList.remove("centro");

                    document.getElementById("benvenuto").classList.remove("invisibile");
                    document.getElementById("allenatioboss").classList.remove("invisibile");
                    document.getElementById("downloadbtn").classList.remove("invisibile");
                    document.getElementById("changepg").classList.remove("invisibile");

                    document.getElementById("scenarioboss").classList.remove("invisibile");
                    document.getElementById("spritediv").classList.remove("is-half-mobile");
                    document.getElementById("spritediv").classList.remove("invisibile");
                    document.getElementById("spritediv").classList.remove("is-4-desktop");
                    document.getElementById("spritediv").classList.remove("is-offset-2-desktop");
                    document.getElementById("spritebossdiv").classList.remove("is-half-mobile");
                    document.getElementById("spritebossdiv").classList.remove("is-4-desktop");
                    document.getElementById("spritebossdiv").classList.add("invisibile");

                    Swal.fire({
                        icon: 'success',
                        title: 'Well played!',
                        text: 'Boss battuto!'
                    })
                }, 10000);
            }, 700);
        }

    } else {

        document.getElementById(elem).classList.add("is-danger");
        let rand = Math.floor(Math.random() * 3);
        if (rand == 1) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Non ti abbattere!',
            })
        } else if (rand == 2) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Anche i migliori sbagliano!',
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Si impara sbagliando!',
            })
        }

        document.getElementById("benvenuto").classList.remove("invisibile");
        document.getElementById("allenatioboss").classList.remove("invisibile");

        document.getElementById("downloadbtn").classList.remove("invisibile");
        document.getElementById("changepg").classList.remove("invisibile");

        document.getElementById("allenamenti").classList.add("invisibile");
        document.getElementById("allenamentip").classList.add("invisibile");
        document.getElementById("iboss").classList.add("invisibile");
        document.getElementById("ibossp").classList.add("invisibile");

        document.getElementById("scenarioallenamento").classList.add("invisibile");
        document.getElementById("sprite").classList.remove("invisibile");
        document.getElementById("sprite").src = sprite_selezionato;

        document.getElementById("points").classList.add("invisibile");
        document.getElementById("back").classList.add("invisibile");

        document.getElementById("spritediv").classList.remove("is-half-mobile");
        document.getElementById("spritediv").classList.remove("is-4-desktop");
        document.getElementById("spritediv").classList.remove("is-offset-2-desktop");
        document.getElementById("spritebossdiv").classList.remove("is-half-mobile");
        document.getElementById("spritebossdiv").classList.remove("is-4-desktop");
        document.getElementById("spritebossdiv").classList.add("invisibile");

        clearInterval(goanim);
        clearInterval(stopanim);
        document.getElementById("spriteboss").classList.remove("anim");
        goanim = 0;
        stopanim = 0;

        return;
    }

    setTimeout(function () {
        giocoinloopboss();
    }, 700);
}

function winorlosetorre(x, elem) {

    if (x == 1) {
        counterp++;
        if (counterp == 10 || counterp == 20 || counterp == 30 || counterp == 40 || counterp == 60 || counterp == 80 || counterp == 100 || counterp == 125 || counterp == 150 || counterp == 175 || counterp == 205 || counterp == 235 || counterp == 265 || counterp == 300 || counterp == 335 || counterp == 370 || counterp == 410 || counterp == 455 || counterp == 500) {
            audiolvl.play();
        } else {
            audio.play();
        }

        document.getElementById(elem).classList.add("is-success");

        if (sprite_selezionato == sprite_robin) {
            document.getElementById("sprite").src = "./img/robin_sprite2.png";
        } else if (sprite_selezionato == sprite_takumi) {
            document.getElementById("sprite").src = "./img/takumi_sprite2.png";
        } else if (sprite_selezionato == sprite_tiki) {
            document.getElementById("sprite").src = "./img/tiki_sprite2.png";
        } else if (sprite_selezionato == sprite_roy) {
            document.getElementById("sprite").src = "./img/roy_sprite2.png";
        }

        if (counterp == counterpmax) {

            clearInterval(goanim);
            clearInterval(stopanim);
            document.getElementById("spriteboss").classList.remove("anim");
            goanim = 0;
            stopanim = 0;

            setTimeout(function () {
                document.getElementById("back").classList.add("invisibile");
                document.getElementById("points").classList.add("invisibile");
                document.getElementById("points").textContent = "";
                document.getElementById("scenarioboss").classList.add("invisibile");
                document.getElementById("scenarioallenamento").classList.add("invisibile");
                document.getElementById("spritediv").classList.add("invisibile");
                document.getElementById("spritebossdiv").classList.add("invisibile");

                document.getElementById("probar").classList.add("invisibile");

                salutemax = 10;
                puntiferita = 0;

                document.getElementById("bar").classList.add("is-success");
                document.getElementById("bar").classList.remove("is-warning");
                document.getElementById("bar").classList.remove("is-danger");

                document.getElementById("lvl").innerHTML = "";

            }, 700);

            setTimeout(function () {

                document.getElementById("vic").classList.add("centro");
                document.getElementById("vic").classList.remove("invisibile");
                document.getElementById("vic").play();

                setTimeout(function () {
                    document.getElementById("vic").pause();
                    document.getElementById("vic").classList.add("invisibile");
                    document.getElementById("vic").classList.remove("centro");

                    document.getElementById("benvenuto").classList.remove("invisibile");
                    document.getElementById("allenatioboss").classList.remove("invisibile");
                    document.getElementById("downloadbtn").classList.remove("invisibile");
                    document.getElementById("changepg").classList.remove("invisibile");

                    document.getElementById("scenarioboss").classList.remove("invisibile");
                    document.getElementById("spritediv").classList.remove("is-half-mobile");
                    document.getElementById("spritediv").classList.remove("invisibile");
                    document.getElementById("spritediv").classList.remove("is-4-desktop");
                    document.getElementById("spritediv").classList.remove("is-offset-2-desktop");
                    document.getElementById("spritebossdiv").classList.remove("is-half-mobile");
                    document.getElementById("spritebossdiv").classList.remove("is-4-desktop");
                    document.getElementById("spritebossdiv").classList.add("invisibile");

                    document.getElementById("lvl").innerHTML = "";

                    Swal.fire({
                        icon: 'success',
                        title: 'Well played!',
                        text: 'Ora sei un English Master!'
                    })

                }, 10000);
            }, 700);
        }

    } else {

        document.getElementById(elem).classList.add("is-danger");
        let rand = Math.floor(Math.random() * 3);
        if (rand == 1) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Non ti abbattere!',
            })
        } else if (rand == 2) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Anche i migliori sbagliano!',
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Si impara sbagliando!',
            })
        }

        document.getElementById("benvenuto").classList.remove("invisibile");
        document.getElementById("allenatioboss").classList.remove("invisibile");

        document.getElementById("downloadbtn").classList.remove("invisibile");
        document.getElementById("changepg").classList.remove("invisibile");

        document.getElementById("allenamenti").classList.add("invisibile");
        document.getElementById("allenamentip").classList.add("invisibile");
        document.getElementById("iboss").classList.add("invisibile");
        document.getElementById("ibossp").classList.add("invisibile");

        document.getElementById("scenarioallenamento").classList.add("invisibile");
        document.getElementById("sprite").classList.remove("invisibile");
        document.getElementById("sprite").src = sprite_selezionato;

        document.getElementById("points").textContent = "";
        document.getElementById("points").classList.add("invisibile");
        document.getElementById("back").classList.add("invisibile");

        document.getElementById("spritediv").classList.remove("is-half-mobile");
        document.getElementById("spritediv").classList.remove("is-4-desktop");
        document.getElementById("spritediv").classList.remove("is-offset-2-desktop");
        document.getElementById("spritebossdiv").classList.remove("is-half-mobile");
        document.getElementById("spritebossdiv").classList.remove("is-4-desktop");
        document.getElementById("spritebossdiv").classList.add("invisibile");

        document.getElementById("probar").classList.add("invisibile");
        salutemax = 10;
        puntiferita = 0;

        document.getElementById("bar").classList.add("is-success");
        document.getElementById("bar").classList.remove("is-warning");
        document.getElementById("bar").classList.remove("is-danger");

        document.getElementById("lvl").innerHTML = "";

        clearInterval(goanim);
        clearInterval(stopanim);
        document.getElementById("spriteboss").classList.remove("anim");
        goanim = 0;
        stopanim = 0;

        return;
    }

    setTimeout(function () {
        giocoinlooptorre();
    }, 700);
}

function changespritepg() {
    if (sprite_selezionato == sprite_robin) {
        sprite_selezionato = sprite_takumi;
        vittoria_selezionata = vittoria_takumi;
    } else if (sprite_selezionato == sprite_takumi) {
        sprite_selezionato = sprite_tiki;
        vittoria_selezionata = vittoria_tiki;
    } else if (sprite_selezionato == sprite_tiki) {
        sprite_selezionato = sprite_roy;
        vittoria_selezionata = vittoria_roy;
    } else {
        sprite_selezionato = sprite_robin;
        vittoria_selezionata = vittoria_robin;
    }

    document.getElementById("sprite").src = sprite_selezionato;
    document.getElementById("vic").src = vittoria_selezionata;
}

function successdownload() {
    Swal.fire({
        icon: 'success',
        title: 'La guida è stata scaricata correttamente',
        showConfirmButton: false,
        timer: 1500
    })
}

function starta() {
    document.getElementById("spriteboss").classList.add("anim");
}

function stopa() {
    document.getElementById("spriteboss").classList.remove("anim");
}