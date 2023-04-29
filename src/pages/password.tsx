import type { NextPage } from 'next';
import { useState, useEffect, useCallback } from 'react';
import { Switch } from '@headlessui/react';
import { TbCopy, TbRefresh } from 'react-icons/tb';
import { Meta } from '@components/Meta';
import { copyToClipboard } from '@utils/copyToClipboard';

const Toggle: React.FC<{
  label: string;
  state: boolean;
  setState: (boolean: boolean) => void;
}> = ({ label, state, setState }) => (
  <Switch.Group>
    <div className="flex items-center gap-2">
      <Switch
        checked={state}
        onChange={setState}
        className={`${
          state ? 'bg-teal-400' : 'bg-neutral-700'
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`${
            state ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
      <Switch.Label>{label}</Switch.Label>
    </div>
  </Switch.Group>
);

const Page: NextPage = () => {
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

    let password = '';

    for (let i = 0; i < passwordLength; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    setPassword(password);
  }, [passwordLength, useNumbers, useUpperCaseLetters, useSpecialCharacters]);

  useEffect(() => {
    randomPassword();
  }, [randomPassword]);

  return (
    <>
      <Meta
        path="/password"
        title="Password - Stay Random"
        desc="Generates a random secure password."
      />

      <main className="flex flex-col gap-12">
        <h1 className="text-center text-5xl font-extrabold text-gray-300 md:text-7xl">
          Password Generator
        </h1>

        <section className="flex min-w-full flex-col gap-2 md:min-w-[55%]">
          <div
            className="max-w-full border px-4 py-2 text-xl font-bold"
            style={{ overflowWrap: 'anywhere' }}
          >
            {password}
          </div>

          <div className="flex items-center justify-between">
            <button type="button" className="flex items-center gap-1" onClick={randomPassword}>
              <TbRefresh size={18} /> Generate New Password
            </button>

            <button
              type="button"
              className="flex items-center gap-1"
              onClick={() => void copyToClipboard(password)}
            >
              <TbCopy size={18} />
              Copy
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="length">Length: {passwordLength}</label>

              <input
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-neutral-700"
                id="length"
                type="range"
                min="4"
                max="64"
                value={passwordLength}
                onChange={(event) => setPasswordLength(Number(event.target.value))}
              />
            </div>

            <Toggle label="Use Numbers" state={useNumbers} setState={setUseNumbers} />
            <Toggle
              label="Use Upper Case Letters"
              state={useUpperCaseLetters}
              setState={setUseUpperCaseLetters}
            />
            <Toggle
              label="Use Special Characters"
              state={useSpecialCharacters}
              setState={setUseSpecialCharacters}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
