import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { GalleryModalComponent } from '../../component/gallery/gallery-modal/gallery-modal.component';


@Component({
	selector: 'app-tab-home',
	templateUrl: 'tab-home.page.html',
	styleUrls: ['tab-home.page.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class TabHomePage {

	slideOpts = {
		effect: 'flip',
		autoHeight: true,
		speed: 1000,
		spaceBetween: 15,
		loop: true,
		slidesPerView: 3,
		autoplay: {
			delay: 5000,
		},
	};

	constructor(public modalController: ModalController) { }

	viewImg(item) {
		this.presentModal(item);
	}

	async presentModal(item) {
		const modal = await this.modalController.create({
			component: GalleryModalComponent,
			componentProps: { data_gallery: item }
		});
		return await modal.present();
	}
}
