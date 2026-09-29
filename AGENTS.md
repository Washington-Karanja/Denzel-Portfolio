AGENTS.md
figma-make-app
Next.js + Tailwind CSS portfolio app.

Development Server
Run the app with npm run dev from the project root.

Project Structure
This is the canonical project structure for the current implementation.

app/ - Next.js App Router pages and route layouts
components/ - reusable UI and layout components
context/ - client-side theme context
data/ - portfolio content and route data
public/ - static assets, if added later
package.json - Next.js scripts and dependencies
app/globals.css - Tailwind CSS import and global theme styles
next.config.mjs - Next.js configuration
postcss.config.mjs - Tailwind PostCSS configuration
Dependencies
Runtime: React 19 and React DOM 19
Styling: Tailwind CSS v4
Build tooling: Next.js and TypeScript
Formatting: oxfmt
Styling
This project uses Tailwind CSS v4 via the App Router. Global theme variables and fonts live in app/globals.css.