export default {
  global: {
    componenteFormativo: 'Promoción de la seguridad sanitaria y ambiental',
    descripcionCurso:
      'En la gestión de la salud ambiental y la seguridad sanitaria es importante reconocer la epidemiología y la demografía desde el rol que representan frente a la política de salud pública y organizaciones regionales, que guían la planificación regional de la salud y el riesgo, con el objetivo de promocionar las acciones desde la normativa de salud pública. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Perfil demográfico y epidemiológico del grupo social',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Curso de vida',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Promoción de la salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Autocuidado ',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Factores de riesgo y protectores ',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Estilos de vida saludable ',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Actores sociales y comunitarios relacionados con la salud ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Mapa de actores sociales y comunitarios ',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Estrategia para orientar las competencias en la seguridad sanitaria y en los factores protectores que favorezcan el autocuidado',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Prevención de la enfermedad y Atención Primaria en Salud (APS)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Valores y componentes',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Redes integradas de servicios de salud',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_05_331316.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Perfil demográfico y epidemiológico del grupo social',
      referencia:
        'Decreto 3518 de 2006. [Ministerio de Salud y Protección Social]. Por el cual se crea y reglamenta el Sistema de Vigilancia en Salud Pública y se dictan otras disposiciones. Octubre 09 de 2006.',
      tipo: 'Documento',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Decreto-3518-de-2006.pdf',
    },
    {
      tema: 'Perfil demográfico y epidemiológico del grupo social',
      referencia:
        'Resolución 3280 de 2018. [Ministerio de Salud y Protección Social]. Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud y la Ruta Integral de Atención en Salud para la población materno perinatal y se establecen las directrices para su operación. Agosto 2 de 2018. ',
      tipo: 'Documento',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%203280%20de%2020183280.pdf',
    },
  ],
  glosario: [
    {
      termino: 'APS Atención Primaria en Salud',
      significado:
        'Coordina la estrategia que permite la atención a la salud pública, la promoción de la salud, la prevención de la enfermedad, el diagnóstico, el tratamiento y la rehabilitación del paciente.',
    },
    {
      termino: 'Autocuidado',
      significado:
        'Es definido por la OMS (s.f.) como "la capacidad de los individuos, las familias y las comunidades para promover la salud, prevenir las enfermedades, mantener la salud y hacer frente a las enfermedades y a la discapacidad con o sin el apoyo de un proveedor de atención médica".',
    },
    {
      termino: 'Curso de vida',
      significado:
        'Se tiene en cuenta la evolución de cada ser humano acorde a su edad, para ello se tiene en cuenta sus condiciones de salud. ',
    },
    {
      termino: 'Demografía',
      significado:
        'Reconoce el comportamiento de la población humana a partir de movimientos, sus niveles y sus tendencias. ',
    },
    {
      termino: 'Enfermedad',
      significado:
        'La OMS la define como la alteración de cualquier orden biopsicosocial que represente sufrimiento al individuo (OMS, 2016). ',
    },
    {
      termino: 'Morbilidad',
      significado:
        'Es el estudio de una enfermedad en una población, en un sitio y tiempo determinado.',
    },
    {
      termino: 'Perfil epidemiológico',
      significado:
        'Es el estudio de la morbilidad, la mortalidad y los factores de riesgo que se hacen presente a partir de las características geográficas de la población.',
    },
    {
      termino: 'Riesgo',
      significado:
        'La probabilidad de ocurrencia de un evento no deseado, evitable y negativo para la salud del individuo, que puede ser también el empeoramiento de una condición previa o la necesidad de requerir más consumo de bienes y servicios. ',
    },
    {
      termino: 'Salud',
      significado: 'Se reconoce como el bienestar físico y emocional. ',
    },
    {
      termino: 'Salud pública',
      significado:
        'Está orientada a dirigir, promover, mantener y proteger la salud de la comunidad, y prevenir enfermedades. ',
    },
    {
      termino: 'Mortalidad',
      significado:
        'Estudia la frecuencia del número de defunciones ocurridas en una población, área geográfica y período determinado. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Decreto 3518 de 2006. [Ministerio de Salud y Protección Social]. Por el cual se crea y reglamenta el Sistema de Vigilancia en Salud Pública y se dictan otras disposiciones. Octubre 09 de 2006. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Decreto-3518-de-2006.pdf',
    },
    {
      referencia:
        'El diario de salud. (2022). Nuevas directrices de la OMS sobre autocuidados. El diario de salud. ',
      link:
        'https://eldiariodesalud.com/internacional/nuevas-directrices-de-la-oms-sobre-autocuidados',
    },
    {
      referencia:
        'Fondo para el logro de los ODM. Hacia una vivienda saludable. Fondo para el logro de los ODM. ',
      link: 'https://www1.paho.org/per/images/stories/PyP/PER37/27.pdf',
    },
    {
      referencia:
        'García, R. (2004). Curso de Gestión local de salud para técnicos del primer nivel de atención. Universidad de Costa Rica. ',
      link:
        'https://www.binasss.sa.cr/opac-ms//media/digitales/Gesti%C3%B3n%20estrat%C3%A9gica.pdf',
    },
    {
      referencia:
        'Gaviria, A., Dávila, C., Correa, L., Burgos, G. y Osorio, E. (2018). Orientaciones pedagógicas, metodológicas y didácticas.  Ministerio de Salud y Protección Social. ',
      link: '',
    },
    {
      referencia:
        'Gaviria, A., Dávila, C., Correa, L., Burgos, G. y Arias, J. (2016). Redes Integrales de prestadores de servicios de salud. Ministerio de Salud y Protección Social. ',
      link: '',
    },
    {
      referencia: 'OMS. (2021). Atención primaria de salud. OMS. ',
      link:
        'https://www.who.int/es/news-room/fact-sheets/detail/primary-health-care#:~:text=La%20APS%20comprende%20tres%20componentes,salud%20m%C3%A1s%20extendidos%20y%20de',
    },
    {
      referencia: 'OPS. (s.f.). Curso de vida saludable. OPS. ',
      link: 'https://www.paho.org/es/temas/curso-vida-saludable',
    },
    {
      referencia: 'OPS. (s.f.). Promoción de la salud. OPS.  ',
      link: 'https://www.paho.org/es/temas/promocion-salud',
    },
    {
      referencia:
        'Palacios, D., Hinestrosa, F., González, A. y Moreno, B. (2009). Guía para el análisis demográfico local. UNFPA. Universidad Externado de Colombia. ',
      link: '',
    },
    {
      referencia:
        'Resolución 3280 de 2018. [Ministerio de Salud y Protección Social]. Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud y la Ruta Integral de Atención en Salud para la población materno perinatal y se establecen las directrices para su operación. Agosto 2 de 2018. ',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%203280%20de%2020183280.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Suralba Mosquera M',
          cargo: 'Experta Temática',
          centro: 'Regional Antioquia - Centro de Servicios de Salud',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Leydy Jhuliana Jaramillo Mejía',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Córtes',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Aruzidna Sánchez Alonso',
          cargo: 'Diseñadora de Contenidos Digitales',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard de Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
