'use client';

import { useState, useEffect, useCallback } from 'react';
import { Switch } from '@headlessui/react';
import { cn } from '~/utils/cn';
import { CopyButton, RefreshButton } from '~/components/button';

const Toggle: React.FC<{
  label: string;
  checked: boolean;
  onChange: (boolean: boolean) => void;
}> = ({ label, checked, onChange }) => (
  <Switch.Group>
    <div className="flex items-center gap-2">
      <Switch
        checked={checked}
        onChange={onChange}
        className={cn(
          'relative inline-flex h-6 w-11 items-center rounded-full',
          checked ? 'bg-teal-400' : 'bg-neutral-700',
        )}
      >
        <span
          className={cn(
            'inline-block h-4 w-4 transform rounded-full bg-white transition',
            checked ? 'translate-x-6' : 'translate-x-1',
          )}
        />
      </Switch>
      <Switch.Label>{label}</Switch.Label>
    </div>
  </Switch.Group>
);

export const Password: React.FC = () => {
  const numbers = '0123456789';
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const specialCharacters = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

  const [passwordLength, setPasswordLength] = useState<number>(20);
  const [useNumbers, setUseNumbers] = useState<boolean>(true);
  const [useUpperCaseLetters, setUseUpperCaseLetters] = useState<boolean>(true);
  const [useSpecialCharacters, setUseSpecialCharacters] = useState<boolean>(true);
  const [password, setPassword] = useState<string | null>(null);

  const randomPassword = useCallback(() => {
    let characters = lowerCaseLetters;

    if (useNumbers) characters += numbers;
    if (useUpperCaseLetters) characters += upperCaseLetters;
    if (useSpecialCharacters) characters += specialCharacters;

    setPassword(
      Array(passwordLength)
        .fill(0)
        .map(() => characters.charAt(Math.floor(Math.random() * characters.length)))
        .join(''),
    );
  }, [passwordLength, useNumbers, useUpperCaseLetters, useSpecialCharacters]);

  useEffect(() => randomPassword(), [randomPassword]);

  if (!password) return null;

  return (
    <section className="flex w-full max-w-3xl flex-col gap-2">
      <div className="border px-6 py-2 text-xl font-bold" style={{ overflowWrap: 'anywhere' }}>
        {password}
      </div>

      <div className="flex items-center justify-between">
        <RefreshButton onClick={randomPassword}>Generate New Password</RefreshButton>
        <CopyButton value={password} />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="length">Length: {passwordLength}</label>

          <input
            className="h-2 cursor-pointer appearance-none rounded-lg bg-neutral-700"
            id="length"
            type="range"
            min="4"
            max="64"
            value={passwordLength}
            onChange={(event) => setPasswordLength(Number(event.target.value))}
          />
        </div>

        <Toggle label="Use Numbers" checked={useNumbers} onChange={setUseNumbers} />
        <Toggle
          label="Use Upper Case Letters"
          checked={useUpperCaseLetters}
          onChange={setUseUpperCaseLetters}
        />
        <Toggle
          label="Use Special Characters"
          checked={useSpecialCharacters}
          onChange={setUseSpecialCharacters}
        />
      </div>
    </section>
  );
};
