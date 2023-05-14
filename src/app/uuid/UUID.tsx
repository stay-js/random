'use client';

import { IDPage } from '@components/IDPage';

export const UUID: React.FC = () => <IDPage generator={() => crypto.randomUUID()} name="UUID" />;
