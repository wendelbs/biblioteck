import React from 'react-dom';
import './style.css'

export default function PanelRight() {
    
    return (
        <div className="rightBar">
            
            <h1 className="nameApp">
            BiblioTeck
            </h1> 
            <form >
                <label id="cadUser">Usu&aacute;rio: </label>
                <input t ype="text" id="user"/> 
                < br />
                <label>Senha: </label>
                <input  id="password"/>
                <input type="submit"/>
            </form> 
        </div>
    )
}