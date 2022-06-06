<template>
  <section class="analytics">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <div class="analytics__productivity wow slideInLeft">
            <div class="analytics__icon">
              <svg width="67" height="68" viewBox="0 0 67 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 33.625C2 16.159 16.2412 2 33.8085 2C37.0463 2 40.1712 2.48098 43.1147 3.375" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.9628 40.4307C30.7436 44.1895 36.873 44.1895 40.6537 40.4307C44.4343 36.6719 60.0847 10.2499 58.7018 8.87494C57.3188 7.49994 30.7436 23.0602 26.9628 26.819C23.1823 30.5778 23.1823 36.6719 26.9628 40.4307ZM33.808 36.3751C35.3356 36.3751 36.5742 35.1439 36.5742 33.6251C36.5742 32.1063 35.3356 30.8751 33.808 30.8751C32.2805 30.8751 31.0422 32.1063 31.0422 33.6251C31.0422 35.1439 32.2805 36.3751 33.808 36.3751Z" fill="white"/>
                <ellipse cx="6.14901" cy="50.125" rx="2.76596" ry="2.75" fill="white"/>
                <ellipse cx="17.2127" cy="61.125" rx="2.76596" ry="2.75" fill="white"/>
                <ellipse cx="33.8084" cy="65.25" rx="2.76596" ry="2.75" fill="white"/>
                <ellipse cx="50.4041" cy="61.125" rx="2.76596" ry="2.75" fill="white"/>
                <ellipse cx="60.085" cy="50.125" rx="2.76596" ry="2.75" fill="white"/>
                <ellipse cx="64.234" cy="33.625" rx="2.76596" ry="2.75" fill="white"/>
              </svg>
            </div>
            <p class="analytics__amount productivity-amount"><span id="productivity-amount" >89</span>%</p>
            <p class="analytics__text productivity-text">
              Customers who have increased their productivity
            </p>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="analytics__users wow slideInRight">
            <div class="analytics__icon">
              <svg width="75" height="66" viewBox="0 0 75 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="28.6252" cy="17.5" rx="15.6369" ry="15.5" stroke="#5E80FF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M55.2501 64.0001C55.2501 49.6556 43.3296 38.0271 28.625 38.0271C13.9204 38.0271 2 49.6556 2 64.0001" stroke="#5E80FF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <ellipse cx="62.0117" cy="20.2229" rx="6.45334" ry="6.49324" stroke="#5E80FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M72.9999 39.7027C72.9999 33.6935 68.0804 28.8221 62.0118 28.8221C55.9432 28.8221 51.0237 33.6935 51.0237 39.7027" stroke="#5E80FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p class="analytics__amount users-amount"><span id="users-amount">3120</span></p>
            <p class="analytics__text users-text">
              Users who have used our application
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AnalyticsBlock"
}
</script>

<style scoped>
.analytics {
  overflow: hidden;
}
.analytics__productivity {
  padding: 66px 50px 66px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  background: linear-gradient(229.32deg, #6888FF 12.77%, #5E80FF 73.11%);
}
.analytics__productivity:before {
  position: absolute;
  left: -30%;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(229.32deg, #6888FF 12.77%, #5E80FF 73.11%);
  content: "";
  z-index: -1;
}
.analytics__users {
  padding: 66px 0 66px 50px;
  position: relative;
  height: 100%;
  background: linear-gradient(101.48deg, #E9EFFF 41.56%, #E0E9FF 81.53%);
}
.analytics__users:after {
  position: absolute;
  right: -30%;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(101.48deg, #E9EFFF 41.56%, #E0E9FF 81.53%);
  content: "";
  z-index: -1;
}
.analytics__amount {
  font-family: "Quicksand", sans-serif;
  font-size: 48px;
  font-weight: 400;
  line-height: 83px;
  letter-spacing: 0.03em;
}
.analytics .users-amount,
.analytics .users-text {
  color: #5E80FF;
  text-align: left;
}
.analytics .productivity-amount,
.analytics .productivity-text {
  color: #ffffff;
  text-align: right;
}
.analytics .row > * {
  padding: 0;
}
.analytics__text {
  font-family: "Quicksand", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0.03em;
  width: 45%;
}

@media (max-width: 1200px) {
  .analytics__text {
    width: 70%;
  }
}
@media (max-width: 992px) {
  .analytics__text {
    width: 80%;
  }
}
@media (max-width: 767px) {
  .analytics__productivity {
    padding-right: 30px;
  }
  .analytics__users {
    padding-left: 30px;
  }
  .analytics__text {
    width: 100%;
  }
}
@media (max-width: 576px) {
  .analytics__productivity {
    align-items: center;
    padding-right: 0;
  }
  .analytics__productivity:before {
    left: -40%;
    background: #5E80FF 73.11%;
  }
  .analytics__productivity:after {
    position: absolute;
    top: 0;
    right: -40%;
    display: block;
    width: 100%;
    height: 100%;
    background: #6888FF 12.77%;
    content: "";
    z-index: -1;
  }
  .analytics__users {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 0;
  }
  .analytics__users:after {
    right: -40%;
    background: #E0E9FF 81.53%;
  }
  .analytics__users:before {
    position: absolute;
    top: 0;
    left: -40%;
    display: block;
    width: 100%;
    height: 100%;
    background: #E9EFFF 41.56%;
    content: "";
    z-index: -1;
  }
  .analytics .productivity-text,
  .analytics .users-text {
    text-align: center;
  }
}
</style>