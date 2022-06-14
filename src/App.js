import logo from './logo.svg';
import './App.css';
import Layout from "./modules/layout"
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Sales from './modules/pages/Sales/Sales';


function App() {
  return (
   <Layout> 
    <Router>
      
          <Routes>
            <Route path='/' exact element={<Sales/>}> </Route>
          </Routes>
      
    </Router>
    </Layout>
  );
}
export default App;
