import React, {Component} from 'react'
import './topo.css';
import Logo from './logoApp.png'

class Topo extends Component {
    render(){
        return(
            <>
            <div className='header'>
                <div className='container'>
                    <div className='logo'><img src={Logo}/></div>
                    <h1>Aplicativo de envio de dinheiro</h1>
                </div>
            </div>
            </>
        );
    }
}

export default Topo;