import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.scss']
})
export class ArrayFormComponent implements OnInit {

  myForm: FormGroup;
  level4Defects: Array<any> = [
    {
      'code': 1,
      'name': 'l4-Defect1'
    },
    {
      'code': 2,
      'name': 'L4-Defect2'
    },
    {
      'code': 3,
      'name': 'L4-Defect3'
    },
    {
      'code': 4,
      'name': 'L4-Defect4'
    },
    {
      'code': 5,
      'name': 'L4-Defect5'
    },
    {
      'code': 6,
      'name': 'L4-Defect6'
    }
  ]

  level3Defects: Array<any> = [
    {
      'code': 1,
      'name': 'L3-Defect1'
    },
    {
      'code': 2,
      'name': 'L3-Defect2'
    },
    {
      'code': 3,
      'name': 'L3-Defect3'
    },
    {
      'code': 4,
      'name': 'L3-Defect4'
    },
    {
      'code': 5,
      'name': 'L3-Defect5'
    },
    {
      'code': 6,
      'name': 'L3-Defect6'
    }
  ]

  selectedData = [ 
    { 'area': 'Aera2', 'prefix': 'A2', 'line': 'Line2', 'level4Defects': 2, 'level3Defects': 3 },
    { 'area': 'Area3', 'prefix': 'A1', 'line': 'Line3', 'level4Defects': 3, 'level3Defects': 5 } 
  ] 
  

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      phones: this.fb.array([])
    })
    this.populatePhoneData();
  }

  get phoneForms() {
    return this.myForm.get('phones') as FormArray
  }

  addPhone() {

    const phone = this.fb.group({ 
      area: [],
      prefix: [],
      line: [],
      level3Defects: [],
      level4Defects: [],
    })

    this.phoneForms.push(phone);
  }

  populatePhoneData() {
    for (const data of this.selectedData) {
      const phone = this.fb.group({
        area: [data.area],
        prefix: [data.prefix],
        line: [data.line],
        level3Defects: [data.level3Defects],
        level4Defects: [data.level4Defects]
      })
      this.phoneForms.push(phone);
    }
  }

  deletePhone(i) {
    this.phoneForms.removeAt(i)
  }

}
