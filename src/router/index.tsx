import IndexPage from '../pages/index';

export default [
	{
		path: '/:i18n/index', //国际化配置 将语言标识加到了path里 产品不让加的话可以不加
		// path: '/index',
		element: <IndexPage />
	}
];
