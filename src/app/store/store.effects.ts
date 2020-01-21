import { UserEffects } from './user/user.effects';
import { SystemInfoEffects } from './system-info/system-info.effects';
import { RouterEffects } from './router/router.effects';
import { FormEffects } from './form/form.effects';

export const effects: any[] = [
  UserEffects,
  SystemInfoEffects,
  RouterEffects,
  FormEffects
];
