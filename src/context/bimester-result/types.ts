import { ReactNode } from 'react'

export type BimesterFromApi = {
  bimester: string
  discipline: string
  grade: number
  createdAt: string
}

type ResultsType = {
  first: BimesterFromApi[] | undefined
  second: BimesterFromApi[] | undefined
  third: BimesterFromApi[] | undefined
  fourth: BimesterFromApi[] | undefined
}

export type PropsBimesterResultContext = {
  results: ResultsType
  isUpdated: boolean
  setIsUpdated: React.Dispatch<React.SetStateAction<boolean>>
}

export type PropsBimesterResultProvider = {
  children: ReactNode
}
