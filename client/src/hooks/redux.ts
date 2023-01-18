import { useDispatch } from 'react-redux'
import { rootActions } from '../store/root-actions'
import { bindActionCreators } from 'redux'
import { AppDispatch } from '@/app/providers/storeProvider'

export const useAppDispatch = () => useDispatch<AppDispatch>()

// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(rootActions, dispatch)
}
