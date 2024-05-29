import NavBar from '../NavBar/NavBar'

function Header(){
    return (
        <header className="flex bg-navbar text-white p-4 mb-4 justify-between">
        <span>Olá, visitante!</span>
        <h1>Bem-vindo ao CineMax</h1>
          <NavBar></NavBar>
        </header>
      )
}

export default Header