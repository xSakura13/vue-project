<template>
  <a class="navbar-brand" href="#"></a>
</template>

<script>
export default {}
</script>

<style scoped>
.navbar-brand {
  width: 26px;
  height: 26px;
  background: #5E81FE;
  border-radius: 20px;
  margin-right: 70px;
  transition: 0.5s;
}
.navbar-brand:hover {
  width: 30px;
  height: 30px;
  background: #4269f6;
  box-shadow: 0 0 15px #495274;
}
@media (max-width: 992px) {
  .navbar-brand {
    margin-right: 25px;
  }
}
</style>