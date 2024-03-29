import toast from 'react-hot-toast';

export const copyToClipboard = async (value: string | null) => {
  if (!window || !value) return;

  await window.navigator.clipboard.writeText(value);
  toast.success('Copied to clipboard!');
};
