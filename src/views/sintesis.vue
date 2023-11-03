<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 El componente formativo promoción de la seguridad sanitaria y ambiental se centra en proporcionar una comprensión integral de los aspectos claves relacionados con la salud y el entorno. Comienza explorando el perfil demográfico y epidemiológico del grupo social, considerando el curso de vida como un factor determinante. Luego, se adentra en la promoción de la salud, destacando el autocuidado, la identificación de factores de riesgo y protectores, así como la promoción de estilos de vida saludable. Además, se examinan los actores sociales y comunitarios involucrados en la salud ambiental, identificando sus roles. Finalmente, se aborda la prevención de enfermedades y la Atención Primaria en Salud (APS), destacando sus valores, componentes y la importancia de las redes integradas de servicios de salud.  

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
