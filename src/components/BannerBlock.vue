<template>
  <section class="banner">
    <div class="banner__position_bg">
      <div class="banner__clouds">
        <div class="container">
          <div class="row">
            <div class="col">
              <div id="carouselExampleCaptions_banner" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button v-for="bannerSlide in bannerSlides" :key="bannerSlide.id" type="button" data-bs-target="#carouselExampleCaptions_banner" :data-bs-slide-to="bannerSlide.id" :class="bannerSlide.block" aria-current="true"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item" :class="bannerSlide.block" v-for="bannerSlide in bannerSlides" :key="bannerSlide.id">
                    <div class="d-block w-100"></div>
                    <div class="carousel-caption">
                      <div class="banner__item-wrapper d-flex flex-column align-items-center">
                        <h2 class="banner__description">{{ bannerSlide.description }}</h2>
                        <h1 class="banner__title">{{ bannerSlide.title }}</h1>
                        <p class="banner__text">{{ bannerSlide.text }}</p>
                        <p class="banner__play">
                          <button :id="bannerSlide.id" @click="popup($event)">
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.23077 4.17675C10.2564 4.76486 10.2564 6.23514 9.23077 6.82325L2.30769 10.793C1.28205 11.3811 0 10.646 0 9.46976V1.53024C0 0.354015 1.28205 -0.381125 2.30769 0.206988L9.23077 4.17675Z" fill="#5E81FF"/>
                            </svg>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions_banner"  data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Предыдущий</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions_banner"  data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Следующий</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="banner__gradient d-none d-md-block">
          <img alt="gradient" src="/assets/img/gradient.png">
          <div class="banner__svg_points">
            <div class="svg_circle one"></div>
            <div class="svg_circle two"></div>
            <div class="svg_circle three"></div>
            <div class="svg_circle four"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import bannerSlides from '../assets/JSON/banner.json'
import modal from '../assets/scripts/popup'

export default {
  name: "BannerBlock",
  data(){
    return{
      bannerSlides: bannerSlides
    }
  },
  methods:{
    popup(e){
      modal.open()
      modal.getVideo(e)
    }
  }
}
</script>

<style scoped>
.banner {
  background: linear-gradient(180deg, #F4F7FF 0%, #F1F5FF 100%);
  height: 80vh;
  overflow: hidden;
  border: 1px solid #D8E3FE;
}
.banner .carousel {
  height: 80vh;
}
.banner .carousel-indicators button {
  width: 8px;
  height: 8px;
  border-radius: 5px;
  background: #D1D6E3;
  border: unset;
  margin: 0 6px;
}
.banner .carousel-control-next, .banner .carousel-control-prev {
  display: none;
}
.banner .carousel-indicators .active {
  background-color: #5283FF;
}
.banner .carousel-indicators {
  bottom: 2em;
  z-index: 10;
}
.banner__gradient {
  position: absolute;
  bottom: 0;
}
.banner .carousel-item,
.banner .carousel-inner {
  height: 100%;
}
.banner .carousel-caption {
  bottom: unset;
}
.banner__svg_points {
  display: flex;
  justify-content: space-around;
  background: linear-gradient(360deg, rgba(75, 113, 255, 0) 51.87%, rgba(107, 137, 248, 0.4) 380.88%);
  height: 20px;
}
.banner__svg_points .svg_circle {
  width: 15px;
  height: 15px;
  border-radius: 20px;
  border: 2px solid #5E80FE;
  background: #ffffff;
  box-shadow: 0 0 15px rgba(82, 131, 255, 0.25);
  position: relative;
}
.banner__svg_points .svg_circle:hover:after {
  content: url("../../public/assets/img/speed_icon.svg");
  position: absolute;
  top: -110px;
  left: -70px;
}
.banner__svg_points .svg_circle.one {
  position: absolute;
  left: 10%;
  bottom: 8%;
}
.banner__svg_points .svg_circle.two {
  position: absolute;
  left: 34%;
  bottom: 15%;
}
.banner__svg_points .svg_circle.three {
  position: absolute;
  left: 62%;
  bottom: 58%;
}
.banner__svg_points .svg_circle.four {
  position: absolute;
  right: 12%;
  top: 16%;
}
.banner__position_bg {
  position: relative;
  height: 100%;
}
.banner__clouds {
  background-image: url("../../public/assets/img/clouds_bg.svg");
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
}
.banner__description {
  font-family: "Roboto", sans-serif;
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0.1em;
  color: #3D4F9F;
  padding: 90px 0 16px 0;
}
.banner__title {
  font-family: "Quicksand", sans-serif;
  font-size: 48px;
  font-weight: 400;
  line-height: 60px;
  color: #3D4F9F;
  padding-bottom: 28px;
}
.banner__text {
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0.03em;
  color: #8D96BD;
  padding-bottom: 20px;
}
.banner__play {
  position: relative;
  z-index: 10;
  transition: 0.3s;
}
.banner__play button {
  padding-left: 2px;
  border: 1px solid #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #ffffff;
}
.banner__play:hover {
  transform: scale(1.2);
}
@media (min-width: 1900px) {
  .banner__svg_points .svg_circle.one {
    bottom: 6%;
  }
  .banner__svg_points .svg_circle.two {
    bottom: 14%;
  }
}
@media (min-width: 1600px) {
  .banner__svg_points .svg_circle.one {
    bottom: 7%;
  }
}
@media (max-width: 1200px) {
  .banner {
    height: 500px;
  }
  .banner .carousel {
    height: 500px;
  }
}
@media (max-width: 992px) {
  .banner__svg_points .svg_circle.one {
    bottom: 9%;
  }
  .banner__svg_points .svg_circle.two {
    bottom: 17%;
  }
  .banner__description {
    padding-top: 50px;
  }
  .banner__title {
    font-size: 40px;
  }
}
@media (max-width: 767px) {
  .banner__description {
    padding-top: 50px;
  }
  .banner__title {
    font-size: 40px;
  }
}
@media (max-width: 576px) {
  .banner__description {
    padding-top: 25px;
    font-size: 13px;
  }
  .banner__title {
    font-size: 30px;
    line-height: 40px;
  }
  .banner__text {
    line-height: 25px;
  }
}
</style>