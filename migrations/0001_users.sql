-- Migration number: 0001 	 2023-12-29T05:13:41.515Z
DROP TABLE IF EXISTS Users;
CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, company_name TEXT, user_name TEXT);