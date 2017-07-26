exports.getAll = function (login, cb) {
    cb([
        {
            "name": "Tae Kwon-Do",
            "description": "",
            "professors": [
                {
                    "name": "Leandro Davi",
                    "user": "hash"
                }
            ],
            "schedule": [
                {
                    "days" : ["Segunda", "Quarta", "Sexta"],
                    "start": "06:00",
                    "end": "07:00"
                },
                {
                    "days" : ["Terça", "Quinta"],
                    "start": "19:30",
                    "end": "20:30"
                }
            ]
        },
        {
            "name": "Judô",
            "description": "",
            "professors": [
                {
                    "name": "Thais Policarpo",
                    "user": "hash"
                },
                {
                    "name": "Sergio Luis",
                    "user": "hash"
                }
            ],
            "schedule": [
                {
                    "days" : ["Segunda", "Quarta", "Sexta"],
                    "start": "07:00",
                    "end": "08:00"
                },
                {
                    "days" : ["Terça", "Quinta"],
                    "start": "18:30",
                    "end": "19:30"
                }
            ]
        }
    ]);
};