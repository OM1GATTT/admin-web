<template>
	<el-card shadow="never" class="border-0">
		<!-- 新增 / 刷新 -->
		<div class="f-between mb-4">
			<div>
				<el-button class="px-8 py-4 bg-green-500 text-light-50 rounded-full">导入</el-button>

				<el-button class="px-8 py-4 bg-yellow-500 text-light-50 rounded-full">导出</el-button>

				<input
					type="text"
					v-model="title"
					placeholder="请搜索"
					class="text-gray-500 border-gray-300 solid border-1 outline-none rounded-2xl py-1 ml-3 w-60 pl-2 text-sm"
				/>
				<el-button class="px-8 py-4 text-sky-500 rounded-full text-light-50 ml-2" @click="getData">搜索</el-button>
			</div>

			<el-tooltip content="刷新数据" placement="top" effect="dark">
				<el-button text @click="getData">
					<IEpRefresh />
				</el-button>
			</el-tooltip>
		</div>

		<el-table :data="tableData" stripe class="w-full">
			<el-table-column prop="username" label="用户名" width="120px" align="center" />
			<el-table-column prop="ip" label="登录IP" width="120px" align="center" />
			<el-table-column prop="address" label="登录地址" width="120px" align="center" />
			<el-table-column prop="userAgent" label="登录设备" width="500" align="center" />
			<el-table-column prop="status" label="登录状态" width="100px" align="center" />
			<el-table-column prop="createTime" label="创建日期" align="center" />
		</el-table>

		<div class="fixed bottom-8 left-[45%]">
			<el-pagination
				background
				layout="total, pager, next"
				:total="total"
				:page-count="pagecount"
				:current-page="currentPage"
				:pager-size="limit"
				@current-change="getData"
			>
			</el-pagination>
		</div>
	</el-card>
</template>

<script setup>
import { useLog } from '../../../composables/useLog'
const { tableData, pagecount, currentPage, total, limit, title, getData } = useLog()
</script>
