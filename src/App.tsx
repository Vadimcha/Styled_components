import React from 'react';
import './style.sass'
import Button from './Styled_components/Button/Button';

function App() {
    const links = ["Whereas", "Prices", "Our History", "About Us", "Contacts"]
  return (
    <div className="App">
        <div className="primeNav">
            { links.map((link) => <Button content={link} />) }
        </div>

    </div>
  );
}

export default App;
