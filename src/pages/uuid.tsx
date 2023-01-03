import type { NextPage } from 'next';
import { v4 } from 'uuid';
import { IDPage } from '@layouts/IDPage';

const Page: NextPage = () => (
  <IDPage
    path="/uuid"
    title="UUID - Stay Random"
    desc="A UUID (Universally Unique Identifier) is a 128-bit label used for information in computer systems. The term globally unique identifier (GUID) is also used. When generated according to the standard methods, UUIDs are, for practical purposes, unique. Their uniqueness does not depend on a central registration authority or coordination between the parties generating them, unlike most other numbering schemes."
    generator={v4}
    name="UUID"
  />
);

export default Page;
