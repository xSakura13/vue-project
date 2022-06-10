<template>
    <a :class="classEl" :href="href">{{ btnTitle }}</a>
</template>

<script>
export default {
  name: "btnElem",
  props: {
    btnTitle: String,
    href: String,
    classEl: [Object, String]
  }
}
</script>

<style scoped></style>