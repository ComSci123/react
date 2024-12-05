

function Button(){

    // SAMPLE 1
    // const handleClick = () => alert("OUCH!")

    // const handleClick2 = (name) => alert(`${name}, stop clicking me!`);

    // return(
    //     <button onClick={() => handleClick2("Men")}>Click Me🙄</button>

    // );



// SAMPLE 2
//     let count = 0;
    
//     const handleClick = (name) => {

//         if(count < 3){
//             count++;
//             alert(`${name}, you click me! ${count} time/s`);

//         }
//         else{
//             alert(`${name}, stop clicking me!`);
//         }
//     }
//     return(
//             <button onClick={() => handleClick("Men")}>Click Me🙄</button>
//     );



// SAMPLE 3
    const handleClick = (e) => e.target.textContent = "OUCH! 😤";

    return(
        <button onDoubleClick={(e) => handleClick(e)}>Click Me🙄</button>

    );

}

export default Button