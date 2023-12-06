/**
 * Build supplied string by interpolating properties after delimiter ':' with the given parameters.
 *
 * @example
 * interpolate(':name is here.', { name: 'Barbara' })
 * => 'Joe is here.'
 */
export default function interpolate(str: string, params: Record<string, string | number | undefined | null>) {
  let formattedString = str;
  params = params || {};

  for (const [key, value] of Object.entries(params)) {
    const val = value || '';
    formattedString = formattedString.replace(new RegExp(':' + key + '\\b', 'gi'), val.toString());
  }

  return formattedString;
}
