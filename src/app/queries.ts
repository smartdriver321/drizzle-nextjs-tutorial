import { wait } from '@/lib/utils'

export async function getCategories() {
	await wait()
	return [
		{
			id: 1,
			name: 'Mock Category',
		},
	]
}

export async function getTags() {
	await wait()
	return [{ id: 1, name: 'Mock Tag' }]
}

export async function getRelatedPostsByCategoryId(categoryId: number) {
	await wait()
	return [
		{
			id: 1,
			updatedAt: '2024-06-23 16:05:26.954952',
			title: 'Mock Title',
			shortDescription: 'Mock Short Description',
		},
	]
}

export async function getPostsCount(searchTerm?: string) {
	await wait()
	return 1
}

export async function getPosts(
	page: number,
	limit: number,
	searchTerm?: string
) {
	await wait()
	return [
		{
			id: 1,
			updatedAt: '2024-06-23 16:05:26.954952',
			createdAt: '2024-06-23 16:05:26.954952',
			userId: 1,
			title: 'Mock Title',
			shortDescription: 'Mock Short Description',
			content: 'Mock Content',
			categoryId: 1,
		},
	]
}

export async function getUserPostsCount(userId: number) {
	await wait()
	return 1
}

export async function getUserPosts({
	limit,
	page,
	userId,
}: {
	limit: number
	page: number
	userId: number
}) {
	await wait()
	return [
		{
			id: 1,
			createdAt: '2024-06-23 16:05:26.954952',
			updatedAt: '2024-06-23 16:05:26.954952',
			userId: 1,
			title: 'Mock Title',
			shortDescription: 'Mock Short Description',
			content: 'Mock Content',
			categoryId: 1,
		},
	]
}

export async function getUser(userId: number) {
	await wait()
	return {
		id: 1,
		fullName: 'Mock Full Name',
		email: 'Mock Email',
	}
}
