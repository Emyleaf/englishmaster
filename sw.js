self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                "./",
                "./img/1porcino.png",
                "./img/2budino.png",
                "./img/3sacco.png",
                "./img/4greendragon.png",
                "./img/5knightslime.png",
                "./img/6cinghorco.png",
                "./img/7skeled.png",
                "./img/8grif.png",
                "./img/9dragslime.png",
                "./img/10golemoro.png",
                "./img/11slot.png",
                "./img/12cicloperosa.png",
                "./img/13gyld.png",
                "./img/14ironmaid.png",
                "./img/15goldrago.png",
                "./img/16firegod.png",
                "./img/17sandgod.png",
                "./img/18bossfinale.png",
                "./img/19bossfinale2.png",
                "./img/blackdragon.png",
                "./img/diodeltuono.png",
                "./img/gigante.png",
                "./img/golembronze.png",
                "./img/jargon.png",
                "./img/kingslime.png",
                "./img/mimic.png",
                "./img/slime.png",
                "./img/vampistrello.png",

                "./img/robin_sprite.png",
                "./img/robin_sprite2.png",
                "./img/roy_sprite.png",
                "./img/roy_sprite2.png",
                "./img/takumi_sprite.png",
                "./img/takumi_sprite2.png",
                "./img/tiki_sprite.png",
                "./img/tiki_sprite2.png",

                "./css/style.css",
                "./js/main.js",

                "./mp4/victory_lin.mp4",
                "./mp4/victory_lucina.mp4",
                "./mp4/victory_marth.mp4",
                "./mp4/victory_robin.mp4",
                "./mp4/victory_roy.mp4",
                "./mp4/victory_takumi.mp4",
                "./mp4/victory_tiki.mp4",

                "./lvlup2.0.mp3",
                "./lvlupmodbassissimo.mp3"

            ])
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
})