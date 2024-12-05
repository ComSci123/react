import PropTypes from 'prop-types';
function UserGreeting(props){
    // Example 1
    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Please Log In to continue</h2>
    // }


    // Example 2
     // return(props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username}</h2> : 
                             

    // Example 3
    const welcomeMessage =  <h2 className="welcome-message">
                             Welcome {props.username}
                            </h2> 
    const loginPrompt =     <h2 className="login-prompt">
                            Please Log In to continue
                            </h2>
    return(props.isLoggedIn ? welcomeMessage : loginPrompt);
   
}
UserGreeting.prototypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting

