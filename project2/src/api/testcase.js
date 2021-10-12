import axios from "./http"

// 属于 test case 的一些接口信息
const testcase = {
    getTestcase(){
        return axios({
            method: 'get',
            url: "/testcase"
        })
    },

    // 删除用例需要传入一个 id
    deleteTestcase(id){
        return axios({
            method: "delete",
            url: '/testcase',
            params: {id: id}
        })
    },

    updateTestcase(data){
        return axios({
            method: "put",
            url: "/testcase",
            data: data
        })
    },

    addTestcase(data){
        return axios({
            method: "post",
            url: "/testcase",
            data: data
        })
    }
}
    
export default testcase