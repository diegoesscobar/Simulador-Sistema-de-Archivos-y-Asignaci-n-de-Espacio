# Simulador de asignación de espacio en disco (ext4 / inodos)

Trabajo Integrador Final – Sistemas Operativos
Universidad de la Cuenca del Plata, Sede Corrientes – 2026
Integrantes: Benicio Gerardo Escobar - Diego Gerónimo Escobar

## De qué se trata

Nuestro proyecto consiste en un simulador por consola de cómo Ubuntu 22.04 reparte el espacio en
disco. Usa asignación indexada: cada archivo tiene un inodo con la lista
de bloques que ocupa.

## Qué se puede hacer

- Crear y eliminar archivos (nombre y tamaño en bloques)
- Ver el mapa de bloques y los inodos
- Ver métricas de ocupación y fragmentación
- Cambiar el tamaño del disco

Si hay un error (nombre repetido, archivo inexistente, falta de bloques),
avisa y no modifica el disco.

## Cómo ejecutarlo

Requiere Node.js v26.7.0 y npm.

1. Descomprimir el .zip
2. Abrir una terminal en la carpeta
3. Instalar dependencias: `npm install`
4. Ejecutar: `npm start`