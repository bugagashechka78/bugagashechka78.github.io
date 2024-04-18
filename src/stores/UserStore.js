import {defineStore} from "pinia";
import axios from "axios";


export const useUserStore = defineStore('User', {
    state: () => ({
        username: '',
        measuredPoints: [],
        likeAll: [],
        likedRecipes: []
    }),
    actions: {
        async syncUserData(payload) {
            try {
                axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
                let response = await axios.post(`http://77.238.225.192:3001/api/auth/sync`, {
                    username: this.username,
                    likeAll: this.likeAll
                });
            } catch (err) {
                console.log(err);
            }
        },
    },
});
