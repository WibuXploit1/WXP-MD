const simih = async (text) => {
	try {
		const sami = await fetch(`http://api-sv2.simsimi.net/v2/?text=${budy}&lc=id`, {method: 'get'})
		const res = await sami.json()
		return res.simsimi_talk_set.answers[0].sentence
	} catch {
		return 'WibuXploit BOT ga tau kak'
	}
  }



module.exports = { simih }