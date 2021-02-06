<template>
    <div id="expand" class="small-btn-violet" @click="onExpand()" v-if="collapsed">
        <span>&lt;</span>
    </div>
    <div :class="`container shadow col-${colSize} ${collapseClassName}`" id="bytes">
        <div class="row header" id="bytes-header">
            <div class="align-self-center col-8">
                <h3>Bytes: </h3>
            </div>
        </div>
        <div id="collapse" class="small-btn-violet" @click="onCollapse()">
            <span class="justify-content-center">&gt;</span>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, prop, Vue } from "vue-class-component";

class BytesProps {
    colSize = prop<number>({default: 6});
} 

@Options({})
export default class Bytes extends Vue.with(BytesProps) {

    collapsed = false;
    
    get collapseClassName () {
        return this.collapsed ? "collapse" : "";
    }

    onCollapse() {
        this.collapsed = !this.collapsed;
        this.$emit('bytesCollapsed');
    }

    onExpand() {
        this.collapsed = !this.collapsed;
        this.$emit('bytesExpanded');
    }
}
</script>

<style scoped>
    #bytes {
        background-color: #c8a5e8;
        border-left: #531391 solid 3px;
    }
    
    #bytes-header {
        padding: 15px;
        padding-left: 25px;
        background-color: #8c6cab;
        color: white;
    }

    #expand {
        border-radius: 15px 0 0 15px;
        z-index: 1;
        margin-top: 25px;
        right: 0px;
    }

    #collapse {
        top: 25px;
        left: 0px;
        border-radius: 0 15px 15px 0; 
    }
</style>