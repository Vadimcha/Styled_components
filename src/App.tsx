import React from 'react';
import './style.sass'
import Link from './Styled_components/Link/Link';
import NavBar from './Styled_components/Navigation/Navigation';

function App() {
    const links = ["Whereas", "Prices", "Our History", "About Us", "Contacts"]
  return (
    <div className="App">
        {/*<div className="primeNav">*/}
        {/*    {links.map((link) => <Link content={link} href={"#"}/>)}*/}
        {/*</div>*/}
        {/*<div className="primeNav">*/}
        {/*    {links.map((link) => <Button content={link} onclick={()=>{}}/>)}*/}
        {/*</div>*/}
        <NavBar
            logo={<h2 style={{ cursor: "pointer" }}>This is logo</h2>}
            nav={links.map((item) => <Link theme={"dark"} content={item} href={"#"}/>)}
            theme={"dark"}
        />
        <h1>Hello world!</h1>
    </div>
  );
}

export default App;
