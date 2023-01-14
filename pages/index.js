import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import BlogCard from '../components/BlogCard'
import Navbar from '../components/Navbar'
import { useFetchBlogsQuery } from '../features/blogs/blogsApi'
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



export default function Home() {


  // const { rawBlogs } = useSelector((state) => state?.blogs);

  const { data: blogs } = useFetchBlogsQuery() || {};

  // const [blogs, setBlogs] = useState([]);

  // useEffect(() => {

  //   const getAllBlogs = async () => {
  //     const res = await fetch('http://localhost:3000/api/blogs/fetchBlogs')
  //     const blogs = await res.json();
  //     setBlogs(blogs);
  //   }

  //   getAllBlogs();

  // }, [])

  // if (blogs?.length > 0) {
  //   console.log(blogs);
  // }


  return (
    <div>
      <Navbar />
      <h1 className="text-center mt-5 mb-5 py-3 px-3 text-blue-200">Blogs Page</h1>
      <hr />

      <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3  items-center mx-auto py-3 content-center w-full'>
        {blogs?.map((post) => {
          return <BlogCard key={post.id} post={post} />
        })}
      </div>


    </div>
  )
}
