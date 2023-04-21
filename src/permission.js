import {router} from '@/router'

// 全局前置守卫
let hasGetInfo = false
router.beforeEach((to, from, next) => {

	const token = getToken()

	// 没有登录，强制跳转回登录页
	if (!token && to.path != '/login') {
		toast('请先登录', 'error')
		return next({ path: '/login' })
	}

	// 防止重复登录
	if (token && to.path == '/login') {
		toast('请勿重复登录', 'error')
		return next({ path: from.path ? from.path : '/' })
	}

	const {getStoreInfo,getStoreNav,getStoreAuthority} = useAdminStore()
	// 如果用户登录了，则获取用户信息并存储在 pinia 中
	let hasNewRoutes = false
	if (token && !hasNewRoutes) {
		console.log('get')
		getStoreInfo().then(()=>{
			hasGetInfo = true
			getStoreNav().then(res1=>{
				hasNewRoutes = addRoutes(res1.data)
				getStoreAuthority()
			})
		})
	}
	hasNewRoutes ? next(to.fullPath) : next()
})

// 全局后置守卫
router.afterEach(()=>hideFullLoading())
