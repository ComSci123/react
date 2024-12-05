// --SAMPLE--1
// import Header from './Header.jsx'
// import Footer from './Footer.jsx';
// import Food from './Food.jsx';



// function App() {
//     return(
//         <> 
       
//         <Header/>
//         <Food/>
//         <Footer/> 
       
//         </>

//         );
// }

// export default App


// SAMPLE 2 - CARD
// import Card from './Card.jsx'


// function App(){
//     return(
//         <>
//         <Card/>

//         </>

//     );
// }

// export default App


// SAMPLE 2 - BUTTON
// import Button from './Button/Button.jsx'

// function App(){
//     return(
//     <>
//         <Button/>
       
//     </>


//     );


// }
// export default App


// SAMPLE 3 - USING PROPS
// import Students from './Students.jsx';

// function App(){
//     return(
//         <>
//         <Students name = "Abi" age = {25} isStudent = {true}/>
//         <Students name = "Abby" age = {24} isStudent = {false}/>
//         <Students name = "Gyle" age = {16} isStudent = {false}/>
//         <Students name = "Acckkk" age = {25} isStudent = {true}/>
//         <Students name = "Larry"/>
//         </>

//     );


// }

// export default App

// SAMPLE 4 - CONDITIONAL FORMATTING
// import UserGreeting from './UserGreeting.jsx'

// function App(){
//     return(
//     <>
//     <UserGreeting isLoggedIn={true} username ="Abi"/>
//     </>
//     );

// }
// export default App


// SAMPLE 5 - ORDERED LIST 
// import List from './List.jsx'
// function App(){

        // const fruits  = [{id: 1, name: "apple", calories: 95}, 
        //                  {id: 2 ,name: "orange", calories: 45}, 
        //                  {id: 3, name: "banana", calories: 105}, 
        //                  {id: 4, name: "coconut", calories: 159}, 
        //                  {id: 5, name: "pineapple", calories: 75}];
        

        // const vege  =   [{id: 6, name: "eggplant", calories: 66}, 
        //                  {id: 7 ,name: "mushroom", calories: 81}, 
        //                  {id: 8, name: "beans", calories: 100}, 
        //                  {id: 9, name: "lady's finger", calories: 59}, 
        //                  {id: 10, name: "bittergourd", calories: 30}];
        // return(    
        //     <>
        //     <List items={fruits} category = "Fruits"/>
        //     <List items={vege} category = "Vegetables"/>
        //     </>
        //        );


            // const fruits  = [{id: 1, name: "apple", calories: 95}, 
            //                 {id: 2 ,name: "orange", calories: 45}, 
            //                 {id: 3, name: "banana", calories: 105}, 
            //                 {id: 4, name: "coconut", calories: 159}, 
            //                 {id: 5, name: "pineapple", calories: 75}];


            // const vege  =   [{id: 6, name: "eggplant", calories: 66}, 
            //                 {id: 7 ,name: "mushroom", calories: 81}, 
            //                 {id: 8, name: "beans", calories: 100}, 
            //                 {id: 9, name: "lady's finger", calories: 59}, 
            //                 {id: 10, name: "bittergourd", calories: 30}];
            // return(    
            //         <>
            //         {/* Length Null */}
            //         {/* {fruits.length > 0 ?<List items={fruits} category = "Fruits"/> : null}
            //         {vege.length > 0 ? <List items={vege} category = "Vegetables"/> : null} */}
                    
            //         {/* && Logical Operator */}
            //         {fruits.length > 0 && <List items={fruits} category = "Fruits"/>}
            //         {vege.length > 0 && <List items={vege} category = "Vegetables"/> }
                     
                    
            //         </>
            //             );



// }
// export default App


// import Button from './Button.jsx'
import ProfilePic from './ProfilePic.jsx';
function App(){

    return(
        <>
        {/* <Button/> */}
        <ProfilePic/>
        
        </>
    );

}
export default App

