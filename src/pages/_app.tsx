import type { AppProps } from 'next/app'
// import 'bootstrap/dist/css/bootstrap.css'
import 'tailwindcss/tailwind.css'
import '@/styles/tailwind.css';
import '@/styles/main.scss';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Component {...pageProps} />
	)
}
export default appWithTranslation(MyApp);