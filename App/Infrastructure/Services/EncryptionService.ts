import * as bcrypt from 'bcrypt';


class EncryptionService {

    static hashPassword = (plaintText) => {
        return bcrypt.hash(plaintText, 11);
    };

    static comaparePassword = (plaintText, hash) => {
        return bcrypt.compare(plaintText, hash);
    };
}

export default EncryptionService;