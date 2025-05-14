# 🚀 DevOpsQuest

> Este projeto é uma trilha de aprendizado de iniciante até um devops jr, ainda terão várias implementações, quer conferir?

![DevOps Quest Banner](https://media.giphy.com/media/xTiIzJSKB4l7xTouE8/giphy.gif)

## 💡 Sobre

O **DevOpsQuest** é um projeto simples, direto ao ponto, perfeito pra quem quer praticar com:

- 📦 Containers (tem Dockerfile!)
- 💻 Node.js e Express
- 🚀 Deploy local rapidinho
- 🧪 Testes com Jest e Supertest (usando uma rota GET)

---  

## 🛠️ Como rodar esse server maroto

```bash
# Clone o repositório
git clone https://github.com/willamysfernandes/DevOpsQuest.git

# Acesse a pasta
cd DevOpsQuest

# Instale as dependências
npm install

# Rode o servidor
node index.js
```

E pronto! Vá para: [http://localhost:3000](http://localhost:3000)  
Você verá: **"Olá, mundo!"** 🌍

---

## 🐳 Dockerizando

Se você é do time DevOps raiz:

```bash
# Build da imagem
docker build -t devopsquest .

# Run container
docker run -d -p 3000:3000 devopsquest
```

---

## 🧪 Rodando os testes

O projeto agora usa **Jest** e **Supertest** para garantir que tudo está funcionando como esperado.

```bash
# Rode os testes
npm test
```

📁 Testes ficam na pasta `tests/` e checam se a rota `/` responde corretamente com `Olá, mundo!`.

---

## 📁 Estrutura do projeto

```
📦 DevOpsQuest
 ┣ 📄 Dockerfile
 ┣ 📄 index.js
 ┣ 📄 package.json
 ┣ 📄 package-lock.json
 ┗ 📂 tests
    ┗ 📄 index.test.js
```

---

## 🧙 Missão atual

- [x] Levantar um server com Express
- [x] Dockerizar o projeto
- [x] Adicionar testes automágicos
- [ ] Criar rota de `/status` só pra zoeira
- [ ] Fazer deploy com CI/CD

---

## 🧙‍♂️ Feito por

Desbravador: [Willamys Fernandes](https://github.com/willamysfernandes)

