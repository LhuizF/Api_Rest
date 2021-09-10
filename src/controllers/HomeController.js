class HomeController {
    async index(req, res) {
        try {
            res.json('Home');
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new HomeController();
