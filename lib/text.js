const moment = require('moment-timezone');
const menu = (prefix) => {
	let p = 0
	return ` *Pawa-chan Bot*
	
*Total commands : -*
*Owner* : KhaelSan
*Prefix* : Multi
*Time* : ${moment().utcOffset('1000').format('YYYY-MM-DD HH:mm:ss')} WIT
*Beacons* : https://beacons.page/khaelsan

╭────────────────────
│ *GROUP ONLY*
├────────────────────
│ *${p+=1}.* ${prefix}group _open|close_
│ *${p+=1}.* ${prefix}antilink _on|off_
│ *${p+=1}.* ${prefix}welcome _on|off_
│ *${p+=1}.* ${prefix}leave _on|off_
│ *${p+=1}.* ${prefix}setgroupicon _replyImage_
│ *${p+=1}.* ${prefix}setgroupname _text_
│ *${p+=1}.* ${prefix}setgroupdesc _text_
│ *${p+=1}.* ${prefix}hidetag _text_
│ *${p+=1}.* ${prefix}promote _@tag_
│ *${p+=1}.* ${prefix}demote _@tag_
│ *${p+=1}.* ${prefix}kick _@tag_
│ *${p+=1}.* ${prefix}add _number_
│ *${p+=1}.* ${prefix}getpp _@tag_
│ *${p+=1}.* ${prefix}tagall
│ *${p+=1}.* ${prefix}linkgroup
│ *${p+=1}.* ${prefix}revoke
│ *${p+=1}.* ${prefix}leave
├────────────────────
│ _「パ ワ ー」_
└────────────────────


╭────────────────────
│ *DOWNLOADER*
├────────────────────
│ *${p+=1}.* ${prefix}play _query_
│ *${p+=1}.* ${prefix}playvid _query_
│ *${p+=1}.* ${prefix}youtubedl _query_
│ *${p+=1}.* ${prefix}ytmp3 _link_
│ *${p+=1}.* ${prefix}ytmp4 _link_
│ *${p+=1}.* ${prefix}igstory _username_
│ *${p+=1}.* ${prefix}ig _link_
│ *${p+=1}.* ${prefix}joox _song_
├────────────────────
│ _「パ ワ ー」_
└────────────────────


╭────────────────────
│ *ANIME*
├────────────────────
│ *${p+=1}.* ${prefix}
├────────────────────
│ *「パ ワ ー」*
└────────────────────


╭────────────────────
│ *NSFW*
├────────────────────
│ *${p+=1}.* ${prefix}randomhentai
├────────────────────
│ *「パ ワ ー」*
└────────────────────


╭────────────────────
│ *STICKER*
├────────────────────
│ *${p+=1}.* ${prefix}stickerwm _pack|author_
│ *${p+=1}.* ${prefix}takestick _pack|author_
│ *${p+=1}.* ${prefix}toimg _replySticker_
│ *${p+=1}.* ${prefix}togif _replySticker_
│ *${p+=1}.* ${prefix}semoji _emoji_
│ *${p+=1}.* ${prefix}stickerfire
│ *${p+=1}.* ${prefix}stickernobg
│ *${p+=1}.* ${prefix}stickergif
│ *${p+=1}.* ${prefix}sticker
├────────────────────
│ _「パ ワ ー」_
└────────────────────


╭────────────────────
│ *EDUCATION*
├────────────────────
│ *${p+=1}.* ${prefix}nulis _text_
│ *${p+=1}.* ${prefix}brainly _query_
│ *${p+=1}.* ${prefix}kbbi _query_
│ *${p+=1}.* ${prefix}wiki _query_
├────────────────────
│ _「パ ワ ー」_
└────────────────────


╭────────────────────
│ *SEARCHING*
├────────────────────
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
├────────────────────
│ _「パ ワ ー」_
└────────────────────


╭────────────────────
│ *PRIMBON*
├────────────────────
│ *${p+=1}.* ${prefix}jodoh _kamu|dia_
│ *${p+=1}.* ${prefix}artinama _nama_
│ *${p+=1}.* ${prefix}artimimpi _mimpi_
├────────────────────
│ _「パ ワ ー」_
└────────────────────


╭────────────────────
│ *RANDOM*
├────────────────────
│ *${p+=1}.* ${prefix}fml
│ *${p+=1}.* ${prefix}randomquran
│ *${p+=1}.* ${prefix}meme
│ *${p+=1}.* ${prefix}darkjoke
│ *${p+=1}.* ${prefix}pantun
│ *${p+=1}.* ${prefix}nickepep
│ *${p+=1}.* ${prefix}quotes
│ *${p+=1}.* ${prefix}estetikpic
├────────────────────
│ _「パ ワ ー」_
└────────────────────


╭────────────────────
│ *TEXT MAKER*
├────────────────────
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
├────────────────────
│ _「パ ワ ー」_
└────────────────────


╭────────────────────
│ *IMAGE MAKER*
├────────────────────
│ *${p+=1}.* ${prefix}missing _text1|text2|text3|@tag_
│ *${p+=1}.* ${prefix}calender _replyImage / @tag_
│ *${p+=1}.* ${prefix}drawing _replyImage / @tag_
│ *${p+=1}.* ${prefix}sketch _replyImage / @tag_
├────────────────────
│ _「パ ワ ー」_
└────────────────────


╭────────────────────
│ *OTHER*
├────────────────────
│ *${p+=1}.* ${prefix}removebg _replyImage / @tag_
│ *${p+=1}.* ${prefix}qrencode _text_
│ *${p+=1}.* ${prefix}barcode _text_
│ *${p+=1}.* ${prefix}jadwalsholat _daerah_
│ *${p+=1}.* ${prefix}jadwaltv _channel_
│ *${p+=1}.* ${prefix}tebakgambar
├────────────────────
│ _「パ ワ ー」_
└────────────────────


╭────────────────────
│ *INFO*
├────────────────────
│ *${p+=1}.* ${prefix}stickermenu
│ *${p+=1}.* ${prefix}owner
│ *${p+=1}.* ${prefix}limit
│ *${p+=1}.* ${prefix}info
│ *${p+=1}.* ${prefix}listvn
├────────────────────
│ _「パ ワ ー」_
└────────────────────


╭────────────────────
│ *OWNER ONLY*
├────────────────────
│ *${p+=1}.* ${prefix}setpp _replyImage_
│ *${p+=1}.* ${prefix}eval _text_
│ *${p+=1}.* ${prefix}term _code_
│ *${p+=1}.* ${prefix}block _@tag_
│ *${p+=1}.* ${prefix}unblock _@tag_
│ *${p+=1}.* ${prefix}join _link_
│ *${p+=1}.* ${prefix}bc _text_
│ *${p+=1}.* ${prefix}addvn _replyAudio/vn_
│ *${p+=1}.* ${prefix}delvn _name_
│ *${p+=1}.* ${prefix}premium add _@tag_
│ *${p+=1}.* ${prefix}premium del _@tag_
│ *${p+=1}.* ${prefix}premium list
│ *${p+=1}.* ${prefix}clearall
│ *${p+=1}.* ${prefix}resetlimit
├────────────────────
│ _「パ ワ ー」_
└────────────────────


╭────────────────────
│ *DONASI LAH BG*
├────────────────────
│capek² ngebot tapi kalo gada yg
│donate, pensi aelah :'(
└────────────────────



Thanks To :
Myself
My God
My Parents
DappaUhuy
Zekais (sc ori)
Arga  (pensi)
LolHuman
FarelXynn
Azam
Fadli
YogiPw
Xteam
LeysCoders
Fxc7
Fauzan
Bx-Hunter
Zxagung

Thanks For All Creator Bot WhatsApp
&
Thanks For All User Pawa-Chan Bot`
}

