const menu = document.querySelector('.navbar');
const btnOpenMenu = document.querySelector('.menu-icon');
const btnCloseMenu = document.querySelector('.arrow-back');
const certificates = document.querySelector('#certificates');
const openBox = document.querySelectorAll('.btn-open-box');
const a = document.getElementsByClassName('item');

btnOpenMenu.addEventListener('click', () => {
    menu.classList.add('active');
});

btnCloseMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});

for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('click', () => {
        menu.classList.remove('active');
        if (a[i].classList.contains('personal')) openPersonal();
    });
}

for (let i = 0; i < openBox.length; i++) {
    openBox[i].addEventListener('click', event => {
        const e = event.target;
        if (e.classList.contains('personal')) openPersonal();
    });
}

function openPersonal() {
    const wrapperResume = document.createElement('div');
    wrapperResume.classList.add('wrapper-resume', 'off');
    wrapperResume.style.backdropFilter = 'blur(5px)';

    wrapperResume.innerHTML = `
        <div class="container-resume">
            <span class="close"><a>X</a></span>
            <div class="content-container">
                <h1>Conheça meus gostos pessoais</h1>

                <div class="personal-tastes">
                    <div class="personal-taste">
                        <img src="./assets/img/dog.png" alt="Cachorro">
                        <p>Cuidar do cachorro</p>
                    </div>
    
                    <div class="personal-taste">
                        <img src="./assets/img/plant.png" alt="Natureza">
                        <p>Cuidar da natureza</p>
                    </div>
    
                    <div class="personal-taste">
                        <img src="./assets/img/book.png" alt="Clube do livro">
                        <p>Participar do clube do livro</p>
                    </div>

                    <div class="personal-taste">
                        <img src="./assets/img/jesus.png" alt="Jesus">
                        <p>Ir à igreja</p>
                    </div>
                    
                    <div class="personal-taste">
                        <img src="./assets/img/friendship.png" alt="Amigos e família">
                        <p>Visitar família e amigos</p>
                    </div>
    
                    <div class="personal-taste">
                        <img src="./assets/img/watching-a-movie.png" alt="Assistir">
                        <p>Assistir séries e filmes</p>
                    </div>
                </div>
            </div>
        </div>`;

    certificates.appendChild(wrapperResume);
    animationBox();
}

function animationBox() {
    const wrapperResume = document.querySelector('.wrapper-resume');
    const btnCloseResume = document.querySelector('.close');

    setTimeout(() => {
        openBoxAnim();
    }, 100);

    btnCloseResume.addEventListener('click', () => {
        closeBoxAnim();
        setTimeout(() => {
            certificates.removeChild(wrapperResume);
        }, 600);
    });

    function openBoxAnim() {
        wrapperResume.classList.remove('off');
        wrapperResume.classList.add('on');
    };

    function closeBoxAnim() {
        wrapperResume.classList.remove('on');
        wrapperResume.classList.add('off');
    };
}