// import logo from './logo.svg';
// import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';  
import Form from 'react-bootstrap/Form';
import logo from './images/signUpImg4.png';

import Rlogo from './images/logo.png';
import back from './images/back.png';


function App() {
  return (
    <div class="MainBody">
      <div className="container"> 
        <img src={Rlogo} className="rlogo" alt="rlogo" />  
        
        <div className="SignBody2 SignBody3"> 
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          
          <div className="SignFormBox">           
            <form>                          
              <div className='SignFormBoxHeader'> 
              
              <a href="#"> 
                <div className='backBox'>
                  <img src={back} className="rlogo" alt="rlogo" /> 
                  <p> Back </p>
                </div>
              </a>

                <h1>Verification</h1>
                <p>We just sent a code to <span> 0123 456 7890 </span></p>
              </div>

              <div class="form-group">
                <label for="name">Verification Code</label>
                <div className='d-flexY'> 
                <Form.Control type="text" class="form-control yInput" id="name" aria-describedby="emailHelp"/>   
                <Form.Control type="text" class="form-control yInput" id="name" aria-describedby="emailHelp"/>   
                <Form.Control type="text" class="form-control yInput" id="name" aria-describedby="emailHelp"/>

                <Form.Control type="text" class="form-control yInput" id="name" aria-describedby="emailHelp"/>   
                <Form.Control type="text" class="form-control yInput" id="name" aria-describedby="emailHelp"/>   
                <Form.Control type="text" class="form-control yInput" id="name" aria-describedby="emailHelp"/>   
                </div>  
                <a href="#">  
                <small id="emailHelp" class="form-text text-muted VOneText">Not Received? <span> Resend Code </span></small>  
                </a>             
              </div>

            <button type="submit" class="btn btn-danger formSbmitBtn"> Signup </button>    
            <a href="#">  
              <small id="emailHelp" class="form-text text-muted VTwoText">Verify with Email</small>     
            </a>               
            </form>
          
              </div>
            </div> 
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">          
                {/* <img src="signup3img.png"/> */}
                <div class="signUpImg bg4Img"> 
                  <img src={logo} className="App-logo" alt="logo" />  
                </div> 
              </div> 
          </div>
        </div>
      </div>     
    </div>    
  );
}

export default App;
