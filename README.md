# 🛠️ DevOps Basic Fullstack Project – ToDo App

Este proyecto es una aplicación fullstack de gestión de tareas (ToDo App) diseñada para practicar y demostrar una arquitectura limpia tanto en el backend como en el frontend, utilizando herramientas modernas de desarrollo y operaciones.

## 🎯 Objetivo

El objetivo de esta aplicación es:

- Construir un sistema de gestión de tareas funcional.
- Aplicar una arquitectura modular y escalable en backend y frontend.
- Orquestar múltiples servicios (frontend, backend, base de datos) mediante Docker y Docker Compose.
- Introducir a las prácticas modernas de DevOps en el flujo de desarrollo.

## 🧱 Tecnologías utilizadas

- **Backend:** Node.js + Express
- **Frontend:** React.js
- **Base de datos:** PostgreSQL
- **Contenerización:** Docker, Docker Compose
- **Control de versiones:** Git + GitHub

## 🗂️ Estructura del proyecto


### 📁 backend/
- `/config` → Configuración (ej: base de datos).
- `/controllers` → Manejan solicitudes HTTP.
- `/routes` → Define rutas de la API.
- `/services` → Lógica de negocio.
- `/repositories` → Acceso a datos.
- `app.js` → Configuración de la aplicación.
- `server.js` → Punto de entrada.

### 📁 frontend/
- `/api` → Definiciones de API base.
- `/components` → Componentes de UI reutilizables.
- `/pages` → Vistas principales.
- `/services` → Servicios para lógica de negocio (fetch a APIs).
- `/styles` → Estilos de la aplicación.

### 📁 db/
- `init.sql` → Script para crear tablas y extensiones en PostgreSQL.

---

## 🚀 Cómo ejecutar el proyecto

1. Clonar el repositorio:

```bash
git clone git@github.com:tu_usuario/devOps_basicFullstackProject_todoApp.git
cd devOps_basicFullstackProject_todoApp
docker compose up --build
