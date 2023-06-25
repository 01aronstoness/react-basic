import axios from "axios";


function getUserAPI(){
return axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
    return response.data;
}).catch((err)=>{
    console.log(err)
})
}

function postUserAPI(params){
    return axios.post("https://jsonplaceholder.typicode.com/posts", params, { headers:{
        'nishant':'test'
    }}).then((response)=>{
        return response
    })
}

const ApiService={
    postUserAPI,
    getUserAPI
}


export default ApiService ;