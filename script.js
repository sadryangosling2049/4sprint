let form = document.querySelector('.form');
let formExit = document.querySelector('.form__block_exit')
let nameEdit = document.querySelector('.profile__rename')
let profileName = document.querySelector('.profile__author_type_name')
let profileAbout = document.querySelector('.profile__author_type_about')

let inputName = document.querySelector('.form__block_inputs_top')
let inputAbout = document.querySelector('.form__block_inputs_bottom')

let save = document.querySelector('.form__block_button')

let darkTheme = document.querySelector('.button_dark_theme')
let lightTheme = document.querySelector('.button_light_theme')
let themes = document.querySelector('.page')

let cards = document.querySelectorAll('.gallery__container_item')
let cardsText = document.querySelectorAll('.gallery__container_item_text')



function hideForm() {
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
    form.classList.add('hide');
}

hideForm();



formExit.addEventListener('click', hideForm)

function editName() {
    form.classList.remove('hide');
};

nameEdit.addEventListener('click', editName);

form.addEventListener('submit', function (e) { e.preventDefault(); });

function saveChanges() {
    if (inputName.value.length <= 5) {
        alert('Имя не может содержать менее 5 символов')

    }

    else if (inputName.value.length >= 17) {
        alert('Имя не может содержать более 16 символов')

    }

    else {
        form.classList.add('hide');
        profileName.textContent = inputName.value;
        profileAbout.textContent = inputAbout.value;
    }
}

save.addEventListener('click', saveChanges);

function changeThemesDark() {
    themes.style.background = 'black'
    themes.style.color = 'white'
    cards.forEach(cards => {
        cards.style.background = 'white'
        cards.style.border = 'none'
    })
    cardsText.forEach(cardsText => {
        cardsText.style.color = 'black'
    })
}

function changeThemesLight() {
    themes.style.background = 'white'
    themes.style.color = 'black'
    cards.forEach(cards => {
        cards.style.background = 'black'
        cards.style.border = '1px solid black'
    })
    cardsText.forEach(cardsText => {
        cardsText.style.color = 'white'
    })
}

darkTheme.addEventListener('click', changeThemesDark);
lightTheme.addEventListener('click', changeThemesLight);

let likes = document.querySelectorAll('.gallery__container_item_text-like')


likes.forEach(like => {
    like.addEventListener('click', () => {
        like.classList.toggle('like-active')
    })
})