const ingfo = `Bot ini di buat dengan bahasa pemrograman Node.js / JavaScript
Source kode bot : https://github.com/justpiple/whatsapp-bot
Apabila terjadi error, kalian bisa menghubungi owner bot ketik !owner
Terima kasih.
`


const donate = `
╭────────────────────
│ *DONASI*
├────────────────────
│
│DANA - OVO
├❏ _6282248192917_
│
│PULSA (TSEL)
│❏ _6282248192917_
│
├────────────────────
│ _「パ ワ ー」_
└────────────────────


╭────────────────────
│ Makasih buat yang udah donate
│ Moga lancar terus rejeki nya
└────────────────────
`


const mess = {
             wait: '```「❗」 WAIT A MINUTE```',
             error: '```「❗」 ERROR```',
             succes: '```「❕」 DONE```',
             error2: '```「❗」Ups maaf server sedang error atau mungkin apikey invalid```',
             nsfw: '```「❗」 ONLY IN NSFW MODE```',
			 group: '```「❗」 ONLY IN GROUP```',
			 ungroup: '```「❗」 ONLY IN PRIVATE CHAT```',
			 admin: '```「❗」 ONLY ADMIN GROUP```',
			 prem: '```「❗」 ONLY PREMIUM MEMBERS```',
			 botAdmin: '```「❗」 BOT IS NOT ADMIN```',
			 limit: '```「❗」 Limit anda sudah habis, \n\nNote: limit akan direset setiap 00.00```',
			 ownerOnly: '```「❗」 ONLY OWNER BOT```',
			 sange: '```Hayoo ngapain pegang titid```'
}

module.exports = {
	menu,
	ingfo,
	donate,
	mess
}
