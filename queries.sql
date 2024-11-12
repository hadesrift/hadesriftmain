CREATE DATABASE gaming_website;

USE gaming_website;

CREATE TABLE content (
  id INT AUTO_INCREMENT PRIMARY KEY,
  type VARCHAR(50),       -- text, image, or url
  content TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
