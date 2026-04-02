# 📚 Printrado Clone

> A fully responsive e-commerce bookstore web application built with React, TypeScript, and Material UI — inspired by the [Printrado](https://printrado.com) online bookstore.

---

## 📖 Overview

**Printrado Clone** is a modern, feature-rich front-end clone of the Printrado online bookstore, specializing in technology, software engineering, data science, and business books. The application delivers a polished shopping experience with product browsing, category filtering, cart management, wishlists, fuzzy search, and form validation — all wrapped in a responsive, mobile-first UI.

This project demonstrates real-world front-end architecture patterns including Redux state management with persistence, client-side routing, schema-based form validation, and component-driven design using Material UI.

---

## ✨ Features

### 🛒 Shopping Experience
- **Product Catalog** — Browse books across multiple categories (Software Engineering, Data Science, Technology, Security, Management, Self-Help)
- **Product Details** — Detailed product pages with images, pricing, discount badges, quantity selectors, and related products
- **Shopping Cart** — Add/remove items, update quantities, and track order progress via a slide-out drawer
- **Wishlist** — Save favorite products with persistent state across sessions
- **Discount System** — Automatic price calculation with visible discount rates and strikethrough pricing

### 🔍 Search & Navigation
- **Fuzzy Search** — Instant search powered by [Fuse.js](https://fusejs.io/) with real-time result previews
- **Category Pages** — Dedicated pages for each book category with filtered product listings
- **Breadcrumb Navigation** — Contextual breadcrumbs for intuitive page hierarchy
- **Client-Side Routing** — Seamless SPA navigation with React Router v7

### 🎨 UI & Responsiveness
- **Fully Responsive** — Adaptive layouts for desktop, tablet, and mobile devices
- **Dual Header System** — Full navigation bar on desktop; compact mobile header on smaller screens
- **Image Carousel** — Swiper.js-powered product sliders on the homepage
- **Micro-Animations** — Hover effects, card lift animations, and smooth transitions throughout
- **Toast Notifications** — User feedback via React Hot Toast for cart/wishlist actions

### 🔐 Forms & Validation
- **Login & Registration Forms** — With Zod schema validation and React Hook Form
- **Contact Form** — Multi-field form with real-time validation feedback
- **OAuth Placeholders** — Google and Facebook sign-in UI

### 💾 State Management
- **Redux Toolkit** — Centralized store for cart and wishlist state
- **Redux Persist** — Cart and wishlist data survive page reloads via localStorage
- **Type-Safe Hooks** — Custom typed `useAppDispatch` and `useAppSelector` hooks

---

---

## 🛠️ Tech Stack

| Category            | Technologies                                                                  |
|---------------------|-------------------------------------------------------------------------------|
| **Framework**       | React 19, TypeScript                                                          |
| **Build Tool**      | Vite 8                                                                        |
| **UI Library**      | Material UI (MUI) 7, Emotion (CSS-in-JS)                                     |
| **State Management**| Redux Toolkit, React Redux, Redux Persist                                     |
| **Routing**         | React Router DOM v7                                                           |
| **Forms**           | React Hook Form, Zod (schema validation), @hookform/resolvers                 |
| **Search**          | Fuse.js (fuzzy search)                                                        |
| **Carousel**        | Swiper.js                                                                     |
| **Icons**           | MUI Icons, React Icons                                                        |
| **Notifications**   | React Hot Toast                                                               |
| **SEO**             | React Helmet Async                                                            |
| **Animations**      | React CountUp                                                                 |
| **Linting**         | ESLint, typescript-eslint                                                     |
| **Deployment**      | Vercel                                                                        |

---


**Key Patterns:**
- **Component-Driven UI** — Reusable, self-contained components with typed props
- **Centralized State** — Redux Toolkit slices with persistence middleware
- **Type Safety** — Full TypeScript coverage with shared interfaces and type declarations
- **Utility Abstraction** — Cart/wishlist logic extracted into pure utility functions

---


## 🚀 Running the Project

| Command            | Description                          |
|--------------------|--------------------------------------|
| `yarn dev`         | Start development server with HMR    |
| `yarn build`       | Type-check and build for production  |
| `yarn preview`     | Preview the production build locally |
| `yarn lint`        | Run ESLint across the project        |

---

## 📘 Usage Guide

1. **Browse Products** — Navigate through categories via the top navigation bar (Software Engineering, Data Science, Technology, etc.)
2. **Search** — Use the search bar in the header to find books by title with instant fuzzy matching
3. **View Details** — Click any product card to see full details, descriptions, and related products
4. **Add to Cart** — Click "Add to Cart" on product cards or detail pages; adjust quantities in the cart drawer
5. **Wishlist** — Click the heart icon on any product to save it to your wishlist
6. **Cart Drawer** — Click the cart icon in the header to review items, see totals, and track free shipping progress
7. **Authentication** — Access login/register forms via the "My Account" page

> **Note:** This is a front-end clone — authentication and payment processing are UI-only and do not connect to a backend.

---

## 📁 Project Structure

```
printrado-clone/
├── public/
│   └── images/              # Static images (logo, favicon, backgrounds)
├── src/
│   ├── app/
│   │   ├── features/        # Redux slices
│   │   │   ├── cart/        #   └── Cart state management
│   │   │   └── wishList/    #   └── Wishlist state management
│   │   ├── hooks.ts         # Typed Redux hooks
│   │   └── store.ts         # Redux store configuration with persistence
│   ├── components/
│   │   ├── Layout/          # Header (Desktop + Mobile) & Footer
│   │   ├── Home/            # Homepage product listings
│   │   ├── ProductDetails/  # Product detail page components
│   │   ├── ShoppingCartDrawer/  # Cart drawer components
│   │   ├── SearchBox/       # Search UI and result cards
│   │   ├── MyAccount/       # Login, Register, OAuth components
│   │   ├── Contact/         # Contact form & FAQ accordion
│   │   ├── Wishlist/        # Wishlist page components
│   │   ├── cart/            # Cart page components
│   │   ├── ProductCard.tsx  # Reusable product card component
│   │   └── BreadCrumb.tsx   # Breadcrumb navigation
│   ├── data/                # Static product data & navigation config
│   ├── interfaces/          # TypeScript interfaces
│   ├── pages/               # Route-level page components
│   ├── types/               # Type declarations (MUI theme extensions)
│   ├── utils/               # Utility functions & Zod schemas
│   ├── App.tsx              # Root component with RouterProvider
│   ├── main.tsx             # Entry point (Theme, Redux, Helmet providers)
│   └── index.css            # Global styles & CSS variables
├── vercel.json              # Vercel deployment config (SPA rewrites)
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```


---

## 👤 Author

| | Details |
|---|---|
| **Name** | Mohamed Ayman |
| **GitHub** | [MohamedAyman-11](https://github.com/MohamedAyman-11) |
| **LinkedIn** | [Mohamed Ayman](https://www.linkedin.com/in/mohamedayman-dev/) |
| **Email** | master.mohamed.ayman@gmail.com |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

⭐ **If you found this project helpful, consider giving it a star!** ⭐

</div>
