import { Router } from 'express'

import {
  getCat,
  getCats,
  getCatsBreeds,
  getCatsByBreed,
} from './../controllers/catsController'

const router = Router()

router.get('/', getCats)
router.get('/:catId', getCat)
router.get('/breeds', getCatsBreeds)
router.get('/breeds/:breed', getCatsByBreed)

export default router
