import { Components } from '../../api/types/openapi.d.ts';

export interface MainState {
    currentMedia: Components.Schemas.Media | null;
    picker: boolean;
}
export declare const setCurrentMedia: import('@reduxjs/toolkit').ActionCreatorWithPayload<Components.Schemas.Media | null, "main/setCurrentMedia">, setPicker: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, "main/setPicker">;
declare const _default: import('redux').Reducer<MainState>;
export default _default;
