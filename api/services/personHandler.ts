import { Person } from '../model/person';

export class PersonHandler {
	public Handle(name: string): Person {
		return {
			name: `hola ${name}`,
			id: 1
		};
	}
}
