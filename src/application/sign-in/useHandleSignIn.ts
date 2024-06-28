import { useCallback } from 'react';
import { useSignIn } from '../mutations/useSignIn.ts';

function useHandleSignIn() {
    const { mutate: signIn } = useSignIn();

    const onSingIn = useCallback(
        ({ nickname, email, password }: { nickname: string; email: string; password: string }) => {
            signIn({ nickname, email, password });
        },
        [signIn],
    );

    return { onSingIn };
}

export default useHandleSignIn;
