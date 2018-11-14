<template>
  <Modal>
    <div slot="header">
      <h3>Alert</h3>
    </div>

    <div slot="body">{{ alertData }}</div>

    <div slot="footer">
      <button class="modal-default-button" @click="$emit('close')">
        OK
      </button>
    </div>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
  props: ['alertData'],
  components: {
    Modal
  }
}
</script>

