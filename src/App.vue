<template>
  <div class="container-fluid">
    <ToolBar />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ToolBar from "./components/ToolBar.vue";

@Options({
    components: {
        ToolBar
    }
})
export default class App extends Vue {}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@1,300&display=swap');
  #app {
    font-family: 'Roboto Condensed', sans-serif;
  }
  .shadow-box {
    box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.1);
  }
</style>