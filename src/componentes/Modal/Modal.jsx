import React, { useState } from 'react';
import fechar from '../Modal/fechar.png';
import { Mascara } from '../Mascara/Mascara';
import { cartoes } from '../Cartao/Cartao';
import './modal.css';

function Modal({ onClose, children }) {
  const [pagamento, setPagamento] = useState(false);

  const dadosCartaoDeCredito = async (evento) => {
    evento.preventDefault();

    const formData = new FormData(evento.target);
    const value = formData.get("valorPago");
    const cartao = formData.get("selecionaCartao");
    const selecaoCartao = cartoes.find((cartaoObjeto) => cartaoObjeto.card_number === cartao);

    await (
      await fetch("https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989",
        {
          method: "POST",
          body: {
            card_number: cartao,
            cvv: selecaoCartao.cvv,
            expiry_date: selecaoCartao.expiry_date,
            value: value,
          },
        })
    ).json();

    if (cartao === "1111111111111111") {
      setPagamento(true);
      document.querySelector('.recebedor').innerHTML = 'Recibo de pagamento';
      document.querySelector('.formulario').style.display = 'none';
      document.querySelector('.mensagemSucesso').style.display = 'block';
    } else {
      setPagamento(true);
      document.querySelector('.recebedor').innerHTML = 'Recibo de pagamento';
      document.querySelector('.formulario').style.display = 'none';
      document.querySelector('.mensagemErro').style.display = 'block';
    }
  }

  return (
    <div className="modal">
      <div className="janela">
        <div className='pagamento-nome'>
          <div className='janela-fechar'>
            <button onClick={onClose}><img src={fechar} /></button>
          </div>
          <div className='recebedor'>Pagamento para: <span>{children}</span> </div>
        </div>

        <div className='formulario'>
          <form onSubmit={dadosCartaoDeCredito}>
            <div>
              <input type='text' onKeyUp={Mascara} placeholder='R$ 0,00' required></input>
            </div>

            <div>
              <select required name="selecionaCartao">
                {cartoes.map((cartao) => {
                  return (
                    <option
                      key={cartao.card_number}
                      value={cartao.card_number}
                    >
                      Cartão com final {cartao.card_number.substring(12)}
                    </option>
                  );
                })}
              </select>

              <div className='botao-pagar'>
                <button type="submit">Efetuar pagamento</button>
              </div>
            </div>
          </form>
        </div>
        <div className='mensagemSucesso'>O pagamento foi <span style={{ color: '#018a00' }}>concluído com sucesso!</span></div>
        <div className='mensagemErro'>O pagamento <span style={{ color: '#ff0000' }}>não</span> foi concluído com sucesso!</div>
      </div>
    </div>
  );
};

export default Modal