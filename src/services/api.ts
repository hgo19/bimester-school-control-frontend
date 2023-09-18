import axios from 'axios'

// const PORT = 3001

const API_URL = `http://localhost:3001/results/`

export const getBimesterResults = async () => {
  const response = await axios.get(API_URL)

  return response.data
}
