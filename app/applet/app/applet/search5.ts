import https from 'https';

const search = (query) => {
  const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
  const options = {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
    }
  };
  https.get(url, options, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
      const matches = data.match(/<a class="result__snippet[^>]*>(.*?)<\/a>/g);
      if (matches) {
        matches.slice(0, 5).forEach(m => console.log(m.replace(/<[^>]+>/g, '')));
      } else {
        console.log('No results');
      }
    });
  });
};

search('Р. Амартүвшин МУИС');
search('Ц. Мөнхцогт технологи');
