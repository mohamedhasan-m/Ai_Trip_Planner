# AI Trip Planner ✈️

[![Next.js](https://img.shields.io/badge/Next.js-16.4.5-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

An AI-powered trip planning web application built with **Next.js, React, TypeScript, Clerk and Convex**. The project is designed around a conversational trip-planning experience, helping users explore destinations and prepare for their next journey through a modern web interface.

The current repository includes the application landing page, destination discovery carousel, authentication flows, user profile persistence, and an Arcjet-protected API example. Trip generation and itinerary management are part of the product direction and can be added as the application evolves.

## ✨ Current Features

- **Modern landing page:** A responsive homepage introducing the AI trip-planning experience.
- **Destination discovery:** Browse a curated carousel of popular destinations including New York, Tokyo, Rome, Dubai, Kerala and Paris.
- **Authentication:** Sign-in and sign-up pages powered by Clerk.
- **User profile persistence:** Save a signed-in user's name, email and profile image in Convex.
- **Duplicate user check:** Look up an existing user by email before inserting a new user record.
- **Protected application routes:** Clerk middleware protects routes outside the configured public route list.
- **API rate-limit example:** An Arcjet token-bucket example route demonstrates request protection.
- **Reusable UI components:** Tailwind CSS, shadcn-based components, Lucide icons and Motion-powered UI dependencies.

> **Implementation note:** The checked-in source currently demonstrates the foundation and user experience for the trip planner. Do not assume that AI itinerary generation, flight/hotel booking, map-based routes, saved trips, payments or subscription billing are already implemented in this repository version.

## 🧰 Tech Stack

| Area | Technology |
|---|---|
| Framework | Next.js 16.4.5 (App Router) |
| UI library | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Authentication | Clerk |
| Backend and database | Convex |
| API protection | Arcjet for Next.js |
| UI components | shadcn, Base UI |
| Icons | Lucide React, Tabler Icons |
| Animation | Motion |
| Package manager | npm (package-lock.json included) |

## 🗂️ Project Structure

The repository contains the Next.js application inside the `ai-trip-planner/` directory. Supporting design/reference material is stored in `docs/`.

```text
Ai_Trip_Planner/
├── ai-trip-planner/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── sign-in/
│   │   │   └── sign-up/
│   │   ├── _components/
│   │   │   ├── Header.tsx
│   │   │   ├── PopularCityList.tsx
│   │   │   └── hero.tsx
│   │   ├── api/
│   │   │   └── arcjet/
│   │   │       └── route.ts
│   │   ├── ConvexClientProvider.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── provider.tsx
│   ├── components/
│   │   └── ui/
│   ├── context/
│   │   └── UserDetailContext.tsx
│   ├── convex/
│   │   ├── _generated/
│   │   ├── schema.ts
│   │   └── user.ts
│   ├── hooks/
│   ├── lib/
│   ├── public/
│   ├── middleware.ts
│   ├── next.config.ts
│   ├── package.json
│   └── tsconfig.json
└── docs/
    ├── reference.md
    └── design reference image
```

## 🚀 Getting Started

### Prerequisites

Install the following before running the application:

- **Node.js** (a current LTS release is recommended)
- **npm**
- A **Clerk** application for authentication
- A **Convex** project for the database
- An **Arcjet** key for the API protection example

Check your local installation:

```bash
node --version
npm --version
```

### 1. Clone the repository

```bash
git clone https://github.com/mohamedhasan-m/Ai_Trip_Planner.git
cd Ai_Trip_Planner/ai-trip-planner
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file inside the `ai-trip-planner/` directory.

Add the keys for your own Clerk, Convex and Arcjet projects:

```env
# Convex deployment URL
NEXT_PUBLIC_CONVEX_URL=

# Clerk authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Arcjet API protection
ARCJET_KEY=
```

Use the environment variable names expected by the application and the corresponding provider dashboards. Never commit `.env.local`, API keys, or secret credentials to GitHub.

### 4. Configure Convex

Make sure your Convex deployment is created and that `NEXT_PUBLIC_CONVEX_URL` points to the correct deployment.

The application defines a Convex `UserTable` with these fields:

- `name`
- `email`
- `imageUrl`
- `subscription` (optional)

The `CreateNewUser` mutation checks for an existing user by email and creates a record when one is not found.

If you change the Convex schema or functions, synchronize the project with your Convex development deployment using the Convex CLI and regenerate the generated API types as required.

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Create a production build

```bash
npm run build
npm run start
```

## 🔐 Authentication and User Data Flow

1. Clerk provides the sign-in and sign-up experience.
2. The application reads the authenticated user through Clerk's `useUser` hook.
3. The client provider calls the Convex `CreateNewUser` mutation for a signed-in user.
4. Convex checks whether the user's email already exists in `UserTable`.
5. If no matching record exists, the user's name, email and image URL are stored.
6. The resulting user record is made available to the application through `UserDetailContext`.

## 🛡️ Route Protection and API Security

- Clerk middleware makes the home, sign-in and sign-up routes public and protects other matched application routes.
- The Arcjet API route demonstrates a token-bucket rate-limiting rule and returns HTTP `429` when a request is denied.

**Before deploying:** Review the Arcjet example's placeholder user identifier and rate-limit configuration. Connect it to the real authenticated user identity and tune the rule for the intended endpoint. Do not treat the sample route as complete production security.

## 🧭 Product Roadmap

Potential next steps for the project include:

- Build the complete trip creation flow from a user's natural-language prompt.
- Generate personalized itineraries with an AI model.
- Add trip details, day-wise activities and travel recommendations.
- Integrate interactive maps and location coordinates.
- Add hotel and activity discovery.
- Allow users to save, edit, delete and revisit trips.
- Add trip sharing and conversational itinerary changes.
- Add subscription plans and payment integration.
- Expand automated tests and production monitoring.

## 🤝 Contributing

This is an evolving personal project. Suggestions, bug reports and improvements are welcome through GitHub Issues and Pull Requests.

## 👨‍💻 Author

**Mohamed Hasan**  
GitHub: [@mohamedhasan-m](https://github.com/mohamedhasan-m)

## 📚 References

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Convex Documentation](https://docs.convex.dev/)
- [Arcjet Documentation](https://docs.arcjet.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

⭐ If you find this project interesting, consider starring the repository.
