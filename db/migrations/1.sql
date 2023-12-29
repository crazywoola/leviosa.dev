DROP TABLE IF EXISTS Users;
CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, company_name TEXT, user_name TEXT);
INSERT INTO Users (company_name, user_name) VALUES ('Company 1', 'User 1');
INSERT INTO Users (company_name, user_name) VALUES ('Company 2', 'User 2');
INSERT INTO Users (company_name, user_name) VALUES ('Company 3', 'User 3');