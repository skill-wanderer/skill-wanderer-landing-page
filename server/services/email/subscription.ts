const welcomeBody = [
  '<p>Welcome to Skill Wanderer.</p>',
  '<p>You are now subscribed. We will send you guild updates, new learning paths, and community initiatives.</p>',
  '<p>If you did not subscribe, or you change your mind later, reply to this email and we will remove you from the list.</p>'
].join('')

const welcomeText = [
  'Welcome to Skill Wanderer.',
  '',
  'You are now subscribed. We will send you guild updates, new learning paths, and community initiatives.',
  '',
  'If you did not subscribe, or you change your mind later, reply to this email and we will remove you from the list.'
].join('\n')

export const createSubscriptionWelcomeEmail = (email: string, fromEmail: string) => ({
  from: `Skill Wanderer <${fromEmail}>`,
  to: [email],
  subject: 'Welcome to Skill Wanderer',
  html: welcomeBody,
  text: welcomeText
})
