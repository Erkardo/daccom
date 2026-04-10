import https from 'https';

https.get('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=ihotel.mn&utf8=&format=json', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => console.log(data));
});
