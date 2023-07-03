import { ComponentMeta, ComponentStory } from '@storybook/react'
import FeatureFilter from './FeatureFilter'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'

export default {
	title: 'widgets/FeatureFilter',
	component: FeatureFilter,
	args: {
		features: [
			{ featureName: 'test genre 1', id: 1 },
			{ featureName: 'test genre 2', id: 2 },
		],
		selectedFeatures: [{ featureName: 'test genre 1', id: 1 }],
	},
	decorators: [StoreDecorator()],
} as ComponentMeta<typeof FeatureFilter>

const Template: ComponentStory<typeof FeatureFilter> = args => (
	<FeatureFilter {...args} />
)

export const Ordinary = Template.bind({})
Ordinary.args = {}
