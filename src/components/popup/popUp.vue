<template>
  <div id="popup">
    <div class="overlay" @click="closeModal()"></div>
    <div class="popup__wrapper">
      <div class="popup__content d-flex flex-column align-items-center">
        <div class="popup__close">
          <svg @click="closeModal()" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
          </svg>
        </div>
        <div class="popup__video">
          <iframe v-for="video in popUpVideo" :key="video" :id="video.id" :src="video.src" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modal from '@/assets/scripts/popup'
import popUpVideo from '@/assets/JSON/popup.json'
export default {
  name: "popUp",
  data(){
    return {
      popUpVideo: popUpVideo
    }
  },
  methods:{
    closeModal(){
      modal.close()
    }
  }
}
</script>

<style scoped>

#popup .popup__wrapper.open{
  background: #FFFFFF;
  border-radius: 20px;
  padding: 50px 0;
  width: 50%;
  margin: 20vh auto 0;
}
#popup .popup__content{
  opacity: 0;
}
#popup.open iframe{
  display: none;
}
#popup.open iframe.show{
  display: block;
}
#popup .popup__content.open{
  opacity: 1;
  position: relative;
}
#popup .popup__close svg.open{
  position: absolute;
  top: -10%;
  right: 5%;
  cursor: pointer;
}
#popup .popup__video{
  width: 70%;
}
#popup.open iframe.show{
  width: 100%;
  height: 260px;
}
#popup{
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  z-index: -1;
}
#popup.open{
  z-index: 20;
}
#popup .overlay{
  background: rgba(0, 0, 0, 0.7);
  transition: .3s opacity;
  opacity: 0;
}
#popup .overlay.open{
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -1;
  opacity: 1;
}
@media (max-width: 992px) {
  #popup.open iframe.show{
    height: 200px;
  }
}
@media (max-width: 767px) {
  #popup.open iframe.show{
    height: 160px;
  }
  #popup .popup__close svg.open{
    top: -15%;
  }
}
@media (max-width: 567px) {
  #popup.open iframe.show{
    height: 100%;
  }
  #popup .popup__wrapper.open{
    width: 100%;
  }
  #popup .popup__close svg.open{
    top: -20%;
  }
}
</style>