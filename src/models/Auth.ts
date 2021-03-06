import AccessData from './AccessData';

export default class Auth extends AccessData {

    passPhrase: string;

    constructor(passPhrase: string = '',
                accessToken: string = '',
                origin: string = '',
                expireDate: string = '') {
        super(accessToken, origin, expireDate);
        this.passPhrase = passPhrase;
    }

}
