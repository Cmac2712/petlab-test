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
2. SSR for improved perf. (vite-plugin-ssr or Next.js depending on scope)
3. Take advantage of React's concurrent features (Susepense, useDefferedValue)
4. Improve responsive design. I didn't spend too much time device/browser testing so the responsiveness could be improved.
5. Add a data-fetching library for better caching of server state (react-query or SWR)