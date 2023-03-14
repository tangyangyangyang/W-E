import { useRoutes, useLocation, useNavigate } from 'react-router-dom';
import routes from './router';
import './app.less';
import '@/static/css/common.css';
import { langType, useStore } from '@/store';
import { useEffect } from 'react';
import i18n from 'i18next';

function App() {
	const location = useLocation();
	const { lang, dispatch } = useStore();
	const navigate = useNavigate();
	const langChanged = (lang: langType) => {
		i18n.changeLanguage(lang).then(() => {
			dispatch({
				type: 'lang',
				data: lang
			});
		});
	};
	const watchLocationUpdateLang = () => {
		const { pathname } = location;
		const _lang = pathname.split('/')[1] as langType;
		if (lang !== _lang) {
			langChanged(_lang);
		}
	};
	const toggleLang = (lang: langType) => {
		const { pathname } = location;
		const _lang = pathname.split('/')[1] as langType;
		const newPath = location.pathname.replace(_lang, lang);
		navigate(newPath, {
			replace: true
		});
	};
	useEffect(() => {
		watchLocationUpdateLang();
	}, [location]);
	return (
		<div>
			<div className="app-header">
				<span
					onClick={() => {
						toggleLang('zh');
					}}
				>
					zh
				</span>
				<span
					onClick={() => {
						toggleLang('en');
					}}
				>
					en
				</span>
			</div>
			{useRoutes(routes)}
		</div>
	);
}

export default App;
