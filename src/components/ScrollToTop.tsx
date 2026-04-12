import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Garante que ao navegar entre páginas, a tela volta ao topo
export const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}
