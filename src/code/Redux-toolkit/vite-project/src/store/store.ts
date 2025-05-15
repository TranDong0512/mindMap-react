/** @format */
import {
  addListener,
  configureStore,
  createListenerMiddleware,
  type ListenerEffectAPI,
  type TypedAddListener,
  type TypedStartListening,
} from "@reduxjs/toolkit";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import { todoSlice } from "../features/todo/todoSlie";
import { productSlice } from "../features/product/productSlice";

const listenerMiddlewareInstance = createListenerMiddleware({
  onError: () => console.error,
});

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    products: productSlice.reducer,
  },
  middleware: (gDM) => gDM().prepend(listenerMiddlewareInstance.middleware),
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppListenerEffectAPI = ListenerEffectAPI<RootState, AppDispatch>;
export type AppStartListening = TypedStartListening<RootState, AppDispatch>;
export type AppAddListener = TypedAddListener<RootState, AppDispatch>;
export const startAppListening =
  listenerMiddlewareInstance.startListening as AppStartListening;
export const addAppListener = addListener as AppAddListener;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
