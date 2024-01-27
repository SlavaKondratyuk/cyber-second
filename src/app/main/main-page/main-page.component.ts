import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faSquarePhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { faTelevision } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {
  faSquarePhoneFlip = faSquarePhoneFlip;
  faTelevision = faTelevision;
  faLaptop = faLaptop;
  mainLogo = 'assets/img/logo.png';
  aboutUnit = 'Департамент кіберполіції Національної поліції України є міжрегіональним територіальним органом Національної поліції України, який входить до структури кримінальної поліції Національної поліції та відповідно до законодавства України забезпечує реалізацію державної політики у сфері боротьби з кіберзлочинністю, організовує та здійснює відповідно до законодавства оперативно-розшукову діяльність.'

}
