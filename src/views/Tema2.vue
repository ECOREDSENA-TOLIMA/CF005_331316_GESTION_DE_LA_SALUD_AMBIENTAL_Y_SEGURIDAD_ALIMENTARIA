<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Promoción de la salud
    
    p(data-aos="fade-left").mb-5 Tiene como objetivo facilitar la evolución de la supervivencia humana y mejorar la calidad de vida en situaciones adversas. Esto se logra a través del cuidado, que implica una serie de comportamientos humanos. Históricamente, este rol ha sido atribuido a las mujeres, quienes se encargan del cuidado familiar, incluyendo la crianza, la expresión de afecto, la creación de vínculos, la transferencia de valores, la preservación de creencias, la continuación de tradiciones, la práctica de costumbres culturales, la formación de pensamientos y comportamientos, y la definición de roles y patrones alimentarios, entre otros aspectos. Estas prácticas contribuyen a reducir la exposición a riesgos y buscan transformar los entornos. Además, fortalecen las capacidades de las personas, las familias y las comunidades a lo largo de toda la vida, basándose en la evidencia disponible y las prioridades de salud específicas de cada territorio.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-10
       .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/1.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 La promoción de la salud se enfoca en abordar la salud de manera positiva y en identificar factores de riesgo específicos que varían en diferentes regiones. Su objetivo principal es que todas las personas alcancen su máximo potencial de salud, considerando las condiciones sociales que influyen en resultados de salud más favorables y los determinantes sociales de la salud. Es importante destacar que, para lograr la equidad en salud, es esencial realizar una redistribución efectiva del poder y los recursos.


    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Autocuidado

    .row.justify-content-center.mb-5
      .col-10
        .tarjeta.color-secundario.p-5(style='border-radius:0px')
          .row.justify-content-center.align-items-center
            .col-2
              img(src='@/assets/curso/temas/tema2/2.svg', alt='Texto que describa la imagen')
            .col-10
              p Se describe como una actitud activa y responsable con respecto a la calidad de vida, permite comprender las evoluciones que favorecen la estabilidad humana y ante situaciones adversas, si bien el cuidado está implícito en la conducta humana, históricamente se ha atribuido su práctica a la mujer como se mencionó anteriormente. 
              p Es así como se hace necesario resaltar: 

    .row.justify-content-center.mb-5
      .col-6
        TarjetaAudio.color-acento-botones.mb-3(
          texto="acá va un audio"
          :audio="require('@/assets/audio/1.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )

    .d-flex.flex-wrap.align-items-center(data-aos="fade-right").mb-5
      img(src='@/assets/curso/temas/icono.svg' style="max-width: 30px;")
      .h3.col-auto.pb-2.mb-0.ms-2(style=" color: #455B2D;") Atenciones para la promoción y mantenimiento de la salud

    p(data-aos="fade-left").mb-5 Para que las respectivas atenciones se den en el sector de la salud, se consideran como acciones que garantizan el cuidado de la salud del individuo, teniendo en cuenta la detección temprana, la educación y la protección específica en salud en una comunidad, potencializando las actividades físicas, cognitivas y psicológicas para alcanzar las metas en su desarrollo intelectual. En esta fase, se busca identificar de manera oportuna y temprana los riesgos para la salud. Esto incluye la reducción de los posibles daños que puedan surgir en diferentes etapas de la vida, así como la prevención de impactos negativos en el entorno. El objetivo es crear entornos protectores y promover el desarrollo en pro de la salud. 

    .row.justify-content-center.align-items-center.mb-5
      .col-10
       .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/3.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 Es así que se reconocen como intervenciones, las cuales están encaminadas a velar por la salud integral del individuo, la familia y la comunidad, proporcionando protección específica, diagnóstico, tratamiento, rehabilitación, paliación y educación para la salud en cada etapa de la vida, sin olvidar que estas pueden desarrollarse en los niveles individuales y colectivos a través de la prestación del servicio intramural y extramural, dependiendo de las características y de las tecnologías adecuadas en cada territorio o población en general.

    p(data-aos="fade-left").mb-5 Esta gestión en salud pública se compone de varias intervenciones que son:

    AcordionA(tipo="b" clase-tarjeta="tarjeta color-primario").mb-5 
      .row(titulo="Intervención en la población")
        .col-md-6.mb-4.mb-md-0
          p Son acciones para la atención en salud y demás actores, orientadas a las promoción y prevención del individuo, la familia y la comunidad en cada etapa de la vida, incurren en los procesos sociales, económicos y ambientales.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/4.png', alt='Texto que describa la imagen')

      .row(titulo="Intervención en la familia")
        .col-md-6.mb-4.mb-md-0
          p Este conjunto de intervenciones está dirigida a la familias y particularidades de dinámicas familiares que buscan un buen manejo de la salud en una región.
      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/5.png', alt='Texto que describa la imagen')

      .row(titulo="Intervenciones colectivas")
        .col-md-6.mb-4.mb-md-0
          p Esta acción se enfoca en las de poblaciones que tienen situaciones o problemas de riesgo, que inciden en la salud y el bienestar de una comunidad.
      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/6.png', alt='Texto que describa la imagen')

      .row(titulo="Intervención individual por momento de vida")
        .col-md-6.mb-4.mb-md-0
          p Está encaminada a revelar el riesgo en las personas para la detección temprana, la protección, la valoración, el diagnóstico, el tratamiento y la rehabilitación de cuidados para la salud en una comunidad.
      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/7.png', alt='Texto que describa la imagen')
      
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Factores de riesgo y protectores

    p(data-aos="fade-left") Se definen como aquellas variables o circunstancias inseparables a los individuos que están relacionadas con los fenómenos de salud y, que determinan en la población expuesta a estos, una mayor o menor probabilidad de ocurrencia de un evento en salud.

    p(data-aos="fade-left").mb-5 Se denominan a los aspectos del ambiente o de la personalidad, de acuerdo con los factores de riesgo o los factores protectores (menos probables) que la persona pueda desarrollar y generen un problema de salud o enfermedad. 

    .tarjeta.color-primario.p-5(style='border-radius:0px').mb-5
      .row.justify-content-center.align-items-center
        .col-9
          p Por ejemplo, una familia con historial de antecedentes de alcoholismo podría ser calificada como un factor de riesgo para llegar a ser un alcohólico, mientras que crecer en una familia sin esa historia podría ser calificado como un factor protector. En su trabajo debería tratar de reducir los factores de riesgo y reforzar los factores protectores.
        .col-3
          img(src='@/assets/curso/temas/tema2/8.png', alt='Texto que describa la imagen')

    p(data-aos="fade-left") A continuación, se definen los factores protectores y los factores de riesgo: 
    p(data-aos="fade-left") #[b Factores protectores:]  son los aspectos que disminuyen el riesgo y que evitan una enfermedad o un daño a la salud, por ejemplo, hábitos higiénicos, educación sanitaria, disponibilidad del agua de buena calidad, buen manejo de los alimentos y demás.
    p(data-aos="fade-left") #[b Factores de riesgo:]  son aquellos elementos que se ven en el ambiente, que indican que pueden presentar un daño a la salud de las personas a través de una enfermedad.
    p(data-aos="fade-left").mb-5 Los factores de riesgo y los protectores se pueden agrupar en dos categorías: 

    .row.justify-content-center.mb-5
      .col-10
        .tarjeta.color-secundario.p-5(style='border-radius:0px')
          .row.align-items-center
            .col-3
              img(src='@/assets/curso/temas/tema2/9.svg', alt='Texto que describa la imagen')
            .col-9
              ol.lista-ol
                li 
                <hr style="border:15px;">
                  span.text-bold 1. 
                  | Las que son del ambiente. 
                <hr style="border:15px;">
                li 
                  span.text-bold 2. 
                  | Las que tienen características personales de los sujetos.
                <hr style="border:15px;">

    .d-flex.flex-wrap.align-items-center(data-aos="fade-right").mb-5
      img(src='@/assets/curso/temas/icono.svg' style="max-width: 30px;")
      .h3.col-auto.pb-2.mb-0.ms-2(style=" color: #455B2D;") Gestión para la atención integral en salud

    p(data-aos="fade-left").mb-5 Tiene como condición transversal contribuir con la Política de Atención Integral en Salud, que se constituye en la articulación de los funcionarios del sistema de salud y de otros sectores interdisciplinarios, que identifican, evalúan e intervienen desde la promoción y prevención de la enfermedad hasta la recuperación de la salud de la persona, donde se realiza el seguimiento y el monitoreo del riesgo para la salud del individuo, la familia y la sociedad, orientadas al éxito de los resultados en salud y el bienestar de la población en general.

    .row.justify-content-center.align-items-center.mb-5
      .col-10
       .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/10.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 Esta atención integral en salud notifica, detecta y trata tempranamente la enfermedad y los traumatismos que tienen las personas, de esta manera la estrategia garantiza un mejor nivel de vida en la salud del individuo, la familia y la población y, conserva el logro de una mejor práctica de los usuarios durante el proceso de atención en salud con precios acordes a los resultados conseguidos durante la recuperación y la rehabilitación de la enfermedad.
            br
            br
            | Teniendo en cuenta los criterios antes mencionados se lleva a cabo lo que se comprende como RIAS, que se definen a partir de su principal objetivo: 

    .row.justify-content-center.mb-5
      .col-10
        .cajon.color-secundario.p-5
          p #[b El objetivo de las RIAS] es garantizar al individuo, la familia y la comunidad la calidad y la calidez de un servicio con las condiciones necesarias para la salud integral en un territorio, teniendo en cuenta el mejoramiento de la calidad de vida en la atención en salud, el logro de los resultados esperados en salud, la seguridad y el aumento de la satisfacción del usuario y la optimización del uso de los recursos disponibles en salud.

          p Se presentan tres tipos de RIAS:

          ol.lista-ol
            li 
              span.text-bold 1. 
              | Ruta integral de atención para la promoción y mantenimiento de la salud.
            li 
              span.text-bold 2. 
              | Rutas integrales de atención para grupos de riesgo.
            li 
              span.text-bold 3.
              | Rutas integrales de atención específica.

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/11.svg', alt='Texto que describa la imagen')
          
        h2.text-center Ruta integral de atención para la promoción y mantenimiento de la salud
        p Se encarga de velar por las acciones mantenimiento, cuidado, educación, protección, detección temprana de las enfermedades del individuo para la salud, las familias y las comunidades, incluyendo atenciones obligatorias para toda la población.

      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/12.svg', alt='Texto que describa la imagen')
          
        h2.text-center Rutas integrales de atención para grupos de riesgo
        p Las entidades territoriales y las Entidades Promotoras de Salud (EPS) tienen como finalidad articular las intervenciones individuales y colectivas en las acciones determinado el diagnóstico, el tratamiento, la rehabilitación y el cuidado de la salud, para la atención del individuo en los servicios de salud que se requieran.

      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/13.svg', alt='Texto que describa la imagen')
          
        h2.text-center Rutas integrales de atención específica para eventos.
        p Corresponden a la acción temprana de la detección del diagnóstico, el tratamiento, la rehabilitación y en atención del individuo en el cuidado de la salud integral de los eventos o condiciones específicas de la salud, priorizadas en un territorio como la educación para la salud, potenciando el cuidado.

    .d-flex.flex-wrap.align-items-center(data-aos="fade-right").mb-5
      img(src='@/assets/curso/temas/icono.svg' style="max-width: 30px;")
      .h3.col-auto.pb-2.mb-0.ms-2(style=" color: #455B2D;") Principios de las RIAS

    p(data-aos="fade-left").mb-5 Presentan unos elementos que se convierten en guías para intervenir los procesos de salud en una población de riesgo, para esto se debe conocer cuáles son los principios que mantienen el concepto de elaboración de las rutas integrales de atención en salud, los cuales son: 

    .row.justify-content-center.mb-5
      .col-lg-6
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Centrado en los sujetos") Se ajustan en las personas, las familias y las comunidades, respetando su cultura, el contexto social y las necesidades específicas de los individuos.

          p(numero="2" titulo="Seguridad y calidad") Aquí se ejerce la seguridad y la calidad mediante la promoción de la práctica informada por la evidencia y la voluntad constante en la mejora de la calidad.

          p(numero="3" titulo="Eficacia") Comparten acciones e intervenciones eficaces para garantizar la atención integral en salud y la adecuada prestación de los servicios de salud del individuo.

          p(numero="4" titulo="Eficiencia") Se basa en disminuir los residuos y el costo total de la prestación de servicios de salud directos e indirectos.

          p(numero="5" titulo="Equidad") Ofrecen oportunidades para abordar y cerrar las brechas socioeconómicas en el estado de salud del individuo.

      .col-6.col-lg-6
        figure
          img(src="@/assets/curso/temas/tema2/14.svg", alt="alt")


    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Estilos de vida saludable

    p(data-aos="fade-left") Según la OMS el estilo de vida saludable es una forma de vida en las interacciones de las condiciones de vida de un individuo, la familia y la sociedad de acuerdo con sus conductas, determinada por factores de riesgo socioculturales y características personales de una persona.
    p(data-aos="fade-left") Por lo tanto, el enfoque del autocuidado está orientado a las decisiones, las capacidades y las acciones que el ser humano, la comunidad y el Estado adopta para proteger la salud individual de las familias y de la sociedad en un territorio. Aquí se observa que las responsabilidades que asume el individuo y la comunidad generan oportunidad en el desarrollo de las condiciones para la seguridad y el bienestar, la convivencia, el cuidado, la solidaridad, la cultura, la seguridad social y el fortalecimiento de las redes de apoyo sociocultural.
    p(data-aos="fade-left").mb-5 Para desarrollar las estrategias de una vida plena y saludable hay que tener presente los 7 hábitos que describe la OMS:  

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-6
        <hr style="border:15px;">
        .row.align-items-center  
          .col-2 
            img(src="@/assets/curso/temas/tema2/16.svg", alt="alt")
          .col-10 
            p Tener una alimentación saludable y equilibrada.
        <hr style="border:15px;">
        .row.align-items-center  
          .col-2 
            img(src="@/assets/curso/temas/tema2/17.svg", alt="alt")
          .col-10 
            p Mantener una actividad e interacción social habitual.
        <hr style="border:15px;">
        .row.align-items-center  
          .col-2 
            img(src="@/assets/curso/temas/tema2/18.svg", alt="alt")
          .col-10 
            p Bienestar psicológico y emocional.
        <hr style="border:15px;">
        .row.align-items-center  
          .col-2 
            img(src="@/assets/curso/temas/tema2/19.svg", alt="alt")
          .col-10 
            p Reducir el consumo de alcohol
        <hr style="border:15px;">
        .row.align-items-center  
          .col-2 
            img(src="@/assets/curso/temas/tema2/20.svg", alt="alt")
          .col-10 
            p Higiene personal y ambiental
        <hr style="border:15px;">
        .row.align-items-center  
          .col-2 
            img(src="@/assets/curso/temas/tema2/21.svg", alt="alt")
          .col-10 
            p Eliminar el uso del tabaco
        <hr style="border:15px;">
        .row.align-items-center  
          .col-2 
            img(src="@/assets/curso/temas/tema2/22.svg", alt="alt")
          .col-10 
            p Hacer actividad física diaria.
        <hr style="border:15px;">
      .col-6.col-lg-6
        figure
          img(src="@/assets/curso/temas/tema2/15.svg", alt="alt").p-4
</template>

<script>
export default {
  name: 'Tema2',
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
