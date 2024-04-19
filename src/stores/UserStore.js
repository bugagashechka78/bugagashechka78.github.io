import {defineStore} from "pinia";
import axios from "axios";


export const useUserStore = defineStore('User', {
    state: () => ({
        username: '',
        measuredPoints: [],
        likeAll: [],
        likedRecipes: [],
        name: '',
        age: 0,
        height: 0,
        weight: 0,
        gender: '',
        activity: 0,
        calorieLimit: 0,
    }),
    actions: {
        async syncUserData(payload) {
            try {
                axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
                let response = await axios.post(`http://77.238.225.192:3001/api/auth/sync`, {
                    username: this.username,
                    likeAll: this.likeAll,
                    likeMode: 1
                });
            } catch (err) {
                console.log(err);
            }
        },
        async syncUserProfile(payload) {
            try {
                axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
                let response = await axios.post(`http://77.238.225.192:3001/api/auth/sync`, {
                    username: this.username,
                    likeAll: this.likeAll,
                    name: this.name,
                    age: this.age,
                    height: this.height,
                    weight: this.weight,
                    gender: this.gender,
                    activity: this.activity,
                    calorieLimit: this.calorieLimit,
                    likeMode: 0
                });
            } catch (err) {
                console.log(err);
            }
        },
    },
});
