import axiosInstance from '../config/axios'
import { InternalServerError } from '../helpers/apiError'
import getNextBatchUrl from '../helpers/nextBatch'

interface APIResponse {
  result: any[]
  next: string | null
}

const queryLimit = 10

const getCats = async (page = '0'): Promise<APIResponse> => {
  try {
    const { data } = await axiosInstance.get(
      `/images/search?limit=${queryLimit}&page=${page}`
    )
    const nextBatchUrl = getNextBatchUrl(data.length, queryLimit, page, '/')
    return { result: data, next: nextBatchUrl }
  } catch (error) {
    throw new InternalServerError()
  }
}

const getCatsByBreed = async (
  breed: string,
  page = '0'
): Promise<APIResponse> => {
  try {
    const { data } = await axiosInstance.get(
      `/images/search?breed_ids=${breed}&limit=${queryLimit}&page=${page}`
    )
    const nextBatchUrl = getNextBatchUrl(
      data.length,
      queryLimit,
      page,
      `/breeds/${breed}`
    )
    return { result: data, next: nextBatchUrl }
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
