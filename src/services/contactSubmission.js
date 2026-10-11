import { contactFormConfiguration } from '../data/contact'

export async function submitContactMessage() {
  if (!contactFormConfiguration.isSubmissionConfigured) {
    throw new Error('Message submission is not configured yet. Please check back later.')
  }

  throw new Error('A secure message delivery service has not been connected yet.')
}
