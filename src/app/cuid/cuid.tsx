'use client';

import { IDPage } from '~/components/id-page';
import cuid2 from '@paralleldrive/cuid2';

export const CUID: React.FC = () => <IDPage generator={cuid2.createId} name="CUID" />;
