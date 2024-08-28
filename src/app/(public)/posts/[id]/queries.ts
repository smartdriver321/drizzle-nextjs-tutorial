import { wait } from '@/lib/utils'

export async function getPostById(id: number) {
	await wait()

	return {
		id: 1,
		createdAt: '2024-06-23 16:05:26.954952',
		updatedAt: '2024-06-23 16:05:26.954952',
		userId: 1,
		title: 'Mock Title',
		shortDescription: 'Mock Short Description',
		content: 'Mock Content',
		categoryId: 1,
		category: {
			id: 1,
			name: 'Mock Category',
		},
		user: {
			id: 1,
			fullName: 'Mock Full Name',
		},

		comments: [
			{
				id: 1,
				parentId: null,
				userId: 1,
				content: 'Mock Content',
				postId: 1,
				createdAt: '2024-06-23 16:05:26.954952',
				updatedAt: '2024-06-23 16:05:26.954952',
				user: { id: 1, fullName: 'Mock Full Name' },
			},
		],
	}
}
