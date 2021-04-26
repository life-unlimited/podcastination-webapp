/**
 * Prettifies the given time in ms to format `H:mm:ss`. The hours part will be omitted when <= 0.
 *
 * @param ms The time in milliseconds.
 */
export function prettifyDuration(ms: number): string {
  let result = '';
  const date = new Date(ms);
  const hours = date.getHours() - 1;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  if (hours > 0) {
    result += hours + ':';
  }
  result += `${ fillLessThanTenWith(minutes, '0') }:${ fillLessThanTenWith(seconds, '0') }`;
  return result;
}

/**
 * Prettifies the given date to format yyyy-MM-DD.
 *
 * @param date The date.
 */
export function prettifyDate(date: Date): string {
  return `${ fillLessThanTenWith(date.getDay(), '0') }.${ fillLessThanTenWith(date.getMonth() + 1, '0') }.${ date.getFullYear() }`;
}

function fillLessThanTenWith(n: number, fill: string): string {
  return n < 10 ? fill + n : n.toString();
}
