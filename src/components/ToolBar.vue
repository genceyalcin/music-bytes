<template>
    <div id="toolbar" class="row">
        <div class="col-lg-3">
            <h1>MusicBytes</h1>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class ToolBar extends Vue {

}
</script>

<style>
    #toolbar {
        padding: 5px 15px 5px 15px;
        box-shadow: 5px 5px 4px 4px rgba(0, 0, 0, 0.1);
    }
</style>