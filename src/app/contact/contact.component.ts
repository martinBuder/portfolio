import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public contactForm : FormGroup = new FormGroup({
    name: new FormControl ('', [
      Validators.required,
      Validators.minLength(4),
    ], []),
    email: new FormControl ('', [
      Validators.required,
      Validators.minLength(6),
      Validators.email,
    ], []),
    message: new FormControl ('', [
      Validators.required,
      Validators.minLength(4),
    ], []),
  });

  constructor() {
    this.contactForm.valueChanges.subscribe();
  }

@ViewChild('name') name !: ElementRef;
@ViewChild('email') email!: ElementRef;
@ViewChild('message') message!: ElementRef;
@ViewChild('sendBtn') sendBtn!: ElementRef;
@ViewChild('paperPlane') paperPlane!: ElementRef;


  async sendMessage() {
   let name = this.name.nativeElement;
   let email = this.email.nativeElement;
   let message = this.message.nativeElement;
   let sendBtn = this.sendBtn.nativeElement;
   let paperPlane = this.paperPlane.nativeElement;
   name.disabled = true;
   email.disabled = true;
   message.disabled = true;
   
   paperPlane.classList.add('sending');
   let formdata = new FormData;
   formdata.append('name', name.value);
   formdata.append('email', email.value);
   formdata.append('message', message.value);

   await fetch('https://designyourstage.com/sendMail/send_mail.php',
    {
      method: 'POST',
      body: formdata,
    }
   )

   sendBtn.innerHTML = 'Thanks, your Message is sent!';
   setTimeout(() => {
    sendBtn.innerHTML = 'Send message';
    name.disabled = false;
    name.value = '';
    email.disabled = false;
    email.value = '';
    message.disabled = false;
    message.value = '';
    paperPlane.classList.remove('sending');
     this.contactForm.reset();
   }, 3000)

  
  }
}
