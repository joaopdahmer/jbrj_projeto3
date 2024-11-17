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
  { coords: [-22.9692, -43.2219], title: "Entrada Principal", description: "A entrada principal é um marco histórico do Jardim Botânico." },
  { coords: [-22.9676, -43.2240], title: "Chafariz das Musas", description: "O Chafariz das Musas é uma das peças centrais do Jardim Botânico." },
  { coords: [-22.9685, -43.2247], title: "Busto Frei Leandro", description: "O busto homenageia Frei Leandro, um dos primeiros diretores do Jardim." },
  { coords: [-22.9683, -43.2268], title: "Casa de Pilões", description: "A Casa de Pilões reflete o passado agrícola da região." },
  { coords: [-22.9688, -43.2305], title: "Aqueduto", description: "O aqueduto é uma estrutura histórica que abastecia o Jardim." },
];

pins.forEach((pin) => {
  L.marker(pin.coords)
    .addTo(map)
    .bindPopup(`<h3>${pin.title}</h3><p>${pin.description}</p>`);
});

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
