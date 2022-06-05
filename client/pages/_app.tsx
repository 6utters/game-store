// noinspection BadExpressionStatementJS

import '../app/assets/styles/globals.scss'
import type { AppProps } from 'next/app'
import { setupStore } from '../app/store/store'
import { Provider } from 'react-redux'

const store = setupStore()

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	)
}

export default MyApp
