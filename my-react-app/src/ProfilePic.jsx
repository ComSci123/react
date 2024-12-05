
function ProfilePic(){
    // CLICK EVENTS
    // SAMPLE 1 
    const imageUrl = './src/assets/Profile Pic.jpg';
    const handleClick = () => alert("OUCH!😤");
    return(
    <img className="my-profile" onClick = {handleClick} src={imageUrl}></img>

    );

    // SAMPLE 2 - EVENT OBJECT
    // const imageUrl = './src/assets/Profile Pic.jpg';
    // const handleClick = (e) => e.target.style.display = "none";
    // return(
    //     <img className="my-profile" onClick= {(e) => handleClick(e)} src={imageUrl}></img>

    // );

}

export default ProfilePic