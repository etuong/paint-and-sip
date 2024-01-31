import fs from 'fs'
import path from 'path'

export default (req, res) => {
  const dirRelativeToPublicFolder = 'paintings'
  const dir = path.resolve('./public', dirRelativeToPublicFolder);
  const categories = fs.readdirSync(dir);
  const map = new Map();
  categories.map(category => {
    const categoryPath = path.join(dir, category);
    const paintings = fs.readdirSync(categoryPath);
    map.set(category, paintings.map(painting => `/${dirRelativeToPublicFolder}/${category}/${painting}`));
  })
  res.statusCode = 200
  res.json(Object.fromEntries(map));
}