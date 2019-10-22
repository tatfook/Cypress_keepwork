# base image
FROM cypress/browsers:chrome69


RUN npm install
#RUN $(npm bin)/cypress run --browser chrome

RUN ./node_modules/.bin/cypress verify 
#run the script
RUN npm run report
