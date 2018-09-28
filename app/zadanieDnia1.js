//Twój kod
const http = require('http');

const srv = http.createServer((req, res) => {
    const acceptLanguage = req.headers['accept-language'];
    console.log('Preferowane języki:', acceptLanguage);

    res.setHeader("Content-Type", "text/html; charset=utf-8")
    res.end(`Hello, World from back-end!`)
});


srv.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});