<template>
  <a v-for="iconSvg in menuIconSvg" :key="iconSvg" class="nav-link" :href="iconSvg.href">
    <svg :width="iconSvg.width" :height="iconSvg.height" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path :d="iconSvg.svg.first" fill="currentColor"/>
      <path :d="iconSvg.svg.second" fill="currentColor"/>
      <path :d="iconSvg.svg.third" fill="currentColor"/>
    </svg>
  </a>
</template>

<script>
import menuIconSvg from '@/assets/JSON/menuicon.json'
export default {
  name: "MenuIconElem",
  data(){
    return {
      menuIconSvg: menuIconSvg
    }
  }
}
</script>

<style>

</style>