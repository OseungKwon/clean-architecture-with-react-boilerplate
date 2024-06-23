import UserApi from './api.ts';
import { UserRequest } from './dto.ts';
import { dtoToUser } from '@/infrastructure/user/transform.ts';
async function getUser(request: UserRequest, api = UserApi) {
    const { data } = await api.getUser(request.identifier);
    return dtoToUser(data);
}
