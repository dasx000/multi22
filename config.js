/**
 * Create By Dika Ardnt.
 * Contact Me on wa.me/6288292024190
 * Follow https://github.com/DikaArdnt
 */

// worker: npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs

const fs = require('fs');
const chalk = require('chalk');

// Website Api
global.APIs = {
  zenz: 'https://zenzapi.xyz',
};

// Apikey Website Api
global.APIKeys = {
  'https://zenzapi.xyz': '984f67f3a2a0',
};

// Other
global.ownerNumber = '6285216024226@s.whatsapp.net';
global.owner = ['6285216024226'];
global.premium = ['6288292024190'];
global.packname = 'Hisoka Morrow';
global.author = 'WhatsApp Bot';
global.sessionName = 'hisoka';
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'];
global.sp = '⭔';
global.mess = {
  success: '✓ Success',
  admin: 'Fitur Khusus Admin Group!',
  botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
  owner: 'Fitur Khusus Owner Bot',
  group: 'Fitur Digunakan Hanya Untuk Group!',
  private: 'Fitur Digunakan Hanya Untuk Private Chat!',
  bot: 'Fitur Khusus Pengguna Nomor Bot',
  wait: 'Loading...',
  endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
};
global.limitawal = {
  premium: 'Infinity',
  free: 100,
};
global.thumb = fs.readFileSync('./lib/hisoka.jpg');

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
