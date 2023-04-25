import { Container, Navbar } from 'react-bootstrap'
import Logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const Layout = ({ children }: any): JSX.Element => {
  const year = new Date().getFullYear()

  return (
    <>
      <header>
        <Container>
          <Navbar>
            <Link to='/' className='text-secondary'>
              <img src={Logo} alt='cool-cats' width={40} height='auto' />
              <strong>Cool Cats</strong>
            </Link>
          </Navbar>
        </Container>
      </header>
      <main>
        <Container>{children}</Container>
      </main>
      <footer className='pt-5'>
        <Container>
          <p className='text-center'>
            &copy;{year} | Powered by:{' '}
            <a href='https://thecatapi.com/' target='_blank' rel='noreferrer'>
              TheCatsAPI
            </a>{' '}
            | Designed by:{' '}
            <a
              href='https://github.com/krebeDev'
              target='_blank'
              rel='noreferrer'
            >
              krebeDev
            </a>
          </p>
        </Container>
      </footer>
    </>
  )
}

export default Layout
