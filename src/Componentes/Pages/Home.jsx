import data  from "../../../arquivos.json"



function Home(){
    return (
      <>
      <div className="col-span-3 relative">
      <div className="col-span-5 flex text-white justify-center items-center p-10 space-x-8 mb-8">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" src="/public/fundo1.jpg" alt="Imagem de fundo"/>
            <div className="text-5xl">
                <span className="block">CineMax</span>
                <span className="block">NOTÍCIAS</span>
              </div>
                </div>

         
               

          </div>

        </div>

        <div className="grid grid-cols-3 gap-3">
        {
            data.map(
              (filme, index) => (
                
                <div className='card rounded-lg shadow-md p-4 bg-slate-200' key={index}>
                <h1>{filme.title}</h1>
                <img className= ' rounded-lg w-[400px] h-[200px] m-3' src={filme.image} ></img>
                
                  <div className="tags">
                  {
                    filme.tags.map( tag => (
                      <span className=" bg-blue-700 text-white p-1 m-1 rounded-lg" key={tag}>{tag}</span>
                    ))
                  }
             
                  </div> 

                  <div className='text text-justify m-2'>
                    {
                      filme.text.map( text => (
                        <span className='p-6 m-6' key={text}>{text}</span>
                      ))
                    }
                  </div>
                </div>
                
              )

              
            )
          }
          </div>
          </>
      )
}

export default Home