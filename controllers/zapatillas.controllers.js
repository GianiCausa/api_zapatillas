const { request, response } = require("express");
const {zapatillas} = require("../zapatillas");
const getZapatillas = (req , res)=>{

    return res.json({
        ok:true,
        statusCode:200,
        zapatillas
    });

}

const getZapatillaById = (req = request , res = response)=>{

    let id = parseInt(req.params.id);

    let zapatillaABuscar = "";

    zapatillaABuscar = zapatillas.find((zapatilla)=>{
        return zapatilla.id === id;
    });
    if(zapatillaABuscar){
        return res.json({
            ok:true,
            statusCode:200,
            zapatillaABuscar     
        });
    }else{
        return res.json({
            ok:true,
            statusCode:404,
            msg:"No hay un id de zapatilla que concuerde con la búsqueda"    
        });
    }
}

module.exports = {
    getZapatillas,
    getZapatillaById
}