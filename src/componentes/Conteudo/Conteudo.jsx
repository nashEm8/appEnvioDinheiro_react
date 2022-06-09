import React, { useEffect, useState } from "react";
import api from '../../Api';
import Usuario from '../Usuario/Usuario';


function ListaUsuarios() {
    const [usuario, setUsuarios] = useState([]);

    useEffect(() => {
        api.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
            .then((response) => {
                console.log(response);
                setUsuarios(response.data)
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro : " + err);
            });
    }, []);

    return (
            usuario.map((usuario) => (
              <Usuario
                key={usuario.id}
                id={usuario.id}
                img={usuario.img}
                name={usuario.name}
                username={usuario.username}
              />
            ))
    );
}

export default ListaUsuarios