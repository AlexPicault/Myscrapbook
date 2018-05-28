import { Injectable } from "@angular/core";
import { File } from '@ionic-native/file';

import { Event } from '../models/event';
import { AuthService } from "./auth";

declare var cordova: any;

@Injectable()
export class eventService {
    private events: Event[] = [];

    constructor(private http: Http, private authService: AuthService) { }

    addEvent(title: string, imageUrl: string, ) {
        const event = new Event(title, imageUrl);
        this.events.push(event);
    }

    getEvents() {
        return this.events.slice();
    }

    updateEvent(index: number, title: string, imageUrl: string) {
        this.events[index] = new Event(title, imageUrl);
    }

    removeEvent(index: number) {
        this.events.splice(index, 1);
    }

    storeEvent(token: string) {
        const userId = this.authService.getActiveUser().uid;
        return this.http.put('https://scrapbook-29036.firebaseio.com/ ' + userId + '/events.json?auth=' + token, this.events)
            .map((response: Response) => response.json);
    }

    fetchEvent(token: string) {
        const userId = this.authService.getActiveUser().uid;
        return this.http.get('https://scrapbook-29036.firebaseio.com/ ' + userId + '/events.json?auth=' + token, this.events)
            .map((response: Response) => {
                return response.json();
            })
            .do((events: Event[]) => {
                if (events) {
                    this.events = events;
                } else {
                    this.events = [];
                }
            });
    }
}