const { createToken } = require('../auth/authFunctions');
const { userService } = require('../service');

const userLogin = async (req, res) => {
    const { type, message } = await userService.findByEmail(req.body);
    if (type) return res.status(400).json({ message });

    const { password: _password, ...withoutPassword } = message.dataValues;

    const token = createToken(withoutPassword);
    return res.status(200).json({ token });
};

const userCreate = async (req, res) => {
    const { type, message } = await userService.newUser(req.body);
    if (type) return res.status(409).json({ message });

    const { password: _password, ...withoutPassword } = message.dataValues;
    const token = createToken(withoutPassword);
    return res.status(201).json({ token });
};

const getAll = async (_req, res) => {
    const { message } = await userService.getUsers();
    return res.status(200).json(message);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await userService.getUserById(Number(id));
    if (type) return res.status(404).json({ message });
    return res.status(200).json(message);
};

module.exports = {
    userLogin,
    userCreate,
    getAll,
    getById,
};