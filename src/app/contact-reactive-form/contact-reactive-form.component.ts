import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive-form',
  templateUrl: './contact-reactive-form.component.html',
  styleUrls: ['./contact-reactive-form.component.css']
})
export class ContactReactiveFormComponent implements OnInit {
  rfContact: FormGroup;
  searchControl = new FormControl();
  constructor(private fb: FormBuilder) { 
  }

  ngOnInit() {
    // this.rfContact = new FormGroup({
    //   email: new FormControl(),
    //   name: new FormControl('',
    //   [Validators.required, Validators.minLength(3)]),
    //   social: new FormGroup({
    //     facebook: new FormControl(),
    //     instagram: new FormControl()
    //   }),
    //   tel: new FormControl(),
    // })
    // chúng ta thêm, xóa phần tử trong array như insert, push, removeAt. Hay phương thức at để lấy ra phần tử ở vị trí cụ thể.
    this.rfContact = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: this.fb.control(''),
      social: this.fb.group({
        facebook: this.fb.control('', [Validators.required, Validators.minLength(3)]),
        instagram: this.fb.control(''),
      }),
      // tel: this.fb.control('')
      tels: this.fb.array([
        this.fb.control('')
      ])
    });
    this.searchControl.valueChanges.subscribe(value => {
      // do search with value here
      console.log('searchControl',value);
    });
  }
  onSubmit() {
    console.log(this.rfContact);
    
  }

  get tels(): FormArray {
    return this.rfContact.get('tels') as FormArray;
  }
  
  addTel() {
    this.tels.push(this.fb.control(''));
  }
  
  removeTel(index: number) {
    this.tels.removeAt(index);
  }


}
