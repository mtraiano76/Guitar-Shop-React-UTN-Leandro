const RegistroPage = (props) => {
    return(
 
            <div class="form-register">
                <h4>Formulario de registro</h4>
                <input class="controls" type="text" name="nombres" id="nombres" placeholder="Ingrese su Nombre"/>
                <input class="controls" type="text" name="apellidos" id="nombres" placeholder="Ingrese su Apellido"/>
                <input class="controls" type="email" name="correo" id="nombres" placeholder="Ingrese su Correo"/>
                <input class="controls" type="password" name="correo" id="nombres" placeholder="Ingrese su Contraseña"/>
                <input class="botons" type="submit" value="Registrar"/>
            <div/>
        </div> 
    );
}
export default RegistroPage;