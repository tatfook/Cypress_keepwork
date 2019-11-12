# base image
FROM cypress/included:3.6.0


#RUN npm install
#RUN $(npm bin)/cypress run --browser chrome

RUN mkdir /code
ADD ./ /code/
WORKDIR /code

#RUN ["/bin/sh", "-c", "./node_modules/.bin/cypress verify"] 
#run the script
CMD npm run report
