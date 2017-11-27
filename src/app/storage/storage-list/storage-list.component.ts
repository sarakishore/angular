import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../../alert';
import { Folder, Item, Secret } from '../model';
import { StorageService } from '../storage.service';

@Component({
    selector: 'app-storage-list',
    templateUrl: './storage-list.component.html',
    styleUrls: ['./storage-list.component.css']
})
export class StorageListComponent implements OnInit {
    constructor(
        private alert: AlertService,
        private router: Router,
        public storage: StorageService
    ) {}

    ngOnInit() {
        //
    }

    asSecret(item: Item): Secret {
        return item instanceof Secret ? item as Secret : null;
    }

    clickItem(item: Item) {
        const secret = this.asSecret(item);
        if (!secret) {
            return;
        }

        // copy to clipboard
        console.log(secret.getSecret());
        this.alert.success('Successfully copied to clipboard', 2000);
    }

    clickFolder(item: Item) {
        if (!(item instanceof Folder)) {
            return;
        }

        this.storage.openFolder(item as Folder);
        this.router.navigate(['/storage', this.storage.getPathAsString()]);
    }
}
