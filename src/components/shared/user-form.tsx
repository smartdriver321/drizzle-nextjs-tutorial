'use client'

import { SubmitHandler, useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { userSchema, UserSchema } from '@/db/schema/user'
import { updateUser } from '@/app/(admin)/admin/actions'
import { signIn } from '@/app/(auth)/sign-in/actions'
import { signUp } from '@/app/(auth)/sign-up/actions'
import { Input } from '@/components/form-controllers/input'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { toast } from '@/lib/utils'

type Props = {
	defaultValues: UserSchema
}

export function UserForm({ defaultValues }: Props) {
	const form = useForm<UserSchema>({
		defaultValues,
		resolver: zodResolver(userSchema),
	})

	const mode = useWatch({ control: form.control, name: 'mode' })

	const onSubmit: SubmitHandler<UserSchema> = async (data) => {
		let response

		switch (data.mode) {
			case 'Update':
				response = await updateUser(data)
				break
			case 'signUp':
				response = await signUp(data)
				break
			case 'signIn':
				response = await signIn(data)
				break
		}

		toast(response)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='max-w-96 space-y-6'
			>
				{(mode === 'signUp' || mode === 'Update') && (
					<>
						<Input control={form.control} name='fullName' label='Full Name' />
						<Input
							control={form.control}
							name='age'
							label='Age'
							type='number'
						/>
					</>
				)}

				{(mode === 'signUp' || mode === 'signIn') && (
					<>
						<Input
							control={form.control}
							name='email'
							label='Email'
							type='email'
						/>
						<Input
							control={form.control}
							name='password'
							label='Password'
							type='password'
						/>
					</>
				)}

				<Button type='submit'>Submit</Button>
			</form>
		</Form>
	)
}
