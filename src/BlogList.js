const BlogList = ({blogs, handelerDelete}) =>{


	return(

			<div className="blog-list">

				{ blogs.map( (blog) => (

					<div key={blog.id}>
					<h2>{blog.title}</h2>
					<h2>{blog.desc}</h2>

					<button onClick={ ()=> handelerDelete(blog.id)}>  Delete </button>

					</div>

					))}


			</div>

		);


}

export default BlogList;