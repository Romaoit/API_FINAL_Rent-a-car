const Carro = require("../models/Carro");

exports.create = async (req, res) => {
    const carro = await Carro.create(req.body);
    res.status(201).json(carro);
};

exports.findAll = async (req, res) => {
    res.json(await Carro.find());
};

exports.findOne = async (req, res) => {
    res.json(await Carro.findById(req.params.id));
};

exports.update = async (req, res) => {
    res.json(await Carro.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

exports.remove = async (req, res) => {
    await Carro.findByIdAndDelete(req.params.id);
    res.status(204).send();
}




