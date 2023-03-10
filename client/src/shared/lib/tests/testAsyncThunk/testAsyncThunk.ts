import { StateSchema } from '@/app/providers/storeProvider'
import axios, { AxiosStatic } from 'axios'
import { AsyncThunkAction } from '@reduxjs/toolkit'

type ActionCreatorType<Returned, Arg, RejectedValue> = (
	arg: Arg,
) => AsyncThunkAction<Returned, Arg, { rejectValue: RejectedValue }>

jest.mock('axios')
const mockedAxios = jest.mocked(axios)

export class TestAsyncThunk<Returned, Arg, RejectedValue> {
	dispatch: jest.MockedFn<any>
	getState: () => StateSchema
	actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>
	api: jest.MockedFunctionDeep<AxiosStatic>
	navigate: jest.MockedFn<any>

	constructor(
		actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>,
		state?: DeepPartial<StateSchema>,
	) {
		this.dispatch = jest.fn()
		this.getState = jest.fn(() => state as StateSchema)
		this.actionCreator = actionCreator
		this.api = mockedAxios
		this.navigate = jest.fn()
	}

	async callThunk(arg: Arg) {
		const action = this.actionCreator(arg)
		const result = await action(this.dispatch, this.getState, {
			api: this.api,
			navigate: this.navigate,
		})

		return result
	}
}
