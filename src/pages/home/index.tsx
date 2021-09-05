import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { observer, useLocalObservable } from 'mobx-react-lite'
import Logo from '@/assets/logo.svg'
import useStores from '@/stores'
import './style'

function Home() {
  const { user } = useStores()
  const store = useLocalObservable(() => ({
    cnt: 0,
    increse() {
      this.cnt += 1
    },
  }))

  useEffect(() => {
    user.update({ name: 'Luna' })
  }, [])

  return (
    <div>
      <p className='title'>Home page</p>
      <Link to='/about'>About</Link>
      <div>
        <img src={Logo} width={200} />
      </div>
      <div>{user.info.name}</div>
      <div>{store.cnt}</div>
      <button onClick={store.increse}>+</button>
    </div>
  )
}

export default observer(Home)
