<template>
      <section>
           <h3 class="subtitulos">Pasteles</h3>
           <div class="pasteles">
                <div class="pastel">
                    <img src="../assets/pastel1-chocofresa.jpg" alt="pastel chocfresa">
                    <figcaption>Pastel de Fresa con chocolate</figcaption>
                    <small>$400 MXN</small>
                </div>
                <div class="pastel">
                    <img src="../assets/pastel2.jpg" alt="pastel chocfresa">
                    <figcaption>Pastel de Chocolate</figcaption>
                    <small>$490 MXN</small>
                </div>
                <div class="pastel">
                    <img src="../assets/pastel3.jpg" alt="pastel chocfresa">
                    <figcaption>Pastel de Fresa con crema</figcaption>
                    <small>$500 MXN</small>
                </div>
                <div class="pastel">
                    <img src="../assets/pastel4.jpg" alt="pastel chocfresa">
                    <figcaption>Pastel multicolor</figcaption>
                    <small>$600 MXN</small>
                </div>
                <div class="pastel">
                    <img src="../assets/pastel5.jpg" alt="pastel chocfresa">
                    <figcaption>Pastel de Ultrachoclate</figcaption>
                    <small>$900 MXN</small>
                </div>
                <div class="pastel">
                    <img src="../assets/pastel6.jpg" alt="pastel chocfresa">
                    <figcaption>Pastel Rosa</figcaption>
                    <small>$600 MXN</small>
                </div>
                <div class="pastel">
                    <img src="../assets/pastel-cheems.jpg" alt="pastel chocfresa">
                    <figcaption>Pastel Personalizado</figcaption>
                    <small>A partir de $600 MXN</small>
                </div>
           </div>
       </section>

        <section class="nuevo-pedido">
           <h3 class="subtitulos">Nuevo pedido</h3>
            <div class="pedido">
            <router-link to="/nuevoPedido">
                <button 
                class="pedido-btn"
                >Nuevo pedido</button>
            </router-link>
            </div>
       </section>
</template>

<script>
    export default{
        name: "Pasteles"
    }
</script>