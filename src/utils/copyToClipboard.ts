import toast from 'react-hot-toast';

export const copyToClipboard = (value: string | null) => {
  if (!process.browser || !value) return;
  navigator.clipboard.writeText(value);
  toast.success('Copied to clipboard!');
};
