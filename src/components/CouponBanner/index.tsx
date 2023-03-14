import { useTranslation } from 'react-i18next';
import { CouponBannerProps } from './interface';
import cssModule from './index.module.less';
//使用css module做样式隔离
const {
	couponBannerView,
	imageView,
	innerView,
	sloganView,
	cardView,
	restTextItem,
	cardViewTop,
	timePrevText,
	restTimeText,
	cardViewBottom,
	LinkBtn,
	offTextView,
	offTextViewValue,
	offTextViewLabel,
	cardContentView
} = cssModule;
const CouponBanner = (props: CouponBannerProps) => {
	const { t } = useTranslation();
	const {
		restTime,
		clickHandle = () => undefined,
		className = '',
		cardStyle = {},
		imageBgStyle = {},
		btnText = t('btnText')
	} = props;
	const unitMap = ['day', 'hour', 'minute', 'second']; //暂时适配到天

	return (
		<div className={`${couponBannerView} ${className}`}>
			<div className={imageView} style={imageBgStyle} />
			<div className={innerView}>
				<div className={sloganView}>
					<div>{t('sloganPrevText')}</div>
					<div>{t('sloganNextText')}</div>
				</div>
				<div className={cardView} style={cardStyle}>
					<div className={cardViewTop}>
						{restTime.length > 0 && <span className={`${timePrevText} text-white`}>{t('lastText')}</span>}
						{restTime.map((item, index) => {
							const unitIndex = index - (restTime.length - unitMap.length);
							return (
								<div className={restTextItem} key={index}>
									<span className={restTimeText}>{restTime[index]}</span>
									<span className={`text-white`}>{t(unitMap[unitIndex])}</span>
								</div>
							);
						})}
					</div>
					<div className={cardViewBottom}>
						<div className={offTextView}>
							<span className={offTextViewValue}>{t('offValue')}</span>
							<span className={offTextViewLabel}>{t('offText')}</span>
						</div>
						<div className={cardContentView}>
							<span>{t('welcomeText')}</span>
							<span>{t('subText')}</span>
							<span>{t('content')}</span>
							<span>{btnText}</span>
						</div>
						<span className={`link-btn ${LinkBtn}`} onClick={clickHandle}>
							T&C
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CouponBanner;
