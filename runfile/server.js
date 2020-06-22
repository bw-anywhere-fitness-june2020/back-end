const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('./authenticate-middleware');
const authRouter = require('./auth-router');
const classRouter = require('./class-router');
const usersRouter = require('./users-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/class', authenticate, classRouter);
 server.use('/api/users', usersRouter);

module.exports = server;