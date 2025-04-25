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
      <h2>Произошла ошибка!</h2>
      <blockquote>
        <code>{error.message}</code>
      </blockquote>
      {reset && (
        <button
          type="button"
          onClick={() => reset()}
        >
          Попробовать снова
        </button>
      )}
    </div>
  )
}
