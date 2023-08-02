<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const formulario = ref({
  user: '',
  password: '',
});

function iniciarSesion() {
  const router = useRouter();
  // Aquí debes realizar la lógica para verificar los datos ingresados
  // con los usuarios registrados en tu archivo usuarios.json o base de datos.

  // Simulamos que el usuario inicia sesión con éxito
  const usuarioEncontrado = {
    nombre: 'Usuario',
    apellido: 'Registrado',
    correo: formulario.user,
  };

  if (usuarioEncontrado) {
    // Redireccionamos a la página ContenidoView.vue y pasamos el usuario como parámetro
    router.push({ name: 'contenido' });
  } else {
    console.log('Usuario o contraseña incorrectos.');
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