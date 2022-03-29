<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
        <input type="email" placeholder="Ingrese email" v-model.trim="email">
        <input type="password" placeholder="Ingrese password" v-model.trim="password">
        <button type="submit" :disabled="userStore.loadingUser">Acceso</button>
    </form>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useUserStore } from '../stores/user.store';
  /* import { useRouter } from 'vue-router'; */

  const userStore = useUserStore();
  /* const router = useRouter() */

  const email = ref('jeff1@test.com');
  const password = ref('123123');

  const handleSubmit = async () => {
    /* console.log(email.value);
    console.log(password.value); */
    if (!email.value || password.value.length <= 5) {
        return alert('llena los campos')
    }
    /* console.log('Procesando formulario'); */
    await userStore.loginUser(email.value, password.value)
    /* router.push('/') */
  }
</script>
