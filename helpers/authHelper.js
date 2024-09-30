import bcrypt from 'bcrypt';

export async function hashPassword(password) {
    try {
        let saltRounds = 10;
        let hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    }
    catch (error) {
        console.log(error);
    }
}

export async function comparePassword(password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword);

}

//export default { hashPassword, comparePassword };
//export default comparePassword;