import React from 'react-dom';


export default function PanelRight() {
    
    return (
        <div >
            <h1>
            BiblioTeck
            </h1> 
            <form>
                <label>Usu&aacute;rio: </label>
                <input type="text" id="user"/> 
                < br />
                <label>Senha: </label>
                <input type="text" id="password"/>
                <input type="submit" />
            </form> 
        </div>
    )
}