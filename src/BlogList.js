const BlogList = (props) =>{
	const blogs = props.blogs;

	return(

			<div className="blog-list">

				{ blogs.map( (blog) => (

					<div key={blog.id}>
					<h2>{blog.title}</h2>
					<h2>{blog.desc}</h2>
					</div>

					))}


			</div>

		);


}

export default BlogList;