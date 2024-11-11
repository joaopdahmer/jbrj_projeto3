const imagens = {
    1: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Camellia_sinensis_drawing.jpg',
    2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Starr_010304-0485_Tectona_grandis.jpg/1024px-Starr_010304-0485_Tectona_grandis.jpg',
    3: 'https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/6FSkFpeJcrN8npF?file=/&fileId=17944112&x=1927&y=920&a=true&etag=b086dc8c875719c27b005e285a81f023',
    4: 'https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/SJEBgty3Zspf2WK?file=/&fileId=17955227&x=1927&y=920&a=true&etag=0b6a4b856343f59f459f79b898da422e',
    5: 'https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/pBdB65BDrQPeBHX?file=/&fileId=17944122&x=1927&y=920&a=true&etag=096e795f612361b3ff19f0bc417a85bd',
    6: 'https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/JkRCiBY5BGmXbar?file=/&fileId=17946713&x=1927&y=920&a=true&etag=23eab4b83e6242cb0615d35154f39796',
    7: 'https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/3Wf4Q3Kj4RWDgEs?file=/&fileId=17946734&x=1927&y=920&a=true&etag=0813af235bcf5f414f6154895af48f7a',
    8: 'https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/s8MjLATgZYYNwEL?file=/&fileId=17946774&x=1927&y=920&a=true&etag=7a36eef3361525dc41d6fa10d826ce9e',
    9: 'https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/QNskkTaRdamRAFT?file=/&fileId=17946810&x=1927&y=920&a=true&etag=6b21e8018fa5dda759e9d88e223c800d',
    10: 'https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/TDMYgQJGW7QirAo?file=/&fileId=17946839&x=1927&y=920&a=true&etag=109dd2b574c1d36a21c667334b562643'
};

function mostrarImagem(id) {
    const lightbox = document.getElementById('lightbox');
    const imagemLightbox = document.getElementById('imagemLightbox');
    imagemLightbox.src = imagens[id];
    lightbox.style.display = 'flex';
}

function fecharImagem() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}