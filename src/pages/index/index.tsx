import CouponBanner from '../../components/CouponBanner';
import { useEffect, useState } from 'react';
import getRestTime from '../../utils/getRestTime';
import { TestModule } from '@/api';

interface DeadLineRes {
	deadLine: string;
}
const IndexPage = () => {
	const [endTime, setEndTime] = useState('');
	const [restTime, setRestTime] = useState<string[]>([]);
	const getDeadLine = () => {
		TestModule.getDeadLine<DeadLineRes>({
			//这里的参数配合本地服务 传什么返回什么
			query: {
				deadLine: '2023-03-16 00:00:00'
			}
		}).then((res) => {
			if (res.code === 0) {
				const { deadLine } = res.data;
				setEndTime(deadLine);
			}
		});
	};
	useEffect(() => {
		getDeadLine();
	}, []);
	useEffect(() => {
		const timer = setInterval(() => {
			setRestTime(getRestTime(endTime));
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, [endTime]);
	return (
		<div>
			<CouponBanner restTime={restTime} cardStyle={{ opacity: 0.99 }} />
		</div>
	);
};
export default IndexPage;
