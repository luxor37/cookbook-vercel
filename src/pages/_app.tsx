import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import '@/styles/tailwind.css';
import '@/styles/main.scss';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { appWithTranslation } from 'next-i18next';
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}
export default appWithTranslation(MyApp);