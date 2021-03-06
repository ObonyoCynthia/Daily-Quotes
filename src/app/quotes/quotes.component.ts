import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[] = [
    new Quotes (1,'The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela','Kanye West', new Date(2021,6,16),0,0),
    new Quotes (2,'Love For All, Hatred For None','Khalifatul masih','Cynthia', new Date(2021,7,19),0,0),
    new Quotes (3,'We can do anything we want to if we stick to it long enough.','Hellen Keller','Daniella Spa', new Date(2021,8,23),0,0),
    new Quotes (4,'If Im gonna tell a real story, Im gonna start with my name.','Kendrick Lamar','Cynthia Obonyo', new Date(2021,9,7),0,0),
    new Quotes (5,'Wanting to be someone else is a waste of who you are.','Kurt Cobain','Moab', new Date(2021,10,12),0,0),
    new Quotes (6,'If the world was blind how many people would you impress?.',' Boonaa Mohammed','Rayse Kramer', new Date(2021,11,4),0,0),
    new Quotes (7,'Normality is a paved road: it’s comfortable to walk but no flowers grow.','Vincent van Gogh','Benson', new Date(2021,12,9),0,0),


  ];
  
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }
  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.datePosted = new Date(quote.datePosted)
    this.quotes.push(quote)
  }
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
