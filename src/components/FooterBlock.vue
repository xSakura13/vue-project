<template>
  <footer class="footer">
    <nav class="navbar navbar-expand-md navbar-light header-navbar">
      <div class="container">
        <div class="row w-100">
          <div class="col d-flex flex-wrap align-items-center">
            <LogoCompany />
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup_footer">
              <div class="navbar-nav menu-page">
                <MenuList/>
              </div>
            </div>
            <div class="collapse navbar-collapse menu-right" id="navbarNavAltMarkup1_footer">
              <div class="navbar-nav menu-icon">
                <MenuIcons />
                <btnElem :class-el="classEl" :btn-title="btnTitle" :href="href"/>
              </div>
            </div>
            <div class="footer__text">
              <p class="footer__info">
                Copyright © 2018 by Random site
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </footer>
</template>

<script>
import LogoCompany from "@/components/LogoCompany";
import MenuList from "@/components/MenuList";
import MenuIcons from "@/components/MenuIcons";
import btnElem from "@/components/btnElem";
export default {
  components: {
    LogoCompany,
    MenuList,
    MenuIcons,
    btnElem
  },
  data() {
    return {
      btnTitle: 'Get started',
      href: 'https://vuejs.org/guide/components/props.html#props-declaration',
      classEl: [ 'nav-link', 'menu-button']
    }
  }
}</script>

<style scoped>
.footer {
  padding: 90px 0;
}
.footer__text {
  width: 100%;
}
.footer__info {
  font-family: "Quicksand", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0.05em;
  text-align: left;
  color: #AEB8D0;
  padding: 28px 0 0 100px;
}

@media (max-width: 992px) {
  .footer__info {
    padding-left: 60px;
  }
}
@media (max-width: 767px) {
  .footer {
    padding: 45px 0;
  }
  .footer__info {
    padding-top: 0;
  }
  .footer__text {
    width: 80%;
    display: flex;
    align-items: center;
  }
}
@media (max-width: 576px) {
  .footer {
    padding: 30px 0;
  }
  .footer__info {
    padding: 0;
  }
}
</style>