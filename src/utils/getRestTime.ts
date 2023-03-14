const formatNum2String = (num: number): string => {
	if (num < 0) return '00';
	return num < 10 ? '0' + num : num + '';
};
/**
 * @Description 根据时间字符串获取剩余时间
 * @methodsName getRestTime
 * @param {string}timeStr
 * @return Array<string>
 * @author 略略
 */
const getRestTime = (timeStr: string): string[] => {
	if (!timeStr) return ['00', '00', '00', '00'];
	const nowTime = new Date(),
		endTime = new Date(timeStr);
	const leftTime = endTime.getTime() - nowTime.getTime(),
		d = formatNum2String(Math.floor(leftTime / (1000 * 60 * 60 * 24))),
		h = formatNum2String(Math.floor((leftTime / (1000 * 60 * 60)) % 24)),
		m = formatNum2String(Math.floor((leftTime / (1000 * 60)) % 60)),
		s = formatNum2String(Math.floor((leftTime / 1000) % 60));
	const result = [d, h, m, s];
	const idx = result.findIndex((item) => item === '00');
	return result.slice(idx + 1, result.length);
};
export default getRestTime;
