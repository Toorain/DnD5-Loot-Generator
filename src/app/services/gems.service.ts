import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { GemsDb } from '../tab1/gemsObject.model';

@Injectable({
    providedIn: 'root'
})
export class GemsService {

    constructor(private http: HttpClient) {}

    private gems: GemsDb[] = [];
    public stuff$ = new Subject<GemsDb[]>();

    getGems(coinValue) {
        this.http.get('http://localhost:3000/api/gem/:' + coinValue.toString() + '').subscribe(
            (gems: GemsDb[]) => {
                if (gems) {
                    this.gems = gems;
                    this.emitGem();
                }
            },
            (error) => {
                console.log(error);
            }
        );
    }

    emitGem() {
        this.stuff$.next(this.gems);
    }

    /*getThingById(id: string) {
        return new Promise((resolve, reject) => {
            this.http.get('http://localhost:3000/api/gem/' + id).subscribe(
                (response) => {
                    resolve(response);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    createNewThing(gems: GemsDb) {
        return new Promise((resolve, reject) => {
            this.http.post('http://localhost:3000/api/gem', gems).subscribe(
                (response) => {
                    resolve(response);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    createNewThingWithFile(gems: GemsDb, image: File) {
        return new Promise((resolve, reject) => {
            const thingData = new FormData();
            thingData.append('thing', JSON.stringify(gems));
            thingData.append('image', image, gems.name);
            this.http.post('http://localhost:3000/api/gem', thingData).subscribe(
                (response) => {
                    resolve(response);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    modifyThing(id: string, gems: GemsDb) {
        return new Promise((resolve, reject) => {
            this.http.put('http://localhost:3000/api/gem/' + id, gems).subscribe(
                (response) => {
                    resolve(response);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    modifyThingWithFile(id: string, gems: GemsDb, image: File | string) {
        return new Promise((resolve, reject) => {
            let thingData: GemsDb | FormData;
            if (typeof image === 'string') {
                gems.color = image;
                thingData = gems;
            } else {
                thingData = new FormData();
                thingData.append('thing', JSON.stringify(gems));
                thingData.append('image', image, gems.name);
            }
            this.http.put('http://localhost:3000/api/gem/' + id, thingData).subscribe(
                (response) => {
                    resolve(response);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    deleteThing(id: string) {
        return new Promise((resolve, reject) => {
            this.http.delete('http://localhost:3000/api/gem/' + id).subscribe(
                (response) => {
                    resolve(response);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }*/
}
