
import { ABILITIES_ENUM } from '@Module/core/enums/Abilities';
import { generatePermissions } from '@Module/core/utils/fn/generatePermissions';

///// event
export const EventPermissions = generatePermissions(ABILITIES_ENUM.PASS);

