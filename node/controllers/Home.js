var express = require("express");
var router = express.Router();

router.get('/:user', function (req, res) {
    var home = {
        eventsToApprove: {
            amount: 1,
            events: [
                {
                    event: "hash",
                    name: "Campeonato Capoeira",
                    date: "25/10"
                }
            ]
        },
        birthdays: {
            month: "Agosto",
            persons: [
                { name: "Hilton", date: "11/08" },
                { name: "Hilton", date: "11/08" },
                { name: "Hilton", date: "11/08" }
            ]
        },
        events: [
            {
                name: "Campeonato Carioca 20/08",
                description: "Spicy jalapeno bacon ipsum dolor amet swine boudin ham hock burgdoggen, pig capicola meatball kielbasa prosciutto meatloaf jerky hamburger drumstick. T-bone cupim sirloin meatloaf frankfurter sausage bacon.",
                type: "championship",
                modality: "taekwondo"
            },
            {
                name: "Campeonato Capoeira 25/10",
                description: "Landjaeger jowl tongue, alcatra bacon brisket pork belly sausage kevin rump turkey swine doner short ribs spare ribs. Short loin cupim swine.",
                type: "championship",
                modality: "capoeira"
            },
            {
                name: "Nova modalidade!",
                description: "Venha participar da aula de abertura",
                type: "common",
                modality: "none"
            }
        ],
    };

    res.json(home);
});

module.exports = router;