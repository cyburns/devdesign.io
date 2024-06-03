export const estimateReadingTime = (text: string) => {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const readingTimeMinutes = Math.ceil(words / wordsPerMinute);

  return readingTimeMinutes;
};

export const calculateElapsedTime = (createdAt: { seconds: number }) => {
  const currentTime = new Date();
  const createdAtDate = new Date(createdAt.seconds * 1000);
  const elapsedTimeInSeconds = Math.floor(
    (currentTime.getTime() - createdAtDate.getTime()) / 1000
  );

  if (elapsedTimeInSeconds < 60) {
    return `${elapsedTimeInSeconds}s`;
  } else if (elapsedTimeInSeconds < 3600) {
    return `${Math.floor(elapsedTimeInSeconds / 60)}m`;
  } else if (elapsedTimeInSeconds < 86400) {
    return `${Math.floor(elapsedTimeInSeconds / 3600)}h`;
  } else {
    return `${Math.floor(elapsedTimeInSeconds / 86400)}d`;
  }
};
