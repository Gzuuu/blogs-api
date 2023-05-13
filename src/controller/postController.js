const { postService } = require('../service');
const { verifyToken } = require('../auth/authFunctions');

const postInsert = async (req, res) => {
    try {
        const { authorization } = req.headers;
        const id = verifyToken(authorization);

        const { type, message } = await postService
        .addBlogPost({ userId: id.data.id, ...req.body });
        if (type) {
            return res.status(400).json({ message });
        }
        res.status(201).json(message);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
};

const getPosts = async (_req, res) => {
    const posts = await postService.getAll();
    if (!posts) return res.status(400).json({ message: 'post not found' });
    return res.status(200).json(posts);
};

const getPostById = async (req, res) => {
    const id = Number(req.params.id);
    const { type, message } = await postService.getById(id);
    if (type) {
        return res.status(404).json({ message });
    }
    return res.status(200).json(message);
};

module.exports = {
    postInsert,
    getPosts,
    getPostById,
};
