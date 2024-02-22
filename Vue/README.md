![WEB_2.0](https://res.cloudinary.com/suberiq/image/upload/v1708524422/Copy_of_WEb_Development_fqdy4y.jpg)

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

## ⭐What is Component
- Component allow us tyo split the UI into independent and reusable pieces, and think about each piece in isolation. It's common for an app to be organized into a tree of nested components.
 ### ✴️What is Vue Component
 - Vue components are written as a combination of Javascript objects that manage the app's data and an HTML-based template syntax that maps to the underlying DOM structure.

 ### ✴️Vue Single-File Components
  - Vue Single-File Components (SFC) a.k.a. ***.vue** files is a special file format that allows us to encapsulate the template(HTML),logic (JavaScript), and styling (CSS) of a Vue component in a single file.

  `Syntax :-`  

```javascript
         FileName.vue
        <script>JavaScript </script>
        <template>HTML </template>
        <style>Css </style>

```
#### 👉Template   
  - Each ***.vue** file can contain at most one top-level `<template>` block at a time.
  - Contents will be extracted and passed on to @vue/compiler-dom, pre-compiled into Javascript render functions, and attached to the exported component as it s render option.    

#### 👉`<script>` 
  - Each ***.vue** file can contain at most one `<script>` block at a time (excluding `<script setup>`).
  - The script is executed as an ES Module.
  - The default export should be a Vue component options object, either as a plain object or as the reuturn value of defileComponent.
    
    `Example :- `  
     
     ```javascript
          <script>
          <script lang="ts">
          <script setup>
     ```
#### 👉`<style>` 
-  A single ***.vue** file can contain multiple `<style>` tags.
- A `<style>` tag can have scoped or module attributes to help encapsulate the styles to the current component. Multiple `<style>` tags with different encapsulation modes can be mixed in the same component.

`Example :- ` 

```javascript
   <style>
   <style scoped>
   <style lang="scss">

```
#### 👉 Src Import
- If you prefer splitting up your ***.vue** components into multiple files, you can use the src attribute to import an external file for a language block. 
- It's Relative paths need to start with ./
```javascript
   <template src="./template.html"></template>
   <style src="./style.css"></style>
   <script src="./script.js"></script>
```

### ✴️Defining a Component
```javascript
   FileName.vue
   <script setup>
    //imports
    //properties
    // Methods
   </script>
   <template>
     Html Here we get access to Properties and Methods Child Components which we have imported
   </template>
   <style scoped> CSS </style>
```  

`Example:- `

```javascript
    HelloWorld.vue
    <script setup>
      const msg = "Hello World"
    </script>

    <template>
       <h1>{{ msg }}</h1>
    </template>

    <style scoped>
      h1{ font-size: 1.8rem;}
    </style>  
```
### ✴️Register & Use a Component

- A Vue component needs to be "registered" so that Vue Knows where to locate its implementation when it is encounted in a template. There are two ways to register components:-
   - **Local**
   - **Global**

  #### 👉Local
    - Local registration scopes the availabily of the registered components to the current component only.
    - It makes the dependency relationship more explicit, and is more tree-shaking friendly.
    `Example :- `  
    ```javascript
         <script setup>
          import ComponentA from './ComponentA.vue'
         </script>
         <template>
          <ComponentA />
         </template>
    ```

  #### 👉Component Naming Convention

  - We can use PascalCase names when registering components.
    `Example:- <HelloWorld />`  
  - A component registered as MyComponent can be referenced in the template via both `<MyComponent> and <my-component>`.  

  #### 👉Global
  - We can make components available globally in the current Vue application using the **app.component()** method.
  - Globally registered components can be used in the template of any component within this application.

  `Example:- `

  ```javascript
    main.js
    import ComponentA from './ComponentA.vue'
    app.component('ComponentA',ComponentA)
    app
    .component('ComponentA',ComponentA)
    .component('ComponentB',ComponentB)
    .component('ComponentC',ComponentC)



   Globally registered components can be used in the template of any component within this application.

   <ComponentA />
   <ComponentB />
   <ComponentC />
  ```

  #### 👉Disadvantages of Global Registration
  - Global registration prevents build systems from removing unused components (a.k.a "tree-shaking"). if you globally register a component but end up not using it anywhere in your app, it will still be included in the final bundle.
  - Global registration make dependency relationships less explicit in large applications. its makes it difficult to locate a child component's implementation from a parent component using it. This can affect long-term maintainabiliy similar to using too many global variables.
  
## ⭐Text Interpolation

- Text Interpolation is a form of data binding. We can bind simple Property Key and JavaScript Expression in our template using Text Interpolation.
- Vue uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the underlying component instance's data.
- Under the hood, Vue compiles the templates into highly-optimized Javascript code.

`Syntax :- {{ property }}`  
`Example :- `
  - `<h1> {{ msg }} </h1>`
  - `<h1> {{ num + 10 }} </h1>`
  - `<h1> {{ on ? 'dark' : 'light' }} </h1>`
  - `<h1> {{ formatDate(date) }} </h1>`
  - `<h1> {{ message.split(").reverse().join(") }} </h1>`

 `Not Do This :- `
  - `<h1> {{ var a = 10}} </h1>`
  - `<h1> {{ if(ok) { return message } }} </h1>`