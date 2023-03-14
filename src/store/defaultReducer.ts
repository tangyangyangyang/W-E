import { ActionData, State, TypeList } from './interface';

//最简单的输入等于输出的reducer
const defaultReducer = (state: State, action: { type: TypeList; data: ActionData }) => {
	const { type, data } = action;
	state[type] = data;
	return { ...state };
};

//根据业务需求可以增加不同的reducer
// const buyCarReducer = (state: State, action: { type: TypeList; data: ActionData }) => {
// 	const { type, data } = action;
// 	state[type] = foo(data);
// 	return { ...state };
// };

export default defaultReducer;
