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




#BONUS!
1-)Se realizaron diseños responsive, aunque el mock up haya sido la versión desktop se penso en posibles vistas en caso de que un usuario accediera desde tablet o desktop.