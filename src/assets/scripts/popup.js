export default {
    open() {
        document.querySelector('#popup').classList.add('open');
        document.querySelector('#popup .popup__close svg').classList.add('open');
        document.querySelector('#popup .popup__content').classList.add('open');
        document.querySelector('#popup .popup__wrapper').classList.add('open');
        document.querySelector('#popup .overlay').classList.add('open');
        pageOffset =  pageYOffset;
        window.addEventListener('scroll', this.scrollListener);
    },
    close() {
        setTimeout(function () {
            document.querySelector('#popup').classList.remove('open');
        }, 300);
        document.querySelector('#popup .popup__close svg').classList.remove('open');
        document.querySelector('#popup .popup__content').classList.remove('open');
        document.querySelector('#popup .popup__wrapper').classList.remove('open');
        document.querySelector('#popup .overlay').classList.remove('open');
        let getIframe = document.querySelectorAll('#popup .popup__video iframe');
        getIframe.forEach(item => {
            if(item.classList.contains("show")) return item.classList.remove("show")
        })
        window.removeEventListener('scroll', this.scrollListener);

    },
    scrollListener(){
        window.scrollTo(0, pageOffset);
    },
    getVideo(e){
        const getIframe = document.querySelectorAll('#popup .popup__video iframe')
        getIframe.forEach((item) => {
            if (e.target.id === item.id) return item.classList.add("show");
        })
    }
};
let pageOffset;