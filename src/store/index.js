//----------------| Cars Module |------------------//

import carDataJson from "./data.json";

const state = {
  carData: carDataJson.cars
};

// getters
const getters = {
  // carData: (state) => {
  //   return state.carData;
  // }
};

// actions
const actions = {};

// mutations
const mutations = {};

export { state, getters, actions, mutations };