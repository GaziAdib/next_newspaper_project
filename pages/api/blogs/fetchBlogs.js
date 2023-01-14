// all the Blogs API Route for Backend
// http://localhost:3000/api/blogs/addBlog

import Blog from "../../../models/blogModel.js";

import connectMongo from "../../../utils/connectMongo";

export default async function fetchBlogs(req, res) {

    await connectMongo();

    console.log('Connected to MONGO DB Atlast');

    try {
        const blogs = await Blog.find({});
        res.status(200).send(blogs);
    } catch (error) {
        res.status(400).send({ message: 'Error In Fetching Blogs', error: error })
    }


}
