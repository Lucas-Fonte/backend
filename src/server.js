import app from './app';

const port = process.env.PORT || 3333;
app.listen(port);
console.log('This is working on ' + port);