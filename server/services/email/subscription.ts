const SITE_URL = 'https://skill-wanderer.com'
const HELP_THE_MISSION_URL = `${SITE_URL}/help-the-mission`
// Gmail and Outlook don't render SVG or WebP, so the header uses a PNG copy of the favicon.
const ICON_URL = `${SITE_URL}/email/skill-wanderer-icon.png`

const TITLE = 'Welcome to Skill-Wanderer'
const PREHEADER = 'Thanks for subscribing. New lessons, new content, and news worth sharing are on the way.'
const INTRO = 'Thanks for subscribing. We will email you when new lessons and content go live, and whenever there is news worth sharing.'
// Kept low-key on purpose: an open door for anyone who wants it, not a call to action.
const HELP_NOTE = 'And if you ever feel like lending a hand to keep education free, there are a few ways to do it. No pressure at all.'
const HELP_LINK_LABEL = 'See how you can help'
const UNSUBSCRIBE_NOTE = 'If you did not subscribe, or you change your mind later, reply to this email and we will remove you from the list.'


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
  orange: '#FF6B35', // --primary-orange
  yellow: '#FFD93D', // --accent-yellow
  heading: '#ffffff',
  text: '#e0e0e0', // --light-text
  muted: '#a3a3a3',
  separator: '#5c5c5c'
}

const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"

// Keeps the inbox preview from running on into the email's body text.
const PREHEADER_FILLER = '&#847;&zwnj;&nbsp;'.repeat(60)

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
<p style="margin:0 0 28px; font-family:${FONT}; font-size:16px; line-height:26px; color:${COLOR.text};">${INTRO}</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
<td style="padding-top:24px; border-top:1px solid ${COLOR.cardBorder};">
<p style="margin:0 0 10px; font-family:${FONT}; font-size:15px; line-height:24px; color:${COLOR.muted};">${HELP_NOTE}</p>
<p style="margin:0; font-family:${FONT}; font-size:15px; line-height:24px;"><a href="${HELP_THE_MISSION_URL}" target="_blank" style="color:${COLOR.orange}; text-decoration:none; font-weight:600;">${HELP_LINK_LABEL}<span aria-hidden="true">&nbsp;&rarr;</span></a></p>
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
  INTRO,
  '',
  HELP_NOTE,
  `${HELP_LINK_LABEL}: ${HELP_THE_MISSION_URL}`,
  '',
  UNSUBSCRIBE_NOTE,
  '',
  ...FOOTER_LINKS.map(({ label, url }) => `${label}: ${url}`)
].join('\n')

export const createSubscriptionWelcomeEmail = (email: string, fromEmail: string, replyToEmail?: string) => ({
  from: `Skill-Wanderer <${fromEmail}>`,
  to: [email],
  ...(replyToEmail ? { replyTo: replyToEmail } : {}),
  subject: TITLE,
  html: welcomeHtml,
  text: welcomeText
})
