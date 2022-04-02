<template>
    <section>
        <h3 class="subtitulos">Insumos</h3>
        <h2 class="subtitulo-insumo">Sabores en existencia</h2>
        <table class="tabla">
            <thead class="titulo-tabla">
                <tr>
                    <th>Sabor</th>
                    <th>En existencia</th>
                    <th>Acciones</th>
                </tr>
            </thead>
        
            <tbody>
                <tr>
                    <td>Fresa</td>
                    <td>55</td>
                    <td><button class="proveedor-btn">Solicitar a proveedor</button></td>
                </tr>
                
                <tr>
                    <td>Chocolate</td>
                    <td>100</td>
                    <td><button class="proveedor-btn">Solicitar a proveedor</button></td>
                </tr>
                
                <tr>
                    <td>Galleta</td>
                    <td>100</td>
                    <td><button class="proveedor-btn">Solicitar a proveedor</button></td>
                </tr>
                <tr>
                    <td>Vainilla</td>
                    <td>4</td>
                    <td><button class="proveedor-btn">Solicitar a proveedor</button></td>
                </tr>
                <tr>
                    <td>Tres Leches</td>
                    <td>10</td>
                    <td><button class="proveedor-btn">Solicitar a proveedor</button></td>
                </tr>
            </tbody>
        </table>
       </section>
</template>

<script>
    export default {
        name: "ExistenciaSabores"
    }
</script>