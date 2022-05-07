import app from "@/helpers/firebase";
console.log(app);
import router from "@/router";
import Vue from "vue";
import Vuex from "vuex";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

//import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    user: "milagros@gmail.com",
    cards: {},
  },
  getters: {},
  mutations: {
    setUser(state, value) {
      state.isAuthenticated = value;
    },
    setError(state, value) {
      state.error = value;
    },
  },
  actions: {
    async startSession({ commit }, payload) {
      console.log(payload);
      const email = payload.email;
      const password = payload.password;

      const auth = getAuth();

      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("sipo");

        commit("setUser", true);
        localStorage.setItem("loggedIn", "true");
        router.push("/home");
        console.log({ userCredential });
      } catch (error) {
        alert("Usuario invalido");
        console.error(error);
      }
    },
    signOff({ commit }) {
      commit("setUser", false);
    },
    createUser({ commit }, payload) {
      console.log(commit);
      console.log(payload);

      const email = payload.email;
      const password = payload.password;

      try {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            alert("Usuario ingresado con éxito!");
            router.push("/login");
          })
          .catch((error) => {
            console.log(error);

            alert("Ocurrió un error");
          });
      } catch (error) {
        console.log(error);
        alert("Ocurrió un error");
      }
    },
  },
  modules: {},
});
