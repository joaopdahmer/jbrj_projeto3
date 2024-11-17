// Initialize Map
const map = L.map('map').setView([-22.9555, -43.2105], 13);

// Add OpenStreetMap layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

// Add Historical Maps
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

// Function to adjust opacity
function updateOpacity(year, opacity) {
  historicalMaps[year].setOpacity(opacity);
}

// Scroll Event Listener
const storySections = document.querySelectorAll('#story section');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        if (sectionId === 'map-1809') {
          updateOpacity('1809', 1);
          updateOpacity('1844', 0);
        } else if (sectionId === 'map-1844') {
          updateOpacity('1809', 0);
          updateOpacity('1844', 1);
        } else if (sectionId === 'intro') {
          updateOpacity('1809', 0);
          updateOpacity('1844', 0);
        }
      }
    });
  },
  { threshold: 0.5 }
);

storySections.forEach((section) => observer.observe(section));

// Navegação por clique nos cartões
document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('click', () => {
    const targetId = card.getAttribute('data-target');
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});
// Função para abrir o modal
function openModal(title, content, imageUrl) {
    const modal = document.getElementById('modal-container');
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
      <h2>${title}</h2>
      <p>${content}</p>
      <img src="${imageUrl}" alt="${title}" />
    `;
    modal.classList.remove('hidden');
  }
  
  // Função para fechar o modal
  function closeModal() {
    const modal = document.getElementById('modal-container');
    modal.classList.add('hidden');
  }
  
  // Adicionando marcadores com narrativas e imagens
  const entradaMarker = L.marker([-22.9692, -43.2219])
    .addTo(map)
    .bindPopup("Entrada Principal")
    .on('click', () => openModal(
      "Entrada Principal",
      "A entrada principal do Jardim Botânico do Rio de Janeiro é mais do que um simples acesso; é um marco arquitetônico e histórico que remonta à fundação do Jardim em 1808 por Dom João VI. Com uma bela fachada cercada por palmeiras imperiais e plantas nativas, a entrada representa a união entre o patrimônio histórico e a riqueza botânica do local. Ao passar por este portal, os visitantes são recebidos por uma das mais variadas coleções de plantas do mundo, com trilhas, estufas e jardins temáticos que exibem a biodiversidade tropical. A entrada principal é um símbolo de boas-vindas e de conexão entre a cidade do Rio de Janeiro e um dos mais importantes centros de pesquisa e conservação do Brasil.",
      "https://acervo.jbrj.gov.br/wp-content/uploads/tainacan-items/431453/551242/PFA01_E008_F003.jpg"
    ));
  
  const chafarizMarker = L.marker([-22.9676, -43.2240])
    .addTo(map)
    .bindPopup("Chafariz das Musas")
    .on('click', () => openModal(
      "Chafariz das Musas",
      "O Chafariz das Musas é uma das peças centrais do Jardim Botânico do Rio de Janeiro. Instalado em 1895, o chafariz de ferro fundido foi importado da Inglaterra e apresenta figuras femininas que representam as musas da mitologia grega, simbolizando a arte, a ciência e a inspiração. Situado em meio a uma paisagem rica em vegetação, o chafariz é cercado por árvores centenárias e plantas ornamentais que criam uma atmosfera de tranquilidade e contemplação. Este monumento reflete a influência europeia no design e na estrutura do Jardim, destacando-se como um ponto de interesse histórico e cultural para visitantes e pesquisadores.",
      "https://acervo.jbrj.gov.br/wp-content/uploads/tainacan-items/431453/529742/AV02_F006.jpg"
    ));
  
  const bustoMarker = L.marker([-22.9685, -43.2247])
    .addTo(map)
    .bindPopup("Busto Frei Leandro")
    .on('click', () => openModal(
      "Busto Frei Leandro",
      "O busto de Frei Leandro homenageia Frei Leandro do Sacramento, um dos primeiros diretores do Jardim Botânico e uma figura de grande importância para a botânica brasileira. Durante sua gestão, o Jardim Botânico se firmou como um centro de estudo e aclimatação de plantas exóticas e nativas, promovendo o intercâmbio científico e o desenvolvimento de coleções de plantas que continuam a enriquecer a biodiversidade do local. O busto, esculpido em bronze, simboliza o compromisso de Frei Leandro com a ciência e a educação e está situado em um ponto de destaque, rodeado por espécies que ele mesmo ajudou a cultivar e catalogar.",
      "https://acervo.jbrj.gov.br/wp-content/uploads/tainacan-items/431453/528658/ALB13_F011.jpg"
    ));
  
  const piloesMarker = L.marker([-22.9683, -43.2268])
    .addTo(map)
    .bindPopup("Casa de Pilões")
    .on('click', () => openModal(
      "Casa de Pilões",
      "A Casa de Pilões é uma construção histórica que remonta ao período colonial e servia originalmente para a moagem de cana-de-açúcar. Com suas paredes de pedra e arquitetura robusta, a Casa de Pilões reflete o passado agrícola da região e a importância das fazendas e engenhos que moldaram a economia e a cultura do Rio de Janeiro nos séculos XVIII e XIX. Hoje, a Casa de Pilões é um marco que remete às origens do Jardim Botânico e à transição de um espaço agrícola para um centro de pesquisa científica e conservação ambiental. Visitar a Casa de Pilões é como fazer uma viagem no tempo, explorando as raízes históricas do local.",
      "https://acervo.jbrj.gov.br/wp-content/uploads/tainacan-items/431453/519207/AB001_P35_1157.jpg"
    ));
  
  const aquedutoMarker = L.marker([-22.9688, -43.2305])
    .addTo(map)
    .bindPopup("Aqueduto")
    .on('click', () => openModal(
      "Aqueduto",
      "O aqueduto do Jardim Botânico é uma estrutura histórica que remonta ao período em que o sistema de abastecimento de água era fundamental para a manutenção do jardim e das áreas adjacentes. Construído com pedras e técnicas de engenharia da época, o aqueduto atravessa uma parte do Jardim, proporcionando um testemunho da infraestrutura que sustentava o funcionamento do espaço nos seus primeiros anos. Além de sua função prática, o aqueduto é um exemplo da adaptação dos recursos locais para promover a irrigação e a hidratação das inúmeras plantas que constituíam o acervo botânico. Hoje, ele é preservado como parte do patrimônio histórico do Jardim Botânico e oferece um vislumbre do passado, combinando natureza e engenharia em perfeita harmonia.",
      "https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/qcYgGJxA6kgqJE9?file=/&fileId=17933605&x=1925&y=922&a=true&etag=b91a9e9aad5dbb42b02e340bdf49c29d"
    ));