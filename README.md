# Sistema de Diseño Vango

El Sistema de Diseño Vango es una guía de diseño y desarrollo que proporciona pautas, componentes y recursos para garantizar una experiencia de usuario coherente en todas las aplicaciones y productos de nuestra marca. Este sistema es esencial para mantener la uniformidad y la eficiencia en el proceso de diseño y desarrollo.

## Objetivos

- Crear una experiencia de usuario consistente y atractiva en todas nuestras aplicaciones y productos.
- Facilitar la colaboración entre diseñadores y desarrolladores.
- Ahorrar tiempo y recursos al reutilizar componentes y patrones de diseño.

## Principios de Diseño

1. **Coherencia**: Todos los productos deben seguir las mismas pautas de diseño para garantizar una experiencia unificada.

2. **Simplicidad**: Los diseños deben ser simples y fáciles de entender para los usuarios.

3. **Accesibilidad**: Todos los productos deben ser accesibles para usuarios de todas las habilidades y necesidades.

4. **Escalabilidad**: Los componentes y patrones deben ser escalables para adaptarse a diferentes plataformas y tamaños de pantalla.

## Componentes

El Sistema de Diseño Vango incluye una amplia gama de componentes listos para usar, como:

- Botones
- Tipografía
- Iconos
- Tarjetas
- Formularios
- Barras de navegación
- Pies de página

## Uso de Componentes

Los diseñadores y desarrolladores deben seguir estas pautas al usar componentes del sistema de diseño:

1. Referenciar el sistema de diseño en la documentación del proyecto.
2. Utilizar los componentes según las pautas proporcionadas.
3. Realizar pruebas de usabilidad para garantizar la coherencia y la accesibilidad.

## Recursos

- [Descargar Kit de Diseño Vango](#) (Próximamente)
- [Documentación completa](#) (Próximamente)

## Desarrollo de CSS con LiveSass

Para el desarrollo de la arquitectura CSS en el Sistema de Diseño Vango, recomendamos el uso de la extensión **LiveSass** en Visual Studio Code. LiveSass es una herramienta que permite compilar archivos SASS o SCSS en tiempo real, lo que facilita la creación y el mantenimiento de estilos de manera eficiente.

### Configuración en Visual Studio Code

Para utilizar LiveSass en tu entorno de desarrollo, asegúrate de tener la siguiente configuración en el archivo "settings.json" de Visual Studio Code:

```json
"liveSassCompile.settings.formats": [
    {
        "format": "expanded",
        "extensionName": ".css",
        "savePath": "/css",
        "savePathReplacementPairs": null
    },
    {
        "extensionName": ".min.css",
        "format": "compressed",
        "savePath": "/css",
        "savePathReplacementPairs": null
    }
]
