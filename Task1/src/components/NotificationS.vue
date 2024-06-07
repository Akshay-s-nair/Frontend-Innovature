<template>
  <div v-if="visible" class="notification">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: ['message'],
  data() {
    return {
      visible: false
    };
  },
  methods: {
    show() {
      this.visible = true;
      setTimeout(() => {
        this.visible = false;
      }, 2000);
    }
  },
  watch: {
    message() {
      this.show();
    }
  }
};
</script>

<style scoped>
.notification {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ffdddd;
  color: #d8000c;
  padding: 10px;
  border: 1px solid #d8000c;
  border-radius: 5px;
  z-index: 1000;
  opacity: 0.9;
}
</style>
