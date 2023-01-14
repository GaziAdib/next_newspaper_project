import { useDeleteBlogMutation } from "../features/blogs/blogsApi"

const BlogCard = ({ post }) => {

    const [deleteBlog, { isError, isLoading, error }] = useDeleteBlogMutation(post?._id) || {}

    const deleteBlogHandler = (id) => {
        deleteBlog(id);
    }


    return (
        <div class="my-2 py-2 px-4 mx-2 text-center w-full">
            <div class="block p-6 rounded-lg shadow-lg bg-white border-b-4 border-l-4 border-green-400 w-full">
                <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                <p class="text-gray-700 text-base mb-4">
                    {post?.title}
                </p>
                <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                <button onClick={() => deleteBlogHandler(post?._id)} type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </div>
        </div>
    )
}

export default BlogCard