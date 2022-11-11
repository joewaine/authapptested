<script>
export default {
  name: "AnnouncementBox",
  methods: {
    close() {
      this.$emit("close");
    },

    goToTockMamnoon() {
      window.location.href = "https://www.exploretock.com/mamnoonrestaurant/";
    },
    
    goToTockHanoon() {
      window.location.href = "https://www.exploretock.com/mamnoonstreet";
    },
  },
};
</script>

<template v-if="this.$store.state.announcementModal">
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modalAnnounce"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header"> <i>Thanksgiving 2022</i> </slot>
          <button
            type="button"
            class="btn-close"
            @click="close"
            aria-label="Close modal"
          >
            x
          </button>
        </header>

        <section class="modalBody" id="modalDescription">
          <slot name="body">
            the mama thanksgiving package is here! you handle the turkey and let
            mama take care of the rest!
          </slot>
        </section>

        <footer class="modal-footer">
          <div class="buttonBox">
            <div class="leftBox">
          <span>hanoon</span>
          <span>&#40;totem lake&#41;</span>
          <button
            type="button"
            class="btn-green"
            @click="goToTockHanoon"
            aria-label="Go to tock"
          >
            order now
          </button>
          </div>
          <div class="rightBox">
          <span>mamnoon</span>
          <span>&#40;capitol hill&#41;</span>
          <button
            type="button"
            class="btn-green"
            @click="goToTockMamnoon"
            aria-label="Go to tock"
          >
            order now
          </button>
          </div>
        </div>
        </footer>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: transparent !important;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.modalAnnounce {
  background: #ffffff;
  // position: absolute;
  height: 350px !important;
  width: 30% !important;
  overflow: hidden !important;
  overflow-x: auto;
  border-radius: 2px 2px 2px 2px;
  display: flex !important;
  flex-direction: column;
  box-shadow:  3px 3px 5px #ffffff;
  margin: auto;
  top: 0;
  @media only screen and (max-width: 1323px) {
    height: 420px !important;
  }
  @media only screen and (max-width: 1100px) {
    height: 500px !important;
  }

  @media only screen and (max-width: 928px) {
    height: 450px !important;
    width: 300px !important;
  }
  @media only screen and (max-width: 402px) {
    height: 500px !important;
  }
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
  justify-content: center !important;
  background-color: $nadi-black-color;
  border: none !important;

}

.buttonBox {
  display: flex;
  width: 100%; 
  justify-content: space-around;
  align-items: center;
}
.buttonBox span {
  color: $nadi-red-color;
  font-size: 12pt;
  font-weight: 700;
  display: block;
  height: 30px;

}
.rightBox {
  float: right;
  max-height: 200px;
}

.modal-header {
  position: relative;
  color: $nadi-red-color;
  justify-content: space-between;
  text-align: center;
  border: none;
  font-size: 22pt;
  font-weight: 800;

  @media only screen and (max-width: 768px){
    font-size: 18pt;
  }
}

.modal-footer {
  flex-direction: column;
  border-top: none !important;
  height: 150px !important;
}

.modalBody {
  position: relative;
  padding: 0 50px;
  background-color: $nadi-black-color;
  color: white;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19pt;
  text-align: left;
  box-sizing: border-box;
  @media only screen and (max-width: 768px){
    font-size: 16pt;
  }
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 24px;
  padding: 10px 10px;
  cursor: pointer;
  font-weight: bold;
  color: $nadi-white-color !important;
  background: transparent !important;
}

.btn-green {
  background: $nadi-white-color;
  border-radius: $nadi-button-border-radius !important;
  color: $nadi-red-color;
  border: $nadi-button-border;
  margin-bottom: 20px;
  height: 4vh;
  &:hover {
    background: $nadi-red-color !important;
    color: $nadi-white-color !important;
  }
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
