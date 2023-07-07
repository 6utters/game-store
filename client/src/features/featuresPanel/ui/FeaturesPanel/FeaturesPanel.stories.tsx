import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FeaturesPanel } from './FeaturesPanel'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'

export default {
	title: 'features/FeaturesPanel',
	component: FeaturesPanel,
	args: {
		features: [
			{ featureName: 'test genre 1', id: 1 },
			{ featureName: 'test genre 2', id: 2 },
		],
	},
	decorators: [StoreDecorator({})],
} as ComponentMeta<typeof FeaturesPanel>

const Template: ComponentStory<typeof FeaturesPanel> = args => (
	<FeaturesPanel {...args} />
)

export const FirstSelected = Template.bind({})
FirstSelected.args = {
	selectedFeatures: [{ featureName: 'test genre 1', id: 1 }],
}

export const SecondSelected = Template.bind({})
SecondSelected.args = {
	selectedFeatures: [{ featureName: 'test genre 2', id: 2 }],
}
