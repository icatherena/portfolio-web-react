<h1>Portfolio-Web</h1>
<h3>Objetivos generales</h3>
<p>
  Crear una aplicación web capaz de consumir datos a partir de una petición a un archivo estático JSON. Desarrollar la IGU siguiendo la maqueta elegida, adaptando la misma a los requerimientos que el portfolio de un desarrollador puede requerir. Mostrar los datos obtenido en una SPA.
</p>
<h3>Teconologías empleadas</h3>
<p>
  TypeScript, ReactJs, MaterialUI, React-Toastify, EmailJs y React-Scroll
</p>
<h3>Alcances y limitaciones</h3>
<p>
  La navegación consta de una única página. El usuario observa en una primera instancia la barra de navegación y el heroe. Esta barra de navegación acompaña al usuario a lo largo de la navegación a través del sitio ('fixed') e implementa 'box-shadow' y 'transition' al navegar a través de la web para contrastar y, de estar forma, mejorar la visibilidad de este componente del resto del sitio. Todos los elementos de la barra se encuentran enlazados a los diferentes componetes de la página para agilizar la búsqueda del usuario de la información pertinente. Todos ellos llevan implementada la propiedad 'smooth' de la librería React-Scroll para mejorar la experiencia del usuario asi como de 'color' diferente cuando el usuario hace 'hover'. El número de items en esta barra cambia con la resolución del dispositivo. 
  El heroe consiste de un componente 'avatar' que recibe a través de la propiedad 'src' el enlace/imagen a mostrar y una presentación mediante la utilización de varios componentes 'typography'. A su vez, cuenta con dos 'button'. Uno de ellos redirecciona la navegación hasta el formulario de contacto y, el otro, permite al usuario descargar un resume en formato pdf. De acuerdo a la resolución del dispositivo, la organización de estos elementos puede variar.
  Al continuar la navegación, el usuario es capaz de observar el componente about. Este ofrece los servicios y demuestra las capacidades mediante el uso nuevamente de 'typography' y un 'button' que redirecciona al formulario de contacto. De acuerdo a la resolución de la pantalla, puede mostrarse junto a estos un nuevo avatar.
  A diferencia de la maqueta original, se ha optado por añadir una sección de tecnología donde el desarrollador sería capaz de mostrar los lenguajes y librerías que maneja. Aquí se han implementado 'typography', uso de 'card' y grillas para recorrer el array de objetos. El número de elementos por fila cambia con la resolución de la pantalla.
  La siguiente sección corresponde a educación y experiencia. Aquí se ha optado por concatenar ambos arrays de objetos y mediante el método .slice obtener dos mitades que mostrar en columnas distintas. Se ha empleado un 'divider' y múltiples 'typography'. En resoluciones menores, se observará una única columna centrada.
  Al carecer de una sección de proyectos, se ha empleado la grilla de card que muestra la maqueta original como guía para emplearla al momento de recorrer el array de proyectos y mostrarlos en la IGU. El número de 'card' por fila difiere con la resolución del dispositivo para mejorar la visibilidad, y como último fin, la experiencia del usuario. Todos estos elementos están enlazados a los repositorios. Se implemento 'box-shadow' cuando se hace 'hover' sobre la card.
  Por último, se puede observar el formulario de contacto y los distintos enlaces a los sitios del desarrollador. El formulario es funcional. Se ha implementado la librería EmailJs para cumplir con dicho requerimiento (gratuito siempre que el número de correos sea inferior a 200 por mes). Consta de diferentes 'text-fields' y 'typography' para abarcar el rango de datos que se desea pedir para el contacto. Si la función devuelve un result al darle click al 'button', se mostrará un 'toast' para que el usuario conozca si su mensaje ha sido correctamente envíado. Ciertos 'textfield' del formulario son requeridos y no podrá accionarse el 'button' hasta que sean rellenados correctamente.
  Un pequeño footer termina la navegación.
</p>
<h3>Maqueta</h3>
<a href='https://dribbble.com/shots/21708929-Tokenex-Personal-portfolio-website-landing-page-design'>Link</a>
