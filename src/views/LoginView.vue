<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <form>
            <div class="mb-3">
              <label class="form-label">Dirección Email</label>
              <input
                type="text "
                class="form-control"
                placeholder="Ingresa tu email..."
                v-model="user"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Contraseña</label>
              <input
                type="password"
                class="form-control"
                placeholder="Ingresa tu contraseña..."
                v-model="password"
              />
            </div>
            <button @click="login" class="btn btn-primary">Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "HomeView",
  data() {
    return {
      user: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const user = this.user;
      const password = this.password;
      console.log(user, password);

      const auth = getAuth();
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          user,
          password
        );
        console.log({ userCredential });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
