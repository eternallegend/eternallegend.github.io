async function getAvailableLanguages() {
    try {
        const response = await fetch('https://visionbot.ru/apiv2/get_languages.php');
        const data = await response.json();
        return data.languages;
    } catch (error) {
        console.error('Erro ao obter idiomas:', error);
        return [];
    }
}

async function recognizeImage(formData) {
    try {
        const response = await fetch('https://visionbot.ru/apiv2/in.php', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao reconhecer imagem:', error);
        return { status: 'error' };
    }
}

async function getResult(id) {
    try {
        const response = await fetch(`https://visionbot.ru/apiv2/res.php?id=${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao obter resultado:', error);
        return { status: 'error' };
    }
}
