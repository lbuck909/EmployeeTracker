const express = require('express');
const inquirer = require('inquirer');
const db = require('./db/connection');
const mysql = require('mysql');
const PORT = process.env. PORT || 3001;
const app = express();
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default repsonse for an error request
app.use((req, res) => {
  res.status(404).end();
})