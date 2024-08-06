import { Components } from '../../api/types/openapi.d.ts';

export interface MainState {
    selectedMedia: Components.Schemas.Media | null;
}
export declare const setSelectedMedia: import('@reduxjs/toolkit').ActionCreatorWithPayload<Components.Schemas.Media | null, "main/setSelectedMedia">;
declare const _default: import('redux').Reducer<MainState>;
export default _default;
