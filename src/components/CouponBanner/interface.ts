import { CSSProperties } from 'react';

//简单暴露一些可配置项 具体可配置项的确认还是要根据业务来看 毕竟每个公司的产品水平不一样 。。。
export interface CouponBannerProps {
	restTime: string[];
	clickHandle?: () => void;
	className?: string;
	cardStyle?: CSSProperties;
	imageBgStyle?: CSSProperties;
	btnText?: string;
}
