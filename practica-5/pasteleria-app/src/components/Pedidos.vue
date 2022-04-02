<template>

    <section>

        <h3 class="subtitulos">Listado de pedidos</h3>

        <table class="tabla">
            <thead class="titulo-tabla">
                <tr>
                    <th>Pedido No.</th>
                    <th>Usuario</th>
                    <th>Acciones</th>
                </tr>
            </thead>
        
            <tbody>
                <tr>
                    <td>25</td>
                    <td>Mauricio Herrera</td>
                    <td>
                        <button class="proveedor-btn">Entregar</button>
                        <button class="proveedor-cancelar">Cancelar</button>
                    </td>
                </tr>
                
                <tr>
                    <td>26</td>
                    <td>Joel Hoil</td>
                    <td>
                        <button class="proveedor-btn">Entregar</button>
                        <button class="proveedor-cancelar">Cancelar</button>
                    </td>
                </tr>
                
                <tr>
                    <td>27</td>
                    <td>ArianaSoberanis</td>
                    <td>
                        <button class="proveedor-btn">Entregar</button>
                        <button class="proveedor-cancelar">Cancelar</button>
                    </td>
                </tr>
                <tr>
                    <td>28</td>
                    <td>Nadia Kuk</td>
                    <td>
                        <button class="proveedor-btn">Entregar</button>
                        <button class="proveedor-cancelar">Cancelar</button>
                    </td>
                </tr>
                <tr>
                    <td>29</td>
                    <td>Mario Santana</td>
                    <td>
                        <button class="proveedor-btn">Entregar</button>
                        <button class="proveedor-cancelar">Cancelar</button>
                    </td>
                </tr>
                <tr>
                    <td>30</td>
                    <td>Kenau Reeves</td>
                    <td>
                        <button class="proveedor-btn">Entregar</button>
                        <button class="proveedor-cancelar">Cancelar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>

</template>

<script>

    export default {
        name: "Pedidos"
    }

</script>