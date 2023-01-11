// all the Blogs API Route for Backend
// http://localhost:3000/api/blogs/addBlog

import Blog from "../../../models/blogModel";

import connectMongo from "../../../utils/connectMongo";

export default async function addBlog(req, res) {

    const { title, category, description, isPublished } = req.body;

    await connectMongo();

    console.log('Connected to MONGO DB Atlast');

    try {

        const newBlog = await Blog.create({
            title,
            category,
            description,
            isPublished
        })

        res.status(201).send(newBlog);

    } catch (error) {
        res.status(400).send({ message: 'Error In Adding Blog', error: error })
    }


}
