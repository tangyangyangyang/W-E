import React from 'react';
export interface Module {
	[key: string]: { method: RequestMethods; url: string };
}
export interface RequestParams {
	query?: Record<string, string | number | boolean>;
	body?: Record<string, unknown>;
	headers?: Record<string, unknown>;
	path?: React.Key[];
}

export type RequestMethods = 'GET' | 'POST' | 'DELETE' | 'PUT';
export interface RequestOption {
	url: string;
	headers?: Record<string, unknown>;
	body?: Record<string, unknown>;
	method: RequestMethods;
}
export type Request = (requestOption: RequestOption) => Promise<unknown>;

export interface ResponseBody<T> {
	code: number;
	msg: string;
	data: T;
}
