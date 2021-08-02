# App Clima By Ciro



### Instrucciones para correr el proyecto

1. `npm install`: Instala todas las dependencias necesarias para correr el proyecto correctamente. [Es necesario correrlo sólo la primera vez]

2. `npm start`: Comienza a correr la aplicación de forma local por lo que se puede ver desde el navegador accediendo a http://localhost:3000

No es necesario volver a correr el proyecto cada vez que se realice un cambio sino que se verá automáticamente reflejando en el navegador.

> Hay veces que por problemas de configuración los cambios no se ven automáticamente reflejados en el navegador por lo que si te ocurre esto la opción rápida sería parar la ejecición del proyecto (Ctrl + C) y volver a ejecutar `npm start`. De todas formas si te ocurre esto contactate con tu PM.


3. Para poder realizar las llamadas a la API es necesario contar con una apiKey  que como verán en el código debajo debe ser incluida dentro de la URL. La misma la podemos obtener creando una cuenta en la paǵina de [openweather](https://openweathermap.org/current). 

```js
// App.js

  ...

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }

...

```
Deberias ver algo como lo siguiente: ![Alt](./img-screen/tarjetas-iconos.png)
