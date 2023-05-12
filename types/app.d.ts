type State = import('@/app/store/appStore').RootState;
type Dispatch = import('@/app/store/appStore').AppDispatch;

declare type RootState = State;
declare type AppDispatch = Dispatch;
declare module 'streamed-chatgpt-api';
