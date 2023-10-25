// let skills= ['Bash', 'Counter', 'Healing', true, 123];
// let skills: string[] = ['Bash', 'Counter', 'Healing', true, 123];
const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string | undefined; // optional property can be undefined
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter', 'Healing'],
}

strider.hometown = 'Gondor';
console.table(strider)
export{};