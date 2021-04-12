import * as _ from 'lodash';

export const MAIN_PATH = '/';

export const OTHER_PATHS = ['about', 'works']

export function isWhiteTextPage(path) {
  return _.every(OTHER_PATHS, oth => !_.includes(path, oth));
}
