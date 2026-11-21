export function mapEmployee(employee){
    return {
        id: employee._id,
        fullName: `${employee.first_name} ${employee.last_name}`,
        email: employee.email
    }
};