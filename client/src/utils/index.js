export const trimFileName = (fileName, maxLength) => {
  if (fileName.length <= maxLength) {
    return fileName;
  }

  const trimmedName = fileName.substring(0, maxLength - 3); // 3 for '...'
  return `${trimmedName}...`;
};
