SOLUTION
========
https://codesandbox.io/p/github/Cmac2712/petlab-test/draft/autumn-sunset

I've used URL as state management. This allows the sharing of the page via a link. It also allows to keep the bundle size down.

I've used ChakraUI as a UI library because it has a lot of components and is pretty quick and easy to get running.

I also decided to send new requests for data on filter change. Rather than fetching all the products and sorting/filtering on the front-end. I felt this was more indicitive of how I would build a real-life app which would be handling a much larger DB of products.

Stories
----------
Estimated: 3 hours

Spent: 3 hours 42 mins


Solution
--------
How I would make this solution better:

- SSR/SSG/ISR for improved perf. (vite-plugin-ssr or Next.js depending on scope) 
- Take advantage of React's concurrent features (Susepense, useDefferedValue)
- Improve responsive design. I didn't spend too much time device/browser testing so the responsiveness could be improved.
- Add a data-fetching library for better caching of server state (react-query or SWR)
- Write some unit tests with Jest + RTL to ensure functionality doesn't break as development continutes
- Write end-to-end tests with Cypress to based on stories
- Add a virtual list. (Tanstack Virtual)
- Add an eslint + prettier config to catch bugs early
- Consider adding state-management as app scales. Zustand/Jotai/Redux/xstate/mobx to handle more complex UI state 
- SOLID principles
- Add jsdoc comments. Consider adding documentation via docusaurs.
- Abstract UI into a UI library and use Storybook to develop components
- Profiling with React Dev Tools to better understand rendering issues
- Use WDYR https://github.com/welldone-software/why-did-you-render to improve performarnce by eliminating unecessary rerenders