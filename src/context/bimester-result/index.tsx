import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { getBimesterResults } from '../../services/api'
import {
  BimesterFromApi,
  PropsBimesterResultContext,
  PropsBimesterResultProvider
} from './types'

const DEFAULT_VALUE: PropsBimesterResultContext = {
  results: {
    PRIMEIRO: [],
    SEGUNDO: [],
    TERCEIRO: [],
    QUARTO: []
  },
  isUpdated: false,
  setIsUpdated: () => {},
  setResults: () => {},
  fetchData: async () => {}
}

const BimesterResultContext =
  createContext<PropsBimesterResultContext>(DEFAULT_VALUE)

const BimesterResultProvider = ({ children }: PropsBimesterResultProvider) => {
  const [results, setResults] = useState(DEFAULT_VALUE.results)
  const [isUpdated, setIsUpdated] = useState(false)

  const fetchData = useCallback(async () => {
    try {
      const data = await getBimesterResults()
      const filteredResults = {
        PRIMEIRO: filterByBimester(data, 'PRIMEIRO'),
        SEGUNDO: filterByBimester(data, 'SEGUNDO'),
        TERCEIRO: filterByBimester(data, 'TERCEIRO'),
        QUARTO: filterByBimester(data, 'QUARTO')
      }
      setResults(filteredResults)
    } catch (error) {
      console.error('Erro ao buscar os resultados dos bimestres:', error)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const filterByBimester = (data: BimesterFromApi[], bimester: string) => {
    return data.filter((e) => e.bimester === bimester)
  }

  const values = useMemo(
    () => ({
      results,
      isUpdated,
      setIsUpdated,
      setResults,
      fetchData
    }),
    [fetchData, isUpdated, results]
  )

  return (
    <BimesterResultContext.Provider value={{ ...values }}>
      {children}
    </BimesterResultContext.Provider>
  )
}

export { BimesterResultProvider }
export default BimesterResultContext
