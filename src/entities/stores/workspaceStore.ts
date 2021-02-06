import { Store } from '../store';

export enum WorkspaceMode { 
    InstrumentView,
    TrackView,
    ByteView
}

export interface WorkspaceState {
    currentMode: WorkspaceMode
}

export class WorkspaceStore extends Store<WorkspaceState>{

    private static readonly DEFAULT_MODE: WorkspaceMode = WorkspaceMode.InstrumentView;

    protected data(): WorkspaceState {
        return {
            currentMode: WorkspaceStore.DEFAULT_MODE
        };
    }

    // Setters
    setCurrentMode(mode: WorkspaceMode) {
        this.state.currentMode = mode;
    }

}