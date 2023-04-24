import { Request, Response, NextFunction } from 'express'
import CatService from '../services/catServices'

export const getCats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = req.query?.page || ''
    res.json(await CatService.getCats(page as string))
  } catch (error) {
    next(error)
  }
}

export const getCatsByBreed = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const breed = req.params.breed
    const page = req.query?.page || ''
    res.json(await CatService.getCatsByBreed(breed, page as string))
  } catch (error) {
    next(error)
  }
}

export const getCat = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await CatService.getCat(req.params.catId))
  } catch (error) {
    next(error)
  }
}

export const getCatsBreeds = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await CatService.getCatsBreeds())
  } catch (error) {
    next(error)
  }
}
