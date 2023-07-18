const TOP_BANNER = document.querySelector('.TopBanner');
const TOP_BANNER_BTN = document.querySelector('.TopBanner span');

TOP_BANNER_BTN.addEventListener('click', () => {
    TOP_BANNER.classList.add('on');
});

const HEADER = document.querySelector('.Header');

window.addEventListener('scroll', () => {
    // scroll값을 구해서 0 이상이면 on을 붙임
    const SCT = window.scrollY;

    SCT > 0 ? HEADER.classList.add('on') : HEADER.classList.remove('on');

    console.log(SCT);
});

//main_slide
const SLIDE_NUM = document.querySelector('.slide_num strong');
const SLIDE_NUM_T = document.querySelector('.slide_num span');
const SLIDE_LIST = document.querySelectorAll('.MainVisual .list li');

const MAIN_SLIDE = new Swiper('.main_slide', {
    loop: true,
    slideActiveClass: 'on',
    on: {
        init: function () {
            SLIDE_NUM.innerHTML = "0" + (this.realIndex + 1);
            SLIDE_NUM_T.innerHTML = "0" + (this.slides.length);
        },

        slideChangeTransitionStart: function () {
            SLIDE_NUM.innerHTML = "0" + (this.realIndex + 1);
            // SLIDE_NUM_T.innerHTML = "0" + (this.slides.length);

            // e el elm it 다 똑같음 이름은 상관없어 순서대로 this, 숫자임
            // ()=>{} 에서 (it, idx)=>{} 이런거 다 떼고 it => it.aaa 할수있음
            SLIDE_LIST.forEach(it => it.classList.remove('on'));
            SLIDE_LIST[this.realIndex].classList.add('on');
        }
    }
});

SLIDE_LIST.forEach((it, idx) => {
    it.addEventListener('click', e => {
        e.preventDefault();
        MAIN_SLIDE.slideTo(idx);
    });
});