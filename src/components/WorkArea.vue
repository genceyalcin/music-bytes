<template>
    <div :class="`container col-${colSize}`" id="workarea">
        <div class="row header" id="workarea-header">
            <div class="align-self-center col-8">
                <h3>Workspace: </h3>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, prop, Vue } from "vue-class-component";

class WorkAreaProps {
    colSize = prop<number>({default: 6});
} 

@Options({})
export default class WorkArea extends Vue.with(WorkAreaProps) {

}
</script>

<style scoped>
    #workarea {
        background-color: #dddae0;
    }

    h3 {
        margin: 0;
    }

    #workarea-header {
        padding: 15px;
        background-color: #9d99a1;
        color: white;
    }
</style>