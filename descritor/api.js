const VISIONBOT_API_BASE_URL = "https://visionbot.ru/apiv2";

async function getLanguages() {
    try {
        const response = await fetch(`${VISIONBOT_API_BASE_URL}/get_languages.php`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

async function prepareImageData(formData) {
    try {
        const response = await fetch(`${VISIONBOT_API_BASE_URL}/in.php`, {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

async function getResult(id) {
    try {
        const response = await fetch(`${VISIONBOT_API_BASE_URL}/res.php?id=${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

async function checkStatus(id) {
    try {
        const response = await fetch(`${VISIONBOT_API_BASE_URL}/res.php?id=${id}`);
        const { status } = await response.json();
        return { status, id };
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

async function deleteRequest(id) {
    try {
        const response = await fetch(`${VISIONBOT_API_BASE_URL}/res.php?id=${id}`, {
            method: "DELETE"
        });

        if (response.status === 200) {
            return { status: "ok", message: "Request deleted" };
        } else {
            const data = await response.json();
            return { status: "error", message: data.message };
        }
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}
