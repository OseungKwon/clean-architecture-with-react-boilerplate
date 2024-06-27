import AuthService from '@/infrastructure/auth';
import { useMutation } from '@tanstack/react-query';

interface SignInInput {
    nickname: string;
    email: string;
    password: string;
}

export function useSignIn() {
    return useMutation({
        mutationFn: (request: SignInInput) => AuthService.fetchSignIn(request),
    });
}
