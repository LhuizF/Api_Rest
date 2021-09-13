class HomeController {
    async index(req, res) {
        try {
            res.json('index');
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new HomeController();
