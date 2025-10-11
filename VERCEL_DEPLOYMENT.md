# Deploying to Vercel

This guide will help you deploy your application to Vercel successfully.

## Prerequisites

1. A [Vercel account](https://vercel.com/signup)
2. Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)
3. A PostgreSQL database (if you need database functionality)

## Deployment Steps

### 1. Prepare Your Repository

Make sure all your changes are committed and pushed to your Git repository:

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Import Project to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Import your Git repository
4. Vercel will automatically detect the project settings

### 3. Configure Environment Variables

In your Vercel project settings, add the following environment variables:

**Required:**
- `DATABASE_URL` - Your PostgreSQL connection string
  - Format: `postgresql://user:password@host:5432/database`
  - You can use services like:
    - [Neon](https://neon.tech/) (Recommended - Free tier available)
    - [Supabase](https://supabase.com/) (Free tier available)
    - [Railway](https://railway.app/)
    - [PlanetScale](https://planetscale.com/)

**Optional:**
- `NODE_ENV` - Set to `production` (Vercel sets this automatically)

### 4. Deploy

1. Click **"Deploy"**
2. Wait for the build to complete
3. Your app will be live at `https://your-project.vercel.app`

## Important Notes

### Serverless Architecture

Your Express.js application runs as serverless functions on Vercel:

- **No persistent connections**: Each API request runs in an isolated function
- **10-second timeout** on free tier (60 seconds on Pro)
- **No WebSockets**: Use Vercel Edge Functions or external services if needed
- **Stateless**: In-memory storage (like the current MemStorage) will reset between requests

### Database Recommendations

Since Vercel uses serverless functions, use a database that supports:
- Connection pooling
- Serverless-friendly connections

**Recommended providers:**
- **Neon** - Serverless PostgreSQL with auto-scaling
- **Supabase** - PostgreSQL with built-in connection pooling

### Project Structure

The following files have been configured for Vercel deployment:

- `vercel.json` - Vercel configuration
- `api/index.ts` - Serverless API entry point
- `.env.example` - Environment variables template

### Build Configuration

Vercel will:
1. Build the frontend using `vite build`
2. Bundle the API using `@vercel/node`
3. Deploy both as serverless functions

## Troubleshooting

### 404 Errors
- Ensure your API routes are prefixed with `/api`
- Check that `api/index.ts` is properly exporting the Express app

### Database Connection Errors
- Verify `DATABASE_URL` is set in Vercel environment variables
- Ensure your database allows connections from Vercel's IP ranges
- For Neon/Supabase, make sure to use the connection pooling URL

### Build Failures
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify TypeScript types are correct

### Environment Variables Not Working
- Redeploy after adding new environment variables
- Environment variables are only available at build time and runtime

## Local Development

To test locally with Vercel's environment:

```bash
# Install Vercel CLI
npm i -g vercel

# Run locally
vercel dev
```

## Custom Domain

To add a custom domain:
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your domain and follow the DNS configuration instructions

## Support

For issues specific to Vercel deployment:
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Discord Community](https://vercel.com/discord)

For application-specific issues, check the logs in your Vercel dashboard.
