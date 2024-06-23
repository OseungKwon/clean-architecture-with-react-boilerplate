import { UserResponse } from './dto.ts';
import { User } from '@/domain/user';

export function dtoToUser(dto: UserResponse): User {
    return {
        identifier: dto.identifier,
        email: dto.attributes.email,
        imageUrl: dto.attributes.profile_image,
        nickname: dto.attributes.nickname,
    };
}
