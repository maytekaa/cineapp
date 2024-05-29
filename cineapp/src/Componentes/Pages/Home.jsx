import data  from "../../../arquivos.json"

function Home(){
    return (
        <div className="grid grid-cols-3 gap-3">
        {
            data.map(
              (filme, index) => (
                
                <div className='card rounded-lg shadow-md p-4 bg-slate-200' key={index}>
                <h1>{filme.title}</h1>
                <img className= ' w-[150px] h-[200px] m-3' src={filme.image} ></img>
                
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
      )
}

export default Home