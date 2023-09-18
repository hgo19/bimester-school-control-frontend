import { ReactNode } from 'react'
import { BimesterResultProvider } from './bimester-result'

type PropsGlobalContext = {
  children: ReactNode
}

export default function GlobalConext({ children }: PropsGlobalContext) {
  return <BimesterResultProvider>{children}</BimesterResultProvider>
}
