import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css'
import Rotas from './routes'
import Navbar from '../components/navbar'
import 'toastr/build/toastr.min.js'
import '../custom.css'
import 'toastr/build/toastr.css'

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import ProvedorAutenticacao from './provedorAutenticacao'
class App extends React.Component {
  render() {
    return (
      <ProvedorAutenticacao>
        <Navbar />
        <div className='container'>
          <Rotas />
        </div>
      </ProvedorAutenticacao>
    )
  }
}

export default App;
