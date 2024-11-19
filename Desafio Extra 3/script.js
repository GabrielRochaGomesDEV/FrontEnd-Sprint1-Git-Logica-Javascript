const services = [
    { name: "Casa de Acolhimento São Francisco", region: "Centro", type: "Acolhimento", contact: "casadesaofrancisco@gmail.com" },
    { name: "ONG Vida Nova", region: "Zona Norte", type: "Assistência Social", contact: "ongvidanova@gmail.com" },
    { name: "Associação de Apoio ao Idoso", region: "Zona Sul", type: "Apoio ao Idoso", contact: "aai@gmail.com" }
];

// Função para buscar serviços sociais
function searchServices(region, type) {
    const results = services.filter(service => service.region === region && service.type === type);
    if (results.length === 0) {
        alert(`Não foram encontrados serviços sociais em ${region} para ${type}.`);
    } else {
        let resultText = `Serviços encontrados em ${region} para ${type}:\n`;
        results.forEach(service => {
            resultText += `${service.name} - Contato: ${service.contact}\n`;
        });
        alert(resultText);
    }
}

// Função para adicionar um novo serviço social
function addService(name, region, type, contact) {
    services.push({ name, region, type, contact });
    alert(`Serviço "${name}" adicionado com sucesso!`);
}

// Função para remover um serviço social utilizando splice
function removeService(name) {
    const index = services.findIndex(service => service.name === name);
    if (index !== -1) {
        services.splice(index, 1);  // Remove 1 item na posição do índice encontrado
        alert(`Serviço "${name}" removido com sucesso!`);
    } else {
        alert(`Serviço "${name}" não encontrado.`);
    }
}

// Função para exibir o menu e interagir com o usuário
function showMenu() {
    let option = '';
    
    while (option !== '0') {
        option = prompt(`
Menu:
1. Buscar Serviços
2. Cadastrar Novo Serviço
3. Excluir Serviço
0. Sair

Escolha uma opção:`);
        
        if (option === '1') {
            const region = prompt("Digite a região:");
            const type = prompt("Digite o tipo de serviço:");
            searchServices(region, type);
        } else if (option === '2') {
            const name = prompt("Nome do serviço:");
            const region = prompt("Região:");
            const type = prompt("Tipo de serviço:");
            const contact = prompt("Contato:");
            addService(name, region, type, contact);
        } else if (option === '3') {
            const name = prompt("Nome do serviço a ser removido:");
            removeService(name);
        } else if (option === '0') {
            alert("Saindo...");
        } else {
            alert("Opção inválida, tente novamente.");
        }
    }
}

// Inicia o menu
showMenu();
