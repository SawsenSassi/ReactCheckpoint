import { Dropdown, DropdownButton} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <>

  <header>
    <h1> Login in </h1>
    <br/>
  </header>
  <main>
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div id="dropdown">
  <DropdownButton id="dropdown-basic-button" title="Pays">
  <Dropdown.Item href="#/action-1">Tunisie</Dropdown.Item>
  <Dropdown.Item href="#/action-2">France</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Canada</Dropdown.Item>
</DropdownButton>
</div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</main>
<footer>
  Copyright @2021 by Sawsen SASSI
</footer>
</>
  );
}

export default App;
