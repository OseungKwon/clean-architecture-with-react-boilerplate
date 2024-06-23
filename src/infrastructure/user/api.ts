import { apiClient } from '../client.ts';
import { UserResponse } from './dto.ts';

async function getUser(identifier: string) {
    return await apiClient.get<{ data: UserResponse }>(`/user/${identifier}`);
}

export default { getUser };
