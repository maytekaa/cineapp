import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";


function Filmes() {

    const[filmes, setFilmes] = useState ([])

    useEffect( ()=> {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e")
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch(error => console.log(error))
    },[])
    
    
  
    return ( 
        <>
        <div className="col-span-3 relative">
        <div className="col-span-5 flex text-white justify-center items-center p-20 space-x-8 mb-8">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" src="/public/fundo2.jpg" alt="Imagem de fundo"/>
          </div>
          </div>
        </div>
        
        <br></br>
        <br></br>    
        <div className="absolute right-8">
                <IoSearch />
        </div>

        
            
        <h1 className="text-2xl ml-60 bg-blue-800 w-60 text-center items-center rounded-2xl text-white">Filmes em Alta</h1>
                              
            <div className="listaFilmes flex"> 
            {
                filmes.map(
                    filme => (

                <>
                  
                        <div className="flex bg-brown-200 m-auto p-4">
                    
                              <div
                                className="flex overflow-x-scroll pb-10 hide-scroll-bar"
                              >
                                <div
                                  className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
                                >
                                  <div className="inline-block px-1">
                                    <div
                                      className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                    >
                                         <img src= {`https://image.tmdb.org/t/p/w300/${filme.backdrop_path}`}/>
                                         
                                            <h1 className="ml-20">{filme.title}</h1>
                                            

                                    </div>
                                  </div>
                                 
                                </div>
                              </div>
                        </div>
                        </>
                    )
                )
            }
    
        </div>

        <h1 className="text-2xl ml-60 bg-blue-800 w-60 text-center items-center text-white rounded-2xl">Mundo Disney</h1>

        <div className="listaFilmes flex"> 
            {
                filmes.map(
                    filme => (

                <>
                  
                        <div className="flex bg-brown-200 m-auto p-4">
                    
                              <div
                                className="flex overflow-x-scroll pb-10 hide-scroll-bar"
                              >
                                <div
                                  className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
                                >
                                  <div className="inline-block px-1">
                                    <div
                                      className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                    >
                                         <img src= {`https://image.tmdb.org/t/p/w300/${filme.backdrop_path}`}/>
                                         
                                            <h1 className="ml-20">{filme.title}</h1>
                                            

                                    </div>
                                  </div>
                                 
                                </div>
                              </div>
                        </div>
                        </>
                    )
                )
            }
    
        </div>

        <h1 className="text-2xl ml-60 bg-blue-800 w-28 text-center items-center text-white rounded-2xl">Comédia</h1>
        
      
        <div className="listaFilmes flex"> 
            {
                filmes.map(
                    filme => (

                <>
                  
                        <div className="flex m-auto p-4">
                    
                              <div
                                className="flex overflow-x-scroll pb-10 hide-scroll-bar"
                              >
                                <div
                                  className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
                                >
                                  <div className="inline-block px-1">
                                    <div
                                      className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                    >
                                         <img src= {`https://image.tmdb.org/t/p/w300/${filme.backdrop_path}`}/>
                                         
                                            <h1 className="ml-20">{filme.title}</h1>
                                            

                                    </div>
                                  </div>
                                 
                                </div>
                              </div>
                        </div>
                        </>
                    )
                )
            }
    
        </div>

        <h1 className="text-2xl ml-60 bg-blue-800 w-28 text-center items-center text-white rounded-2xl">Marvel</h1>

    <div className="listaFilmes flex"> 
    {
        filmes.map(
            filme => (

        <>
          
                <div className="flex bg-brown-200 m-auto p-4">
            
                      <div
                        className="flex overflow-x-scroll pb-10 hide-scroll-bar"
                      >
                        <div
                          className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
                        >
                          <div className="inline-block px-1">
                            <div
                              className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                            >
                                 <img src= {`https://image.tmdb.org/t/p/w300/${filme.backdrop_path}`}/>
                                 
                                    <h1 className="ml-20">{filme.title}</h1>
                                    

                            </div>
                          </div>
                         
                        </div>
                      </div>
                </div>
                </>
            )
        )
    }

</div>

        </>
     );
}

export default Filmes;