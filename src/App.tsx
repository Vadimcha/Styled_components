import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './style.sass'
import Link from './Styled_components/Link/Link';
import NavBar from './Styled_components/Navigation/Navigation';
import Modal from "./Styled_components/Modal/Modal";
import Button from "./Styled_components/Button/Button";
import Profile from './Styled_components/Profile/Profile';

function App() {
    const links = ["Whereas", "Prices", "Our History", "About Us", "Contacts"]

    const theme = useSelector((state : any) => state.toolkit.theme)
    const dispatch = useDispatch()
  return (
        <div className="App">
            <NavBar
                logo={"This is logo"}
                nav={links.map((link) => <Link content={link} href={"#"} theme={theme} />)}
                profile={<Profile name={"Dan"} img={"Dan_photo.webp"} />}
                theme={theme}
            />
            <Modal
                on_what={<Button content={"Click to see modal"} theme={theme} />}
            >
                <p>Hello this is aboba</p>
            </Modal>
        </div>
  );
}

export default App;
