# Caída de Tensión RIC N°4 — Proyecto listo para APK

Esta app está construida con React + Vite y empaquetada como app Android nativa
usando **Capacitor**. El código web ya está probado y compila sin errores.

## Requisitos previos (en tu computador)

1. **Node.js 18+** → https://nodejs.org
2. **Android Studio** (incluye el Android SDK) → https://developer.android.com/studio
3. Java JDK 17 (Android Studio lo instala automáticamente si no lo tienes)

## Pasos para generar el APK

Abre una terminal dentro de la carpeta del proyecto y ejecuta, en orden:

```bash
# 1. Instalar dependencias
npm install

# 2. Compilar la app web (genera la carpeta /dist)
npm run build

# 3. Agregar la plataforma Android (solo la primera vez)
npx cap add android

# 4. Copiar el build web dentro del proyecto Android
npx cap sync android

# 5. Abrir el proyecto en Android Studio
npx cap open android
```

Esto abre Android Studio con el proyecto nativo ya generado en la carpeta `android/`.

### Generar el APK/AAB firmado desde Android Studio

1. Menú **Build → Generate Signed Bundle / APK**
2. Elige **APK** (para instalar directo en un celular) o **Android App Bundle** (formato que exige Google Play).
3. Si es tu primera vez, crea un **keystore** nuevo (guárdalo, lo necesitas para todas las actualizaciones futuras de la app).
4. Selecciona **release**, espera a que compile.
5. El archivo queda en `android/app/release/`.

## Para subir a Google Play

1. Crea una cuenta en [Google Play Console](https://play.google.com/console) (pago único de USD 25).
2. Crea una app nueva, completa ficha de la tienda (nombre, descripción, capturas de pantalla, ícono 512×512, política de privacidad).
3. Sube el **AAB firmado** (no el APK) en la sección "Producción" o primero en "Prueba interna" para testear.
4. Completa el cuestionario de clasificación de contenido y declaración de datos.
5. Envía a revisión.

## Personalización antes de publicar

- **`capacitor.config.json`** → cambia `appId` (formato `cl.tuempresa.nombreapp`, debe ser único) y `appName`.
- **Ícono y splash screen**: ya vienen preparados en la carpeta `resources/` (`icon.png` e `icon` recortado del
  logo de TAU Soluciones Eléctricas, y `splash.png` en 2732×2732). Para generar automáticamente todos los
  tamaños que exige Android, ejecuta después de `npx cap add android`:
  ```bash
  npm install @capacitor/assets --save-dev
  npx capacitor-assets generate --android
  ```
- **Nombre visible de la app**: se edita en `android/app/src/main/res/values/strings.xml` después de `cap add android`.

## Sobre el logo

El logo circular de TAU Soluciones Eléctricas ya está integrado en dos lugares:
1. **Dentro de la app**, reemplazando el ícono anterior en el encabezado (embebido como imagen en `src/App.jsx`).
2. **Como ícono de la app** (`resources/icon.png`), listo para generar los distintos tamaños de Android con
   `capacitor-assets` como se explica arriba.

## Notas técnicas

- Los cálculos de caída de tensión, ampacidad y curva de termomagnético recomendada son de referencia
  práctica según criterios habituales de aplicación del pliego RIC N°4. Antes de publicar la app, considera
  agregar en la ficha de Play Store una nota indicando que los resultados deben verificarse contra la norma
  vigente y las curvas reales del fabricante del disyuntor.
- La app funciona 100% offline: no hace llamadas a servidores externos (excepto la carga de las
  tipografías de Google Fonts vía CDN — si quieres que funcione sin internet, descarga las fuentes
  y sírvelas localmente en `src/`).
