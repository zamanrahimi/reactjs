// import useSate here 
import { useState } from 'react'; 
import BlogList from './BlogList';
const Home = () => {


	// Defined variable for useStare here 
	// 1. blog section - this data is passed to BlogList.js via Bloglist tag in section 2
	const [blogs, setBlog] = useState([
			{title:'1. Afghanistan', desc:'Afghanistan is a good country', id:1},
			{title:'2. Tajikistan', desc:'Afghanistan is a good country too', id:2},
		]);


	return (

			<div className="home">

				// This is commin from BlogList.js to pass data from section 1 to BlogList.js
				<BlogList blogs = {blogs}/>
				<hr/>
				<BlogList blogs = {blogs.filter((blog)=>blog.id===2)}/>

			</div>
		);

}

export default Home;