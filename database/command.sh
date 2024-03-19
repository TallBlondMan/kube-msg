version: '3'
services:
  database:
    image: postgres 
    ports:
    - 5432:5432
    volumes:
    - postgres_data:/var/lib/postgresql

volumes:
  postgres_data:

docker run -dp  5432:5432 -v ${PWD}/create-db.sql:/docker-entrypoint-initdb.d/create.sql  -v postgres_data:/var/lib/postgresql/ --name db --hostname db -e POSTGRES_PASSWORD=pass1 -e POSTGRES_USER=admin postgres

docker run -dp  5432:5432 --name db --hostname db -e POSTGRES_PASSWORD=pass1 -e POSTGRES_USER=admin postgres