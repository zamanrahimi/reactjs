// import useSate here 
import { useState } from 'react'; 
import BlogList from './BlogList';
const Home = () => {


	// Defined variable for useStare here 
	// 1. blog section - this data is passed to BlogList.js via Bloglist tag in section 2
	const [blogs, setBlogs] = useState([
			{title:'1. Afghanistan', desc:'Afghanistan is a good country', id:1},
			{title:'2. Tajikistan', desc:'Afghanistan is a good country too', id:2},
		]);

		const handelerDelete= (id) => {
			const newBlogs = blogs.filter(blog => blog.id !== id);
			setBlogs(newBlogs);
		}


	return (

			<div className="home">

				// This is commin from BlogList.js to pass data from section 1 to BlogList.js
				<BlogList blogs = {blogs}  handelerDelete={handelerDelete} />
			

			</div>
		);

}

export default Home;