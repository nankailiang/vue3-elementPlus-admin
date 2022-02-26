// src/shim.d.ts
declare module '*.vue' {
    import { Component } from "vue";
    const component: Compoent;
    export default component;
}