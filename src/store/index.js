
export const useAdminStore = defineStore('admin', {
	state: () => ({
		//管理员信息
		adminInfo: {},
		sideWidth: '220px',
		menus: [],
		authorities: []
	}),
	actions: {
		// 登录
		storeLogin(username, password) {
			return new Promise((resolve, reject) => {
				login(username, password)
					.then(res => {
						if(res.code===1){
							setToken(res.data.accessToken)
						}
						resolve(res)
					})
					.catch(err => reject(err))
			})
		},
		// 获取当前登录用户信息
		getStoreInfo() {
			return new Promise((resolve, reject) => {
				getInfo()
					.then(res => {
						console.log(res.data)
						this.adminInfo = res.data
						resolve(res)
					})
					.catch(err => reject(err))
			})
		},
		// 获取导航菜单
		getStoreNav(){
			return new Promise((reslove,reject)=>{
				getNav()
				.then(res=>{
					console.log("获取导航菜单")
					console.log(res.data)
					this.menus = res.data
					reslove(res)
				})
				.catch(err => reject(err))
			})
		},
		// 获取所有授权信息
		getStoreAuthority(){
			return new Promise((reslove,reject)=>{
				getAuthority()
				.then(res=>{
					console.log(res.data)
					this.authorities = res.data
					reslove(res)
				})
				.catch(err => reject(err))
			})
		},
		// 退出登录
		logout() {
			return new Promise((resolve, reject) => {
				logout()
					.then(res => {
						// 移除 cookie里的 token
						removeToken()
						// 移除 cookie 里的 tabList
						// 清空状态
						this.adminInfo = {}
						resolve(res)
					})
					.catch(err => reject(err))
			})
		},
		// 伸缩
		handleSideWidth() {
			this.sideWidth = this.sideWidth === '220px' ? '64px' : '220px'
		}
	}
})
