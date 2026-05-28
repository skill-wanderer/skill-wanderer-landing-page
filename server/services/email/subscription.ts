const confirmationBody = [
  '<p>Thank you for your interest in Skill Wanderer.</p>',
  '<p>This email confirms that we received your request.</p>',
  '<p>We appreciate your interest in our learning paths and community.</p>'
].join('')

const confirmationText = [
  'Thank you for your interest in Skill Wanderer.',
  '',
  'This email confirms that we received your request.',
  '',
  'We appreciate your interest in our learning paths and community.'
].join('\n')

export const createSubscriptionConfirmationEmail = (email: string, fromEmail: string) => ({
  from: `Skill Wanderer <${fromEmail}>`,
  to: [email],
  subject: 'Welcome to Skill Wanderer',
  html: confirmationBody,
  text: confirmationText
})