/*
 * 该文件主要为注册api模块 将api文件夹下的模块列表分别注册成_request函数 方便后续调用
 *
 * */
import _request from '@/api/request';
import testModule, { TestModuleMethodsName } from '@/api/testModule';
import { Module, RequestParams, Request, ResponseBody } from '@/api/interface';

const register = <U>(module: Module): Required<U> => {
	const _module: {
		[key: string]: Request;
	} = {};
	Object.keys(module).map((mKey) => {
		_module[mKey] = (params: RequestParams = {}) => {
			const { query, path, body, headers } = params;
			let { url } = module[mKey];
			const { method } = module[mKey];
			//处理path参数
			if (Array.isArray(path) && path.length > 0) {
				url += path.join('/');
			}
			//处理query参数
			if (query && Object.keys(query).length > 0) {
				const arr = [];
				let queryStr = '';
				for (const k in query) {
					if (k) {
						if (query[k] != undefined) {
							arr.push(`${k}=${encodeURIComponent(query[k])}`);
						}
					}
				}
				if (arr.length > 0) {
					queryStr = '?' + arr.join('&');
				}
				url = url + queryStr;
			}
			//处理body参数
			if (body && Object.keys(body).length > 0) {
				for (const k in body) {
					if (k) {
						if (body[k] == undefined) {
							delete body[k];
						}
					}
				}
			}
			return _request({
				url,
				method,
				headers,
				body
			});
		};
	});
	return _module as Required<U>;
};
export type Func = <T = undefined>(params: RequestParams) => Promise<ResponseBody<T>>;
export const TestModule = register<{ [key in TestModuleMethodsName]: Func }>(testModule);
