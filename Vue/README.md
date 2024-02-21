![WEB_2.0](https://res.cloudinary.com/suberiq/image/upload/v1708524202/bjyceqyzlhozh50zanif.jpg)

# VueJs (Javascript framework)

### ✴️What is VueJs
  - VueJs is a *Javascript Framework* for building front-end application or user interfaces (UI).
  - VueJs allows us to create *reusable* UI components.
  - It is created by **Evan You**.

### ✴️Advantage of VueJs+
  - Simplicity
  - Two-Way Binding
  - Reusable Components
  - Open Source
  - Efficient and Fast
  - Community and Support

### ✴️VueJs Can be used in Defferent Ways
  - Enhancing static HTML without a build step
  - Embedding as WebComponents on any page
  - Single-Page Application (SPA)
  - Fullstack / **Server-Side Rendering (SSR)**
  - Jamstack / **Static Site Generation (SSG)**
  - Targeting *desktop, mobile, WebGL,* and even the terminal 

### ✴️Pre-requisites
  - Install Node.js version 15.0 or higher
  - Test Editor/Code Editor - Visual Studio Code, Notepad++, Atom etc.
  - Web Browser - Google Chrome, FireFox
  - Volar Extension if VS Code
  - Vue.js devtools a Chrome Extension
  - go to **Tooling** option on Vue.js site 

### ✴️Create Project
  - Without Build Tool (CDN)
  - With Build Tool (Vue + Vite)
  
    1. **Without Build Tool (CDN)**
    - To get Started With Vue Without a build step, simply copy the following code into and Html file.
      ```HTML
         <script src="https://unpkg.com/vue@3"></script>
         <div id="app">{{message}}</div>
         <script>
            const {createApp} = Vue
            createApp({
                  data(){
                        return { message: 'hello Vue!'}
                  }
            }).mount('#app')
         </script>
      ```
     2. **With Build Tool**
     - A build setup allows us to use Vue Single-File Components(SFCs). The official Vue build setup is based on Vite, a frontend build tool that is modern, lightweight and extremely fast.

     ```Javascript
        npm init vue@latest

     ```
     - this command will install and execute create-vue,the offcial Vue project scaffolding tool.
         - Install Dependencies - npm install
         - Run Project on Development Server - npm run dev
         - Create Production Build - npm run build

     3. **Vue/cli**
     - Install Vue CLI - npm install -g @vue/cli
     -- vue --version
     - Create Vue Project - vue create project-name
     - Install Dependencies - npm install
     - Run Project on Development Server - npm run serve
     - Create Production Build - npm run build
     - **npm uninstall -g @vue/cli**

## ⭐Directory Structure

  - **npm int vue@latest**
  - 📁*ch3*-> This is Project Folder
    - 📃*node_module* -> It contains all packages and dependencies installed.
    - 📁*public* :
      - 📃favicon.ico -> It's a favicon.
    - 📁*src* :
      - 📁assets :
        - 📃logo.svg -> Vue logo file
        - 📃main.css -> It's a css file related to App.vue but its global.
      - 📁components :
        - HelloWorld.vue 
      - 📃 App.vue -> It's Parent component of your vue app
      - 📃 main.js -> It's the JavaScript entry point.
    - 📃.gitignore -> It is used when you want to ignore git push.
    - 📃index.html -> This file holds the HTML template of our app.
    - 📃package-lock.json -> Its version control package json file.
    - 📃package.json -> All dependencies mentioned in the file.
    - 📃README.md -> It readme file.
    - 📃vite.config.js-> Its Vite Config File  

   ### ✴️main.js  
     
   ```javascript
      import { createApp } from 'vue';
      import App from './App.vue';
      import './assets/main.css';
      
      createApp(App).mount('#app');
   ```  
- CreateApp function is used to create New Application Instance. We can pass a component in createApp Function. We can write multiple application instance.
  ```javascript
     Example:- 
         // createApp(App1).mount('#app1')
         // createApp(App1).mount('#app1')
         // createApp(App1).mount('#app1')
  ```
- mount() Method renders applicationi instance. It expects a "container" argument,which can either be an actual DOM element or a selector string. The content of the app's root component will be rendered inside the container element.

## ⭐API Styles
- Vue components can be authored in two different API styles:
  1. **Options API**
  2. **Composition API**
### ✴️Options API
  - With Options API, we define a component's logic using an object of options such as data, methods and mounted.
  - Properties defined by options are exposed on this inside functions, which points to the component instance
### ✴️Composition API
 - With Compositions API, we define a component's logic using imported API functions.
 - Composition API is typically used with `<script setup>`
 - The setup attribute is a hint that makes Vue perform compile-time transforms that allow us to use Composition API with less boilerplate.

### ✴️Options ApI vs Compposition API
  - The Options API is centered around the concept of a "component instance".
  - It is also more beginner-friendly.
  - People who came from OOP(object-oriented Programming) background can relate easily the code structure.
  - The Composition API is centered around declaring reactive state variables directly in a function scope, and composing state from multiple functions together to handle complexity.
  - It enables more powerfull patterns for organizing and reusing logic.

  `👉 Options API:- `
   
```javascript
    // <script>
    //    export default{
    //     data(){
    //       return { count: 0 }
    //     },
    //     methods:[
    //       increment(){ this.count++ }
    //     ],
    //     mounted(){
    //       console.log(`The initial count is ${this.count}.`)
    //     }
    //    }
    // </script>

```
  `👉 Composition API:- `
   
```javascript
    // <script setup>
    //  import { ref, onMounted} from 'vue';
    //  const count = ref(0)
    //  function increment(){
    //   count.value++;
    //  }
    //  noMounted(() => {
    //     console.log(`The initial count is ${this.count}.`)
    //  })
    // </script>

```
### ✴️Which one Use for Production
  - Go with Options API if you are not using build tools,or plan to use Vue primary in low-complexity scenarios, e.g. progrerssive enchancement.
  - Go with Composition API + Single-File Components if you plan to build full applications with vue.