<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bg-tema1
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Mercado
    .tarjeta.bg-tg-1.p-5.mb-5(data-aos='zoom-in')
      .row.p-lg-5
        .col-xl-6
          p(data-aos='fade') El mercado se define como el área geográfica, espacio físico o virtual donde se encuentran los productos, los consumidores, los clientes, los comercios, los canales, es decir, todos los actores relacionados con la comercialización, negociación o intercambio de bienes y servicios. El mercado, en el sentido amplio, congrega a todos los actores que intervienen en diferentes tipos de negociaciones.
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido 
      h2 1.1  Concepto de mercado
    .row.mb-3.justify-content-center
      .col-lg-3.mb-3: img(data-aos='zoom-in')(src='@/assets/curso/temas/0.jpg')
      .col-lg-9.mb-3
        .row
          .col-lg-4.order-last.order-lg-first: img(data-aos='zoom-in')(src='@/assets/curso/temas/1.jpg')
          .col-lg-8.mb-3
            p(data-aos='fade-right') De acuerdo con 
              span.r-1 Kotler y Armstrong (2013)
              |, el mercadeo es un “proceso mediante el cual las empresas crean valor para sus clientes y generan fuertes relaciones con ellos para, en reciprocidad, captar valor de los clientes”. Igualmente, 
              span.r-1 Stanton et al (2007) 
              | manifiestan que el “concepto de <em>marketing</em> hace hincapié en la orientación al cliente y en la coordinación de las actividades de <em>marketing</em> para alcanzar los objetivos de desempeño de la organización”.
            .cajon.color-primario.bg-1-claro.px-4.py-3(data-aos='fade-right')
              p.mb-0 Teniendo en cuenta lo anterior, puede decirse que el mercadeo se compone de procesos y acciones que tienen como objetivo conocer las necesidades de los consumidores, para diseñar estrategias que pueden influir en su comportamiento, gustos y necesidades. Las técnicas de <em>marketing</em> buscan generar valor agregado en los clientes para generar experiencias y recordación. 
          .col-lg-12
            p El conocimiento del consumidor da como resultado que la empresa adapte y “conecte” su producto con las necesidades de los clientes, motivar la compra y generar ventas y rentabilidad para la empresa. Esta adecuación da como resultado la estructuración de precios, promociones, encontrar canales de distribución adecuados y promover todos los beneficios y atributos del producto para llegar a nuevos consumidores.
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right') 
      h2 1.2  Tipos de mercado
    p.mb-5(data-aos='fade-right') Dependiendo del enfoque en el cual se ubiquen, los mercados, de acuerdo con Fernández (2009), tienen los siguientes tipos:
    .bg-cards.color-1.mb-5(data-aos='fade-up')
      .row.mb-3
        .col-lg-3.mb-3.mb-lg-0
          .tarjetas-circulo.h-100.p-5
            .tarjetas-circulo__number
              p.mb-0.number 01
            .d-flex.justify-content-center.align-items-center.mb-4
              img(src="@/assets/curso/temas/2.svg" style="width: 70px").me-2
              p.fw-bold Según aspectos geográficos
            ul.lista-ul--color.listado-azul
              li.mb-0
                i.fas.fa-dot-circle.fa-xs
                | Locales y/o regionales.
              li.mb-0
                i.fas.fa-dot-circle.fa-xs
                | Nacionales.
              li.mb-0
                i.fas.fa-dot-circle.fa-xs
                | Multinacionales o extranjeros.
              li.mb-0
                i.fas.fa-dot-circle.fa-xs
                | Globales.
        .col-lg-3.mb-3.mb-lg-0
          .tarjetas-circulo.h-100.p-5
            .tarjetas-circulo__number
              p.mb-0.number 02
            .d-flex.justify-content-center.align-items-center.mb-4
              img(src="@/assets/curso/temas/3.svg" style="width: 70px").me-2
              p.fw-bold Según el tipo de consumo
            ul.lista-ul--color.listado-azul
              li.mb-0
                i.fas.fa-dot-circle.fa-xs
                | De consumo masivo.
              li.mb-0
                i.fas.fa-dot-circle.fa-xs
                | De servicios.
              li.mb-0
                i.fas.fa-dot-circle.fa-xs
                | Industriales.
        .col-lg-3.mb-3.mb-lg-0
          .tarjetas-circulo.h-100.p-5
            .tarjetas-circulo__number
              p.mb-0.number 03
            .d-flex.justify-content-center.align-items-center.mb-4
              img(src="@/assets/curso/temas/4.svg" style="width: 70px").me-2
              p.fw-bold Según el tipo de producto
            ul.lista-ul--color.listado-azul
              li.mb-0
                i.fas.fa-dot-circle.fa-xs
                | De materias primas.
              li.mb-0
                i.fas.fa-dot-circle.fa-xs
                | De productos industriales.
              li.mb-0
                i.fas.fa-dot-circle.fa-xs
                | De productos digitales.
              li.mb-0
                i.fas.fa-dot-circle.fa-xs
                | De productos manufacturados.
              li.mb-0
                i.fas.fa-dot-circle.fa-xs
                | De servicios.
        .col-lg-3.mb-3.mb-lg-0
          .tarjetas-circulo.h-100.p-5
            .tarjetas-circulo__number
              p.mb-0.number 04
            .d-flex.justify-content-center.align-items-center.mb-4
              img(src="@/assets/curso/temas/5.svg" style="width: 70px").me-2
              p.fw-bold De acuerdo con el tipo de demanda
            ul.lista-ul--color.listado-azul
              li.mb-0
                i.fas.fa-dot-circle.fa-xs
                | Disponible.
              li.mb-0
                i.fas.fa-dot-circle.fa-xs
                | Real.
              li.mb-0
                i.fas.fa-dot-circle.fa-xs
                | Potencial.
              li.mb-0
                i.fas.fa-dot-circle.fa-xs
                | Meta.
      .row.mb-3
        .col-lg-9
          .cajon.color-acento-contenido.bg-3-claro.p-4(data-aos='fade-right')
            p.mb-0 Desde otra perspectiva, los mercados están conformados por personas, hogares, organizaciones que solicitan productos; de este modo, las estrategias de <em>marketing</em> deben dirigirse a satisfacer los requerimientos y aspiraciones de los usuarios a partir de sus necesidades. 
        .col-lg-3
          img.rounded-3(src="@/assets/curso/temas/6.jpg" )(data-aos='zoom-in')
    p.mb-5(data-aos='fade-right') De acuerdo con la relación entre el consumidor, el mercado, la empresa y el área geográfica donde se encuentran los productos, el mercado puede clasificarse en:
    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")(data-aos='zoom-in')
          .row.align-items-center
            .col-md-7.mb-4.mb-md-0
              h4 Mercado total
              p Está formado por el conjunto de necesidades (satisfechas o no) de una oferta de la empresa. 
                br
                |Es el universo de mercado. 
            .col-md-5
              figure
                img.rounded-3(data-aos='zoom-in-up')(src='@/assets/curso/temas/7.jpg', alt='Texto que describa la imagen')    
          .row.align-items-center
            .col-md-5
              figure.mb-3.mb-lg-0
                img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/8.jpg', alt='Texto que describa la imagen')    
            .col-md-7.mb-4.mb-md-0
              h4 Mercado potencial
              p Está formado por el conjunto de personas y empresas que necesitan un producto y están en condiciones de adquirirlo.
          .row.align-items-center
            .col-md-7.mb-4.mb-md-0
              h4 Mercado meta
              p Está formado por segmentos o nichos del mercado potencial y son el foco de las estrategias de <em>marketing</em>.
            .col-md-5
              figure
                img.rounded-3(data-aos='zoom-in-up')(src='@/assets/curso/temas/9.jpg', alt='Texto que describa la imagen')    
          .row.align-items-center
            .col-md-5
              figure.mb-3.mb-lg-0
                img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/10.jpg', alt='Texto que describa la imagen')    
            .col-md-7.mb-4.mb-md-0
              h4 Mercado real
              p Está formado por el mercado al que efectivamente se impactó con la estrategia de <em>marketing</em>.
    p.mb-5(data-aos='fade') Y desde la perspectiva del canal de distribución, en el cual convergen todos los espacios físicos donde se pueden adquirir los productos y se encuentran todas las marcas, los mercados se clasifican en:
    .row.justify-content-center.mb-4(data-aos='zoom-in')
      .col-lg-6.mb-3.mb-lg-0
        .tarjeta-up(:style="{'background-image': `url(${require('@/assets/curso/temas/11.jpg')})`}")
          .tarjeta-up__content.color-primario.p-5
            h4.mb-4 Mercado mayorista 
            p Este tipo de mercado está formado por distribuidores e intermediarios que compran insumos o materias primas en grandes cantidades a los productores, para revenderlos a los comerciantes y consumidores.
      .col-lg-6.mb-3.mb-lg-0
        .tarjeta-up(:style="{'background-image': `url(${require('@/assets/curso/temas/12.jpg')})`}")
          .tarjeta-up__content.color-secundario.p-5
            h4.mb-4 Mercado minorista
            p También llamado “mercado al menudeo”, está formado por pequeños comercios que compran el surtido a los intermediarios y lo venden directamente al consumidor. Es uno de los formatos más comunes en la región e incluso en los barrios.
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3  Estrategias para la segmentación de mercados
    .row.mb-3.justify-content-center
      .col-lg-9(data-aos='fade-right')
        .row.justify-content-center.g-3
          .col-lg-8.order-lg-1.order-2.mb-3
            p.mb-2 Luego de analizar el mercado, es importante adentrarse en su composición. Para ello, la organización debe identificar a qué clientes o grupo de clientes puede atender mejor y cuál grupo puede convertirse en una opción rentable para vender sus productos. 
              span.f-3 Este proceso, según Kotler y Armstrong (2013), se denomina segmentación de mercado, que es la selección de un mercado meta con usuarios que tienen características similares, pero con diferencias respecto a otros mercados.
            p La segmentación es 
              span.r-1 “el proceso de dividir un mercado en grupos identificables, más o menos similares y significativos, con el propósito de diseñar una adecuada mezcla de mercado (4P*) a la medida de las necesidades de uno o más segmentos específicos” 
              | (Lamb, 2006:180). A cada segmento o porción de mercado se le denomina “nicho de mercado”.
            .d-flex.align-items-center.justify-content-center
              img(src="@/assets/curso/temas/dots.svg" style="width: 84px").me-3.d-lg-block.d-none
              p.mb-0 Un mercado, luego de ser dividido o segmentado, se convierte en un foco de actividad para toda la acción de <em>marketing</em>, que de acuerdo con Porter, son acciones que una empresa aplica para posicionarse en ese grupo de consumidores.
          .col-lg-4.col-8.order-lg-2.order-1.mb-5.mb-lg-0: img(data-aos='zoom-in')(src='@/assets/curso/temas/13.jpg')
          .col-lg-12.order-3
            .cajon-b.color-primario.abajo-derecha.p-3.mb-5
              p.mb-0 Entonces, se puede complementar que la segmentación divide una porción grande de mercado en subgrupos de clientes con un potencial de compra, y de acuerdo con sus características, pueden requerir un producto diferente o una estrategia de comunicación diferente. De acuerdo con Kerin et al (2014), la segmentación divide a los compradores potenciales en grupos o nichos que tienen intereses comunes y responden de manera similar a una estrategia de <em>marketing</em>. Entre las variables o ítems que se pueden segmentar, se tienen los usos, deseos, capacidad de compra, lugar de residencia, actitudes, hábitos de compra, entre otros.
      .col-lg-3.col-10(data-aos='zoom-in-up'): img(src='@/assets/curso/temas/14.jpg')
    p.text-center.fw-bold.mb-5 Cuando se comienza con un proceso de segmentación, se pueden desarrollar los siguientes pasos:
    .row.justify-content-center.mb-5
      .col-lg-10: img(data-aos='zoom-in')(src='@/assets/curso/temas/15.svg')
    .d-flex.align-items-center.justify-content-center.mb-5
      img(src="@/assets/curso/temas/dots.svg" style="width: 84px").me-3.d-lg-block.d-none
      p.mb-0 Al momento de segmentar o dividir el mercado, es posible utilizar varios criterios basados en diversos parámetros de acuerdo con la capacidad de la empresa y las características del producto, lo que hace posible seleccionar diferentes variables que permitan identificar si un segmento es potencialmente viable para convertirse en un foco de la organización, si es posible venderles el producto, o es un segmento de la competencia,¿Qué variables identifican sus gustos?, ¿Qué variables nos brindan información de la fidelidad del cliente?, etc.
    .bg-cards.color-2.mb-5(data-aos='zoom-in')
      .row.justify-content-center
        .col-lg-4.mb-lg-0
          .d-lg-flex.justify-content-center.align-items-center.mb-4.h-100
            p.m-auto Algunos de los criterios más comunes para dividir o segmentar el mercado dependen del tipo de mercado al que se quiere llegar. Resumiendo, los tipos de mercado vistos anteriormente se pueden agrupar en dos grandes sectores: los mercados de consumo final y los mercados industriales.
        .col-lg-4.col-8.mb-3.mb-lg-0
          .tarjeta.tarjeta-slide-arriba.color-secundario.p-5.h-100
            .tarjeta-slide-arriba__img
              img(src='@/assets/curso/temas/17.jpg')
            img(src='@/assets/curso/temas/16.svg' style='width: 99px').m-auto.mb-3
            .text-white.text-center
              h5 Mercado de consumo final
              p Segmenta a consumidores finales. <br>Compra detallada de un producto.
        .col-lg-4.col-8.mb-3.mb-lg-0
          .tarjeta.tarjeta-slide-arriba.color-secundario.p-5.h-100
            .tarjeta-slide-arriba__img
              img(src='@/assets/curso/temas/18.jpg')
            img(src='@/assets/curso/temas/19.svg' style='width: 99px').m-auto.mb-3
            .text-white.text-center
              h5 Mercado industrial
              p Segmenta a empresas, organizaciones e industrias. <br> Se compran materias primas, insumos, maquinarias, etc.
    .row.justify-content-center.align-items-end.mb-5
      .col-lg-6(data-aos='fade-right')
        .titulo.rounded-pill.color-primario.p-2.d-inline-block.mb-4
          .text-white: h4.mb-0.me-3 Criterios para segmentar mercados de consumidores
        p.mb-3 Cuando se habla de segmentar a los consumidores, es necesario identificar las variables que caractericen a los individuos dentro del mercado. El responsable de <em>marketing</em> debe subdividir el mercado con el fin de agrupar el público.
          br
          br
          | Las variables más comunes para segmentar los mercados son:
        ul.lista-ul--color
          li.mb-0
            i.fas.fa-dot-circle.fa-xs
            | Variables geográficas.
          li.mb-0
            i.fas.fa-dot-circle.fa-xs
            | Variables demográficas.

          li.mb-0
            i.fas.fa-dot-circle.fa-xs
            | Variables psicográficas.
      .col-lg-6: img.rounded-3(data-aos='zoom-in-up')(src='@/assets/curso/temas/20.jpg')
    p.mb-5 Otras tendencias enmarcan variables o características relacionadas con la conducta, como las formas de pensar, gustos e intereses de los usuarios o clientes potenciales.
    p.text-center
      span.r-1 Variables de segmentación de mercado
    .row.justify-content-center.mb-5
      .col-lg-3
        .cards-bg.p-4(data-aos='fade')(:style="{'background-image': `url(${require('@/assets/curso/temas/21.jpg')})`}")
          .tarjeta.bg-white.p-4.h-100
            h5.text-center
              span.r-1 Geográfica
            .text-center
              p Nacionalidad
                br
                |Región
                br
                |Ciudad
                br
                |Densidad de la población
                br
                |Clima
      .col-lg-3
        .cards-bg.p-4(data-aos='fade')(:style="{'background-image': `url(${require('@/assets/curso/temas/22.jpg')})`}")
          .tarjeta.bg-white.p-4.h-100
            h5.text-center
              span.r-1 Demográfica
            .text-center
              p Edad
                br
                |Sexo
                br
                |Nivel de ingresos
                br
                |Tamaño de la familia
                br
                |Nivel de estudios
      .col-lg-3
        .cards-bg.p-4(data-aos='fade')(:style="{'background-image': `url(${require('@/assets/curso/temas/23.jpg')})`}").h-100
          .tarjeta.bg-white.p-4.h-100
            h5.text-center
              span.r-1 Psicográfica
            .text-center
              p Modo de vida
                br
                |Personalidad
                br
                |Actitudes
      .col-lg-3
        .cards-bg.p-4(data-aos='fade')(:style="{'background-image': `url(${require('@/assets/curso/temas/24.jpg')})`}")
          .tarjeta.bg-white.p-4.h-100
            h5.text-center
              span.r-1 Conductual
            .text-center
              p Expectativa de beneficios
                br
                |Frecuencia de compra
                br
                |Frecuencia de uso
                br
                |Grado de lealtad
                br
                |Lugar de compra
    .d-flex.align-items-start.justify-content-center.mb-5
      img(src="@/assets/curso/temas/dots-1.svg" style="width: 84px").me-3.d-lg-block.d-none
      div
        .titulo.rounded-pill.color-primario.p-2.d-inline-block.mb-4
          .text-white: h4.mb-0.me-3 Variables de segmentación
        p.mb-5 Las variables de segmentación están compuestas por diferentes categorías que permiten una correcta clasificación de los públicos, sean consumidores o empresas. A continuación, se presentan las diferentes variables y las respectivas categorías.
    p.text-center.mb-5
      span.r-1 Variables de segmentación geográfica
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        ImagenInfografica.color-acento-botones.mb-5(data-aos='zoom-in')
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/25.svg', alt='Texto que describa la imagen')
          .tarjeta.bg-verde.p-3.text-center(x="11.65%" y="35%" numero="+")
            .h5.mb-2 Nacionalidad
            p Lugar de nacimiento o lugar de destino.

          .tarjeta.bg-verde.p-3.text-center(x="37.3%" y="35%" numero="+")
            .h5.mb-2 Región 
            p Localidad, barrio, zona.
          .tarjeta.bg-verde.p-3.text-center(x="62.8%" y="35%" numero="+")
            .h5.mb-2 Tamaño
            p Área del país, área de la región, área del barrio, etc. Este valor puede estar representado en km2.
          .tarjeta.bg-verde.p-3.text-center(x="88.4%" y="35%" numero="+")
            .h5.mb-2 Densidad de la población
            p Cantidad de habitantes por m2 <5000 hab. x km2 5 mil a 20 mil hab. x km2 20 mil a 50 mil hab. x km2
          .tarjeta.bg-verde.p-3.text-center(x="24.5%" y="64%" numero="+")
            .h5.mb-2 Clima
            p Cálido, frío, templado, páramo, etc.
          .tarjeta.bg-verde.p-3.text-center(x="50.1%" y="64%" numero="+")
            .h5.mb-2 Idioma
            p Español, inglés, italiano, japonés, ruso.
          .tarjeta.bg-verde.p-3.text-center(x="75.7%" y="64%" numero="+")
            .h5.mb-2 Legislación
            p Leyes o normas de acuerdo con la región.
    .tarjeta.bg-white.p-5.mb-5(data-aos='zoom-in')
      p.text-center
        span.r-1 Variables de segmentación psicográfica
      .row.justify-content-center
        .col-lg-4.mb-3.mb-lg-0
          .tarjeta.tarjeta-slide-derecha.color-secundario.p-5.h-100
            .tarjeta-slide-derecha__img
              img(src='@/assets/curso/temas/26.jpg')
            .text-white.text-center
              h5 Personalidad
              p Autoritario.
                br
                |Extrovertido.
                br
                |Introvertido.
                br
                |Dependiente.
                br
                |Independiente.
                br
                |Conservador.
                br
                |Liberal.
                br
                |Radical.
                br
                |Seguidor.
                br
                |Imitador.
                br
                |Ambicioso.
                br
                |Realizador.
        .col-lg-4.mb-3.mb-lg-0
          .tarjeta.tarjeta-slide-izquierda.color-secundario.p-5.h-100
            .tarjeta-slide-izquierda__img
              img(src='@/assets/curso/temas/27.jpg')
            .text-white.text-center
              h5 Estilos de vida 
              p Sobrevivientes.
                br
                |Emuladores.
                br
                |Experimentadores.
                br
                |Apoyadores.
                br
                |Orientados al logro.
                br
                |Interesados en la sociedad.
                br
                |Personas con sentido.
                br
                |Egocéntricos.
                br
                |Integrados de pertenencia.
      .tarjeta.bg-white.p-5
        p.text-center.mb-5
          span.r-1 Variables de segmentación demográfica
        .row.justify-content-center.mb-5
          .col-lg-9.col-12
            .titulo-sexto.color-acento-contenido
              h5 Tabla 1
              span Variables de segmentación demográficasubtitulo
            //todo PENDIENTE COMPLETAR TABLA 
            .tabla-a.tabla-1.mb-5
              table
                thead
                  tr
                    th.h4 Variable
                    th.h4 Categorías.
                tbody
                  tr
                    td Tipo de población
                    td Urbana, rural, mixta.
                  tr
                    td Edad
                    td Rangos de edades entre la niñez, juventud, adultos, adultos mayores.
                  tr
                    td Sexo
                    td Hombre o mujer.
                  tr
                    td Género
                    td Masculino, femenino, LGTBIQ+, otro.
                  tr
                    td Orientación sexual
                    td Heterosexual, homosexual, bisexual, asexual o pansexual.
                  tr
                    td Clase social
                    td Baja inferior, baja superior, media baja, media intermedia, media alta, alta inferior, alta intermedia, alta superior.
                  tr
                    td Estado civil
                    td Soltero(a), casado(a), unión libre, divorciado(a), viudo(a).
                  tr
                    td Tamaño de la familia
                    td Rangos de número de integrantes de la familia: 2 a 3, 4 a 6, 7 a 10, etc.
                  tr
                    td Ciclo de vida familiar
                    td Etapa de soltería: personas jóvenes sin vínculos matrimoniales.
                      br
                      br
                      |Parejas casadas jóvenes sin hijos.
                      br
                      br
                      |Parejas casadas jóvenes con hijos (nido lleno).
                      br
                      br
                      |Parejas casadas con hijos independientes (nido vacío).
                      br
                      br
                      |Padres solteros: personas jóvenes o de edad madura con hijos dependientes.
                      br
                      br
                      |Viudos solitarios.

                  tr
                    td Ingresos
                    td Cantidad de ingresos anuales.
                  tr
                    td Patrón de gasto
                    td La forma en que cada familia gasta dinero.
                  tr
                    td Nivel educativo
                    td Preescolar, primaria, secundaria sin finalizar (básica), secundaria finalizada (bachiller), técnico, tecnólogo, universitario, postgrado.
                  tr
                    td Ocupación
                    td Definir a qué se dedica el usuario. ¿En qué labora? ¿En qué se desempeña?
                  tr
                    td Religión
                    td Católico, cristiano, protestante, judío, budista, etc.
                  tr
                    td Grupos étnicos
                    td Mestizos.
                      br
                      |Caucásicos.
                      br
                      |Afrocolombianos (palenqueros, raizales).
                      br
                      |Indígenas.
                      br
                      |Otros grupos.

                  tr
                    td Nacionalidad
                    td País de origen o de mercado destino.
        p.text-center.mb-5
          span.r-1 Variables de segmentación conductual
        SlyderF.align-items-start.mb-5(columnas="col-lg-6 col-xl-4")(data-aos='zoom-in')
          .tarjeta.bg-3-claro.p-4.hbg--1.h-100
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/28.svg' alt='AvatarTop')
            h5.text-center Frecuencia de uso
            p.text-center No lo usa, lo usa poco, lo usa frecuentemente, lo usa mucho, lo usa demasiado.
          .tarjeta.bg-3-claro.p-4.hbg--1.h-100
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/29.svg' alt='AvatarTop')
            h5.text-center Ocasión de compra
            p.text-center Ordinario (frecuente) / Casual.
          .tarjeta.bg-3-claro.p-4.hbg--1.h-100
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/30.svg' alt='AvatarTop')
            h5.text-center Lealtad de marca
            p.text-center Que solo adquiere una marca específica.
          .tarjeta.bg-3-claro.p-4.hbg--1.h-100
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/31.svg' alt='AvatarTop')
            h5.text-center Lealtad al canal
            p.text-center Que solo compra en un almacén específico.
          .tarjeta.bg-3-claro.p-4.hbg--1.h-100
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/32.svg' alt='AvatarTop')
            h5.text-center Grado de lealtad
            p.text-center Alto, medio, bajo.
          .tarjeta.bg-3-claro.p-4.hbg--1.h-100
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/33.svg' alt='AvatarTop')
            h5.text-center Sensible al precio
            p.text-center Altamente sensible – Indiferente – No es sensible.
          .tarjeta.bg-3-claro.p-4.hbg--1.h-100
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/34.svg' alt='AvatarTop')
            h5.text-center Clase de comprador
            p.text-center Tradicional o conservador, impulsivo, escéptico, emocional, indeciso, que solo busca ofertas, etc.
    p.mb-5 La siguiente imagen nos presenta las categorías para la segmentación de mercados.
    .row.justify-content-center.mb-5
      .col-lg-11(data-aos='zoom-in')
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span Categorías para la segmentación de mercados
        img(src='@/assets/curso/temas/35.svg')
    .d-flex.align-items-start.justify-content-center.my-5
      img(src="@/assets/curso/temas/dots-1.svg" style="width: 84px").me-3.d-lg-block.d-none
      div
        .titulo.rounded-pill.color-primario.p-2.d-inline-block.mb-4
          .text-white: h4.mb-0.me-3 Características de los segmentos
        p.mb-5 Para que un segmento de mercado sea rentable, es decir, que pueda soportar la compra, recompra y recomendación de los productos, se debe cumplir con los siguientes requisitos:
    .row.justify-content-center.mb-5
      .col-lg-10
        img(data-aos='zoom-in')(src='@/assets/curso/temas/36.svg')
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos='fade-right')
        p Con el cumplimiento de los criterios anteriores, es posible garantizar que el segmento funcione para una correcta estrategia de <em>marketing</em>. 
        .tarjeta.bg-3-claro.p-4.d-flex.align-items-center.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/37.svg' style='width: 115px').me-3
          p.mb-0 Para ampliar el conocimiento acerca de los conceptos y tendencias de mercadeo, observe el video 
            span.r-1 Tendencias de negocios - Mercadeo y ventas, 
            |el cual se encuentra en el material complementario.
      .col-lg-4
        img.rounded-3(data-aos='zoom-in-up')(src='@/assets/curso/temas/38.jpg')













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

