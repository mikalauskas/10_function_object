window.onload = function () {

    function generate () {
        const initPerson = personGenerator.getPerson();
        document.querySelector('#surnameOutput').innerText = initPerson.surname;
        document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
        document.querySelector('#secondNameOutput').innerText = initPerson.secondName;
        document.querySelector('#genderOutput').innerText = initPerson.gender;
        document.querySelector('#birthDayOutput').innerText = initPerson.birthDay;
        document.querySelector('#professionOutput').innerText = initPerson.profession;
        document.querySelector('#photo').src = initPerson.photo;
    }

    generate();

    document.querySelector('#generate').addEventListener('click',
        (event) => {
            event.preventDefault();
            generate();
        }
    );

    document.querySelector('#clear').addEventListener('click',
        (event) => {
            event.preventDefault();
            document.querySelector('#surnameOutput').innerText = '';
            document.querySelector('#firstNameOutput').innerText = '';
            document.querySelector('#secondNameOutput').innerText = '';
            document.querySelector('#genderOutput').innerText = '';
            document.querySelector('#birthDayOutput').innerText = '';
            document.querySelector('#professionOutput').innerText = '';
            document.querySelector('#photo').src = '';
        }
    );
};