<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Perfil demográfico y epidemiológico del grupo social
      
    p(data-aos="fade-right")  El estado demográfico es un conjunto de secciones, tablas y gráficos que permiten presentar y resumir en detalle la situación de la población (o estructura de la población: características de los individuos y distribución de las proyecciones en un período de tiempo limitado) y el proceso de crecimiento o su estado. El declive de la mano de obra.
    p(data-aos="fade-left").mb-5 Con el estado demográfico se define ciertos indicadores que determinan el crecimiento y el tamaño de la distribución poblacional de la región para medir la incidencia de nacimientos, muertes, crecimiento global y migración. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 En este caso, es necesario prestar atención a los principales aspectos del poder demográfico, lo que permite analizar y comprender los cambios de cada uno para establecer conexiones con otros parámetros de desarrollo, considerando las características biológicas y sociales, por ejemplo, creación de la población/actividad humana: todo el medioambiente. Una manera de representarlo es como se comparte a continuación:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 1.] <em>Componentes básicos de la dinámica demográfica</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/2.svg', alt='En la figura 1 se muestra los componentes básicos de la dinámica demográfica, como son la natalidad y la mortalidad, entre otros.')
          figcaption Nota: adaptado de la guía de dinámicas demográficas. Representa las relaciones que se brindan desde el crecimiento vegetativo y el crecimiento migratorio. 

    p(data-aos="fade-right").mb-5 Para proceder a elaborar el perfil demográfico se tiene presente algunos componentes básicos que ayudan a orientar su estructura y elaboración, los cuales son: 

    .row(data-aos="fade-left").mb-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4(style='height:100%')
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/7.svg', alt='Texto que describa la imagen')

          h3.text-center Número
          p Su tamaño o el número de personas que viven en esa área.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4(style='height:100%')
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/8.svg', alt='Texto que describa la imagen')

          h3.text-center Crecimiento
          p Si el número de nuevos residentes aumenta, permanece igual o disminuye durante un período de tiempo (generalmente años).

      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton.color-primario.p-4(style='height:100%')
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/9.svg', alt='Texto que describa la imagen')

          h3.text-center Estructura
          p Composición de grupos por edad, género, raza y características culturales.

      .col-sm-6.col-lg-3
        .tarjeta--boton.color-primario.p-4(style='height:100%')
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/10.svg', alt='Texto que describa la imagen')

          h3.text-center Distribución
          p Geográfica o población mayor o menor en un área determinada (pueblo, parque de la ciudad, pueblo, campo, etc.).

    .row.justify-content-center.mb-5
      .col-10
        .tarjeta.color-primario.p-5(style='border-radius:0px')
          .row.justify-content-center.align-items-center
            .col-2
              img(src='@/assets/curso/temas/tema1/11.svg', alt='Texto que describa la imagen')
            .col-10
              p El perfil epidemiológico hace relación al estudio de la morbilidad, la mortalidad y los factores de riesgo, teniendo en cuenta las características geográficas, la población y el tiempo, involucrando de esta forma las características demográficas de los grupos sociales.

    .row.justify-content-center.mb-5
      .col-10
        .cajon.color-secundario.p-4
          p El perfil epidemiológico se refiere al término del estudio de la enfermedad (estado de salud) que sufre una población determinada, y su situación de salud y la identificación de especialidades que la precisan. Para esto se tienen unos rasgos y son la mortalidad, la morbilidad y los factores de riesgo, teniendo en cuenta las características geográficas de la población y el tiempo más la calidad de vida en que se encuentra la población.

    p(data-aos="fade-left") Los perfiles epidemiológicos se utilizan para medir indirectamente los problemas de salud que afectan el bienestar de la población y que se ha convenido en denominar morbilidad. Es importante considerar, sin embargo, que un análisis integral del perfil de la morbilidad incluye no solo las enfermedades, sino también otros problemas de salud como aquellos que afectan la salud mental, los accidentes de tránsito, la violencia, la drogadicción, entre otros.

    p(data-aos="fade-left").mb-5 Para la construcción del perfil epidemiológico se debe tener en cuenta el siguiente proceso:

    .row.justify-content-center.mb-5
      .col-3.p-5
        figure
          img(src='@/assets/curso/temas/tema1/6.svg')
      
      .col-sm-3.col-xl-3.mb-4.mb-xl-0(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema1/3.svg' alt='AvatarTop' style='width:600px')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #F1ECE6")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 <strong>Los trazadores</strong>
            p Se identifican los trazadores como la salud de los niños, o de la salud materna, o eficacia de los servicios de salud como las coberturas de vacunación.
           
      .col-sm-3.col-xl-3.mb-4.mb-xl-0(data-aos="fade-up")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema1/4.svg' alt='AvatarTop' style='width:600px')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #F1ECE6")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 <strong>La información</strong>
            p Se busca la información que permita calcular el estado actual de estos indicadores, se establece si tienen una tendencia a la baja o al aumento

      .col-sm-3.col-xl-3.mb-4.mb-xl-0(data-aos="fade-up")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema1/5.svg' alt='AvatarTop' style='width:600px')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #F1ECE6")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 <strong>El diagnóstico</strong>
            p Se hace un diagnóstico de la salud de la comunidad.

    p(data-aos="fade-left") Además, en lo que se refiere a la epidemiología cabe señalar que las siguientes disposiciones de este Decreto rigen en todo el territorio nacional y son de obligación para su observancia y aplicación por parte de las organizaciones y los miembros del sistema común de medicina socioeconómica y las organizaciones responsables para los regímenes de excepción a que se refiere el Artículo 279 de la Ley 100 de 1993 y la Ley 647 de 2001, las personas naturales, las organizaciones comunitarias y la comunidad en general, así como las organizaciones u otros organismos con intereses ajenos a la industria, siempre que sus actividades afecten la salud de las personas, de la población en general y se pueda generar información útil y necesaria para la consecución de sus objetivos fundamentales y objetivos del sistema de vigilancia de la salud pública.  
    
    p(data-aos="fade-left").mb-5 Desde el cuidado de la población surge uno de los decretos que a partir de sus disposiciones crea y reglamenta el Sistema de vigilancia en salud pública, el cual se presenta como el Decreto 3518 de 2006 Artículo 3 en el que dispone las definiciones que allí se configuran. 

    .row.justify-content-center.mb-5
      .col-lg-6
        a.anexo.mb-4(href=('https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Decreto-3518-de-2006.pdf') target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Para mayor información consulte el Decreto 3518 de 2006, dar clic aquí.
          


    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Curso de vida

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/12.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 En los momentos que se le brinda la atención en salud al individuo, la familia y su entorno social o comunitario se le denomina curso de vida, en este espacio se suma como sujeto de atención según la dinámica familiar y de las incidencias o situaciones que estas presenten, con el fin de promover y fortalecer las familias funcionales con capacidad de reflexión y acción libre sobre su situación y eventos de transformación que orienten al desarrollo humano, acorde con su contexto social y cultural en un territorio.

    p(data-aos="fade-left").mb-5 Además de formalizar la atención en salud situando en el centro a las personas, las familias y las comunidades se solicita que la planeación, la ejecución, el seguimiento, el monitoreo y la evaluación de la atención en salud en el marco de las Rutas Integrales de Atención en Salud (RIAS) se ejecute considerando de forma integral a los individuos de atención con sus especialidades y sus contextos territoriales, lo cual involucra realizar ajustes en aspectos como: 

    .row.justify-content-center.mb-5
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-primario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/13.svg' alt='AvatarTop')
          p.text-center Los servicios

        .tarjeta.color-primario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/14.svg' alt='AvatarTop')
          p.text-center Las modalidades de prestación

        .tarjeta.color-primario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/15.svg' alt='AvatarTop')
          p.text-center La distribución de los recursos

        .tarjeta.color-primario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/16.svg' alt='AvatarTop')
          p.text-center Las tecnologías

        .tarjeta.color-primario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/17.svg' alt='AvatarTop')
          p.text-center Los mecanismos de abordaje de las poblaciones

        .tarjeta.color-primario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/18.svg' alt='AvatarTop')
          p.text-center La organización de las Redes Integrales de Prestadores de Servicios de Salud – RIPSS 
    
    p(data-aos="fade-left").mb-5 Es de esta manera como se lleva a cabo el relacionamiento entre los diferentes grupos sectoriales e intersectoriales que avalan los resultados en salud en las personas, las familias y las comunidades en todo el territorio nacional. Para ello, es necesario reconocer, según la OPS, la importancia que tiene el enfoque de curso de vida.

    .row.justify-content-center.mb-5
      .col-10
        .tarjeta.color-primario.p-5(style='border-radius:0px')
          .row.justify-content-center.align-items-center
            .col-2
              img(src='@/assets/curso/temas/tema1/19.svg', alt='Texto que describa la imagen')
            .col-10
              p De acuerdo con la OPS, el enfoque de curso de vida aplicado a la atención sanitaria se basa en un modelo que sugiere que los resultados en salud para los individuos, las familias y las comunidades dependen de la interacción de diversos factores protectores y de riesgo en el transcurso de la vida.
    p(data-aos="fade-left").mb-5 El enfoque de curso de vida aplicado a la atención sanitaria se fundamenta en 5 principios básicos analíticos que son expuestos por Elder (Elder, 1999; Marshall y Mueller, 2003):

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-md-8.col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 2.] <em>Elementos centrales del enfoque curso de vida</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/20.svg', alt='En la figura 2 se muestran los elementos centrales del enfoque curso de vida en un engranaje, trayectoria, sucesos vitales y transición.')
          figcaption Nota. Adaptada de la Resolución 3202 de 2016.

    p(data-aos="fade-left").mb-5 Reconociendo el ciclo de la vida es importante identificar el tiempo, las etapas y las edades que puede presentar cada uno de ellos, por ende, se comparte una guía básica que orienta cada una de estas:

    .row.justify-content-center.mb-5
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-primario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/21.svg' alt='AvatarTop')
          h2.text-center Primera infancia
          p.text-center Comprende de los 7 días hasta los 5 años, 11 meses y 29 días.

        .tarjeta.color-primario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/22.svg' alt='AvatarTop')
          h2.text-center Infancia
          p.text-center Comprende desde los 6 a 11 años.

        .tarjeta.color-primario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/23.svg' alt='AvatarTop')
          h2.text-center Adolescencia
          p.text-center Comprende desde los 12 a los 17 años.

        .tarjeta.color-primario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/24.svg' alt='AvatarTop')
          h2.text-center Adultez
          p.text-center Comprende entre los 29 a 59 años.

        .tarjeta.color-primario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/25.svg' alt='AvatarTop')
          h2.text-center Vejez
          p.text-center 60 años en adelante.

    .d-flex.flex-wrap.align-items-center(data-aos="fade-right").mb-5
      img(src='@/assets/curso/temas/icono.svg' style="max-width: 30px;")
      .h3.col-auto.pb-2.mb-0.ms-2(style=" color: #455B2D;") Entorno

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/26.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 En el ciclo de vida es importante el aporte que hace cada entorno a los individuos, dado que este se comprende como los periodos que se tienen como individuo, familia y sociedad, a partir de los cuales se llevan a cabo las relaciones sociales, culturales y políticas.
        br
        br
        | El entorno tiene unas características viables que se pueden ajustar al desarrollo de la familia, el individuo y la sociedad, las cuales generan unas condiciones de seguridad, protección y convivencia que contribuyen al mejoramiento y el bienestar de la sociedad en una población, que son importantes porque:

    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | Ayudan en el desarrollo humano sustentable y sostenible.
      li 
        i.lista-ul__vineta
        | Inician el desarrollo de las capacidades del individuo.
      li 
        i.lista-ul__vineta
        | Ayudan al bienestar individual, familiar y colectivo.
      li 
        i.lista-ul__vineta
        | Promueven, ratifican prácticas y normas que se constituyen en la forma de vivir.
      li 
        i.lista-ul__vineta
        | Fortalecen la salud integral, ofrecen protección, seguridad y confianza para la vida y convivencia de las personas y colectivos.
      li 
        i.lista-ul__vineta
        | Permiten la gestión y el ejercicio de los derechos, mejores condiciones y calidad de vida.
      li 
        i.lista-ul__vineta
        | Generan condiciones de protección, seguridad, convivencia, cuidado, que contribuyen al mejoramiento del bienestar individual y colectivo de la población.
      li 
        i.lista-ul__vineta
        | Se fomenta el respeto y el reconocimiento de la complejidad: curso de vida, género, etnia y condiciones particulares, situaciones sociales (desplazamiento, víctimas del conflicto, personas en situación de calle, entre otros).
      li 
        i.lista-ul__vineta
        | Comienzan la participación social y la movilización en torno a la generación de condiciones de bienestar y calidad de vida del individuo.
      li 
        i.lista-ul__vineta
        | Consisten en visibilizar los saberes y las prácticas en torno al manejo personal y social de los conflictos y los sucesos vitales adversos en cada región.
      li 
        i.lista-ul__vineta
        | Crea el acceso a los bienes y los servicios que promueven los modos, las condiciones y los estilos de vida saludable.
      li  
        i.lista-ul__vineta
        | Originan buenas condiciones de vida saludable como las condiciones sociales, físicas y ambientales (infraestructura, agua para el consumo humano, saneamiento básico, higiene, dinámicas propias de los entornos familiar, educativo, laboral y comunitario), que ayudan al mantenimiento y/o mejoramiento de las condiciones y los estilos de vida de las personas en su territorio.
      li 
        i.lista-ul__vineta
        | Se configuran como los escenarios que se traducen en unidad de gestión donde se materializan las respuestas institucionales (entre ellas las atenciones/intervenciones del sector salud), sectoriales y de actores que participan en el bienestar y el desarrollo de los individuos. 

    p(data-aos="fade-left").mb-5 A partir de los elementos que se consideran al definir lo que representa el entorno se relacionan desde la Política de Atención Integral en Salud - PAIS en los siguientes escenarios: hogar, educativo, comunitario, laboral e institucional, para ello identifique cada uno y su descripción.

    PasosA.color-primario.mb-5(tipo="n")
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Entorno hogar
          p Es el escenario de refugio, acogida y afecto. Constituye un espacio de residencia y convivencia permanente, es fundamental para el desarrollo y el establecimiento de los vínculos y de las relaciones sociales de base para la vida. 
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/27.png', alt='Texto que describa la imagen')

      .row
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/28.png', alt='Texto que describa la imagen')
        .col-md-6
          h3 Entorno educativo
          p Corresponde a los escenarios de la vida cotidiana donde la comunidad educativa desarrolla capacidades a través de los procesos de enseñanza y aprendizaje contextualizados, que permiten la construcción social y la reproducción de la cultura.

      .row
        .col-md-6.mb-4.mb-md-0
          h3 Entorno laboral
          p Comprende los escenarios donde las personas e individuos se organizan para producir bienes y servicios en condiciones que promueven y protegen la salud, brindando bienestar a los trabajadores, sus familias y las comunidades.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/29.png', alt='Texto que describa la imagen')
            
      .row
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/30.png', alt='Texto que describa la imagen')
        .col-md-6
          h3 Entorno comunitario
          p Comprende los espacios donde se da la dinámica social de las personas y los colectivos dispuestos en grupos de base, redes sociales y comunitarias organizadas de manera autónoma y solidaria.

      .row
        .col-md-6.mb-4.mb-md-0
          h3 Entorno institucional
          p Comprende los espacios intramurales de las instituciones prestadoras de servicios de salud (públicas y privadas), las instituciones que prestan servicios sociales o de protección integral y las instituciones en donde viven un grupo de personas, generalmente no parientes, que participan de una vida en común.
      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/31.png', alt='Texto que describa la imagen')
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
