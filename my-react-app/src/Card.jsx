import ProfilePic from './assets/Profile Pic.jpg'


function Card(){
    return(
       <div className="card">
            <img className="card-img" src={ProfilePic} alt="profile picture"></img>
            <h2 className="card-title">ABI</h2>
            <p className="card-text">I am Nothing and I make Nothing</p>
       </div>
    );

}

export default Card
// import styles from './Card.module.css'
// import ProfilePic from '<div className="" />assets/Profile Pic.jpg'


// function Card(){
//     return(
//         <div className={styles.card}>
//         <img className={styles.card-img} src={ProfilePic} alt="profile picture"></img>
//         <h2 className={styles.card-title}>ABI</h2>
//         <p className={styles.card-text}>I am Nothing and I make Nothing</p>
//         </div>
//     );
    
// }

// export default Card