import { ReactNode, useState } from 'react'
import './styles.css'

type TooltipProps = {
  children: ReactNode
  delay: number
  direction: string
  content: string
}

export default function Tooltip({
  children,
  delay,
  direction,
  content
}: TooltipProps) {
  let timeout: number
  const [active, setActive] = useState(false)

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true)
    }, delay || 400)
  }

  const hideTip = () => {
    clearInterval(timeout)
    setActive(false)
  }

  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {children}
      {active && (
        <div className={`Tooltip-Tip ${direction || 'top'}`}>
          {/* Content */}
          {content}
        </div>
      )}
    </div>
  )
}
