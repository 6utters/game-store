// noinspection BadExpressionStatementJS
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import '../app/assets/styles/globals.scss'
import '../app/components/pages/gamePage/Game/GameSlider/GameSlider.scss'
import '../app/components/ui/MultipleSelect/MultipleSelect.scss'
import type { AppProps } from 'next/app'
import { setupStore } from '../app/store/store'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'
import AuthProvider from '../app/providers/auth.provider'

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
