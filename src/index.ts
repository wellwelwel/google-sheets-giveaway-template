import 'dotenv/config';
import { env } from 'node:process';
import { getProfiles, getUniqueProfiles } from './helpers/profile.js';
import { randomize, writeResults } from './helpers/results.js';

const { SPREADSHEET_ID = '', GID, COLUMN_INDEX = 0, WINNERS_NUMBER = 3 } = env;
const profiles = await getProfiles({
  spreadsheetId: SPREADSHEET_ID,
  gid: GID,
  columnIndex: Number(COLUMN_INDEX),
});
const uniqueProfiles = getUniqueProfiles(profiles);
const randomProfiles = randomize(uniqueProfiles);

await writeResults(randomProfiles, Number(WINNERS_NUMBER));
