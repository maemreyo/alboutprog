interface Result {
    id: number;
    result: number;
}

const results: Result[] = [
    { id: 1, result: 64 },
    { id: 2, result: 64 },
    { id: 3, result: 64 },
    { id: 4, result: 64 },
]

// Imperative
const avg = (arr: Result[]) => {
    let total = 0;
    for (let index = 0; index < arr.length; index++) {
        total += arr[index].result        
    }
    return total / arr.length
}

const resultsAvg = avg(results);

// Not really Declarative
const add = (a: number, b: number) => a + b;
const division = (a: number, b: number) => a / b;

const _avg = (arr: Result[]) => division(arr.map(a => a.result).reduce(add, 0), arr.length)

const _resultsAvg = _avg(results)

// Declarative
const _add = (a: number, b: number) => a + b;
const _addMany = (...args: number[]) => args.reduce(add, 0);
const _divide = (a: number, b: number) => a / b;
const mapProp = <T>(k: keyof T, arr: T[]) => arr.map(a => a[k]);
const __avg = (arr: number[]) => _divide(_addMany(...arr), arr.length);

const __resultsAvg = __avg(mapProp("result", results));