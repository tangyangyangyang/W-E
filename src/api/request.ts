/*
 * 封装统一请求 没有用axios等其他第三方库是为了方便控制各个流程
 * 可以适当的添加钩子函数去适配业务
 * */

import { Request, RequestOption } from '@/api/interface';

const _request: Request = (requestOption: RequestOption = { url: '', method: 'GET' }) => {
	const baseHeaders = {
		'Content-Type': 'application/json; charset=UTF-8'
	};
	const options: Record<string, unknown> = {
		headers: {},
		method: 'get'
	};

	const { url, headers, method } = requestOption;
	options.method = method;
	options.headers = Object.assign(baseHeaders, headers);
	//比如说请求之前可以。。。。
	return new Promise((resolve, reject) => {
		fetch(url, options)
			.then((res) => {
				//数据返回之前。。。
				return res.json();
			})
			.then((res) => {
				if (res.code === 0) {
					resolve(res);
					return res;
				} else {
					reject(res);
					return res;
				}
			})
			.catch((err) => {
				reject(err);
				return err;
			});
	});
};
export default _request;
