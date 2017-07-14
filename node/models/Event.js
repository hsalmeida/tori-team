
exports.getByUserAndDate = function (user, date, cb) {
    cb([
        {
            name: "Campeonato Carioca 20/08",
            description: "Spicy jalapeno bacon ipsum dolor amet swine boudin ham hock burgdoggen.",
            type: "championship",
            modality: "taekwondo",
            author: {
                user: "leandro",
                authorId: "hash",
                date: new Date(2017, 10, 10, 0, 0, 0, 0)
            },
            multipleDates: false,
            eventDates: [
                {
                    day: 1,
                    begin: new Date(2017, 10, 10, 8, 0, 0, 0),
                    end: new Date(2017, 10, 10, 16, 0, 0, 0)
                }
            ],
            approver: {
                user: "thais",
                approverId: "hash",
                date: new Date(2017, 10, 10, 0, 0, 0, 0),
                approved: true
            }
        },
        {
            name: "Campeonato Capoeira 25/10",
            description: "Spicy jalapeno bacon ipsum dolor amet swine boudin ham hock burgdoggen.",
            type: "championship",
            modality: "capoeira",
            author: {
                user: "batata",
                authorId: "hash",
                date: new Date(2017, 9, 15, 0, 0, 0, 0)
            },
            multipleDates: true,
            eventDates: [
                {
                    day: 1,
                    begin: new Date(2017, 9, 15, 8, 0, 0, 0),
                    end: new Date(2017, 9, 15, 16, 0, 0, 0)
                },
                {
                    day: 2,
                    begin: new Date(2017, 9, 16, 8, 0, 0, 0),
                    end: new Date(2017, 9, 16, 16, 0, 0, 0)
                }
            ]
        }
    ]);
};