# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Folder structure

dist/
node_modules
public/                  
src/
  -assets/
      -Images/
      -data.jsx
      -index.css
      react.svg
  -components/
       -layout/
         Header.jsx, Footer.jsx
       -other/
         About.jsx, Work.jsx, Services.jsx, Contact.jsx
         
  -App.jsx
  -main.jsx
.gitignore
eslint.config.js
package-lock.json
package.json
README.md
vite.config.js

## Dependencies

* react
* react-dom
* Framer-motion
* @tailwindcss/vite
* react-icons
* sweetalert2

## Decisions Made

I developed a single-page web application for an imaginary IT company called NewTech. All information and content provided in the application are totally fictional. Additionally, I used free, unlicensed images sourced from www.freepik.com.


