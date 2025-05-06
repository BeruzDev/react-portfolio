import { useState, useEffect } from 'react'

export const useHamburguer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 899)
  const [isOpen, setIsOpen] = useState(false)

  const updateWindowSize = () => {
		setIsMobile(window.innerWidth <= 899)
	}

	useEffect(() => {
		window.addEventListener('resize', updateWindowSize)

		return () => {
			window.removeEventListener('resize', updateWindowSize)
		}
	}, []);

  const toggleMenu = () => setIsOpen((prev) => !prev)

  return { isMobile, isOpen, toggleMenu }
}
