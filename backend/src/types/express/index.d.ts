import {User} from "../User";
import {IUserModel} from "../../models/UserModel";

declare global {
    namespace Express {
        interface Request {
            user?: IUserModel
        }
    }
}
