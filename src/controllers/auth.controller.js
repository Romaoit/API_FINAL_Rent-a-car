const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { nome, email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const Usuario = await Usuario.create({
    nome,
    email,
    password: hash
  });

  res.status(201).json(Usuario);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const Usuario = await Usuario.findOne({ email });
  if (!Usuario) return res.status(401).json({ error: "Usuário não encontrado" });

  const valid = await bcrypt.compare(password, Usuario.password);
  if (!valid) return res.status(401).json({ error: "Senha inválida" });

  const token = jwt.sign(
    { id: Usuario._id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token });
};
