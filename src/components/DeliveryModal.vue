<template>
  <div v-if="deliveryModalOpen" class="order-confirmation-modal">
    <div class="container online-menu order-modal-width" style="padding: 10px;">
      <div class="close closeModal closeModalConfirmation">
        <router-link @click="closeDeliveryModal">
          <CloseModal2 />
        </router-link>
      </div>
      <h4 class="order-conf-header">order for delivery</h4>
    </div>
    <div class="container modal-body order-modal-width order-modal-body">
      <div class="mb-15">
        <button class="nadi-button"><a href="https://www.doordash.com" target="_blank">doordash</a></button>
        <button class="nadi-button"><a href="https://www.ubereats.com" target="_blank">uber eats</a></button>
      </div>
    </div>
  </div>
</template>

<script>
import CloseModal2 from "@/components/svgIcons/CloseModal2";

export default {
  name: "DeliverModal",
  props: ['deliveryModalOpen'],
  components: {
    CloseModal2,
  },
  data() {
    return {
      deliveryModalOpen,
    }
  },
  methods: {
    closeDeliveryModal() {
      this.deliveryModal = false;
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  display: block;
}

.nadi-button {
  & {
    @extend %nadi-primary-button;
  }
}

.order-confirmation-modal,
.order-modal {
  position: fixed;
  z-index: 100;
  z-index: 200;
  background: #ffffff99;
  height: 100vh;
  width: 100%;
  top: 0;
}

.modal-body {
  background: white;
  padding: 15px;
  border-radius: 0px;
  border: 1px solid grey;
}

.closeModal {
  opacity: 1;
  cursor: pointer;
  position: absolute;
  top: 11px;
  right: 15px;
}


.order-modal-width {
  width: 700px;
}

.order-modal-body {
  max-height: 60vh;
  overflow-y: scroll;
  border-top: 0;
  textarea {
    width: 100%;
    margin: 0px 0;
    margin-bottom: 10px;
    height: 50px;
  }
}

.container.online-menu.order-modal-width {
  margin-top: 24px;
  margin-top: 5px;
}

</style>
