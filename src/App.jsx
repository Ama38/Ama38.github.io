import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clicker from './Clicker'
import { atom, useAtom } from 'jotai'
import Balance from './Balance'
import Header from './Header'
import axios from 'axios'
export const balanceState = atom(0)

function App() {
  const [count, setCount] = useState(0)
  const [balance, setBalance] = useAtom(balanceState)
  const tg = window.Telegram.WebApp;
  const telegramId = tg.initDataUnsafe?.user?.id;
  console.log(telegramId)
  // useEffect(() => {
  //   fetch(`http://87.228.9.138:8081/login/${telegramId}`, {
  //     method: 'GET',
  //                 headers: {
  //                     'Content-Type': 'application/json'
  //                 }
  // }).then((response) => {return response.json()}).then((json) => {
  //   setBalance(json.data.balance.data.balance)
  //   })
  //     //setBalance(response.data.balance
  // }, [])

  useEffect(() => {
    fetch(`http://87.228.9.138:8081/login/${1}`, {method: "GET"}).then((response) => { return response.json() }).then((json) => {
         setBalance(json.data.balance.data.balance)
         })
           //setBalance(response.data.balance
       }, [])
  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> 
      <h1>Vite + React</h1> */}
      <Header />
      <Balance />
      <Clicker />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

