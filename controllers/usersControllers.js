import User from "../models/User.js";

const PER_PAGE = 4;

export const getUsers = async (req, res) => {
  try {
    // find -> [], skip, limit, countDocuments, sort

    // sort theo age của user

    // sort=age ASC, sort=-age DESC

    const page = Number(req.query.page || 1);

    const sortQuery = req.query.sort;

    const sortOrder = sortQuery === "-age" ? -1 : 1;

    const users = await User.find({})
      .sort({ age: sortOrder })
      .skip((page - 1) * PER_PAGE)
      .limit(PER_PAGE);

    res.status(200).json({
      message: "Get users successfully.",
      users: users,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const createUser = async (req, res) => {
  try {
    // create

    const { name, email, age = 1 } = req.validated.body;

    const newUser = await User.create({ name: name, email: email, age: age });

    res.status(201).json({ message: "Created successfully." });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const exists = await User.findById(id);

    if (!exists) return res.status(404).json({ message: "User not found." });

    // dieu kien | data thay doi | new: , runValidators: | callback

    const updateUser = await User.findByIdAndUpdate(id, req.validated.body);

    res.status(200).json({ message: "Updated successfully." });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const exists = await User.findById(id);

    if (!exists) return res.status(404).json({ message: "User not found." });

    await User.findByIdAndDelete(id);

    res.status(200).json({ message: "Deleted successfully." });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
