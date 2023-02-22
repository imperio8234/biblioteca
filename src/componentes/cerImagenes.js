import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

export const Imagenes=({ id, nombre, descripcion, eliminar })=>{
    useEffect(()=>{
        ReactModal.setAppElement("body")

    },[])

    const [modal,setModal]=useState(false)

    const modalOpen=()=>{
        setModal(true);
    };

    const modalClose=()=>{
        setModal(false)
    };
    const name=nombre.split(".")[0];

    return(
        <div>
            <div className="card cont" >
                  <img onClick={modalOpen} className="card-img-top im" src={"http://localhost:4000/"+ id+ nombre}></img>

              <div className="card-body">
                 <h5 className="card-title text">{name}</h5>
                  <p className="card-text">{descripcion}.</p>
                  <button onClick={()=>eliminar(id, nombre)} className="btn btn-primary bot">eliminar</button>
                </div>

                 </div> 
                 <ReactModal isOpen={modal}  onRequestClose={modalClose} className="modContenedor" >
                    <button className="botonModal" onClick={modalClose}>cerrar</button>
                    <div className="conModal">
                        
                        <img  className="card-img-top mod" src={"http://localhost:4000/"+ id+ nombre}></img>
                    </div>
                    
                 </ReactModal>
        </div>
    )

};