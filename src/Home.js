// import useSate here 
import { useState } from 'react'; 
const Home = () => {
	const name1 ="ali";	
	const handclick = () =>{
		console.log("Hello, zaman");
	}

	// Defined variable for useStare here 
	const [name, setName] = useState('Ahmad');
	const handleClickAgain= (name) =>{
		// setName for useState here 
		setName('Karim');

	}

	return (

			<div className="home">

				<h3>Home component</h3>
				
				{name}
			
				<button onClick={()=>{
					handleClickAgain('Maria');
				}}>Click me again</button>

			</div>
		);

}

export default Home;