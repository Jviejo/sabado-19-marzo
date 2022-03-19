import React from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';

const URL_API = "https://my-bdd-server-nlngw9uco-jviejo.vercel.app"

function getClientes() {
  return axios.get(`${URL_API}/sql?sql=select * from customers limit 20`);
}

export default function Cliente() {
  

  const { isLoading, data } = useQuery('clientes', getClientes)
  
  if (isLoading) {
    return <div>Espero un momento , por favor</div>
  }

  return (
    <div>
      <h1>Clientes</h1> 
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
          </tr>   
        </thead>

        <tbody>
          {data.data.map(cliente => (
            <tr key={cliente.customer_id}>
              <td className='text-center'>
                {cliente.customer_id}</td>
              <td>{cliente.company_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
