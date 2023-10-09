import { Component, OnInit } from '@angular/core';

// npm install @capacitor/camera
import { Camera, CameraResultType } from '@capacitor/camera';

// npm install @capacitor/geolocation
import { Geolocation } from '@capacitor/geolocation';

// npm install @capacitor/device
import { Device } from '@capacitor/device';

// npm install @capacitor/toast
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit {

  image: any;
  photoFormat: any;
  location: any;

  devInfo: any;
  devId: any;
  devBat: any;
  devLang: any;

  constructor() { }

  ngOnInit() {

    Device.getInfo().then(x => this.devInfo = x);
    Device.getId().then(x => this.devId = x);
    Device.getBatteryInfo().then(x => this.devBat = x);
    Device.getLanguageTag().then(x => this.devLang = x);

  }

  /**
   * Obtém uma foto da API da câmera (Capacitor).
   * Referências: https://capacitorjs.com/docs/apis/camera
   **/
  getPhoto() {
    Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl
    }).then(x => {
      this.image = x.dataUrl;
      this.photoFormat = x.format;
      this.getLocation();
      Toast.show({ text: 'Foto salva com sucesso!', });
    })
  }

  /**
   * Obtém a localização atual do dispositivo.
   * Referências: https://ionicframework.com/docs/native/geolocation
   */
  getLocation() {
    Geolocation.getCurrentPosition()
      .then(c => {
        this.location = c.coords;
      })
  }

}
