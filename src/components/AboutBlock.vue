<template>
  <section class="about">
    <div class="container">
      <div class="clouds">
        <div class="row">
          <div class="col">
            <p class="about__description">
              ABOUT US
            </p>
            <h2 class="about__title">
              Read about our app
            </h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col">
            <ul class="about__list wow pulse d-flex">
              <li class="about__item" v-for="aboutList in aboutLists" :key="aboutList">
                <p class="about__icon">
                  <svg :width="aboutList.width" :height="aboutList.height" fill="none"  xmlns="http://www.w3.org/2000/svg">
                    <path :d="aboutList.path" stroke="#4074F8" stroke-width="2.5"/>
                  </svg>
                </p>
                <p class="about__choice">{{ aboutList.title }}</p>
                <p class="about__text">
                  {{ aboutList.text }}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="about__button">
              <a href="#" class="about__read">Read more</a>
              <p class="about__or">
                <svg width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="0.5" x2="15" y2="0.5" stroke="#DAE4FE"/>
                </svg>
                <span>OR</span>
                <svg width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="0.5" x2="15" y2="0.5" stroke="#DAE4FE"/>
                </svg>
              </p>
              <a href="#" class="about__get">Get started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import aboutList from '../assets/JSON/about.json'
export default {
  name: "AboutBlock",
  data(){
    return{
      aboutLists: aboutList
    }
  }
}
</script>

<style scoped>
.about {
  padding: 140px 0;
  text-align: center;
}
.about .row {
  padding-bottom: 90px;
}
.about__description {
  font-family: "Roboto", sans-serif;
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0.1em;
  color: #3D4F9F;
  padding: 30px 0 20px;
}
.about__title {
  font-family: "Quicksand", sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  color: #3D4F9F;
}
.about__icon {
  width: 69px;
  height: 69px;
  border-radius: 35px;
  background-color: #F1F5FF;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  transition: 0.5s;
}
.about__icon:hover {
  transform: scale(1.2);
}
.about__choice {
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 25px;
  color: #4074F8;
  padding-bottom: 25px;
}
.about__text {
  font-family: "Open Sans", sans-serif;
  font-size: 11px;
  font-weight: 600;
  line-height: 19px;
  color: #ADB3CB;
}
.about__button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.about__button span {
  font-family: "Open Sans", sans-serif;
  font-size: 11px;
  font-weight: 600;
  line-height: 19px;
  color: #ADB3CB;
}
.about__button svg {
  margin: 0 16px;
}
.about__read, .about__get {
  font-family: "Quicksand", sans-serif;
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  padding: 13px 16px;
  border-radius: 2px;
}
.about__read:hover, .about__get:hover {
  transition: 0.3s;
  color: #ffffff;
}
.about__read {
  color: #D43F3F;
  background-color: #FFD7D7;
}
.about__read:hover {
  background-color: #D43F3F;
}
.about__get {
  color: #3A79FF;
  background-color: #D2E1FF;
}
.about__get:hover {
  background-color: #3A79FF;
}
.about__list {
  position: relative;
  padding-left: 0;
}
.about__item {
  width: calc(100% / 4);
  padding: 0 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about__item:not(:last-child):after {
  content: url("../../public/assets/img/Line2.1.svg");
  position: absolute;
  top: 50%;
  padding-left: 25%;
}
.about .clouds {
  height: 100%;
  background-image: url("../../public/assets/img/clouds_bg_blue.svg");
  background-size: cover;
  max-width: 1440px;
  margin: 0 auto;
}

@media (max-width: 1200px) {
  .about__item {
    padding: 0 35px;
  }
  .about .clouds {
    background-size: auto;
  }
}
@media (max-width: 992px) {
  .about__item {
    width: calc(100% / 2);
    padding-bottom: 20px;
  }
  .about__item:not(:last-child):after {
    content: none;
  }
  .about__list {
    flex-wrap: wrap;
  }
}
@media (max-width: 767px) {
  .about {
    padding: 60px 0;
  }
}
@media (max-width: 576px) {
  .about .row {
    padding-bottom: 45px;
  }
  .about__button {
    flex-direction: column;
  }
  .about__or {
    padding: 10px 0;
  }
  .about__read,
  .about__get {
    width: 60%;
  }
  .about__text {
    font-size: 18px;
    line-height: 26px;
  }
  .about__choice {
    font-size: 20px;
  }
  .about__description {
    font-size: 13px;
  }
  .about__item {
    width: 100%;
  }
}
</style>