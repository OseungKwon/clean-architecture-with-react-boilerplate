import { apiClient } from '@/infrastructure/client.ts';
import { SignInRequest } from '@/infrastructure/auth/dto.ts';

async function fetchSignIn(request: SignInRequest) {
    return await apiClient.post<void>(`/user`, request);
}

export default { fetchSignIn };
