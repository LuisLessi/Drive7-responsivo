<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #151515;">
  <a class="navbar-brand" href="#"><img src="../assets/logoDrive7.png"></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapse" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="navbar-collapse collapse" id="collapse">
    <ul class="navbar-nav">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Cadastro
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Passageiro</a>
          <a class="dropdown-item" href="#">Motorista</a>
          <a class="dropdown-item" href="#">Expedidores</a>
          <a class="dropdown-item" href="#">Indicadores</a>
          <a class="dropdown-item" href="#">Grupo de motoristas</a>

        </div>
      </li>
      <li class="nav-item dropdown -4">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Negócios
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Franquias</a>
          <a class="dropdown-item" href="#">Serviços</a>
          <a class="dropdown-item" href="#">Documentos</a>
          <a class="dropdown-item" href="#">Colaboradores</a>

        </div>
      </li>
      <li class="nav-item dropdown ">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Financeiro
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Transferências</a>
          <a class="dropdown-item" href="#">Histórico</a>
          <a class="dropdown-item" href="#">Relatório</a>
          <a class="dropdown-item" href="#">Cupom/Promoções</a>
        </div>
      </li>
      <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Relatórios
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Relatório 1</a>
          <a class="dropdown-item" href="#">Relatório 2</a>
          <a class="dropdown-item" href="#">Relatório 3</a>
        </div>
      </li>
      <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Mapas
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Mapas</a>
        </div>
      </li>
      <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          SAC
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Suporte</a>
        </div>
      </li>
      <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Configurações
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Geral</a>
          <a class="dropdown-item" href="#">Versões e Links</a>
          <a class="dropdown-item" href="#">E-mail</a>
          <a class="dropdown-item" href="#">Meios de pagamentos</a>
          <a class="dropdown-item" href="#">Configurações nacionais</a>
        </div>
      </li>
      <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="../assets/perfil.png" alt="Foto de perfil" class="rounded-circle" style="width: 25px; height: 25px; margin-right: 5px;">
        
    </a>
    <div class="dropdown-menu dropdown-menu-end dropdown last" aria-labelledby="navbarDropdownMenuLink" >
        <a class="dropdown-item" href="#"><i class="fas fa-user"></i> Meu perfil</a>
        <a class="dropdown-item" href="#"><i class="fas fa-lock"></i> Alterar senha</a>
        <a class="dropdown-item" href="#"><i class="fas  fa-arrow-right"></i> Sair</a>
        
    </div>
</li>
    </ul>
  </div>
</nav>
</template>

<style lang="scss" scoped>
.nav-link{
    color:rgba(255, 255, 255, 0.7);
}
.navbar-nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.dropdown-item{
    color: rgba(255, 255, 255, 0.5);
}
.dropdown-menu{
    background-color: #151515;
}
.dropdown-item:hover{
    background-color: #151515;
}
.dropdown-toggle::after {
  color: rgba(214, 34, 35, 1);
}
.navbar-nav .dropdown:last-child .dropdown-toggle::after {
  color:rgba(255, 255, 255, 1);
}
</style>