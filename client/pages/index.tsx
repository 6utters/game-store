import type { GetStaticProps, NextPage } from 'next'
import { StorePage } from '@/pages/storePage'
import { GameSchema } from '@/entities/Game'
import axios from 'axios'
import { API_URL } from '@/shared/api'

interface HomeProps {
	games?: GameSchema[]
}

const Home: NextPage<HomeProps> = ({ games }) => {
	return <StorePage games={games} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const games = await axios
			.get<GameSchema[]>(`${API_URL}/games`)
			.then(response => response.data)
		return {
			props: {
				games,
			},
			revalidate: 60,
		}
	} catch (e) {
		return {
			props: {
				games: [] as GameSchema[],
			},
		}
	}
}

export default Home
