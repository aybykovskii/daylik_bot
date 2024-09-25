import { useEffect } from 'react'

type Props = {
	error: Error & { digest?: string }
	reset?: () => void
}

// TODO: Add branded error page
export function ErrorPage({ error, reset }: Readonly<Props>) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<div>
			<h2>An unhandled error occurred!</h2>
			<blockquote>
				<code>{error.message}</code>
			</blockquote>
			{reset && (
				<button type="button" onClick={() => reset()}>
					Try again
				</button>
			)}
		</div>
	)
}
