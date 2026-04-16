// generate-m3u.js
// هذا السكريبت يحول رابط TS فردي إلى ملف M3U8 متكامل

const fs = require('fs');

// الرابط الذي أرسلته (مقطع الفيديو الفردي)
const tsUrl = 'https://iptvxa.com/live/8158170168/5400372327/4704.ts';

// إنشاء محتوى ملف M3U8 لمقطع واحد
const m3u8Content = `#EXTM3U
#EXT-X-VERSION:3
#EXT-X-TARGETDURATION:10
#EXT-X-MEDIA-SEQUENCE:0
#EXTINF:10.0,
${tsUrl}
#EXT-X-ENDLIST`;

// حفظ الملف بصيقة m3u
fs.writeFileSync('playlist.m3u', m3u8Content);
console.log('✅ تم إنشاء ملف playlist.m3u بنجاح!');
console.log('📁 الرابط النهائي سيكون:');
console.log('https://raw.githubusercontent.com/[اسم مستخدمك]/[اسم المستودع]/main/playlist.m3u');
