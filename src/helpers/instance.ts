import Admin from "@/types/Admin";
import Course from "@/types/Course";
import Student from "@/types/Student";
import School from "@/types/School";
import Section from "@/types/Section";
import Subject from "@/types/Subject";
import Teacher from "@/types/Teacher";
import Question from "@/types/Question";
import Grade from "@/types/Grade";

export function getCourseName(course: number | string | Course) {
  if (typeof course === "object" && course !== null && "name" in course) {
    return (course as Course).name;
  }
  return "";
}

export function getSchoolName(school: number | string | School) {
  if (typeof school === "object" && school !== null && "name" in school) {
    return (school as School).name;
  }
  return "";
}

export function getSectionName(section: number | string | Section) {
  if (typeof section === "object" && section !== null && "name" in section) {
    return (section as Section).name;
  }
  return "";
}

export function getSubjectName(subject: number | string | Subject) {
  if (typeof subject === "object" && subject !== null && "name" in subject) {
    return (subject as Subject).name;
  }
  return "";
}

export function getTeacherName(teacher: number | string | Teacher) {
  if (
    typeof teacher === "object" &&
    teacher !== null &&
    "full_name" in teacher
  ) {
    return (teacher as Teacher).full_name;
  }
  return "";
}

export function getOwnerName(owner: Teacher | Student | Admin) {
  if (
    typeof owner === "object" &&
    owner !== null &&
    "student_number" in owner
  ) {
    return (owner as Student).full_name;
  } else if (typeof owner === "object" && owner !== null && "name" in owner) {
    return (owner as Admin).name;
  } else if (
    typeof owner === "object" &&
    owner !== null &&
    "full_name" in owner
  ) {
    return (owner as Teacher).full_name;
  }
  return "DefaultName";
}

export function getQuestionContent(question: number | Question | undefined) {
  if (
    typeof question === "object" &&
    question !== null &&
    "content" in question
  ) {
    return (question as Question).content;
  }
  return "DefaultName";
}

export function getGradeEvaluation(grade: number | Grade | undefined) {
  if (typeof grade === "object" && grade !== null && "evaluation" in grade) {
    return (grade as Grade).evaluation;
  }
  return "DefaultName";
}
