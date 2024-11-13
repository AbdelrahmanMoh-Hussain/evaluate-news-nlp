import { CheckIfEmpty } from "../src/js/checkInputFiled";

describe('Testing', () => {
     test('Test', () => {
        expect(CheckIfEmpty("1")).toBe(false);
        expect(CheckIfEmpty("a")).toBe(false);
     });
}); 