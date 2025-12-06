// app/[locale]/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">No Encontrado</h2>
      <p>No pudimos encontrar el recurso solicitado</p>
      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        Volver al Inicio
      </Link>
    </div>
  )
}