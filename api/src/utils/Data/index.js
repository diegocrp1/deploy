const fs = require('fs');
const path = require('path');

function getImagesFromFolder(folderPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        reject(err);
        return;
      }
      const images = [];

      files.forEach((filename) => {
        const filePath = path.join(folderPath, filename);
        // Leer el archivo como un buffer
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.error('Error al leer el archivo:', err);
                return;
            }
            
            const imageObject = {
                name: filename,
                data: data.toString('base64') // Convierte el buffer a una cadena Base64
            };
            
            images.push(imageObject);
            // console.log(images)

          if (images.length === files.length) {
            resolve(images);
          }
        });
      });
    });
  });
}

// Uso de la función con async/await
async function main() {
    const imagesFolderPath = path.join(__dirname, '../pictures');
  try {
    const images = await getImagesFromFolder(imagesFolderPath);
    return images
  } catch (error) {
    console.error('Error al obtener las imágenes:', error);
  }
}

module.exports={main}