import toast from 'react-hot-toast';

export const copyToClipboard = (value: string | null) => {
  if (!window || !value) return;

  navigator.clipboard.writeText(value);
  toast.success('Copied to clipboard!');
};
