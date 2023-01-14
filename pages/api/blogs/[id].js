import Blog from "../../../models/blogModel.js";

import connectMongo from "../../../utils/connectMongo";

export default async function deleteBlog(req, res) {

    await connectMongo();

    console.log('Connected to MONGO DB Atlast');

    try {
        const id = req.params?.id;
        await Blog.findByIdAndDelete(id);
        res.status(200).send({ message: 'Blog Deleted Successfully' });
    } catch (error) {
        res.status(400).send({ message: 'Error In Deleting Blogs', error: error })
    }


}
