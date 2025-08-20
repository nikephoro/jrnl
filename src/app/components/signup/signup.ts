import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-signup',
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class Signup {
  private fb = inject(FormBuilder);
  
  // Προσθήκη ιδιοτήτων για τα έτη
  currentYear: number;
  minBirthYear: number;
  
  genders = ['Άνδρας', 'Γυναίκα', 'Άλλο', 'Δεν απαντώ'];
  signupForm: FormGroup;

  constructor() {
    // Υπολογισμός ετών στον constructor
    this.currentYear = new Date().getFullYear();
    this.minBirthYear = this.currentYear - 13;
    
    this.signupForm = this.createForm();
  }

  createForm() {
    return this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      birthYear: [null, [
        Validators.required,
        Validators.min(1900),
        Validators.max(this.minBirthYear) // Χρήση της ιδιότητας
      ]],
      gender: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form Data:', this.signupForm.value);
    }
  }
}