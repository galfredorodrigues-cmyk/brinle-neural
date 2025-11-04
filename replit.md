# Brinle Neural - Neural Activation Tool for Children

## Overview

Brinle Neural is a productivity and focus tool designed specifically for children, featuring an immersive neural-themed interface. The application creates a gamified, engaging experience that helps children develop focus through 40Hz neural stimulation, visual feedback, and calming animations. The design combines futuristic sci-fi aesthetics with child-friendly interaction patterns, making productivity feel like an adventure.

The application features a central neural activation button that triggers 40Hz audio playback, dynamic neural indicators, particle animations, and a word flow system that displays Portuguese vocabulary words to maintain engagement during focus sessions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript running on Vite for fast development and optimized production builds.

**UI Component Library**: Shadcn/ui (New York style variant) built on Radix UI primitives, providing accessible, customizable components with a consistent design system.

**Styling Approach**: 
- Tailwind CSS for utility-first styling with custom design tokens
- CSS variables for theming (neural dark theme with electric blue and purple accents)
- Custom neural.css for specialized immersive effects
- Framer Motion for fluid animations and transitions

**Design System**:
- Neural/sci-fi theme optimized for children
- Primary colors: dark backgrounds (#050510), electric blue (#00E5FF), purple (#8B5CF6)
- Typography: Space Grotesk for headings, Inter for body text, JetBrains Mono for monospace
- Touch-first responsive design with generous spacing (Tailwind units: 4, 6, 8, 12, 16)
- Continuous calming animations to aid focus

**Key Components**:
- `NeuralButton`: Central activation button with pulsing glow effects
- `NeuralIndicator`: Dynamic progress bars for Ondas Neurais, Nível de Foco, Flow State
- `NeuralBackground`: Animated background with neural network patterns
- `NeuralParticles`: Rising particle effects for ambient motion
- `BreathingBars`: Vertical animated bars that breathe with focus state
- `WordFlow`: Cycling Portuguese vocabulary display during active sessions

**State Management**: React hooks (useState, useEffect, useRef) with TanStack Query for future API integration.

**Routing**: Wouter for lightweight client-side routing.

**Audio Integration**: Tone.js library for 40Hz binaural beat generation and playback, with mobile touch-unlock support.

### Backend Architecture

**Server Framework**: Express.js with TypeScript running in Node.js environment.

**Build System**: 
- Vite for frontend bundling with HMR in development
- esbuild for server-side TypeScript compilation
- Custom Vite middleware integration for SSR-style development experience

**API Structure**: RESTful API with `/api/*` prefix convention (currently minimal, prepared for expansion).

**Development Tools**:
- Replit-specific plugins for runtime error overlay and development banner
- Custom request logging middleware with response capture
- Path alias resolution (@/, @shared, @assets)

### Data Storage

**Current Implementation**: In-memory storage using custom `MemStorage` class implementing the `IStorage` interface.

**Prepared Schema** (Drizzle ORM with PostgreSQL dialect):
- Users table with UUID primary keys, username, and password fields
- Zod schemas for validation via drizzle-zod

**Future Ready**: The application is architected to easily swap from in-memory storage to PostgreSQL via Drizzle ORM without code changes to business logic.

**Session Management**: Express-session with connect-pg-simple configured for PostgreSQL session storage when database is added.

### Authentication & Authorization

**Current State**: Authentication infrastructure prepared but not yet implemented in routes.

**Prepared Components**:
- User schema with username/password fields
- Storage interface with user CRUD methods
- Session configuration ready for cookie-based auth

**Future Implementation**: Standard username/password authentication with session-based authorization is architecturally ready.

## External Dependencies

### Third-Party Libraries

**UI & Interaction**:
- `@radix-ui/*`: Comprehensive set of unstyled, accessible UI primitives (accordion, dialog, dropdown, popover, etc.)
- `framer-motion`: Declarative animations and transitions for neural effects
- `lucide-react`: Icon library for UI elements
- `class-variance-authority` & `clsx`: Utility for conditional CSS class management
- `cmdk`: Command palette component
- `embla-carousel-react`: Carousel component
- `react-day-picker`: Calendar/date picker
- `vaul`: Drawer component
- `input-otp`: OTP input field
- `react-resizable-panels`: Resizable panel layouts

**Forms & Validation**:
- `react-hook-form`: Form state management
- `@hookform/resolvers`: Form validation resolvers
- `zod`: Schema validation
- `drizzle-zod`: Drizzle ORM to Zod schema conversion

**Data Fetching**:
- `@tanstack/react-query`: Async state management and data fetching
- `axios`: HTTP client (used in legacy code snippets)

**Audio**:
- `tone`: Web Audio API framework for 40Hz binaural beat generation

**Database & ORM**:
- `drizzle-orm`: TypeScript ORM for SQL databases
- `drizzle-kit`: CLI tools for migrations and schema management
- `@neondatabase/serverless`: Neon PostgreSQL serverless driver

**Utilities**:
- `date-fns`: Date manipulation library
- `tailwind-merge`: Intelligent Tailwind class merging
- `recharts`: Charting library (prepared for future analytics)
- `nanoid`: Unique ID generation

### Development Dependencies

**Build Tools**:
- `vite`: Frontend build tool and dev server
- `@vitejs/plugin-react`: React support for Vite
- `esbuild`: JavaScript/TypeScript bundler for server
- `typescript`: Type checking and compilation
- `tsx`: TypeScript execution for development

**Replit Integration**:
- `@replit/vite-plugin-runtime-error-modal`: Development error overlay
- `@replit/vite-plugin-cartographer`: Code navigation
- `@replit/vite-plugin-dev-banner`: Development mode indicator

**Styling**:
- `tailwindcss`: Utility-first CSS framework
- `autoprefixer`: CSS vendor prefixing
- `postcss`: CSS transformation

### Assets & Resources

**Static Assets**:
- `40hz.mp3`: 40Hz binaural beat audio file for neural stimulation (stored in public folder)
- Neural network background patterns (in attached_assets/generated_images/)
- Custom fonts loaded from Google Fonts (Space Grotesk, Inter, JetBrains Mono)

**Design References**:
- Inspired by Endel, Brain.fm, and Focus@Will productivity apps
- Futuristic/sci-fi aesthetic with child-friendly adaptations
- Portuguese language content for Brazilian market

### External Services

**Currently None**: The application is fully self-contained with no external API dependencies.

**Prepared For**:
- PostgreSQL database (Neon or standard PostgreSQL)
- Future AI integrations for personalized focus recommendations
- Analytics dashboards for tracking child progress
- User profile management and data persistence