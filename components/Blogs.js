

// export const getStaticProps = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await res.json();

//     return {
//         props: {
//             posts: data,
//         },

//     }
// }


// const Blogs = ({ posts }) => {
//     return (
//         <div>
//             <h1>Blogs Page</h1>
//             <hr />

//             <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 items-center mx-auto py-3 content-center'>
//                 {posts?.map((post) => {
//                     return <BlogCard key={post.id} post={post} />
//                 })}
//             </div>




//         </div>
//     )
// }

// export default Blogs