import React from 'react';
import './style.sass'
import Link from './Styled_components/Link/Link';
import NavBar from './Styled_components/Navigation/Navigation';

function App() {
    const links = ["Whereas", "Prices", "Our History", "About Us", "Contacts"]
  return (
    <div className="App">
        <NavBar
            logo={<h2 style={{ cursor: "pointer", color: "white" }}>This is logo</h2>}
            nav={links.map((item) => <Link theme={"light"} content={item} href={"#"}/>)}
            theme={"light"}
        />
        <h1>Hello world!</h1>
    </div>
  );
}

export default App;
