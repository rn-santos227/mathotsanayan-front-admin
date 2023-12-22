import VPerson from "./v_person";
interface VTeacher extends VPerson {
  contact_number: string;
  school: string;
}
export default VTeacher;
