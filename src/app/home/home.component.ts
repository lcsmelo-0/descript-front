import { Component } from '@angular/core';

import { User, Client, Reviser, Editor } from '@app/_models';
import { UserService, ClientService, ReviserService, EditorService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
  loading = false;
  user: User;
  client: Client;
  reviser: Reviser;
  editor: Editor;

  constructor(
    private userService: UserService,
    private clientService: ClientService,
    private reviserService: ReviserService,
    private editorService: EditorService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.userService.getUser().subscribe(user => {
      this.user = user
      if (user.client_id) {
        this.loading = false;
        this.clientService.getClient().subscribe(client => {
          this.client = client
        })
      }
      if (user.reviser_id) {
        this.loading = false;
        this.reviserService.getReviser().subscribe(reviser => {
          this.reviser = reviser
        })
      }
      if (user.editor_id) {
        this.loading = false;
        this.editorService.getEditor().subscribe(editor => {
          this.editor = editor
        })
      }
    })
  }
}
