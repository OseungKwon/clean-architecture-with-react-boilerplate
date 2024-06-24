import { useCallback, useState } from 'react';

function useHandleSignIn() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onChangeEmail = useCallback((value: string) => {
        setEmail(value);
    }, []);

    const onChangePassword = useCallback((value: string) => {
        setPassword(value);
    }, []);

    const onSingIn = useCallback(() => {
        // TODO
    }, []);

    return { email, onChangeEmail, password, onChangePassword, onSingIn };
}

export default useHandleSignIn;
