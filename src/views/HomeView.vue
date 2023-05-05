<template>
    <NavbarComponent/>

  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavbarComponent from '@/components/Navbar.vue';

export default defineComponent({
  name: 'home',
  components: {
    NavbarComponent,
  },
});
</script>
