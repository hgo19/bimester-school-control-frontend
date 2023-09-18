import axios from 'axios'

// const PORT = 3001

const API_URL = `http://localhost:3001/results/`

export const getBimesterResults = async () => {
  const response = await axios.get(API_URL)

  return response.data
}

export const postBimesterResult = async (
  bimester: string,
  discipline: string,
  grade: number
) => {
  const response = await axios.post(API_URL, { bimester, discipline, grade })
  return response.data
}

export const deleteBimesterResult = async (id: string) => {
  await axios.delete(API_URL + id)
}
