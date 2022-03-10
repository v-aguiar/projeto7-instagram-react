## Requirements

- [x]  Você deve criar seu projeto usando o comando que demos do `create-react-app`**:**
    
    ```bash
    create-react-app nome-do-projeto --template @bootcamp-ra/cra-template
    ```
    
- [x]  Por padrão, o `create-react-app` já inicializa o Git dentro da pasta do projeto (é como se você tivesse rodado `git init` lá). Em seguida, crie o projeto também no GitHub e conecte seu projeto local ao GitHub (a entrega será por lá)
- [ ]  A página deve ser componentizada em arquivos com React, import/export
- [ ]  Todos os elementos que são repetitivos devem ser componentizados em componentes genéricos utilizando `props`
    - Exemplo
        - Em vez de:
            
            ```jsx
            export default function Pessoas() {
            	return (
            		<div>
            			<div>
            				<img ... />
            				<p>...</p>
            			</div>
            			<div>
            				<img ... />
            				<p>...</p>
            			</div>
            			<div>
            				<img ... />
            				<p>...</p>
            			</div>
            		</div>
            	);
            }
            ```
            
        - Você deve seguir a abordagem de:
            
            ```jsx
            export default function Pessoas() {
            	return (
            		<div>
            			<Pessoa imagem="..." texto="..." />
            			<Pessoa imagem="..." texto="..." />
            			<Pessoa imagem="..." texto="..." />
            		</div>
            	);
            }
            ```
            
- [ ]  Todos os itens dinâmicos do projeto (como *stories*, *posts*, usuários, etc) devem ser representados como Arrays/Objetos nos componentes e renderizados no JSX usando `map`. No projeto, os itens dinâmicos são:
    - Os *stories*;
    - Os *posts*;
    - As sugestões de seguidores;
    - O usuário acima das sugestões (este não é um *array*, mas os dados devem vir de *props*);
    - Exemplo
        - Em vez de:
            
            ```jsx
            export default function Lista() {
            	return (
            		<ul>
            			<li>Item 1</li>
            			<li>Item 2</li>
            			<li>Item 3</li>
            		</ul>
            	);
            }
            ```
            
        - Você deve seguir a abordagem de:
            
            ```jsx
            export default function Lista() {
            	const itens = ["Item 1", "Item 2", "Item 3"];
            
            	return (
            		<ul>
            			{itens.map(item => <li>item</li>}
            		</ul>
            	);
            }
            ```
            
    
- [ ]  Arquivos CSS podem ser colocados na pasta `public` e linkados diretamente no `index.html` da pasta `public`


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
