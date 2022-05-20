<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bg-tema2
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Investigación de mercados
    .tarjeta.bg-tg-2.p-5.mb-5
      .row.p-lg-5
        .col-xl-6
          p(data-aos='fade') Luego de segmentar los públicos potenciales, es importante investigar las características del mercado donde se encuentra ubicado ese grupo de clientes. Para ello, se utiliza la investigación de mercados, una actividad que permite obtener información del sector para una correcta toma de decisiones al momento de implementar acciones de marketing. 
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1  Concepto de investigación de mercados
    .row.justify-content-center.mb-5
      .col-lg-7
        p.mb-3 La investigación de mercado es un proceso que aplica la empresa para obtener información del sector mediante la búsqueda y el análisis de datos, bien sea de fuentes primarias o secundarias.
        .d-flex.align-items-start.justify-content-center.mb-3
          img(src="@/assets/curso/temas/dots-2.svg" style="width: 84px").me-3.d-lg-block.d-none
          p.mb-0 En la investigación de mercados, se pueden distinguir dos tipos de investigación: investigación de mercados cualitativa e investigación de mercados cuantitativa.
        div(data-aos='fade') 
          .titulo.rounded-pill.color-primario.p-2.d-inline-block.mb-4
            .text-white: h4.mb-0.me-3 Investigación de mercados cualitativa
          p.mb-5 Se denomina investigación de mercados cualitativa al conjunto de técnicas que se utilizan para obtener una visión general del comportamiento y la percepción de las personas sobre un tema en particular. Según Baez (2009), la investigación cualitativa es 
            span.f-3 “el conjunto de todas las cosas que se hacen para seguir la pista a los mercados y encontrar los rasgos que distinguen a las personas (cliente, consumidor, organización…) y a las cosas (productos, bienes, servicios, sectores de actividad), sus propiedades y atributos, sean estos naturales y/o adquiridos”.
      .col-lg-5: img.rounded-3(src='@/assets/curso/temas/39.jpg')
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.bg-1-claro.p-5
            .row.mb-4
              .col-4
                figure
                  img(src='@/assets/curso/temas/40.svg', alt='Texto que describa la imagen')
              
            h4 Ventajas
            ul.lista-ul--color.listado-azul
              li.mb-3
                i.fas.fa-dot-circle.fa-xs
                | No necesita un plan estrictamente diseñado.
              li.mb-3
                i.fas.fa-dot-circle.fa-xs
                | Se adquiere información detallada y enriquecida en descripciones.
              li.mb-3
                i.fas.fa-dot-circle.fa-xs
                | Observa el contexto y el sentido social.
              li.mb-3
                i.fas.fa-dot-circle.fa-xs
                | La comunicación es horizontal.
          .col-md.tarjeta.bg-1-claro.p-5
            .row.mb-4
              .col-4
                figure
                  img(src='@/assets/curso/temas/41.svg', alt='Texto que describa la imagen')
              
            h4 Desventajas
            ul.lista-ul--color.listado-azul
              li.mb-3
                i.fas.fa-dot-circle.fa-xs
                | Se interpreta la investigación con una visión sesgada.
              li.mb-3
                i.fas.fa-dot-circle.fa-xs
                | Consume mucho tiempo.
              li.mb-3
                i.fas.fa-dot-circle.fa-xs
                | Puede tardar meses.
              li.mb-3
                i.fas.fa-dot-circle.fa-xs
                | Hay demasiado involucramiento por parte del investigador.
    p.mb-5 Para concretar, la investigación cualitativa pretende profundizar en los conceptos y valores, detectar motivadores y valorar las reacciones, y para su ejecución, requiere un soporte de psicología.
    .row.justify-content-center.mb-5
      .col-lg-7.mb-3.mb-lg-0: img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/42.jpg')
      .col-lg-5
        .titulo.rounded-pill.color-primario.p-2.d-inline-block.mb-4
          .text-white: h4.mb-0.me-3 Investigación de mercados cuantitativa
        p.mb-5 Se denomina investigación de mercados cuantitativa a aquella que busca obtener información acerca de la población objeto o público objetivo. Los datos obtenidos como resultado de la investigación se pueden analizar con modelos matemáticos o estadísticos, entre otras ayudas técnicas.

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.bg-1-claro.p-5
            .row.mb-4
              .col-4
                figure
                  img(src='@/assets/curso/temas/43.svg', alt='Texto que describa la imagen')
              
            h4 Ventajas
            ul.lista-ul--color.listado-azul
              li.mb-3
                i.fas.fa-dot-circle.fa-xs
                | Permite al investigador medir y analizar datos.
              li.mb-3
                i.fas.fa-dot-circle.fa-xs
                | Relación variable independiente y dependiente.
              li.mb-3
                i.fas.fa-dot-circle.fa-xs
                | Objetividad en la investigación.
              li.mb-3
                i.fas.fa-dot-circle.fa-xs
                | Puede utilizarse para probar hipótesis.
          .col-md.tarjeta.bg-1-claro.p-5
            .row.mb-4
              .col-4
                figure
                  img(src='@/assets/curso/temas/44.svg', alt='Texto que describa la imagen')
              
            h4 Desventajas
            ul.lista-ul--color.listado-azul
              li.mb-3
                i.fas.fa-dot-circle.fa-xs
                | El contexto del estudio o experimento es ignorado. 
              li.mb-3
                i.fas.fa-dot-circle.fa-xs
                | No hay discusiones en los resultados, porque son exactos.
              li.mb-3
                i.fas.fa-dot-circle.fa-xs
                | Debe estudiarse una amplia porción de la población.
    p.mb-5 Para sintetizar, la investigación cuantitativa pretende cuantificar, establecer proporciones y diferencias e importancia relativa, y para su ejecución, requiere un soporte estadístico.
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2  Técnicas básicas para la investigación de mercados
    .row.mb-3.justify-content-center
      .col-lg-9.mb-3
        .row
          .col-lg-8.mb-3.order-2.order-lg-1
            .cajon-b.color-primario.pe-3.mb-3
              p.mb-0 Cuando se realiza una investigación, es necesario obtener una información del mercado y definir la manera como se obtendrá esa información, eso se denomina recolección de datos. Una vez definido el método de recolección, se procede a realizar el trabajo de campo.
            p El trabajo de campo requiere varias actividades previas para su ejecución. Primero, requiere la identificación, formación y seguimiento de las personas que recopilan los datos, selección adecuada de la modalidad (presencial o virtual) y la técnica para la obtención de los datos, bien sea la observación, entrevistas telefónicas, entrevistas personales, por correo o electrónicas, encuestas, entre otras. 
            
          .col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0: img(src='@/assets/curso/temas/45.jpg')
          .col-lg-12.order-3
            .cajon-editado
              .bloque-texto-d.color-primario.p-4
                .bloque-texto-d__texto.mb-2
                  i.fas.fa-quote-left
                  p.text-regular Existen diferentes métodos y técnicas para obtener la información del mercado que puede ser importante en la investigación. La selección del método de recolección de información depende del enfoque de la estrategia, las variables seleccionadas, la exactitud esperada, la zona de recolección y las capacidades del encuestador. Estas técnicas reúnen y ayudan a organizar la información de acuerdo con el objetivo trazado.
                  i.fas.fa-quote-right
                .bloque-texto-d__autor 
                  .h6.mb-0 (Caro, 2019).   
      .col-lg-3.mb-3: img(src='@/assets/curso/temas/46.jpg')
    .row.justify-content-center.mb-3
      .col-lg-5.mb-3.mb-lg-0: img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/47.jpg')
      .col-lg-7
        .titulo.rounded-pill.color-primario.p-2.d-inline-block.mb-1
          .text-white: h4.mb-0.me-3 La observación
        p.mb-2 La observación consiste en obtener información del entorno, objeto o hecho en el cual se enfoca la investigación, mediante el registro de datos para su diagnóstico. En esta técnica, el investigador hace parte de la situación observada, persona o grupo de personas analizando sus comportamientos.
          br
          br
          | Hay dos tipos de observaciones: la directa e indirecta.
    p.mb-5 
      span.r-1 Observación directa: 
      |aquí, el investigador se encuentra en el lugar de los hechos; si realiza algún tipo de intervención, puede alterar la situación o los datos. La observación directa se caracteriza por:
    .row.justify-content-center.mb-5
      .col-lg-3.col-8.mb-3.mb-lg-0
        .tarjeta.tarjeta-slide-arriba.bg-3-claro.p-5(style='height: 295px ')
            .tarjeta-slide-arriba__img
              img(src='@/assets/curso/temas/48.svg')
            .d-inline.align-items-center
            .text-center
              h5
                span.r-1 Mercado industrial
              p El foco de investigación (objeto observado) no es intervenido por el observador.
      .col-lg-3.col-8.mb-3.mb-lg-0
        .tarjeta.tarjeta-slide-arriba.bg-3-claro.p-5(style='height: 295px ')
          .tarjeta-slide-arriba__img
            img(src='@/assets/curso/temas/49.svg')
          .d-flex.align-items-center
            .text-center.m-auto
              h5
                span.r-1 No es participativa
              p El investigador no hace recomendaciones a los participantes para no alterar los datos.
      .col-lg-3.col-8.mb-3.mb-lg-0
        .tarjeta.tarjeta-slide-arriba.bg-3-claro.p-5(style='height: 295px ')
          .tarjeta-slide-arriba__img
            img(src='@/assets/curso/temas/50.svg')
          .d-flex.align-items-center
            .text-center
              h5
                span.r-1 Es de larga duración
              p Con la finalidad de que los hechos se desarrollen de forma natural.
      .col-lg-3.col-8.mb-3.mb-lg-0
        .tarjeta.tarjeta-slide-arriba.bg-3-claro.p-5(style='height: 295px ')
          .tarjeta-slide-arriba__img
            img(src='@/assets/curso/temas/51.svg')
          .d-flex.align-items-center
            .text-center
              h5
                span.r-1 Resultados variados
              p En este método, los resultados pueden ser tanto reales como condicionados.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-3.mb-lg-0: img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/52.jpg')
      .col-lg-7
        p.mb-3 La observación directa puede ser:
        ul.lista-ul--color
          li.mb-3
            i.fas.fa-dot-circle.fa-xs
            p.mb-2
              span.r-1 Observación participante. 
              | El investigador participa de la acción a la vez que obtiene los datos.

          li.mb-3
            i.fas.fa-dot-circle.fa-xs
            p.mb-2
              span.r-1 Observación no participante. 
              | El investigador no interactúa con la población objeto de investigación.
    p.mb-5 
      span.r-1 Observación indirecta: 
      | aquí, el investigador recolecta la información a partir de fuentes secundarias, como bases de datos, documentación digital, tesis de grados, entrevistas realizadas, entre otros. La observación indirecta se caracteriza por:
    .row.justify-content-center.mb-5
      .col-lg-3.col-8
        .card-fondo--0.p-5.h-100
      .col-lg-3.col-8
        .card-fondo--1.p-5.h-100
          .tarjeta.bg-white.d-flex.align-items-center.text-center.p-4.h-100
            p.d-flex.m-auto Se basa en fuentes 
              br
              |secundarias.
      .col-lg-3.col-8
        .card-fondo--2.p-5.h-100
          .tarjeta.bg-white.d-flex.align-items-center.text-center.p-4.h-100
            p.d-flex.m-auto Los datos obtenidos son esencialmente cualitativos.
      .col-lg-3.col-8
        .card-fondo--3.p-5.h-100
          .tarjeta.bg-white.d-flex.align-items-center.text-center.p-4.h-100
            p.d-flex.m-auto No es intrusiva porque no se interactúa de forma directa con la investigación.
    .row.mb-3.justify-content-center
      .col-lg-9.mb-3
        .row
          .col-lg-8.mb-3.order-2.order-lg-1
            .titulo.rounded-pill.color-primario.p-2.d-inline-block.mb-4
              .text-white: h4.mb-0.me-3 La entrevista
            .cajon-b.color-primario.pe-3.mb-3
              p.mb-0 La entrevista es una técnica de investigación muy utilizada en la investigación cualitativa para obtener información. Esta consiste en una conversación realizada entre dos o más personas por medio de preguntas que pueden ser abiertas o cerradas. Para desarrollar una entrevista adecuadamente, se elabora un guion que permite orientar la conversación hacia la obtención de la información. La entrevista puede ser presencial, en la cual el entrevistador comparte el mismo espacio con el entrevistado; telefónica o en línea, cuando se realiza a través de una plataforma como Zoom, Teams o Skype, entre otras.. 
          .col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0: img(src='@/assets/curso/temas/53.jpg')
          .col-lg-12.order-3
            p Usualmente, en la entrevista se presentan preguntas abiertas, para que la persona entrevistada brinde la mayor cantidad de información posible, mientras que en las preguntas cerradas, las respuestas son limitadas y no hay lugar para alternativas; por ejemplo, en la pregunta cerrada: 
              span.f-3 ¿usted considera que el servicio fue bueno o malo?, 
              | solo hay dos alternativas de respuesta; mientras que si se complementa la pregunta con: 
              span.f-3 ¿usted considera que el servicio fue bueno o malo? ¿Por qué?, 
              |la pregunta abierta permitirá que el entrevistado amplíe los datos.
      .col-lg-3.mb-3: img(src='@/assets/curso/temas/54.jpg')
    p.mb-5 Las entrevistas, según la investigación, se clasifican en tres tipos, de acuerdo con Díaz et al. (2013): 
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .titulo.rounded-pill.color-primario.p-2.d-inline-block.mb-4
      .text-white: h4.mb-0.me-3 La encuesta
    p.mb-5 La encuesta es un método de investigación y recopilación de datos utilizado para obtener información a partir de un grupo de individuos, sobre diversos temas, mediante una serie de preguntas organizadas estratégicamente. A diferencia de la entrevista, no requieren de una interacción directa entre el entrevistador y el entrevistado, incluso, puede desarrollarse mediante correo electrónico u otro sistema informático. Al igual que la entrevista, puede tener preguntas abiertas y cerradas, así: 
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-3.mb-lg-0: img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/55.jpg')
      .col-lg-8
        LineaTiempoD.lineaEditada
          p.text-small(numero="1" titulo="Pregunta abierta") ¿Cómo le pareció el diseño del producto?

          p.text-small(numero="2" titulo="Pregunta dicotómica") El producto le pareció a. Bueno o b. Malo
          p.text-small(numero="3" titulo="Pregunta de opción múltiple")  El producto le pareció: 
            br
            |a. Excelente
            br
            |b. Bueno
            br
            |c. Regular
            br
            |d. Malo
          p.text-small(numero="4" titulo="Pregunta de escala de calificación") El producto suplió perfectamente sus necesidades:
            | a. Nada satisfecho.
            | b. Poco satisfecho.
            | c. Neutral.
            | d. Muy satisfecho.
            | e. Totalmente satisfecho.
          p.text-small(numero="5" titulo="Pregunta de orden de rangos") Coloque en orden de mayor a menor importancia las siguientes opciones, siendo 5 la más importante y 1 la menos importante para el producto:
            br
            |__ Marca
            br
            |__ Diseño
            br
            |__ Empaque
            br
            |__ Tamaño
            br
            |__ Color
    p.text-center Las encuestas pueden clasificarse según su alcance, tamaño de la muestra o método de recopilación de datos en: 
    .row.mb-5
      .col-lg-3.mb-4
        .tarjeta.tarjeta-avatar-slide.bg-verde.p-4.h-100
          .tarjeta-avatar-slide__img.mb-4
            .tarjeta-avatar-slide__img__item.mx-3: img(src='@/assets/curso/temas/56.svg', alt='Texto que describa la imagen' )
            .tarjeta-avatar-slide__img__item.mx-3: img(src='@/assets/curso/temas/57.svg', alt='Texto que describa la imagen' )
          p
            span.r-1.text-center Telefónica
              br
            | Cuando el entrevistador realiza una llamada telefónica y desarrolla las preguntas.
      .col-lg-3.mb-4
        .tarjeta.tarjeta-avatar-slide.bg-verde.p-4.h-100
          .tarjeta-avatar-slide__img.mb-4
            .tarjeta-avatar-slide__img__item.mx-3: img(src='@/assets/curso/temas/58.svg', alt='Texto que describa la imagen' )
            .tarjeta-avatar-slide__img__item.mx-3: img(src='@/assets/curso/temas/59.svg', alt='Texto que describa la imagen' )
          p
            span.r-1.text-center Encuestas en papel
              br
            | Cuando se entregan las preguntas y el sujeto las responde de forma autónoma.Cuando se entregan las preguntas y el sujeto las responde de forma autónoma.
      .col-lg-3.mb-4
        .tarjeta.tarjeta-avatar-slide.bg-verde.p-4.h-100
          .tarjeta-avatar-slide__img.mb-4
            .tarjeta-avatar-slide__img__item.mx-3: img(src='@/assets/curso/temas/60.svg', alt='Texto que describa la imagen' )
            .tarjeta-avatar-slide__img__item.mx-3: img(src='@/assets/curso/temas/61.svg', alt='Texto que describa la imagen' )
          p
            span.r-1.text-center Encuestas online
              br
            | Cuando el formulario es enviado a través del correo electrónico y se diligencia directamente.
      .col-lg-3.mb-4
        .tarjeta.tarjeta-avatar-slide.bg-verde.p-4.h-100
          .tarjeta-avatar-slide__img.mb-4
            .tarjeta-avatar-slide__img__item.mx-3: img(src='@/assets/curso/temas/62.svg', alt='Texto que describa la imagen' )
            .tarjeta-avatar-slide__img__item.mx-3: img(src='@/assets/curso/temas/63.svg', alt='Texto que describa la imagen' )
          p
            span.r-1.text-center Entrevistas personales
              br
            | Cuando el entrevistador realiza las preguntas directamente al entrevistado y apunta las respuestas.
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo.rounded-pill.color-primario.p-2.d-inline-block.mb-4
          .text-white: h4.mb-0.me-3.fst-italic El focus group
        p El <em>focus group</em>, o grupo de enfoque, es un método de investigación cualitativa que se desarrolla mediante un encuentro presencial o virtual con un grupo de personas, y permite conocer de forma rápida lo que piensan los participantes del tema objeto de investigación, por lo general, estudios de mercado. 
          span.r-1 El focus group se caracteriza por:
        #carouselExampleIndicators.carousel.slide(data-bs-ride='carousel')
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 6')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='6' aria-label='Slide 7')
          .carousel-inner.bg-slyder-bootstrap.px-5
            .carousel-item.active.p-5
              p.text-white Se obtienen datos directamente del consumidor que usa el producto o es foco de la campaña de marketing.
              
            .carousel-item.p-5
              p.text-white El moderador orienta las preguntas al grupo y dirige el encuentro, para que los participantes puedan expresarse con naturalidad.
            .carousel-item.p-5
              p.text-white Tienen una duración de 30 minutos a 2 horas, en las cuales se realizan entre 10 y 15 preguntas semiestructuradas.
            .carousel-item.p-5
              p.text-white Los grupos pueden estar conformados por entre 5 y 10 personas para un mejor control.
            .carousel-item.p-5
              p.text-white Normalmente, los miembros del grupo no se conocen entre sí. Los participantes se seleccionan porque hacen parte del público objetivo que usa el producto o que es potencialmente de interés.
            .carousel-item.p-5
              p.text-white Dentro de la misma investigación, se pueden conformar varios grupos focales, para que la información sea más amplia, al igual que los resultados obtenidos.
            .carousel-item.p-5
              p.text-white Son útiles para explorar al público objetivo antes de lanzar un producto o hacer un relanzamiento de marca.
          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next
      .col-lg-4.col-8: img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/64.jpg') 
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.3  Instrumentos de recolección de datos e información
    .tarjeta.bg-1-claro2.p-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-8
          p Los instrumentos de recolección de datos se pueden definir como aquellas plataformas o documentos que permiten organizar la información como resultado de la investigación. Entre los instrumentos más utilizados se encuentran el cuestionario y las escalas de actitudes. Cada uno de ellos se encuentra compuesto de preguntas con respecto a las variables objeto de medición. Por ejemplo, si se quiere segmentar un mercado, las preguntas se orientan a su clasificación en edad, sexo, estrato socioeconómico, entre otras. 
        .col-lg-4
          img(data-aos='zoom-in')(src='@/assets/curso/temas/65.jpg')
    .row.justify-content-center.mb-5
      .col-lg-4.col-8
        img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/66.jpg')
      .col-lg-8
        .titulo.rounded-pill.color-primario.p-2.d-inline-block.mb-4
          .text-white: h4.mb-0.me-3.fst-italic Los cuestionarios
        p Los cuestionarios contienen un conjunto de preguntas para obtener, procesar y analizar información de la muestra o segmento de la población seleccionada. Este instrumento se utiliza mucho en la investigación cuantitativa de mercados, pues los datos pueden ser exactos, para una correcta medición.
          br
          br
          |Para crear un cuestionario, es importante tener en cuenta:
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Identificar qué información necesitamos obtener.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Determinar el tipo de pregunta.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Determinar la forma para recopilar la información, que puede ser presencial (encuesta personal) o virtual (formulario en línea).
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Diseñar las preguntas con sus respectivas formas de respuesta y orden.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Realizar un test de prueba antes de realizar la encuesta.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Realizar la encuesta.
    p.mb-5 La pregunta juega un papel importante para el cuestionario, su correcta elaboración garantizará que la respuesta permita obtener la información correcta. Entre los diferentes tipos de preguntas, tenemos:
    .row.justify-content-center.mb-5
      .col-lg-11
        .titulo-sexto.color-acento-contenido
          h5 Figura 2
          span Tipos de preguntas
        img(src='@/assets/curso/temas/67.svg')
    .divisor.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-9
          .d-flex.align-items-start.justify-content-center.my-5
            img(src="@/assets/curso/temas/dots.svg" style="width: 84px").me-3.d-lg-block.d-none
            p Surveymonkey es una plataforma especializada para el desarrollo de encuestas en línea, muy útil no solo para el diseño del cuestionario, sino también para la organización y graficación de los resultados. El siguiente es un ejemplo de cuestionario, que puede servir para una investigación básica de un producto o servicio y que incluye diferentes tipos de preguntas.

        .col-lg-3
          a.anexo.bg-white(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto.bg-whiter
              p Anexo. plantilla tipo preguntas
    .row.mb-3.justify-content-center
      .col-lg-3.order-last.order-first.mb-3: img(src='@/assets/curso/temas/68.jpg')
      .col-lg-9.order-first.order-lg-last.mb-3
        .row
          .col-lg-4.order-2.order-lg-1.mb-3.mb-lg-0: img(src='@/assets/curso/temas/69.jpg')
          .col-lg-8.mb-3.order-1.order-lg-2
            .titulo.rounded-pill.color-primario.p-2.d-inline-block.mb-4
              .text-white: h4.mb-0.me-3.fst-italic Las escalas de actitudes
            p Las escalas de actitudes obtienen información a partir del análisis objetivo de las actitudes de la población. Implican procedimientos para darle un valor cuantitativo o medible a la aceptación o rechazo por parte de los implicados. Por ejemplo: si un encuestado responde que no está satisfecho con el servicio porque todos los días lo atienden mal, se le puede dar un valor de “2”, porque es “mala atención”; de esta forma, el resultado se convierte en cuantitativo y se puede medir.
            .d-flex.align-items-start.justify-content-center
              img(src="@/assets/curso/temas/dots.svg" style="width: 84px").me-3.d-lg-block.d-none
              p La escala de Likert es un instrumento que, a diferencia de los cuestionarios, debe ser estandarizado y con una mejor preparación para obtener los datos con mayor confiabilidad y validez.
          .col-lg-12.order-3
            p La escala de Likert es un instrumento que, a diferencia de los cuestionarios, debe ser estandarizado y con una mejor preparación para obtener los datos con mayor confiabilidad y validez.
              br
              br
              | La escala de Likert tiene dos propiedades referidas para su medición, estas son:
            .bg-3-claro.p-3.mb-3
              p.mb-0 
                span.r-1 Dirección de la respuesta: 
                | la cual puede ser negativa, positiva o neutral.
            .bg-3-claro.p-3
              p.mb-0 
                span.r-1 Intensidad de la respuesta: 
                |la cual puede ser alta si la persona está convencida y su actitud o comportamiento es justificado, o baja si la persona no piensa así.
    .row.justify-content-center.mb-5
      .col-lg-6
        p Para construir una encuesta con preguntas y respuestas basadas en la escala de Likert, se debe llevar a cabo el siguiente procedimiento:
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span a
            |  Definir la actitud o variable que se va a medir.
          li 
            .lista-ol--cuadro__vineta
              span b
            |  Determinar los indicadores de la variable.

          li 
            .lista-ol--cuadro__vineta
              span c
            |  Determinar la dirección positiva o negativa.

          li 
            .lista-ol--cuadro__vineta
              span d
            |  Asignar los valores a cada ítem.

          li 
            .lista-ol--cuadro__vineta
              span e
            |  Distribuir los ítems en la encuesta.

          li 
            .lista-ol--cuadro__vineta
              span f
            |  Construir la escala final con base en los ítems seleccionados.
      .col-lg-6
        img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/70.jpg')
    .divisor-2
      p.text-center Algunas de las alternativas que se presentan en una escala Likert son: 
      .titulo-sexto.color-acento-contenido
        h5 Tabla 2
        span Alternativas en una escala Likert
      .tabla-1.mb-5
        table
          thead
            tr
              th Línea de opciones
              th Alternativa 1
              th Alternativa 2
              th Alternativa 3
              th Alternativa 4
              th Alternativa 5
          tbody
            tr
              td.text-center 1 >
              td Muy de acuerdo
              td De acuerdo
              td Ni de acuerdo ni en desacuerdo.
              td En desacuerdo.
              td Muy en desacuerdo.
            tr
              td.text-center 2 > 
              td Totalmente de acuerdo.
              td De acuerdo.
              td Neutral.
              td En desacuerdo.
              td Totalmente en desacuerdo.
            tr
              td.text-center 3 >
              td Definitivamente sí.
              td Probablemente sí.
              td Indeciso.

              td Probablemente no.
              td Definitivamente no.
            tr
              td.text-center 4 >
              td Completamente verdadero.
              td Verdadero.
              td Ni falso ni verdadero.
              td Falso.
              td Completamente falso

            tr
              td.text-center 5 >
              td Mucho.
              td Bastante.
              td Neutral.
              td Un poco.
              td No, en lo absoluto.
      p.mb-5 Y a cada una de las alternativas se les asigna un valor o peso representado en un número, de manera que solo se pueda marcar una sola respuesta; de lo contrario, el dato no es válido. Por ejemplo:
      .titulo-sexto.color-acento-contenido
          h5 Tabla 3
          span Ejemplo
      .tabla-1.mb-5
        table
          thead
            tr
              th No
              th Pregunta
              th Muy de acuerdo
              th De acuerdo
              th Ni de acuerdo ni en desacuerdo
              th En desacuerdo
              th Muy en desacuerdo
          tbody
            tr
              td.text-center 1 
              td El cliente no comprendió las necesidades de la aplicación.
              td.text-center 5
              td.text-center 4
              td.text-center 3
              td.text-center 2
              td.text-center 1
            tr
              td.text-center 2
              td Al cliente le gusta el producto, pero no lo usa.
              td.text-center 5
              td.text-center  4
              td.text-center 3
              td.text-center 2
              td.text-center 1



































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

<style lang="sass">
.bg-tema2
  background-image: url(../assets/curso/temas/bg-tema2.png)
  background-repeat: no-repeat
  background-size: cover
  background-position: start
.bg-tg-2
  background-image: url(../assets/curso/temas/bg-tg-2.png)
  background-repeat: no-repeat
  background-size: 100% 100%
  background-position: center
  @media (max-width: $bp-max-lg)
    background-image: none
    background-color: $color-neutral-2
.listado-azul
  i
    color: $color-primario !important
.cajon-editado
  .bloque-texto-d:before
    opacity: .2 !important
.card-fondo
  &--0
    background-image: url(../assets/curso/temas/card-fondo-0.png)
    background-repeat: no-repeat
    background-size: 100% 100%
    background-position: center
  &--1
    background-image: url(../assets/curso/temas/card-fondo-1.png)
    background-repeat: no-repeat
    background-size: 100% 100%
    background-position: center
  &--2
    background-image: url(../assets/curso/temas/card-fondo-2.png)
    background-repeat: no-repeat
    background-size: 100% 100%
    background-position: center
  &--3
    background-image: url(../assets/curso/temas/card-fondo-3.png)
    background-repeat: no-repeat
    background-size: 100% 100%
    background-position: center
.lineaEditada
  .linea-tiempo-d__item__content__slot
    background-color: #c6d9f4
  .linea-tiempo-d__item--selected .linea-tiempo-d__item__content__title
    background-color: #c6d9f4
  .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
    background-color: #c6d9f4
.bg-verde
  background-color: #b0c8cb
.bg-slyder-bootstrap
  min-height: 237px
  background-image: url(../assets/curso/temas/bg-slyder-bootstrap.png)
  background-repeat: no-repeat
  background-size: 100% 100%
  background-position: center
.carousel-control-next-icon
  background-image: url(../assets/curso/temas/flecha-next.svg) !important
  opacity: 1 !important
.carousel-control-prev-icon
  background-image: url(../assets/curso/temas/flecha-prev.svg) !important
  opacity: 1 !important
.carousel-control-next, .carousel-control-prev
  background-color: #fee734 !important
  width: 10%
  opacity: 1
  padding: 0
.divisor-2
  margin: 0 -3rem
  padding: 3rem
  background-color: #d7e2f2
</style>
