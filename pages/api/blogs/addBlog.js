// all the Blogs API Route for Backend
// http://localhost:3000/api/blogs/addBlog

import Blog from "../../../models/blogModel.js";

import connectMongo from "../../../utils/connectMongo";

export default async function addBlog(req, res) {

    await connectMongo();

    console.log('Connected to MONGO DB Atlast');

    try {

        const { title, category, description, isPublished } = req?.body;

        if (title !== '' || category !== '' || description != '') {
            const newBlog = await Blog.create({
                title,
                category,
                description
            })
            res.status(201).send(newBlog);
        }

    } catch (error) {
        res.status(400).send({ message: 'Error In Adding Blog', error: error })
    }


}



// const createBlog = async (req, res) => {

//     const { blogAuthorId, blogAuthor, blogTitle, blogCategory, blogDescription } = req.body

//     try {
//         const createdBlog = await Blog.create({
//             blogAuthorId,
//             blogAuthor,
//             blogTitle,
//             blogCategory,
//             blogDescription
//         })

//         res.status(201).json(createdBlog);
//     } catch (error) {
//         res.status(404).json({ message: error })
//     }

// }