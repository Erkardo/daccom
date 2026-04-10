import https from 'https';
import fs from 'fs';
import path from 'path';

const downloadImage = (url, filename) => {
  https.get(url, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      return downloadImage(res.headers.location, filename);
    }
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const match = data.match(/<meta property="og:image" content="([^"]+)"/);
      if (match && match[1]) {
        const imageUrl = match[1];
        https.get(imageUrl, (imgRes) => {
          const file = fs.createWriteStream(filename);
          imgRes.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${filename}`);
          });
        }).on('error', (err) => console.error(err));
      } else {
        console.log(`Could not find image in ${url}`);
      }
    });
  }).on('error', (err) => console.error(err));
};

fs.mkdirSync('./public', { recursive: true });
downloadImage('https://photos.app.goo.gl/bodJ5hqXXNcY2tL37', './public/amartuvshin.jpg');
downloadImage('https://photos.app.goo.gl/egcYKjmiWPrL7B6TA', './public/erdenebat.jpg');
downloadImage('https://photos.app.goo.gl/wnT2undFEGwHpXjZ6', './public/munkhtsogt.jpg');
