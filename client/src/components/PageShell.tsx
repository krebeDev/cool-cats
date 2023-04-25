import { PageShellProps } from '../types/index.type'
import { Toast, Spinner, Container } from 'react-bootstrap'
import styled from 'styled-components'
import Layout from './Layout'

const StyledDiv = styled.div`
  height: calc(100vh - 56px - 85px);
`

const PageShell = ({
  loading,
  error,
  children,
}: PageShellProps): JSX.Element => {
  return (
    <Layout>
      {loading ? (
        <StyledDiv className='d-flex justify-content-center flex-column'>
          <Spinner
            animation='grow'
            role='status'
            variant='primary'
            className='mx-auto'
          >
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        </StyledDiv>
      ) : error ? (
        <Container className='d-flex align-item-center justify-content-center px-2 py-5'>
          <Toast>
            <Toast.Header closeButton={false}>
              <strong className='mr-auto'>Error loading data</strong>
            </Toast.Header>
            <Toast.Body>{<p>{error}</p>}</Toast.Body>
          </Toast>
        </Container>
      ) : (
        <>{children}</>
      )}
    </Layout>
  )
}

export default PageShell
