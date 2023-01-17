// noinspection BadExpressionStatementJS
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import '../src/app/styles/globals.scss'
import '../src/components/pages/gamePage/Game/GameSlider/GameSlider.scss'
import '../src/components/ui/MultipleSelect/MultipleSelect.scss'
import type { AppProps } from 'next/app'
import { setupStore } from '../src/store/store'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'
import AuthProvider from '../src/providers/auth.provider'

const store = setupStore()
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<AuthProvider>
					<Component {...pageProps} />
				</AuthProvider>
			</Provider>
		</QueryClientProvider>
	)
}

export default MyApp
