import React from 'react';
import './style.sass'
import Link from './Styled_components/Link/Link'

function App() {
    const links = ["Whereas", "Prices", "Our History", "About Us", "Contacts"]
  return (
    <div className="App">
        <div className="primeNav">
            { links.map((link) => <Link content={link} href={"#"}></Link>) }
        </div>

    </div>
  );
}

export default App;
