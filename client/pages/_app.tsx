import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import '../src/app/styles/globals.scss'
import '../src/components/pages/gamePage/Game/GameSlider/GameSlider.scss'
import '../src/components/ui/MultipleSelect/MultipleSelect.scss'

import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { StoreProvider } from '@/app/providers/storeProvider'
import { AuthProvider, ComponentAuthFields } from '@/app/providers/authProvider'
import localFont from '@next/font/local'

const inter = localFont({
	src: '../public/fonts/inter-v12-latin-regular.woff2',
	display: 'swap',
})

const queryClient = new QueryClient()

type EnhancedAppProps = AppProps & ComponentAuthFields

function MyApp({ Component, pageProps }: EnhancedAppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<StoreProvider>
				<AuthProvider Component={Component}>
					<main className={inter.className}>
						<Component {...pageProps} />
					</main>
				</AuthProvider>
			</StoreProvider>
		</QueryClientProvider>
	)
}

export default MyApp
