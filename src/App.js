import logo from './logo.svg';
import './App.css';

import {HashRouter as Router, Routes,Route,Navigate} from 'react-router-dom';

import Options from './components/Options.js';
import EnquiryForm from './components/Enquiry.js';
import OptionsPreview from './components/OptionsPreview.js';


function App() {
  return (
    <div className="App">
	{/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
	</header>*/}
	
	<Router>
		<Routes>
			<Route  path='/' element={<Options />} />
			<Route  path='/preview/:service' element={<OptionsPreview />} />
			<Route  path='/:service/enquiry' element={<EnquiryForm />} />
		</Routes>
	</Router>
	
    </div>
  );
}

export default App;
