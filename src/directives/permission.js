function hasPermission(value,el=false){
    const store = useAdminStore()
    if(!Array.isArray(value)){
        throw new Error(`需要配置权限，例如 v-permission="['sys:notice:page']"`)
    }

    // 和全局仓库中的 authorities 权限数组进行匹配
    const hasAuth = value.findIndex(v=>store.authorities.includes(v)) != -1
    if(el && !hasAuth){
        el.parentNode && el.parentNode.removeChild(el)
    }
    return hasAuth
}

export default {
    install(app){
        app.directive('permission',{
            mounted(el,binding){
                hasPermission(binding.value,el)
            }
        })
    }
}