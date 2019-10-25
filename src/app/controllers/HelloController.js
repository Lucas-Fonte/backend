class HelloController {
  async index(req, res) {
    return res.send('<h1>Hello</h1>');
  }
}

export default new HelloController();