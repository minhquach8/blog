const newsRouter = require('./newsRoute');
const siteRouter = require('./siteRoute');
const courseRouter = require('./coursesRoute');

function route(app) {
	app.use('/courses', courseRouter);
	app.use('/news', newsRouter);
	app.use('/', siteRouter);
}

module.exports = route;
