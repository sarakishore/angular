import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';

import { StorageActionsModule } from './storage-actions';
import { StorageApiService } from './storage-api.service';
import { StorageListComponent } from './storage-list';
import { StoragePathComponent } from './storage-path';
import { StorageRoutingModule } from './storage-routing.module';
import { StorageComponent } from './storage.component';
import { StorageService } from './storage.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        StorageActionsModule,
        StorageRoutingModule,
        ClipboardModule
    ],
    providers: [
        StorageService,
        StorageApiService
    ],
    declarations: [
        StoragePathComponent,
        StorageListComponent,
        StorageComponent
    ],
    exports: [
        StorageComponent
    ]
})
export class StorageModule { }
