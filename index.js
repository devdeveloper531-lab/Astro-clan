// Load .env file only in development (dotenv silently fails if no .env file exists)
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const {
  Client,
  GatewayIntentBits,
  ChannelType,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  SlashCommandBuilder,
  REST,
  Routes,
  ThreadAutoArchiveDuration,
} = require('discord.js');
const fs = require('fs');
const path = require('path');

// ─── Config ────────────────────────────────────────────────────────────
const TOKEN          = process.env.DISCORD_BOT_TOKEN;
const CLIENT_ID      = process.env.CLIENT_ID;
const GUILD_ID       = process.env.GUILD_ID;

// Validate required environment variables
if (!TOKEN || !CLIENT_ID || !GUILD_ID) {
  console.error('❌ Missing required environment variables:');
  if (!TOKEN) console.error('  - DISCORD_BOT_TOKEN');
  if (!CLIENT_ID) console.error('  - CLIENT_ID');
  if (!GUILD_ID) console.error('  - GUILD_ID');
  process.exit(1);
}

console.log('✅ All required environment variables are set');

const LEAGUE_CHANNEL = '1498804106628956211';
const SHOP_CHANNEL   = '1510600135862648952';
const HOST_ROLE      = '1459877884645740846';
const PING_ROLE      = '1451553808697266257';
const HICOM_ROLE     = '1460605334619029658';
const STAFF_ROLE     = '1412793351677284484';
const TRIAL_MOD_ROLE = '1417600601281527928';
const SUPPORT_CHANNEL = '1498820273636507648';
const REVIEW_CHANNEL = '1502799948293603570';
const RANK_MANAGEMENT_CHANNEL = '1525562410998562846';
const RANK_MANAGEMENT_ROLE = '1447272673179602984';

// ── Level role IDs — fill these in with your actual Discord role IDs ──────────
const LEVEL_ROLES = [
  { points: 100,  roleId: 'ROLE_ID_LEVEL_1', label: 'LEVEL 1 - NOOB'     },
  { points: 250,  roleId: 'ROLE_ID_LEVEL_2', label: 'LEVEL 2 - BEGINNER'  },
  { points: 500,  roleId: 'ROLE_ID_LEVEL_3', label: 'LEVEL 3 - SEMI PRO'  },
  { points: 1000, roleId: 'ROLE_ID_LEVEL_4', label: 'LEVEL 4 - PRO'       },
  { points: 2500, roleId: 'ROLE_ID_LEVEL_5', label: 'LEVEL 5 - ELITE'     },
  { points: 5000, roleId: 'ROLE_ID_LEVEL_6', label: 'LEVEL 6 - LEGEND'    },
];

const FORMAT_CAPACITY = { '2v2': 4, '3v3': 6, '4v4': 8 };
const REGION_LABELS   = {
  europe:        'Europe',
  asia:          'Asia',

