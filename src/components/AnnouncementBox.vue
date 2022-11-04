<script>
export default {
  name: "AnnouncementBox",
  methods: {
    close() {
      this.$emit("close");
    },
    goToTock() {
      window.location.href = "https://www.exploretock.com/mamnoonrestaurant/";
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
          <slot name="header"> Thanksgiving 2022 </slot>
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
            mamnoon take care of the rest!
          </slot>
        </section>

        <footer class="modal-footer">
          <button
            type="button"
            class="btn-green"
            @click="goToTock"
            aria-label="Go to tock"
          >
            order now
          </button>
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
}

.modalAnnounce {
  background: #ffffff;
  // position: absolute;
  height: 250px !important;
  width: 40% !important;
  overflow-x: auto;
  display: flex !important;
  flex-direction: column;
  margin: auto;
  top: 0;
  @media only screen and (max-width: 1323px) {
    margin-top: 10.3vh;
  }
  @media only screen and (max-width: 928px) {
    height: 320px !important;
    margin-top: 10.3vh;
  }
  @media only screen and (max-width: 405px) {
    height: 420px !important;
  }
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
  justify-content: center !important;
  background-color: rgb(0, 0, 0, 0.9);
  border: none !important;
}

.modal-header {
  position: relative;
  color: $nadi-white-color;
  justify-content: space-between;
  text-align: center;
  border: none;
}

.modal-footer {
  flex-direction: column;
  border-top: none !important;
}

.modalBody {
  position: relative;
  padding: 30px 10px;
  background-color: rgb(0, 0, 0, 0.9);
  color: white;
  height: 100%;
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
