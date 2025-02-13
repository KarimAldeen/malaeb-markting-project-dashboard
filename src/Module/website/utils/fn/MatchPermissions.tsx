
import { ABILITIES_ENUM } from '@Module/core/enums/Abilities';
import { generatePermissions } from '@Module/core/utils/fn/generatePermissions';

///// match
export const MatchPermissions = generatePermissions(ABILITIES_ENUM.PASS);

