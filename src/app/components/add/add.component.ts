import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  @Input() data: any;
  amount: number;

  constructor(
    private db: AngularFirestore,
    private popoverController: PopoverController
  ) {}

  ngOnInit() {
    console.log(this.data);
  }

  add() {
    console.log(this.amount);

    this.db
      .doc(`${this.data.type}/${this.data.id}`)
      .collection('add_transaction')
      .doc(Math.random().toString(36).slice(-12))
      .set({
        amount: this.amount,
        addedByType: localStorage.getItem('type'),
        addedByUid: localStorage.getItem('uid'),
      })
      .then(() => {
        if (this.data.amountInWallet === 0 || !this.data.amountInWallet)
          this.db.doc(`user/${this.data.id}`).update({
            amountInWallet: this.amount,
            equity: this.amount,
            free_margin: this.amount,
            margin: 0,
          });
        else {
          var prevAmount = this.data.amountInWallet;
          var prevEquity = this.data.equity;
          var prevFreeMargin = this.data.free_margin;

          this.db.doc(`user/${this.data.id}`).update({
            amountInWallet: prevAmount + this.amount,
            equity: prevEquity + this.amount,
            free_margin: prevFreeMargin + this.amount,
          });
        }

        this.popoverController.dismiss();
      })
      .catch((err) => console.log(err));
  }

  withdraw() {
    console.log(this.amount);

    this.db
      .doc(`${this.data.type}/${this.data.id}`)
      .collection('withdraw_transaction')
      .doc(Math.random().toString(36).slice(-12))
      .set({
        amount: this.amount,
        withdrawedByType: localStorage.getItem('type'),
        withdrawedByUid: localStorage.getItem('uid'),
      })
      .then(() => {
        var prevAmount = this.data.amountInWallet;

        if (this.data.amountInWallet === 0) return;
        else if (this.amount < prevAmount) {
          this.db.doc(`user/${this.data.id}`).update({
            amountInWallet: prevAmount - this.amount,
          });
        }

        this.popoverController.dismiss();
      })
      .catch((err) => console.log(err));
  }
}
