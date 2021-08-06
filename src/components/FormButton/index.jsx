import { useRouter } from 'next/router'

export const FormButton = ({ className, children, to }) => {
  const router = useRouter()
  return (
    <button onClick={() => router.push(to)} className={`btn btn-primary btn-block ${className}`}>
      {children}
    </button>
  )
}
