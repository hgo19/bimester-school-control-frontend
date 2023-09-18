import { createContext, useEffect, useRef, useState } from 'react'
import { getBimesterResults } from '../../services/api'
import {
  BimesterFromApi,
  PropsBimesterResultContext,
  PropsBimesterResultProvider
} from './types'

const DEFAULT_VALUE: PropsBimesterResultContext = {
  results: {
    first: [],
    second: [],
    third: [],
    fourth: []
  },
  isUpdated: false,
  setIsUpdated: () => {},
  setResults: () => {}
}

const BimesterResultContext =
  createContext<PropsBimesterResultContext>(DEFAULT_VALUE)

const BimesterResultProvider = ({ children }: PropsBimesterResultProvider) => {
  const [results, setResults] = useState(DEFAULT_VALUE.results)
  const [isUpdated, setIsUpdated] = useState(false)

  const isInitialMount = useRef(true)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      // Your useEffect code here to be run on update
      const fetchData = async () => {
        try {
          const data = await getBimesterResults()
          const filteredResults = {
            first: filterByBimester(data, 'PRIMEIRO'),
            second: filterByBimester(data, 'SEGUNDO'),
            third: filterByBimester(data, 'TERCEIRO'),
            fourth: filterByBimester(data, 'QUARTO')
          }
          setResults(filteredResults)
        } catch (error) {
          console.error('Erro ao buscar os resultados dos bimestres:', error)
        }
      }
      fetchData()
    }
  }, [setResults])

  const filterByBimester = (data: BimesterFromApi[], bimester: string) => {
    return data.filter((e) => e.bimester === bimester)
  }

  return (
    <BimesterResultContext.Provider
      value={{ results, isUpdated, setIsUpdated, setResults }}
    >
      {children}
    </BimesterResultContext.Provider>
  )
}

export { BimesterResultProvider }
export default BimesterResultContext
