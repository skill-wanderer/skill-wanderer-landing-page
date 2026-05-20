const confirmationBody = [
  '<p>Thank you for your interest in Skill Wanderer.</p>',
  '<p>This email confirms that we received your request.</p>',
  '<p>We appreciate your interest in our learning paths and community.</p>'
].join('')

export const createSubscriptionConfirmationEmail = (email: string, fromEmail: string) => ({
  from: `Skill Wanderer <${fromEmail}>`,
  to: [email],
  subject: 'Welcome to Skill Wanderer',
  html: confirmationBody
})