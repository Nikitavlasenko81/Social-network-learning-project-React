import React from 'react';
import Header from "./Header";
import {getAuthUserData} from "../../Redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.getAuthUserData();
    }
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}
let mapStateToProps = (state) =>{
    return({
            isAuth: state.auth.isAuth,
            login: state.auth.login,
            id: state.auth.id,
        }
    )

}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)