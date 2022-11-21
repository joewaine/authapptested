<script>
export default {
  name: "AnnouncementBox",
  methods: {
    close() {
      this.$emit("close");
    },

    goToHeating() {
      window.location.href = "https://uqr.to/19tkz";
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
            thanksgiving sides are still available for purchase at manna through
            the 23rd. <span>looking for heating instructions?</span>
          </slot>
        </section>

        <footer class="modal-footer">
          <div class="buttonBox">
            <div class="leftBox">
              <button
                type="button"
                class="btn-green"
                @click="goToHeating"
                aria-label="Go to tock"
              >
                click here
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
  box-shadow: 0 0 4px 4px white;
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
  justify-content: space-evenly;
  align-items: center;
}
.buttonBox span {
  color: $nadi-red-color;
  font-size: 12pt;
  font-weight: 700;
  height: 30px;
}

.buttonBox span:nth-child(odd) {
  margin-bottom: -8px;
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

  @media only screen and (max-width: 768px) {
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
  display: block;
  justify-content: center;
  align-items: center;
  font-size: 19pt;
  text-align: left;
  box-sizing: border-box;
  @media only screen and (max-width: 768px) {
    font-size: 16pt;
  }
}

.modalBody span {
  color: $nadi-red-color;
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
