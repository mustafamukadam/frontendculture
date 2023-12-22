function toTitleCase(s){
	return s.split(" ").map(word => {
		return word.charAt(0).toUpperCase() + word.slice(1)
	}).join(" ")
}


describe("toTitleCase", () => {
    it("should capitalize the first letter of each word in a sentence", () => {
        expect(toTitleCase("hello world")).toBe("Hello World");
        expect(toTitleCase("this is a test")).toBe("This Is A Test");
        expect(toTitleCase("another example sentence")).toBe("Another Example Sentence");
    });

    it("should handle empty strings", () => {
        expect(toTitleCase("")).toBe("");
    });

    it("should handle strings with only one word", () => {
        expect(toTitleCase("hello")).toBe("Hello");
        expect(toTitleCase("world")).toBe("World");
    });

    it("should handle strings with numbers", () => {
        expect(toTitleCase("hello1 world2")).toBe("Hello1 World2");
        expect(toTitleCase("this3 is4 a5 test6")).toBe("This3 Is4 A5 Test6");
    });

    it("should handle strings with multiple spaces", () => {
        expect(toTitleCase("hello  world")).toBe("Hello  World");
        expect(toTitleCase("this  is  a  test")).toBe("This  Is  A  Test");
    });
});
