import Head from 'next/head'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import BlogCard from '../components/BlogCard'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'


// export const getStaticProps = async () => {
//   // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   // const data = await res.json();

//   // const rawData = [
//   //   { id: 1, title: 'Test Title 1', category: 'science' },
//   //   { id: 2, title: 'Test Title 2', category: 'science' },
//   //   { id: 3, title: 'Test Title 3', category: 'science' },
//   //   { id: 4, title: 'Test Title 4', category: 'arts' },
//   //   { id: 5, title: 'Test Title 5', category: 'arts' },
//   //   { id: 6, title: 'Test Title 6', category: 'arts' }
//   // ]

//   return {
//     props: {
//       posts: rawData,
//     },

//   }
// }

// export async function getServerSideProps(context) {

//   const res = await fetch('https://muminmusolman.onrender.com/api/blogs');

//   const data = await res.json();

//   console.log(data?.blogs);

//   return {
//     props: {
//       posts: data?.blogs
//     }, // will be passed to the page component as props
//   }
// }



export default function Home({ posts }) {


  const { rawBlogs } = useSelector((state) => state?.blogs);


  return (
    <div>
      <Navbar />
      <h1 className="text-center mt-5 mb-5 py-3 px-3 text-blue-200">Blogs Page</h1>
      <hr />

      <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3  items-center mx-auto py-3 content-center w-full'>
        {rawBlogs?.map((post) => {
          return <BlogCard key={post.id} post={post} />
        })}
      </div>


    </div>
  )
}
