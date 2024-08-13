-- users table

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL UNIQUE,
  account_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO users (username, email, password, account_created) 
VALUES 
('user1', "user1@example.com", 12345, account_created), 
('user2', "user2@example.com", 123456, account_created), 
('user3', "user3@example.com", 12345, account_created) 

-- videos table

CREATE TABLE videos (
  id SERIAL PRIMARY KEY,
  tittle VARCHAR(200) NOT NULL,
  video_url VARCHAR(300) NOT NULL UNIQUE,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  likes INTEGER DEFAULT 0,
  dislikes INTEGER DEFAULT 0,
  uploading_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO videos (title, video_url, user_id, likes, dislikes, uploading_date) 
VALUES 
("react crash course", "https://www.youtube.com/watch?v=VJov5QWEKE4&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=12",
user_id, 0, 0, uploading_date)
("PostgresSQL", "https://www.youtube.com/watch?v=SpfIwlAYaKk", user_id, likes. dislikes, uploading_date)