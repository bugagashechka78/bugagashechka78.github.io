import {defineStore} from "pinia";
import axios from "axios";

export const useRecipeStore = defineStore('Recipe', {
    state: () => ({
        measuredPoints: [],
        recipes: [],
        ingredients: [],

    }),
    actions: {
        async fetchRecipes() {

            // await new Promise(resolve => setTimeout(resolve, 1000));
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
            await axios.get(`http://77.238.225.192:3001/api/recipes`)
                .then((res) => {
                    this.recipes = res.data;
                    // console.log(this.recipes)
                })
                .catch(error => {
                    console.log(error);
                });
        },
        async fetchIngredients() {
            // await new Promise(resolve => setTimeout(resolve, 1000));
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
            await axios.get(`http://77.238.225.192:3001/api/ingredients`)
                .then((res) => {
                    this.ingredients = res.data;
                    //console.log(this.ingredients)
                })
                .catch(error => {
                    console.log(error);
                });
        },
        async saveMeasuredPoints(payload) {
            try {
                axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
                let response = await axios.post(`http://77.238.225.192:3001/api/measuredPoints`, {
                    time: payload.time,
                    name: payload.name,
                    description: payload.description,
                    height: payload.height,
                    windPower: payload.windPower,
                    windDirection: payload.windDirection,
                    temperatureOfAir: payload.temperatureOfAir,
                    geometry: payload.geometry,
                    substances: payload.substances
                });
                return response.data;
            } catch (err) {
                console.log(err);
            }
        },
        async deleteMeasuredPoints(payload) {
            try {
                axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
                let response = await axios.delete(`http://77.238.225.192:3001/api/measuredPoints/${payload}`);
                return response.data;
            } catch (err) {
                console.log(err);
            }
        }
    },
});
