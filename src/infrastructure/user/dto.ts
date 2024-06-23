export interface UserRequest {
    identifier: string;
}

export class UserResponse {
    identifier: string;
    type: 'user';
    createdDate: string;
    attributes: {
        nickname: string;
        email: string;
        profile_image: string;
        information: string;
    };
}
