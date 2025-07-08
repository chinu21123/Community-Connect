-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS gaon_saathi;
USE gaon_saathi;

-- Create users table for MySQL
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  contact VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('student', 'farmer', 'panchayat', 'general') NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create index on contact for faster lookups
CREATE INDEX idx_users_contact ON users(contact);

-- Create index on role for filtering
CREATE INDEX idx_users_role ON users(role);
