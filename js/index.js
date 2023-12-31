const header = document.querySelector('.header')
fetch('/header.html')
    .then(res => res.text())
    .then(data => {
        header.innerHTML = data

    })

const footer = document.querySelector('.footer')
fetch('/footer.html')
    .then(res => res.text())
    .then(data => {
        footer.innerHTML = data
    })

const intro = document.querySelector('.intro')
fetch('/intro.html')
    .then(res => res.text())
    .then(data => {
        intro.innerHTML = data
    })


const schedule = document.addEventListener("DOMContentLoaded", function () {
    const tabLinks = document.querySelectorAll('.tabs__head ul li');
    const tabs = document.querySelectorAll('.tabs__body .tab');

    for (let i = 1; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }

    tabLinks.forEach((tab, index) => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();

            tabs.forEach(tab => {
                tab.style.display = 'none';
            });

            tabs[index].style.display = 'block';

            tabLinks.forEach(link => {
                link.classList.remove('is-current');
            });
            tab.classList.add('is-current');
        });
    });
});


const accordion = document.querySelectorAll(".accordion__head")

accordion.forEach((category) => {
    category.addEventListener('click', () => {
        const categoryActive = document.querySelector('.accordion__head.active')

        if (categoryActive && categoryActive !== category) {
            categoryActive.classList.toggle('active')
            categoryActive.nextElementSibling.style.maxHeight = 0
        }

        category.classList.toggle("active")

        const bodyContent = category.nextElementSibling

        if (category.classList.contains('active')) {
            bodyContent.style.maxHeight = bodyContent.scrollHeight + 'px'
        } else {
            bodyContent.style.maxHeight = 0;
        }
    })
})


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
    function updateHeading() {
        const currentPath = window.location.pathname;
        let headingText = 'About';

        if (currentPath === '/schedule') {
            headingText = 'Schedule';
        } else if (currentPath === '/blog') {
            headingText = 'Blog';
        } else if (currentPath === '/classes') {
            headingText = 'Classes';
        } else if (currentPath === '/contact') {
            headingText = 'Contact';
        }

        document.querySelector('.intro__title').textContent = headingText;
    }

    updateHeading();

    window.onpopstate = updateHeading;

}, "200")


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











