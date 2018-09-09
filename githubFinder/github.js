class Github {
	constructor(){
		this.client_id = '4ff4d74f559357ba4dd6'
		this.client_secret = 'c9ad4794daecd5fb57a8746ccc31c6c7fad72647'
	}

  async getUser(user){
    const profileRes = await fetch(` https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`)
    const profile = await profileRes.json()

    return {
    	profile
    }
  }
}
