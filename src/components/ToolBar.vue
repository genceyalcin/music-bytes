<template>
    <div id="toolbar" class="row shadow-box">
        <!-- Logo Box -->
        <div id="logo-box" class="col-lg-3">
            <h1>MusicBytes</h1>
            <span>Project Title: {{projectState.projectName}}</span>
        </div>
        <!-- Tempo, Time Signature, and Key Box -->
        <div id="tempo-sig-key-box" class="col-lg-6 rounded-box">
            <div class="container-fluid">
                <!-- Editing  -->
                <div class="row" v-if="editingTSK">
                    <div class="col-4">
                        <span>Tempo (BPM):</span>
                        <input 
                            id="tempo-bpm-input"
                            type="text" 
                            class="form-control"
                            :placeholder="projectState.tempoInBeatsPerMinute"
                            v-model="tempoBPMInput">
                    </div>
                    <div class="col-4">
                        <span>Time Signature:</span>
                        <div class="row">
                            <input 
                                id="time-sig-num-input"
                                v-model="timeSigNumInput"
                                type="text" 
                                class="form-control col-4"
                                aria-describedby="inputGroup-sizing-sm"
                                :placeholder="projectState.timeSignatureNumerator">
                            <select class="custom-select col-4" id="time-sig-den-select" v-model="timeSigDenSelect">
                                <option :value="den" v-for="den in denominators" :key="den">
                                    {{den}}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="row">
                            <span>Key:</span>
                        </div>
                        <select class="custom-select col-lg-12" id="key-select" v-model="keySelect">
                            <option :value="key" v-for="key in keys" :key="key">
                                {{key}}
                            </option>
                        </select>
                    </div>
                    <div class="row">
                        <div class="col-2">
                            <button class="btn btn-success" @click="onSaveTSKSettings()">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row" v-else>
                    <div class="col-4">
                        <span>Tempo (BPM):</span>
                        <h3>{{projectState.tempoInBeatsPerMinute}}</h3>
                    </div>
                    <div class="col-4">
                        <span>Time Signature:</span>
                        <h3>{{projectState.timeSignatureNumerator}} / {{projectState.timeSignatureDenominator}}</h3>
                    </div>
                    <div class="col-2">
                        <span>Key:</span>
                        <h3>{{projectState.key}}</h3>
                    </div>
                    <div class="col-2">
                        <button class="btn btn-violet" @click="onClickEdit()">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="offset-lg-1 col-lg-2 align-right align-self-center" id="save">
            <button class="btn btn-success" style="margin-right: 10px;">
                Save
            </button>
            <button class="btn btn-primary">
                Export
            </button>
        </div>
    </div>
    
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ProjectState, Key, projectStore, TimeSignatureDenominator } from "../entities/stores/projectStore";

@Options({})
export default class ToolBar extends Vue {

    projectState: ProjectState = projectStore.getState();
    denominators: number[] = Object.keys(TimeSignatureDenominator)
        .map(n => Number.parseInt(n))
        .filter(n => n);

    keys: string[] = Object.values(Key);
    
    tempoBPMInput: number = this.projectState.tempoInBeatsPerMinute;
    timeSigNumInput = this.projectState.timeSignatureNumerator;
    timeSigDenSelect = this.projectState.timeSignatureDenominator;
    keySelect = this.projectState.key;

    editingTSK = false;
    
    onClickEdit() {
        this.tempoBPMInput = this.projectState.tempoInBeatsPerMinute;
        this.timeSigNumInput = this.projectState.timeSignatureNumerator;
        this.timeSigDenSelect = this.projectState.timeSignatureDenominator;
        this.keySelect = this.projectState.key;
        this.editingTSK = true;
    }

    onSaveTSKSettings() {
        projectStore.setTempoInBeatsPerMinute(this.tempoBPMInput);
        projectStore.setTimeSignatureNumerator(this.timeSigNumInput);
        projectStore.setTimeSignatureDenominator(this.timeSigDenSelect);
        projectStore.setKey(this.keySelect);
        this.editingTSK = false;
    }

}
</script>

<style>
    #toolbar {
        padding: 10px 15px 10px 15px;
        background-color: blueviolet;
        color:white;
        border-bottom: #531391 solid 3px;
    }

    #tempo-sig-key-box {
        background-color: white;
        color: black;
    }

    .rounded-box {
        border-radius: 10px;
        padding: 10px 15px 10px 15px;
        border: 1px solid  rgba(0, 0, 0, 0.1);
    }
</style>