import jwt, { JwtPayload, VerifyCallback } from "jsonwebtoken";
import config from "../config";
import { Service } from "typedi";


@Service()
export class AuthService {

    private readonly TOKEN_SECRET: string = config.tokenSecret;
    private readonly expiresIn: string = "1800s"

    constructor() {}

    generateAccessToken(workerName: string) {
        return jwt.sign(workerName, this.TOKEN_SECRET, { expiresIn: this.expiresIn });
    }

    verify(token: string, callback?: VerifyCallback<JwtPayload | string>) {
        return jwt.verify(token, this.TOKEN_SECRET, callback);
    }
}

