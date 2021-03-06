import * as axios from "axios";

const axiosInstans = axios.create ({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY" : "6786abcf-3311-470c-94ce-4d4577b4dfb7",
    },
})


export const UserAPI = {
    getUsers(currentPage = 1,pageSize = 10) {
        return axiosInstans.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response =>{
                return response.data;
            })
    }
}
export const FollowUnfollowAPI = {
    follow(id) {
        return axiosInstans.post(`follow/${id}`)
            .then(response =>{
                return response.data;
            })
    },
    unfollow(id) {
        return axiosInstans.delete(`follow/${id}`)
            .then(response =>{
                return response.data;
            })
    }
}
export const AuthAPI = {
    auth(){
        return axiosInstans.get('auth/me')
            .then(response =>{
                return response.data;
            })
    },
    login(email,password,rememberMe = false){
        return axiosInstans.post('auth/login',{email,password,rememberMe})
    },
    logout(){
        return axiosInstans.delete('auth/login');
    },
}
export const ProfileAPI = {
    getProfile(id){
        return axiosInstans.get(`profile/${id}`)
    },
    getStatus(id){
        return axiosInstans.get(`profile/status/${id}`)
    },
    updateStatus(status){
        return axiosInstans.put(`profile/status`,{status: status});
    },
    savePhoto(photoFile){
        let formData = new FormData();
        formData.append('image',photoFile,)
        return axiosInstans.put(`profile/photo`,formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
             });
    }
}



