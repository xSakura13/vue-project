<template>
  <section class="faq">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-xl-4 col-md-6">
          <div class="faq__info">
            <p class="faq__description">CUSTOMER HELP</p>
            <h2 class="faq__title">Frequently asked questions</h2>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-xl-8 col-lg-10">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item" v-for="accItem in accItems" :key="accItem">
              <h2 class="accordion-header" :id="accItem.id">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="accItem.target" aria-expanded="false" :aria-controls="accItem.controls">
                  {{ accItem.title }}
                </button>
              </h2>
              <div :id="accItem.controls" class="accordion-collapse collapse" :aria-labelledby="accItem.id" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body row justify-content-between align-items-center">
                  <div class="col-lg-8 col-xs-12 faq__text">
                    {{ accItem.description }}
                  </div>
                  <div class="col-lg-3 col-md-6 faq__button">
                    <btn-elem :href="href" :btn-title="btnTitle"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import accItems from '@/assets/JSON/faqAcc.json'
import btnElem from "@/components/btnElem";
export default {
  name: "FaqBlock",
  components: {
    btnElem
  },
  data(){
    return{
      accItems: accItems,
      btnTitle: 'Go to documentation',
      href: '#',
      classEl: null
    }
  }
}
</script>

<style scoped>
.faq {
  padding: 175px 0;
}
.faq__info {
  padding-bottom: 70px;
}
.faq__description {
  font-family: "Roboto", sans-serif;
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0.1em;
  color: #3D4F9F;
  padding-bottom: 20px;
}
.faq__title {
  font-family: "Quicksand", sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  color: #3D4F9F;
}
.faq__text {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0.03em;
  color: #8D96BD;
}
.faq__button {
  background-color: #E8ECF4;
  border-radius: 2px;
}
.faq__button a {
  font-family: "Quicksand", sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  text-align: center;
  color: #7382A3;
  padding: 13px 0;
  display: block;
}
.faq .accordion-body {
  padding: 0 80px 40px;
}
.faq .accordion-button {
  padding: 25px 0;
  font-family: "Quicksand", sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0.03em;
  text-align: left;
  color: #8E96B7;
  transition: 0.6s;
}
.faq .accordion-button:before {
  flex-shrink: 0;
  width: 17px;
  height: 11px;
  margin: 0 25px;
  content: "";
  background-image: url("../../public/assets/img/arrow_acc.svg");
  background-repeat: no-repeat;
  transition: .3s;
}
.faq .accordion-button:after {
  content: unset;
}
.faq .accordion-button:not(.collapsed)::before {
  background-image: url("../../public/assets/img/arrow_acc-active.svg");
}
.faq .accordion-button:not(.collapsed) {
  color: #495274;
  font-weight: 700;
  background-color: unset;
  box-shadow: unset;
}
.faq .accordion-button:focus {
  border-color: unset;
  box-shadow: unset;
}

@media (max-width: 992px) {
  .faq {
    padding: 100px 0;
  }
  .faq__text {
    padding: 0 0 20px 0;
  }
  .faq__button {
    margin: 0 auto;
  }
}
@media (max-width: 576px) {
  .faq {
    padding: 55px 0;
  }
  .faq__description {
    font-size: 13px;
  }
  .faq .accordion-body {
    padding: 0 10px 20px;
  }
  .faq .accordion-button:before {
    margin-left: 0;
  }
}
</style>