const SITE_URL = 'https://skill-wanderer.com'
const HELP_THE_MISSION_URL = `${SITE_URL}/help-the-mission`
// Gmail and Outlook don't render SVG or WebP, so the header uses a PNG copy of the favicon.
const ICON_URL = `${SITE_URL}/email/skill-wanderer-icon.png`

const TITLE = 'Welcome to Skill-Wanderer'
const PREHEADER = 'You are subscribed to guild updates, new learning paths, and community initiatives.'
const INTRO = 'We will send you guild updates, new learning paths, and community initiatives.'
const UNSUBSCRIBE_NOTE = 'If you did not subscribe, or you change your mind later, reply to this email and we will remove you from the list.'

// Same three ways as pages/help-the-mission.vue.
const WAYS_TO_HELP = [
  {
    title: 'Share What You Know',
    description: 'You bring the knowledge, from any field. Our members turn it into free lessons.'
  },
  {
    title: 'Bring Us a Project',
    description: 'Need a website, an app or an AI tool? We build a free working prototype first.'
  },
  {
    title: 'Spread the Word',
    description: 'Share our site, follow us on LinkedIn, or introduce us to someone who could help.'
  }
]

const FOOTER_LINKS = [
  { label: 'Website', url: SITE_URL },
  { label: 'Dojo', url: 'https://dojo.skill-wanderer.com' },
  { label: 'Wanderings Blog', url: 'https://wanderings.skill-wanderer.com' },
  { label: 'LinkedIn', url: 'https://linkedin.com/company/skill-wanderer' }
]

// Email clients ignore CSS variables and Outlook ignores rgba(), so the tokens from
// assets/css/main.css are inlined as hex, with alpha colors pre-blended onto their surface.
const COLOR = {
  page: '#0f0f0f', // --darker-bg
  card: '#1a1a1a', // --dark-bg
  cardBorder: '#482a1f', // rgba(255, 107, 53, 0.2) on the card
  panel: '#252525', // --card-bg on the card
  panelBorder: '#513328', // rgba(255, 107, 53, 0.2) on the panel
  badge: '#463027', // rgba(255, 107, 53, 0.15) on the panel, as in .way-number
  orange: '#FF6B35', // --primary-orange
  deepOrange: '#E85D25', // --deep-orange
  yellow: '#FFD93D', // --accent-yellow
  heading: '#ffffff',
  text: '#e0e0e0', // --light-text
  muted: '#a3a3a3',
  separator: '#5c5c5c'
}

const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"

// Keeps the inbox preview from running on into the email's body text.
const PREHEADER_FILLER = '&#847;&zwnj;&nbsp;'.repeat(60)

const waysToHelpHtml = WAYS_TO_HELP.map(({ title, description }, index) => {
  const bottomPadding = index === WAYS_TO_HELP.length - 1 ? 0 : 18

  return `<tr>
<td width="32" valign="top" style="width:32px; padding-bottom:${bottomPadding}px;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
<td width="32" height="32" align="center" valign="middle" bgcolor="${COLOR.badge}" style="width:32px; height:32px; border-radius:16px; background-color:${COLOR.badge}; font-family:${FONT}; font-size:14px; line-height:32px; mso-line-height-rule:exactly; font-weight:800; color:${COLOR.yellow};">${index + 1}</td>
</tr></table>
</td>
<td valign="top" style="padding:4px 0 ${bottomPadding}px 14px;">
<p style="margin:0; font-family:${FONT}; font-size:16px; line-height:24px; font-weight:700; color:${COLOR.heading};">${title}</p>
<p style="margin:2px 0 0; font-family:${FONT}; font-size:14px; line-height:21px; color:${COLOR.muted};">${description}</p>
</td>
</tr>`
}).join('')

// Outlook ignores padding on links, so mso-padding-alt pads the cell there instead.
const helpButtonHtml = `<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
<td align="center" bgcolor="${COLOR.deepOrange}" style="border-radius:50px; background-color:${COLOR.deepOrange}; background-image:linear-gradient(135deg, ${COLOR.orange}, ${COLOR.deepOrange}); box-shadow:0 4px 20px rgba(255, 107, 53, 0.3); mso-padding-alt:14px 28px;">
<a href="${HELP_THE_MISSION_URL}" target="_blank" style="display:inline-block; padding:14px 28px; font-family:${FONT}; font-size:16px; line-height:20px; mso-line-height-rule:exactly; font-weight:700; color:#ffffff; text-decoration:none; border-radius:50px;">Help the Mission<span aria-hidden="true">&nbsp;&rarr;</span></a>
</td>
</tr></table>`

const footerLinksHtml = FOOTER_LINKS
  .map(({ label, url }) => `<a href="${url}" target="_blank" style="color:${COLOR.orange}; text-decoration:none; font-weight:600;">${label}</a>`)
  .join(`<span style="color:${COLOR.separator};">&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span>`)

