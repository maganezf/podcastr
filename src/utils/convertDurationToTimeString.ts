export default function convertDurationToTimeString(duration: number) {
  // 60 (min) * 60 (sec) = 3600 (segundos pra horas)
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  const timeString = [hours, minutes, seconds]
    .map(unit => String(unit).padStart(2, "0"))
    .join(":");

  return timeString;
}
