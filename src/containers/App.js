import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Router } from "react-router-dom";
import history from "../routes/History";
import Routes from "../routes/Routes";
import Loader from "../components/Loader/Loader";
import "./App.scss";
import "react-notifications-component/dist/theme.css";
import { connect } from "react-redux";


class App extends React.Component {
  state = {
    navClass:true,
  };
  // App contains routes and also wrapped with snackbar and intl for localization
 

    componentDidMount=()=>{
      if (history.location.pathname === "/") {
        history.push("/login");
      }
  
      if (
        !(
          (localStorage.getItem("isLoggedIn") && localStorage.getItem("token")) 
           || history.location.pathname === "/login"
        )
      ) {
       history.push("/login");
      }
      if(localStorage.getItem("isLoggedIn") && localStorage.getItem("token") && (history.location.pathname === "/login" || history.location.pathname === "/")) {
        history.push("/dashboard")
       }
    }

    componentDidUpdate(prevProps) {
     
    }


  render() {
 
    const { pathname } = history.location;
     const { loading } = this.props;
    
    let showHeader = false;
    // console.log(history)
   
    if (
      pathname !== "/login"
    ) {
     
      showHeader = true;
    }

    if (
      pathname === "/" || pathname === "/login"
    ) {
     
      showHeader = false;
    }
    return (
    
        <div>

          {loading ? <Loader /> : null}
          
          <Router history={history}>
            <div className="mainPage">
            <div id={
             showHeader
                ? this.state.navClass ? "content": "content-toggle"
                : "login"
            }>
              {showHeader ? <Navbar /> : null}
              <Routes />
            </div>
            </div>
          </Router>
        </div>
      // </IntlProvider>
    );
  }
}

const mapStateToProps = ({ loading }) => ({
  loading,
});

export default connect(mapStateToProps, null)(App);