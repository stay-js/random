'use client';

import { IDPage } from '@components/IDPage';
import cuid from 'cuid';

export const CUID: React.FC = () => <IDPage generator={cuid} name="CUID" />;
