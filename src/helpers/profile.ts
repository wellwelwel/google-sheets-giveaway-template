type GetProfileOptions = {
  spreadsheetId: string;
  /** @default 0 */
  gid?: string;
  /** @default 0 */
  columnIndex?: number;
  /** @default true */
  ignoreHeader?: boolean;
};

/**
 * Gets all the items in the selected column from a public Google Sheet.
 */
export const getProfiles = async (options: GetProfileOptions) => {
  const {
    spreadsheetId,
    gid = 0,
    columnIndex = 0,
    ignoreHeader = true,
  } = options;

  const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/export?format=csv&gid=${gid}`;
  const response = await fetch(url);
  const data = await response.text();
  const results = data
    .split('\n')
    .map((row) => row.split(',')[columnIndex].trim());

  if (ignoreHeader) results.shift();

  return results;
};

/**
 * Captures the LinkedIn profile.
 *
 * This makes it easier to identify the same profile sent in different ways.
 */
export const getProfile = (url: string) =>
  url
    .trim()
    .toLowerCase()
    .slice(0, 128)
    .replace(/\r|\n/gm, '')
    .replace(/^(.+)?(http(s)?:\/\/)?(www\.)?linkedin\.com\/in\//, '')
    .replace(/\?.+/, '')
    .replace(/[^a-z0-9-_% ]/g, '')
    .trim();

/**
 * Filters out possible duplicate profiles.
 */
export const getUniqueProfiles = (list: string[]) =>
  [...new Set(list.map(getProfile))].filter(Boolean);
