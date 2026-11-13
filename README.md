# Simulador de asignación de espacio en disco (ext4 / inodos)

Trabajo Integrador Final – Sistemas Operativos  
Universidad de la Cuenca del Plata, Sede Corrientes – 2026  
Integrantes: Benicio Gerardo Escobar - Diego Gerónimo Escobar - Augusto Guglielmone

## De qué se trata

Nuestro proyecto consiste en un simulador por consola de la administración del espacio en disco, tomando como referencia Ubuntu 22.04 y su sistema de archivos ext4. Utiliza una asignación no contigua: cada archivo mantiene una lista de los bloques que ocupa.

## Qué se puede hacer

- Crear y eliminar archivos indicando nombre y tamaño en bloques.
- Buscar archivos y consultar sus bloques asignados.
- Ver el mapa de bloques del disco.
- Consultar el porcentaje de ocupación.
- Analizar la dispersión del espacio libre mediante segmentos e índice de dispersión.

Si ocurre un error (nombre repetido, archivo inexistente o falta de bloques disponibles), el sistema muestra un mensaje y evita realizar la operación.

## Cómo ejecutarlo

Para ejecutarlo requiere Node.js v26.7.0 y npm.

1. Descomprimir el `.zip`.
2. Abrir una terminal en la carpeta del proyecto.
3. Instalar dependencias: `npm install -D typescript tsx @types/node`.
4. Ejecutar: `npx tsx src/principal.ts`.