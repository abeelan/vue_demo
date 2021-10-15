import axios from "./http"

// 属于 task 的一些接口信息
const task = {
    getTask(){
        return axios({
            method: 'get',
            url: "/task"
        })
    },

    // 添加一条任务记录，并且执行用例
    addTask(data){
        return axios({
            method: "post",
            url: "/task",
            data: data
        })
    }
}
    
export default task