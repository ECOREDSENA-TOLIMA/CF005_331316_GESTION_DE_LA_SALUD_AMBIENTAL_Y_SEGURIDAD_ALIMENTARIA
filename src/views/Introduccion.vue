<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="fade-right").mb-5 A partir de la promoción de la seguridad sanitaria y ambiental es importante adentrarse en los elementos que se proponen a partir de la salud pública en Colombia, donde se consideran diferentes normativas que aportan al cuidado y al bienestar de la salud de cada individuo, así como se comparte a continuación: 
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/-2A82A_wCck?si=fzZZWldcHBbTrmeZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)


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