<style lang="sass">
.bg-tg-1
  background-image: url(../assets/curso/temas/bg-tg-1.png)
  background-repeat: no-repeat
  background-size: 100% 100%
  background-position: start
  @media (max-width: $bp-max-lg)
    background-image: none
    background-color: $color-neutral-2
.bg-1-claro
  background-color: #d7e4f6 !important
.bg-3-claro
  background-color: #c9f0ee !important
.bg-cards
  margin: 0 -3rem
  padding: 3rem
  &.color-1
    background-color: #b0c8cb
  &.color-2
    background-color: #ddedfb
.tarjetas-circulo
  position: relative
  background-color:  #0c487b
  border-radius: 10px
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1)
  p, h1, h2, h3, h4, h5, h6, li
    color: $white
    transition: color 0.4s ease-in-out
  &::before
    content: ''
    position: absolute
    top: 25%
    left: 0
    transform: translate(-50%, -50%)
    width: 44px
    height: 44px
    background-color: #b0c8cb
    border-radius: 50%
  .tarjetas-circulo__number
    position: absolute
    bottom: 0
    right: 5%
    font-weight: bold
    p.number
      font-weight: bold
      color: rgba(220, 234, 251, 0.3) !important
      font-size: 61px

  &:hover
    transition: all .4s ease-in-out
    background-color: #d7e4f6
    p, h1, h2, h3, h4, h5, h6, li
      color: $color-sistema-texto
.listado-azul
  i
    color: $color-primario !important
.bg-tema1
  background-image: url(../assets/curso/temas/bg-tema1.jpg)
  background-repeat: no-repeat
  background-size: 100%
  background-position: start
.bg-verde
  background-color: #b0c8cb
.slyder-f
  .horizontal-scroll
    align-items: inherit !important
.slyder-f__btn
  margin: auto !important
</style>
