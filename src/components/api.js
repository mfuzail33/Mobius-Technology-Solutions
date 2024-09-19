import axios from 'axios';

export async function postImg(file) {
    const bodyFormData = new FormData();
    bodyFormData.append("files", file);

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };

    try {
        const response = await axios.post('https://uploads.padelmates.co/index.php', bodyFormData, config);
        return response?.data?.imageInfo?.completeUrl;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
}