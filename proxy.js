/*
 * 代理
 * 可配置不同模块到不同环境 开发、测试、灰度、线上
 * */
const proxyConf = {
	target: 'http://127.0.0.1:9501',
	servers: [
		{
			key: '/testModule'
		}
	]
};
const proxy = {};
proxyConf.servers.forEach((item) => {
	proxy[item.key] = {
		target: item.target || proxyConf.target,
		changeOrigin: true
	};
});
export default proxy;
