export function stringShortener(str, maxLen) {
    if (str.length <= maxLen) return str;
    return str.substr(0, str.lastIndexOf(" ", maxLen)) + "...";
}