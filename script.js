const imagens = {
    1: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Camellia_sinensis_drawing.jpg',
    2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Starr_010304-0485_Tectona_grandis.jpg/1024px-Starr_010304-0485_Tectona_grandis.jpg',
    3: 'https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/6FSkFpeJcrN8npF?file=/&fileId=17944112&x=1927&y=920&a=true&etag=b086dc8c875719c27b005e285a81f023',
    4: 'https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/SJEBgty3Zspf2WK?file=/&fileId=17955227&x=1927&y=920&a=true&etag=0b6a4b856343f59f459f79b898da422e',
    5: 'https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/pBdB65BDrQPeBHX?file=/&fileId=17944122&x=1927&y=920&a=true&etag=096e795f612361b3ff19f0bc417a85bd'
};

function mostrarImagem(element) {
    esconderMapa();
    document.querySelectorAll('.planta').forEach(n => n.classList.remove('ativa'));
    element.classList.add('ativa');

    const id = element.getAttribute('data-id');
    const imagemUrl = imagens[id];
    const imagemPlanta = document.getElementById('imagemPlanta');
    const imagemLink = document.getElementById('imagemLink');

    imagemPlanta.src = imagemUrl;
    imagemLink.href = imagemUrl;
    imagemPlanta.style.display = 'block'; // Exibe a imagem
}

function mostrarMapa(element) {
    esconderImagem();
    document.querySelectorAll('.planta').forEach(n => n.classList.remove('ativa'));
    element.classList.add('ativa');

    const mapaContainer = document.getElementById('mapa-container');
    mapaContainer.style.display = 'block';

    const map = L.map('mapa-container').setView([-22.9676, -43.2294], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const gpx = new L.GPX("path/to/trilha_frei_leandro.gpx", { async: true });
    gpx.addTo(map);
}

function esconderImagem() {
    const imagemPlanta = document.getElementById('imagemPlanta');
    imagemPlanta.style.display = 'none';
    imagemPlanta.src = ''; // Limpa a imagem para otimização
}

function esconderMapa() {
    const mapaContainer = document.getElementById('mapa-container');
    mapaContainer.style.display = 'none';
}
