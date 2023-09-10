import School from "./School";
import User from "./User"

interface Teacher {
    id: number | null,
    first_name: string,
    middle_name: string | null,
    last_name: string,
    email: string,
    contact_number: string,
    user_id: number | User,
    school_id: number | School,
}
export default Teacher;