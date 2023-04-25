import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './style.sass'
import Link from './Styled_components/Link/Link';
import NavBar from './Styled_components/Navigation/Navigation';

function App() {
    const links = ["Whereas", "Prices", "Our History", "About Us", "Contacts"]
    const theme = useSelector((state : any) => state.toolkit.theme)
    const dispatch = useDispatch()
  return (
        <div className="App">
            <NavBar
                logo={"This is logo"}
                nav={links.map((link) => <Link content={link} href={"#"} theme={theme} />)}
                theme={theme}
            />
        </div>
  );
}

export default App;
