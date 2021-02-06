import { Store } from "../store";

export enum TimeSignatureDenominator {
    One = 1,
    Two = 2,
    Four = 4,
    Eight = 8,
    Sixteen = 16,
    Thirtytwo = 32
}

export enum Key {
    C = "C",
    CSharp = "C#",
    D = "D",
    DSharp = "D#",
    E = "E",
    F = "F",
    FSharp = "F#",
    G = "G",
    GSharp = "G#",
    A = "A",
    ASharp = "A#",
    B = "B"
}

export interface ProjectState {
    projectName: string;
    key: Key;
    tempoInBeatsPerMinute: number;
    timeSignatureNumerator: number;
    timeSignatureDenominator: TimeSignatureDenominator;
    numberOfTracks: number;
    numberOfBytes: number;
}

export class ProjectStore extends Store<ProjectState> {

    private static readonly DEFAULT_PROJECT_NAME: string = "Untitled Project";

    private static readonly DEFAULT_KEY: Key = Key.C;
    private static readonly DEFAULT_TEMPO_IN_BPM: number = 120;
    
    private static readonly DEFAULT_TIME_SIGNATURE_NUMERATOR: number = 4;
    private static readonly DEFAULT_TIME_SIGNATURE_DENOMINATOR: 
        TimeSignatureDenominator = TimeSignatureDenominator.Four;

    private static readonly TIME_SIGNATURE_NUMERATOR_MIN: number = 1;
    private static readonly TIME_SIGNATURE_NUMERATOR_MAX: number = 64;

    protected data(): ProjectState {
        return {
            projectName: ProjectStore.DEFAULT_PROJECT_NAME,
            key: ProjectStore.DEFAULT_KEY,
            tempoInBeatsPerMinute: ProjectStore.DEFAULT_TEMPO_IN_BPM,
            timeSignatureNumerator: ProjectStore.DEFAULT_TIME_SIGNATURE_NUMERATOR,
            timeSignatureDenominator: ProjectStore.DEFAULT_TIME_SIGNATURE_DENOMINATOR,
            numberOfTracks: 0,
            numberOfBytes: 0
        };
    }

    // Setters
    setProjectName(name: string) {
        this.state.projectName = name;
    }

    setKey(key: Key) {
        this.state.key = key;
    }

    setTempoInBeatsPerMinute(tempo: number) {
        this.state.tempoInBeatsPerMinute = tempo;
    }

    setTimeSignatureNumerator(numerator: number) {
        this.state.timeSignatureNumerator = 
            this.isValidTimeSignatureNumerator(numerator) ?
            numerator : this.state.timeSignatureNumerator;
    }

    setTimeSignatureDenominator(denominator: TimeSignatureDenominator) {
        this.state.timeSignatureDenominator = denominator;
    }

    // Incrementers & Decrementers
    incrementNumberOfInstruments() {
        this.state.numberOfTracks++;
    }

    incrementNumberOfBytes() {
        this.state.numberOfBytes++;
    }

    decrementNumberOfInstruments() {
        this.state.numberOfTracks--;
    }

    decrementNumberOfBytes() {
        this.state.numberOfBytes--;
    }

    // Helpers
    private isValidTimeSignatureNumerator(numerator: number): boolean {
        return numerator <= ProjectStore.TIME_SIGNATURE_NUMERATOR_MAX &&
            numerator >= ProjectStore.TIME_SIGNATURE_NUMERATOR_MIN;
    }

}

export const projectStore: ProjectStore = new ProjectStore();