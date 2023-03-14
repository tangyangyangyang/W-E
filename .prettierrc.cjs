
module.exports = {
	printWidth: 120, // 超过最大值换行
	tabWidth: 4, // 缩进字节数
	useTabs: true, // 缩进不使用tab，使用空格
	semi: true, // 句尾添加分号
	singleQuote: true, // 使用单引号代替双引号
	bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
	jsxBracketSameLine: false, // 在jsx中把'>' 是否单独放一行
	arrowParens: 'always', //只有一个参数的箭头函数的参数是否带圆括号（默认avoid不带）
	jsxSingleQuote: false, //在JSX中使用单引号
	trailingComma: 'none', //数组、对象最后一个元素的尾逗号
	htmlWhitespaceSensitivity: 'strict',
	vueIndentScriptAndStyle: false,
	endOfLine: 'auto'
};
