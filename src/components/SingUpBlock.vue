<template>
  <section class="singUp">
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-md-5 col-lg-4">
          <div class="singUp__info">
            <h2 class="singUp__title">
              Sign up for newsletter
            </h2>
            <p class="singUp__text">
              Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu, homero alterum.
            </p>
          </div>
        </div>
        <form class="col-md-6">
          <div class="row">
            <div class="col-sm-7">
              <div class="singUp__form">
                <label>
                  <input class="singUp__input" type="email" name="email" placeholder="Email address">
                </label>
              </div>
            </div>
            <div class="col-sm-4">
              <button class="singUp__button">
                Save me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.singUp {
  padding: 118px 0;
  background: #FCFDFF;
  border-bottom: 1px solid #D8E3FE;
}
.singUp__title {
  font-family: "Quicksand", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 23px;
  color: #3D4F9F;
  padding-bottom: 18px;
}
.singUp__text {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0.03em;
  color: #8D96BD;
  padding-right: 5%;
}
.singUp__input {
  background: #EFEFF7;
  border-radius: 5px;
  padding: 21px;
  width: 100%;
  font-family: "Quicksand", sans-serif;
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  border: 1px solid #EFEFF7;
}
.singUp__input:active, .singUp__input:focus {
  box-shadow: 0 5px 15px rgba(116, 104, 255, 0.2);
  background: transparent;
}
.singUp__button {
  padding: 21px 0;
  width: 100%;
  font-family: "Quicksand", sans-serif;
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  color: #FFFFFF;
  background: #4D6CE1;
  box-shadow: 0 5px 15px rgba(116, 104, 255, 0.2);
  border-radius: 5px;
  border: 1px solid #4D6CE1;
}
.singUp__button:hover {
  background: transparent;
  color: #4D6CE1;
}
.singUp label {
  display: block;
}

@media (max-width: 767px) {
  .singUp {
    padding: 70px 0;
    text-align: center;
  }
  .singUp__info {
    padding-bottom: 30px;
  }
}
@media (max-width: 576px) {
  .singUp__form {
    padding-bottom: 10px;
  }
}
</style>