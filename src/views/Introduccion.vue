<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 Este componente formativo realiza un recorrido por la información, las herramientas y estrategias que permitirán apropiar los conceptos de análisis y diagnósticos requeridos para el entendimiento de los clientes de un producto o servicio de la siguiente forma:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2gsxR59sYGc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
