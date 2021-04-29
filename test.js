import { axios } from '@/utils/request'
export function getLogStudentList (parameter) {
  return axios({
    url: '/idt/logStudent/selectAllStudentTrainIm',
    method: 'post',
    params: parameter
  })
}
//测试1
import { axios } from '@/utils/request'
export function getLogStudentList (parameter) {
  return axios({
    url: '/idt/logStudent/selectAllStudentTrainIm',
    method: 'post',
    params: parameter
  })
}
//cesi
