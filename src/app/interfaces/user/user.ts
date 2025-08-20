export interface User {
  id?: string; // Προαιρετικό για νέες εγγραφές
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  birthYear: number;
  gender: string;
  createdAt?: Date; // Αυτόματη τιμή από backend
  updatedAt?: Date; // Αυτόματη τιμή από backend
}

export enum Gender {
  MALE = 'Άνδρας',
  FEMALE = 'Γυναίκα',
  OTHER = 'Άλλο',
  PREFER_NOT_TO_SAY = 'Δεν απαντώ'
}