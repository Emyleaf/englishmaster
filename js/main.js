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
"Alba", "Tramonto", "Crepuscolo", "Oggi", "Ieri", "Domani", "Mattina", "Pomeriggio", "Sera"


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
"Today", "Yesterday", "Tomorrow", "Morning", "Afternoon", "Evening"

    ]

const indici = [
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
    365


]

let categoria_scelta;
let inizio_categoria;
let fine_categoria;
let numero_categorie = 10;

console.log(traduzione[364]);

function hide_presentazione(alloppureboss){

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

    if(alloppureboss == 1){
        z.classList.remove("invisibile");
        zp.classList.remove("invisibile");
        back.classList.remove("invisibile");
    } else if (alloppureboss == 2){
        k.classList.remove("invisibile");
        kp.classList.remove("invisibile");
        back.classList.remove("invisibile");
    } else {
        x.classList.remove("invisibile");
        y.classList.remove("invisibile");
            
        document.getElementById("downloadbtn").classList.remove("invisibile");
            
        z.classList.add("invisibile");
        k.classList.add("invisibile");
        zp.classList.add("invisibile");
        kp.classList.add("invisibile");

        
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
        
    }
}

function gioco(categoria, bossornot){

    if(categoria == "animals"){
        inizio_categoria = 0;
        fine_categoria = 57;
    } else if(categoria == "body"){
        inizio_categoria = 58;
        fine_categoria = 98;
    } else if(categoria == "house"){
        inizio_categoria = 99;
        fine_categoria = 133;
    } else if(categoria == "clothes"){
        inizio_categoria = 134;
        fine_categoria = 165;
    } else if(categoria == "colors"){
        inizio_categoria = 166;
        fine_categoria = 180;
    } else if(categoria == "foods"){
        inizio_categoria = 181;
        fine_categoria = 231;
    } else if(categoria == "family"){
        inizio_categoria = 232;
        fine_categoria = 250;
    } else if(categoria == "jobs"){
        inizio_categoria = 251;
        fine_categoria = 295;
    } else if(categoria == "sports"){
        inizio_categoria = 296;
        fine_categoria = 329;
    } else if(categoria == "weather"){
        inizio_categoria = 330;
        fine_categoria = 364;
    }

    categoria_scelta = categoria;

    document.getElementById("scenarioallenamento").classList.remove("invisibile");
    document.getElementById("allenamenti").classList.add("invisibile");
    document.getElementById("allenamentip").classList.add("invisibile");
    document.getElementById("iboss").classList.add("invisibile");
    document.getElementById("ibossp").classList.add("invisibile");

    if(bossornot == 0){
        giocoinloop();
    } else {
        counterp = 0;

        if(categoria == "facile"){
            counterpmax = 10;
        } else if(categoria == "facile+"){
            counterpmax = 20;
        } else if(categoria == "intermedio"){
            counterpmax = 30;
        } else if(categoria == "intermedio+"){
            counterpmax = 40;
        } else if(categoria == "difficile"){
            counterpmax = 50;
        } else if(categoria == "difficile+"){
            counterpmax = 75;
        } else if(categoria == "impossibile"){
            counterpmax = 100;
        }

        giocoinloopboss(categoria);
        document.getElementById("spritediv").classList.add("is-half-mobile");
        document.getElementById("spritediv").classList.add("is-4-desktop");
        document.getElementById("spritediv").classList.add("is-offset-2-desktop");
        document.getElementById("spritebossdiv").classList.add("is-half-mobile");
        document.getElementById("spritebossdiv").classList.add("is-4-desktop");
        document.getElementById("points").classList.remove("invisibile");
        document.getElementById("spritebossdiv").classList.remove("invisibile");
    }
}

