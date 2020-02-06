<template>
  <div id="app">
    <nuxt></nuxt>
  </div>
</template>

<script>

export default {
  data: () => ({
    scroll: 0,
  }),
  computed: {
    isEnableTransparent: function isEnableTransparent() {
      return this.scroll <= 300;
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: function handleScroll() {
      this.scroll = window.scrollY;
    },
  },
};
</script>

<style scoped></style>
