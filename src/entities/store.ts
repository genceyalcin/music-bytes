/**
 * Credit on this Abstract Class goes to Mario Brendel.
 * He covered this on his article:
 *     https://medium.com/@mario.brendel1990/vue-3-the-new-store-a7569d4a546f
 */

import {reactive, readonly} from 'vue';

export abstract class Store<T extends Record<string, any>> {
    protected state: T;

    constructor() {
        const data = this.data();
        this.state = reactive(data) as T;
    }

    protected abstract data(): T

    public getState(): T {
        return readonly(this.state) as T
    }
}