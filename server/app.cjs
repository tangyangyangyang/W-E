const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = express.Router();
app.use(express.static('public'));
app.use(router);

function ajax(method, url) {
	app[method](url, function (req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'content-type');
		res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS');
		//可以通过搭建本地node服务器模拟数据
		res.json({
			msg: 'success',
			code: 0,
			data: {
				...req.query,//为了方便模拟、调试  这里直接将请求参数作为返回值使用  实际开发时可以根据后端接口文档使用mockjs编写墨迹数据脚本
				...req.body
			}
		});
		next();
	});
}
//简单模拟了两个接口
ajax('post', '/testModule/getPageInfo');
ajax('get', '/testModule/getDeadLine');
app.listen(9501, function () {
	console.log(`success! nodeServer listen port 9501`);
});
