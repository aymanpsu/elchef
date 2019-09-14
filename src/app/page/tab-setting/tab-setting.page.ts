import { Component } from '@angular/core';
import { SettingProvider } from '../../provider/setting/setting';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-tab-setting',
  templateUrl: 'tab-setting.page.html',
  styleUrls: ['tab-setting.page.scss']
})


export class TabSettingPage {

	list_theme: any;
	values: string;

	constructor(private SettingProvider: SettingProvider) {
		this.list_theme = environment.themes;
	}

	onKeydownEvent(event:any){
		console.log("value:" + event.target.value);
		if(event.target.value == "milk"){
			console.log("here");
			document.getElementById("milk").style.display="block";
		}
	}

	changeTheme(name) {
  	this.SettingProvider.setTheme(name);
	}
}
