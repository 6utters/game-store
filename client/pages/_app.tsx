// noinspection BadExpressionStatementJS
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import '../app/assets/styles/globals.scss'
import '../app/components/pages/gamePage/Game/GameSlider/GameSlider.scss'
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
