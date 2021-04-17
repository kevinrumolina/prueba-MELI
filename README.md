# prueba-MELI
Test Práctico - Frontend
En este test práctico para MELI se dividio las tareas para hacer en subtareas las cuales se comentaran y explicaran a continuación:

# Diseño Básico de las vistas con HTML y CSS:
el trabajo de esta tarea se realizo replicando los mock ups enviados en HTML y SCSS para esta tarea el trabajo se dividio en:
HTML
1-) Realizar la maquetación del buscador.
2-) Realizar la maquetación de Resultados.
3-) Realizar la maquetación de Detalles.
Al finalizar cada una de las maquetaciónes las cuales se realizaban con HTML semantico, estas pasaban a ser validadas en W3C https://validator.w3.org/

SCSS
al mismo tiempo que se realizaba cada una de las maquetaciones anteriormente mencionadas se iba trabajando en sus estilos, la idea fue no pasar a realizar una maquetación distinta hasta que el HTML en el que se estaba trabajando estuviera corriendo con sus estilos correctamente:
1-)Se creo un archivo scss para definir las posibles variables que se podrian utilizar en el proyecto basandose en los mockups.
2-)Se creo un archivo scss para definir las reglas base del proyecto, en este se importo la fuente 'Proxima Nova' en el proyecto la cual fue encontrada dentro de la pagina de mercado libre oficial como primera opción de fuente extrayendola por el llamado que se hacia a la fuente en el Network. Además de esto se setearon normalizadores de margen, padding y border y se seteo el box-sizing en border-box para evitar conflictos con los estilos por defecto de los diferentes elementos.
3-)Creación de estilos SCSS del header.
4-)Creación de estilos SCSS de los breadcrumbs.
5-)Creación de estilos SCSS de la sección de categoria.
6-)Creación de estilos SCSS de la sección de detalle.
a medida que se trabajaba en esto se importaban los archivos scss a un archivo scss principal (styles) el cual se iba compilando a medida que se trabajaba en los estilos para poder ver los cambios en live server.

Al finalizar esto se realizo el primer commit en nuestro repositorio en github

# Elaboracion de script para la Extracción de la info de la API para Resultados

En esta sección se crearon archivos JavaScript correspondientes para la creacion de los componentes (resultados). Se creo una clase reutilizable para extraer la info requerida de los items de la API para luego crear un componente HTML para cada uno de los 4 resultados solicitados en la consigna reemplazando los valores de la src de la imagen de producto y el innerText de los elementos HTML que son individuales de cada resultado, tomando toda esta data de los resultados. Adicionalmente se agrego el key-value de state a cada uno de los objetos del array de items ya que este dato es utilizado en el componente de resultado.

# Actualizar Scripts para la extraccion de la info de la API para Detalles y Breadcrumbs
Luego del paso anterior, junto a unos pequeños cambios de refactorizar un poco el código se procedio a hacer la extraccion de los elementos de la API de manera similar que en el paso anterior, junto a esto aparecieron problemas no vistos antes con los estilos los cuales fueron corregidos. se refactorizo el código JS para que quedara organizado de la siguiente manera:  
1-) ItemDetail.js y Result.js --> archivos encargados en exportar las clases que se usan para tener un objeto con la información requerida extraida de la API  
2-) createComponents.js --> archivo con las funciones principales con la logica para el maquetado de los breadcrumbs, resultados y detalles.  
3-) main.js --> Encargado de aplicar la logica final para la extraccion de contenido usando las funciones y clases mencionadas en los dos archivos anteriores.


# BONUS!
1-)Se realizaron diseños responsive, aunque el mock up haya sido la versión desktop se penso en posibles vistas en caso de que un usuario accediera desde tablet o desktop.
