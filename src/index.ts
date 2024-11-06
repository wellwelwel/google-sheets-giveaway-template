import 'dotenv/config';
import { env } from 'node:process';
import { getProfiles, getUniqueProfiles } from './helpers/profile.js';
import { randomize, writeResults } from './helpers/results.js';

const { SPREADSHEET_ID = '', GID } = env;
const profiles = await getProfiles({
  spreadsheetId: SPREADSHEET_ID,
  gid: GID,
  columnIndex: 1,
});
const uniqueProfiles = getUniqueProfiles(profiles);
const randomProfiles = randomize(uniqueProfiles);

await writeResults(randomProfiles);
