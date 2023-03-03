import { Component, ElementRef, ViewChild } from '@angular/core';
import { MessagesService } from '../../services/messages/messages.service';


@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent {

  @ViewChild('gameConsole', { static: true }) myTextareaRef!: ElementRef<HTMLTextAreaElement>;

  public memo: string = "Game has started!"

  constructor(private messageService: MessagesService) {
    this.messageService.subject$.subscribe(message => this.newLine(message));
  }


  newLine(line: string) {
    this.memo += '\n' + line;
    const myTextarea = this.myTextareaRef.nativeElement;
    if (myTextarea.scrollHeight >= myTextarea.clientHeight) {
      myTextarea.scrollTop = myTextarea.scrollHeight - myTextarea.clientHeight;
    }
  }
}
