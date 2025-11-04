FROM node:25-alpine3.22

ENV TZ="America/Sao_Paulo"

WORKDIR /app 

COPY ./escola-site/ ./

RUN 	set -x apk add curl \
	&&  npm install

ENTRYPOINT ["npm","start"] 
 	
