import { z } from 'zod';

// ユーザー新規登録
export const userCreateSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: 'ユーザー名は必須項目です' })
      .max(20, { message: 'ユーザー名は20文字以下にしてください' })
      .refine((val) => val.trim().length > 0 && !/\s/.test(val), {
        message: 'ユーザー名に空白を含めることはできません',
      }),
    email: z.string().email({ message: 'メールアドレスの形式が正しくありません' }),
    password: z
      .string()
      .min(6, { message: 'パスワードは６文字以上にしてください' })
      .max(20, { message: 'パスワードは２０文字以内にしてください' })
      .refine((val) => val.trim().length > 0 && !/\s/.test(val), {
        message: 'パスワードに空白を含めることはできません',
      }),
    confirmedPassword: z
      .string()
      .min(1, { message: '確認用パスワードは必須項目です' })
      .refine((val) => val.trim().length > 0 && !/\s/.test(val), {
        message: '確認用パスワードに空白を含めることはできません',
      }),
  })
  .refine((data) => data.password === data.confirmedPassword, {
    message: 'パスワードが一致しません',
    path: ['confirmedPassword'],
  });

// ユーザーログイン
export const userLoginSchema = z.object({
  email: z.string().email({ message: 'メールアドレスの形式が正しくありません' }),
  password: z
    .string()
    .min(6, { message: 'パスワードは６文字以上にしてください' })
    .max(20, { message: 'パスワードは２０文字以内にしてください' })
    .refine((val) => val.trim().length > 0 && !/\s/.test(val), {
      message: 'パスワードに空白を含めることはできません',
    }),
});

// ユーザー情報編集
export const userEditSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'ユーザー名は必須項目です' })
    .max(20, { message: 'ユーザー名は２０文字以内にしてください' })
    .trim(),
});
