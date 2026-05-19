const confirmationBody = [
  '<p>Thank you for subscribing to Skill Wanderer.</p>',
  '<p>You are now signed up to receive future updates, learning path releases, and community news.</p>',
  '<p>We appreciate your interest and will keep our messages concise and relevant.</p>'
].join('')

export const createSubscriptionConfirmationEmail = (email: string, fromEmail: string) => ({
  from: `Skill Wanderer <${fromEmail}>`,
  to: [email],
  subject: 'Welcome to Skill Wanderer',
  html: confirmationBody
})