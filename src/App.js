
import './App.css';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Home/Header/Header';
import Services from './components/Home/Services/Services';
import Home from './components/Home/Home/Home';
import Login from './components/Home/Login/Login';
import About from './components/Home/About/about';

import Contact from './components/Home/Contact/Contact';
import Register from './components/Home/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/Home/PrivateRoute/PrivateRoute';
import Details from './components/Home/Details/Details/Details';
import Footer from './components/Home/Footer/footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>

            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/details/:serviceId">
              <Details></Details>
            </Route>
            <PrivateRoute exact path="/about">
              <About></About>
            </PrivateRoute>
            <PrivateRoute exact path="/contact">
              <Contact></Contact>
            </PrivateRoute>


          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;

