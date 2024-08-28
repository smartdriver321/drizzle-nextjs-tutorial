import { notFound } from 'next/navigation'

import { getUser, getUserPosts, getUserPostsCount } from '@/app/queries'
import { PostCards } from '@/components/shared/post-cards'
import { Pagination } from '@/components/shared/pagination'

type Props = { params: { id: string }; searchParams: { page?: string } }
export default async function Page(props: Props) {
	const userId = +props.params.id
	const limit = 8
	const page = Number(props.searchParams.page) - 1 || 0

	const [userPostsCount, userPostsData, userData] = await Promise.all([
		getUserPostsCount(userId),
		getUserPosts({ userId, limit, page }),
		getUser(userId),
	])

	if (!userData) notFound()

	const pagesCount = Math.ceil((userPostsCount || 0) / limit)

	return (
		<main>
			<h1 className='text-2xl font-bold py-5'>{userData.fullName} Posts</h1>
			<PostCards data={userPostsData} />
			<Pagination
				page={page}
				pagesCount={pagesCount}
				urlPrefix={`/posts/user/${props.params.id}?`}
			/>
		</main>
	)
}
