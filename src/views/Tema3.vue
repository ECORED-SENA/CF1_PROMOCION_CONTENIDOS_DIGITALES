<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bg-tema3
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Los clientes
    .row.justify-content-center.mb-5
      .col-lg-4
        p(data-aos='fade') Un cliente es la persona o empresa que adquiere un producto a través de un intercambio económico o monetario. A la persona que adquiere el producto se le denomina “comprador” y a quien hace un uso del producto se le denomina “consumidor”; en algunos casos, el comprador y el consumidor son la misma persona o empresa.
      .col-lg-8(data-aos='zoom-in')
        .bg-3-claro.d-lg-flex.align-items-center
          img(src='@/assets/curso/temas/71.jpg').me-lg-3.mb-lg-0.mb-3
          .d-flex.align-items-start.justify-content-center.flex-column.mx-3
            img(src="@/assets/curso/temas/dots-2.svg" style="width: 84px").me-3.d-lg-block.d-none.mb-3
            p En otras ocasiones, el comprador y el consumidor son diferentes, por ejemplo: los padres de familia adquieren los alimentos del bebé (compradores), pero quien los usa o consume es el bebé (consumidor). 
    .row.justify-content-center.mb-5
      .col-lg-5.col-8(data-aos='zoom-in')
        img(src='@/assets/curso/temas/72.jpg').me-3.mb-3.mb-lg-0
      .col-lg-7(data-aos='fade-left')
        p En otras relaciones comerciales más complejas, es posible encontrar que hay una tercera persona que incide en la compra; por ejemplo, en la adquisición de un vehículo, se encuentran:
        ul.lista-ul--color
          li.mb-2
            i.fas.fa-dot-circle.fa-xs
            | El padre de familia compra el vehículo > Comprador.
          li.mb-2
            i.fas.fa-dot-circle.fa-xs
            |  La madre de familia usa el vehículo para transportar a sus hijos > Consumidora (usuaria).

          li.mb-2
            i.fas.fa-dot-circle.fa-xs
            |  Para comprar el vehículo, la madre y los hijos eligieron el vehículo que más les gusta > Motivadores.
    p.text-center(data-aos='zoom-in') A continuación, se encuentran algunas de las principales diferencias entre usuario y cliente:
    .row.justify-content-center.align-items-center.mb-5(data-aos='zoom-in')
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4
          span Comparación usuario vs. cliente
        .tabla-1.mb-5
          table.text-center
            thead
              tr
                th USUARIO
                th CLIENTE
            tbody
              tr
                td Utiliza el producto.
                td Es quien paga el producto.
              tr
                td Hace un uso transitorio del producto.
                td Hace uso definitivo del producto.
              tr
                td Retorna el producto algunas veces.
                td Tiene una pertenencia del producto.
              tr
                td No es dueño del producto.
                td Tiene dominio del producto.
              tr
                td Obligación pasajera.
                td Construye una relación a largo plazo con la empresa productora.
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.1  Tipos de clientes
      .d-flex.align-items-start.justify-content-center.mb-5
        img(src="@/assets/curso/temas/dots-3.svg" style="width: 84px").me-3.d-lg-block.d-none
        p.mb-0 El cliente es el principal objetivo hacia donde la empresa realiza su mayor esfuerzo; todos los planes y las estrategias de mercadeo deben enfocarse en función de ese cliente. Por tanto, las empresas tienen diferentes compradores o clientes, de acuerdo con el tipo de mercado o segmento en el que compiten, o en el que comercializan sus productos.
      .row.justify-content-center.mb-3
        .col-lg-4.col-8
          img(data-aos='zoom-in')(src='@/assets/curso/temas/73.jpg').mb-3.mb-lg-0
        .col-lg-8(data-aos='fade-left')
          p Entre los principales tipos de clientes, se encuentran los clientes actuales, aquellos (empresas o personas) que compran con frecuencia los productos de la empresa, es el tipo de clientes que genera un aumento significativo en las ventas y son la principal fuente de ingresos. Allí se encuentran:
          TabsA.color-acento-contenido
            .tarjeta.bg-1-claro.p-4(titulo="Clientes activos")
              h5 Clientes activos
              p Realizan compras actualmente.
              img.rounded-3(src="@/assets/curso/temas/74.jpg" )
            .tarjeta.bg-1-claro.p-4(titulo="Clientes inactivos")
              h5 Clientes inactivos
              p Dejaron de comprar en un mediano tiempo.
              img.rounded-3(src="@/assets/curso/temas/75.jpg" )
            .tarjeta.bg-1-claro.p-4(titulo="Clientes frecuentes")
              h5 Clientes frecuentes
              p Hacen compras repetidas.
              img.rounded-3(src="@/assets/curso/temas/76.jpg" )
            .tarjeta.bg-1-claro.p-4(titulo="Clientes habituales")
              h5 Clientes habituales
              p Hacen compras con cierta frecuencia y satisfacción.
              img.rounded-3(src="@/assets/curso/temas/77.jpg" )
            .tarjeta.bg-1-claro.p-4(titulo="Clientes ocasionales")
              h5 Clientes ocasionales
              p Realizan compras con poca frecuencia o única vez.
              img.rounded-3(src="@/assets/curso/temas/78.jpg" )
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos='fade-right')
        p Y luego, se tienen los clientes potenciales, que son aquellos (empresas o personas) que podrían convertirse en clientes frecuentes de la empresa. Hacen parte de los segmentos objetivo o también denominados mercados meta, donde:
        ul.lista-ul--color
          li.mb-2
            i.fas.fa-dot-circle.fa-xs
            | Su ciclo de compras es frecuente, habitual u ocasional.

          li.mb-2
            i.fas.fa-dot-circle.fa-xs
            | Su volumen de compras es alto, promedio (intermedio) o bajo.

          li.mb-2
            i.fas.fa-dot-circle.fa-xs
            | Su grado de influencia es alto, regular o familiar.
      .col-lg-5.col-8
        img(data-aos='zoom-in')(src='@/assets/curso/temas/110.jpg')
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2  Técnicas para elaborar perfiles de clientes
    .row.mb-3.justify-content-center
      .col-lg-9.mb-3(data-aos='fade-right')
        .row
          .col-lg-8.mb-3
            p Para una organización, es importante conocer sus clientes a profundidad y detalle; para ello, todas las áreas deben estar comprometidas alrededor de la experiencia del cliente para dejarlo satisfecho con el cumplimiento de sus necesidades. Las áreas de marketing, ventas y servicio dependen en gran medida del conocimiento del cliente, para así generar acciones efectivas. 
            .d-flex.align-items-start.justify-content-center
              img(src="@/assets/curso/temas/dots-3.svg" style="width: 84px").me-3.d-lg-block.d-none
              p Cuando se construyen adecuadamente perfiles de los clientes, la venta será más efectiva, más aún si se cuenta con un sistema que permita su creación, análisis y construcción.
          .col-lg-4.mb-3.mb-lg-0: img(data-aos='zoom-in')(src='@/assets/curso/temas/79.jpg')
          .col-lg-12
            .bg-3-claro.p-3.mb-3
              p.mb-0 El perfil de cliente se puede definir como el conjunto de variables demográficas, geográficas y psicográficas (segmentación), así como hábitos de compra, experiencia crediticia e historial de compras. 
            p Las actividades como la atención, el servicio posventa, el seguimiento y la fidelización funcionan como soporte para fortalecer el relacionamiento con los clientes. Un perfil de consumidor (o de cliente) es una descripción detallada de un público objetivo, es decir, más allá de la segmentación, es tener información real de las interacciones que el consumidor tiene con la empresa, con la finalidad de mejorar las interacciones y hacer un verdadero acompañamiento. 
      .col-lg-3.mb-3: img(data-aos='zoom-in')(src='@/assets/curso/temas/80.jpg')
    .tarjeta.bg-white.p-5(data-aos='zoom-in')
      p Hoy día, existen diferentes conceptos relacionados con el perfil de cliente o consumidor, uno de ellos es el concepto de buyer persona, el cual se presenta a continuación:
      .row.justify-content-center.mb-5(data-aos='zoom-in')
        .col-lg-5.col-8.mb-3.mb-lg-0
          .tarjeta.tarjeta-slide-arriba.color-secundario.p-5
              img(src='@/assets/curso/temas/83.png')
            img(src='@/assets/curso/temas/81.svg' style='width: 99px').m-auto.mb-3
            .text-white.text-center
              h5 Perfil de cliente
              p Puede ser una empresa o persona.
                br
                |Los clientes son de una empresa o consumen varios productos comunes.
                br
                |Tienen en común los productos.
        .col-lg-5.col-8.mb-3.mb-lg-0
          .tarjeta.tarjeta-slide-arriba.color-secundario.p-5
            .tarjeta-slide-arriba__img
              img(src='@/assets/curso/temas/84.png')
            img(src='@/assets/curso/temas/82.svg' style='width: 99px').m-auto.mb-3
            .text-white.text-center
              h5 Buyer persona
              p Solo se enfoca en personas.
                br
                |Un buyer persona puede consumir productos diferentes.
                br
                |Tienen en común las personas.
      .row.justify-content-center.mb-5
        .col-lg-4.col-8
          img.rounded-3(data-aos='zoom-in')(src='@/assets/curso/temas/85.jpg').mb-3.mb-lg-0
        .col-lg-8
          p Un perfil de cliente puede servir para captar información real y válida sobre cómo se están comportando los productos y servicios de la empresa. En un mercado digital, como el actual, el perfil de cliente puede ayudar a:
          ul.lista-ul--color
            li.mb-2
              i.fas.fa-dot-circle.fa-xs
              | Enfocar mucho mejor las estrategias.
            li.mb-2
              i.fas.fa-dot-circle.fa-xs
              | Identificar mejoras que pueden aplicarse al producto.
            li.mb-2
              i.fas.fa-dot-circle.fa-xs
              | Generar experiencias diferenciadoras para el usuario.
            li.mb-2
              i.fas.fa-dot-circle.fa-xs
              | Crear estrategias de marketing efectivas.
            li.mb-2
              i.fas.fa-dot-circle.fa-xs
              | Consolidar equipos de ventas.
            li.mb-2
              i.fas.fa-dot-circle.fa-xs
              | Tener una comunicación clara y coherente.
            li.mb-2
              i.fas.fa-dot-circle.fa-xs
              | Ofrecer un mejor servicio y atención al cliente.
      p.text-center.mb-5 Para crear un perfil de cliente, se pueden desarrollar los siguientes pasos:
      .row.justify-content-center.mb-3
        .col-lg-3
          img(src='@/assets/curso/temas/86.svg').mb-3
          p 
            span.r-1.mb-3 1. El problema
            br
            br
            | Enfócarse en el problema del negocio.
        .col-lg-3
          img(src='@/assets/curso/temas/87.svg').mb-3
          p 
            span.r-1.mb-3 2. Mapa de compra
            br 
            br 
            | Identificar el mapa de recorrido del comprador.
        .col-lg-3
          img(src='@/assets/curso/temas/88.svg').mb-3
          p 
            span.r-1.mb-3 3. Segmento
            br 
            br 
            | Explorar los datos demográficos.
        .col-lg-3
          img(src='@/assets/curso/temas/89.svg').mb-3
          p 
            span.r-1.mb-3 4. Recoge la retroalimentación de clientes.
            br 
            br 
            | Realiza seguimiento. 
      .row.justify-content-center.mb-5
        .col-lg-3
          img(src='@/assets/curso/temas/90.svg').mb-3
          p 
            span.r-1.mb-3 5. Detalles
            br 
            br 
            | Obtener detalles actualizados de los clientes.
        .col-lg-3
          img(src='@/assets/curso/temas/91.svg').mb-3
          p 
            span.r-1.mb-3 6. Investigación
            br 
            br 
            | Comprender la industria.
        .col-lg-3
          img(src='@/assets/curso/temas/92.svg').mb-3
          p 
            span.r-1.mb-3 7. Perfilar
            br 
            br 
            | Crear el perfil.
        .col-lg-3
          img(src='@/assets/curso/temas/93.svg').mb-3
          p 
            span.r-1.mb-3 8. Consolidar
            br 
            br 
            | Reafirmar el perfil.
    p.mb-5 Existen diversas formas de crear perfiles de clientes y representarlos en tablas y gráficos para su análisis. A continuación, se encuentran diferentes cuadros de perfilación de clientes y con diferentes criterios. 
    .titulo.rounded-pill.color-primario.p-2.d-inline-block.mb-4
      .text-white: h4.mb-0.me-3 Perfil de cliente por sistema de calificación
    p.mb-5 Aplica un puntaje entre tanto se cumplan o no determinadas características.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 5
      span Perfil de cliente por sistema de calificación
    .tabla-1.mb-5(data-aos='zoom-in')
          table.text-center
            thead
              tr
                th 
                th No encaja
                th 
                th Se puede ajustar
                th 
                th Encaja perfectamente
                th 
                th Calificación
            tbody
              tr
                td Necesidad
                td El prospecto no reconoce el problema que tú solucionas.
                td 0
                td El prospecto reconoce el problema, pero no considera su solución como una prioridad.
                td 1
                td El problema y los prospectos buscan una solución.
                td 2
                td
              tr
                td Tiempo
                td El éxito no podrá alcanzarse para la fecha límite de tu prospecto o de tu empresa.
                td 0
                td Hay tiempo para implementar la solución, pero poco o ningún margen.
                td 1
                td Hay tiempo para implementar la solución y existe margen para lo inesperado.
                td 2
                td
              tr
                td Éxito
                td El cliente o consumidor no puede costear la solución y no tiene margen de error.
                td 0
                td El prospecto no tiene éxito relevante, pero sabe que está contratando el aprendizaje.
                td 1
                td El prospecto tiene experiencia relevante necesaria para evaluar el desempeño.
                td 2
                td
              tr
                td Presupuesto
                td El cliente o consumidor no puede costear la solución y no tiene margen de error.
                td 0
                td El cliente puede costear la solución rentable, pero tiene poco o ningún margen de error.
                td 1
                td El cliente puede costear la solución rentable y tiene margen para lo inesperado.
                td 2
                td
              tr
                td Ganadores
                td No se pueden identificar ganancias personales para los que toman decisiones.
                td 0
                td Las ganancias personales están claras, pero los que toman las decisiones o influenciadores pierden si usted gana.
                td 1
                td Se han identificado ganancias personales para los que toman decisiones e influenciadores.
                td 2
                td
              tr
                td Totales
                td 
                td 
                td
                td 
                td
                td 
                td
          figcaption.mt-3.fw-normal Nota. Fuente HubSpot.
    p.mb-5 Los clientes también pueden perfilarse de acuerdo con las variables de segmentación:
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 6
      span Perfil de cliente por segmentación
    .tabla-1.mb-5(data-aos='zoom-in')
          table.text-center
            thead
              tr
                th
                th Viajeros matutinos
                th Celebradores de temporada
                th Bodas de una ocasión
            tbody
              tr
                td Descripción
                td Vienen seguido, gastan poco. 
                  br 
                  | Nuestro cliente más habitual se detiene para un café rápido y un pastelillo por la mañana

                td Jefas del hogar que se encargan de las celebraciones. Un segmento más pequeño, pero nuestra principal fuente de ingresos.
                td Aunque son una pequeñísima porción de nuestros clientes, los que están por casarse abarcan hasta el 15% de nuestros ingresos.
              tr
                td Rango de edad 
                td 25 – 45
                td 35 – 55
                td 26 - 38
              tr
                td ¿Qué es lo que más les importa?
                td Servicio rápido y comida / Café, frescos
                td Placeres únicos de temporada que hacen las celebraciones más especiales.
                td Sabores únicos, servicio atento, opción de entrega.
              tr
                td ¿Cómo venderles?
                td Implementar promociones para atraerlos. Premios de lealtad y cupones por correo electrónico.
                td <em>Marketing</em> de correo electrónico con promociones de temporada / días festivos.
                td Implementar anuncios dirigidos de Facebook para atraerlos. Continuar la promoción con publicaciones de bodas, <em>newsletter</em>, Instagram.
              tr
                td Canales preferidos
                td Correo electrónico, app de lealtad. 
                td Correo electrónico, Instagram, Facebook, correo directo.
                td Correo electrónico, Facebook, Pinterest.
          figcaption.mt-3.fw-normal Nota. Fuente HubSpot.
    .row.justify-content-center.mb-5
      .col-lg-4.col-8
        img.rounded-3(data-aos='zoom-in-up')(src='@/assets/curso/temas/94.svg').mb-3.mb-lg-0
      .col-lg-8(data-aos='fade-left')
        p Con esta información disponible, el equipo de marketing de la compañía puede trabajar en el diseño e implementación de campañas efectivas para cada perfil de consumidores.
        .tarjeta.bg-3-claro.p-4.d-flex.align-items-center
          img(src='@/assets/curso/temas/37.svg' style='width: 115px').me-3
          p.mb-0(data-aos='fade') Para ampliar el conocimiento del consumidor, es importante comprender que hoy día existen nuevos hábitos de consumo y que las condiciones sociales y económicas llevan a renovar dichos hábitos. Visualice el video 
            span.r-1 A la conquista del nuevo consumidor, 
            | que se encuentra en el material complementario, con el fin de identificar retos, oportunidades y características de los nuevos consumidores. 
        
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

<style lang="sass">
.bg-tema3
  background-image: url(../assets/curso/temas/bg-tema3.png)
  background-repeat: no-repeat
  background-size: 100%
  background-position: start
</style>
