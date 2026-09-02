# Astro-clan Discord Bot

A Discord bot for league hosting.

## Setup

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

3. Fill in your environment variables with values from the [Discord Developer Portal](https://discord.com/developers/applications):
   - `DISCORD_BOT_TOKEN`: Your bot's token
   - `CLIENT_ID`: Your application's Client ID
   - `GUILD_ID`: Your Discord server's ID

4. Start the bot:
   ```bash
   npm start
   ```

### Deployment on Railway

1. Push your code to GitHub
2. Create a new Railway project and connect your repository
3. Add the following environment variables in Railway:
   - `DISCORD_BOT_TOKEN`: Your bot token
   - `CLIENT_ID`: Your bot's Client ID
   - `GUILD_ID`: Your Discord server ID

The bot will automatically start when deployed.

## Required Environment Variables

| Variable | Description | Where to Find |
|----------|-------------|----------------|
| `DISCORD_BOT_TOKEN` | Bot authentication token | [Discord Developer Portal](https://discord.com/developers/applications) → Your App → Bot → Token |
| `CLIENT_ID` | Bot's application ID | [Discord Developer Portal](https://discord.com/developers/applications) → Your App → General Information |
| `GUILD_ID` | Discord server ID | Right-click your server in Discord (with dev mode on) → Copy Server ID |

