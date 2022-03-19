import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './componentes/Home'
import Clientes from './componentes/Clientes'
import Productos from './componentes/Productos'
import Facturas from './componentes/Facturas'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>} >
        <Route path="/facturas" element={<Facturas></Facturas>} />
        <Route path="/clientes" element={<Clientes></Clientes>} />
        <Route path="/productos" element={<Productos></Productos>} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
