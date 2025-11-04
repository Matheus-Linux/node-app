# 🚀 O que Faz a Nossa Aplicação "node-app"? Esta é uma aplicação web simples, desenvolvida em Node.js, que funciona como o site institucional e informativo da Escola Aurora.

## 1. 🏡 Página Inicial (Boas-Vindas)
- Funcionalidade: Quando um usuário acessa o site, ele é recebido na página principal.

- Conteúdo: Exibe o banner da escola e uma mensagem de boas-vindas que reforça o compromisso da instituição em formar "cidadãos críticos, criativos e prontos para um futuro melhor para o Brasil."

## 2. 🗓️ Listagem de Atividades
- Funcionalidade: Existe uma seção dedicada a informar a comunidade sobre os próximos eventos e projetos da escola.

- Conteúdo: Mostra uma lista de atividades importantes, como a "Feira de Ciências", o "Campeonato de Matemática" e a "Semana da Leitura", incluindo a data prevista para cada uma.

## 3. 🖥️ Como a Aplicação Funciona por Trás dos Panos
Apesar de ser simples, o site foi construído com ferramentas modernas para garantir um bom desempenho:

- Ele usa a linguagem Node.js para rodar no servidor e a tecnologia EJS para montar as páginas HTML que você vê.

- É um site "de leitura" no momento: as informações de atividades estão inseridas diretamente no código.

# 🛡️ Benefício de Estar no Kubernetes
O fato de a aplicação estar rodando no Kubernetes é uma vantagem técnica que se traduz em um melhor serviço para o usuário:

- Sempre no Ar (Confiabilidade): O Kubernetes garante que, se uma parte do servidor que está exibindo o site falhar, outra parte assume imediatamente. Isso significa que o site da Escola Aurora estará disponível 24 horas por dia, minimizando interrupções.

- Suporta alta demanda (Escalabilidade): Se, de repente, muitos pais e alunos acessarem o site ao mesmo tempo (por exemplo, na véspera da Feira de Ciências), o Kubernetes consegue automaticamente aumentar a capacidade do site para lidar com o pico de tráfego, evitando lentidão ou erros.

# 🔁 O Fluxo de Vida da Aplicação no CI/CD
- O CI/CD é como uma linha de montagem automatizada para o seu código. Ele garante que qualquer mudança na aplicação seja testada e colocada no ar de forma rápida e segura.

- Baseado no diagrama (GitLab, Docker Image, Kustomization e Kubernetes), o processo funciona em 5 etapas principais:

## 1. ✍️ Integração Contínua (CI): Onde Tudo Começa
- Ação do Desenvolvedor: Você (ou um desenvolvedor) faz uma alteração no código Node.js (por exemplo, muda o texto de boas-vindas do site) e envia (Commit/Push) essa mudança para o repositório GitLab.

- Ação do GitLab CI/CD: O GitLab detecta a nova mudança e inicia automaticamente o pipeline de Integração Contínua.

- Teste: O código é verificado para garantir que não há erros graves.

- Build (Construção): Usando o Dockerfile do seu projeto, o GitLab empacota a sua aplicação Node.js junto com tudo o que ela precisa para rodar (como o Node.js e suas dependências). O resultado é uma Docker Image (o "pacote" final da aplicação).

## 2. 📦 Registro (DockerHub ou Registry)
- Ação do CI/CD: A imagem Docker recém-construída é enviada (ou pushed) para um local de armazenamento central, como o DockerHub ou o Container Registry do próprio GitLab.

- Resultado: Agora existe um novo "pacote" da sua aplicação (por exemplo, node-app:v2.0) pronto para ser implantado.

## 3. 🚀 Entrega Contínua (CD): A Ponte para o Kubernetes
- Ação do CI/CD: O pipeline agora entra na fase de Entrega Contínua. Ele pega o arquivo Kustomization.yaml (que contém as instruções sobre como o site deve rodar no Kubernetes).

- Instrução Chave: O arquivo YAML é atualizado com o nome da nova imagem Docker (node-app:v2.0) que foi gerada na etapa 1.

## 4. 🌐 Implantação no Kubernetes
- Ação do CD: O pipeline se conecta ao seu cluster Kubernetes (composto pelos master-node e worker-nodes) e diz: "Aplique estas novas instruções!"

- Ação do Kubernetes:

- O Kubernetes lê o novo YAML.

- Ele baixa a nova imagem (node-app:v2.0) do repositório (DockerHub).

- Ele cria novos Pods rodando a versão atualizada da sua aplicação.

## 5. 🔄 Rolling Update (Atualização Sem Interrupção)
- Ação do Kubernetes: A mágica acontece aqui! O Kubernetes não derruba o site antigo para colocar o novo no lugar.

- Resultado para o Usuário: Ele faz uma Atualização Contínua (Rolling Update): os Pods antigos continuam funcionando e recebendo tráfego enquanto os novos Pods da versão v2.0 são inicializados. Somente quando os novos Pods estiverem 100% prontos, o tráfego é roteado para eles, e os Pods antigos são desligados.

- Conclusão: O usuário final vê o site atualizado (com o novo texto de boas-vindas) sem ter notado qualquer interrupção ou lentidão.

## Diagrama

<img width="1417" height="581" alt="Image" src="https://github.com/user-attachments/assets/a26880b3-83ac-4b82-9558-280c49d6b47a" />
