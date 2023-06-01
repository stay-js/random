'use client';

import { IDPage } from '~/components/id-page';

export const UUID: React.FC = () => <IDPage generator={() => crypto.randomUUID()} name="UUID" />;
