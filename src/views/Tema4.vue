<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Prevención de la enfermedad y Atención Primaria en Salud (APS)

    p(data-aos="fade-left") La OMS (2016), define enfermedad como la alteración de cualquier orden biopsicosocial, que represente sufrimiento al individuo y que puede ser prevenida mediante acciones que normalmente proceden desde los servicios de salud, que considera a los individuos y a las poblaciones como expuestas a factores de riesgo identificables, frecuentemente asociados a diferentes conductas de riesgo de las personas. 
    p(data-aos="fade-left").mb-5 Es una estrategia de la atención primaria que se hace efectiva en la atención integral de las personas. Esta considera al ser humano desde una perspectiva biopsicosocial e interrelaciona la promoción, la prevención, el tratamiento, la rehabilitación y la reinserción social con las diferentes estructuras y niveles del Sistema Nacional de Salud.

    .row.justify-content-center.align-items-center.mb-5
      .col-10
       .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/1.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 Para ello, se lleva a cabo acciones de prevención de la enfermedad encaminadas a la prevención y promoción de la salud, y a su vez el diagnóstico y tratamiento oportuno de las personas enfermas, también incluyen la rehabilitación y evitar complicaciones o resultados de su padecimiento, mediante sus diferentes niveles de intervención en salud.

    .d-flex.flex-wrap.align-items-center(data-aos="fade-right").mb-5
      img(src='@/assets/curso/temas/icono.svg' style="max-width: 30px;")
      .h3.col-auto.pb-2.mb-0.ms-2(style=" color: #455B2D;") Atención Primaria en Salud (APS)

    p(data-aos="fade-left").mb-5 Está orientada a los problemas de salud que incluye al individuo, la familia y la sociedad, que tiene como función garantizar el bienestar y la salud, su distribución equitativa mediante las necesidades de las personas   en un proceso rápido y continuo, enmarcado en la promoción, prevención de la salud y la enfermedad hasta el tratamiento, la rehabilitación y los cuidados paliativos, tan inmediato como sea posible del entorno diario de las personas en un territorio.

    .row.justify-content-center.mb-5
      .col-10
        .tarjeta.color-secundario.p-5(style='border-radius:0px')
          .row.align-items-center
            .col-4
              img(src='@/assets/curso/temas/tema4/2.svg', alt='Texto que describa la imagen')
            .col-8
              p La atención sistémica invita a realizar acciones de gestión coordinada para la garantía del derecho a la salud, desarrolladas por:
              ol.lista-ol
                li 
                  span.text-bold a. 
                  | El sector salud (sectoriales).
                li 
                  span.text-bold b. 
                  | Otros sectores (extrasectoriales). 
                li 
                  span.text-bold c. 
                  | La acción integrada entre diferentes sectores (intersectoriales).  
              p Es así como la atención primaria en salud se reconoce a partir de: 

    .row.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5(style='height:100%')
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b La gestión
          p.text-center Para la salud de las personas debe propagarse en el abordaje por eventos o daños en la salud hacia un abordaje basado en el cuidado y la atención integral de los sujetos y la transformación de los entornos en los cuales transcurre la vida de los mismos.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5(style='height:100%')
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Los aseguradores de salud (ASS)
          p.text-center Hacen parte del equipo primario o del componente complementario de la red de servicio integral de salud, los cuales planean, ejecutan, organizan, monitorean y evalúan el plan integral de cuidados de la salud del individuo, además garantizan la accesibilidad en la prestación del servicio.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5(style='height:100%')
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Las entidades territoriales
          p.text-center Contratan con los PSS del equipo primario de la red las intervenciones colectivas y con las EPS las mediaciones individuales incluidas en las RIAS, definiendo las reglas de la canalización para garantizar la salida permanente de las personas entre las intervenciones colectivas e individuales canalizadas en una población.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-5(style='height:100%')
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b Los PSS
          p.text-center Hacen parte del componente primario, realizan las intervenciones de remitir oportunamente a los pacientes que requieren servicios. Establecen las capacidades de resolución a los PSS del componente complementario, manteniendo vigilados a los pacientes para su manejo y seguimiento.  

    p(data-aos="fade-left") Los prestadores de servicios de salud ejecutan en la mayoría de los casos acciones de gestión individual del riesgo a partir de la gestión clínica. Las personas y las familias son tomadoras de decisiones para proteger su salud individual y participar en el transcurso de la atención, apoyados por los funcionarios del sistema de salud.
    p(data-aos="fade-left").mb-5 La OMS ha definido tres esferas estratégicas de trabajo para fortalecer la APS en todo el mundo:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/3.svg', alt='Texto que describa la imagen')
          
        h2.text-center Diseñar
        p Un marco para la atención primaria de la salud y aprovechar las oportunidades para invertir en la contestación a la enfermedad pandémica del coronavirus.

      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/4.svg', alt='Texto que describa la imagen')
          
        h2.text-center Crear
        p Resoluciones y pruebas innovadoras en APS, orientación sobre el seguimiento y la medición para evaluar el incremento de la atención primaria de salud en las naciones y el informe mundial organizado por la oficina de la Academia de la Organización Mundial de la Salud.

      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/5.svg', alt='Texto que describa la imagen')
          
        h2.text-center Agilizar
        p La innovación en la atención primaria de la salud por medio del liderazgo político, la promoción y las alianzas estratégicas con los gobiernos.

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Valores y componentes

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/6.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 La atención primaria en salud reconoce elementos involucrados y sinérgicos: servicios de salud integrales e incluidos, que integran como recursos centrales funcionalidades y activos de atención primaria y salud comunitaria; ocupaciones y políticas multidisciplinarias en la zona de los determinantes de la salud más difundidos y extendidos, estableciendo diálogo con los individuos, las familias y la sociedad, empoderándolas sobre las propias prácticas para aumentar la colaboración social, mejorar el autocuidado y la autosuficiencia en salud. La APS tiene presente determinantes más amplios de la salud, centrándose en puntos usuales e interrelacionados de la salud física, la salud psicológica, la salud social y la paz.

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Redes integradas de servicios de salud

    p(data-aos="fade-left") Bajo estas consideraciones se viene configurando el modelo de prestación de servicios de salud, el cual se sustenta en las redes integrales de prestadores de servicios de salud, estableciendo que en su conformación, organización y gestión se tomen en cuenta los siguientes elementos que deben ser garantizados, según las competencias de cada actor.
    p(data-aos="fade-left").mb-5 En el marco de lo anterior se deberán definir los procesos y los procedimientos para la atención bajo las modalidades intramural, extramural, telemedicina y otras pertinentes para cada territorio, que deberán ser gestionados por la respectiva Entidad Promotora de Salud - EPS. 

    .row.justify-content-center.mb-5
      .col-10
        .tarjeta.color-secundario.p-5(style='border-radius:0px')
          .row.justify-content-center.align-items-center
            .col-4
              img(src='@/assets/curso/temas/tema4/7.svg', alt='Texto que describa la imagen')
            .col-8
              p La adecuación de los procesos y los procedimientos de atención en salud de los prestadores, de manera que resulten concordantes con los requerimientos de la red integral de prestadores de servicios de la respectiva EPS y con la aplicación del Modelo Integral de Atención en Salud.
              p Estos elementos considerados en el Modelo integral de atención en salud deben estar articulados y reflejarse en la gestión de la prestación de servicios de salud, soportados en procesos y sistemas asistenciales, administrativos y financieros que posibiliten la prestación oportuna, continua e integral de los servicios de salud a la población. 

</template>

<script>
export default {
  name: 'Tema4',
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
