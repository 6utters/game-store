import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import '../src/app/styles/globals.scss'
import '@/pages/gameDetailsPage/ui/GameDetailsSlider/GameDetailsSlider.scss'
import '@/shared/ui/multipleSelect/MultipleSelect.scss'

import type { AppProps } from 'next/app'
import { StoreProvider } from '@/app/providers/storeProvider'
import { AuthProvider, ComponentAuthFields } from '@/app/providers/authProvider'
import localFont from '@next/font/local'
import cn from 'classnames'

const inter = localFont({
	src: '../public/fonts/inter-v12-latin-regular.woff2',
	display: 'swap',
})

type EnhancedAppProps = AppProps & ComponentAuthFields

function MyApp({ Component, pageProps }: EnhancedAppProps) {
	return (
		<StoreProvider>
			<AuthProvider Component={Component}>
				<main className={cn('app', inter.className)} id={'mainApp'}>
					<Component {...pageProps} />
				</main>
			</AuthProvider>
		</StoreProvider>
	)
}

export default MyApp
