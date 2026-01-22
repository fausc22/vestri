# Vestri - Proyecto Independiente

Proyecto Next.js independiente para Vestri, la unidad de negocio de CAR ADVICE orientada exclusivamente a revendedores.

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3001`

### Build para Producción

```bash
npm run build
npm start
```

## 📁 Estructura del Proyecto

```
vestri/
├── app/
│   ├── layout.tsx      # Layout principal con Meta Pixel
│   ├── page.tsx        # Página principal
│   └── globals.css     # Estilos globales y específicos de Vestri
├── components/
│   ├── NavbarVestri.tsx
│   └── vestri/         # Componentes específicos de Vestri
├── lib/
│   └── api.ts          # Cliente API simplificado para formularios
├── public/
│   ├── IMG/vestri/     # Imágenes y assets
│   ├── fonts/          # Fuentes Antenna
│   └── favicon_vestri.png
└── package.json
```

## 🔧 Configuración

### Variables de Entorno

Crear un archivo `.env.local` con:

```env
NEXT_PUBLIC_API_URL=https://api.caradvice.com.ar
```

Para desarrollo local:
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

## 📦 Dependencias Principales

- **Next.js 14** - Framework React
- **React 18** - Biblioteca UI
- **Framer Motion** - Animaciones
- **Swiper** - Carousel
- **Tailwind CSS** - Estilos
- **TypeScript** - Tipado estático

## 🌐 Deploy

### Vercel

1. Conectar el repositorio a Vercel
2. Configurar el dominio: `vestri.caradvice.com.ar`
3. Agregar variable de entorno `NEXT_PUBLIC_API_URL`
4. Deploy automático en cada push

## 📝 Notas

- El proyecto consume la misma API que Car Advice para el formulario de contacto
- Meta Pixel ID: `1601853571182218`
- Dominio: `vestri.caradvice.com.ar`
