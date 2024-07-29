# Instalación de Dependencias mas usadas con Vite

## Usando React

### Pasos 

1. **Crea tu proyecto con React y Vite**

    Comienza creando un nuevo proyecto Vite sin usar plantillas React. Luego, agrega React y ReactDOM.

    ```sh
    npm create vite@latest portfolio
    cd portfolio
    npm install react react-dom
    ```

2. **Instala todas las dependencias necesarias**

    Instala `tailwindcss`, `postcss`, `autoprefixer`, `@heroicons/react`, `@headlessui/react`, `@reduxjs/toolkit`, `react-redux`, `react-router-dom`, y `fortawesome`. También genera los archivos `tailwind.config.js` y `postcss.config.js`.

    ```sh
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    npm install @heroicons/react @headlessui/react
    npm install @reduxjs/toolkit react-redux
    npm install react-router-dom
    npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
    ```

3. **Configura tus paths de plantillas**

    Agrega las rutas de todos tus archivos de plantilla en tu archivo `tailwind.config.js`.

    ```js
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

4. **Agrega las directivas de Tailwind a tu CSS**

    Agrega las directivas `@tailwind` para cada capa de Tailwind a tu archivo `@styles/global.css`.

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

5. **Crea el archivo `.gitignore`**

    Agrega un archivo `.gitignore` para ignorar archivos y carpetas innecesarios.

    ```sh
    echo "node_modules/" > .gitignore
    echo "dist/" >> .gitignore
    echo ".env" >> .gitignore
    ```

6. **Inicializa Git y sube el proyecto a GitHub**

    Inicializa un repositorio Git, realiza un primer commit y sube tu proyecto a GitHub. Asegúrate de reemplazar `YOUR_GITHUB_REPO_URL` con la URL de tu repositorio en GitHub.

    ```sh
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin YOUR_GITHUB_REPO_URL
    git push -u origin main
    ```

7. **Inicia el servidor Vite**

    Ejecuta tu proceso de inicialización del servidor Vite con `npm run dev`.

    ```sh
    npm run dev
    ```

8. **Configura y usa Redux y Redux Toolkit**

    **Ejemplo de configuración:**

    ```jsx
    // @store/slice/counterSlice.js
    import { createSlice } from '@reduxjs/toolkit'

    export const counterSlice = createSlice({
      name: 'counter',
      initialState: {
        value: 0,
      },
      reducers: {
        increment: (state) => {
          state.value += 1
        },
        decrement: (state) => {
          state.value -= 1
        },
      },
    })

    export const { increment, decrement } = counterSlice.actions

    export default counterSlice.reducer
    ```

    ```jsx
    // @store/index.js
    import { configureStore } from '@reduxjs/toolkit'
    import counterReducer from '@store/slice/counterSlice'

    export const store = configureStore({
      reducer: {
        counter: counterReducer,
      },
    })
    ```

    ```jsx
    // @main/jsx/main.jsx
    import React from 'react'
    import ReactDOM from 'react-dom/client'
    import { Provider } from 'react-redux'
    import { store } from '@store'
    import App from '@app/jsx/App'

    ReactDOM.createRoot(document.getElementById('root')).render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    ```

    ```jsx
    // @components/counters/jsx/Counter.jsx
    import React from 'react'
    import { useSelector, useDispatch } from 'react-redux'
    import { increment, decrement } from '@store/slice/counterSlice'

    function Counter() {
      const count = useSelector((state) => state.counter.value)
      const dispatch = useDispatch()

      return (
        <div>
          <div>
            <button onClick={() => dispatch(decrement())}>
              -
            </button>
            <span>{count}</span>
            <button onClick={() => dispatch(increment())}>
              +
            </button>
          </div>
        </div>
      )
    }

    export default Counter
    ```

9. **Configura y usa React Router**

    **Ejemplo de configuración:**

    ```jsx
    // @app/jsx/App.jsx
    import React from 'react'
    import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
    import Home from '@pages/jsx/Home'
    import About from '@pages/jsx/About'

    function App() {
      return (
        <Router>
          <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      )
    }

    export default App
    ```

    ```jsx
    // @pages/jsx/Home.jsx
    import React from 'react'

    function Home() {
      return <h2>Home</h2>
    }

    export default Home
    ```

    ```jsx
    // @pages/jsx/About.jsx
    import React from 'react'

    function About() {
      return <h2>About</h2>
    }

    export default About
    ```

10. **Empieza a usar Tailwind y dependencias adicionales en tu proyecto**

    Puedes comenzar a usar las clases de utilidad de Tailwind CSS y también integrar `@heroicons/react` y `@headlessui/react` en tu proyecto.

    **Ejemplo de uso:**

    ```jsx
    // @app/jsx/App.jsx
    import { XIcon } from '@heroicons/react/outline'
    import { Dialog } from '@headlessui/react'

    export default function App() {
      return (
        <div className="p-4">
          <Dialog open={true} onClose={() => {}}>
            <Dialog.Title className="text-lg font-bold">Hello world!</Dialog.Title>
            <Dialog.Description className="mt-2">
              <p className="text-gray-500">This is a simple dialog example using Headless UI and Heroicons.</p>
            </Dialog.Description>
            <button className="mt-4 p-2 bg-blue-500 text-white rounded">
              <XIcon className="w-5 h-5 inline" /> Close
            </button>
          </Dialog>
        </div>
      )
    }
    ```

    En este ejemplo, estamos usando el icono de cierre (`XIcon`) de `@heroicons/react` y el componente `Dialog` de `@headlessui/react` para mostrar un diálogo básico.

11. **Configura el proyecto en otra laptop o computadora**

    Clona el repositorio en la nueva máquina y instala las dependencias necesarias:

    ```sh
    git clone YOUR_GITHUB_REPO_URL
    cd portfolio
    npm install
    npm run dev
    ```

    Reemplaza `YOUR_GITHUB_REPO_URL` con la URL de tu repositorio en GitHub. Con esto, deberías tener el proyecto funcionando en la nueva máquina.
