const header = document.querySelector('.header')
fetch('/header.html')
    .then(res => res.text())
    .then(data => {
        header.innerHTML = data;
    })

const footer = document.querySelector('.footer')
fetch('/footer.html')
    .then(res => res.text())
    .then(data => {
        footer.innerHTML = data
    })


/*
 * Modules
 */


import { swiper } from './swiper.js'

setTimeout(() => {
    const signButton = document.getElementById('sign');
    const formPopup = document.querySelector('.popup');

    signButton.addEventListener("click", function onClick(event) {
        formPopup.classList.toggle("is-visible")
        event.preventDefault();
    });

    document.querySelector('.popup__close').addEventListener('click', function () {
        formPopup.classList.remove("is-visible");
    });

}, "1000");


setTimeout(() => {
    const sidebarButton = document.getElementById('sidebar');
    const sidebarMenu = document.querySelector(".sidebar-menu")

    sidebarButton.addEventListener("click", function onClick(event) {
        sidebarMenu.classList.toggle("is-active")

        event.preventDefault();
    })

    document.querySelector(".sidebar__close").addEventListener("click", function () {
        sidebarMenu.classList.remove("is-active")
    })
}, "1000")

setTimeout(() => {
    const navBtn = document.querySelector(".nav-trigger")
    const mobileContent = document.querySelector(".header__content")

    navBtn.addEventListener("click", function onClick(event) {
        mobileContent.classList.toggle("is-visible")

        this.classList.toggle("is-active")

        event.preventDefault();
    });

}, "1000")


setTimeout(() => {
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

    });

}, "100")



const calculate = document.getElementById('calculate')
const clear = document.getElementById('clear')
const result = document.getElementById('result')
const weightInput = document.getElementById('weight')
const heightInput = document.getElementById('height')
const score = document.getElementById('score')
const category = document.getElementById('category')

const categoryBmi = bmi => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 15.5 && bmi < 24.9) return 'Normal'
    if (bmi >= 25 && bmi < 24.9) return 'Overweight'
    return 'Obese'
}

const calculateBmi = () => {
    if (weightInput.value == '' || heightInput.value == "") return alert('input cant be empty')

    const weight = parseFloat(weightInput.value)
    const height = parseFloat(heightInput.value) / 100

    const bmi = weight / (height * height)

    score.innerText = bmi.toFixed(2)
    category.innerText = categoryBmi(bmi)

    score.style.color = '#FF0336';
    category.style.color = '#FF0336';
}

calculate.addEventListener('click', () => calculateBmi())

clear.addEventListener('click', () => {
    weightInput.value = '';
    heightInput.value = '';
    score.innerText = '';
    category.innerText = '';
});

