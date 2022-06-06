<template>
  <section class="app">
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-xl-4 col-lg-5 col-xs-12">
          <div class="app__content wow bounceInUp">
            <p class="app__description">
              DESKTOP AND MOBILE APP
            </p>
            <h2 class="app__title">
              Plan <span>and</span> manage
            </h2>
            <p class="app__text">
              Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata. Solum patrioque no sea. Mea ex malis mollis oporteat. Eum an expetenda consequat.
            </p>
            <a href="#" class="app__view-video">
              View video
              <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 2.73354C6.66667 3.11844 6.66667 4.08069 6 4.46559L1.5 7.06367C0.833333 7.44857 0 6.96744 0 6.19764V1.00149C0 0.231691 0.833333 -0.249434 1.5 0.135467L6 2.73354Z" fill="white"/>
              </svg>
            </a>
            <a href="#" class="app__features">
              See features
            </a>
          </div>
        </div>
        <div class="col-xl-7 col-lg-7 col-xs-12">
          <div class="app__img wow bounceInUp">
            <div class="img-block">
              <img src="/assets/img/illustration.png" alt="illustration">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.app {
  background: #F5F8FF;
  padding-top: 150px;
}
.app__description {
  font-family: "Roboto", sans-serif;
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0.1em;
  color: #3D4F9F;
  padding: 70px 0 27px;
}
.app__title {
  font-family: "Quicksand", sans-serif;
  font-size: 36px;
  font-weight: 500;
  line-height: 45px;
  color: #3D4F9F;
  padding-bottom: 27px;
}
.app__title span {
  font-weight: 300;
}
.app__text {
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0.03em;
  color: #8D96BD;
  padding-bottom: 47px;
}
.app__view-video {
  font-family: "Quicksand", sans-serif;
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  padding: 13px 25px;
  background: #4C85FF;
  color: #ffffff;
  border: 1px solid #4C85FF;
}
.app__view-video:hover {
  background: transparent;
  color: #4C85FF;
}
.app__view-video:hover svg path {
  fill: #4C85FF;
}
.app__features {
  color: #ADB4D2;
  font-family: "Quicksand", sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  padding: 13px 25px;
  border: 1px solid #ADB4D2;
}
.app__features:hover {
  background: #ADB4D2;
  color: #4C85FF;
}
.app__img {
  margin-left: -5%;
}
.app__img img {
  width: 118%;
}

@media (max-width: 1400px) {
  .app__img img {
    width: 100%;
  }
}
@media (max-width: 1200px) {
  .app {
    padding-top: 100px;
  }
  .app__description {
    padding-top: 40px;
  }
  .app__img {
    margin: 0;
  }
}
@media (max-width: 992px) {
  .app__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
@media (max-width: 576px) {
  .app {
    padding-top: 50px;
  }
  .app__img {
    margin-right: 25%;
  }
  .app__img img {
    width: 120%;
  }
  .app__description {
    font-size: 13px;
  }
}
@media (max-width: 440px) {
  .app__img {
    margin: 0;
  }
  .app__img img {
    width: 100%;
  }
  .app__view-video{
    width: 60%;
    text-align: center;
    margin-bottom: 10px;
  }
  .app__features{
    width: 60%;
    text-align: center;
  }
}
</style>