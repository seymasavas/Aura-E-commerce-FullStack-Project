# Aura E-Commerce

Aura is a responsive e-commerce frontend built with React. It includes product browsing, customer accounts, a shopping cart, checkout flows, and order history. The project uses a remote training API for product and customer data.

## Features

- Browse products by category, filter and sort the catalog, and move between product pages.
- View product details and related products.
- Add products to the cart, change quantities, remove items, and select which items to order.
- Create an account, sign in, and keep a session for the current tab or remember it across browser sessions.
- Manage saved delivery addresses and payment cards through the API.
- Submit an order and view previous orders.
- Access checkout and order history only while signed in.
- Responsive pages for the home, shop, about, contact, team, account, cart, and checkout experiences.

## Tech Stack

- React 19 and Vite
- React Router for client-side routing
- Redux and Redux Thunk for shared state and asynchronous actions
- Axios for API requests
- Tailwind CSS 4 for styling
- React Hook Form for form handling
- Lucide React for icons
- React Toastify for notifications

## Getting Started

### Requirements

- Node.js
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite prints the local URL in the terminal after the server starts.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint across the project. |

## Application Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/shop` | Product catalog |
| `/shop/:gender/:categoryName/:categoryId` | Catalog filtered by category |
| `/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId` | Product details |
| `/cart` | Shopping cart |
| `/order` | Checkout (sign-in required) |
| `/previous-orders` | Order history (sign-in required) |
| `/about` | About |
| `/contact` | Contact |
| `/team` | Team |
| `/login` | Sign in |
| `/signup` | Create an account |

## Project Structure

```text
src/
  api/          Axios API client
  assets/       Images and other static assets
  components/   Shared and page-specific UI components
  layout/       Header, footer, and page layout components
  pages/        Route-level pages
  reducers/     Redux state reducers
  store/        Redux store and asynchronous actions
```

## API

The API client is configured in `src/api/axiosInstance.js` and currently uses:

```text
https://workintech-fe-ecommerce.onrender.com
```

The frontend expects the remote service to provide product, category, authentication, address, card, and order endpoints. Some actions, such as placing an order, depend on the API's response and availability.

## Notes

- The shopping cart is currently held in Redux memory and is cleared when the page is reloaded.
- Checkout submits card fields to the configured training API. This project does not include a production payment gateway, and its checkout flow should not be used for real payments.
- There is no automated test script configured in `package.json` yet.
