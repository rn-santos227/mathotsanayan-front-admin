import Result from "@/types/Result";

export function evaluateExam(result: Result) {
  const module = result.module;
  if (typeof module != "object") return;
  if (!(module.count && result.total_score)) return;

  const average = (result.total_score / module.count) * 100;
  const passing = module.passing;
  return average >= passing ? "Passed" : "Failed";
}

export function accuracy(result: Result): number {
  const total_answers = result.answers?.length;
  if (result.total_score && total_answers && result.items) {
    const average = (result.total_score / total_answers) * 100;
    const grade = (result.total_score / result.items) * 100;
    const accuracy = (average + grade) / 2;
    return accuracy;
  } else {
    return 0;
  }
}

export function grade(result: Result): number {
  if (result.total_score && result.items) {
    const grade = (result.total_score / result.items) * 100;
    return grade;
  } else {
    return 0;
  }
}

export function secondsToMinutes(seconds: number | undefined): string {
  if (!seconds) return "Invalid Time";
  const totalMinutes = Math.floor(seconds / 60);
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = (seconds % 60).toFixed(1).padStart(4, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

export function getAverageTime(
  timer: number | undefined,
  items: number | undefined
): string {
  if (timer && items) {
    const average = timer / items;
    return secondsToMinutes(average);
  } else return "Invalid Time";
}
