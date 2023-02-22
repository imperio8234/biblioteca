import axios from "axios";
import { useEffect, useState } from "react";
import "../css/buscador.css"




export const Buscador=({ inputText })=>{
    const [obj, setObj]=useState([]);
    const [obBuscados, setObBuscados]=useState([]);
    const [letraBusqueda,]=useState();
    


    useEffect(()=>{
        axios.get("http://localhost:4000/login/home",{
            withCredentials:true,
        }).then(res=> {
            if (res) {
                
            setObj(res.data.result.tareasConImagenes)
            
            
        }else{
            console.log("no hay archivos")

        }
        
        }).catch(err=> console.log(err))
        

    },[inputText])


    useEffect(()=>{
        if (obj.length == 0) {
            console.log("cargando archivos")
            
        }else{
            buscar()
        }
        

    }, [obj])

    const buscar=()=>{
        const objBuscad=  []
        for (const list of obj) {
            if (list.nombre.includes(inputText)) {
                objBuscad.push(list)
                
            }
            setObBuscados(objBuscad)
            
        }
    


    };
    

    return(
        <div className="buscador">
            {
                obBuscados.map(e=>{
                    return  <div className="card contBuscador" >
                    <img  className="card-img-top im" src={"http://localhost:4000/"+ e.id + e.nombre}></img>
  
                <div className="card-body">
                   <h5 className="card-title text">{e.nombre}</h5>
                    <p className="card-text">{e.descripcion}.</p>
                  </div>
  
                   </div> 
                })
            }
            
        </div>
    )

};