interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  // ... other fields
}

export const registerUser = async (data: RegisterData) => {
  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}; 