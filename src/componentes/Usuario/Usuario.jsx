import React, {useState} from 'react';
import Modal from '../Modal/Modal';
import '../Usuario/usuario.css';

function Usuario({name, id, img, username}){
  const [isModalVisivel, setIsModalVisivel] = useState(false);

return (
      <div className='conteudo'>
        <div className='conteudo-container'>
          <div className='conteudo-esquerdo'>
            <img src={img} />
            <div className='dados'>
              <h4>
                {name}
              </h4>

              <h4>
                ID: {id} - Username: {username}
              </h4>
            </div>
          </div>
          <div className='conteudo-direito'>
            <div className='botao'>
              <button onClick= {() => setIsModalVisivel(true)}>Pagar</button>
              {isModalVisivel ? <Modal onClose= {() => setIsModalVisivel(false)}> {name} </Modal> : null}
            </div>
          </div>
        </div>
      </div>
  );
}

export default Usuario;