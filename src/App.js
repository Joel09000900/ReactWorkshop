import './App.css';
import './Components/product.js';
import Card from './Components/Card/card.js';
import Name from './Components/Name.js';
import Prix2 from './Components/Prix2/Prix2.js';
import DescriptionProduit from './Components/Description/Description.js'
import Image from '../src/Components/Image/Image.js'
import img from  '../src/FIFA23.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';




function App () {

  
  return (

    <div className='card  mt-5 px-4  App border border-warning' style={{width:"19rem"}}>

      <div className=''><img src={img} alt="" /></div>

      <Name/>
      <Prix2/>
      <DescriptionProduit/>

    </div>

  )
  
}


  

  export default App;
  
