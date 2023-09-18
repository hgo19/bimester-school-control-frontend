import { ReactNode } from 'react'

export type BimesterFromApi = {
  id: string
  bimester: string
  discipline: string
  grade: number
  createdAt: string
}

type ResultsType = {
  first: BimesterFromApi[]
  second: BimesterFromApi[]
  third: BimesterFromApi[]
  fourth: BimesterFromApi[]
}

export type PropsBimesterResultContext = {
  results: ResultsType
  isUpdated: boolean
  setIsUpdated: React.Dispatch<React.SetStateAction<boolean>>
  setResults: React.Dispatch<React.SetStateAction<ResultsType>>
  fetchData: () => Promise<void>
}

export type PropsBimesterResultProvider = {
  children: ReactNode
}
