const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

// Database
const db = require('./config/database');

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

// Generate initial RSS feed
const RSSService = require('./services/RSSService');
new RSSService().generateRSS();

// Start scheduler
const SchedulerService = require('./services/SchedulerService');
new SchedulerService().schedule();

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const categoryRouter = require('./routes/category');
const companyRouter = require('./routes/company');
const googleRouter = require('./routes/google');
const feedRouter = require('./routes/feed');
const settingRouter = require('./routes/setting');
const proxyRouter = require('./routes/proxy');

const app = express();

const corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};

app.use(cors(corsOption));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Setup Routes
app.use('/', indexRouter);
app.use('/feed', feedRouter);
app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/category', categoryRouter);
app.use('/company', companyRouter);
app.use('/auth/google', googleRouter);
app.use('/setting', settingRouter);
app.use('/proxy', proxyRouter);

module.exports = app;
