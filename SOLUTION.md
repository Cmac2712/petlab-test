SOLUTION
========
I've used URL as state management. This allows the sharing of the page via a link. It also allows to keep the bundle size down.

I've used ChakraUI as a UI library because it has a lot of components and is pretty quick and easy to get running.

I also decided to send new requests for data on filter change. Rather than fetching all the products and sorting/filtering on the front-end. I felt this was more indicitive of how I would build a real-life app which would be handling a much larger DB of products.

Estimations
----------
Estimated: 3 hours

Spent: 3 hours 42 mins


Solution
--------
How I would make this solution better:

1. Add a virtual list. (Tanstack Virtual)
2. SSR/SSG/ISR for improved perf. (vite-plugin-ssr or Next.js depending on scope) 
3. Take advantage of React's concurrent features (Susepense, useDefferedValue)
4. Improve responsive design. I didn't spend too much time device/browser testing so the responsiveness could be improved.
5. Add a data-fetching library for better caching of server state (react-query or SWR)
6. Write some unit tests with Jest + RTL to ensure functionality doesn't break as development continutes
7. Write end-to-end tests with Cypress to based on stories
8. Add an eslint + prettier config to catch bugs early
9. Consider adding state-management as app scales. Zustand/Jotai/Redux/xstate/mobx to handle more complex UI state 
10. SOLID principles
11. Add jsdoc comments. Consider adding documentation via docusaurs.
12. Abstract UI into a UI library and use Storybook to develop components
13. Profiling with React Dev Tools to better understand rendering issues
14. Use WDYR (https://github.com/welldone-software/why-did-you-render)[https://github.com/welldone-software/why-did-you-render] to improve performarnce by eliminating unecessary rerenders