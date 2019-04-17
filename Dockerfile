# base image
FROM cypress/browers:node11.13.0-chrome73

# set working directory
RUN mkdir /usr/src/test
WORKDIR /usr/src/test

# copy the scripts 
COPY ./ /usr/src/test
# install dependence
RUN npm install 

#confirm the cypres install
RUN ./node_modules/.bin/cypress verify 
#run the script
RUN npm run report