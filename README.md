# ClogThis

ClogThis é uma utilidade simples de registro em JavaScript que permite registrar mensagens com cores em ambientes Node.js e de navegador. Ele fornece uma maneira conveniente de formatar e exibir mensagens usando diferentes cores e um emoji de foguete para dar um toque divertido!

## Recursos

- Registra mensagens em várias cores no console.
- Detecta automaticamente o ambiente (Node.js ou navegador) e ajusta o método de registro conforme necessário.
- Suporta registro de strings, números, objetos e arrays.
- Cor padrão personalizável para mensagens.

## Instalação

Você pode instalar o ClogThis via npm:

```bash
npm install clogthis
```

## Uso

### Importando o Pacote

Para usar o ClogThis em seu projeto, primeiro importe-o:

```javascript
const clogThis = require('clogthis');
```

### Registrando Mensagens

Você pode registrar mensagens chamando a função `clogThis`, passando a mensagem e, opcionalmente, uma cor:

```javascript
clogThis('Olá, Mundo!'); // Registra em amarelo por padrão
clogThis('Mensagem de sucesso', 'green'); // Registra em verde
clogThis('Mensagem de erro', 'red'); // Registra em vermelho
```

### Cores Suportadas

As seguintes cores são suportadas:

- `black` (preto)
- `red` (vermelho)
- `green` (verde)
- `yellow` (amarelo)
- `blue` (azul)
- `magenta` (magenta)
- `cyan` (ciano)
- `white` (branco)

Se uma cor não suportada for especificada, a cor padrão será preta.

### Exemplo

Aqui está um exemplo de uso do ClogThis em ambientes Node.js e de navegador:

```javascript
const clogThis = require('clogthis');

// Em Node.js
clogThis('Mensagem do Node.js', 'blue');

// No Navegador
clogThis('Mensagem do Navegador', 'magenta');
```

## Detalhes da Funcionalidade

### `clogThis(message, color)`

- **Parâmetros:**
  - `message`: A mensagem a ser registrada (string, número, objeto ou array).
  - `color`: (opcional) A cor da mensagem (o padrão é 'yellow').

### Funções Internas

- `isNodeEnvironment()`: Verifica se o código está sendo executado em um ambiente Node.js.
- `logToConsoleNode(message, color, rocketEmoji)`: Registra mensagens em Node.js com cores de terminal.
- `logToConsoleBrowser(message, color, rocketEmoji)`: Registra mensagens no navegador com cores CSS.
- `formatMessage(message)`: Formata mensagens com base em seu tipo.
- `getTerminalColors()`: Retorna um objeto com códigos de cor de terminal.
- `getBrowserColor(color)`: Retorna a cor CSS para o ambiente de navegador.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para detalhes.

## Contribuições

Se você gostaria de contribuir para o ClogThis, sinta-se à vontade para enviar um pull request ou abrir uma issue.

## Autor

[Lucas Trindade](https://github.com/trindadebra)