export interface AuthResponse {
  access_token: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface ForgotPasswordDto {
  email: string;
}

export interface SignupDto {
  name: string;
  lastname: string;
  email: string;
  password: string;
}

