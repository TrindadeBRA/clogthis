// Função principal para logar mensagens com cores
function clogThis(message, color = 'yellow') {
    const rocketEmoji = '🚀🚀🚀 -'; // Define o emoji do foguete

    // Detecta o ambiente (Node.js ou navegador) e loga a mensagem
    if (isNodeEnvironment()) {
        logToConsoleNode(message, color, rocketEmoji);
    } else {
        logToConsoleBrowser(message, color, rocketEmoji);
    }
}

// Função para verificar se está em um ambiente Node.js
function isNodeEnvironment() {
    return typeof window === 'undefined';
}

// Função para logar mensagens em um ambiente Node.js
function logToConsoleNode(message, color, rocketEmoji) {
    const terminalColors = getTerminalColors();
    const formattedMessage = formatMessage(message);

    // Se a mensagem for um objeto ou array, apenas loga como está
    if (typeof message === 'object') {
        console.log(`${terminalColors[color] || terminalColors.black}${rocketEmoji}`, formattedMessage);
    } else {
        const coloredMessage = `${terminalColors[color] || terminalColors.black}${rocketEmoji} ${formattedMessage}${terminalColors.reset}`;
        console.log(coloredMessage);
    }
}

// Função para logar mensagens em um ambiente de navegador
function logToConsoleBrowser(message, color, rocketEmoji) {
    const cssColor = getBrowserColor(color);
    const formattedMessage = formatMessage(message);

    // Se a mensagem for um objeto ou array, apenas loga como está
    if (typeof message === 'object') {
        console.log(`%c${rocketEmoji}`, cssColor, formattedMessage);
    } else {
        console.log(`%c${rocketEmoji} ${formattedMessage}`, cssColor);
    }
}

// Função para formatar a mensagem com base no tipo de entrada
function formatMessage(message) {
    if (typeof message === 'string') {
        return message; // Strings são retornadas como estão
    } else if (typeof message === 'number') {
        return message.toString(); // Números são convertidos para string
    } else if (Array.isArray(message)) {
        return message; // Retorna o array como está, para visualização interativa
    } else if (typeof message === 'object' && message !== null) {
        return message; // Retorna o objeto como está, para visualização interativa
    } else {
        return String(message); // Outros tipos são convertidos para string
    }
}

// Função para obter as cores do terminal
function getTerminalColors() {
    return {
        black: '\x1b[30m',
        red: '\x1b[31m',
        green: '\x1b[32m',
        yellow: '\x1b[33m',
        blue: '\x1b[34m',
        magenta: '\x1b[35m',
        cyan: '\x1b[36m',
        white: '\x1b[37m',
        reset: '\x1b[0m',
    };
}

// Função para obter as cores do navegador
function getBrowserColor(color) {
    const colors = {
        black: 'color: black',
        red: 'color: red',
        green: 'color: green',
        yellow: 'color: yellow',
        blue: 'color: blue',
        magenta: 'color: magenta',
        cyan: 'color: cyan',
        white: 'color: white',
    };
    return colors[color] || colors.black;
}

// Exporta a função principal
module.exports = clogThis;
