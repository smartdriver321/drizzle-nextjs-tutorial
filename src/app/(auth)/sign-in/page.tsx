import { redirect } from 'next/navigation'

import { auth } from '@/lib/auth'
import { UserForm } from '@/components/shared/user-form'

export default async function Page() {
	const session = await auth()

	if (!!session) redirect('/')

	return (
		<main>
			<h1 className='text-2xl font-bold py-5'>Sign in</h1>
			<UserForm
				defaultValues={{
					mode: 'signIn',
					email: '',
					password: '',
				}}
			/>
		</main>
	)
}
