import { SignInRequest } from './dto.ts';
import AuthApi from './api.ts';

async function fetchSignIn(request: SignInRequest, api = AuthApi) {
    return await api.fetchSignIn(request);
}

export default { fetchSignIn };
