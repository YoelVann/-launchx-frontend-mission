<template>

  
  <router-link to="/"> 
    <div class="titulo">
      <h1>Pastelería Chapa Jambo</h1>
      <h2>Sabor irresistible como un hermoso lomito</h2>
    </div>
  </router-link> 

  <nav>
      <ul>
          <li> <router-link to="/nuevoPedido"> Nuevo Pedido </router-link> </li>
          <li>Contacto</li>
          <li>item</li>
          <li> <router-link to="/pastelero"> Administrador </router-link> </li>
      </ul>
  </nav>

</template>

<script>
    export default{
        name: "NavBar",
    }
</script>