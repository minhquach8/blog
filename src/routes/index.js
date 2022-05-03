const newsRouter = require('./newsRoute');
const siteRouter = require('./siteRoute');
const courseRouter = require('./coursesRoute');
const meRouter = require('./meRoute');

function route(app) {
    app.use('/me', meRouter);
    app.use('/courses', courseRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
