
// function List(){
    

    // const fruits  = [{id: 1, name: "apple", calories: 95}, 
    //                  {id: 2 ,name: "orange", calories: 45}, 
    //                  {id: 3, name: "banana", calories: 105}, 
    //                  {id: 4, name: "coconut", calories: 159}, 
    //                  {id: 5, name: "pineapple", calories: 75}];
   
    // --SORTING METHOD--
    // fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL ORDER
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL ORDER
    // fruits.sort((a, b) => a.calories - b.calories) //NUMERICAL ORDER
    // fruits.sort((a, b) => b.calories - a.calories) //REVERSE NUMERICAL ORDER
    
    // --FILTER METHOD--
    // LOW CALORIES FRUITS
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    
    // const listItems = lowCalFruits.map(lowCalFruits =>   <li key={lowCalFruits.id}>
                                                        //  {lowCalFruits.name}: &nbsp;
                                                        // <b>{lowCalFruits.calories}</b></li>);


    // HIGH CALORIES FRUITS
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
    
    // const listItems = highCalFruits.map(highCalFruits =>   <li key={highCalFruits.id}>
    //                                                      {highCalFruits.name}: &nbsp;
    //                                                     <b>{highCalFruits.calories}</b></li>);


    // ORIGINAL ARRAY
    // const listItems = fruits.map(fruit =>   <li key={fruit.id}>
    //                                                      {fruit.name}: &nbsp;
    //                                                     <b>{fruit.calories}</b></li>);


    // return(<ol>{listItems}</ol>);

// }
// export default List


// SAMPLE 2
import PropTypes from 'prop-types';

function List(props){
    const category = props.category;
    const itemList = props.items; 

    const listItems = itemList.map(item =>   <li key={item.id}>
                                                         {item.name}: &nbsp;
                                                        <b>{item.calories}</b></li>);
  return(
  <>
  <h3 className="list-category">{category}</h3><ol className="list-items">{listItems}</ol>
  </>
);
}
List.PropTypes ={
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                              name: PropTypes.string,
                                              calories: PropTypes.number
                                            }))
}

List.defaultProps = {
    category: "Category",
    items: [],
}
export default List