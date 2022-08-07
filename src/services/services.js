import { db, collection, getDocs } from './firebase';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

class Services {

    async getProjects () {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projects = [];
        querySnapshot.forEach((doc) => {
            projects.push(doc.data());
        });
        return projects;
    };

    loadAndCollectImages (url, images) {
        var converImageElToDataEl = this.converImageElToDataEl;
        return new Promise( (resolve, reject) => {
            const storage = getStorage();
            getDownloadURL( ref(storage, url) ).then((dwUrl) => {
                const img = new Image();
                img.onload = () => {
                    images.push(img);
                    resolve();
                }
                img.setAttribute('src', dwUrl);
            }).catch( (err) => reject()  );
        });
    };

    async getProjectImages (urls) {
        const images = [];
        for (var url of urls) {
           await this.loadAndCollectImages(url, images);
        }
        if (images.length === urls.length) {
            return(images);
        } else {
            return(false);
        }
    };
};
const services = new Services();

export default services;
