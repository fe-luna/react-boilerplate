import { createContext, useContext } from 'react'
import userStore from './user'

const storeContxt = createContext({
  user: userStore,
})
const useStores = () => useContext(storeContxt)

export default useStores
