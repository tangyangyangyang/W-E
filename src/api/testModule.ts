import { Module } from '@/api/interface';

//根据后台接口文档 简单模拟了一个模块配置

//声明这个枚举之后 可以在项目中任何地方调用该模块时 编辑器会提示该模块下具有哪些函数
export enum TestModuleMethodsName {
	getPageInfo = 'getPageInfo',
	getDeadLine = 'getDeadLine'
}
const testModule: Module = {
	getPageInfo: {
		method: 'POST',
		url: '/testModule/getPageInfo'
	},
	getDeadLine: {
		method: 'GET',
		url: '/testModule/getDeadLine'
	}
};
export default testModule;
