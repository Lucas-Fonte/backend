class HelloController {
  async index(req, res) {
    return res.json({ hello: 'dude'});
  }
}

export default new HelloController();