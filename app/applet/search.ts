import https from 'https';

const search = (query) => {
  const url = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json`;
  https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => console.log(data));
  });
};

search('ihotel.mn founder');
