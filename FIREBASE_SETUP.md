# Firebase Setup Instructions

## Firestore Security Rules

To secure your contact messages in Firestore, add these rules to your Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to write to contact-messages (for the contact form)
    // But only authenticated users can read (for admin access)
    match /contact-messages/{document} {
      allow write: if true; // Allow anyone to submit contact forms
      allow read: if request.auth != null; // Only authenticated users can read
    }
    
    // Allow anyone to write to subscribers (for the subscribe form)
    // But only authenticated users can read (for admin access)
    match /subscribers/{document} {
      allow write: if true; // Allow anyone to subscribe
      allow read: if request.auth != null; // Only authenticated users can read
    }
    
    // Deny access to all other collections by default
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

## Environment Variables Required

Make sure to set these environment variables in your deployment:

```
NUXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NUXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NUXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## Data Structure

### Contact messages
Contact messages will be stored in Firestore with this structure:

```javascript
{
  name: "John Doe",
  email: "john@example.com", 
  topic: "learning", // One of: learning, collaboration, tech-services, feedback, other
  message: "Your message content here...",
  timestamp: Firestore.Timestamp,
  status: "new" // Can be: new, read, replied, archived
}
```

### Subscribers
Email subscribers will be stored in Firestore with this structure:

```javascript
{
  email: "subscriber@example.com",
  timestamp: Firestore.Timestamp,
  source: "website", // Source of subscription (website, social, etc.)
  subscribed: true // Can be toggled for unsubscribe functionality
}
```

## Accessing Data

To view and manage contact messages and subscribers, you can:

1. Use the Firebase Console directly
2. Create an admin interface (authenticated users only)
3. Set up email notifications when new messages arrive (using Cloud Functions)
4. Export subscriber lists for email marketing campaigns
