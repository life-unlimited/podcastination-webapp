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
  if (minutes < 10) {
    result += '0';
  }
  result += minutes + ':';
  if (seconds < 10) {
    result += '0';
  }
  result += seconds;
  return result;
}
