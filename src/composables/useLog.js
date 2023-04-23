export function useLog() {
	const tableData = ref([])
	// 分页信息相关变量
	const currentPage = ref(1)
	const total = ref(0)
	const limit = ref(5)
	const title = ref('')
	const pagecount = ref(0)

	// 页面挂载后，调用获取数据的方法
	onMounted(() => {
		getData()
	})

	// 获取数据
	const getData = (p = null) => {
		if (typeof p == 'number') {
			currentPage.value = p
		}
		getLogLoginPage(currentPage.value, limit.value)
			.then(res => {
				console.log(res)
				tableData.value = res.data.list
				total.value = res.data.total
				pagecount.value = parseInt(total.value / limit.value + 1)
			})
			.finally(() => {})
	}

	return {
		tableData,
		pagecount,
		currentPage,
		total,
		limit,
		title,
		getData
	}
}
