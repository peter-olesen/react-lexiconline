import { Navigation } from './components/Navigation/Navigation'
import { Header } from './components/Header/Header'
import { Search } from './components/Search/Search'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'

import './App.scss'

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Search />
      <Main />

      <Footer />
    </>
  )
}

export default App