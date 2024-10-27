import { UseFormRegisterReturn } from 'react-hook-form';

// ユーザー関連入力フォームコンポーネント(FormInput)のpropsの型
export interface FormInputProps {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string;
}

// ユーザー登録フォーム
export interface RegisterFormProps {
  name: string;
  email: string;
  password: string;
  confirmedPassword: string;
}
