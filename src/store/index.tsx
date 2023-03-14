import React, { useContext, useReducer } from 'react';
import { Action, ReducerMap, State, StoreProps, StoreState } from './interface';
import defaultReducer from './defaultReducer';
export * from './interface';
//初始化全局数据
const StateInitial: StoreState = {
	lang: 'zh',
	dispatch: () => undefined
};
const reducerMap: ReducerMap = {
	lang: defaultReducer
};

export const StoreContext = React.createContext(StateInitial);
export const StoreProvider = (props: StoreProps) => {
	const { children } = props;
	const [state, dispatch] = useReducer(
		(state: State, action: Action) => reducerMap[action.type](state, action),
		StateInitial
	);
	return <StoreContext.Provider value={{ ...state, dispatch }}>{children}</StoreContext.Provider>;
};

//手撸一个全局状态管理 使用方法跟reduex一毛一样
// 外部使用时 useStore会让编辑器告诉你都有啥数据
export const useStore = () => {
	return { ...useContext(StoreContext) };
};

export default StoreProvider;
