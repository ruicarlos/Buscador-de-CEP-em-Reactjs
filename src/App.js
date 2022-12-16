import {FiSearch} from 'react-icons/fi';
import { useState } from 'react';
import './styles.css';

import api from './services/api';

function App() {

  const [cepInformado,setcepInformado] =useState('')
  const [cep,setcep] =useState({})

  async function searchCep (){
   if(cepInformado ===''){
    alert("informe um cep")
    return;
   }
   try{
    const response = await api.get(`${cepInformado}/json`);
    setcep(response.data);
    setcepInformado("");
   }catch{
    alert('Tente Novamente');
    setcepInformado("")
   }
  }

  return (
    <div className="container">
      <h1 className="title">Busca CEP</h1>

      <div className="containerInput">
        <input 
          type="text"
          placeholder="Digite o CEP..."
          value={cepInformado}
          onChange={(e)=> setcepInformado(e.target.value)}
        />


        <button className="buttonSearch" onClick={searchCep}>
          <FiSearch size={25} color='#FFF'/>
        </button>
      </div>

      <main className='main'>
        <h2>CEP: {cep.cep}</h2>
        <span>Logradouro: {cep.logradouro}</span>
        <span>Complemento: {cep.complemento}</span>
        <span>Bairro: {cep.bairro}</span>
        <span>Cidade: {cep.localidade}</span>
        <span>DDD: {cep.ddd}</span>
        <span>UF: {cep.uf}</span>

      </main>

    </div>
  );
}

export default App;
