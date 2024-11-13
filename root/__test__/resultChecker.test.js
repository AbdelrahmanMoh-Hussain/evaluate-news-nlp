import { CheckPolarity } from "../src/js/resultChecker";

describe('Testing Container', () => {
     test('Test CheckPolarity() function', () => {
        expect(CheckPolarity("P+")).toBe("Positive");
        expect(CheckPolarity("P")).toBe("Positive");
        expect(CheckPolarity("N+")).toBe("Negative");
        expect(CheckPolarity("N")).toBe("Negative");
     });
}); 