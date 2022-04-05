// import useSate here 
import { useState } from 'react'; 
const Home = () => {

	const handclick = () =>{
		console.log("Hello, zaman");
	}

	// Defined variable for useStare here 
	const [name, setName] = useState('Ahmad');
	const [age, setAge] = useState(30);
	const handleClickAgain= (name) =>{
		// setName for useState here 
		setName('Karim');
		setAge(40);

	}

	return (

			<div className="home">

				<h3>Home component</h3>

				{name} is { age } years aold
			
				<button onClick={()=>{
					handleClickAgain('Maria');
				}}>Click me again</button>

			</div>
		);

}

export default Home;