const menu = document.querySelector('.navbar');
const btnOpenMenu = document.querySelector('.menu-icon');
const btnCloseMenu = document.querySelector('.arrow-back');
const tech = document.querySelector('#technology');
const openBoxVideo = document.querySelector('.btn-open-box-video');
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
    });
}

openBoxVideo.addEventListener('click', () => {
    tech.innerHTML += `
            <div class="wrapper-resume off" style="backdrop-filter: blur(5px);">
                <div class="container-resume">
                    <span class="close"><p>X</p></span>
                    <div class="content-container">
                        <p>No vídeo abaixo, vou te explicar o que me motivou a estudar Desenvolvimento Web, por que escolhi HTML, CSS, JS, TS e Angular e quais as próximas tecnologias que pretendo estudar.</p>
                        <video autoplay controls>
                            <source src="./assets/video/tecnologias.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
            </div>`;


    const wrapperResume = document.querySelector('.wrapper-resume');
    const btnCloseResume = document.querySelector('.close');

    setTimeout(() => {
        openBoxAnim();
    }, 100);

    btnCloseResume.addEventListener('click', () => {
        closeBoxAnim();
        setTimeout(() => {
            tech.removeChild(wrapperResume);
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
});
