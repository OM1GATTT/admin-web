export function useNotice(){
    // 表格数据
    const tableData = ref([])
    const loading = ref(false)

    // 分页信息相关变量
    const currentPage = ref(1)
    const total = ref(0)
    const limit = ref(12)
    const title = ref('')

    // 页面挂载后，调用获取数据的方法
    const getData = (p=null)=>{
        if(typeof p == 'number'){
            currentPage.value = p
        }
    }
}