import { makeAutoObservable, runInAction } from 'mobx'

interface UserInfo {
  name: string
}

class UserStore {
  info: UserInfo = {} as any

  constructor() {
    makeAutoObservable(this)
  }

  async update(info: UserInfo) {
    await new Promise((resolve) => setTimeout(resolve, 300))
    runInAction(() => {
      this.info = info
    })
  }
}

const userStore = new UserStore()
export default userStore
