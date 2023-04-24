import { Request, Response, NextFunction } from 'express'

import { BadRequestError } from '../helpers/apiError'

export default function (req: Request, res: Response, next: NextFunction) {
  if (req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH') {
    next(new BadRequestError('Request method not supported at this time'))
  } else {
    next()
  }
}
