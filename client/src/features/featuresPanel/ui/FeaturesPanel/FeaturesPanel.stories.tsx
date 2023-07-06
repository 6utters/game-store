import { ComponentMeta, ComponentStory } from '@storybook/react'
import FeatureList from './FeaturesPanel'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'

export default {
	title: 'widgets/FeaturesPanel',
	component: FeatureList,
	args: {
		features: [
			{ featureName: 'test genre 1', id: 1 },
			{ featureName: 'test genre 2', id: 2 },
		],
	},
	decorators: [StoreDecorator({})],
} as ComponentMeta<typeof FeatureList>

const Template: ComponentStory<typeof FeatureList> = args => (
	<FeatureList {...args} />
)

export const FirstSelected = Template.bind({})
FirstSelected.args = {
	selectedFeatures: [{ featureName: 'test genre 1', id: 1 }],
}

export const SecondSelected = Template.bind({})
SecondSelected.args = {
	selectedFeatures: [{ featureName: 'test genre 2', id: 2 }],
}
