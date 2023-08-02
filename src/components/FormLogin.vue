<script setup>
import usuarios from '@/usuarios.json';

const formulario = ref({
  correo: '',
  contraseña: '',
});

function iniciarSesion() {
  const usuarioEncontrado = usuarios.usuarios.find((usuario) => {
    return usuario.correo === formulario.correo && usuario.contraseña === formulario.contraseña;
  });

  if (usuarioEncontrado) {
    console.log('Inicio de sesión exitoso.');
    console.log('Usuario:', usuarioEncontrado);
  } else {
    console.log('Usuario o contraseña incorrectos.');
  }
}
</script>

<template>
  <div v-else>
      <form>
        <label for="loginUser">Usuario</label>
        <input type="text" id="loginUser" v-model="formulario.user">
        <br>
        <label for="loginPassword">Contraseña</label>
        <input type="password" id="loginPassword" v-model="formulario.password">
        <br>
        <button @click="mostrarBienvenida">Iniciar Sesión</button>
      </form>
    </div>
  </template>

