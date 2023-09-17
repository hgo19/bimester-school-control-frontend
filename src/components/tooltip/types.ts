import { ReactNode } from 'react'

export type TooltipProps = {
  children: ReactNode
  delay: number
  direction: string
  content: string
}
