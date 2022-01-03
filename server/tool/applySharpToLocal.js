const sharp = require('sharp');
const fs = require('fs');
const fsPromises = fs.promises;
const glob = require('glob');
const path = require('path');

const ORIGINAL_IMG_DIR = glob.sync('**/public/images/'); // 元画像を格納しているディレクトリ
// const ORIGINAL_IMG_DIR = glob.sync('**/public/images/profiles/'); // 元画像を格納しているディレクトリ

/**
 * 画像をリサイズしてリサイズ後のディレクトリに格納する
 * @param {string} imgPath リサイズ前の画像パス
 * @param {string} outputFilePath リサイズ後の画像パス
 */
function createResizeImage(imgPath, outputFilePath) {
  sharp(imgPath)
  .resize({
    fit: 'outside',
    height: 644, // profile 252
    width: 1148, // profile 252
  })
  .toFormat('webp', { quality: 90 })
  .toFile(outputFilePath, (err) => {
    if ( err ) console.error(err);
    return;
  });
}

ORIGINAL_IMG_DIR.forEach((dirName) => {
  const resolvedPath = path.resolve(dirName);
  fsPromises.readdir(resolvedPath)
    .then((files) => {
      console.log(files);
      files.forEach((file) => {
        createResizeImage(resolvedPath + '/' + file, resolvedPath + '/' + file.replace('jpg', 'webp'));
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
});