# Caída de Tensión RIC N°4 — Calculadora Web + App Android

Calculadora interactiva para cálculo de caída de tensión en circuitos monofásicos y trifásicos, con recomendación automática de curva de termomagnético y generación de reportes PDF.

**Características:**
- ✓ Cálculo de caída de tensión (ΔV) según RIC N°4
- ✓ Selección de sección en mm² o AWG
- ✓ Ampacidad por tipo de canalización (soterrado, tubería, escalerilla)
- ✓ Recomendación automática de curva del termomagnético (B, C, D)
- ✓ Verificación de coordinación (Ib ≤ In ≤ Iz)
- ✓ Generación de PDF descargable
- ✓ Funciona 100% offline (sin conexión a servidores)

## 🌐 Web App

Disponible en: **https://[usuario].github.io/[repo-name]/**

### Desplegar en GitHub Pages

1. **Fork o clone este repositorio:**
   ```bash
   git clone https://github.com/[tu-usuario]/voltage-drop-app.git
   cd voltage-drop-app
   ```

2. **Instala dependencias:**
   ```bash
   npm install
   ```

3. **Prueba localmente:**
   ```bash
   npm run dev
   ```
   Abre http://localhost:5173 en el navegador.

4. **Configura GitHub Pages:**
   - Ve a tu repositorio en GitHub → **Settings** → **Pages**
   - En "Source", selecciona **Deploy from a branch**
   - Selecciona rama **gh-pages** (se crea automáticamente al hacer el primer deploy)
   - Guarda

5. **Haz push a main:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
   
   El workflow de GitHub Actions se ejecutará automáticamente y desplegará en GitHub Pages.

6. **Verifica el deploy:**
   - Ve a tu repositorio → pestaña **Deployments**
   - Haz click en el deployment activo para ver la URL en vivo

### Actualizar después

Cada vez que hagas push a la rama `main`, GitHub Actions redeploya automáticamente:
```bash
git add .
git commit -m "Cambios en la calculadora"
git push origin main
```

---

## 📱 App Android

El proyecto también incluye configuración de **Capacitor** para empaquetar como app nativa Android.

### Requisitos previos

- Node.js 18+
- Android Studio con Android SDK
- Java JDK 17

### Generar APK

```bash
# 1. Construir versión web
npm run build

# 2. Agregar plataforma Android (primera vez)
npx cap add android

# 3. Sincronizar código web con proyecto nativo
npx cap sync android

# 4. Abrir en Android Studio
npx cap open android
```

Desde Android Studio: **Build → Generate Signed Bundle / APK** (elige APK para instalar en celular, o AAB para Play Store).

### Publicar en Google Play

1. Crea una cuenta en [Google Play Console](https://play.google.com/console) (USD 25 de pago único)
2. Crea una app nueva
3. Carga el **AAB firmado** en "Producción"
4. Completa ficha de tienda (descripción, capturas, ícono, política de privacidad)
5. Envía a revisión

---

## 🎨 Personalización

### Cambiar dominio/ruta base

Si despliegas en un repo con nombre diferente, ajusta `vite.config.js`:

```javascript
// Para un repo llamado "calculator" en tu usuario:
base: "/calculator/"  // ← cambiar aquí
```

### Agregar/cambiar el logo

Reemplaza `resources/icon.png` y `resources/splash.png` por tus propias imágenes (el logo TAU ya viene integrado en la app).

### Modificar colores o tipografía

Todo está en `src/App.jsx`:
- Colores: busca `#D98A3D` (naranja TAU), `#101619` (fondo), etc.
- Fuentes: se cargan desde Google Fonts en el CSS

---

## ⚙️ Desarrollo local

### Instalar dependencias
```bash
npm install
```

### Correr en modo desarrollo (hot-reload)
```bash
npm run dev
```

### Compilar para producción
```bash
npm run build
```

### Previsualizar build
```bash
npm run preview
```

---

## 📄 Contenido de la calculadora

### Parámetros de entrada
- **Tipo de sistema:** Monofásico (220V) / Trifásico (380V)
- **Material:** Cobre / Aluminio
- **Corriente o Potencia:** Ingresa como dato conocido
- **Factor de potencia:** cos φ (por defecto 0.93 para carga mixta)
- **Longitud del circuito:** desde 1 a 200 metros
- **Tipo de canalización:** Soterrado / Tubería / Escalerilla
- **Sección:** Manual (mm² o AWG) o automática según caída/ampacidad
- **Límite normativo:** 3% (circuito), 5% (total), o personalizado
- **Tipo de carga:** Iluminación (curva B) / General (curva C) / Motores (curva D)

### Salidas (resultados)
- **Caída de tensión (ΔV):** en voltios y porcentaje
- **Corriente de diseño (Ib):** calculada desde potencia o ingresada
- **Sección recomendada:** por caída y por ampacidad (gobierna la máxima)
- **Tensión en la carga:** voltaje en el punto final del circuito
- **Ampacidad admisible:** capacidad del conductor según canalización
- **Termomagnético recomendado:**
  - In (corriente nominal)
  - Curva de disparo (B, C, D)
  - Rango de disparo instantáneo
  - Verificación Ib ≤ In ≤ Iz
- **PDF descargable:** reporte visual de todos los cálculos

---

## ⚠️ Disclaimers

Los valores de resistividad, ampacidad, curvas de termomagnético y límites porcentuales son referencias orientativas según aplicación práctica habitual del pliego RIC N°4. **Verifica siempre contra la norma vigente y las curvas reales del fabricante del disyuntor antes de usar en proyectos reales**, especialmente para instalaciones especiales o con condiciones de servicio particulares.

---

## 📜 Licencia

[Agrega tu licencia aquí, ej: MIT, GPL, etc.]

---

**Desarrollado para TAU Soluciones Eléctricas · Santiago, Chile**
