# Projeto task-manager - ReactJS e Typescript - Gerenciador de Tarefas 

Este repositório trata-se de um teste técnico feito para a empresa bcopy sistemas ltda onde foi desenvolvido um gerenciador de tarefas em React.js e TypeScript.

## Instruções de Execução:
1. Fazer o dowload do projeto e executar $ yarn install no terminal para baixar os pacotes;
2. Para executar o projeto : $ yarn start
3. Acessar localhost:3000/

## Como foi Feito:
- Utilizado ReactJS e Typescript
- Para estilização StyledComponents e React Icons

## Funcionamento:
Pagina unica com modal contendo:
+ Input e button para inserir uma nova tarefa;
+ Uma lista de Tarefas criadas com opção de Excluir e Finalizar Tarefas;
+ Outra lista com as Tarefas Finalizadas com a opção Reabrir Tarefas;

## Como foi desenvolvido:
- Apenas com um arquivo usando a classe raiz do React App.tsx;
- Separei constantes para usar com os estados do React distinguindo lista e item a entrar;
- Inserindo por captura de eventos de botões do front, armazenando em uma variavel array (perdendo informações no reload);
- Usei Map para percorrer e utilizando a reatividade de status para atualizar informações;
