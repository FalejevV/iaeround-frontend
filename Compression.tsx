import imageCompression from 'browser-image-compression';

class Compression{
    options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true
    }

    async image(image:File){
        try {
            return imageCompression(image, this.options);
          } catch (error) {
            console.log(error);
        }
    }
}


export default  new Compression();