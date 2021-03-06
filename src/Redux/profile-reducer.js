import {returnLastItem} from "./store";
import {ProfileAPI} from "../api/api";

let initialState = {
    postData: [
        {id: 1, massage: "Text post 1"},
        {id: 2, massage: "Text post 2"},
        {id: 3, massage: "Text post 3"},
        {id: 4, massage: "Text post 4"},
        {id: 5, massage: "Text post 5"},
    ],
    infoData: [
        {
            name: "Nikita",
            surname: "Vlasenko",
            city: "Kramatorsk",
            dateOfBirth: "29.01.1999",
            placeOfStudy: "KHAI",
        },
    ],
    newPostText: "",
    profile: null,
    status:"",
}


function profileReducer(state = initialState, action) {
    switch (action.type) {
        case "CREATE-POST": {

            let massage = action.postText;
            let id = returnLastItem(state.postData).id + 1

            return {
                ...state,
                postData:[...state.postData, { id: id, massage: massage }],
            }
        }
        case "SET-USER-PROFILE":{
            return {
                ...state,
                profile: action.profile,
            };
        }
        case "SET-USER-STATUS":{
            return {
                ...state,
                status: action.status,
            };
        }
        case "SAVE-PHOTO-SUCCESS":{
            return {
                ...state,
                profile: {...state.profile, photos: action.photos},
            };
        }
        default:
            return state
    }
}
// Action Creators
export function addPostActionCreator(postText) {
    return {
        type: "CREATE-POST",
        postText: postText
    }
}


export function setUserProfile(profile) {
    return {
        type: "SET-USER-PROFILE",
        profile,
    }
}
export function setUserStatus(status) {
    return {
        type: "SET-USER-STATUS",
        status,
    }
}
export function savePhotoSuccess(photos) {
    return {
        type: "SAVE-PHOTO-SUCCESS",
        photos,
    }
}
// Thaunk Creators

export function getUserProfile(userId) {
    return (dispatch) =>{
        ProfileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}
export function getUserStatus(userId) {
    return (dispatch) =>{
        ProfileAPI.getStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data));
            });
    }
}
export function updateUserStatus(status) {
    return (dispatch) =>{
        ProfileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0){
                    dispatch(setUserStatus(status));
                }
            });
    }
}
export function savePhoto(file) {
    return (dispatch) =>{
        ProfileAPI.savePhoto(file)
            .then(response => {
                if (response.data.resultCode === 0){
                    dispatch(savePhotoSuccess(response.data.data.photos));
                }
            });
    }
}


export default profileReducer;