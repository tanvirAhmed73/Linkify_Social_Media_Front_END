export const VALIDATION_MESSAGES = {
  required: (field: string) => `${field} is required`,
  email: 'Invalid email format',
  password: 'Password must be at least 8 characters',
};

export const REGISTRATION_FIELDS = {
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email',
  password: 'Password',
  // ... other fields
} as const; 