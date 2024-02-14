<template>
  <div id="app">
    <lego_header></lego_header>
    <router-view />
    <lego_footer></lego_footer>
  </div>
</template>

<script>
import lego_header from './components/lego_header.vue'
import lego_main from './components/lego_main.vue'
import lego_footer from './components/lego_footer.vue'


export default {
  components: {
    lego_header,
    lego_main,
    lego_footer
  }
};
</script>