import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { UploadField } from './UploadField'

export default {
	title: 'shared/UploadField',
	component: UploadField,
} as ComponentMeta<typeof UploadField>

const Template: ComponentStory<typeof UploadField> = args => (
	<UploadField {...args} />
)

export const OrdinarySingle = Template.bind({})
OrdinarySingle.args = {
	multiple: false,
	title: 'Choose file',
}

export const OrdinaryMultiple = Template.bind({})
OrdinaryMultiple.args = {
	multiple: true,
	title: 'Choose files',
}
