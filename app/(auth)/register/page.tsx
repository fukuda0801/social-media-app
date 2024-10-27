import RegisterForm from '@/components/(auth)/RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <div className="flex justify-around width-full min-h-screen">
      <div className="flex-1 bg-purple-300">{/* 画像のみ */}</div>
      <div className="flex-1 flex justify-center items-center">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
