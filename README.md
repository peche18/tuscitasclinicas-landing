# Tus Citas Clínicas — Landing Page

Web estática de presentación del producto. HTML, CSS y JavaScript puros, sin dependencias ni frameworks.

## Estructura de archivos

```
landing-citas-clinicas/
├── index.html    ← estructura y contenido
├── styles.css    ← todos los estilos
├── script.js     ← animaciones, menú y formulario
└── README.md
```

---

## Cómo abrir la web

### En local (forma más rápida)
Haz doble clic en `index.html`. Se abre directamente en tu navegador. No necesitas instalar nada.

### Con servidor local (recomendado para desarrollo)

**Python 3:**
```bash
python -m http.server 3000
# Abre: http://localhost:3000
```

**Node.js:**
```bash
npx serve .
# Abre la URL que muestre en la terminal
```

**VS Code:** instala la extensión _Live Server_ y haz clic en "Go Live" en la barra inferior.

---

## Cómo cambiar los textos

Abre `index.html` con cualquier editor de texto (VS Code, Notepad++, etc.) y busca el texto que quieras cambiar con `Ctrl+F`.

| Elemento | Qué buscar |
|---|---|
| Título principal del hero | `Tu clínica nunca duerme` |
| Subtítulo del hero | `Automatización con IA para clínicas privadas` |
| Email de contacto | `contacto@tuscitasclinicas.com` |
| Estadísticas | `−70%`, `+40%`, `24/7` |
| Problemas listados | `Llamadas que nadie puede atender` |
| Tarjetas de funcionalidades | `Asistente disponible 24/7` |
| Pasos del proceso | `El paciente contacta` |
| Testimonios | `Dra. García Molina` |
| Copyright footer | `© 2026 Tus Citas Clínicas` |

### Cambiar colores

Edita las variables CSS al inicio de `styles.css`:

```css
:root {
  --blue: #0055B3;    /* Azul principal */
  --mint: #00C896;    /* Verde acento */
  --dark: #0B1426;    /* Fondo oscuro (hero y nav) */
}
```

---

## Despliegue en Vercel

El sitio es 100% estático: sube la carpeta tal cual, sin build ni compilación.

### Opción A — Arrastrar la carpeta (sin GitHub)
1. Crea una cuenta gratuita en [vercel.com](https://vercel.com)
2. En el panel principal, haz clic en **Add New Project**
3. Selecciona la pestaña **Browse** o arrastra directamente la carpeta `landing-citas-clinicas` al área de carga
4. Vercel detecta automáticamente que es un sitio estático (no requiere build command)
5. Haz clic en **Deploy** — en menos de un minuto tendrás tu URL pública (p. ej. `tus-citas-clinicas.vercel.app`)

### Opción B — Desde GitHub (deploys automáticos)
1. Sube la carpeta a un repositorio de GitHub (público o privado)
2. En Vercel, haz clic en **Add New Project** → **Import Git Repository**
3. Selecciona el repositorio y deja la configuración por defecto:
   - **Framework Preset:** Other
   - **Build Command:** *(dejar vacío)*
   - **Output Directory:** `.`
4. Haz clic en **Deploy**
5. Cada `git push` a la rama principal generará un nuevo deploy automáticamente

### Dominio personalizado
En el panel de tu proyecto en Vercel → **Settings** → **Domains**, añade tu dominio y sigue las instrucciones para actualizar los DNS.

---

## Otras plataformas de despliegue

### Netlify
1. Crea una cuenta en [netlify.com](https://netlify.com)
2. En el panel principal, arrastra la carpeta del proyecto al área de _drag & drop_
3. Tu sitio se despliega al instante con una URL gratuita

### Render — Static Site
1. Crea una cuenta en [render.com](https://render.com)
2. Haz clic en **New +** → **Static Site**
3. Conecta tu repositorio de GitHub
4. Configuración:
   - **Build Command:** *(dejar vacío)*
   - **Publish Directory:** `.`
5. Haz clic en **Create Static Site**

---

## Notas

- El formulario de contacto no tiene backend: al enviar muestra un mensaje de confirmación visual.
- Para activar el envío real de emails sin servidor puedes usar [Formspree](https://formspree.io) o [EmailJS](https://emailjs.com) de forma gratuita.
- No se incluyen datos reales de pacientes ni claves API.
