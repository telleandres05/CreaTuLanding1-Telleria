# 🛒 Geek Store - Tienda Online de Productos Geek

Este proyecto es una aplicación e-commerce desarrollada en **ReactJS**, donde los usuarios pueden explorar productos relacionados con el mundo geek (anime, videojuegos, etc.), filtrarlos por categoría, ver detalles y agregar artículos a un **carrito de compras dinámico**.

Forma parte del proyecto final del curso **ReactJS** de **Coderhouse** y está enfocado en aplicar buenas prácticas del ecosistema React, incluyendo el uso de rutas dinámicas, manejo de estado global con `Context`, y conexión a bases de datos remotas mediante **Firebase/Firestore**.

---

## 🚀 Funcionalidades principales

- 🧭 **Navegación tipo SPA**: Sin recargas al navegar entre páginas gracias a React Router.
- 🔍 **Filtrado por categoría**: Accede a productos según categoría (ej: Naruto, Dragon Ball Z).
- 📦 **Vista detallada de productos**: Muestra descripción, precio y stock disponible.
- ➕ **Sistema de carrito**:
  - Agregar productos.
  - Incrementar cantidades.
  - Eliminar individualmente.
- 🔄 **Persistencia y reactividad** con `CartContext`.
- ⚙️ **Renderizado condicional y loaders** al obtener datos desde Firestore.

---

## 🛠️ Tecnologías usadas

- [ReactJS](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Firebase / Firestore](https://firebase.google.com/)
- [Bootstrap](https://getbootstrap.com/) (para estilos rápidos)
- Context API (manejo de estado global)
- JavaScript moderno (ES6+)

✅ Buenas prácticas implementadas
Código limpio y legible (sin console.log, debugger ni código sin usar).

Separación entre componentes contenedores y presentacionales.

Nombres de variables y archivos coherentes y descriptivos.

Custom hook de contexto para el carrito sin lógica de UI dentro del Context.

Documentación clara y progresiva.

🧪 Estado del desarrollo
 Navegación por categorías e ID

 Integración con Firestore

 Carrito funcional (agregar, eliminar, vaciar)

 Context API para estado global

 Routing y parámetros con React Router

 Deploy (opcional)

✍️ Autor
Andrés Tellería
Desarrollador en formación - Full Stack Developer

