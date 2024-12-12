// --REACT HOOK {useState}--
import React, {useState} from 'react';


// function MyComponent(){
//      const [name, setName] = useState("Guest");
//      const[age, setAge] = useState(0);
//      const [isEmployed, setIsEmployed] = useState(false);

//      const updateName = () => {
//             setName("Spongebob");
//      }

//      const incrementAge = () => {
//             setAge(age + 1);
//      }
     
//      const decrementAge = () => {
//         setAge(age - 1);
//  }
//     const toggleEmployedStatus = () => {
//         setIsEmployed(!isEmployed);

//     }

//      return(
//             <div>
//                 <p>Name: {name}</p>
//                 <button onClick = {updateName} > Set Name</button>

//                 <p>Name: {age}</p>
//                 <button onClick = {incrementAge} > Increment Age</button>
//                 <button onClick = {decrementAge} > Decrement Age</button>
               
//                 <p>Name: {isEmployed ? "YES" : "NO"}</p>
//                 <button onClick = {toggleEmployedStatus} > Toggle Status</button>
               
               


//                 </div>
//      );

// }
// export default MyComponent


// --ONCHANGE--

function MyComponent(){
       const [name, setName] = useState("Guest");
       const [quantity, setQuantity] = useState(1);
       const [comment, setComment] = useState("");
       const [payment, setPayment] = useState("");
       const [shipping, setShipping] = useState("Delivery");

       function handleNameChange(event){
              setName(event.target.value);
       }

       function handleQuantityChange(event){
              setQuantity(event.target.value);
       }

       function handleCommentChange(event){
              setComment(event.target.value);
       }

       function handlePaymentChange(event){
              setPayment(event.target.value);
       }

       function handleShippingChange(event){
              setShipping(event.target.value);
       }



       return(
              <div>
                     <input value={name} onChange={handleNameChange} />
                     <p>Name: {name}</p>

                     <input value={quantity} onChange={handleQuantityChange} type= "number"/>
                     <p>Quantity: {quantity}</p>

                     <textarea value={comment} onChange={handleCommentChange} placeholder="Enter Delivery Instructions"/>
                     <p>Comment: {comment}</p>

                     <select value={payment} onChange={handlePaymentChange}>
                     <option value="">Select an Option</option>
                     <option value="Visa">Visa</option>
                     <option value="Master Card">Master Card</option>
                     <option value="Gift Card">Gift Card</option>
                     </select>
                     <p>Payment: {payment}</p>

                     <label>
                            <input type="radio" value="Pick Up" checked = {shipping === "Pick Up"} onChange={handleShippingChange} />
                            Pick Up
                     </label><br/>
                     <label>
                     <input type="radio" value="Delivery" checked = {shipping === "Delivery"} onChange={handleShippingChange} />
                            Delivery
                     </label>
                     <p>Shipping: {shipping}</p>




              </div>

       );

}
export default MyComponent