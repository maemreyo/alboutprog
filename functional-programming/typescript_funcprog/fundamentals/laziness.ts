const lazyFind = <T>(arr: T[], filter: (i: T) => boolean): T => {
    let hero: T | null = null;

    const proxy = new Proxy(
        {},
        {
            get: (_, prop) => {
                console.log("Filtering...");
                
                if (!hero) {
                    hero = arr.find(filter) || null;
                }
                return hero ? (hero as any)[prop] : null;
            }
        }
    )

    return proxy as any;
}

const heroes = [
    {
        name: "Spider man",
        age: 23,
    },
    {
        name: "Batman",
        age: 39
    }
];

console.log("A");
const spiderMan = lazyFind(heroes, (h) => h.name === "Spider man");
console.log("B");
console.log(spiderMan.name, spiderMan.age);
console.log("C");




