const express = require('express');
const app = express();
const colors = require('colors');
const fastBomber = require('./modules/sms.js');
const keyx = 'XXXXX';

app.get('/', (req, res) => {
    res.send('Fast SMS Bomber Başlatıldı By Can<br> Github: github.com/fastuptime');
});

app.get('/api', (req, res) => {
    let {
        no,
        key,
        amount
    } = req.query;
    if (!no || !key || !amount) return res.json({ error: true, message: 'Lütfen Tüm Alanları Doldurunuz api?no=5551234567&key=XXXXX&amount=10' });
    if (key != keyx) return res.json({ error: true, message: 'Lütfen Tüm Alanları Doldurunuz api?no=5551234567&key=XXXXX&amount=10' });
    if (no.length != 10) return res.json({ error: true, message: 'Telefon Numarasi 10 Haneli Olmalidir. Ex: 5401234521' });
    if (isNaN(amount)) return res.json({ error: true, message: 'Lütfen Bir Rakam Giriniz' });
    if (amount.length == 0) return res.json({ error: true, message: 'Miktar Giriniz' });
    fastBomber(no, amount);
    res.json({ error: false, message: 'SMS Gonderiliyor...' });
});

app.listen(80, () => {
    console.log(`Fast SMS Bomber Started`.green);
});