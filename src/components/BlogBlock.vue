<template>
  <section class="blog">
    <div class="container">
      <div class="row">
        <div class="col">
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" v-for="blogList in blogLists" :key="blogList.id" data-bs-target="#carouselExampleCaptions" :data-bs-slide-to="blogList.id" :class="blogList.active" aria-current="true" aria-label="Slide 1"></button>
            </div>
            <div class="carousel-inner h-100">
              <div class="carousel-item" :class="blogList.active" v-for="blogList in blogLists" :key="blogList">
                <div class="d-block w-100"></div>
                <div class="carousel-caption">
                  <h5 class="blog__description">{{ blogList.description }}</h5>
                  <p class="blog__title">{{ blogList.title }}</p>
                  <div class="row blog__card">
                    <div class="col blog__img">
                      <div class="blog__left_img">
                        <img :src="blogList.src.first" alt="photo1">
                      </div>
                      <div class="blog__right_img">
                        <div class="first_child_img">
                          <img :src="blogList.src.second" alt="photo2">
                        </div>
                        <div class="second_child_img">
                          <img :src="blogList.src.third" alt="photo3">
                        </div>
                      </div>
                    </div>
                    <div class="col blog__info">
                      <h2 class="blog__info-title">
                        {{ blogList.info.title }}
                      </h2>
                      <p class="blog__info-text">
                        {{ blogList.info.text}}
                      </p>
                      <btn-elem :href="btnOne.href" :btn-title="btnOne.btnTitle" :class-el="btnOne.classEl"/>
                      <btn-elem :href="btnTwo.href" :btn-title="btnTwo.btnTitle" :class-el="btnTwo.classEl"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Предыдущий</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Следующий</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import blogLists from '@/assets/JSON/blog.json'
import btnElem from "@/components/btnElem";
export default {
  name: "BlogBlock",
  components: {
    btnElem
  },
  data(){
    return{
      blogLists: blogLists,
      btnOne: {
        btnTitle: 'Read now',
        href: '#',
        classEl: 'blog__info-read'
      },
      btnTwo: {
        btnTitle: 'Add to your bookmarks',
        href: '#',
        classEl: 'blog__info-add'
      }
    }
  }
}
</script>

