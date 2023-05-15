import { copyToClipboard } from '@utils/copyToClipboard';
import { TbCopy, TbRefresh } from 'react-icons/tb';

export const Button: React.FC<{
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children: React.ReactNode;
}> = ({ type = 'button', className = '', children }) => (
  <button
    type={type}
    className={`h-10 cursor-pointer rounded bg-teal-400 text-sm font-bold text-white transition-colors hover:bg-teal-600 ${className}`}
  >
    {children}
  </button>
);

export const CopyButton: React.FC<{ value: string }> = ({ value }) => (
  <button type="button" className="flex items-center gap-1" onClick={() => copyToClipboard(value)}>
    <TbCopy size={18} /> Copy
  </button>
);

export const RefreshButton: React.FC<{
  children: React.ReactNode;
  onClick: () => void;
}> = ({ children, onClick }) => (
  <button type="button" className="flex items-center gap-1" onClick={onClick}>
    <TbRefresh size={18} /> {children}
  </button>
);
