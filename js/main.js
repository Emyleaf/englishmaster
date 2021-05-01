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


"Orologio", "Portafoglio", "Borsa", "Collana"

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
"Bracelet"

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

]

let categoria_scelta;
let inizio_categoria;
let fine_categoria;

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
            
        z.classList.add("invisibile");
        k.classList.add("invisibile");
        zp.classList.add("invisibile");
        kp.classList.add("invisibile");

        
        document.getElementById("scenarioallenamento").classList.add("invisibile");
        document.getElementById("points").classList.add("invisibile");
        back.classList.add("invisibile");
        
        document.getElementById("scenarioboss").classList.remove("invisibile");
        document.getElementById("sprite").classList.remove("invisibile");
        document.getElementById("spriteboss").classList.add("invisibile");
        
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
    } else if(categoria == "facile"){
        inizio_categoria = 0;
        fine_categoria = 165;
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
        }

        giocoinloopboss();
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

function giocoinloopboss(){
    
    let sce1 = document.getElementById("scelta1");
    let sce2 = document.getElementById("scelta2");

    document.getElementById("sprite").src = "./img/robin_sprite.png";
    document.getElementById("spriteboss").src = "./img/slime.png";
    document.getElementById("spriteboss").classList.remove("invisibile");

    sce1.classList.remove("is-success");
    sce2.classList.remove("is-success");
    sce1.classList.remove("is-danger");
    sce2.classList.remove("is-danger");
    document.getElementById("points").classList.remove("invisibile");

    document.getElementById("points").innerHTML = counterp + "/" + counterpmax;


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

function winorlose(x, elem){

    if(x == 1){
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
        counterp++;
        document.getElementById("points").innerHTML = counterp + "/" + counterpmax;

        document.getElementById(elem).classList.add("is-success");
        document.getElementById("sprite").src = "./img/robin_sprite2.png";

        if(counterp == counterpmax){
    
            document.getElementById("vic").src = "./img/victory.gif";
            document.getElementById("vic").classList.remove("invisibile");
            document.getElementById("scenarioallenamento").classList.add("invisibile");
            document.getElementById("scenarioboss").classList.add("invisibile");
            document.getElementById("back").classList.add("invisibile");
            document.getElementById("points").classList.add("invisibile");

            setTimeout(function () {
                document.getElementById("vic").src = "";
                document.getElementById("vic").classList.add("invisibile");

                document.getElementById("benvenuto").classList.remove("invisibile");
                document.getElementById("allenatioboss").classList.remove("invisibile");
                    
                document.getElementById("allenamenti").classList.add("invisibile");
                document.getElementById("iboss").classList.add("invisibile");
                document.getElementById("allenamentip").classList.add("invisibile");
                document.getElementById("ibossp").classList.add("invisibile");
                
                document.getElementById("scenarioallenamento").classList.add("invisibile");

                document.getElementById("scenarioboss").classList.remove("invisibile");
                document.getElementById("spriteboss").classList.add("invisibile");
                        
                document.getElementById("sprite").src = "./img/robin_sprite.png";
                
            }, 7000);

            return;
        }

    } else {
        document.getElementById(elem).classList.add("is-danger");
    }
    
    setTimeout(function () {
        giocoinloopboss();
    }, 1000);
}

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }