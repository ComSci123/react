// inline CSS
// function Button(){
   
//     const styles = {
//             backgroundColor:"hsl(200, 100%, 50%)",
//             color: "white",
//             padding: "10px 20px",
//             borderRadius: "5px",
//             border: "none",
//             cursor: "pointer",
//           }
//     return(
    
//      <button style={styles}>Click Me</button> //For Inline
       
    
//     );


// }
// export default Button


// Module CSS
import styles from './Button.module.css'
function Button(){
    return(
    
            <button className={styles.button}>Click Me</button> //For Module Css
        
        );
}

export default Button