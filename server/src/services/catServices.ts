import axiosInstance from '../config/axios'
import { InternalServerError } from '../helpers/apiError'

interface CatSummary {
  id: string
  url: string
  width: number
  height: number
}

const getCats = async (pageNumber = '0'): Promise<CatSummary[] | []> => {
  try {
    const { data } = await axiosInstance.get(
      `/images/search?limit=10&page=${pageNumber}`
    )
    return data
  } catch (error) {
    throw new InternalServerError()
  }
}

const getCatsByBreed = async (
  breed: string,
  pageNumber = '0'
): Promise<CatSummary[] | []> => {
  try {
    const { data } = await axiosInstance.get(
      `/images/search?breed_ids=${breed}&limit=10&page=${pageNumber}`
    )
    return data
  } catch (error) {
    throw new InternalServerError()
  }
}

const getCat = async (catId: string): Promise<any> => {
  try {
    const { data } = await axiosInstance.get(`/images/${catId}`)
    return data
  } catch (error) {
    throw new InternalServerError()
  }
}

const getCatsBreeds = async (): Promise<any[]> => {
  try {
    const { data } = await axiosInstance.get('/breeds')
    return data
  } catch (error) {
    throw new InternalServerError()
  }
}

export default {
  getCats,
  getCatsByBreed,
  getCat,
  getCatsBreeds,
}
