import * as React from 'react'
import { PageShellProps } from '../types/index.type'

const PageShell = ({
  loading,
  error,
  children,
}: PageShellProps): JSX.Element => {
  return (
    <>
      {loading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : error ? (
        <div>
          <p>{error}</p>
        </div>
      ) : (
        <> {children}</>
      )}
    </>
  )
}

export default PageShell
