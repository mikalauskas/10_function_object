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
    firstNameMaleJson: `{
        "count": 20,
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
            "id_10": "Степан",
            "id_11": "Андрей",
            "id_12": "Кирилл",
            "id_13": "Матвей",
            "id_14": "Илья",
            "id_15": "Алексей",
            "id_16": "Роман",
            "id_17": "Сергей",
            "id_18": "Владислав",
            "id_19": "Ярослав",
            "id_20": "Тимофей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 20,
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
            "id_10": "София",
            "id_11": "Дарья",
            "id_12": "Мария",
            "id_13": "Анна",
            "id_14": "Виктория",
            "id_15": "Полина",
            "id_16": "Елизавета",
            "id_17": "Ксения",
            "id_18": "Валерия",
            "id_19": "Варвара",
            "id_20": "Александра"
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

        let secondName = this.randomValue(this.firstNameMaleJson);

        if (this.person.gender == 'Мужчина') {

            switch (secondName.substr(-1, 1)) {
                case 'й':
                    return secondName.replace('й', '') + 'евич';
                case 'я':
                    return secondName.replace('я', '') + 'ич';
                case 'а':
                    return secondName.replace('а', '') + 'ич';
                case 'ь':
                    return secondName.replace('ь', '') + 'евич';

                default:
                    return secondName + 'ович';
            }

        } else if (this.person.gender == 'Женщина') {

            switch (secondName.substr(-1, 1)) {
                case 'й':
                    return secondName.replace('й', '') + 'евна';
                case 'я':
                    return secondName.replace('я', '') + 'инична';
                case 'а':
                    if (secondName == 'Никита') {
                        return secondName.replace('а', '') + 'ична';
                    }
                case 'ь':
                    return secondName.replace('ь', '') + 'евна';

                default:
                    return secondName + 'овна';
            }

        }

        return 'Ошибка';

    },

    leapYear: function (year) {

        if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
            return this.randomIntNumber(29, 1);
        } else {
            return this.randomIntNumber(28, 1);
        }

    },

    randomYear: function () {

        return this.randomIntNumber(new Date().getFullYear(), new Date().getFullYear() - 80);

    },

    randomBirthday: function () {

        let month = this.randomValue(this.monthsJson);
        let day = (month) => {
            if (month == 'февраля') {
                return this.leapYear(this.person.year);
            } else if (month == 'апреля' || month == 'июня' || month == 'сентября' || month == 'ноября') {
                return this.randomIntNumber(30, 1);
            }
            return this.randomIntNumber(31, 1);
        };
        return day(month) + ' ' + month + ' ' + this.person.year;

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

        const curYear = new Date().getFullYear();
        const age = curYear - this.person.year;

        if (this.person.gender == 'Мужчина') {

            if (age < 18) {
                return 'безработный'
            }

            return this.randomValue(this.maleProfessionsJson);

        } else if (this.person.gender == 'Женщина') {

            if (age < 18) {
                return 'безработная'
            }
            return this.randomValue(this.femaleProfessionsJson);

        }

        return 'Ошибка';

    },

    randomPhoto: function () {

        const curYear = new Date().getFullYear();
        const age = curYear - this.person.year;
        let searchArgs;

        if (this.person.gender == 'Мужчина') {

            searchArgs = 'male';

            if (age < 13) {

                searchArgs = 'baby';

            } else if (age < 18 && age > 12) {
                searchArgs = 'boy';

            } else if (age > 50) {

                searchArgs = 'oldman';
            }

        } else if (this.person.gender == 'Женщина') {

            searchArgs = 'female,woman,girl';

            if (age < 13) {

                searchArgs = 'baby';

            } else if (age < 18 && age > 12) {
                searchArgs = 'girl';

            } else if (age > 50) {

                searchArgs = 'oldwoman';

            }

        }

        return 'https://source.unsplash.com/random/?' + searchArgs + '&rnd=' + this.randomIntNumber(9999, 1);

    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.secondName = this.randomSecondName();
        this.person.surname = this.randomSurname();
        this.person.year = this.randomYear();
        this.person.birthDay = this.randomBirthday();
        this.person.profession = this.randomProfession();
        this.person.photo = this.randomPhoto();
        return this.person;
    }
};