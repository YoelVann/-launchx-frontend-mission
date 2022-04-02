<template>
    <section>
        <h3 class="subtitulos">Nuevo pedido</h3>
        <form action="" class="formulario">
            <div class="adornos">
                <h4 class="titulo-eleccion">Elige tus Adornos</h4>
                <label><input type="checkbox" id="adorno1" value="first_checkbox"> Chispas de Chocolate + $100 MXN</label><br> 
                <label><input type="checkbox" id="adorno2" value="first_checkbox"> Chispas de Fresa + $100 MXN</label><br> 
                <label><input type="checkbox" id="adorno3" value="first_checkbox"> Chispas multisabor + $100 MXN</label><br> 
                <label><input type="checkbox" id="adorno4" value="first_checkbox"> Obleas + $100 MXN</label><br> 
                <label><input type="checkbox" id="adorno5" value="first_checkbox"> Raspado de chocolate + $100 MXN</label><br> 
                <label><input type="checkbox" id="adorno5" value="first_checkbox"> Acabado de chantilli estilizado + $100 MXN</label><br> 
            </div>
        
            <h4 class="titulo-eleccion">Elige tu Sabore</h4>
            <div class="sabores">
                <div class="sabor">
                    <input type="radio" name="sabor1" id="sabor1">
                    <label for="sabor1">Fresa</label>
                </div>
                
                <div class="sabor">

                    <input type="radio" name="sabor2" id="sabor2">
                    <label for="sabor2">Chocolate</label>
                    
                </div>
                <div class="sabor">
                    <input type="radio" name="sabor3" id="sabor3">
                    <label for="sabor3">Vainilla</label>
                </div>

                <div class="sabor">
                    <input type="radio" name="sabor4" id="sabor4">
                    <label for="sabor4">Tres leches</label>
                </div>

                <div class="sabor">
                    <input type="radio" name="sabor5" id="sabor5">
                    <label for="sabor5">Galleta</label>
                </div>
            </div>

            <div class="datos">
            <h4 class="titulo-eleccion">Llena tus datos</h4>
                <div class="entrada">
                    <label for="nombre">Nombre</label><br>
                    <input type="text" id="nombre" name="nombre"> <br>
                </div>

                <div class="entrada"> 
                    <label for="apellido">Apellido</label><br>
                    <input type="text" id="apellido" name="apellido"> <br>   
                </div>

                <div class="entrada"> 
                    <label for="tel">Teléfono</label><br>
                    <input type="tel" id="tel" name="tel" maxlength="10"><br>
                </div>

                <div class="entrada">
                    <label for="correo">Correo</label><br>
                    <input type="email" id="correo" name="correo"><br>
                </div>
            </div>
        </form>

        <div class="resumen-compra">
            {{ $store.state.msg }}
        </div>
        <div class="comprar-btn">
            <button>Comprar</button>
        </div>
    </section>
</template>

<script>
    export default {
        name: "NuevoPedidoView",
    };
    
</script>

<style>
    @import '../assets/styles/nuevo-pedido.css';
</style>