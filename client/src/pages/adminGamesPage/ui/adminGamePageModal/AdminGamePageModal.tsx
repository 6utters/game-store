import { FC } from 'react'
import { Modal } from '@/shared/ui/modal/Modal'
import { CreateGameForm } from '@/features/createGame'

interface AdminGamesPageModalProps {
	isOpen: boolean
	onClose: () => void
}

export const AdminGamesPageModal: FC<AdminGamesPageModalProps> = props => {
	const { isOpen, onClose } = props

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<CreateGameForm onClose={onClose} />
		</Modal>
	)
}
