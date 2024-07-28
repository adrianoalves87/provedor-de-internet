

document.addEventListener('DOMContentLoaded', () => {
    // Dados dos planos
    const plans = [
        { name: 'Plano Básico', speed: '10 Mbps', price: 'R$ 59,99/mês', image: 'megas1.jfif' },
        { name: 'Plano Intermediário', speed: '50 Mbps', price: 'R$ 100/mês', image: 'megas2.png' },
        { name: 'Plano Avançado', speed: '200 Mbps', price: 'R$ 79,90/mês', image: 'megas3.png' }
    ];

    // Elemento onde os planos serão exibidos
    const plansContainer = document.getElementById('plans-container');

    // Adicionar os planos ao DOM
    plans.forEach(plan => {
        const planElement = document.createElement('div');
        planElement.className = 'plan';
        planElement.innerHTML = `
            <img src="${plan.image}" alt="${plan.name}">
            <h3>${plan.name}</h3>
            <p>Velocidade: ${plan.speed}</p>
            <p>Preço: ${plan.price}</p>
        `;
        plansContainer.appendChild(planElement);
    });

    // Manipulação do formulário de contato
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

       

    });
});

// Função para inicializar o mapa
function initMap() {
    const providerLocation = { lat: -23.5505, lng: -46.6333 }; // Exemplo: São Paulo, SP

    const map = new google.maps.Map(document.getElementById('map-container'), {
        zoom: 15,
        center: providerLocation
    });

    const marker = new google.maps.Marker({
        position: providerLocation,
        map: map,
        title: 'Nossa Localização'
    });
}
