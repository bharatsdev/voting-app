FROM  node:14

# create app directory 
WORKDIR /usr/src/app

#install app dependencies
# A wildcard is used to ensure both package.json and package-lock.json are copied where ever availabe in dir

COPY package*.json ./

RUN npm install  

# if you are building your code for production 
# RUN npm ci --only=production

#Bundle app source 
COPY . .

# EXPOSE 3001

# CMD ['node','server.js']