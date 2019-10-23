# base image
FROM cypress/browsers:chrome69


#RUN npm install
#RUN $(npm bin)/cypress run --browser chrome

RUN mkdir /code
ADD ./* /code/
WORKDIR /code

RUN node_modules/.bin/cypress verify 
#run the script
CMD npm run report
