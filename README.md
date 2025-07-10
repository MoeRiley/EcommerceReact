# 🛒 D-todo - E-commerce con React + Firebase

Este proyecto es una tienda online desarrollada con **Vite + React**, que permite explorar productos, filtrarlos por categorías, agregarlos a un carrito de compras, y finalizar una orden a través de un formulario. Utiliza **Firebase** como base de datos y **Bootstrap** para el diseño visual.

---

## 🚀 Funcionalidades principales

✅ Navegación dinámica con React Router  
✅ Visualización de productos desde Firebase Firestore  
✅ Filtrado por categorías  
✅ Vista detallada de cada producto  
✅ Agregar productos al carrito con control de cantidad  
✅ Carrito con:

- Total general
- Eliminación individual o total de productos  

✅ Checkout con formulario de compra  
✅ Alerta visual con [SweetAlert2](https://sweetalert2.github.io/)  
✅ Estética responsiva con [Bootstrap 5](https://getbootstrap.com/)  
✅ Guardado de orden en Firestore

---

## 🧰 Tecnologías y dependencias

### 🧪 Frameworks y librerías principales

- **[React](https://reactjs.org/)**  
  Framework de JavaScript para construir interfaces de usuario.

- **[Vite](https://vitejs.dev/)**  
  Herramienta de build ultrarrápida para proyectos React.

- **[React Router DOM](https://reactrouter.com/en/main/start/tutorial)**  
  Navegación entre rutas en aplicaciones React.  
  ```bash
  npm install react-router-dom



### [Bootstrap 5 (React-Bootstrap)](https://react-bootstrap.github.io/)  
Framework de estilos para una interfaz responsiva y elegante.

```bash
npm install react-bootstrap bootstrap
```

### [Firebase](https://firebase.google.com/docs/firestore?hl=es)  
Plataforma de backend como servicio utilizada para base de datos y almacenamiento.

```bash
npm install firebase
```

### [SweetAlert2](https://sweetalert2.github.io/)  
Librería para alertas personalizadas y visualmente atractivas.

```bash
npm install sweetalert2
```

---

## 🔥 Estructura del proyecto

```
src/
├── App.jsx
├── main.jsx
├── index.css
├── context/
│   ├── CartContext.js
│   └── CartProvider.jsx
├── firebase/
│   ├── config.js
│   └── db.js
├── components/
│   ├── NavBar.jsx
│   ├── ItemListContainer.jsx
│   ├── ItemList.jsx
│   ├── Item.jsx
│   ├── ItemDetailContainer.jsx
│   ├── ItemDetail.jsx
│   ├── ItemCount.jsx
│   ├── CartWidget.jsx
│   ├── CartContainer.jsx
│   └── Checkout.jsx
```

---

## 🧑‍💻 Cómo ejecutar el proyecto localmente

### 1. Clona el repositorio:

```bash
git clone https://github.com/tuusuario/tu-repo.git
cd tu-repo
```

### 2. Instala las dependencias:

```bash
npm install
```

### 3. Ejecuta el proyecto:

```bash
npm run dev
```

### 4. Abre en tu navegador:

```
http://localhost:5173/
```

---

## 🔐 Configuración de Firebase

Para que el proyecto funcione correctamente:

1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com/)
2. Habilita **Cloud Firestore**
3. Crea una colección llamada `productos`
4. Agrega tu configuración en `firebase/config.js`:

```js
export const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID",
  measurementId: "TU_MEASUREMENT_ID"
}
```

---

## ✨ Créditos

Este proyecto fue desarrollado por Nico en las clases de React JS impartidas por CODERHOUSE con fines educativos para aprender React, Firebase y diseño de e-commerce moderno usando SPA (Single Page Application).

---

## 📃 Agradecimientos a:

Luis Gonzalez

Arturo Grottoli