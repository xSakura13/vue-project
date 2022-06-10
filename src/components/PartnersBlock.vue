<template>
  <section class="partners wow pulse">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-9">
          <nav class="partners__list">
            <a href="#" v-for="listPartner in listPartners" :key="listPartner">
              <svg width="117" :height="listPartner.height" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" :d="listPartner.path" fill="currentColor"/>
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import listPartners from '@/assets/JSON/partners.json'
export default {
  name: "PartnersBlock",
  data(){
    return{
      listPartners: listPartners
    }
  }
}
</script>

<style scoped>
.partners {
  padding: 58px 0;
}
.partners__list {
  display: flex;
  gap: 76px;
}
.partners__list a {
  display: flex;
  align-items: flex-end;
}
.partners__list a svg path {
  fill: #D6DAE5;
}
.partners__list a:hover svg path {
  transition: 0.5s;
  fill: #5E81FE;
}

@media (max-width: 1200px) {
  .partners__list {
    gap: 0;
    justify-content: space-between;
  }
}
@media (max-width: 767px) {
  .partners__list {
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  .partners__list a {
    width: calc(100% / 3);
    justify-content: center;
  }
}
@media (max-width: 576px) {
  .partners {
    padding: 30px 0;
  }
  .partners__list a {
    width: 50%;
  }
}
</style>