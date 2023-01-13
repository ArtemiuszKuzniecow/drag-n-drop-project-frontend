import { RootStore } from "./rootReducer";
export const getContentSelector = () => (state: RootStore) =>
  state.main.content;
