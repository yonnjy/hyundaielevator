
// 디자인 패튼으로 가두기
const TOP_BANNER_EVENT2 = (() => {
    return {
        work: () => {
            const TOP_BTN = document.querySelector('.top_banner i');
            const TOP_BANNER = document.querySelector('.top_banner');


            TOP_BTN.addEventListener('click', () => {
                TOP_BANNER.classList.add('on')
            })

            const MainSlide = new Swiper('.MainSlide', {});
        }
    }
})();
TOP_BANNER_EVENT2.work();






