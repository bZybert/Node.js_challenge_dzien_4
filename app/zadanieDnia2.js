//Twój kod
const http = require('http');

const srv = http.createServer((req, res) => {
    const acceptLanguage = req.headers['accept-language'];
    const userAgent = req.headers['user-agent'];
    console.log('Informacje z przeglądarki:', userAgent);

    res.setHeader("Content-Type", "text/html; charset=utf-8")
    res.end(`Informacje z przeglądarki: + ${userAgent}`)
});


srv.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});