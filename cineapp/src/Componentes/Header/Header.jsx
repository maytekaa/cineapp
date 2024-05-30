import NavBar from '../NavBar/NavBar'


function Header(){
    return (
        <header className="flex bg-navbar text-white p-4 mb-4 justify-between">
        <span>Olá, visitante!</span>
        <div className="flex items-center"> 
                <h1>CineMax</h1>
                <img src='iconeB.png' alt="Ícone" className="w-10 h-8 ml-2" /> 
            </div>
          <NavBar></NavBar>
        </header>
      )
}

export default Header