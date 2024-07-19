function PlayApp() {
    this.menu = document.querySelector('.navbar');
    this.btnOpenMenu = document.querySelector('.menu-icon');
    this.btnCloseMenu = document.querySelector('.arrow-back');
    this.body = document.querySelector('body');


    this.play = () => {
        this.openMenu();
        this.closeMenu();
        this.openBoxVideo();
    };

    this.openMenu = () => {
        this.btnOpenMenu.addEventListener('click', () => {
            this.menu.classList.add('active');
        });
    };

    this.closeMenu = () => {
        this.btnCloseMenu.addEventListener('click', () => {
            this.menu.classList.remove('active');
        });
    };

    this.openBoxVideo = () => {
        const openBoxVideo = document.querySelector('.btn-open-box-video');

        openBoxVideo.addEventListener('click', () => {
            this.body.innerHTML += `
            <div class="wrapper-resume off" style="backdrop-filter: blur(5px);">
                <div class="container-resume">
                    <span class="close"><p>X</p></span>
                    <div class="content-container">
                        <p>No vídeo abaixo, vou te explicar o que me motivou a estudar Desenvolvimento Web e por que escolhi HTML, CSS, JS, TS e Angular.</p>
                    </div>
                </div>
            </div>`;

            this.wrapperResume = document.querySelector('.wrapper-resume');
            this.btnCloseResume = document.querySelector('.close');
    
            this.openMenuAnim = () => {
                this.wrapperResume.classList.remove('off');
                this.wrapperResume.classList.add('on');
            };
    
            setTimeout(() => {
                this.openMenuAnim();
            }, 100);

            this.closeMenuAnim = () => {
                this.wrapperResume.classList.remove('on');
                this.wrapperResume.classList.add('off');
            };

            this.btnCloseResume.addEventListener('click', () => {
                this.closeMenuAnim();
                setTimeout(() => {
                    this.body.removeChild(this.wrapperResume);
                }, 600);
            });
        });
    };
}

const play = new PlayApp();
play.play();