<style scoped>
.blog {
  padding: 104px 0;
  background: #F5F8FF;
}
.blog .carousel {
  height: 650px;
}
.blog .carousel-caption {
  top: 0;
  width: 80%;
  left: 10%;
}
.blog .carousel-control-prev {
  bottom: -15%;
  left: -5%;
}
.blog .carousel-control-next {
  bottom: -15%;
  right: -5%;
}
.blog .carousel-control-prev-icon {
  background-image: url("../../public/assets/img/arrow.svg");
}
.blog .carousel-control-next-icon {
  background-image: url("../../public/assets/img/arrow.svg");
  transform: rotate(180deg);
}
.blog .carousel-indicators button {
  width: 8px;
  height: 8px;
  border-radius: 5px;
  background: #D1D6E3;
  border: unset;
  margin: 0 6px;
}
.blog .carousel-indicators .active {
  background-color: #5283FF;
}
.blog__description {
  font-family: "Roboto", sans-serif;
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0.1em;
  text-align: center;
  color: #3D4F9F;
  padding-bottom: 20px;
}
.blog__title {
  font-family: "Quicksand", sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
  color: #3D4F9F;
  padding-bottom: 90px;
}
.blog__card {
  background: #ffffff;
  padding: 60px 35px;
}
.blog__img {
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
}
.blog__right_img {
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 27px;
}
.blog__right_img .first_child_img,
.blog__right_img .second_child_img {
  position: relative;
  box-shadow: 0 15px 100px 0 #E5EBF8;
  height: fit-content;
  transition: 1s;
}
.blog__right_img .first_child_img:hover,
.blog__right_img .second_child_img:hover {
  transform: scale(1.2);
  z-index: 10;
}
.blog__right_img .first_child_img:after,
.blog__right_img .second_child_img:after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px;
}
.blog__right_img .first_child_img:after {
  background: linear-gradient(27.48deg, rgba(255, 53, 53, 0.48) 14.02%, rgba(255, 179, 90, 0) 68%);
}
.blog__right_img .second_child_img:after {
  background: linear-gradient(13.49deg, rgba(53, 170, 255, 0.68) 11.59%, rgba(90, 136, 255, 0) 96.88%);
}
.blog__left_img {
  width: calc(70% - 13px);
  position: relative;
  box-shadow: 0 15px 100px 0 #E5EBF8;
  height: fit-content;
  border-radius: 5px;
  transition: 1s;
}
.blog__left_img:hover {
  transform: scale(1.2);
  z-index: 10;
}
.blog__left_img:after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 5px;
  top: 0;
  left: 0;
  background: linear-gradient(13.46deg, rgba(255, 199, 53, 0.44) 1.89%, rgba(255, 227, 154, 0.93) 1.9%, rgba(255, 159, 90, 0) 68.24%);
}
.blog__info {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
.blog__info-title {
  font-family: "Quicksand", sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 45px;
  text-align: left;
  color: #3D4F9F;
  padding-bottom: 30px;
}
.blog__info-text {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 27px;
  text-align: left;
  letter-spacing: 0.05em;
  color: #8D96BD;
  padding-bottom: 50px;
}
.blog__info-read {
  padding: 12px 16px;
  background: #D2E1FF;
  color: #3A79FF;
  border: 1px solid #D2E1FF;
}
.blog__info-read:hover {
  transition: 0.3s;
  background: #3A79FF;
  color: #ffffff;
}
.blog__info-add {
  padding: 12px 16px;
  color: #A6B6DA;
}
.blog__info-add:hover {
  border: 1px solid #A6B6DA;
  transition: 0.3s;
  color: #9399AB;
}

@media (max-width: 1300px) {
  .blog .carousel-control-prev {
    left: -1%;
  }
  .blog .carousel-control-next {
    right: -1%;
  }
}
@media (max-width: 1200px) {
  .blog .carousel {
    height: 700px;
  }
  .blog__img {
    width: fit-content;
  }
  .blog__right_img {
    flex-direction: unset;
    width: 70%;
  }
  .blog__right_img .first_child_img,
  .blog__right_img .second_child_img{
    width: 50%;
  }
  .blog__info {
    width: fit-content;
  }
  .blog__card {
    padding: 35px;
  }
}
@media (max-width: 992px) {
  .blog__card {
    padding: 35px 10px;
  }
  .blog .carousel-control-prev {
    left: -5%;
  }
  .blog .carousel-control-next {
    right: -5%;
  }
  .blog__right_img,
  .blog__left_img{
    width: 100%;
  }
}
@media (max-width: 767px) {
  .blog .carousel {
    height: 750px;
  }
  .blog__img {
    flex-wrap: unset;
  }
  .blog__right_img {
    flex-direction: column;
    justify-content: space-between;
    width: 40%;
    gap: 0;
  }
  .blog__left_img{
    width: 60%;
  }
  .blog__right_img .first_child_img,
  .blog__right_img .second_child_img {
    width: 70%;
  }
  .blog__card {
    flex-direction: column;
    padding: 25px 10px;
    align-items: center;
  }
  .blog__info-text {
    padding-bottom: 10px;
  }
  .blog__title {
    padding-bottom: 50px;
  }
}
@media (max-width: 576px) {
  .blog {
    padding: 50px 0;
  }
  .blog .carousel {
    height: 800px;
  }
  .blog .carousel-control-prev,
  .blog .carousel-control-next {
    display: none;
  }
  .blog__card {
    padding: 10px;
  }
  .blog__info-read, .blog__info-add {
    width: 100%;
  }
  .blog__info-text {
    padding-bottom: 20px;
  }
  .blog__info-title {
    padding-bottom: 15px;
  }
  .blog__description {
    font-size: 13px;
  }
}
</style>