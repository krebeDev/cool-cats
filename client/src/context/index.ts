import * as React from 'react'
import { CatsContextType } from './../types/index.type'

const CatsContext = React.createContext<CatsContextType>({} as CatsContextType)

export default CatsContext
