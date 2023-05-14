'use client';

import { IDPage } from '@components/IDPage';
import guid from 'guid';

export const GUID: React.FC = () => <IDPage generator={guid.raw} name="GUID" />;
