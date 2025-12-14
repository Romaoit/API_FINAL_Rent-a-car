const Reserva = require("../models/Reserva");

exports.create = async (req, res) => {
  const reserva = await Reserva.create(req.body);
  res.status(201).json(reserva);
};

exports.findAll = async (req, res) => {
  res.json(await Reserva.find());
};

exports.findOne = async (req, res) => {
  res.json(await Reserva.findById(req.params.id));
};

exports.update = async (req, res) => {
  const reserva = await Reserva.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(reserva);
};

exports.remove = async (req, res) => {
  await Reserva.findByIdAndDelete(req.params.id);
  res.status(204).send();
};
