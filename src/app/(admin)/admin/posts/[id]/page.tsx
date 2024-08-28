import { notFound } from 'next/navigation'

import { getCategories, getTags } from '@/app/queries'
import { getCurrentUser } from '@/app/(admin)/admin/queries'
import { getPostById } from '@/app/(admin)/admin/posts/[id]/queries'
import { PostForm } from '@/components/shared/post-form'

type Props = { params: { id: string } }
export default async function Page({ params }: Props) {
	const categoriesData = await getCategories()
	const tagsData = await getTags()
	const currentUserData = await getCurrentUser()

	const postData = await getPostById(+params.id)

	if (!currentUserData || !postData) notFound()

	if (!categoriesData) return <>No categories found</>

	return (
		<main className='space-y-3'>
			<h1 className='text-2xl'>{postData.title}</h1>

			<PostForm
				categoriesData={categoriesData}
				tagsData={tagsData}
				defaultValues={{
					mode: 'edit',
					tagIds: postData.tags.map((tag) => tag.tagId),
					categoryId: postData.categoryId,
					content: postData.content,
					title: postData.title,
					userId: postData.userId,
					id: postData.id,
					shortDescription: postData.shortDescription,
				}}
			/>
		</main>
	)
}
