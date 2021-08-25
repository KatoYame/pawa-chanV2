const moment = require('moment-timezone');
const menu = (prefix, pushname) => {
	let p = 0
	return `

*Nama Bot* : Pawachan Bot
*Owner* : KhaelSan
*Prefix* : Multi

*Time* : _${moment().utcOffset('1000').format('YYYY-MM-DD HH:mm:ss')} WIB_

╭─────「GROUP ONLY」──────
│
│ *${p+=1}.* ${prefix}group _open|close_
│ *${p+=1}.* ${prefix}antilink _on|off_
│ *${p+=1}.* ${prefix}antitagall _on|off_
│ *${p+=1}.* ${prefix}welcome _on|off_
│ *${p+=1}.* ${prefix}leave _on|off_
│ *${p+=1}.* ${prefix}setgroupicon _replyImage_
│ *${p+=1}.* ${prefix}setgroupname _text_
│ *${p+=1}.* ${prefix}setgroupdesc _text_
│ *${p+=1}.* ${prefix}hidetag _text_
│ *${p+=1}.* ${prefix}promote _@tag_
│ *${p+=1}.* ${prefix}demote _@tag_
│ *${p+=1}.* ${prefix}kick _@tag_
│ *${p+=1}.* ${prefix}add _number/628×××××_
│ *${p+=1}.* ${prefix}getpp _@tag_
│ *${p+=1}.* ${prefix}tagall
│ *${p+=1}.* ${prefix}linkgroup
│ *${p+=1}.* ${prefix}revoke
│ *${p+=1}.* ${prefix}bye
│
└──────「パ ワ ー」──────


╭─────「DOWNLOADER」──────
│
│ *${p+=1}.* ${prefix}play _query_
│ *${p+=1}.* ${prefix}playvid _query_
│ *${p+=1}.* ${prefix}ytmp3 _link_
│ *${p+=1}.* ${prefix}ytmp4 _link_
│ *${p+=1}.* ${prefix}igstory _username_
│ *${p+=1}.* ${prefix}ig _link_
│ *${p+=1}.* ${prefix}fb _link_
│ *${p+=1}.* ${prefix}tiktok _link_
│ *${p+=1}.* ${prefix}joox _song_
│ *${p+=1}.* ${prefix}mediafire _link_
│ *${p+=1}.* ${prefix}zippyshare _link_
│ *${p+=1}.* ${prefix}gdrive _link_
│
└──────「パ ワ ー」──────


╭─────「VVIBU」──────
│
│ *${p+=1}.* ${prefix}kusonime _title_
│ *${p+=1}.* ${prefix}anime _title_
│ *${p+=1}.* ${prefix}manga _title_
│ *${p+=1}.* ${prefix}nhsearch _query_
│ *${p+=1}.* ${prefix}nhentai _codeNuclear_
│ *${p+=1}.* ${prefix}nhpdf _codeNuclear_ *premium*
│ *${p+=1}.* ${prefix}nhpdf2 _codeNuclear_
│ *${p+=1}.* ${prefix}ppcouple
│ *${p+=1}.* ${prefix}ppcouple2
│ *${p+=1}.* ${prefix}swanime
│ *${p+=1}.* ${prefix}loli
│ *${p+=1}.* ${prefix}waifu
│ *${p+=1}.* ${prefix}waifu2
│
└──────「パ ワ ー」──────


╭─────「NSFW」──────
│
│ *${p+=1}.* ${prefix}randomhentai
│ *${p+=1}.* ${prefix}nsfwneko
│ *${p+=1}.* ${prefix}nsfwloli
│ *${p+=1}.* ${prefix}nsfwwaifu
│ *${p+=1}.* ${prefix}ass2
│ *${p+=1}.* ${prefix}armpits2
│ *${p+=1}.* ${prefix}thighss
│ *${p+=1}.* ${prefix}booty
│ *${p+=1}.* ${prefix}sideoppai2
│ *${p+=1}.* ${prefix}pantsu
│ *${p+=1}.* ${prefix}ass
│ *${p+=1}.* ${prefix}ketek *premium*
│ *${p+=1}.* ${prefix}armpits *premium*
│ *${p+=1}.* ${prefix}yuri *premium*
│ *${p+=1}.* ${prefix}trap *premium*
│ *${p+=1}.* ${prefix}lewd *premium*
│ *${p+=1}.* ${prefix}feed *premium*
│ *${p+=1}.* ${prefix}eron *premium*
│ *${p+=1}.* ${prefix}solo *premium*
│ *${p+=1}.* ${prefix}gasm *premium*                        
│ *${p+=1}.* ${prefix}holo *premium*
│ *${p+=1}.* ${prefix}tits *premium*                
│ *${p+=1}.* ${prefix}erok *premium*
│ *${p+=1}.* ${prefix}smug *premium*
│ *${p+=1}.* ${prefix}baka *premium*
│ *${p+=1}.* ${prefix}solog *premium*
│ *${p+=1}.* ${prefix}lewdk *premium*
│ *${p+=1}.* ${prefix}waifu *premium*                
│ *${p+=1}.* ${prefix}femdom *premium*
│ *${p+=1}.* ${prefix}cuddle *premium*
│ *${p+=1}.* ${prefix}hentai *premium*
│ *${p+=1}.* ${prefix}eroyuri *premium*
│ *${p+=1}.* ${prefix}blowjob *premium*
│ *${p+=1}.* ${prefix}erofeet *premium*
│ *${p+=1}.* ${prefix}holoero *premium*                
│ *${p+=1}.* ${prefix}erokemo *premium*
│ *${p+=1}.* ${prefix}fox_girl *premium*
│ *${p+=1}.* ${prefix}futanari *premium*
│ *${p+=1}.* ${prefix}lewdkemo *premium*
│ *${p+=1}.* ${prefix}wallpaper *premium*
│ *${p+=1}.* ${prefix}pussy_jpg *premium*
│ *${p+=1}.* ${prefix}kemonomimi *premium*
│ *${p+=1}.* ${prefix}sideoppai *premium*
│ *${p+=1}.* ${prefix}nsfw_avatar *premium*
│ *${p+=1}.* ${prefix}chiisaihentai *premium*
│ *${p+=1}.* ${prefix}trap *premium*
│ *${p+=1}.* ${prefix}blowjob *premium*
│ *${p+=1}.* ${prefix}yaoi *premium*
│ *${p+=1}.* ${prefix}ecchi *premium*
│ *${p+=1}.* ${prefix}hentai *premium*
│ *${p+=1}.* ${prefix}ahegao *premium*
│ *${p+=1}.* ${prefix}hololewd *premium*                
│ *${p+=1}.* ${prefix}animefeets *premium*
│ *${p+=1}.* ${prefix}animebooty *premium*
│ *${p+=1}.* ${prefix}animethighss *premium*
│ *${p+=1}.* ${prefix}hentaiparadise *premium*
│ *${p+=1}.* ${prefix}animearmpits *premium*
│ *${p+=1}.* ${prefix}hentaifemdom *premium*
│ *${p+=1}.* ${prefix}lewdanimegirls *premium*
│ *${p+=1}.* ${prefix}biganimetiddies *premium*
│ *${p+=1}.* ${prefix}animebellybutton *premium*
│ *${p+=1}.* ${prefix}hentai4everyone *premium*
│
└──────「パ ワ ー」──────


╭─────「STICKER」──────
│
│ *${p+=1}.* ${prefix}stickerwm _pack|author_
│ *${p+=1}.* ${prefix}takestick _pack|author_
│ *${p+=1}.* ${prefix}toimg _replySticker_
│ *${p+=1}.* ${prefix}togif _replySticker_
│ *${p+=1}.* ${prefix}semoji _emoji_
│ *${p+=1}.* ${prefix}spatrick
│ *${p+=1}.* ${prefix}stickerfire
│ *${p+=1}.* ${prefix}stickernobg
│ *${p+=1}.* ${prefix}stickergif
│ *${p+=1}.* ${prefix}sticker
│
└──────「パ ワ ー」──────


╭─────「EDUCATION」──────
│
│ *${p+=1}.* ${prefix}nulis _text_
│ *${p+=1}.* ${prefix}brainly _query_
│ *${p+=1}.* ${prefix}kbbi _query_
│ *${p+=1}.* ${prefix}wiki _query_
│
└──────「パ ワ ー」──────


╭─────「SEARCHING」──────
│
│ *${p+=1}.* ${prefix}playstore _apk_
│ *${p+=1}.* ${prefix}happymod _apk_
│ *${p+=1}.* ${prefix}iguser _username_
│ *${p+=1}.* ${prefix}igstalk _username_
│ *${p+=1}.* ${prefix}ytsearch _query_
│ *${p+=1}.* ${prefix}ytplaylist _query_
│ *${p+=1}.* ${prefix}ytchannel _channel_
│ *${p+=1}.* ${prefix}shoope _product_
│ *${p+=1}.* ${prefix}spotify _song_
│ *${p+=1}.* ${prefix}gsmarena _hp_
│ *${p+=1}.* ${prefix}searchmusic _replyAudio_
│ *${p+=1}.* ${prefix}wallpaper _query_
│ *${p+=1}.* ${prefix}pinterest _query_
│ *${p+=1}.* ${prefix}googleimage _query_
│ *${p+=1}.* ${prefix}jagokata _kata_
│
└──────「パ ワ ー」──────


╭─────「PRIMBON」──────
│
│ *${p+=1}.* ${prefix}jodoh _kamu|dia_
│ *${p+=1}.* ${prefix}artinama _nama_
│ *${p+=1}.* ${prefix}artimimpi _mimpi_
│
└──────「パ ワ ー」──────


╭─────「RANDOM」──────
│
│ *${p+=1}.* ${prefix}asupan
│ *${p+=1}.* ${prefix}fml
│ *${p+=1}.* ${prefix}randomquran
│ *${p+=1}.* ${prefix}meme
│ *${p+=1}.* ${prefix}darkjoke
│ *${p+=1}.* ${prefix}pantun
│ *${p+=1}.* ${prefix}nickepep
│ *${p+=1}.* ${prefix}quotes
│ *${p+=1}.* ${prefix}estetikpic
│
└──────「パ ワ ー」──────


╭──「SERTIFIKAT MAKER」───
│
│ *${p+=1}.* ${prefix}tololserti
│ *${p+=1}.* ${prefix}fuckboyserti
│ *${p+=1}.* ${prefix}fuckgrilserti
│ *${p+=1}.* ${prefix}bucinserti
│ *${p+=1}.* ${prefix}pacarserti
│ *${p+=1}.* ${prefix}goodboyserti
│ *${p+=1}.* ${prefix}goodgirlserti
│ *${p+=1}.* ${prefix}badboyserti
│ *${p+=1}.* ${prefix}badgirlserti
│
└──────「パ ワ ー」──────


╭─────「TEXT MAKER」────
│
│ *${p+=1}.* ${prefix}wolflogo _text1|text2_
│ *${p+=1}.* ${prefix}logoaveng _text1|text2_
│ *${p+=1}.* ${prefix}phlogo _text1|text2_
│ *${p+=1}.* ${prefix}marvellogo _text1|text2_
│ *${p+=1}.* ${prefix}gtext _text1|text2_
│ *${p+=1}.* ${prefix}pubglogo _text1|text2_
│ *${p+=1}.* ${prefix}snowwrite _text1|text2_
│ *${p+=1}.* ${prefix}watercolour _text1|text2_
│ *${p+=1}.* ${prefix}harta _text_
│ *${p+=1}.* ${prefix}thundertext _text_
│ *${p+=1}.* ${prefix}flametext _text_
│ *${p+=1}.* ${prefix}glowtext _text_
│ *${p+=1}.* ${prefix}smoketext _text_
│ *${p+=1}.* ${prefix}lithgtext _text_
│ *${p+=1}.* ${prefix}flowertext _text_
│ *${p+=1}.* ${prefix}bneon _text_
│ *${p+=1}.* ${prefix}matrix _text_
│ *${p+=1}.* ${prefix}breakwall _text_
│ *${p+=1}.* ${prefix}gneon _text_
│ *${p+=1}.* ${prefix}dropwater _text_
│ *${p+=1}.* ${prefix}tfire _text_
│ *${p+=1}.* ${prefix}sandw _text_
│ *${p+=1}.* ${prefix}epep _text_
│ *${p+=1}.* ${prefix}gplaybutton _text_
│ *${p+=1}.* ${prefix}splaybutton _text_
│ *${p+=1}.* ${prefix}text3dbox _text_
│ *${p+=1}.* ${prefix}text3d _text_
│ *${p+=1}.* ${prefix}logobp _text_
│ *${p+=1}.* ${prefix}leavest _text_
│ *${p+=1}.* ${prefix}tlight _text_
│ *${p+=1}.* ${prefix}naruto _text_
│ *${p+=1}.* ${prefix}crosslogo _text_
│ *${p+=1}.* ${prefix}cslogo _text_
│ *${p+=1}.* ${prefix}crismes _text_
│
└──────「パ ワ ー」──────


╭────「IMAGE MAKER」─────
│
│ *${p+=1}.* ${prefix}missing _text1|text2|text3|@tag_
│ *${p+=1}.* ${prefix}calender _replyImage / @tag_
│ *${p+=1}.* ${prefix}drawing _replyImage / @tag_
│ *${p+=1}.* ${prefix}sketch _replyImage / @tag_
│
└──────「パ ワ ー」──────


╭─────「OTHER」──────
│
│ *${p+=1}.* ${prefix}tomp3 _replyVideo_
│ *${p+=1}.* ${prefix}shortlink _link_
│ *${p+=1}.* ${prefix}spamsms _nomor/628××××_
│ *${p+=1}.* ${prefix}ssweb _link_
│ *${p+=1}.* ${prefix}removebg _replyImage / @tag_
│ *${p+=1}.* ${prefix}qrencode _text_
│ *${p+=1}.* ${prefix}barcode _text_
│ *${p+=1}.* ${prefix}jadwalsholat _daerah_
│ *${p+=1}.* ${prefix}jadwaltv _channel_
│ *${p+=1}.* ${prefix}tebakgambar
│ *${p+=1}.* ${prefix}ouo _link_
│ *${p+=1}.* ${prefix}mirrored _link_
│
└──────「パ ワ ー」──────


╭─────「INFO」──────
│
│ *${p+=1}.* ${prefix}hargaprem
│ *${p+=1}.* ${prefix}ping
│ *${p+=1}.* ${prefix}runtime
│ *${p+=1}.* ${prefix}owner
│ *${p+=1}.* ${prefix}limit
│ *${p+=1}.* ${prefix}info
│ *${p+=1}.* ${prefix}listvn
│
└──────「パ ワ ー」──────


╭─────「OWNER ONLY」──────
│
│ *${p+=1}.* ${prefix}self
│ *${p+=1}.* ${prefix}public
│ *${p+=1}.* ${prefix}setpp _replyImage_
│ *${p+=1}.* ${prefix}eval _text_
│ *${p+=1}.* ${prefix}term _code_
│ *${p+=1}.* ${prefix}block _@tag_
│ *${p+=1}.* ${prefix}unblock _@tag_
│ *${p+=1}.* ${prefix}join _link_
│ *${p+=1}.* ${prefix}bc _text_
│ *${p+=1}.* ${prefix}bcimg _replyImage_
│ *${p+=1}.* ${prefix}addvn _replyAudio/vn_
│ *${p+=1}.* ${prefix}delvn _name_
│ *${p+=1}.* ${prefix}premium add _@tag_
│ *${p+=1}.* ${prefix}premium del _@tag_
│ *${p+=1}.* ${prefix}premium list
│ *${p+=1}.* ${prefix}clearall
│ *${p+=1}.* ${prefix}resetlimit
│
└──────「パ ワ ー」──────


╭────────────────────
│ *DONASI LAH BG*
├────────────────────
│capek² ngebot tapi kalo gada yg
│donate, pensi aelah :'(
└────────────────────



ＴＨＸㅤＴＯ:
Myself, My God, My Parents, DappaUhuy, Zeks, Arga  (pensi)
RamlanID, Elios & Ben (sc ori), LolHuman, Fadli, Xteam, LeysCoders
Akira, Zakky, Fboy, Lord Yudha

*_Thanks For All Creator Bot WhatsApp_*
*&*
*_Thanks For All User Pawa-Chan Bot_*`
}

