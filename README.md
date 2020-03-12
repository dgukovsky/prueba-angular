# PruebaAngular

1- Crear un servicio de autentificación que consuma el endpoint /api/login usando los datos 
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
    
    NOTA: Guardar en el localStorage el token retornado por el endpoint.
    
2- Crear un servicio que consuma el endpoint /api/users y los muestre en una lista dentro de dashboard. 
 
    NOTA: Crear un interceptor que en caso de que exista el token en el localStorage lo introduzca en el header de las llamadas.

3- Crear un middleware de autentificacion que en caso de que no exista un token en el localstorage no permita entrar a la vista dashboard y rediriga al usuario al login.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.5.



USE EL COMANDO "npm install" PARA INSTALAR LOS RECURSOS DE LA APLICACIÓN

USE EL COMANDO "ng serve --open" PARA INICIALIZAR LA APLICACIÓN
