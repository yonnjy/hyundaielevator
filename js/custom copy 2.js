const TOP_BANNER_EVENT = () => {
    const TOP_BTN = document.querySelector('.top_banner i');
    const TOP_BANNER = document.querySelector('.top_banner');


    TOP_BTN.addEventListener('click', () => {
        TOP_BANNER.classList.add('on')
    })

    const MainSlide = new Swiper('.MainSlide', {});
}


(function () {
    TOP_BANNER_EVENT();
})();





