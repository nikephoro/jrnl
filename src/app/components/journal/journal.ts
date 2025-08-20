import { Component } from '@angular/core';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.html',
  styleUrls: ['./journal.css']
})
export class Journal {
  wordCount = 0;
  currentEntry = '';

  updateWordCount() {
    this.wordCount = this.currentEntry.trim() ? 
      this.currentEntry.trim().split(/\s+/).length : 0;
  }

  saveEntry() {
    // Προσωρινή λειτουργικότητα - θα συνδεθεί με το backend
    console.log('Entry saved:', this.currentEntry);
    alert('Η εγγραφή αποθηκεύτηκε!');
  }
}