function giocoinloop(){

    let sce1 = document.getElementById("scelta1");
    let sce2 = document.getElementById("scelta2");

    document.getElementById("sprite").src = "./img/robin_sprite.png";
    sce1.classList.remove("is-success");
    sce2.classList.remove("is-success");
    sce1.classList.remove("is-danger");
    sce2.classList.remove("is-danger");
    
    let n_random = Math.floor(Math.random() * (fine_categoria+1 - inizio_categoria)) + inizio_categoria;

    document.getElementById("titletraduzione").innerHTML = "Qual è la traduzione di " + traduzione[n_random] + "?";

    let dplasceltacor = Math.floor(Math.random() * 2) + 1;
    let sceltasbagliata = Math.floor(Math.random() * (fine_categoria+1 - inizio_categoria)) + inizio_categoria;

    while(n_random == sceltasbagliata){
        sceltasbagliata = Math.floor(Math.random() * (fine_categoria+1 - inizio_categoria)) + inizio_categoria;
    }

    if(dplasceltacor == 1){
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

function giocoinloopboss(cat){
    
    let sce1 = document.getElementById("scelta1");
    let sce2 = document.getElementById("scelta2");

    if(cat == "facile"){
        document.getElementById("spriteboss").src = "./img/slime.png";
    } else if(cat == "facile+"){
        document.getElementById("spriteboss").src = "./img/vampistrello.png";
    } else if(cat == "intermedio"){
        document.getElementById("spriteboss").src = "./img/jargon.png";
    } else if(cat == "intermedio+"){
        document.getElementById("spriteboss").src = "./img/golembronze.png";
    } else if(cat == "difficile"){
        document.getElementById("spriteboss").src = "./img/kingslime.png";
    } else if(cat == "difficile+"){
        document.getElementById("spriteboss").src = "./img/blackdragon.png";
    } else if(cat == "impossibile"){
        document.getElementById("spriteboss").src = "./img/diodeltuono.png";
    }

    sce1.classList.remove("is-success");
    sce2.classList.remove("is-success");
    sce1.classList.remove("is-danger");
    sce2.classList.remove("is-danger");
    
    document.getElementById("sprite").src = "./img/robin_sprite.png";
    document.getElementById("points").innerHTML = counterp + "/" + counterpmax;

    let n_categoria = Math.floor(Math.random() * numero_categorie);

    if(n_categoria == 0){
        inizio_categoria = 0;
        fine_categoria = 57;
    } else if(n_categoria == 1){
        inizio_categoria = 58;
        fine_categoria = 98;
    } else if(n_categoria == 2){
        inizio_categoria = 99;
        fine_categoria = 133;
    } else if(n_categoria == 3){
        inizio_categoria = 134;
        fine_categoria = 165;
    } else if(n_categoria == 4){
        inizio_categoria = 166;
        fine_categoria = 180;
    } else if(n_categoria == 5){
        inizio_categoria = 181;
        fine_categoria = 231;
    } else if(n_categoria == 6){
        inizio_categoria = 232;
        fine_categoria = 250;
    } else if(n_categoria == 7){
        inizio_categoria = 251;
        fine_categoria = 295;
    } else if(n_categoria == 8){
        inizio_categoria = 296;
        fine_categoria = 329;
    } else if(n_categoria == 9){
        inizio_categoria = 330;
        fine_categoria = 364;
    }

    let n_random = Math.floor(Math.random() * (fine_categoria+1 - inizio_categoria)) + inizio_categoria;

    document.getElementById("titletraduzione").innerHTML = "Qual è la traduzione di " + traduzione[n_random] + "?";

    let dplasceltacor = Math.floor(Math.random() * 2) + 1;
    let sceltasbagliata = Math.floor(Math.random() * (fine_categoria+1 - inizio_categoria)) + inizio_categoria;

    while(n_random == sceltasbagliata){
        sceltasbagliata = Math.floor(Math.random() * (fine_categoria+1 - inizio_categoria)) + inizio_categoria;
    }

    if(dplasceltacor == 1){
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

var audio = new Audio('./lvlupmodbassissimo.mp3');

function winorlose(x, elem){

    if(x == 1){
        audio.play();
        document.getElementById(elem).classList.add("is-success");
        document.getElementById("sprite").src = "./img/robin_sprite2.png";
    } else {
        document.getElementById(elem).classList.add("is-danger");
    }
    
    setTimeout(function () {
        giocoinloop();
    }, 1000);
}

function winorloseboss(x, elem){

    if(x == 1){
        audio.play();
        counterp++;
        document.getElementById("points").innerHTML = counterp + "/" + counterpmax;

        document.getElementById(elem).classList.add("is-success");
        document.getElementById("sprite").src = "./img/robin_sprite2.png";

        if(counterp == counterpmax){

            setTimeout(function(){
                document.getElementById("back").classList.add("invisibile");
                document.getElementById("points").classList.add("invisibile");
                document.getElementById("points").textContent = "";
                document.getElementById("scenarioboss").classList.add("invisibile");
                document.getElementById("scenarioallenamento").classList.add("invisibile");
                document.getElementById("spritediv").classList.add("invisibile");
                document.getElementById("spritebossdiv").classList.add("invisibile");
            }, 1000);

            setTimeout(function(){
                    
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

                        document.getElementById("scenarioboss").classList.remove("invisibile");
                        document.getElementById("spritediv").classList.remove("is-half-mobile");
                        document.getElementById("spritediv").classList.remove("invisibile");
                        document.getElementById("spritediv").classList.remove("is-4-desktop");
                        document.getElementById("spritediv").classList.remove("is-offset-2-desktop");
                        document.getElementById("spritebossdiv").classList.remove("is-half-mobile");
                        document.getElementById("spritebossdiv").classList.remove("is-4-desktop");
                        document.getElementById("spritebossdiv").classList.add("invisibile");
                        
                    }, 10000);
            }, 1000);
        }

    } else {

        document.getElementById(elem).classList.add("is-danger");
        alert("Hai perso!");

        document.getElementById("benvenuto").classList.remove("invisibile");
        document.getElementById("allenatioboss").classList.remove("invisibile");
        
        document.getElementById("downloadbtn").classList.remove("invisibile");
            
        document.getElementById("allenamenti").classList.add("invisibile");
        document.getElementById("allenamentip").classList.add("invisibile");
        document.getElementById("iboss").classList.add("invisibile");
        document.getElementById("ibossp").classList.add("invisibile");
        
        document.getElementById("scenarioallenamento").classList.add("invisibile");
        document.getElementById("sprite").classList.remove("invisibile");
        document.getElementById("sprite").src = "./img/robin_sprite.png";

        document.getElementById("points").classList.add("invisibile");
        document.getElementById("back").classList.add("invisibile");
        
        document.getElementById("spritediv").classList.remove("is-half-mobile");
        document.getElementById("spritediv").classList.remove("is-4-desktop");
        document.getElementById("spritediv").classList.remove("is-offset-2-desktop");
        document.getElementById("spritebossdiv").classList.remove("is-half-mobile");
        document.getElementById("spritebossdiv").classList.remove("is-4-desktop");
        document.getElementById("spritebossdiv").classList.add("invisibile");
        
        return;
    }
    
    setTimeout(function () {
        giocoinloopboss();
    }, 1000);
}
