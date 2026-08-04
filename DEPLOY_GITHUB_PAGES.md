# Guía Rápida: Deploy a GitHub Pages en 5 minutos

## Pasos

### 1. Crear repositorio en GitHub
- Ve a https://github.com/new
- Nombre del repo: `voltage-drop-app` (o el que prefieras)
- Visibilidad: **Public** (necesario para GitHub Pages gratis)
- Click en "Create repository"

### 2. En tu computador
```bash
# Clonar este proyecto (o si ya lo tienes, entra en su carpeta)
cd voltage-drop-app

# Inicializar git y conectar con tu repo
git init
git remote add origin https://github.com/[tu-usuario]/voltage-drop-app.git
git branch -M main
git add .
git commit -m "Initial commit: Calculadora de caída de tensión RIC N°4"
git push -u origin main
```

### 3. Habilitar GitHub Pages
En GitHub (en el navegador):
- Tu repositorio → **Settings** (gear icon arriba a la derecha)
- Izquierda: **Pages**
- "Source": selecciona **Deploy from a branch**
- Branch: elige **gh-pages** (si no aparece, espera 1 minuto — se crea automáticamente)
- Carpeta: **/ (root)**
- Click en "Save"

### 4. Esperar deployment
- GitHub Actions se ejecuta automáticamente (mira la pestaña **Actions** en tu repo)
- El workflow `Deploy to GitHub Pages` debe mostrar estado ✅
- Una vez listo (2-3 minutos), GitHub muestra tu URL en:
  - Repositorio → **Deployments** (derecha) → click en el link

### Tu URL será:
```
https://[tu-usuario].github.io/voltage-drop-app/
```

---

## Actualizar después

Solo haz push a main:
```bash
# Edita lo que quieras
# ...

git add .
git commit -m "Cambio: [descripción del cambio]"
git push origin main
```

Se redeploya automáticamente en 2-3 minutos (ves el progreso en la pestaña **Actions**).

---

## Si quieres otro nombre de repo

Si tu repo se llama diferente (ej: `calculadora-electrica`), ajusta en `vite.config.js`:

```javascript
// Cambiar esta línea:
base: "/calculadora-electrica/",  // ← tu-nombre-de-repo
```

Luego haz push de nuevo.

---

## Troubleshooting

**"La app no se ve después de hacer deploy"**
- Espera 3-5 minutos (GitHub tarda un poco)
- Limpia caché del navegador (Ctrl+Shift+Del)
- Verifica que el workflow en **Actions** muestre ✅

**"Falló el deploy"**
- Ve a **Actions** → el workflow fallido
- Lee el log rojo → usualmente faltan dependencias (ejecuta `npm install` localmente y haz push de nuevo)

**"El logo no se ve"**
- Se embebe en base64 automáticamente, debería funcionar
- Si no, ve a Browser DevTools (F12) → Console y mira si hay errores

---

Listo. Con esto tu calculadora está en internet y actualizable en tiempo real.
