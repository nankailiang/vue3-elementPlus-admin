/**
 * 用户相关请求模块
 */
 import request from '@/utils/request'

 // 用户登录
 export const login = (data: any) => {
   return request({
     method: 'post',
     url: '/login',
     data
   })
 }