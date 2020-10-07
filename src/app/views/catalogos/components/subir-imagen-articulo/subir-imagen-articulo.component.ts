import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material';
import { FileUploader } from 'ng2-file-upload';
import { environment } from './../../../../../environments/environment';

@Component({
  selector: 'app-subir-imagen-articulo',
  templateUrl: './subir-imagen-articulo.component.html',
  styleUrls: ['./subir-imagen-articulo.component.scss']
})
export class SubirImagenArticuloComponent implements OnInit {
  public uploaderArchivo: FileUploader = new FileUploader({ url: '' });
  public hasBaseDropZoneOver: boolean = false;

  rutaServer: string;
  rutaImg: string;
  host: string;
  loadingFile = false;

  constructor(
    private snackBar: MatSnackBar,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomSheetRef: MatBottomSheetRef<SubirImagenArticuloComponent>,
    
  ) { }
  
  ngOnInit() {
    this.initUploadCatalogo();
    console.log(this.data.idArticulo);
    console.log(this.data.idUsuario);
    // this.bottomSheetRef.dismiss();
  }

  initUploadCatalogo() {
    this.rutaServer = environment.rutaServer;
    // this.rutaImg = environment.imageServe;
    // this.host = environment.host;

    const headers = [{ name: 'Accept', value: 'application/json'}];
    this.uploaderArchivo = new FileUploader({ url: this.rutaServer + 'catalog/uploadImageArticle', autoUpload: true, headers: headers });
    this.uploaderArchivo.onBuildItemForm = (fileItem: any, form: any) => {
      form.append('idEmploye', this.data.idUsuario);
      form.append('idArticle', this.data.idArticulo);
      this.loadingFile = true;
      console.log(this.loadingFile);
    };

    this.uploaderArchivo.uploadAll();
    this.uploaderArchivo.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.loadingFile = false;
      // console.log(item);
      console.log(response);
      const result = JSON.parse(response);
      console.log(result);

      if (result != undefined) {
        if(result.noEstatus === 5) {
          // this.obraService.getArchivosValidosObraObservable(this.data.idObra);
          this.useAlerts(result.mensaje, ' ', 'success-dialog');
        } else {
          this.useAlerts(result.mensaje, ' ', 'error-dialog');
        }
      } else {
        this.useAlerts('Ocurrio un error, favor de reportar', ' ', 'error-dialog');
      }

      this.bottomSheetRef.dismiss(); 
    };

  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  useAlerts(message, action, className){
    this.snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      panelClass: [className]
    });
  }

}
