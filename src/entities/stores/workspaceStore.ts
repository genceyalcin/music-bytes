import { Store } from '../store';

export enum WorkspaceMode { 
    InstrumentView,
    TrackView,
    ByteView
}

export interface IWorkspaceState {
    currentMode: WorkspaceMode
}

export class WorkspaceStore extends Store<IWorkspaceState>{

    private static readonly DEFAULT_MODE: WorkspaceMode = WorkspaceMode.InstrumentView;

    protected data(): IWorkspaceState {
        return {
            currentMode: WorkspaceStore.DEFAULT_MODE
        };
    }

    // Setters
    setCurrentMode(mode: WorkspaceMode) {
        this.state.currentMode = mode;
    }

}