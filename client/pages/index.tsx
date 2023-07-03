import type { GetStaticProps, NextPage } from 'next'
import { StorePage } from '@/pages/storePage'
import { GameSchema} from '@/entities/Game'
import { Genre } from '@/entities/Genre'
import { Feature } from '@/entities/Feature'
import axios from 'axios'
import { API_URL } from '@/shared/api'

interface HomeProps {
	games?: GameSchema[]
	genres?: Genre[]
	features?: Feature[]
}

const Home: NextPage<HomeProps> = props => {
	return <StorePage {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const games = await axios
			.get<GameSchema[]>(`${API_URL}/games`)
			.then(response => response.data)
		const genres = await axios
			.get<Genre[]>(`${API_URL}/genres`)
			.then(response => response.data)
		const features = await axios
			.get<Feature[]>(`${API_URL}/features`)
			.then(response => response.data)
		return {
			props: {
				games,
				genres,
				features,
			},
			revalidate: 60,
		}
	} catch (e) {
		return {
			props: {
				games: [] as GameSchema[],
				features: [] as Feature[],
				genres: [] as Genre[],
			},
		}
	}
}

export default Home
