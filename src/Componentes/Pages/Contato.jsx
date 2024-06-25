
import { Input } from "@material-tailwind/react";
function Contato(){
    return (
        <>
           <div className="col-span-3 relative">
        <div className="col-span-5 flex text-white justify-center items-center p-20 space-x-8 mb-8">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" src="/public/fundo3.jpg" alt="Imagem de fundo"/>
          </div>
          </div>
        </div>
        <div className="flex w-72 flex-col gap-6 items-center">
      <Input variant="static" placeholder="Static" label="Static"   />
      <Input variant="standard" label="Standard" placeholder="Standard"/>
      <Input variant="outlined" label="Outlined" placeholder="Outlined"/>
    </div>
        </>
      )
}

export default Contato;
