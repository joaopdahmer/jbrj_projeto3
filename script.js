// Inicialização do mapa
const map = L.map('map').setView([-22.9692, -43.2219], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);

// Adicionar camadas históricas
const historicalMaps = {
  '1809': L.imageOverlay(
    'https://raw.githubusercontent.com/joaopdahmer/JBRJ_TESTE2/main/mapa_1809.png',
    [[-23.0113, -43.2596], [-22.9426, -43.1790]],
    { opacity: 0 }
  ).addTo(map),
  '1844': L.imageOverlay(
    'https://raw.githubusercontent.com/joaopdahmer/JBRJ_TESTE2/main/mapa_1844.png',
    [[-23.0169, -43.2705], [-22.9313, -43.1775]],
    { opacity: 0 }
  ).addTo(map),
};

// Função para alternar a visibilidade dos mapas históricos
function updateMapOpacity(year) {
  Object.keys(historicalMaps).forEach((key) => {
    historicalMaps[key].setOpacity(key === year ? 1 : 0);
  });
}

// Gerenciamento do scrollytelling
const sections = document.querySelectorAll('.scrollytelling-section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const section = entry.target;
      if (entry.isIntersecting) {
        sections.forEach((sec) => sec.classList.remove('active'));
        section.classList.add('active');

        // Atualizar mapa correspondente
        const mapYear = section.getAttribute('data-map');
        if (mapYear) {
          updateMapOpacity(mapYear);
        } else {
          updateMapOpacity(null);
        }
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((section) => observer.observe(section));

// Pins interativos e modal
const pins = [
  {
    coords: [-22.9692, -43.2219],
    title: "Entrada Principal",
    description: "A entrada principal é um marco histórico do Jardim Botânico.",
    imageUrl: "https://acervo.jbrj.gov.br/wp-content/uploads/tainacan-items/431453/551242/PFA01_E008_F003.jpg",
  },
  {
    coords: [-22.9676, -43.2240],
    title: "Chafariz das Musas",
    description: "O Chafariz das Musas é uma das peças centrais do Jardim Botânico.",
    imageUrl: "https://acervo.jbrj.gov.br/wp-content/uploads/tainacan-items/431453/529742/AV02_F006.jpg",
  },
  {
    coords: [-22.9685, -43.2247],
    title: "Busto Frei Leandro",
    description: "O busto homenageia Frei Leandro, um dos primeiros diretores do Jardim.",
    imageUrl: "https://acervo.jbrj.gov.br/wp-content/uploads/tainacan-items/431453/528658/ALB13_F011.jpg",
  },
  {
    coords: [-22.9683, -43.2268],
    title: "Casa de Pilões",
    description: "A Casa de Pilões reflete o passado agrícola da região.",
    imageUrl: "https://acervo.jbrj.gov.br/wp-content/uploads/tainacan-items/431453/519207/AB001_P35_1157.jpg",
  },
  {
    coords: [-22.9688, -43.2305],
    title: "Aqueduto",
    description: "O aqueduto é uma estrutura histórica que abastecia o Jardim.",
    imageUrl: "https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/qcYgGJxA6kgqJE9?file=/&fileId=17933605&x=1925&y=922&a=true&etag=b91a9e9aad5dbb42b02e340bdf49c29d",
  },
];


pins.forEach((pin) => {
  L.marker(pin.coords)
    .addTo(map)
    .on('click', () => {
      openModal(pin.imageUrl, pin.description);
    });
});

function openModal(imageUrl, description) {
  document.getElementById('modalImage').src = imageUrl;
  document.getElementById('modalText').innerText = description;
  document.getElementById('pinModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('pinModal').style.display = 'none';
}
