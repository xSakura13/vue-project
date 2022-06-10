<template>
  <div id="app">
    <!--        <Header />-->
    <Menu />
    <Banner />
    <Partners />
    <Apps />
    <About />
    <Analytics />
    <Blog />
    <Customers />
    <Faq />
    <Plan />
    <SingUp />
    <Footer />
    <PopUP />
  </div>
</template>

<script>
// import Header from "./components/Header";
import Menu from '@/components/MenuBlock';
import Banner from '@/components/BannerBlock'
import Partners from '@/components/PartnersBlock'
import Apps from '@/components/AppBlock'
import About from '@/components/AboutBlock'
import Analytics from '@/components/AnalyticsBlock'
import Blog from '@/components/BlogBlock'
import Customers from '@/components/CustomersBlock'
import Faq from '@/components/FaqBlock'
import Plan from '@/components/PlanBlock'
import SingUp from '@/components/SingUpBlock'
import Footer from '@/components/FooterBlock'
import PopUP from '@/components/popup/popUp'

export default {
  name: 'App',
  components: {
    Menu,
    Banner,
    Partners,
    Apps,
    About,
    Analytics,
    Blog,
    Customers,
    Faq,
    Plan,
    SingUp,
    Footer,
    PopUP
  }
}
</script>

<style>
/* common style */
* {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
}
* img {
  object-fit: cover;
  width: 100%;
}

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

a:focus,
a:active {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  height: 100%;
  width: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a {
  color: black;
}

a,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
  margin-bottom: 0;
}

img {
  vertical-align: middle;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
  margin: 0;
  padding: 0;
}

@media (min-width: 1140px) {
  .container {
    max-width: 1206px;
  }
}
</style>
