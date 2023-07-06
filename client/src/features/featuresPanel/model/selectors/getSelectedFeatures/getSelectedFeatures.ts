import { StateSchema } from '@/app/providers/storeProvider'

export const getSelectedFeatures = (state: StateSchema) =>
	state?.featuresPanel?.selectedFeatures ?? []
