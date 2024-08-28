import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/app/globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/provider/theme-provider'
import { Navbar } from '@/components/shared/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Drizzle Blog',
	description: 'Blog Built with Drizzle',
}

export default async function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={cn('container max-w-7xl pb-5', inter.className)}>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
