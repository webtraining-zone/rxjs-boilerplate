import { from } from 'rxjs';

const observable = from([1, 2, 3]);

observable.subscribe(
    number => console.log(number),
    error => console.warn(error),
    () => console.log('Finished!'),
);