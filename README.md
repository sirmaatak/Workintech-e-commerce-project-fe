# React E-Commerce Frontend

A responsive, multi-page e-commerce frontend built with React and developed as part of the Workintech Full Stack Web Development Program.

[View Live Demo](https://workintech-e-commerce-project-fe.vercel.app)

## Overview

This project demonstrates the frontend architecture of an e-commerce application. It includes reusable UI components, responsive page layouts, product presentation, authentication flows, form validation, and API integration.

## Features

- Responsive desktop and mobile layouts
- Multi-page navigation with React Router
- Home, Shop, Product, Blog, About, Team, and Contact pages
- Paginated product catalog
- Product detail pages with pricing and availability information
- Login and role-based registration flows
- Conditional store registration fields
- Client-side form validation with React Hook Form
- Authentication API integration with Axios
- Optional token persistence with “Remember me”
- Global state management with Redux and Redux Thunk
- Toast notifications for authentication feedback
- User avatar support with Gravatar
- Reusable component and layout architecture

## Technology Stack

- **Frontend:** React, JavaScript, HTML, CSS
- **Styling:** Tailwind CSS
- **State Management:** Redux, React Redux, Redux Thunk
- **Forms:** React Hook Form
- **Routing:** React Router
- **API:** Axios
- **UI Libraries:** Swiper, Lucide React, React Toastify, React Gravatar
- **Build Tool:** Vite
- **Code Quality:** ESLint

## Current Scope

The project currently focuses on the storefront interface and authentication flows.

- Product content is provided through local sample data.
- Login, registration, and role information use the Workintech API.
- Full shopping cart and checkout functionality are planned for future development.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/sirmaatak/react-ecommerce-frontend.git
cd react-ecommerce-frontend
npm install
npm run dev
```

Open the local URL displayed by Vite in your browser.

## Available Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Project Structure

```text
src/
├── api/          # Axios configuration
├── components/   # Reusable UI components
├── layout/       # Shared page layouts
├── pages/        # Application pages
├── router/       # Route configuration
├── services/     # API services
└── store/        # Redux state, reducers, actions, and thunks
```

## API

Authentication and role operations use the Workintech e-commerce API:

```text
https://workintech-fe-ecommerce.onrender.com
```

## Training

Developed as part of the **Workintech Full Stack Web Development Program**.
