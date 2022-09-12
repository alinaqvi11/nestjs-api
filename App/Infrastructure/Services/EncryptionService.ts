import * as bcrypt from 'bcrypt';

class EncryptionService {

    hashPassword = (plaintText) => {
        return bcrypt.hash(plaintText, 11);
    };

    comparedPassword = (plaintText, hash) => {
        return bcrypt.compare(plaintText, hash);
    };
}

export default EncryptionService;