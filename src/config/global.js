export default {
  global: {
    componenteFormativo: 'Análisis y diagnóstico de clientes',
    descripcionCurso:
      'Este componente se divide en varios espacios de contenidos relacionados con el mercado y los clientes. En un primer momento, se abordará el concepto de mercado, la tipología y diferentes estrategias para su segmentación, y en un segundo momento, se desarrollarán aspectos básicos de la investigación de mercados, técnicas e instrumentos de recolección. Finalmente, se presentan temas como el diagnóstico de clientes, métodos y técnicas. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto de mercado',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de mercados',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Estrategias para la segmentación de mercados',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Investigación de mercados',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto de investigación de mercados',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Técnicas básicas para la investigación de mercados',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Instrumentos de recolección de datos e información',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Los clientes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de clientes',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Técnicas para elaborar perfiles de clientes',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Diagnóstico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Concepto de diagnóstico de clientes',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Tipos de diagnósticos',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Métodos y técnicas para el diagnóstico de clientes',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
      texto:
        'Cámara de Comercio de Medellín. (2020). Tendencias de negocios - Mercadeo y ventas (Video). YouTube. ',
      tipo: 'video',
      link: 'https://www.youtube.com/watch?v=awW_rk9cAz4',
    },
    {
      texto:
        'TEDx Talks. (2022). “No me lo digas, demuéstramelo”. Una visión futura del marketing | Karen Goldberg | TEDxTolucaWomen (Video). YouTube. ',
      tipo: 'video',
      link: 'https://www.youtube.com/watch?v=rgLoMu5gKZ0',
    },
    {
      texto:
        'Cámara de Comercio de Medellín. (2021). Aula Empresarial- A la conquista del nuevo consumidor (Video). YouTube. ',
      tipo: 'video',
      link: 'https://www.youtube.com/watch?v=eIqRUZZ3cyI',
    },
    {
      texto: 'Portugal, V. (2017). Diagnóstico Empresarial. Areandina. ',
      tipo: 'PDF',
      descarga: '/downloads/documento1.pdf',
    },
    {
      texto:
        'Castillo, V., Muñoz, G. y Muñoz, J. (2017). Diseño de un modelo de diagnóstico con enfoque en el cliente para empresas de servicios. Universidad Veracruzana. ',
      tipo: 'PDF',
      descarga: '/downloads/documento2.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Base de datos',
      significado:
        'las bases de datos son una herramienta fundamental en el entorno informático hoy en día y tienen aplicación en la práctica totalidad de campos como los negocios, organizaciones y en la vida personal. Su aplicabilidad responde a la necesidad de gestionar datos que provean información pertinente.  ',
    },
    {
      termino: 'Entrevista',
      significado:
        'es una charla en la que una persona hace a otra una serie de preguntas sobre un tema determinado.',
    },
    {
      termino: 'Encuesta',
      significado:
        'son un método de investigación y recopilación de datos utilizado para obtener información a partir de un grupo de individuos sobre diversos temas.',
    },
    {
      termino: 'Mercadeo',
      significado:
        'es un proceso mediante el cual las empresas crean valor para sus clientes y generan fuertes relaciones con ellos para, en reciprocidad, captar valor de los clientes.',
    },
    {
      termino: 'Mercado',
      significado:
        'el mercado es un proceso que opera cuando hay personas que actúan como compradores y otras como vendedores de bienes y servicios, generando la acción del intercambio.',
    },
    {
      termino: 'Mercado meta',
      significado:
        'se refiere al grupo de personas ideales para adquirir un servicio o producto, al que se debe dirigir la atención y los esfuerzos de <em>marketing.</em>',
    },
    {
      termino: 'Motivación',
      significado:
        'son las fuerzas psicológicas que mueven a una persona a actuar de cierta manera. En el <em>marketing</em>, la motivación se refiere a la necesidad que una persona busca satisfacer.',
    },
    {
      termino: 'Muestra',
      significado:
        'segmento de la población seleccionado para una investigación de mercado como representativa de la totalidad de la población.',
    },
    {
      termino: 'Nicho de mercado',
      significado:
        'segmento de mercado pequeño que se encuentra bajo la vista de una compañía, ya que está libre de competidores y ofrece potencial de ventas significativo.',
    },
    {
      termino: 'Observación',
      significado:
        'es una técnica que consiste en observar atentamente el fenómeno, hecho o caso, tomar información y registrarla para su posterior análisis.',
    },
    {
      termino: 'Posicionamiento',
      significado:
        'es la forma en que un producto está definido por los consumidores en atributos importantes, el lugar que ocupa en la mente de los consumidores respecto a los productos competidores.',
    },
    {
      termino: 'Promoción de ventas',
      significado:
        'son las actividades encaminadas a cambiar el comportamiento del consumidor de una manera inmediata, dándole algo por ese cambio de comportamiento. Los tipos de promociones de ventas utilizados hoy en día son: descuento, bonificación, asociación de productos, muestra gratis, programas continuos, concursos y sorteos.',
    },
    {
      termino: 'Reposicionamiento',
      significado:
        'estrategia que busca cambiar la percepción que tiene el mercado de un producto.',
    },
    {
      termino: 'Segmento',
      significado:
        'subgrupo de personas que muestran características similares entre ellos y comparten algunas necesidades y atributos en especial.',
    },
    {
      termino: 'Segmentación',
      significado:
        'es el proceso de dividir un mercado en grupos de clientes potenciales con necesidades y/o características similares y que pueden requerir un producto diferente y/o una forma de comunicación diferente.',
    },
    {
      termino: '<em>Top of mind</em>',
      significado:
        'la primera marca que mencionan al responder cuando se pregunta por un nombre en particular en una categoría de productos.',
    },
    {
      termino: 'Universo',
      significado:
        'en investigación, es la colección de todas las posibles muestras a evaluar dentro de unas características delimitadas por la investigación.',
    },
    {
      termino: 'Ventas',
      significado:
        'son actividades relacionadas con la venta o la cantidad de bienes vendidos en un período de tiempo determinado. La entrega de un servicio por un costo también se considera una venta.',
    },
  ],
  referencias: [
    {
      referencia:
        'Báez, J. y De Tudela, P. (2009). Investigación cualitativa. Esic Editorial.',
      link: '',
    },
    {
      referencia:
        'Barroso Castro, C. y Martin Armario, E. (1999). Nivel de servicio y retención de clientes: el caso de la banca en España. Revista española de investigación de marketing, 3(1), p. 9-36',
      link: 'https://hdl.handle.net/11441/78250',
    },
    {
      referencia:
        'Caro, L. (2019). 7 Técnicas e Instrumentos para la Recolección de Datos. Lifeder.',
      link: 'https://www.lifeder.com/tecnicas-instrumentosrecoleccion-datos/',
    },
    {
      referencia:
        'Díaz Bravo, L., Torruco-García, U., Martínez-Hernández, M. y Varela-Ruiz, M. (2011). La entrevista, recurso flexible y dinámico. Investigación en Educación Médica, 2(7), p. 162-167.',
      link: 'https://www.redalyc.org/pdf/3497/349733228009.pdf',
    },
    {
      referencia:
        'Herrera, J. (2022). Investigación de mercados. Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Castillo, V., Muñoz, G. y Muñoz, J. (2017). Diseño de un modelo de diagnóstico con enfoque en el cliente para empresas de servicios. Universidad Veracruzana.',
      link: 'https://www.uv.mx/iiesca/files/2017/10/22CA201701.pdf',
    },
    {
      referencia:
        'Kerin, W., Hartley, R. y Rudelius, S. (2014). Marketing. McGraw-Hill Education.',
      link: '',
    },
    {
      referencia:
        'Lamb, Ch., Hair, J. y McDaniel, C. (2011). Marketing. Cengage Learning.',
      link:
        'https://www.academia.edu/36580935/Marketing_Lamb_Hair_and_McDaniel_11va_Edicion',
    },
    {
      referencia:
        'Kotler, P. y Armstrong, G. (2012). Marketing. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Kotler, P. y Armstrong, G. (2013). Fundamentos de Marketing. Pearson Educación.',
      link: '',
    },
    {
      referencia: 'Portugal, V. (2017). Diagnóstico Empresarial. Areandina. ',
      link:
        'https://digitk.areandina.edu.co/bitstream/handle/areandina/1489/Diagn%C3%B3stico%20Empresarial.pdf?sequence=1',
    },
    {
      referencia:
        'Ramírez, P. y Duque, E. (2013). Involucramiento de producto y lealtad de marca para productos de consumo masivo en Bogotá D.C. Estudios Gerenciales, 29(128), p. 303–312.',
      link: '',
    },
    {
      referencia:
        'Stanton, W.,  Etzel, M. y Walker, B. (2007). Fundamentos de Marketing. McGraw-Hill Interamericana.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Paolo Andrés Cantillo Largo',
        cargo: 'Experto Temático',
        centro: ' Centro de Comercio - Regional Antioquia ',
      },
      {
        nombre: 'Adriana López',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de Estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Blanca Flor Tinoco Flores',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
