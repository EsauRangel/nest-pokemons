<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# Ejecutar en desarrollo 
1. Clonar repositorio
2. Ejecutar

```
npm install
```

3. Tener Nest CLI instalado

```
npm i -g @nestjs/cli
```
4. Levantar base de datos
```
docker-compose ip -d
```
5. Clonar el archivo __env.template__ y renombrar a la copa a ```.env```

6. Llenar las variables de entorno definidas en el ```.env```

7. Ejecutar la aplicacion en dev: 
```
npm run start:dev
```
8. Reconstruir base de datos con la semilla 
```
http://localhost:3000/api/v2/seed
```

## Stack usasdo 
*MongpDB
*Nest

