<template>
  <section class="customers">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-xs-12">
          <div class="customers__info">
            <p class="customers__description">
              TESTIMONIALS
            </p>
            <h2 class="customers__title">
              Customers's quotes
            </h2>
            <p class="customers__text">
              Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an.
            </p>
          </div>
        </div>
        <div class="col-lg-6 col-xs-12">
          <div id="carouselExampleCaptions_three" class="carousel slide" data-bs-ride="false">
            <div class="carousel-indicators">
              <button v-for="customerList in customersList" :key="customerList" type="button" data-bs-target="#carouselExampleCaptions_three" :data-bs-slide-to="customerList.id" :class="customerList.active" aria-current="true"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item" :class="customerList.active" v-for="customerList in customersList" :key="customerList">
                <div class="customers__card d-block w-80">
                  <div class="carousel-caption">
                    <p class="customers__card-text">
                      {{ customerList.text }}
                    </p>
                    <div class="customers__img">
                      <img :src="customerList.src" alt="card1">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions_three" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions_three" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import customersList from "@/assets/JSON/customers.json"
export default {
  name: "CustomersBlock",
  data(){
    return {
      customersList: customersList
    }
  }
}
</script>

<style scoped>
.customers {
  background: linear-gradient(180deg, #EAF0FF 0%, #F6F9FF 100%);
  padding: 105px 0 70px 0;
}
.customers .carousel {
  height: 270px;
  overflow: hidden;
}
.customers .carousel-caption {
  bottom: unset;
  padding: unset;
}
.customers .carousel-control-next-icon,
.customers .carousel-control-prev-icon {
  background: transparent;
}
.customers .carousel-inner {
  overflow: unset;
}
.customers .carousel-indicators button {
  width: 8px;
  height: 8px;
  border-radius: 5px;
  background: #D1D6E3;
  border: unset;
  margin: 0 6px;
}
.customers .carousel-indicators .active {
  background-color: #5283FF;
}
.customers .carousel-indicators {
  margin-left: unset;
}
.customers__info {
  padding-left: 15%;
}
.customers__description {
  font-family: "Roboto", sans-serif;
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0.1em;
  text-align: left;
  color: #3D4F9F;
  padding: 30px 0;
}
.customers__title {
  font-family: "Quicksand", sans-serif;
  font-size: 36px;
  font-weight: 500;
  line-height: 45px;
  letter-spacing: 0;
  text-align: left;
  color: #3D4F9F;
  padding-bottom: 15px;
}
.customers__card {
  height: 175px;
  background: #ffffff;
  position: relative;
  padding-top: 40px;
  width: 90%;
  border: 1px solid #D8E3FE;
  transition: 0.5s;
}
.customers__card:hover {
  box-shadow: 10px 10px 25px -6px #676f95;
}
.customers__text {
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0.03em;
  text-align: left;
  color: #A4ABC8;
  max-width: 70%;
}
.customers__img {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  left: 40%;
  bottom: -6rem;
  overflow: hidden;
  transition: 1s;
}
.customers__img:hover {
  transform: scale(1.2);
}
.customers__card-text {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.03em;
  text-align: left;
  color: #676F95;
  max-width: 95%;
}

@media (max-width: 1200px) {
  .customers .carousel-indicators {
    margin-left: 15%;
  }
  .customers__card {
    width: 100%;
  }
}
@media (max-width: 992px) {
  .customers .carousel {
    overflow: unset;
  }
  .customers__info {
    padding-bottom: 50px;
  }
  .customers__card {
    width: 80%;
    height: 155px;
    margin: 0 auto;
  }
  .customers__img {
    bottom: -5rem;
  }
}
@media (max-width: 767px) {
  .customers__card-text {
    max-width: 100%;
  }
  .customers__card {
    height: 180px;
  }
}
@media (max-width: 576px) {
  .customers {
    padding: 50px 0;
  }
  .customers .carousel {
    height: 300px;
  }
  .customers__info {
    padding: 0 0 50px 0;
  }
  .customers__description {
    font-size: 13px;
    text-align: center;
  }
  .customers__title {
    font-size: 24px;
    line-height: 30px;
    text-align: center;
  }
  .customers__card {
    width: 100%;
  }
  .customers__text {
    max-width: 100%;
    text-align: center;
  }
  .customers__img {
    left: 35%;
  }
}
</style>