//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "basanzietech@gmail.com";
global.location = "Goba,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/basanzietech/shakira-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaJX1NzCxoAyVGHlfY2l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaJX1NzCxoAyVGHlfY2l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e11bafaedba6aebcd9410.jpg";
global.devs = "255657779003";
global.sudo = process.env.SUDO || "255657779003";
global.owner = process.env.OWNER_NUMBER || "255657779003";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://shakira-md-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk1WVFMvOGtBeHRxVjZXK1BLcTJBT0dTeEJOTE5yR2w5SmZTWDNUQWprVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkxEaXZJY2VYZ3h6TG1aNTlRMy9Zakd6aUZxMmhPRWtxT2ZyMW5JSGswTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQXlHdHBRZ0hrb3hVSzUyZmZLb2ZwajlxMXRGVFJUS2E0bFU1N0dweW1VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmOWxjbkw1clRXWUFMaTAzTS91UzBSSmYwSWJxTlo4VWxYWnBSV3ArVENVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldCUVp6Q1pyQlp3SFQxb1l3aDYxMXc2dzBURTRCUnFkRG93dXI5cFlkMHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImF0V0RweUJFN1IxZG4rZG9NSEVwODQ5STZJYk1udWpVY3hGZnlhTGFTR3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUtsQjkwU2RvYzJGa3p2WjY3Tk9EdG9aVGFPRXZFZC91SVJ6NlJhT2Ixcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNDBYM1hwelN3M0Z6bFNIOHVOSW1iLzZRN0ZmNVg5Y2hSYjh5Nm5abFBDUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNzc1pkVUVlUTVuTDBMdU9IbHpyR3lxUDFwVHFpN2JycmMvRnJVcGtoVEd3cEN3MnNlRktzUGNLMW9MNXNLNDhxZEdvK0o1UVBNV3p6RmxubEpTaEN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA3LCJhZHZTZWNyZXRLZXkiOiJuRDRoUm1WNlVZalc2N3dXQndYdGdxK0hlcllRdEtmM1ltdzN3ZE95L3V3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5Y25aRll5MFJ3R0ZUcnd5SGc0Z2pRIiwicGhvbmVJZCI6IjVkM2Q3MDdmLTRhMTUtNDc0NC1iMjk0LTRhOWI0MjgyZDQ0NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSVzI5bjlKZ2xuSzRBRmlYbGE1ZkZoN3ZpdzA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME01NVR3UmxrQVN2bGRoQW85QXhyUjhiajdVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjQ2WFBFNTZFIiwibWUiOnsiaWQiOiIyNTU2NTM4NDk3NTM6N0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWJicmNNSEVKQzgxTFFHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiS0RXY1lhUEtGSlJqSG9vZkR1Tkl4a1lNRTZidWUycmRNUWtianY5eXcyWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVWlnejdIOUFFbnFiVkhVV3ZUVlQ1WmRybElSTzJZSk1LRlprRm9wdkN4ZitCSFdoOEw1VTc5UEdTNWtaUFdoN3JTUityOUdUa3ZsRm1RRlp1U29BRGc9PSIsImRldmljZVNpZ25hdHVyZSI6InhnYnJEWW5sMmZaczMxUkp4OTJ2ZXVWaFdGM0JGZlVvUnJHZjFQcmFrU0FMZmpjL1huSmNjQXN4dlFjZ3RPMXY1cTY2WnpUK3VEaWJSSVlNQ0JxbENnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NjUzODQ5NzUzOjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU2cxbkdHanloU1VZeDZLSHc3alNNWkdEQk9tN250cTNURUpHNDcvY3NObSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTA0ODYwN30="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "💻basanzietech | shakira-md❤️",
  author: process.env.PACK_AUTHER || "basanzietech",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "shakira-md",
  ownername: process.env.OWNER_NAME || "BENJAMINI OMARY",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "SHAKIRA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
