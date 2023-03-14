import { ReactNode } from 'react';
//action 类型列表
export type TypeList = 'lang';

export type ActionData = langType;

export interface StoreProps {
	children: ReactNode;
}

export type Action = {
	type: TypeList;
	data: ActionData;
};

type Reducer = (state: State, action: Action) => State;

export type ReducerMap = {
	[key in TypeList]: Reducer;
};
export type langType = 'zh' | 'en';

export type State = {
	lang: langType;
};

export interface StoreState extends State {
	dispatch: (action: Action) => void;
}
