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

module.exports = {
    postInsert,
};
