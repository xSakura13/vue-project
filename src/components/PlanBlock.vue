<template>
  <section class="plan">
    <div class="plan__clouds">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-8 col-lg-10">
            <p class="plan__description">
              PLAN YOUR LIFE
            </p>
            <h2 class="plan__title">
              Get <span>started</span> now
            </h2>
            <p class="plan__text">
              Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.
            </p>
            <div class="plan__button">
              <a class="plan__view" href="#">View pricing</a>
              <a class="plan__read" href="#">Read documentation</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.plan {
  background: linear-gradient(229.32deg, #6888FF 12.77%, #5E80FF 73.11%);
}
.plan__clouds {
  padding: 91px 0;
  background-image: url("../../public/assets/img/clouds_plan.svg");
  background-size: cover;
}
.plan__description {
  font-family: "Roboto", sans-serif;
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0.1em;
  text-align: center;
  color: #ffffff;
  padding-bottom: 16px;
}
.plan__title {
  font-family: "Quicksand", sans-serif;
  font-size: 48px;
  font-weight: 300;
  line-height: 60px;
  text-align: center;
  color: #ffffff;
  padding-bottom: 28px;
}
.plan__title span {
  font-weight: 500;
}
.plan__text {
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0.03em;
  text-align: center;
  color: #ffffff;
  padding-bottom: 40px;
}
.plan__button {
  text-align: center;
}
.plan__button a {
  font-family: "Quicksand", sans-serif;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  padding: 13px;
}
.plan__view {
  font-weight: 700;
  color: #565F82;
  border: 1px solid #FFFFFF;
  background: #FFFFFF;
}
.plan__view:hover {
  box-shadow: 0 5px 15px #6480E8;
  color: #FFFFFF;
  background: transparent;
}
.plan__read {
  color: #C7D3FF;
  font-weight: 500;
  border: 1px solid #C7D3FF;
}
.plan__read:hover {
  color: #6888FF;
  background: #C7D3FF;
  box-shadow: 0 5px 15px #6480E8;
}

@media (max-width: 576px) {
  .plan__description {
    font-size: 13px;
  }
  .plan__button{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .plan__read,
  .plan__view{
    width: 60%;
  }
}
</style>