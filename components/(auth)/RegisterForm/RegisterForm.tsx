'use client';

import FormInput from '@/components/(auth)/FormInput/FormInput';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterFormProps } from '@/types/auth';
import { userCreateSchema } from '@/lib/validate';

const RegisterForm = () => {
  // 選択しているタブをuseStateで管理
  const [selectedTag, setSelectedTag] = useState('account');

  // フォームをReact Hook Formで管理
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormProps>({ resolver: zodResolver(userCreateSchema) });

  // 登録処理
  const onSubmit = (data: RegisterFormProps) => {
    console.log(data);
  };

  return (
    <>
      <Tabs value={selectedTag} onValueChange={setSelectedTag}>
        <div className="bg-gray-100 rounded-sm py-1 px-2 min-w-96">
          <TabsList className="flex justify-around">
            <TabsTrigger
              value="account"
              className={`flex-1 text-center ${selectedTag === 'account' ? 'bg-white border rounded py-1' : ''}`}
            >
              アカウント情報
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className={`flex-1 text-center ${selectedTag === 'password' ? 'bg-white border rounded py-1' : ''}`}
            >
              パスワード
            </TabsTrigger>
          </TabsList>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col border border-gray-300 shadow rounded-sm mt-4 p-4"
        >
          <TabsContent value="account">
            <FormInput
              id="name"
              type="text"
              placeholder="name"
              label="ユーザー名"
              register={register('name')}
              error={errors.name?.message}
            />
            <FormInput
              id="email"
              type="text"
              placeholder="email@example.com"
              label="メールアドレス"
              register={register('email')}
              error={errors.email?.message}
            />
            <Button className="mt-4 mb-4" onClick={() => setSelectedTag('password')}>
              パスワード登録へ
            </Button>
          </TabsContent>
          <TabsContent value="password">
            <FormInput
              id="password"
              type="password"
              placeholder="password"
              label="パスワード"
              register={register('password')}
              error={errors.password?.message}
            />
            <FormInput
              id="confirmedPassword"
              type="password"
              placeholder="password"
              label="確認用パスワード"
              register={register('confirmedPassword')}
              error={errors.confirmedPassword?.message}
            />
            <Button className="mt-4 mb-4" disabled={isSubmitting}>
              登録
            </Button>
          </TabsContent>
        </form>
      </Tabs>
    </>
  );
};

export default RegisterForm;