// Tables and inline styles are the only layout Gmail and Outlook both render reliably.
// The <style> blocks are progressive extras: color-scheme and the mobile padding.
const welcomeHtml = `<!DOCTYPE html>
<html lang="en" dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<title>${TITLE}</title>
<!--[if mso]>
<noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
<style>td, h1, h2, p, a, span { font-family: 'Segoe UI', Arial, sans-serif !important; }</style>
<![endif]-->
<style>
:root { color-scheme: light dark; supported-color-schemes: light dark; }
</style>
<style>
@media (max-width: 600px) {
  .sw-card { padding: 32px 24px !important; }
  .sw-panel { padding: 24px 20px !important; }
  .sw-title { font-size: 28px !important; line-height: 34px !important; }
}
</style>
</head>
<body style="margin:0; padding:0; width:100%; background-color:${COLOR.page}; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;">
<div style="display:none; font-size:1px; line-height:1px; max-height:0; max-width:0; opacity:0; overflow:hidden; mso-hide:all;">${PREHEADER}${PREHEADER_FILLER}</div>
<div role="article" aria-roledescription="email" aria-label="${TITLE}" lang="en" dir="ltr">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${COLOR.page}" style="background-color:${COLOR.page};">
<tr>
<td align="center" style="padding:40px 16px;">
<!--[if mso]><table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;">
<tr>
<td style="padding:0 4px 24px;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
<td valign="middle" style="padding-right:12px;"><a href="${SITE_URL}" target="_blank" style="text-decoration:none;"><img src="${ICON_URL}" width="32" height="32" alt="" style="display:block; width:32px; height:32px; border:0; outline:none; text-decoration:none;"></a></td>
<td valign="middle" style="font-family:${FONT}; font-size:22px; line-height:28px; font-weight:700; white-space:nowrap;"><a href="${SITE_URL}" target="_blank" style="color:${COLOR.orange}; text-decoration:none;">SKILL-WANDERER</a></td>
</tr></table>
</td>
</tr>
<tr>
<td class="sw-card" bgcolor="${COLOR.card}" style="padding:40px; background-color:${COLOR.card}; background-image:radial-gradient(circle at 0% 0%, rgba(255, 107, 53, 0.14) 0, rgba(255, 107, 53, 0) 55%); border:1px solid ${COLOR.cardBorder}; border-radius:16px;">
<p style="margin:0 0 12px; font-family:${FONT}; font-size:12px; line-height:16px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:${COLOR.yellow};">You are subscribed</p>
<h1 class="sw-title" style="margin:0 0 16px; font-family:${FONT}; font-size:32px; line-height:40px; font-weight:800; color:${COLOR.heading};">Welcome to <span style="color:${COLOR.orange}; white-space:nowrap;">Skill-Wanderer</span></h1>
<p style="margin:0 0 32px; font-family:${FONT}; font-size:16px; line-height:26px; color:${COLOR.text};">${INTRO}</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
<td class="sw-panel" bgcolor="${COLOR.panel}" style="padding:28px; background-color:${COLOR.panel}; border:1px solid ${COLOR.panelBorder}; border-radius:12px;">
<h2 style="margin:0 0 4px; font-family:${FONT}; font-size:20px; line-height:28px; font-weight:700; color:${COLOR.orange};">Believe in free education?</h2>
<p style="margin:0 0 20px; font-family:${FONT}; font-size:15px; line-height:24px; color:${COLOR.text};">Here are three ways to help the mission.</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${waysToHelpHtml}</table>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
<td style="padding-top:24px;">${helpButtonHtml}</td>
</tr></table>
</td>
</tr></table>
</td>
</tr>
<tr>
<td align="center" style="padding:32px 24px 0;">
<p style="margin:0 0 12px; font-family:${FONT}; font-size:13px; line-height:20px;">${footerLinksHtml}</p>
<p style="margin:0; font-family:${FONT}; font-size:12px; line-height:19px; color:${COLOR.muted};">${UNSUBSCRIBE_NOTE}</p>
</td>
</tr>
</table>
<!--[if mso]></td></tr></table><![endif]-->
</td>
</tr>
</table>
</div>
</body>
</html>`

const welcomeText = [
  TITLE,
  '',
  `You are now subscribed. ${INTRO}`,
  '',
  'Believe in free education? Here are three ways to help the mission:',
  '',
  ...WAYS_TO_HELP.flatMap(({ title, description }, index) => [`${index + 1}. ${title}`, `   ${description}`]),
  '',
  `Help the mission: ${HELP_THE_MISSION_URL}`,
  '',
  UNSUBSCRIBE_NOTE,
  '',
  ...FOOTER_LINKS.map(({ label, url }) => `${label}: ${url}`)
].join('\n')

export const createSubscriptionWelcomeEmail = (email: string, fromEmail: string) => ({
  from: `Skill-Wanderer <${fromEmail}>`,
  to: [email],
  subject: TITLE,
  html: welcomeHtml,
  text: welcomeText
})
