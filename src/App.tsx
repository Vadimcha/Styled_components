import React from 'react';
import './style.sass'
import Link from './Styled_components/Link/Link';
import NavBar from './Styled_components/Navigation/Navigation';

function App() {
    let NavbarTheme : ("light" | "dark") = "dark"
    const links = ["Whereas", "Prices", "Our History", "About Us", "Contacts"]
  return (
    <div className="App">
        <NavBar
            logo={"This is logo"}
            nav={links.map((link) => <Link content={link} href={"#"}/>)}
        />
    </div>
  );
}

export default App;
