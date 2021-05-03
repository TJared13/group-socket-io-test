import {BrowserRouter as Router, Route} from 'react-router-dom';

import Products from '../src/components/body/products/Products';
import DetailProduct from '../src/components/body/detailProduct/DetailProduct';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Products} />
        <Route exact path='/product/:id' component={DetailProduct} />
      </div>
    </Router>
  );
}

export default App;
