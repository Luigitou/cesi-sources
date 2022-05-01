export default class AmiService {

	getAmisSmall() {
		return fetch.get('demo/data/amis-small.json').then(res => res.json()).then(d => d.data);
	}

}
