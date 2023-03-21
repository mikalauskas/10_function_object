const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    secondNameJson: `{  
        "count": 10,
        "list": {
            "id_1": "Александров",
            "id_2": "Максимов",
            "id_3": "Иванов",
            "id_4": "Артемов",
            "id_5": "Дмитриев",
            "id_6": "Владимиров",
            "id_7": "Михаилов",
            "id_8": "Русланов",
            "id_9": "Павлов",
            "id_10": "Андреев"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Ольга",
            "id_2": "Кристина",
            "id_3": "Ирина",
            "id_4": "Марина",
            "id_5": "Анастасия",
            "id_6": "Жанна",
            "id_7": "Владлена",
            "id_8": "Екатерина",
            "id_9": "Лариса",
            "id_10": "Галина"
        }
    }`,
    genderJson: `{
        "count": 2,
        "list": {
            "id_1": "Мужчина",
            "id_2": "Женщина"
        }
    }`,
    monthsJson: `{
        "count": 12,
        "list": {
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,
    femaleProfessionsJson: `{
        "count": 5,
        "list": {
            "id_1": "стюардесса",
            "id_2": "официантка",
            "id_3": "гувернантка",
            "id_4": "проводница",
            "id_5": "косметолог"
        }
    }`,
    maleProfessionsJson: `{
        "count": 4,
        "list": {
            "id_1": "слесарь",
            "id_2": "грузчик",
            "id_3": "пожарный",
            "id_4": "шахтёр"
        }
    }`,

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
        return obj.list[prop];
    },


    randomGender: function () {

        return this.randomValue(this.genderJson);

    },

    randomFirstName: function () {

        if (this.person.gender == 'Мужчина') {

            return this.randomValue(this.firstNameMaleJson);

        } else if (this.person.gender == 'Женщина') {

            return this.randomValue(this.firstNameFemaleJson);
            
        }

        return 'Ошибка';

    },

    randomSecondName: function () {

        if (this.person.gender == 'Мужчина') {

            return this.randomValue(this.secondNameJson) + 'ич';

        } else if (this.person.gender == 'Женщина') {

            return this.randomValue(this.secondNameJson) + 'на';
            
        }

        return 'Ошибка';

    },

    leapYear: function(year) {

        if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
            return this.randomIntNumber(29,1);
        } else {
            return this.randomIntNumber(28,1);
        }

    },

    randomBirthday: function () {

        let month = this.randomValue(this.monthsJson);
        let year = this.randomIntNumber(2022,1923);
        let day = (month) => {
            if (month == 'февраля') {
                return this.leapYear(year);
            } else if (month == 'апреля' || month == 'июня' || month == 'сентября' || month == 'ноября') {
                return this.randomIntNumber(30,1);
            }
            return this.randomIntNumber(31,1);
        };
        return day(month) + ' ' + month + ' ' + year;

    },

    randomSurname: function () {

        if (this.person.gender == 'Мужчина') {

            return this.randomValue(this.surnameJson);

        } else if (this.person.gender == 'Женщина') {

            return this.randomValue(this.surnameJson) + 'а';
            
        }

        return 'Ошибка';

    },

    randomProfession: function () {

        if (this.person.gender == 'Мужчина') {

            return this.randomValue(this.maleProfessionsJson);

        } else if (this.person.gender == 'Женщина') {

            return this.randomValue(this.femaleProfessionsJson);
            
        }

        return 'Ошибка';

    },

    randomPhoto: function () {

        if (this.person.gender == 'Мужчина') {

            return 'https://source.unsplash.com/random/?male,' + this.randomIntNumber(9999, 1);

        } else if (this.person.gender == 'Женщина') {

            return 'https://source.unsplash.com/random/?female,girls,woman,' + this.randomIntNumber(9999, 1);
            
        }

        return 'Ошибка';
        
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.secondName = this.randomSecondName();
        this.person.surname = this.randomSurname();
        this.person.birthYear = this.randomBirthday();
        this.person.profession = this.randomProfession();
        this.person.photo = this.randomPhoto();
        return this.person;
    }
};