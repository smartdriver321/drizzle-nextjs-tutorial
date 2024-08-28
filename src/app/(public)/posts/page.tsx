import { getPosts, getPostsCount } from '@/app/queries'
import { PostCards } from '@/components/shared/post-cards'
import { Pagination } from '@/components/shared/pagination'

type Props = { searchParams: { page?: string } }
export default async function Page(props: Props) {
	const limit = 8

	const page = Number(props.searchParams.page) - 1 || 0

	const [postsCount, postsData] = await Promise.all([
		getPostsCount(),
		getPosts(page, limit),
	])

	const pagesCount = Math.ceil((postsCount || 0) / limit)

	return (
		<main>
			<h1 className='text-2xl font-bold py-5'>All Posts</h1>
			<PostCards data={postsData} />
			<Pagination page={page} pagesCount={pagesCount} urlPrefix='/posts?' />
		</main>
	)
}
