class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send(req.params);
    }
}

module.exports = new NewsController();
