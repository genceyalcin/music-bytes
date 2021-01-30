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