const Cliente = require("../models/Cliente");

exports.create = async (req, res) => {
    res.status(201).json(await Cliente.create(req.body));
};

exports.findAll = async (req, res) => {
    res.json(await Cliente.find());
};

exports.findOne = async (req, res) => {
    res.json(await Cliente.findById(req.params.id));
};

exports.update = async (req, res) => {
    res.json(await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

exports.remove = async (req, res) => {
    await Cliente.findByIdAndDelete(req.params.id);
    res.status(204).send();
};
