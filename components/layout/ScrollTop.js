import { useEffect, useState } from 'react'
import { classNames } from '../../utils/classNames'

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 700) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className=" z-50 fixed bottom-10  left-5">
      <button
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100' : 'opacity-0',
          'inline-flex items-center p-1 rounded-full shadow-sm text-white bg-yellow-400 transition-opacity hover:bg-yellow-500 focus:outline-none focus:ring-offset-2 focus:ring-yellow-400',
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
          />
        </svg>
      </button>
    </div>
  )
}

export default ScrollTop
