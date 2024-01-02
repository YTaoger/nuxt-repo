// 鉴权
const cookie = useCookie('infor');
const storageInfor = localStorage.getItem('infor');
export default defineNuxtRouteMiddleware((to, from) => {
  // 首先判断是否存在登录信息，如果没有则跳转登录页面
  // TODO 需要确定鉴权方式
  if(!['/login', '/register'].includes(to.path) && !(cookie && storageInfor)) {
    return to.path === '/register' ? navigateTo('/register') : navigateTo('/login');
  }
  // 如果路径为根路径，则跳转dashboard默认页面
  if (to.path === '/') {
    return navigateTo('/dashboard')
  }
})
