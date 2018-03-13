export interface PersonaIf {
    name: string;
    role: string;
    description: string;
    pic: string;
}

export class Persona implements PersonaIf {
    constructor(
        public name: string,
        public role: string,
        public description: string,
        public pic: string
    ) { }
}
