import Link from 'next/link'

import { getCategories } from '@/app/queries'
import { Search } from '@/components/shared/search'
import { AuthUserAvatar } from '@/components/shared/auth-user-avatar'
import { Button } from '@/components/ui/button'

export async function Navbar() {
	const categoriesData = (await getCategories()) || []

	return (
		<nav className='flex gap-5 py-5 justify-between items-center'>
			<div>
				<Button variant='ghost' asChild>
					<Link href='/'>Home</Link>
				</Button>
				{categoriesData.map((category) => (
					<Button variant='ghost' asChild key={category.id}>
						<Link href={`/categories/${category.id}`}>{category.name}</Link>
					</Button>
				))}
			</div>

			<Search />
			<AuthUserAvatar />
		</nav>
	)
}
