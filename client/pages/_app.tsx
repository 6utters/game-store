import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import '../src/app/styles/globals.scss'
import '../src/components/pages/gamePage/Game/GameSlider/GameSlider.scss'
import '../src/components/ui/MultipleSelect/MultipleSelect.scss'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import AuthProvider from '../src/providers/auth.provider'
import { StoreProvider } from '@/app/providers/storeProvider'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<StoreProvider>
				<AuthProvider>
					<Component {...pageProps} />
				</AuthProvider>
			</StoreProvider>
		</QueryClientProvider>
	)
}

export default MyApp
