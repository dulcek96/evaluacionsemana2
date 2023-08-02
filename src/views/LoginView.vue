<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const formulario = ref({
  user: '',
  password: '',
});

function iniciarSesion(usuario, contraseña) {
  const router = useRouter();

  const usuarioEncontrado = usuarios.find((u) => u.user === usuario);


  if (!usuarioEncontrado) {
    alert('Usuario no encontrado. Por favor, verifique sus datos.');
    return;
  }
  if (usuarioEncontrado.password === contraseña) {
    
    router.push('/contenido');
  } else {
    alert('Contraseña incorrecta. Por favor, verifique sus datos.');
  }
}

</script>

<template>
  <form>
    <h2>Login</h2>
    <label for="loginUser">Usuario</label>
    <input type="text" id="loginUser" v-model="formulario.user">
    <br>
    <label for="loginPassword">Contraseña</label>
    <input type="password" id="loginPassword" v-model="formulario.password">
    <br>
    <!-- Cambiamos el botón para redireccionar a la página ContenidoView.vue -->
    <router-link to="/contenido">
      <button @click="iniciarSesion">Iniciar Sesión</button>
    </router-link>
    <input type="reset" name="Borrar">
  </form>
</template>