import { Component, OnInit } from '@angular/core';
// import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlertController } from '@ionic/angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import '@capacitor-community/http';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  scanActive = false;
  result = null;

  constructor(private alertController: AlertController, public barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    //BarcodeScanner.prepare();
  }

  ngOnDestroy() {
    //BarcodeScanner.stopScan();
  }

  startScan = async () => {
    try {
      this.scanActive = true;
      this.barcodeScanner.scan().then(async(barcodeData:any) => {
        console.log('Barcode data', barcodeData);
        this.scanActive = false;
        this.result = barcodeData.text;
          const alert = await this.alertController.create({
            header: 'Scanning Successful',
            message: this.result,
            buttons: [{
              text: 'OKAY',
              role: 'Cancel'
            }
          ]
          })
           await alert.present();
        //   Barcode data {"cancelled":0,"text":"8413384010008","format":"EAN_13"}
      })

      // BarcodeScanner.hideBackground(); // make background of WebView transparent
      // this.scanActive = true;
      //   const result = await BarcodeScanner.startScan();
      //   if(result.hasContent) {
          // this.result = result.content;
          // const alert = await this.alertController.create({
          //   header: 'Scanning Successful',
          //   message: result.content,
          //   buttons: [{
          //     text: 'OKAY',
          //     role: 'Cancel'
          //   }
          // ]
          // })
          // await alert.present();
      //     this.scanActive = false;
      //   }
        
      // const allowed = await this.checkPermission();
      // if(allowed) {
      //   this.scanActive = true;
      //   const result = await BarcodeScanner.startScan();
      //   if(result.hasContent) {
      //     this.result = result.content;
      //     const alert = await this.alertController.create({
      //       header: 'Scanning Successful',
      //       message: result.content,
      //       buttons: [{
      //         text: 'OKAY',
      //         role: 'Cancel'
      //       }
      //     ]
      //     })
      //     await alert.present();
      //     this.scanActive = false;
      //   }
      // }
    } catch (error) {
      console.log(error)
    }
    
  };

  checkPermission = async () => {
    // return new Promise( async (resolve, reject) => {
    //   const status = await BarcodeScanner.checkPermission({ force: true});
    //   if(status.granted) {
    //     resolve(true);
    //   }
    //   else if(status.denied) {
    //     const alert = await this.alertController.create({
    //       header: 'No permission',
    //       message: 'Please allow camera access in your settings',
    //       buttons: [{
    //         text: 'No',
    //         role: 'Cancel'
    //       },
    //       {
    //         text: 'Open settings',
    //         handler: () => {
    //           BarcodeScanner.openAppSettings();
    //           resolve(false);
    //         }
    //       }
    //     ]
    //     })
    //     await alert.present();
    //   }
    //   else {
    //     resolve(false);
    //   }
    // })
  }

  stopScan = () => {
    try {
      // BarcodeScanner.showBackground();
      // BarcodeScanner.stopScan();
      this.scanActive = false;
    } catch (error) {
      console.log(error);
    }
  };

}
