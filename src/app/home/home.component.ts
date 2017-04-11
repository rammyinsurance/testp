import {
  Component,
  ElementRef,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { XLargeDirective } from './x-large';

//window["$"] = $;
//window["jQuery"] = $;
//import dt from 'datatables.net';


var $ = require('jquery');

var datatables = require("datatables.net");
var dtbootstrap = require("datatables.net-buttons");
import '../../assets/styles/vendor/datatables/css/dataTables.bootstrap.css';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'dupont-home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };
  // TypeScript public modifiers
  constructor(rootNode: ElementRef) {
    this.rootNode = rootNode;
    }


  public ngOnInit() {
    console.log('hello `Home` component');
    $.getScript('../../assets/js/vendor.js');
    $.getScript('../../assets/js/app.js');

            //$('.dataTables-dp').DataTable();

                    var el = $(this.rootNode.nativeElement).find('#ema')[0];
       // $('#ema').DataTable();

$('#ema').DataTable({
                pageLength: 10,
                responsive: true,
                "bPaginate": true,
        "bFilter": false,
        "bInfo": false,
                dom: '<"html5buttons"B>lTfgitp',
                buttons: [
                    { extend: 'copy'},
                    {extend: 'csv'},
                    {extend: 'excel', title: 'ExampleFile'},
                    {extend: 'pdf', title: 'ExampleFile'},

                    {extend: 'print',
                     customize: function (win){
                            $(win.document.body).addClass('white-bg');
                            $(win.document.body).css('font-size', '10px');

                            $(win.document.body).find('table')
                                    .addClass('compact')
                                    .css('font-size', 'inherit');
                    }
                    }
                ]

            });




  }

}
