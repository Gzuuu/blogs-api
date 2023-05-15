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

const updatePost = async (req, res) => {
    const token = verifyToken(req.headers.authorization);

    const newPost = { 
        userId: Number(token.data.id),
        id: Number(req.params.id),
        title: req.body.title,
        content: req.body.content,
    };

    const { type, message } = await postService.updatePost(newPost);
    if (type && type === 'PERMISSION_DENIED') return res.status(401).json({ message });
    if (type) return res.status(400).json({ message });

    return res.status(200).json(message);
};

const deletePost = async (req, res) => {
    const token = verifyToken(req.headers.authorization);
    const userId = Number(token.data.id);
    const id = Number(req.params.id);

    const { type, message } = await postService.deletePost(userId, id);

    if (type && type === 'PERMISSION_DENIED') return res.status(401).json({ message });
    if (type) return res.status(404).json({ message });

    return res.sendStatus(204);
};

const findBySearchTerm = async (req, res) => {
    const term = req.query.q;
    const result = await postService.findBySearchTerm(term);

    if (!term) {
    const posts = await postService.getAll();
    return res.status(200).json(posts);
    }

    return res.status(200).json(result);
};

module.exports = {
    postInsert,
    getPosts,
    getPostById,
    updatePost,
    deletePost,
    findBySearchTerm,
};
