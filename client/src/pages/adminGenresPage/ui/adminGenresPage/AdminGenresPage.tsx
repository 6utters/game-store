import { FC, memo, useCallback, useState } from 'react'
import { MainLayout } from '@/shared/layouts/mainLayout/MainLayout'
import { AdminLayout } from '@/shared/layouts/adminLayout/AdminLayout'
import { FiPlus } from 'react-icons/fi'
import { GenreList, useDeleteGenre, useFetchGenres } from '@/entities/Genre'
import { AdminGenresPageModal } from '../adminGenresPageModal/AdminGenresPageModal'
import styles from './AdminGenresPage.module.scss'

export const AdminGenresPage: FC = memo(() => {
	const [modalActive, setModalActive] = useState(false)
	const { data: genres, error, isLoading } = useFetchGenres()
	const [deleteGenre] = useDeleteGenre()

	const deleteHandler = useCallback(
		(genreId: number) => {
			deleteGenre(genreId)
		},
		[deleteGenre],
	)

	const onModalClose = useCallback(() => {
		setModalActive(false)
	}, [])

	return (
		<MainLayout
			withNavbar={true}
			title={'D&D Games | AdminPage panel | Genres Panel'}
			withFooter={false}
		>
			<AdminLayout>
				<div className={styles.container}>
					<div className={styles.content}>
						<div className={styles.addNewGenreButton}>
							<FiPlus onClick={() => setModalActive(true)} />
						</div>
						<GenreList
							genres={genres}
							isLoading={isLoading}
							onDelete={deleteHandler}
							error={error}
						/>
						{modalActive && (
							<AdminGenresPageModal
								isOpen={modalActive}
								onClose={onModalClose}
							/>
						)}
					</div>
				</div>
			</AdminLayout>
		</MainLayout>
	)
})
