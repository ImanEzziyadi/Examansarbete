
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Service from './components/pages/Service';
import Product from './components/pages/Product';
import Team from './components/pages/Team';
import Testimonials  from './components/pages/Testimonials';
import NewsUpdate from './components/pages/NewsUpdate';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import RegisterForm from './components/RegisterForm';
import Login from './components/Login';
import NotFound from './components/pages/NotFound';
import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom';


 
 

function App() {
  return (

     
  <Router>
      <Navbar /> 
        <Switch> 
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Service}/>
          <Route exact path="/product" component={Product}/>
          <Route exact path="/team" component={Team}/>
          <Router exact path="/testimonials" component={Testimonials} />
          <Router exact path="/newsUpdate" component={NewsUpdate} />
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/registerForm"component={RegisterForm} />
          <Route exact path="/login"component={Login} />


          <Route exact path="*" component={NotFound} />
         </Switch> 
      <Footer />

    </Router>
    
  );
}

export default App;
