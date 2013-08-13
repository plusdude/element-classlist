(function (describe, it, expect) {
    /*jshint browser:true, maxlen:95*/
    "use strict";

    describe(".classList.item(index)", function () {
        var element = document.documentElement;

        describe("index", function () {
            it("Not specified (throws)", function () {
                function noArgs() {
                    return element.classList.item();
                }
                expect(noArgs).toThrow();
            });
            it("Integer", function () {
                var result = element.classList.item(1);
                expect(result).toBe("second");
            });
            it("-Integer", function () {
                var result = element.classList.item(-1);
                expect(result).toBe(null);
            });
        });
    });

    describe(".classList.contains(token)", function () {
        var element = document.documentElement;

        describe("token", function () {
            it("Not specified (throws)", function () {
                function noArgs() {
                    return element.classList.contains();
                }
                expect(noArgs).toThrow();
            });
            it("Empty string (throws)", function () {
                function emptyString() {
                    return element.classList.contains("");
                }
                expect(emptyString).toThrow();
            });
            it("String with spaces (throws)", function () {
                function spaceString() {
                    return element.classList.contains("test ");
                }
                expect(spaceString).toThrow();
            });
            it("Single token", function () {
                var result = element.classList.contains("second");
                expect(result).toBe(true);
            });
        });
    });

    describe(".classList.add(token[, tokenN..])", function () {
        var element = document.documentElement;

        describe("token", function () {
            it("Not specified (throws)", function () {
                function noArgs() {
                    return element.classList.add();
                }
                expect(noArgs).toThrow();
            });
            it("Empty string (throws)", function () {
                function emptyString() {
                    return element.classList.add("");
                }
                expect(emptyString).toThrow();
            });
            it("String with spaces (throws)", function () {
                function spaceString() {
                    return element.classList.add("test ");
                }
                expect(spaceString).toThrow();
            });
            it("Single token", function () {
                element.classList.add("third");
                expect(element.classList.contains("third")).toBe(true);
            });
            it("Multiple tokens", function () {
                element.classList.add("fourth", "fifth");
                expect(element.classList.contains("fourth")).toBe(true);
                expect(element.classList.contains("fifth")).toBe(true);
            });
        });
    });

    describe(".classList.remove(token[, tokenN..])", function () {
        var element = document.documentElement;

        describe("token", function () {
            it("Not specified (throws)", function () {
                function noArgs() {
                    return element.classList.remove();
                }
                expect(noArgs).toThrow();
            });
            it("Empty string (throws)", function () {
                function emptyString() {
                    return element.classList.remove("");
                }
                expect(emptyString).toThrow();
            });
            it("String with spaces (throws)", function () {
                function spaceString() {
                    return element.classList.remove("test ");
                }
                expect(spaceString).toThrow();
            });
            it("Single token", function () {
                element.classList.remove("first");
                expect(element.classList.contains("first")).toBe(false);
            });
            it("Multiple tokens", function () {
                element.classList.remove("second", "third");
                expect(element.classList.contains("second")).toBe(false);
                expect(element.classList.contains("third")).toBe(false);
            });
        });
    });

    describe(".classList.toggle(token[, force])", function () {
        var element = document.documentElement;

        describe("token", function () {
            it("Not specified (throws)", function () {
                function noArgs() {
                    return element.classList.toggle();
                }
                expect(noArgs).toThrow();
            });
            it("Empty string (throws)", function () {
                function emptyString() {
                    return element.classList.toggle("");
                }
                expect(emptyString).toThrow();
            });
            it("String with spaces (throws)", function () {
                function spaceString() {
                    return element.classList.toggle("test ");
                }
                expect(spaceString).toThrow();
            });
            it("Single token", function () {
                element.classList.toggle("second");
                expect(element.classList.contains("second")).toBe(true);
            });
            it("Single token and force", function () {
                element.classList.toggle("second", true);
                expect(element.classList.contains("second")).toBe(true);
            });
        });
    });

    describe(".classList.toString()", function () {
        var element = document.documentElement;

        it("An underlying string", function () {
            var result = element.classList.toString();
            expect(result).toBe(element.className);
        });
    });

}(this.describe, this.it, this.expect));
