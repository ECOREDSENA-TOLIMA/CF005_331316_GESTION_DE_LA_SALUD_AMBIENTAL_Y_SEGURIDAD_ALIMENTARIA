<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Actores sociales y comunitarios relacionados con la salud ambiental

    p(data-aos="fade-left") En el ámbito de la salud ambiental y con la colaboración de los diferentes actores sociales, se busca promover e impulsar la calidad de vida y la salud poblacional de las presentes y futuras generaciones, para materializar el derecho a un ambiente sano.
    p(data-aos="fade-left").mb-5 Por medio de la transformación positiva de los determinantes sociales, sanitarios y del medioambiente, bajo el enfoque metodológico de las fuerzas motrices o fuerzas impulsoras FPEEEA (Fuerza motriz, Presión, Estado, Exposición, impacto sobre la salud humana y Acción). 

    .row.justify-content-center.align-items-center.mb-5
      .col-10
       .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/1.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 Su análisis se prueba en la articulación de los componentes del medioambiente y las afectaciones a la salud, elemental para conformar intervenciones dirigidas a mejorar la salud de los individuos y a afianzar las interacciones entre ambiente y salud, además ofrece que las ocupaciones encaminadas a mantener el control de las ‘fuerzas motrices’ y las ‘presiones’ que ocasionan la degradación ambiental tengan la posibilidad de ser las maneras más efectivas de participación, debido a que trabajan a partir de lo estructural, requiriendo gran voluntad y compromiso político.

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Mapa de actores sociales y comunitarios

    p(data-aos="fade-left").mb-5 La caracterización de los actores sociales permite la identificación de percepciones e intereses de los actores asociados a las situaciones ambientales, lo cual reviste importancia significativa para la corporación al momento de la toma de decisiones relacionadas con la intervención en el territorio del área de jurisdicción. Por lo tanto, es importante que observe el esquema metodológico para la caracterización de los actores sociales de la corporación.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-4
          p.titulo.pb-0.mb-0 #[b Tabla 1.] #[i Esquema metodológico para la caracterización de los actores sociales] 
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            tbody
              tr
                td 1. Caracterización de la situación ambiental determinando variables clave.
                td 5. Definición de los escenarios de intervención.
              tr
                td 2. Identificación de los actores sociales asociados a las variables clave.
                td 6. Seguimiento y evaluación.
              tr
                td 3. Clasificación y ponderación de los actores sociales.
                td 7. Sistematización de la experiencia.
              tr
                td 4.	Caracterización de los actores sociales relevantes.  
            caption Nota. Adaptada de la de ruta metodológica y de las características y actores sociales.

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Estrategia para orientar las competencias en la seguridad sanitaria y en los factores protectores que favorezcan el autocuidado

    p(data-aos="fade-left").mb-5 A continuación, se presenta una de las estrategias que ayuda a favorecer la participación ciudadana en los niveles territoriales, a proteger los actores del autocuidado y a restablecer el cumplimiento ambiental para las metas de las dimensiones y los determinantes sociales.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-4
          p.titulo.pb-0.mb-0 #[b Tabla 2.] #[i Estrategia para la participación ciudadana en los niveles territoriales] 
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            tbody
              tr
                td #[b Atención Primaria en Salud Ambiental APSA]
                td Identificando el involucramiento e intervención conjunta de las jurisdicciones de salud ambiental en la ejecución de la APS de Atención Primaria en Salud, posicionando la gestión interdisciplinaria y la participación social en la intervención de los determinantes ambientales y de la salud, la realización de las metas y objetivos de la dimensión.
              tr
                td #[b Educación en salud ambiental]
                td Comprende los procesos dinámicos de participación social desarrollados en conjunto entre las instancias gubernamentales y la sociedad civil, orientados a la información, la educación y la comunicación, para promover el cambio de comportamiento, los hábitos de vida y consumo, los modelos productivos limpios y sustentables, el ejercicio responsable del derecho a un medio ambiente sano, teniendo en cuenta las necesidades básicas y específicas de las personas, las familias y las comunidades en los entornos en que viven, estudian, trabajan e interactúan.
              tr
                td #[b Gestión integrada de las zoonosis de interés en salud pública]
                td Tiene a su cargo la gestión interdisciplinaria, la educación y la vinculación social y comunitaria, con el objetivo de generar responsabilidad social en la tenencia de los animales domésticos, la producción y la protección de los ecosistemas de vida silvestre. Así como fortalecer la prevención, la detección rápida y el control de enfermedades zoonóticas en un territorio.
              tr
                td #[b Investigación para la salud ambiental]
                td Se basa en la construcción de redes de conocimiento, a partir de líneas de acción en ciencia, tecnología e innovación, conformadas por los sectores público, privado, académico y comunitario, para generar información y conocimiento para atender las necesidades generales de salud y medioambiente.
              tr
                td #[b Vigilancia sanitaria. Promoción de la autogestión y autorregulación]
                td Este abordaje de los determinantes sociales de la salud exige un cambio de paradigma en la concepción de la vigilancia en salud, que debe ir más allá del control de salud, la vigilancia y el seguimiento a la salud hacia modelos de gestión integrados, participativos, que promuevan y prevengan el cambio de hábitos y estilos de vida, la corresponsabilidad y la emancipación individual y colectiva de las personas. 
            caption Nota. Adaptada de la guía de dimensión salud ambiental.


</template>

<script>
export default {
  name: 'Tema3',
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
