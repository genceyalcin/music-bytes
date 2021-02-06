<template>
    <div class="row fill">
        <Tracks 
            :colSize="this.tracksColSize" 
            @tracksCollapsed="onTracksCollapsed()"
            @tracksExpanded="onTracksExpanded()" />

        <WorkArea :colSize="this.workAreaColSize" />

        <Bytes 
            :colSize="this.bytesColSize"
            @bytesCollapsed="onBytesCollapsed()"
            @bytesExpanded="onBytesExpanded()" />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Tracks from "./Tracks.vue";
import WorkArea from "./WorkArea.vue";
import Bytes from "./Bytes.vue";

@Options({
    components: {
        Tracks,
        WorkArea,
        Bytes
    }
})
export default class Workspace extends Vue {

    tracksColSize = 3;
    workAreaColSize = 6;
    bytesColSize = 3;

    onTracksCollapsed() {
        this.workAreaColSize += this.tracksColSize;
    }

    onBytesCollapsed() {
        this.workAreaColSize += this.bytesColSize;
    }

    onTracksExpanded() {
        this.workAreaColSize -= this.tracksColSize;
    }

    onBytesExpanded() {
        this.workAreaColSize -= this.bytesColSize;
    }

} 

</script>

<style>
    .small-btn-violet {
        width: 25px;
        height: 25px;
        background-color: #531391;
        color: white;
        justify-content: center;
        padding: 0px 0px 0px 10px;
        margin: 0px;
        position: absolute;
    }

    .small-btn-violet:hover {
        cursor: pointer;
        background-color: blueviolet;
    }
</style>