<template>
  <div class="navbar navbar-expand-md navbar-light header-navbar">
    <div class="container justify-content-center">
      <div class="row w-100">
        <div class="col d-flex justify-content-between align-items-center flex-wrap">
          <LogoCompany />
          <button class="navbar-toggler" id="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav menu-page">
              <MenuList/>
            </div>
          </div>
          <div class="collapse navbar-collapse menu-right" id="navbarNavAltMarkup1">
            <div class="navbar-nav menu-icon">
              <MenuIcons />
              <btnElem :class-el="classEl" :btn-title="btnTitle" :href="href"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoCompany from "@/components/LogoCompany";
import MenuList from "@/components/MenuList";
import MenuIcons from "@/components/MenuIcons";
import btnElem from "@/components/btnElem";
export default {
  components: {
    MenuList,
    LogoCompany,
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
}
</script>

<style>
.navbar-light {
  padding: 1rem 0 1.25rem 0 !important;
}
.navbar-light .navbar-collapse.menu-right {
  flex-grow: 0;
}
.navbar-light .navbar-nav {
  align-items: center;
}
.navbar-light .navbar-nav .nav-link svg path {
  fill: #9399AB;
}
.navbar-light .navbar-nav.menu-page {
  gap: 42px;
}
.navbar-light .navbar-nav.menu-icon {
  gap: 37px;
}
.navbar-light .navbar-nav.menu-icon .nav-link:hover {
  transition: 0.3s;
}
.navbar-light .navbar-nav.menu-icon .nav-link:hover svg path {
  fill: #5E81FE;
}
.navbar-light .navbar-nav.menu-icon .menu-button {
  padding: 13px 20px !important;
  background: #D2E1FF;
  color: #3A79FF;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  font-family: "Quicksand", sans-serif;
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
}
.navbar-light .navbar-nav.menu-icon .menu-button:hover {
  background: #5E81FE;
  color: #ffffff !important;
}

@media (max-width: 992px) {
  .navbar-light .navbar-nav.menu-page, .navbar-light .navbar-nav.menu-icon {
    gap: 20px;
  }
  .navbar-light .navbar-nav.menu-icon .menu-button {
    padding: 10px 18px !important;
  }
}
@media (max-width: 767px) {
  .navbar-light .navbar-nav.menu-page {
    padding-bottom: 25px;
  }
  .navbar-light .navbar-nav.menu-icon {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .navbar-light .navbar-nav.menu-icon .menu-button {
    width: 100%;
  }
  .navbar-light .navbar .show {
    transition: 0.5s all;
  }
}
</style>