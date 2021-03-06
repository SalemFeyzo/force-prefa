import { useNProgress } from '@tanem/react-nprogress'

const MyProgressBar = ({ isAnimating }) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  })
  return (
    <div
      className="pointer-events-none"
      style={{
        opacity: isFinished ? 0 : 1,
        transition: `opacity ${animationDuration}ms linear`,
      }}
    >
      <div
        className="w-full block top-0 h-1 z-50 bg-gradient-to-tr from-yellow-400 via-yellow-300 to-yellow-200 fixed "
        style={{
          marginLeft: `${(-1 + progress) * 100}%`,
          transition: `margin-left ${animationDuration}ms linear`,
        }}
      ></div>
    </div>
  )
}

export default MyProgressBar
