import React from 'react'
import logo from './logo.svg'
import './App.css'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  bold: {
    fontFamily: '2px',
  },
})

function App() {
  console.log('as')

  const myArray = ['bb', 'aa']
  const teste = {
    a: 'a',
    b: () => {
      console.log(`asdasd`)
    },
  }

  // let abvc = {
  //   abc: "abc",
  //   teste: "teste",
  // }

  const a = undefined

  function hihi() {}

  const styles = useStyles()

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit
          <code>src/App.tsx</code>
          and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
