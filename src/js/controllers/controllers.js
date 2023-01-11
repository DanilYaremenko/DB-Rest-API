const db = require("../db/db.js");

const addItem = (req, res) => {
  const { name, description, category_id } = req.body;
  const query = "INSERT INTO pdapp_dataset (name, description, category_id) VALUES (?,?,?)";

  db.query(query, [name, description, category_id], (err, result) => {
    if (!err) {
      const message = `Data file with name:[${name}] was successfully added`;
      return res.status(200).json({ message });
    } else {
      return res.status(500).json(err);
    }
  });
};

const getItems = (req, res) => {
  const query = "SELECT * FROM pdapp_dataset";

  db.query(query, (err, result) => {
    if (!err) {
      return res.status(200).json({ result });
    } else {
      return res.status(500).json(err);
    }
  });
};

const getItem = (req, res) => {
  const id = req.params.id;
  const query = "SELECT * FROM pdapp_dataset WHERE id=?";

  db.query(query, [id], (err, result) => {
    if (result.length == 0) {
      const message = `No data file with id:[${id}]`;
      return res.status(404).json({ message });
    }
    if (!err) {
      return res.status(200).json({ result });
    } else {
      return res.status(500).json(err);
    }
  });
};

const deleteItem = (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM pdapp_dataset WHERE id=?";

  db.query(query, [id], (err, result) => {
    if (result.affectedRows == 0) {
      const message = `No data file with id:[${id}]`;
      return res.status(404).json({ message });
    }
    if (!err) {
      const message = `Data file with id:[${id}] was successfully deleted`;
      return res.status(200).json({ message });
    } else {
      return res.status(500).json(err);
    }
  });
};

const updateItem = (req, res) => {
  const id = req.params.id;
  const { name, description, category_id } = req.body;
  const query = "UPDATE pdapp_dataset SET name=?, description=?, category_id=? WHERE id=?";

  db.query(query, [name, description, category_id, id], (err, result) => {
    if (result.affectedRows == 0) {
      const message = `No data file with id:[${id}]`;
      return res.status(404).json({ message });
    }
    if (!err) {
      const message = `Data file with id:[${id}] successfully updated`;
      return res.status(200).json({ message });
    } else {
      return res.status(500).json(err);
    }
  });
};

module.exports = { addItem, getItem, getItems, deleteItem, updateItem };
