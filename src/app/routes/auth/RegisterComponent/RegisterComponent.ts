import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'lab-register-component',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './RegisterComponent.html',
  styleUrl: './RegisterComponent.scss',
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  ngOnInit(): void {}

  constructor(fb: FormBuilder) {
    this.registerForm = fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }
}
