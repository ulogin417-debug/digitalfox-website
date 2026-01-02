import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const ogDir = path.join(process.cwd(), 'public', 'images', 'og');

if (!fs.existsSync(ogDir)) {
  console.error('No existe el directorio', ogDir);
  process.exit(1);
}

const svgs = fs.readdirSync(ogDir).filter(f => f.endsWith('.svg'));

const sizes = [
  { suffix: '', width: 1200, height: 630 },
  { suffix: '-thumb', width: 600, height: 315 },
  { suffix: '-small', width: 400, height: 210 },
];

Promise.all(svgs.map(async (file) => {
  const basename = path.basename(file, '.svg');
  const input = path.join(ogDir, file);
  for (const s of sizes) {
    const outPng = path.join(ogDir, `${basename}${s.suffix}.png`);
    const outWebp = path.join(ogDir, `${basename}${s.suffix}.webp`);
    try {
      const pipeline = sharp(input).resize(s.width, s.height, { fit: 'cover' });
      await pipeline.png({ quality: 90 }).toFile(outPng);
      console.log('Generado PNG:', outPng);
      await pipeline.webp({ quality: 90 }).toFile(outWebp);
      console.log('Generado WebP:', outWebp);
    } catch (err) {
      console.error('Error generando miniaturas para', basename, err);
    }
  }
}))
.then(() => console.log('Todas las miniaturas han sido generadas.'))
.catch(err => console.error(err));
