// Inicialização do mapa
const map = L.map('map').setView([-22.9692, -43.2219], 15);

// Adicionar camada base do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

// Adicionar camadas dos mapas históricos
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

// Função para alterar opacidade das camadas
function updateMapOpacity(year) {
  Object.keys(historicalMaps).forEach((key) => {
    historicalMaps[key].setOpacity(key === year ? 1 : 0);
  });
}

// Adicionar pins interativos
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

// Função para criar pins no mapa
pins.forEach((pin) => {
  L.marker(pin.coords)
    .addTo(map)
    .on('click', () => {
      openModal(pin.imageUrl, pin.description);
    });
});

// Funções do modal
function openModal(imageUrl, description) {
  document.getElementById('modalImage').src = imageUrl;
  document.getElementById('modalText').innerText = description;
  document.getElementById('pinModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('pinModal').style.display = 'none';
}

// Destacar narrativa ativa
function setActiveSection(sectionId) {
  document.querySelectorAll('#story section').forEach((section) => {
    if (section.id === sectionId) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });

  if (sectionId === 'map-1809') {
    updateMapOpacity('1809');
  } else if (sectionId === 'map-1844') {
    updateMapOpacity('1844');
  } else {
    updateMapOpacity(null);
  }
}

// Observador para narrativas e mapas
const storySections = document.querySelectorAll('#story section');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  },
  { threshold: 0.5 }
);

// Ativar observador
storySections.forEach((section) => observer.observe(section));
