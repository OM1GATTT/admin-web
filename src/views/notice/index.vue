<template>
	<el-card shadow="never" class="border-0">
		<!-- 新增/刷新 -->
		<div class="f-between mb-4">
			<el-button class="m-btn px-8 py-4">新增</el-button>
			<el-tooltip content="刷新数据" placement="top" effect="dark">
				<el-button text @click="getData">
					<IEpRefresh />
				</el-button>
			</el-tooltip>
		</div>

		<el-table :data="tableData" stripe v-loading="loading" class="w-full">
			<el-table-column prop="title" label="公告标题" />
			<el-table-column prop="content" label="公告内容" />
			<el-table-column prop="createTime" label="发布时间" width="380" />
			<el-table-column label="操作" width="180" align="center">
				<template #default>
					<el-button type="primary" size="small">修改</el-button>
					<el-popconfirm title="是否要删除该公告？" confirmButtonText="确认" cancelButtonText="取消">
						<template #reference>
							<el-button size="small" type="success"> 删除 </el-button>
						</template>
					</el-popconfirm>
				</template>
			</el-table-column>
		</el-table>

		<div class="f-center mt-5">
			<el-pagination
				background
				layout="total, pager, next"
				:total="total"
				:current-page="currentPage"
				:pager-size="limit"
				@current-change="getData"
			>
			</el-pagination>
		</div>
	</el-card>
</template>

<script setup>
import { onMounted } from 'vue'

const tableData = ref([])
const loading = ref(false)
// 分页信息
const currentPage = ref(1)
const total = ref(0)
const limit = ref(12)

// 获取数据
onMounted(() => {
	getData()
})

const getData = (p = null) => {
	if (typeof p == 'number') {
		currentPage.value = p
	}
	loading.value = true
	getNoticeList(currentPage.value, limit.value, '')
		.then(res => {
			tableData.value = res.data.list
			total.value = res.data.total
		})
		.finally(() => {
			loading.value = false
		})
}
</script>

<style scoped></style>
