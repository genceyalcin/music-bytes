<template>
    <div id="expand" class="small-btn-violet" @click="onExpand()" v-if="collapsed">
        <span>&gt;</span>
    </div>
    <div :class="`container shadow col-${colSize} ${collapseClassName}`" id="tracks">
        <div class="row header" id="tracks-header">
            <div class="align-self-center col-8">
                <h3>Tracks: </h3>
            </div>
            <div class="align-self-center col-4">
                <button class="btn btn-violet">Add</button>
            </div>
        </div>
        <div id="collapse" class="small-btn-violet" @click="onCollapse()">
            <span class="justify-content-center">&lt;</span>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, prop, Vue } from "vue-class-component";

class TrackProps {
    colSize = prop<number>({default: 3});
}

@Options({})
export default class Tracks extends Vue.with(TrackProps) {

    collapsed = false;

    get collapseClassName () {
        return this.collapsed ? "collapse" : "";
    }

    onCollapse() {
        this.collapsed = !this.collapsed;
        this.$emit('tracksCollapsed');
    }

    onExpand() {
        this.collapsed = !this.collapsed;
        this.$emit('tracksExpanded');
    }
}
</script>

<style scoped>
    #tracks {
        background-color: #c8a5e8;
        z-index: 1;
        border-right: #531391 solid 3px;
    }

    #tracks-header {
        padding: 15px;
        background-color: #8c6cab;
        color: white;
    }

    #expand {
        z-index: 1;
        margin-top: 25px;
        border-radius: 0 15px 15px 0;
    }
    
    #collapse {
        top: 25px;
        right: -2px;
        border-radius: 15px 0 0 15px;
    }


    h3 {
        margin: 0;
    }
</style>