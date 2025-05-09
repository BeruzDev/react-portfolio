import { useState, useEffect } from 'react'

export const useHamburguer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 899)
	const [isSmallMobile, setIsSmallMobile] = useState(window.innerWidth <= 500);
  const [isOpen, setIsOpen] = useState(false)

  const updateWindowSize = () => {
		setIsMobile(window.innerWidth <= 899)
		setIsSmallMobile(window.innerWidth <= 500)
	}

	useEffect(() => {
		window.addEventListener('resize', updateWindowSize)

		return () => {
			window.removeEventListener('resize', updateWindowSize)
		}
	}, []);

  const toggleMenu = () => setIsOpen((prev) => !prev)

  return { isMobile, isSmallMobile, isOpen, toggleMenu }
}
