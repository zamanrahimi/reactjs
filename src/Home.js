// import useSate here 
import { useState } from 'react'; 
const Home = () => {


	// Defined variable for useStare here 
	const [blogs, setBlog] = useState([
			{title:'Afghanistan', desc:'Afghanistan is a good country', id:1},
			{title:'Tajikistan', desc:'Afghanistan is a good country toot', id:2},
		]);


	return (

			<div className="home">

				<h3>Home component</h3>
				{ blogs.map( (blog) => (

					<div key={blog.id}>
					<h2>{blog.title}</h2>
					<h2>{blog.desc}</h2>
					</div>

					))}

			</div>
		);

}

export default Home;