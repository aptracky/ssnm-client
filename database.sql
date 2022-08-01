/*Create Database*/
CREATE DATABASE ssnm;

CREATE TABLE device(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    status BOOLEAN DEFAULT False,
    ip VARCHAR(255),
    lastUpdated TIMESTAMP
);


/*Commands for Database*/
INSERT INTO device (name, status, ip, lastUpdated) VALUES($1, $2, $3, $4) RETURNING *

SELECT * FROM device

SELECT * FROM device WHERE id=$1

UPDATE device SET name = $1 WHERE id=$2

DELETE FROM device WHERE id = $1