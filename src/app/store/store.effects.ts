import { UserEffects } from './user/user.effects';
import { SystemInfoEffects } from './system-info/system-info.effects';
import { RouterEffects } from './router/router.effects';
import { FormEffects } from './form/form.effects';
import { RecordEffects } from './record/record.effects';
import { RecordValueEffects } from './record/record-value.effects';

export const effects: any[] = [
  UserEffects,
  SystemInfoEffects,
  RouterEffects,
  FormEffects,
  RecordEffects,
  RecordValueEffects
];
