const {
    WAConnection,
    MessageType,
    Presence,
    MessageOptions,
    Mimetype,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    messageStubType,
    ReconnectMode,
    ProxyAgent,
    waChatKey,
    WAMessageProto,
	prepareMessageFromContent,
    relayWAMessage,
} = require("@adiwajshing/baileys");
const fs = require('fs');
const moment = require('moment-timezone');
const afkJs = require('./lib/afk')
const yargs = require('yargs/yargs')
const vn = JSON.parse(fs.readFileSync('./lib/json/vn.json'))
const ClientJs = require('./lib/client');
const cron = require('node-cron');
global.configs = JSON.parse(fs.readFileSync('./config.json'));
let dataUser = JSON.parse(fs.readFileSync('./lib/json/dataUser.json'))
global.vn = JSON.parse(fs.readFileSync('./lib/json/vn.json'))
global.tebakgambar = {}
moment.tz.setDefault('Asia/Jayapura').locale('id');
const { color } = require('./lib/func')
const Crypto = require('crypto')

const starts = async (sesName) => {
    try {
        const Client = new ClientJs(global.configs, sesName || global.configs.defaultSessionName)
		const client = Client.mainClient
		require("./lib/http-server")(client)
        Client.starts()
		detectChange('./handler.js', (mdl) =>{
			Client.cmd.removeAllListeners()
			Client.handlerStick.removeAllListeners()
			require('./handler')(client, Client)
			console.log(color('[ INFO ]', 'cyan'), `${mdl} auto updated!`)
		})
		require('./handler')(client, Client)
		
		/*antidelete*/
		
		client.on('message-update', async (message) => {
		try {
	    const from = message.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[message.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./antidel/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./antidel/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./antidel/ct-revoked-banlist.json'))
		const sender = message.key.fromMe ? client.user.jid : message.key.remoteJid.endsWith('@g.us') ? message.participant : message.key.remoteJid
		const isRevoke = message.key.remoteJid.endsWith('@s.whatsapp.net') ? true : message.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = message.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = message.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
		if (messageStubType == 'REVOKE') {
			console.log(`Stats for grup : ${!isRevoke}\nStats all contact : ${!isCtRevoke}\nStats contacts excluded : ${!isBanCtRevoke}`)
			if (!isRevoke) return
			if (!isCtRevoke) return
			if (!isBanCtRevoke) return
			const from = message.key.remoteJid
			const isGroup = message.key.remoteJid.endsWith('@g.us') ? true : false
			let int
			let infoMSG = JSON.parse(fs.readFileSync('./antidel/msg.data.json'))
			const id_deleted = message.key.id
			const conts = message.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = message.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
			const opt4tag = {
				contextInfo: { mentionedJid: [sender] }
			}
			for (let i = 0; i < infoMSG.length; i++) {
				if (infoMSG[i].key.id == id_deleted) {
					const dataInfo = infoMSG[i]
					const type = Object.keys(infoMSG[i].message)[0]
					const timestamp = infoMSG[i].messageTimestamp
					int = {
						no: i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
					}
				}
			}
			const index = Number(int.no)
			const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
			const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
			var itsme = `0@s.whatsapp.net`
				var split = `${fake}`
				var selepbot72 = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
			if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
				const strConversation = `		 **「ANTI-DELETE」**

▣ Nama : ${pushname} 
▣ Nomer : ${sender.replace('@s.whatsapp.net', '')}
▣ Tipe : Text
▣ Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}
▣ Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
▣ Pesan : ${body ? body : '-'}`
				reply(from, strConversation, MessageType.text, selepbot72)
			} else if (int.type == 'stickerMessage') {
				var itsme = `0@s.whatsapp.net`
					var split = `${fake}`
					const pingbro23 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await client.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`)
				const strConversation = `		 *「ANTI-DELETE」*

▣ Nama : ${pushname} 
▣ Nomer : ${sender.replace('@s.whatsapp.net', '')}
▣ Tipe : Sticker
▣ Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}
▣ Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}`

				const buff = fs.readFileSync(savedFilename)
				Client.reply(strConversation)
				Client.sendStickerFromUrl(from, buff, pingbro23)
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
				var itsme = `0@s.whatsapp.net`
					var split = `${fake}`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await client.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`)
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `	 *「ANTI-DELETE」*

▣ Nama : ${pushname} 
▣ Nomer : ${sender.replace('@s.whatsapp.net', '')}
▣ Tipe : Image
▣ Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}
▣ Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
▣ Pesan : ${body ? body : '-'}\`\`\``
				Client.sendFileFromUrl(from, buff, strConversation, message)
				fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'red'))
	}
})
		
        client.on('CB:Presence', asd => {
        	asd = asd[1]
            if (!asd.id.endsWith('@g.us')) return
            if((asd.type == 'composing' || asd.type == 'recording') && afkJs.detectingAfk(asd.id, asd.participant)) {
            Client.sendText(asd.id, `@${asd.participant.split('@')[0]} sedang mengetik/merekam, Anda berhenti afk`)
                }
        })
		client.on('CB:Call', json => {
			client.query({json: ["action","call",["call",{"from":client.user.jid,"to":json[1].from,"id":generateMessageID()},[["reject",{"call-id":json[1].id,"call-creator":json[1].from,"count":"0"},null]]]]}).then(() =>{
			setTimeout(async () =>{
			if (Client.blocklist.includes(json[1].from)) return
			client.blockUser(json[1].from, 'add')   
			}, 3000)
		}).catch()  
		})
        client.on('new-msg', (message) => {
            if(message.key && message.key.remoteJid == 'status@broadcast') return
            if(message.key.fromMe && !global.configs.self || !message.key.fromMe && global.configs.self) return
			let dataGc = JSON.parse(fs.readFileSync('./lib/json/dataGc.json'))
			const body = message.body
			const from = message.key.remoteJid
            const isGroup = from.endsWith('@g.us')
            const sender = isGroup ? message.participant : from
			if (global.tebakgambar[from] && global.tebakgambar[from].id && global.tebakgambar[from].jawaban.toLowerCase() == body.toLowerCase()) Client.reply(from, `YES TEBAK GAMBAR BERHASIL DIJAWAB OLEH @${sender.split("@")[0]}`, message).then(() => global.tebakgambar[from] = {}) 
			if (global.vn.includes(body)) Client.sendPtt(from, `./lib/vn/${body}.mp3`, message)
			if (isGroup && !dataGc[from]){
				dataGc[from] = {afk:{}}
				fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc, null, 2))
			}
			if (isGroup && dataGc[from].antitagall && !message.isAdmin && (message.mentionedJidList.length == message.groupMembers.length || message.mentionedJidList.length-1 == message.groupMembers.length)){
                Client.reply(from, '*Tagall detected*\n_Maaf Kamu akan di kick_', message)
                client.groupRemove(from, [sender]).catch(() => Client.reply(from, `Jadikan bot admin agar bisa menggunakan fitur antitagall`, message))
            }
			if (isGroup && !message.isAdmin && dataGc[from].antilink && /chat\.whatsapp\.com/gi.test(body)){
				let dtclink = body.match(/chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{18,26})/gi) || []
				dtclink.forEach(async l => {
					checks = await Client.checkInviteLink(l)
					if(checks.status == 200){
						Client.reply(from, `Group link detected!`, message)
						client.groupRemove(from, [sender])
					}
				})
			}
			if (!dataUser[sender]){
				dataUser[sender] = {limit: 0, premium: false}
				fs.writeFileSync('./lib/json/dataUser.json', JSON.stringify(dataUser))
			}
            if(isGroup) {
                if(afkJs.detectingAfk(from, sender)) Client.sendText(from, `@${sender.split('@')[0]} kamu berhenti afk.`)
                if(message.message.extendedTextMessage && message.message.extendedTextMessage.contextInfo && message.message.extendedTextMessage.contextInfo.mentionedJid) {
                    jids = message.message.extendedTextMessage.contextInfo.mentionedJid
                    jids.forEach(jid => {
                        takeData = afkJs.tagDetect(from, jid)
                        if(!takeData) return
                        duration = moment.duration(moment(takeData.time).diff(moment()))
                        Client.reply(from, `@${jid.split('@')[0]} sedang afk\nReason: ${takeData.reason}\nTime: ${duration.days()} Hari ${duration.hours()} Jam ${duration.minutes()} Menit ${duration.seconds()} Detik`)
                    })
                }
            }
        })
		client.on('group-participants-update', (jdgn) => require('./lib/greet.js')(jdgn, Client, client))
    } catch (e) {
        console.error(e)
    }
}

cron.schedule('0 0 * * *', () => {
    for (users in dataUser){
		dataUser[users].limit = 0
	}
    fs.writeFileSync('./lib/json/dataUser.json', JSON.stringify(dataUser))
    console.log(color('[ INFO ]', 'cyan'), 'LIMIT RESETED!')
});
detectChange('./lib/text.js', (mdl) => console.log(color('[ INFO ]', 'cyan'), `${mdl} change is detected!`))
detectChange('./lib/greet.js', (mdl) => console.log(color('[ INFO ]', 'cyan'), `${mdl} change is detected!`))
function detectChange(module, cb){
	fs.watchFile(require.resolve(module), () => {
	 delete require.cache[require.resolve(module)]
	 if (cb) cb(module)
    })
}
const randomBytes = (length) => {
    return Crypto.randomBytes(length)
}
global.generateMessageID = () => {
    return '3EB0' + randomBytes(7).toString('hex').toUpperCase()
}
global.optn = yargs(process.argv.slice(2)).exitProcess(false).parse()
starts(process.argv[2])
