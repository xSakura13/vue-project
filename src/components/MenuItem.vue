<template>
  <a v-for="menuItem in menuItems" :key="menuItem" class="nav-link" :class="menuItem.active" :aria-current="menuItem.current" :href="menuItem.href">{{ menuItem.title }}</a>
</template>

<script>
import menuItems from '@/assets/JSON/menuItem.json'
export default {
  name: "MenuItem",
  data(){
    return{
      menuItems: menuItems
    }
  }
}
</script>

<style>
.nav-link.active,
.nav-link:hover {
  color: #5E81FE !important;
  font-weight: 700;
}
.nav-link {
  color: #697CA6;
  padding: 0 !important;
  font-family: "Quicksand", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0.05em;
}
</style>