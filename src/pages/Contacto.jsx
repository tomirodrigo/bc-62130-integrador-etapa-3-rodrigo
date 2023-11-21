import  React from 'react'  
import "./Contacto.scss"
const Contacto = () => {
    return(
        <>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Proyecto Integrador - Contacto</title>
</head>

<body>
  
  <form class="form" action="" method="get">
    
    <fieldset class="primerfieldset">
      <legend class="primerfieldset__legend">
        DATOS DE CONTACTO
      </legend>
      <label class="primerfieldset__elementobloque" for="nombre"
        >Nombre Completo:* </label>
      <input
        class="primerfieldset__inputcajas"
        type="text"
        id="nombre"
        name="nombrecito"
        required
      /><br />
      <label class="primerfieldset__elementobloque" for="telefono"
        >Teléfono:</label>
      <input
        class="primerfieldset__inputcajas"
        type="tel"
        id="telefono"
        name="telefonito"
        placeholder="Código de área y número"/><br />
      <label class="primerfieldset__elementobloque" for="correo"
        >Direccion de correo electrónico:*</label>
      <input
        class="primerfieldset__inputcajas"
        type="email"
        id="correo"
        name="correito"
        required
        placeholder="Ej:mail@gmail.com"
      />
      <label class="primerfieldset__elementobloque" for="comentarios">Comentarios, contanos tu duda o problema de la manera más detallada posible.</label>
      <textarea
        class="primerfieldset__textarea"
        maxlength="350"
        id="comentarios"
        name="comentaritos"
      ></textarea>
    </fieldset>
    <div class="contenedorbotones">
      <button class="contenedorbotones__btn1" type="submit">Enviar</button>
      <button class="contenedorbotones__btn2" type="reset">Cancelar</button>
    </div>
  </form>

  <script type="module" src="/main.js"></script>
</body>
</html></>
    )
}
export default Contacto