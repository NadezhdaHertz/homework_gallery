const mobileButtons = document.querySelector('#mobileButtons')
const mobileMenu = document.querySelector('#mobileMenu')

mobileButtons.addEventListener('click', (event) => { menuAct() })

function menuAct() {
    if (mobileMenu.classList.value == 'mobile-menu__container active') {
        mobileMenu.classList.remove('active')
        mobileButtons.classList.remove('act')

    }
    else {
        mobileMenu.classList.add('active')
        mobileButtons.classList.add('act')
    }
}

function run() {
    /* Config */
    const width = 130;
    const count = 1;

    const carusel = document.getElementById('carusel');
    const first_photo = document.getElementById('first_photo');
    const second_photo = document.getElementById('second_photo');
    const third_photo = document.getElementById('third_photo');

    const list = carusel.querySelector('ul');
    const listItemsCount = carusel.querySelectorAll('li').length;

    let position = 0;

    const first = carusel.querySelector('.first');
    const second = carusel.querySelector('.second');
    const third = carusel.querySelector('.third');


    var i = 1;

    function change_photo() {
        if (i == 4) { i = 1 }

        if (i == 1) {
            first_photo.classList.add('act');
            first.classList.add('act');
            second_photo.classList.remove('act');
            second.classList.remove('act')
            third_photo.classList.remove('act');
            third.classList.remove('act');
        }

        if (i == 2) {
            first_photo.classList.remove('act');
            first.classList.remove('act');
            second_photo.classList.add('act');
            second.classList.add('act');
            third_photo.classList.remove('act');
            third.classList.remove('act');
            console.log(2)
        }

        if (i == 3) {
            first_photo.classList.remove('act');
            first.classList.remove('act')
            second_photo.classList.remove('act');
            second.classList.remove('act');
            third_photo.classList.add('act');
            third.classList.add('act');
            console.log(3)
        }
    }
    /*  setInterval(() => {
          i = i + 1;
          change_photo()
      }, 4000) */

    first.addEventListener('click', () => {
        i = 1;
        change_photo();
    })

    second.addEventListener('click', () => {
        i = 2;
        change_photo();
    })

    third.addEventListener('click', () => {

        i = 3;
        change_photo();
    })

}

window.onload = run;