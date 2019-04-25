# Angular Rift

This library works similarly to [React Portals](https://reactjs.org/docs/portals.html) and allows you to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

**Example:** [Demo](https://kosmogradsky.github.io/angular-rift-example/) | [Code](https://github.com/kosmogradsky/angular-rift-library/blob/master/projects/angular-rift-example/src/app/app.component.html)

## Getting started

1. Install it:
```
npm install angular-rift
```

2. Use `riftContent` directive and `rift-outlet` component to create rifts:
- Unnamed `riftContent` will appear inside unnamed `rift-outlet`:
    ```html
    <div *riftContent>This will appear inside default rift-outlet!</div>

    <rift-outlet></rift-outlet>
    ```
- Named `riftContent` will appear inside `rift-outlet` with respective name:
    ```html
    <div *riftContent="'myOutlet'">This will appear inside default rift-outlet!</div>

    <rift-outlet name="myOutlet"></rift-outlet>
    ```