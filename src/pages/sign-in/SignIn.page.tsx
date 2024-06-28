import useHandleSignIn from '@/application/sign-in/useHandleSignIn.ts';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
    nickname: string;
    email: string;
    password: string;
};

function SignInPage() {
    const { onSingIn } = useHandleSignIn();
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        onSingIn(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type={'email'} {...register('email')} />
                <input type={'password'} {...register('password')} />
                <button type={'submit'}>로그인</button>
            </form>
        </div>
    );
}

export default SignInPage;
