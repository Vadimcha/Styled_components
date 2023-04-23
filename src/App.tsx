import React from 'react';
import './style.sass'
import Button from './Styled_components/Button/Button';
import Link from './Styled_components/Link/Link';

function App() {
    const links = ["Whereas", "Prices", "Our History", "About Us", "Contacts"]
  return (
    <div className="App">
        <div className="primeNav">
            { links.map((link) => <Button fz={"2em"} theme={"dark"} content={link} />) }
        </div>
        <div className="primeNav" style={{ backgroundColor: "black" }}>
            { links.map((link) => <Link fz={"2em"} href={"#"} theme={"dark"} content={link} />) }
        </div>
    </div>
  );
}

export default App;