const ingfo = `Ingin Bertanya tanya tentang Bot?
join https://chat.whatsapp.com/GtCjnCu4F8Z78Mm6HX8GYA`

const donate = `
╭────────────────────
│ *DONASI*
├────────────────────
│
│DANA - OVO
├❏ _6282248192917_
│
│PULSA (TSEL)
├❏ _6282248192917_
│
└──────「パ ワ ー」───────


╭────────────────────
│ Makasih buat yang udah donate
│ Moga lancar terus rejeki nya
└────────────────────`

const snk = `
╭─────「S&K」──────
│
├❏ Jika bot di kick, join ulang 5k)
├❏ Dilarang mengirim virtex dsb. & bug dsb.
├❏ Dilarang untuk spam command!
├❏ Dilarang keras VCALL/CALL (auto block system)
│
└────「パ ワ ー」─────`

const hargaprem = `
╭─────「PRICE LIST」──────
│
│Bot join ke group
│seminggu => 5k
│sebulan => 7k
│permanent => 12k
├────────────────────
│Member Premium
│sebulan => 12k
│permanent => 15k
├────────────────────
│
│OVO - DANA
├❏ _6282248192917_
│
│PULSA (rate +5k)
├❏ _6282248192917_
│
│Konfirmasi dan kirim bukti pembayaran ke :  wa.me/6282248192917
│
└──────「パ ワ ー」───────


╭──「KEUNTUNGAN PREM」──
│
├❏ unlock some commands
│	beberapa command terbuka
│
├❏ add bot into your gc
│	masukkan bot ke group mu
│
├❏ unlimited limit
│	limit tak terbatas
│
└──────「パ ワ ー」──────

**NOTE :* Harga & SnK dapat berubah sewaktu waktu🙏`


const mess = {
             wait: '```「❗」 WAIT A MINUTES```',
             error: '```「❗」 ERROR```',
             succes: '```「❕」 DONE```',
             error2: '```「❗」Ups maaf server sedang error atau mungkin apikey invalid```',
             nsfw: '```「❗」 ONLY IN NSFW MODE```',
			 group: '```「❗」 ONLY IN GROUP```',
			 ungroup: '```「❗」 ONLY IN PRIVATE CHAT```',
			 admin: '```「❗」 ONLY ADMIN GROUP```',
			 prem: '```「❗」 ONLY PREMIUM MEMBERS```\n_Untuk info selanjutnya ketik #hargaprem_',
			 botAdmin: '```「❗」 BOT IS NOT ADMIN```',
			 limit: '```「❗」 Limit anda sudah habis, \n\nNote: limit akan direset setiap 00.00```\n_mau unlimited limit? jadi member premium lah, untuk info selanjutnya ketik #hargaprem_',
			 ownerOnly: '```「❗」 ONLY OWNER BOT```',
			 sange: '```Hayoo ngapain pegang titid```'
}

module.exports = {
	menu,
	ingfo,
	donate,
	snk,
	hargaprem,
	mess
}
