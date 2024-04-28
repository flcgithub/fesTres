import { reactive } from 'vue'

export default function customFunc(){ 
  const user = reactive({ userName: 'custome-userName' })

  return {
    user
  }
}