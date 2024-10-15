import { Component, OnInit } from '@angular/core';
import { Sucursal } from 'src/app/Models/sucursal';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceSucursalService } from '../../Services/service-sucursal.service';
import { Moneda } from 'src/app/Models/moneda';
import { ServiceMonedaService } from 'src/app/Services/service-moneda.service';

@Component({
  selector: 'app-lista-sucursales',
  templateUrl: './lista-sucursales.component.html',
  styleUrls: ['./lista-sucursales.component.css']
})
export class ListaSucursalesComponent implements OnInit {

  sucursales: Sucursal[] = []
  monedas: Moneda[] = []
  selectSucursal?: Sucursal
  sucursalForm!: FormGroup
  sucurs: Sucursal = new Sucursal()

  constructor
  (private sucursalService: ServiceSucursalService,
   private monedaService: ServiceMonedaService,
   private fb: FormBuilder
  )
  {
    this.sucursalForm = this.fb.group({
      codigo: [''],
      descripcion: [''],
      direccion: [''],
      identificacion: [''],
      moneda: ['']
    });
    this.sucurs.fechaCreacion = new Date()
    console.log(this.sucurs)
  }

  ngOnInit(): void {
    this.cargarSucursales()
    this.cargarMonedas()
  }

  cargarMonedas(){
    this.monedaService.getMonedas().subscribe(data => {
      this.monedas = data
      console.log(this.monedas)
    })
  }

  cargarSucursales(){
    this.sucursalService.getSucursales().subscribe(data => {
      this.sucursales = data
      console.log(data)
    })
  }

  crearSucursal(){
    const sucursalN: Sucursal = this.sucursalForm.value
    this.sucursalService.createSucursal(sucursalN).subscribe((sucursal) => {
      this.sucursales.push(sucursal)
      this.sucursalForm.reset()
    })
  }

  editarSucursal(codigo: number){
    this.sucursalService.getSucursal(codigo).subscribe(data => {
      this.selectSucursal = data
      this.sucursalForm.patchValue(data)
    })
  }

  actualizarSucursal(){
    if(this.selectSucursal){
      const updateSucursal: Sucursal = {
        ...this.selectSucursal,
        ...this.sucursalForm.value
      }

      this.sucursalService.updateSucursal(updateSucursal).subscribe(() => {
        const ind = this.sucursales.findIndex(s => s.codigo === updateSucursal.codigo)
        this.sucursales[ind] = updateSucursal
        this.selectSucursal = undefined
        this.sucursalForm.reset()
      })
    }
  }

  eliminarSucursal(codigo: number){
    this.sucursalService.deleteSucursal(codigo).subscribe(() => {
      this.sucursales = this.sucursales.filter(s => s.codigo !== codigo)
    })
  }
}
