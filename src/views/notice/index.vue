<template>
	<el-card shadow="never" class="border-0">
		<!-- 新增 / 刷新 -->
		<div class="f-between mb-4">
			<div>
				<el-button
					class="px-8 py-4 bg-blue-500 text-light-50 rounded-full"
					@click="handleCreate"
					v-permission="['sys:notice:save']"
					>新增</el-button
				>
				<el-button
					class="px-8 py-4 bg-green-500 text-light-50 rounded-full"
					v-premission="['sys:notice:import']"
					@click=""
					>导入</el-button
				>

				<el-button
					class="px-8 py-4 bg-yellow-500 text-light-50 rounded-full"
					v-premission="['sys:notice:export']"
					@click=""
					>导出</el-button
				>

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

		<el-table :data="tableData" stripe v-loading="loading" class="w-full">
			<el-table-column prop="title" label="通知标题" />
			<el-table-column prop="content" label="通知内容" class="flex-1" />
			<el-table-column prop="createTime" label="发布时间" width="220" />
			<el-table-column label="操作" width="200" align="center" v-permission="['sys:notice:update']">
				<template #default="scope">
					<el-button type="primary" size="small" @click="handleEdit(scope.row)" v-permission="['sys:notice:update']"
						>修改</el-button
					>
					<el-popconfirm
						title="确定删除？"
						confirmButtonText="确认"
						cancelButtonText="取消"
						@confirm="handleDelete(scope.row.id)"
					>
						<template #reference>
							<el-button size="small" class="bg-red-400 text-light-50" v-permission="['sys:notice:delete']"
								>删除</el-button
							>
						</template>
					</el-popconfirm>
				</template>
			</el-table-column>
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

		<!-- 抽屉组件 -->
		<FormDrawer ref="formDrawerRef" :title="drawerTitle" @submit="handleSubmit">
			<el-form :model="form" ref="formRef" :rules="rules" label-width="80px" :inline="false">
				<el-form-item label="通知标题" prop="title">
					<el-input v-model="form.title" placeholder="通知标题"></el-input>
				</el-form-item>
				<el-form-item label="通知内容" prop="content">
					<el-input v-model="form.content" placeholder="通知内容"></el-input>
				</el-form-item>
			</el-form>
		</FormDrawer>
	</el-card>
</template>

<script setup>
import { useNotice } from '../../composables/useNotice'

const {
	pagecount,
	tableData,
	loading,
	currentPage,
	total,
	limit,
	title,
	form,
	formRef,
	formDrawerRef,
	rules,
	drawerTitle,
	getData,
	handleCreate,
	handleEdit,
	handleSubmit,
	handleDelete
} = useNotice()
</script>
