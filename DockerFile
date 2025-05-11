# Imagem base leve do Node.js
FROM node:20-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependência primeiro
COPY package*.json ./

# Instala apenas as dependências de produção
RUN npm install --production

# Copia o restante dos arquivos da aplicação
COPY . .

# Expõe a porta padrão usada pelo Cloud Run
EXPOSE 8080

# Comando para iniciar a aplicação
CMD ["node", "index.js"]
