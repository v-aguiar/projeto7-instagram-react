## Github Pages Deployed page: https://v-aguiar.github.io/projeto7-instagram-react 
- Para rodar o ```npm run deploy``` adicionar o caminho "/projeto7-instagram-react" ao fim da url na propriedade "homepage" no package.json
```json
"homepage": "https://v-aguiar.github.io/projeto7-instagram-react"
```

## Requirements

- [x]  Você deve criar seu projeto usando o comando que demos do `create-react-app`**:**
    
    ```bash
    create-react-app nome-do-projeto --template @bootcamp-ra/cra-template
    ```
    
- [x]  Por padrão, o `create-react-app` já inicializa o Git dentro da pasta do projeto (é como se você tivesse rodado `git init` lá). Em seguida, crie o projeto também no GitHub e conecte seu projeto local ao GitHub (a entrega será por lá)
- [x]  A página deve ser componentizada em arquivos com React, import/export
- [x]  Todos os elementos que são repetitivos devem ser componentizados em componentes genéricos utilizando `props`
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
            
- [x]  Todos os itens dinâmicos do projeto (como *stories*, *posts*, usuários, etc) devem ser representados como Arrays/Objetos nos componentes e renderizados no JSX usando `map`. No projeto, os itens dinâmicos são:
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
            
    
- [x]  Arquivos CSS podem ser colocados na pasta `public` e linkados diretamente no `index.html` da pasta `public`
