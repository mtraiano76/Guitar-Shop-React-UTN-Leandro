const ContactoPage = (props) => {
    return(
    
        <div class="form-contact">
            <h4>Formulario de contacto</h4>
            <input class="controls" type="text" name="nombres" id="nombres" placeholder="Ingrese su Nombre"/>
            <input class="controls" type="text" name="apellidos" id="nombres" placeholder="Ingrese su Apellido"/>
            <input class="controls" type="email" name="telefono" id="nombres" placeholder="Ingrese su Telefono"/>
            <input class="controls" type="email" name="correo" id="nombres" placeholder="Ingrese su Correo"/>
            <input class="botons" type="submit" value="Enviar"/>
        </div>
    );
}
export default ContactoPage;