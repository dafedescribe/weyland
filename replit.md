# D-Wey WhatsApp Link Service

## Overview

D-Wey is a WhatsApp link shortening and analytics service designed as a modern, single-page marketing website. The application allows users to turn WhatsApp numbers into trackable short links, monitor clicks, and grow their business through smart link management. The project is built as a static marketing site with planned backend functionality for link creation, analytics tracking, and user management.

## Recent Changes

**Custom Logo Implementation** (October 11, 2025)
- Replaced default WhatsApp icons with custom brand logo
- Custom logo downloaded from Google Drive and stored at `client/public/custom-logo.png`
- Updated Navigation, Footer, and Hero components to use custom logo
- Maintained WhatsApp icons in CTA buttons as they represent WhatsApp actions
- Logo implementation is production-ready for Vercel deployment

**Vercel Deployment Setup** (October 11, 2025)
- Created `vercel.json` configuration for serverless deployment
- Built `api/index.ts` serverless entry point for Express backend
- Created `.env.example` documenting required environment variables
- Documented deployment process in `VERCEL_DEPLOYMENT.md`
- Application is Vercel-ready with no Replit environment dependencies

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- React 18+ with TypeScript for type safety and developer experience
- Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Single-page application (SPA) architecture using Wouter for lightweight client-side routing

**UI Component Strategy**
- Shadcn/ui component library based on Radix UI primitives for accessible, customizable components
- Custom theme system with light/dark mode support via React Context
- Tailwind CSS for utility-first styling with custom design tokens
- Design follows WhatsApp-themed emerald green color palette with glassmorphism effects

**State Management**
- TanStack React Query (v5) for server state management and data fetching
- React Context for theme state (ThemeProvider)
- Local component state using React hooks for UI interactions

**Styling Architecture**
- Tailwind CSS with custom configuration extending base theme
- CSS variables for theme colors supporting dark mode
- Custom utility classes for hover/active states (`hover-elevate`, `active-elevate-2`)
- Component-specific styles using `cn()` utility (clsx + tailwind-merge)

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server framework
- TypeScript for type safety across backend code
- Development and production modes with environment-based configuration

**Development Setup**
- Vite middleware integration in development for HMR
- Custom logging middleware for API request monitoring
- Error handling middleware for consistent error responses

**Storage Layer**
- In-memory storage implementation (MemStorage) as current solution
- Interface-based storage design (IStorage) for easy database migration
- Drizzle ORM configured for PostgreSQL (via Neon Database) for future production use
- Schema defines basic user model with username/password authentication

**Database Design**
- PostgreSQL configured via Drizzle with Neon serverless driver
- User table with UUID primary keys, unique usernames
- Schema validation using Zod via drizzle-zod
- Migration system configured (output to `./migrations`)

### External Dependencies

**UI & Components**
- Radix UI primitives (@radix-ui/*) - Accessible, unstyled component primitives
- Lucide React - Icon library for modern iconography
- React Icons (specifically SiWhatsapp, SiX, SiInstagram) - Additional brand icons
- React Scroll - Smooth scrolling navigation for single-page layout
- Framer Motion or CSS animations (planned) - UI animations

**Development Tools**
- Replit-specific plugins for development banner, cartographer, and error overlay
- ESBuild for production server bundling
- PostCSS with Tailwind and Autoprefixer

**Database & ORM**
- Drizzle ORM (v0.39+) - Type-safe SQL query builder
- @neondatabase/serverless - Neon's serverless PostgreSQL driver
- Drizzle Kit - Database migration tooling

**Form & Validation**
- React Hook Form with @hookform/resolvers for form state management
- Zod for schema validation (integrated with Drizzle)

**Date & Utilities**
- date-fns for date manipulation and formatting
- nanoid for generating unique IDs
- class-variance-authority (CVA) for component variant styling

**Session Management**
- connect-pg-simple configured for PostgreSQL session storage (planned)
- Express session handling for authentication (to be implemented)

### Key Architectural Decisions

**Single-Page Marketing Site**
- Chose SPA architecture for smooth user experience with scroll-based navigation
- All content centralized in `client/src/config/content.ts` for easy customization
- Component-based sections (Hero, Features, Pricing, FAQ, etc.) for modularity

**Storage Abstraction**
- Implemented IStorage interface to allow switching from in-memory to PostgreSQL without changing business logic
- Current MemStorage for rapid prototyping and testing
- Drizzle ORM pre-configured for seamless PostgreSQL migration

**Design System Approach**
- WhatsApp-inspired color scheme (emerald green primary) for brand recognition
- Comprehensive design guidelines documented in `design_guidelines.md`
- Reusable component patterns with consistent spacing and elevation utilities

**Type Safety & Developer Experience**
- Full TypeScript coverage across client and server
- Shared schema types between frontend and backend via `@shared` alias
- Path aliases configured (@/, @shared/, @assets/) for clean imports

**Deployment Strategy**
- Static site generation for frontend (build to `dist/public`)
- Server bundle via ESBuild for production deployment
- Environment-based configuration for development vs production