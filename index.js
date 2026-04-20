const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);
const CHANNEL_ID = process.env.CHANNEL_ID;
const TRIGGER_WORD = "mfs!"; // Kata kunci untuk mengirim menfess

bot.start((ctx) => ctx.reply('Halo! Kirim pesanmu diawali dengan "mfs!" untuk mengirim ke channel.'));

bot.on(['message', 'photo', 'video', 'document', 'audio'], async (ctx) => {
  // Cek apakah pesan mengandung trigger
  const caption = ctx.message.caption || ctx.message.text || "";
  
  if (caption.startsWith(TRIGGER_WORD)) {
    try {
      // Teruskan pesan ke channel
      await ctx.copyMessage(CHANNEL_ID);
      await ctx.reply('✅ Pesanmu sudah terkirim ke channel!');
    } catch (error) {
      console.error(error);
      await ctx.reply('❌ Gagal mengirim pesan. Pastikan bot sudah jadi admin di channel.');
    }
  }
});

// Menjalankan bot (Railway akan mengatur port secara otomatis)
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
      
