import type { NextPage } from 'next'
import Layout from '../src/components/layout/Layout.'
import About from '../src/components/pages/about/About'

const AboutPage: NextPage = () => {
	return (
		<Layout
			showHeader={true}
			title={'D&D Games | About page'}
			showFooter={true}
		>
			<About />
		</Layout>
	)
}

export default AboutPage
