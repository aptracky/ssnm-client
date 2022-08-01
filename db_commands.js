const Commands = {
  CREATE:
    "INSERT INTO device (name, status, ip, lastUpdated) VALUES($1, $2, $3, $4) RETURNING *",
  SELECT_ALL: "SELECT * FROM device",
  SELECT_ONE: "SELECT * FROM device WHERE id=$1",
  UPDATE:
    "UPDATE device SET (name, status, ip, lastUpdated) = $1, $2, $3, $4 WHERE id=$5",
  DELETE: "DELETE FROM device WHERE id = $1",
};

module.exports = Commands;
