const Task = require("../models/task.model");

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.status(200).json(tasks);
};

exports.createTask = async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    user: req.user.id
  });

  res.status(201).json(task);
};
