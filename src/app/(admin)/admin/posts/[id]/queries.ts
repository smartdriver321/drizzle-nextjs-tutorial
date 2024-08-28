import { wait } from '@/lib/utils'

export async function getPostById(id: number) {
	await wait()
	return {
		id: 1,
		userId: 1,
		title: 'Mock Title',
		shortDescription: 'Mock Short Description',
		content: 'Mock Content',
		categoryId: 1,
		tags: [
			{
				postId: 1,
				tagId: 1,
			},
		],
	}
}
