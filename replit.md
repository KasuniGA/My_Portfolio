# Kasuni Abeynayake Portfolio

## Overview

This is a personal portfolio website built as a full-stack application showcasing Kasuni Abeynayake's work as a Computer Science undergraduate. The application features a modern React frontend with a Node.js/Express backend, designed to present projects, skills, and professional information in an elegant, responsive interface.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (TanStack Query) for server state
- **Animation**: Framer Motion for smooth animations and transitions
- **Theme System**: Custom theme provider supporting light/dark modes

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Email Service**: Nodemailer for contact form functionality
- **Session Management**: Ready for PostgreSQL session storage
- **Development**: Vite integration for hot module replacement

### Build System
- **Bundler**: Vite for frontend development and building
- **TypeScript**: Strict mode enabled with path aliases
- **Build Target**: ESM modules for both client and server
- **Production**: esbuild for server bundling

## Key Components

### Frontend Components
1. **Hero Section**: Animated introduction with rotating titles
2. **About Section**: Personal information and background
3. **Skills Section**: Interactive skill bars with animations
4. **Projects Section**: Portfolio projects with tech stack highlighting
5. **Resume Section**: Download functionality for PDF resume
6. **Contact Section**: Contact form with validation and email integration
7. **Navigation**: Sticky navigation with smooth scrolling
8. **Theme Toggle**: Dark/light mode switching

### Backend Services
1. **Contact API**: Handles form submissions and sends emails
2. **Static File Serving**: Serves built React application
3. **Development Middleware**: Vite integration for HMR
4. **Error Handling**: Centralized error handling middleware

### Database Schema
- **Users Table**: Basic user structure with username/password fields
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations
- **Drizzle ORM**: Type-safe database operations with PostgreSQL dialect

## Data Flow

1. **Client Requests**: React application handles routing and UI state
2. **API Calls**: TanStack Query manages server state and caching
3. **Form Submissions**: Contact form data sent to `/api/contact` endpoint
4. **Email Processing**: Nodemailer handles email sending via SMTP
5. **Static Assets**: Vite serves development assets, Express serves production build

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **react-intersection-observer**: Scroll-based animations
- **nodemailer**: Email sending capability

### UI/UX Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **class-variance-authority**: Type-safe variant styling

### Development Dependencies
- **vite**: Fast development server and build tool
- **@replit/vite-plugin-***: Replit-specific development plugins
- **tsx**: TypeScript execution for Node.js

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with HMR
- **Replit Integration**: Specialized plugins for Replit environment
- **Database**: Configured for PostgreSQL with Drizzle migrations

### Production Build
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Static Serving**: Express serves built frontend assets
4. **Environment Variables**: Database URL and email credentials required

### Database Management
- **Migrations**: Drizzle Kit handles schema migrations
- **Connection**: Environment-based database URL configuration
- **Session Storage**: PostgreSQL-backed session management ready

## Changelog

```
Changelog:
- July 05, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```