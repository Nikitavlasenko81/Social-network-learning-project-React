import './App.css';
import React from "react";
import "./App.css";
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App(props) {
    return (
<Container>
    <Row className="header">
        <Col>
            <Header/>
        </Col>
    </Row>
    <Row className={"mt-3"}>
        <Col sm={2}>
            <Navigation/>
        </Col>
        <Col sm={10} className="page">
            <Route path="/dialogs" render={() => <DialogsContainer
                store={props.store}
            />}/>
            <Route path="/profile" render={() => <Profile
                store={props.store}
            />}/>
            <Route path="/users" render={() => <UsersContainer/>}/>
            <Route path="/news" component={News}/>
            <Route path="/music" component={Music}/>
        </Col>
    </Row>
</Container>

    );
}

export default App;
