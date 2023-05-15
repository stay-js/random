export const Button: React.FC<{
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  className?: string;
}> = ({ type = 'button', children, className = '' }) => (
  <button
    type={type}
    className={`h-10 cursor-pointer rounded bg-teal-400 text-sm font-bold text-white transition-colors hover:bg-teal-600 ${className}`}
  >
    {children}
  </button>
);
