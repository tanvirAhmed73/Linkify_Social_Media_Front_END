interface FormInputProps {
  name: string;
  type: 'text' | 'password' | 'email';
  placeholder: string;
  error?: string;
  required?: boolean;
}

export const FormInput = ({ 
  name, 
  type, 
  placeholder, 
  error, 
  required 
}: FormInputProps) => {
  return (
    <div className="w-full">
      <input
        className={`rounded-full border-2 px-4 py-2 w-full ${
          error ? 'border-red-500' : 'border-gray-200'
        }`}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
}; 