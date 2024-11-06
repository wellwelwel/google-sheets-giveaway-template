import { getProfiles, getUniqueProfiles } from './helpers/profile.js';
import { randomize, writeResults } from './helpers/results.js';

const { SPREADSHEET_ID = '', GID } = process.env;
const profiles = await getProfiles({
  spreadsheetId: SPREADSHEET_ID,
  gid: GID,
  columnIndex: 1,
});
const uniqueProfiles = getUniqueProfiles(profiles);
const randomProfiles = randomize(uniqueProfiles);

await writeResults(randomProfiles);
