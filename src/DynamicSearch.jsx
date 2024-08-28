import { useState } from 'react'


function DynamicSearch() {
	
const fruits = [
"pear",
"pineapple",
"apple",
"mango",
"orange",
"fig"
];

const [fruitsData, setFruitsData] = useState(fruits);
const [searchText, setSearchText] = useState("");

const handleInputChange (event) => {
setSearchText(event.target.value);
console.log(searchText);
}

return(
		<>
	      <div>
	        <input type="text" placeholder="search..." onChange={handleInputChange}/>
	        {fruitsData.map((fruit) => {
	          return <p>{fruit}</p>
	        })}
	      </div>
	      
	    </>
	)
}

export default DynamicSearch